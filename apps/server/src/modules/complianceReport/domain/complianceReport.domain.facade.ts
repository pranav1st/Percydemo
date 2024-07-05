import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ComplianceReport } from './complianceReport.model'

import { SiemSolution } from '../../siemSolution/domain'

@Injectable()
export class ComplianceReportDomainFacade {
  constructor(
    @InjectRepository(ComplianceReport)
    private repository: Repository<ComplianceReport>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<ComplianceReport>): Promise<ComplianceReport> {
    return this.repository.save(values)
  }

  async update(
    item: ComplianceReport,
    values: Partial<ComplianceReport>,
  ): Promise<ComplianceReport> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ComplianceReport): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ComplianceReport> = {},
  ): Promise<ComplianceReport[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ComplianceReport> = {},
  ): Promise<ComplianceReport> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyBySiemSolution(
    item: SiemSolution,
    queryOptions: RequestHelper.QueryOptions<ComplianceReport> = {},
  ): Promise<ComplianceReport[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('siemSolution')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        siemSolutionId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
