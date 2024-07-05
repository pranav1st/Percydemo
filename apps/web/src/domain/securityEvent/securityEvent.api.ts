import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { SecurityEvent } from './securityEvent.model'

export class SecurityEventApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<SecurityEvent>,
  ): Promise<SecurityEvent[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/securityEvents${buildOptions}`)
  }

  static findOne(
    securityEventId: string,
    queryOptions?: ApiHelper.QueryOptions<SecurityEvent>,
  ): Promise<SecurityEvent> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/securityEvents/${securityEventId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<SecurityEvent>): Promise<SecurityEvent> {
    return HttpService.api.post(`/v1/securityEvents`, values)
  }

  static updateOne(
    securityEventId: string,
    values: Partial<SecurityEvent>,
  ): Promise<SecurityEvent> {
    return HttpService.api.patch(
      `/v1/securityEvents/${securityEventId}`,
      values,
    )
  }

  static deleteOne(securityEventId: string): Promise<void> {
    return HttpService.api.delete(`/v1/securityEvents/${securityEventId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<SecurityEvent>,
  ): Promise<SecurityEvent[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/securityEvents${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<SecurityEvent>,
  ): Promise<SecurityEvent> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/securityEvents`,
      values,
    )
  }
}
