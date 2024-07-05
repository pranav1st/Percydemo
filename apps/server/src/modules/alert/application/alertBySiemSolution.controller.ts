import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AlertDomainFacade } from '@server/modules/alert/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AlertApplicationEvent } from './alert.application.event'
import { AlertCreateDto } from './alert.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class AlertBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private alertDomainFacade: AlertDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/alerts')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items = await this.alertDomainFacade.findManyBySiemSolution(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/alerts')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: AlertCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.alertDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AlertApplicationEvent.AlertCreated.Payload>(
      AlertApplicationEvent.AlertCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
