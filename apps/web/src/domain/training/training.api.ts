import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Training } from './training.model'

export class TrainingApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Training>,
  ): Promise<Training[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/trainings${buildOptions}`)
  }

  static findOne(
    trainingId: string,
    queryOptions?: ApiHelper.QueryOptions<Training>,
  ): Promise<Training> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/trainings/${trainingId}${buildOptions}`)
  }

  static createOne(values: Partial<Training>): Promise<Training> {
    return HttpService.api.post(`/v1/trainings`, values)
  }

  static updateOne(
    trainingId: string,
    values: Partial<Training>,
  ): Promise<Training> {
    return HttpService.api.patch(`/v1/trainings/${trainingId}`, values)
  }

  static deleteOne(trainingId: string): Promise<void> {
    return HttpService.api.delete(`/v1/trainings/${trainingId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<Training>,
  ): Promise<Training[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/trainings${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<Training>,
  ): Promise<Training> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/trainings`,
      values,
    )
  }
}
