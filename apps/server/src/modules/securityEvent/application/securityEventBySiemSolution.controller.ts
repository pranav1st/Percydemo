import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { SecurityEventDomainFacade } from '@server/modules/securityEvent/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { SecurityEventApplicationEvent } from './securityEvent.application.event'
import { SecurityEventCreateDto } from './securityEvent.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class SecurityEventBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private securityEventDomainFacade: SecurityEventDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/securityEvents')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items = await this.securityEventDomainFacade.findManyBySiemSolution(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/securityEvents')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: SecurityEventCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.securityEventDomainFacade.create(valuesUpdated)

    await this.eventService.emit<SecurityEventApplicationEvent.SecurityEventCreated.Payload>(
      SecurityEventApplicationEvent.SecurityEventCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
