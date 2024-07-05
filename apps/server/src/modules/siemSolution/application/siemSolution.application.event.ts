export namespace SiemSolutionApplicationEvent {
  export namespace SiemSolutionCreated {
    export const key = 'siemSolution.application.siemSolution.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
