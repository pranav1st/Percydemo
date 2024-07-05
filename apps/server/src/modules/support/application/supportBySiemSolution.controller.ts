import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { SupportDomainFacade } from '@server/modules/support/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { SupportApplicationEvent } from './support.application.event'
import { SupportCreateDto } from './support.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class SupportBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private supportDomainFacade: SupportDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/supports')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items = await this.supportDomainFacade.findManyBySiemSolution(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/supports')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: SupportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.supportDomainFacade.create(valuesUpdated)

    await this.eventService.emit<SupportApplicationEvent.SupportCreated.Payload>(
      SupportApplicationEvent.SupportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
