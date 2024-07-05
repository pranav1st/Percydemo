import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { IncidentResponseDomainFacade } from '@server/modules/incidentResponse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { IncidentResponseApplicationEvent } from './incidentResponse.application.event'
import { IncidentResponseCreateDto } from './incidentResponse.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class IncidentResponseBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private incidentResponseDomainFacade: IncidentResponseDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/incidentResponses')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items =
      await this.incidentResponseDomainFacade.findManyBySiemSolution(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/incidentResponses')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: IncidentResponseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.incidentResponseDomainFacade.create(valuesUpdated)

    await this.eventService.emit<IncidentResponseApplicationEvent.IncidentResponseCreated.Payload>(
      IncidentResponseApplicationEvent.IncidentResponseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
