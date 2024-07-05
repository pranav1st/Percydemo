import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ResourceAllocationDomainFacade } from '@server/modules/resourceAllocation/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ResourceAllocationApplicationEvent } from './resourceAllocation.application.event'
import { ResourceAllocationCreateDto } from './resourceAllocation.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class ResourceAllocationBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private resourceAllocationDomainFacade: ResourceAllocationDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/resourceAllocations')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items =
      await this.resourceAllocationDomainFacade.findManyBySiemSolution(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/resourceAllocations')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: ResourceAllocationCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.resourceAllocationDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ResourceAllocationApplicationEvent.ResourceAllocationCreated.Payload>(
      ResourceAllocationApplicationEvent.ResourceAllocationCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
