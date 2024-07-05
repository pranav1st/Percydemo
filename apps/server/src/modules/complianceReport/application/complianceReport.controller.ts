import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  ComplianceReport,
  ComplianceReportDomainFacade,
} from '@server/modules/complianceReport/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ComplianceReportApplicationEvent } from './complianceReport.application.event'
import {
  ComplianceReportCreateDto,
  ComplianceReportUpdateDto,
} from './complianceReport.dto'

@Controller('/v1/complianceReports')
export class ComplianceReportController {
  constructor(
    private eventService: EventService,
    private complianceReportDomainFacade: ComplianceReportDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.complianceReportDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ComplianceReportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.complianceReportDomainFacade.create(body)

    await this.eventService.emit<ComplianceReportApplicationEvent.ComplianceReportCreated.Payload>(
      ComplianceReportApplicationEvent.ComplianceReportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:complianceReportId')
  async findOne(
    @Param('complianceReportId') complianceReportId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.complianceReportDomainFacade.findOneByIdOrFail(
      complianceReportId,
      queryOptions,
    )

    return item
  }

  @Patch('/:complianceReportId')
  async update(
    @Param('complianceReportId') complianceReportId: string,
    @Body() body: ComplianceReportUpdateDto,
  ) {
    const item =
      await this.complianceReportDomainFacade.findOneByIdOrFail(
        complianceReportId,
      )

    const itemUpdated = await this.complianceReportDomainFacade.update(
      item,
      body as Partial<ComplianceReport>,
    )
    return itemUpdated
  }

  @Delete('/:complianceReportId')
  async delete(@Param('complianceReportId') complianceReportId: string) {
    const item =
      await this.complianceReportDomainFacade.findOneByIdOrFail(
        complianceReportId,
      )

    await this.complianceReportDomainFacade.delete(item)

    return item
  }
}
