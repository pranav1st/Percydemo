import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TrainingDomainFacade } from '@server/modules/training/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TrainingApplicationEvent } from './training.application.event'
import { TrainingCreateDto } from './training.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class TrainingBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private trainingDomainFacade: TrainingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/trainings')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items = await this.trainingDomainFacade.findManyBySiemSolution(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/trainings')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: TrainingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.trainingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TrainingApplicationEvent.TrainingCreated.Payload>(
      TrainingApplicationEvent.TrainingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
