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
  SiemSolution,
  SiemSolutionDomainFacade,
} from '@server/modules/siemSolution/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { SiemSolutionApplicationEvent } from './siemSolution.application.event'
import {
  SiemSolutionCreateDto,
  SiemSolutionUpdateDto,
} from './siemSolution.dto'

@Controller('/v1/siemSolutions')
export class SiemSolutionController {
  constructor(
    private eventService: EventService,
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.siemSolutionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: SiemSolutionCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.siemSolutionDomainFacade.create(body)

    await this.eventService.emit<SiemSolutionApplicationEvent.SiemSolutionCreated.Payload>(
      SiemSolutionApplicationEvent.SiemSolutionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:siemSolutionId')
  async findOne(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.siemSolutionDomainFacade.findOneByIdOrFail(
      siemSolutionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:siemSolutionId')
  async update(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: SiemSolutionUpdateDto,
  ) {
    const item =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const itemUpdated = await this.siemSolutionDomainFacade.update(
      item,
      body as Partial<SiemSolution>,
    )
    return itemUpdated
  }

  @Delete('/:siemSolutionId')
  async delete(@Param('siemSolutionId') siemSolutionId: string) {
    const item =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    await this.siemSolutionDomainFacade.delete(item)

    return item
  }
}
