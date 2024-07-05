import { SiemSolution } from '../siemSolution'

export class SecurityEvent {
  id: string

  eventDetails?: string

  timestamp?: string

  siemSolutionId?: string

  siemSolution?: SiemSolution

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
