import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { SiemSolution as SiemSolutionModel } from './siemSolution/siemSolution.model'

import { Deployment as DeploymentModel } from './deployment/deployment.model'

import { IncidentResponse as IncidentResponseModel } from './incidentResponse/incidentResponse.model'

import { Training as TrainingModel } from './training/training.model'

import { Support as SupportModel } from './support/support.model'

import { Alert as AlertModel } from './alert/alert.model'

import { SecurityEvent as SecurityEventModel } from './securityEvent/securityEvent.model'

import { ComplianceReport as ComplianceReportModel } from './complianceReport/complianceReport.model'

import { ResourceAllocation as ResourceAllocationModel } from './resourceAllocation/resourceAllocation.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class SiemSolution extends SiemSolutionModel {}

  export class Deployment extends DeploymentModel {}

  export class IncidentResponse extends IncidentResponseModel {}

  export class Training extends TrainingModel {}

  export class Support extends SupportModel {}

  export class Alert extends AlertModel {}

  export class SecurityEvent extends SecurityEventModel {}

  export class ComplianceReport extends ComplianceReportModel {}

  export class ResourceAllocation extends ResourceAllocationModel {}
}
