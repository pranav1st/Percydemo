export namespace ComplianceReportApplicationEvent {
  export namespace ComplianceReportCreated {
    export const key = 'complianceReport.application.complianceReport.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
