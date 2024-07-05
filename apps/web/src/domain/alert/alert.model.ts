import { SiemSolution } from '../siemSolution'

export class Alert {
  id: string

  alertDetails?: string

  severity?: string

  status?: string

  siemSolutionId?: string

  siemSolution?: SiemSolution

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
