import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ComplianceReportDomainFacade } from '@server/modules/complianceReport/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ComplianceReportApplicationEvent } from './complianceReport.application.event'
import { ComplianceReportCreateDto } from './complianceReport.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class ComplianceReportBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private complianceReportDomainFacade: ComplianceReportDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/complianceReports')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items =
      await this.complianceReportDomainFacade.findManyBySiemSolution(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/complianceReports')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: ComplianceReportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.complianceReportDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ComplianceReportApplicationEvent.ComplianceReportCreated.Payload>(
      ComplianceReportApplicationEvent.ComplianceReportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
