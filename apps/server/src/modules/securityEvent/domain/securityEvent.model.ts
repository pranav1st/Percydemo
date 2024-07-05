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
export class SecurityEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  eventDetails?: string

  @Column({ nullable: true })
  timestamp?: string

  @Column({ nullable: true })
  siemSolutionId?: string

  @ManyToOne(() => SiemSolution, parent => parent.securityEvents)
  @JoinColumn({ name: 'siemSolutionId' })
  siemSolution?: SiemSolution

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
