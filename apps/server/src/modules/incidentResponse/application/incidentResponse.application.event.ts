export namespace IncidentResponseApplicationEvent {
  export namespace IncidentResponseCreated {
    export const key = 'incidentResponse.application.incidentResponse.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
