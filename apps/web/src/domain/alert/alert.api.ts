import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Alert } from './alert.model'

export class AlertApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Alert>,
  ): Promise<Alert[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/alerts${buildOptions}`)
  }

  static findOne(
    alertId: string,
    queryOptions?: ApiHelper.QueryOptions<Alert>,
  ): Promise<Alert> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/alerts/${alertId}${buildOptions}`)
  }

  static createOne(values: Partial<Alert>): Promise<Alert> {
    return HttpService.api.post(`/v1/alerts`, values)
  }

  static updateOne(alertId: string, values: Partial<Alert>): Promise<Alert> {
    return HttpService.api.patch(`/v1/alerts/${alertId}`, values)
  }

  static deleteOne(alertId: string): Promise<void> {
    return HttpService.api.delete(`/v1/alerts/${alertId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<Alert>,
  ): Promise<Alert[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/alerts${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<Alert>,
  ): Promise<Alert> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/alerts`,
      values,
    )
  }
}
