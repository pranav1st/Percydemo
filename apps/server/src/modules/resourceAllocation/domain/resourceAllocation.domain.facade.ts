import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ResourceAllocation } from './resourceAllocation.model'

import { SiemSolution } from '../../siemSolution/domain'

@Injectable()
export class ResourceAllocationDomainFacade {
  constructor(
    @InjectRepository(ResourceAllocation)
    private repository: Repository<ResourceAllocation>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<ResourceAllocation>,
  ): Promise<ResourceAllocation> {
    return this.repository.save(values)
  }

  async update(
    item: ResourceAllocation,
    values: Partial<ResourceAllocation>,
  ): Promise<ResourceAllocation> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ResourceAllocation): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ResourceAllocation> = {},
  ): Promise<ResourceAllocation[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ResourceAllocation> = {},
  ): Promise<ResourceAllocation> {
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
    queryOptions: RequestHelper.QueryOptions<ResourceAllocation> = {},
  ): Promise<ResourceAllocation[]> {
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
