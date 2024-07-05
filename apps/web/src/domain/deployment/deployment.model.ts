import { SiemSolution } from '../siemSolution'

export class Deployment {
  id: string

  configurationDetails?: string

  status?: string

  siemSolutionId?: string

  siemSolution?: SiemSolution

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
