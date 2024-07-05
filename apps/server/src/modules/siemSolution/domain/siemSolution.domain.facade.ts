import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { SiemSolution } from './siemSolution.model'

@Injectable()
export class SiemSolutionDomainFacade {
  constructor(
    @InjectRepository(SiemSolution)
    private repository: Repository<SiemSolution>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<SiemSolution>): Promise<SiemSolution> {
    return this.repository.save(values)
  }

  async update(
    item: SiemSolution,
    values: Partial<SiemSolution>,
  ): Promise<SiemSolution> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: SiemSolution): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<SiemSolution> = {},
  ): Promise<SiemSolution[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<SiemSolution> = {},
  ): Promise<SiemSolution> {
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
}
