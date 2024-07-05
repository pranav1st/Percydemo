import { SiemSolution } from '../siemSolution'

export class ComplianceReport {
  id: string

  reportDetails?: string

  customizations?: string

  status?: string

  siemSolutionId?: string

  siemSolution?: SiemSolution

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
