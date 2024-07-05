import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { SiemSolution } from './siemSolution.model'

export class SiemSolutionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<SiemSolution>,
  ): Promise<SiemSolution[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/siemSolutions${buildOptions}`)
  }

  static findOne(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<SiemSolution>,
  ): Promise<SiemSolution> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/${siemSolutionId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<SiemSolution>): Promise<SiemSolution> {
    return HttpService.api.post(`/v1/siemSolutions`, values)
  }

  static updateOne(
    siemSolutionId: string,
    values: Partial<SiemSolution>,
  ): Promise<SiemSolution> {
    return HttpService.api.patch(`/v1/siemSolutions/${siemSolutionId}`, values)
  }

  static deleteOne(siemSolutionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/siemSolutions/${siemSolutionId}`)
  }
}
