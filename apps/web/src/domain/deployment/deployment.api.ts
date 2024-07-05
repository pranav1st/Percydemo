import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Deployment } from './deployment.model'

export class DeploymentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Deployment>,
  ): Promise<Deployment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/deployments${buildOptions}`)
  }

  static findOne(
    deploymentId: string,
    queryOptions?: ApiHelper.QueryOptions<Deployment>,
  ): Promise<Deployment> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/deployments/${deploymentId}${buildOptions}`)
  }

  static createOne(values: Partial<Deployment>): Promise<Deployment> {
    return HttpService.api.post(`/v1/deployments`, values)
  }

  static updateOne(
    deploymentId: string,
    values: Partial<Deployment>,
  ): Promise<Deployment> {
    return HttpService.api.patch(`/v1/deployments/${deploymentId}`, values)
  }

  static deleteOne(deploymentId: string): Promise<void> {
    return HttpService.api.delete(`/v1/deployments/${deploymentId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<Deployment>,
  ): Promise<Deployment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/deployments${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<Deployment>,
  ): Promise<Deployment> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/deployments`,
      values,
    )
  }
}
