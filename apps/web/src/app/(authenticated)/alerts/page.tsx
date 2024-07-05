'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Card, Row, Col } from 'antd'
import { AlertOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AlertsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [alerts, setAlerts] = useState<Model.Alert[]>([])

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const alertsFound = await Api.Alert.findMany({
          includes: ['siemSolution', 'siemSolution.securityEvents'],
        })
        setAlerts(alertsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch alerts', { variant: 'error' })
      }
    }

    fetchAlerts()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>Security Alerts</Title>
          <Paragraph>
            As a security analyst, you can receive alerts for critical security
            events so that you can respond promptly.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={alerts}
            renderItem={alert => (
              <List.Item>
                <Card
                  title={
                    <span>
                      <AlertOutlined style={{ marginRight: '8px' }} />
                      {alert.alertDetails}
                    </span>
                  }
                >
                  <Text strong>Severity:</Text> <Text>{alert.severity}</Text>
                  <br />
                  <Text strong>Status:</Text> <Text>{alert.status}</Text>
                  <br />
                  <Text strong>Date Created:</Text>{' '}
                  <Text>
                    {dayjs(alert.dateCreated).format('YYYY-MM-DD HH:mm:ss')}
                  </Text>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
