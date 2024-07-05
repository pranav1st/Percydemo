import { SiemSolution } from '../siemSolution'

export class IncidentResponse {
  id: string

  processDetails?: string

  automationLevel?: string

  siemSolutionId?: string

  siemSolution?: SiemSolution

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
