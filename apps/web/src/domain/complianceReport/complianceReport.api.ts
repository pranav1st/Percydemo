import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ComplianceReport } from './complianceReport.model'

export class ComplianceReportApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ComplianceReport>,
  ): Promise<ComplianceReport[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/complianceReports${buildOptions}`)
  }

  static findOne(
    complianceReportId: string,
    queryOptions?: ApiHelper.QueryOptions<ComplianceReport>,
  ): Promise<ComplianceReport> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/complianceReports/${complianceReportId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<ComplianceReport>,
  ): Promise<ComplianceReport> {
    return HttpService.api.post(`/v1/complianceReports`, values)
  }

  static updateOne(
    complianceReportId: string,
    values: Partial<ComplianceReport>,
  ): Promise<ComplianceReport> {
    return HttpService.api.patch(
      `/v1/complianceReports/${complianceReportId}`,
      values,
    )
  }

  static deleteOne(complianceReportId: string): Promise<void> {
    return HttpService.api.delete(`/v1/complianceReports/${complianceReportId}`)
  }

  static findManyBySiemSolutionId(
    siemSolutionId: string,
    queryOptions?: ApiHelper.QueryOptions<ComplianceReport>,
  ): Promise<ComplianceReport[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/complianceReports${buildOptions}`,
    )
  }

  static createOneBySiemSolutionId(
    siemSolutionId: string,
    values: Partial<ComplianceReport>,
  ): Promise<ComplianceReport> {
    return HttpService.api.post(
      `/v1/siemSolutions/siemSolution/${siemSolutionId}/complianceReports`,
      values,
    )
  }
}
