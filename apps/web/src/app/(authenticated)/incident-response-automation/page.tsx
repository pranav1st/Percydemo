'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function IncidentResponseAutomationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [incidentResponses, setIncidentResponses] = useState<
    Model.IncidentResponse[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchIncidentResponses = async () => {
      try {
        const responses = await Api.IncidentResponse.findMany({
          includes: ['siemSolution'],
        })
        setIncidentResponses(responses)
      } catch (error) {
        enqueueSnackbar('Failed to load incident responses', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchIncidentResponses()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col>
          <Title>Incident Response Automation</Title>
          <Paragraph>
            As an admin, I can automate incident response processes so that I
            can streamline our response to security threats.
          </Paragraph>
          <Paragraph>
            As a security analyst, I can use automated incident response
            processes so that I can respond to threats more efficiently.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        {loading ? (
          <Spin size="large" />
        ) : (
          incidentResponses?.map(response => (
            <Col
              key={response.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ padding: '10px' }}
            >
              <Card
                title={response.siemSolution?.name || 'Unknown SIEM Solution'}
                bordered={false}
                actions={[
                  response.automationLevel === 'high' ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                  ) : (
                    <ExclamationCircleOutlined style={{ color: 'red' }} />
                  ),
                ]}
              >
                <Paragraph>{response.processDetails}</Paragraph>
                <Paragraph>
                  Automation Level: {response.automationLevel}
                </Paragraph>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
