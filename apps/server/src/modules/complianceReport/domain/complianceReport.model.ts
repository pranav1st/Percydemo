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
export class ComplianceReport {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  reportDetails?: string

  @Column({ nullable: true })
  customizations?: string

  @Column({ nullable: true })
  status?: string

  @Column({ nullable: true })
  siemSolutionId?: string

  @ManyToOne(() => SiemSolution, parent => parent.complianceReports)
  @JoinColumn({ name: 'siemSolutionId' })
  siemSolution?: SiemSolution

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
