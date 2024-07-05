export namespace TrainingApplicationEvent {
  export namespace TrainingCreated {
    export const key = 'training.application.training.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
