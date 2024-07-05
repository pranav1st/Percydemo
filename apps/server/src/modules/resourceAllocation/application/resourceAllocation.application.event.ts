export namespace ResourceAllocationApplicationEvent {
  export namespace ResourceAllocationCreated {
    export const key =
      'resourceAllocation.application.resourceAllocation.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
