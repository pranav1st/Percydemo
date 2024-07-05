import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { SiemSolutionApi } from './siemSolution/siemSolution.api'

import { DeploymentApi } from './deployment/deployment.api'

import { IncidentResponseApi } from './incidentResponse/incidentResponse.api'

import { TrainingApi } from './training/training.api'

import { SupportApi } from './support/support.api'

import { AlertApi } from './alert/alert.api'

import { SecurityEventApi } from './securityEvent/securityEvent.api'

import { ComplianceReportApi } from './complianceReport/complianceReport.api'

import { ResourceAllocationApi } from './resourceAllocation/resourceAllocation.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class SiemSolution extends SiemSolutionApi {}

  export class Deployment extends DeploymentApi {}

  export class IncidentResponse extends IncidentResponseApi {}

  export class Training extends TrainingApi {}

  export class Support extends SupportApi {}

  export class Alert extends AlertApi {}

  export class SecurityEvent extends SecurityEventApi {}

  export class ComplianceReport extends ComplianceReportApi {}

  export class ResourceAllocation extends ResourceAllocationApi {}
}
