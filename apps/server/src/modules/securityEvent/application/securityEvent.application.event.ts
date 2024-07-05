export namespace SecurityEventApplicationEvent {
  export namespace SecurityEventCreated {
    export const key = 'securityEvent.application.securityEvent.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
