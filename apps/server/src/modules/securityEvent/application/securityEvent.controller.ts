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
  SecurityEvent,
  SecurityEventDomainFacade,
} from '@server/modules/securityEvent/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { SecurityEventApplicationEvent } from './securityEvent.application.event'
import {
  SecurityEventCreateDto,
  SecurityEventUpdateDto,
} from './securityEvent.dto'

@Controller('/v1/securityEvents')
export class SecurityEventController {
  constructor(
    private eventService: EventService,
    private securityEventDomainFacade: SecurityEventDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.securityEventDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: SecurityEventCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.securityEventDomainFacade.create(body)

    await this.eventService.emit<SecurityEventApplicationEvent.SecurityEventCreated.Payload>(
      SecurityEventApplicationEvent.SecurityEventCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:securityEventId')
  async findOne(
    @Param('securityEventId') securityEventId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.securityEventDomainFacade.findOneByIdOrFail(
      securityEventId,
      queryOptions,
    )

    return item
  }

  @Patch('/:securityEventId')
  async update(
    @Param('securityEventId') securityEventId: string,
    @Body() body: SecurityEventUpdateDto,
  ) {
    const item =
      await this.securityEventDomainFacade.findOneByIdOrFail(securityEventId)

    const itemUpdated = await this.securityEventDomainFacade.update(
      item,
      body as Partial<SecurityEvent>,
    )
    return itemUpdated
  }

  @Delete('/:securityEventId')
  async delete(@Param('securityEventId') securityEventId: string) {
    const item =
      await this.securityEventDomainFacade.findOneByIdOrFail(securityEventId)

    await this.securityEventDomainFacade.delete(item)

    return item
  }
}
