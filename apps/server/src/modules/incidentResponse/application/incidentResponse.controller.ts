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
  IncidentResponse,
  IncidentResponseDomainFacade,
} from '@server/modules/incidentResponse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { IncidentResponseApplicationEvent } from './incidentResponse.application.event'
import {
  IncidentResponseCreateDto,
  IncidentResponseUpdateDto,
} from './incidentResponse.dto'

@Controller('/v1/incidentResponses')
export class IncidentResponseController {
  constructor(
    private eventService: EventService,
    private incidentResponseDomainFacade: IncidentResponseDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.incidentResponseDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: IncidentResponseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.incidentResponseDomainFacade.create(body)

    await this.eventService.emit<IncidentResponseApplicationEvent.IncidentResponseCreated.Payload>(
      IncidentResponseApplicationEvent.IncidentResponseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:incidentResponseId')
  async findOne(
    @Param('incidentResponseId') incidentResponseId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.incidentResponseDomainFacade.findOneByIdOrFail(
      incidentResponseId,
      queryOptions,
    )

    return item
  }

  @Patch('/:incidentResponseId')
  async update(
    @Param('incidentResponseId') incidentResponseId: string,
    @Body() body: IncidentResponseUpdateDto,
  ) {
    const item =
      await this.incidentResponseDomainFacade.findOneByIdOrFail(
        incidentResponseId,
      )

    const itemUpdated = await this.incidentResponseDomainFacade.update(
      item,
      body as Partial<IncidentResponse>,
    )
    return itemUpdated
  }

  @Delete('/:incidentResponseId')
  async delete(@Param('incidentResponseId') incidentResponseId: string) {
    const item =
      await this.incidentResponseDomainFacade.findOneByIdOrFail(
        incidentResponseId,
      )

    await this.incidentResponseDomainFacade.delete(item)

    return item
  }
}
