'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TrainingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [trainings, setTrainings] = useState<Model.Training[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const trainingsFound = await Api.Training.findMany({
          includes: ['siemSolution'],
        })
        setTrainings(trainingsFound)
      } catch (error) {
        enqueueSnackbar('Failed to load trainings', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchTrainings()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>SIEM Tool Training</Title>
          <Paragraph>
            As an admin, you can provide comprehensive training on the SIEM tool
            so that our team can effectively use it.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        {loading ? (
          <Spin size="large" />
        ) : (
          trainings?.map(training => (
            <Col
              key={training.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ padding: '10px' }}
            >
              <Card
                title={training.siemSolution?.name || 'Unknown SIEM Solution'}
                bordered={false}
                hoverable
                onClick={() => router.push(`/training/${training.id}`)}
              >
                <BookOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                <Paragraph ellipsis={{ rows: 2 }}>
                  {training.trainingDetails || 'No details available'}
                </Paragraph>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
