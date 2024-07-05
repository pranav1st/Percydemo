'use client'

import { useState, useEffect } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import {
  CheckCircleOutlined,
  WarningOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [siemSolution, setSiemSolution] = useState<Model.SiemSolution | null>(
    null,
  )
  const [securityEvents, setSecurityEvents] = useState<Model.SecurityEvent[]>(
    [],
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSiemSolutionData = async () => {
      try {
        const siemSolutionId = params.siemSolutionId
        const siemSolutionData = await Api.SiemSolution.findOne(
          siemSolutionId,
          {
            includes: [
              'securityEvents',
              'complianceReports',
              'resourceAllocations',
            ],
          },
        )
        setSiemSolution(siemSolutionData)

        const securityEventsData =
          await Api.SecurityEvent.findManyBySiemSolutionId(siemSolutionId, {
            includes: ['siemSolution'],
          })
        setSecurityEvents(securityEventsData)
      } catch (error) {
        enqueueSnackbar('Failed to load SIEM data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchSiemSolutionData()
  }, [params.siemSolutionId])

  if (loading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>SIEM Tool Dashboard</Title>
      <Paragraph>
        Monitor the overall health, real-time security events, compliance, and
        performance of the SIEM tool.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Card title="SIEM Tool Status" bordered={false}>
            <Text>Status: {siemSolution?.status || 'Unknown'}</Text>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Real-Time Security Events" bordered={false}>
            {securityEvents.length > 0 ? (
              securityEvents.map(event => (
                <Card
                  key={event.id}
                  type="inner"
                  title={dayjs(event.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                >
                  <Text>{event.eventDetails}</Text>
                </Card>
              ))
            ) : (
              <Text>No security events found.</Text>
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Compliance Reports" bordered={false}>
            {siemSolution?.complianceReports?.length ? (
              siemSolution.complianceReports.map(report => (
                <Card key={report.id} type="inner" title={report.status}>
                  <Text>{report.reportDetails}</Text>
                </Card>
              ))
            ) : (
              <Text>No compliance reports found.</Text>
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Resource Allocations" bordered={false}>
            {siemSolution?.resourceAllocations?.length ? (
              siemSolution.resourceAllocations.map(resource => (
                <Card
                  key={resource.id}
                  type="inner"
                  title={resource.scalabilityReview}
                >
                  <Text>{resource.resourceDetails}</Text>
                </Card>
              ))
            ) : (
              <Text>No resource allocations found.</Text>
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
