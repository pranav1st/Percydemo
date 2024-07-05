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
export class IncidentResponse {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  processDetails?: string

  @Column({ nullable: true })
  automationLevel?: string

  @Column({ nullable: true })
  siemSolutionId?: string

  @ManyToOne(() => SiemSolution, parent => parent.incidentResponses)
  @JoinColumn({ name: 'siemSolutionId' })
  siemSolution?: SiemSolution

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
