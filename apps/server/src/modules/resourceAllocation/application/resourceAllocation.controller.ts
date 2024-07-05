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
  ResourceAllocation,
  ResourceAllocationDomainFacade,
} from '@server/modules/resourceAllocation/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ResourceAllocationApplicationEvent } from './resourceAllocation.application.event'
import {
  ResourceAllocationCreateDto,
  ResourceAllocationUpdateDto,
} from './resourceAllocation.dto'

@Controller('/v1/resourceAllocations')
export class ResourceAllocationController {
  constructor(
    private eventService: EventService,
    private resourceAllocationDomainFacade: ResourceAllocationDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.resourceAllocationDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ResourceAllocationCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.resourceAllocationDomainFacade.create(body)

    await this.eventService.emit<ResourceAllocationApplicationEvent.ResourceAllocationCreated.Payload>(
      ResourceAllocationApplicationEvent.ResourceAllocationCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:resourceAllocationId')
  async findOne(
    @Param('resourceAllocationId') resourceAllocationId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.resourceAllocationDomainFacade.findOneByIdOrFail(
      resourceAllocationId,
      queryOptions,
    )

    return item
  }

  @Patch('/:resourceAllocationId')
  async update(
    @Param('resourceAllocationId') resourceAllocationId: string,
    @Body() body: ResourceAllocationUpdateDto,
  ) {
    const item =
      await this.resourceAllocationDomainFacade.findOneByIdOrFail(
        resourceAllocationId,
      )

    const itemUpdated = await this.resourceAllocationDomainFacade.update(
      item,
      body as Partial<ResourceAllocation>,
    )
    return itemUpdated
  }

  @Delete('/:resourceAllocationId')
  async delete(@Param('resourceAllocationId') resourceAllocationId: string) {
    const item =
      await this.resourceAllocationDomainFacade.findOneByIdOrFail(
        resourceAllocationId,
      )

    await this.resourceAllocationDomainFacade.delete(item)

    return item
  }
}
