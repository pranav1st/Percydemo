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

import { Deployment } from '../../../modules/deployment/domain'

import { IncidentResponse } from '../../../modules/incidentResponse/domain'

import { Training } from '../../../modules/training/domain'

import { Support } from '../../../modules/support/domain'

import { Alert } from '../../../modules/alert/domain'

import { SecurityEvent } from '../../../modules/securityEvent/domain'

import { ComplianceReport } from '../../../modules/complianceReport/domain'

import { ResourceAllocation } from '../../../modules/resourceAllocation/domain'

@Entity()
export class SiemSolution {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  status?: string

  @OneToMany(() => Deployment, child => child.siemSolution)
  deployments?: Deployment[]

  @OneToMany(() => IncidentResponse, child => child.siemSolution)
  incidentResponses?: IncidentResponse[]

  @OneToMany(() => Training, child => child.siemSolution)
  trainings?: Training[]

  @OneToMany(() => Support, child => child.siemSolution)
  supports?: Support[]

  @OneToMany(() => Alert, child => child.siemSolution)
  alerts?: Alert[]

  @OneToMany(() => SecurityEvent, child => child.siemSolution)
  securityEvents?: SecurityEvent[]

  @OneToMany(() => ComplianceReport, child => child.siemSolution)
  complianceReports?: ComplianceReport[]

  @OneToMany(() => ResourceAllocation, child => child.siemSolution)
  resourceAllocations?: ResourceAllocation[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
