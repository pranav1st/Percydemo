'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { SecurityScanOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DataAnalysisPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(true)
  const [securityEvents, setSecurityEvents] = useState<Model.SecurityEvent[]>(
    [],
  )

  useEffect(() => {
    const fetchSecurityEvents = async () => {
      try {
        const events = await Api.SecurityEvent.findMany({
          includes: ['siemSolution'],
        })
        setSecurityEvents(events)
      } catch (error) {
        enqueueSnackbar('Failed to fetch security events', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchSecurityEvents()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>Security Event Analysis</Title>
          <Paragraph>
            As a security analyst, you can analyze correlated security event
            data to identify patterns and potential threats.
          </Paragraph>
        </Col>
      </Row>
      {loading ? (
        <Row justify="center">
          <Spin size="large" />
        </Row>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {securityEvents?.map(event => (
            <Col key={event.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={
                  <>
                    <SecurityScanOutlined /> Event ID: {event.id}
                  </>
                }
                bordered={false}
              >
                <p>
                  <Text strong>Details:</Text> {event.eventDetails}
                </p>
                <p>
                  <Text strong>Timestamp:</Text>{' '}
                  {dayjs(event.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                </p>
                <p>
                  <Text strong>SIEM Solution:</Text> {event.siemSolution?.name}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
