import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { SiemSolution } from '../../../modules/siemSolution/domain'

@Entity()
export class ResourceAllocation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  resourceDetails?: string

  @Column({ nullable: true })
  scalabilityReview?: string

  @Column({ nullable: true })
  siemSolutionId?: string

  @ManyToOne(() => SiemSolution, parent => parent.resourceAllocations)
  @JoinColumn({ name: 'siemSolutionId' })
  siemSolution?: SiemSolution

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
