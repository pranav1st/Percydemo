import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ResourceAllocation } from './resourceAllocation.model'

export class ResourceAllocationApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ResourceAllocation>,
  ): Promise<ResourceAllocation[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/resourceAllocations${buildOptions}`)
  }

  static findOne(
    resourceAllocationId: string,
    queryOptions?: ApiHelper.QueryOptions<ResourceAllocation>,
  ): Promise<ResourceAllocation> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/resourceAllocations/${resourceAllocationId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<ResourceAllocation>,
  ): Promise<ResourceAllocation> {
    return HttpService.api.post(`/v1/resourceAllocations`, values)
  }

  static updateOne(
    resourceAllocationId: string,
    values: Partial<ResourceAllocation>,
  ): Promise<ResourceAllocation> {
    return HttpService.api.patch(
      `/v1/resourceAllocations/${resourceAllocationId}`,
      values,
    )
  }

  static deleteOne(resourceAllocationId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/resourceAllocations/${resourceAllocationId}`,
    )
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<ResourceAllocation>,
  ): Promise<ResourceAllocation[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/resourceAllocations${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<ResourceAllocation>,
  ): Promise<ResourceAllocation> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/resourceAllocations`,
      values,
    )
  }
}
