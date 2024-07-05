import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  let itemsLeftbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },

    {
      key: '/siem-evaluation',
      label: 'SIEM Evaluation',
      onClick: () => goTo('/siem-evaluation'),
    },

    {
      key: '/siem-deployment',
      label: 'SIEM Deployment',
      onClick: () => goTo('/siem-deployment'),
    },

    {
      key: '/dashboard-customization',
      label: 'Dashboard Customization',
      onClick: () => goTo('/dashboard-customization'),
    },

    {
      key: '/incident-response-automation',
      label: 'Incident Response Automation',
      onClick: () => goTo('/incident-response-automation'),
    },

    {
      key: '/training',
      label: 'Training',
      onClick: () => goTo('/training'),
    },

    {
      key: '/ongoing-support',
      label: 'Ongoing Support',
      onClick: () => goTo('/ongoing-support'),
    },

    {
      key: '/alerts',
      label: 'Alerts',
      onClick: () => goTo('/alerts'),
    },

    {
      key: '/data-analysis',
      label: 'Data Analysis',
      onClick: () => goTo('/data-analysis'),
    },

    {
      key: '/compliance-reports',
      label: 'Compliance Reports',
      onClick: () => goTo('/compliance-reports'),
    },

    {
      key: '/resource-allocation',
      label: 'Resource Allocation',
      onClick: () => goTo('/resource-allocation'),
    },
  ]

  let itemsUser = []

  let itemsTopbar = []

  let itemsSubNavigation = [
    {
      key: '/home',
      label: 'Home',
    },

    {
      key: '/siem-evaluation',
      label: 'SIEM Evaluation',
    },

    {
      key: '/siem-deployment',
      label: 'SIEM Deployment',
    },

    {
      key: '/dashboard-customization',
      label: 'Dashboard Customization',
    },

    {
      key: '/incident-response-automation',
      label: 'Incident Response Automation',
    },

    {
      key: '/training',
      label: 'Training',
    },

    {
      key: '/ongoing-support',
      label: 'Ongoing Support',
    },

    {
      key: '/alerts',
      label: 'Alerts',
    },

    {
      key: '/data-analysis',
      label: 'Data Analysis',
    },

    {
      key: '/compliance-reports',
      label: 'Compliance Reports',
    },

    {
      key: '/resource-allocation',
      label: 'Resource Allocation',
    },
  ]

  let itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar =
    (itemsLeftbar.length > 0 || itemsUser.length > 0) &&
    !isMobile &&
    authentication.isLoggedIn

  if (!authentication.isLoggedIn) {
    itemsLeftbar = []
    itemsUser = []
    itemsTopbar = []
    itemsSubNavigation = []
    itemsMobile = []
  }

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              isLoggedIn={authentication.isLoggedIn}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
