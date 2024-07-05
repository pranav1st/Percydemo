export namespace SupportApplicationEvent {
  export namespace SupportCreated {
    export const key = 'support.application.support.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
