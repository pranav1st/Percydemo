import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { SecurityEvent } from './securityEvent.model'

import { SiemSolution } from '../../siemSolution/domain'

@Injectable()
export class SecurityEventDomainFacade {
  constructor(
    @InjectRepository(SecurityEvent)
    private repository: Repository<SecurityEvent>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<SecurityEvent>): Promise<SecurityEvent> {
    return this.repository.save(values)
  }

  async update(
    item: SecurityEvent,
    values: Partial<SecurityEvent>,
  ): Promise<SecurityEvent> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: SecurityEvent): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<SecurityEvent> = {},
  ): Promise<SecurityEvent[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<SecurityEvent> = {},
  ): Promise<SecurityEvent> {
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
    queryOptions: RequestHelper.QueryOptions<SecurityEvent> = {},
  ): Promise<SecurityEvent[]> {
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
