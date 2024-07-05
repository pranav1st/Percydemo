import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { IncidentResponse } from './incidentResponse.model'

export class IncidentResponseApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<IncidentResponse>,
  ): Promise<IncidentResponse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/incidentResponses${buildOptions}`)
  }

  static findOne(
    incidentResponseId: string,
    queryOptions?: ApiHelper.QueryOptions<IncidentResponse>,
  ): Promise<IncidentResponse> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/incidentResponses/${incidentResponseId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<IncidentResponse>,
  ): Promise<IncidentResponse> {
    return HttpService.api.post(`/v1/incidentResponses`, values)
  }

  static updateOne(
    incidentResponseId: string,
    values: Partial<IncidentResponse>,
  ): Promise<IncidentResponse> {
    return HttpService.api.patch(
      `/v1/incidentResponses/${incidentResponseId}`,
      values,
    )
  }

  static deleteOne(incidentResponseId: string): Promise<void> {
    return HttpService.api.delete(`/v1/incidentResponses/${incidentResponseId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<IncidentResponse>,
  ): Promise<IncidentResponse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/incidentResponses${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<IncidentResponse>,
  ): Promise<IncidentResponse> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/incidentResponses`,
      values,
    )
  }
}
