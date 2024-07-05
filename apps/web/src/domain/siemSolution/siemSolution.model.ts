import { Deployment } from '../deployment'

import { IncidentResponse } from '../incidentResponse'

import { Training } from '../training'

import { Support } from '../support'

import { Alert } from '../alert'

import { SecurityEvent } from '../securityEvent'

import { ComplianceReport } from '../complianceReport'

import { ResourceAllocation } from '../resourceAllocation'

export class SiemSolution {
  id: string

  name?: string

  description?: string

  status?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  deployments?: Deployment[]

  incidentResponses?: IncidentResponse[]

  trainings?: Training[]

  supports?: Support[]

  alerts?: Alert[]

  securityEvents?: SecurityEvent[]

  complianceReports?: ComplianceReport[]

  resourceAllocations?: ResourceAllocation[]
}
