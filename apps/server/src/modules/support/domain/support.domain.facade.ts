import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Support } from './support.model'

import { SiemSolution } from '../../siemSolution/domain'

@Injectable()
export class SupportDomainFacade {
  constructor(
    @InjectRepository(Support)
    private repository: Repository<Support>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Support>): Promise<Support> {
    return this.repository.save(values)
  }

  async update(item: Support, values: Partial<Support>): Promise<Support> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Support): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Support> = {},
  ): Promise<Support[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Support> = {},
  ): Promise<Support> {
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
    queryOptions: RequestHelper.QueryOptions<Support> = {},
  ): Promise<Support[]> {
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
