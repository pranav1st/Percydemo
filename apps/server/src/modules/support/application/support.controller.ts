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
import { Support, SupportDomainFacade } from '@server/modules/support/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { SupportApplicationEvent } from './support.application.event'
import { SupportCreateDto, SupportUpdateDto } from './support.dto'

@Controller('/v1/supports')
export class SupportController {
  constructor(
    private eventService: EventService,
    private supportDomainFacade: SupportDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.supportDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: SupportCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.supportDomainFacade.create(body)

    await this.eventService.emit<SupportApplicationEvent.SupportCreated.Payload>(
      SupportApplicationEvent.SupportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:supportId')
  async findOne(
    @Param('supportId') supportId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.supportDomainFacade.findOneByIdOrFail(
      supportId,
      queryOptions,
    )

    return item
  }

  @Patch('/:supportId')
  async update(
    @Param('supportId') supportId: string,
    @Body() body: SupportUpdateDto,
  ) {
    const item = await this.supportDomainFacade.findOneByIdOrFail(supportId)

    const itemUpdated = await this.supportDomainFacade.update(
      item,
      body as Partial<Support>,
    )
    return itemUpdated
  }

  @Delete('/:supportId')
  async delete(@Param('supportId') supportId: string) {
    const item = await this.supportDomainFacade.findOneByIdOrFail(supportId)

    await this.supportDomainFacade.delete(item)

    return item
  }
}
