'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Spin } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SIEMEvaluationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [siemSolutions, setSiemSolutions] = useState<Model.SiemSolution[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchSiemSolutions = async () => {
      try {
        const solutions = await Api.SiemSolution.findMany({
          includes: [
            'deployments',
            'incidentResponses',
            'trainings',
            'supports',
            'alerts',
            'securityEvents',
            'complianceReports',
            'resourceAllocations',
          ],
        })
        setSiemSolutions(solutions)
      } catch (error) {
        enqueueSnackbar('Failed to load SIEM solutions', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchSiemSolutions()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>SIEM Solutions Evaluation</Title>
          <Paragraph>
            As an admin, you can evaluate different SIEM solutions to select the
            most suitable one for your organization.
          </Paragraph>
        </Col>
      </Row>
      {loading ? (
        <Row justify="center">
          <Spin size="large" />
        </Row>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {siemSolutions?.map(solution => (
            <Col key={solution.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={solution.name}
                extra={
                  solution.status === 'active' ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                  ) : (
                    <CloseCircleOutlined style={{ color: 'red' }} />
                  )
                }
              >
                <Paragraph>{solution.description}</Paragraph>
                <Text type="secondary">
                  Created on:{' '}
                  {dayjs(solution.dateCreated).format('DD MMM YYYY')}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
