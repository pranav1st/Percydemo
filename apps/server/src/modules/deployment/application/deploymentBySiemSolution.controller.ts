import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { DeploymentDomainFacade } from '@server/modules/deployment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { DeploymentApplicationEvent } from './deployment.application.event'
import { DeploymentCreateDto } from './deployment.dto'

import { SiemSolutionDomainFacade } from '../../siemSolution/domain'

@Controller('/v1/siemSolutions')
export class DeploymentBySiemSolutionController {
  constructor(
    private siemSolutionDomainFacade: SiemSolutionDomainFacade,

    private deploymentDomainFacade: DeploymentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/siemSolution/:siemSolutionId/deployments')
  async findManySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.siemSolutionDomainFacade.findOneByIdOrFail(siemSolutionId)

    const items = await this.deploymentDomainFacade.findManyBySiemSolution(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/siemSolution/:siemSolutionId/deployments')
  async createBySiemSolutionId(
    @Param('siemSolutionId') siemSolutionId: string,
    @Body() body: DeploymentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, siemSolutionId }

    const item = await this.deploymentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<DeploymentApplicationEvent.DeploymentCreated.Payload>(
      DeploymentApplicationEvent.DeploymentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
