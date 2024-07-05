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
import { Training, TrainingDomainFacade } from '@server/modules/training/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TrainingApplicationEvent } from './training.application.event'
import { TrainingCreateDto, TrainingUpdateDto } from './training.dto'

@Controller('/v1/trainings')
export class TrainingController {
  constructor(
    private eventService: EventService,
    private trainingDomainFacade: TrainingDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.trainingDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TrainingCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.trainingDomainFacade.create(body)

    await this.eventService.emit<TrainingApplicationEvent.TrainingCreated.Payload>(
      TrainingApplicationEvent.TrainingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:trainingId')
  async findOne(
    @Param('trainingId') trainingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.trainingDomainFacade.findOneByIdOrFail(
      trainingId,
      queryOptions,
    )

    return item
  }

  @Patch('/:trainingId')
  async update(
    @Param('trainingId') trainingId: string,
    @Body() body: TrainingUpdateDto,
  ) {
    const item = await this.trainingDomainFacade.findOneByIdOrFail(trainingId)

    const itemUpdated = await this.trainingDomainFacade.update(
      item,
      body as Partial<Training>,
    )
    return itemUpdated
  }

  @Delete('/:trainingId')
  async delete(@Param('trainingId') trainingId: string) {
    const item = await this.trainingDomainFacade.findOneByIdOrFail(trainingId)

    await this.trainingDomainFacade.delete(item)

    return item
  }
}
