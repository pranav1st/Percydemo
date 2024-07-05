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
export class Alert {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  alertDetails?: string

  @Column({ nullable: true })
  severity?: string

  @Column({ nullable: true })
  status?: string

  @Column({ nullable: true })
  siemSolutionId?: string

  @ManyToOne(() => SiemSolution, parent => parent.alerts)
  @JoinColumn({ name: 'siemSolutionId' })
  siemSolution?: SiemSolution

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
