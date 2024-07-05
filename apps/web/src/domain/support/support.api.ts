import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Support } from './support.model'

export class SupportApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Support>,
  ): Promise<Support[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/supports${buildOptions}`)
  }

  static findOne(
    supportId: string,
    queryOptions?: ApiHelper.QueryOptions<Support>,
  ): Promise<Support> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/supports/${supportId}${buildOptions}`)
  }

  static createOne(values: Partial<Support>): Promise<Support> {
    return HttpService.api.post(`/v1/supports`, values)
  }

  static updateOne(
    supportId: string,
    values: Partial<Support>,
  ): Promise<Support> {
    return HttpService.api.patch(`/v1/supports/${supportId}`, values)
  }

  static deleteOne(supportId: string): Promise<void> {
    return HttpService.api.delete(`/v1/supports/${supportId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<Support>,
  ): Promise<Support[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/supports${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<Support>,
  ): Promise<Support> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/supports`,
      values,
    )
  }
}
