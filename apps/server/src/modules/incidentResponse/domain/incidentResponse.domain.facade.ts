import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { IncidentResponse } from './incidentResponse.model'

import { SiemSolution } from '../../siemSolution/domain'

@Injectable()
export class IncidentResponseDomainFacade {
  constructor(
    @InjectRepository(IncidentResponse)
    private repository: Repository<IncidentResponse>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<IncidentResponse>): Promise<IncidentResponse> {
    return this.repository.save(values)
  }

  async update(
    item: IncidentResponse,
    values: Partial<IncidentResponse>,
  ): Promise<IncidentResponse> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: IncidentResponse): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<IncidentResponse> = {},
  ): Promise<IncidentResponse[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<IncidentResponse> = {},
  ): Promise<IncidentResponse> {
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
    queryOptions: RequestHelper.QueryOptions<IncidentResponse> = {},
  ): Promise<IncidentResponse[]> {
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
