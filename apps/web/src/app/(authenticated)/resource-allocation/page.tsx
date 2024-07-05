'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ResourceAllocationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [resourceAllocations, setResourceAllocations] = useState<
    Model.ResourceAllocation[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchResourceAllocations = async () => {
      try {
        const allocations = await Api.ResourceAllocation.findMany({
          includes: ['siemSolution'],
        })
        setResourceAllocations(allocations)
      } catch (error) {
        enqueueSnackbar('Failed to fetch resource allocations', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchResourceAllocations()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Resource Allocation and Scalability Review</Title>
          <Paragraph>
            As an IT manager, you can allocate resources to support the SIEM
            tool so that it remains effective. You can also review the
            scalability of the SIEM tool so that it can grow with our
            organization’s needs.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        {loading ? (
          <Spin size="large" />
        ) : (
          resourceAllocations?.map(allocation => (
            <Col key={allocation.id} span={8} style={{ padding: '10px' }}>
              <Card
                title={allocation.siemSolution?.name || 'Unknown SIEM Solution'}
                actions={[
                  <CheckCircleOutlined key="allocate" />,
                  <SyncOutlined key="review" />,
                ]}
              >
                <Paragraph>
                  <Text strong>Resource Details:</Text>{' '}
                  {allocation.resourceDetails || 'N/A'}
                </Paragraph>
                <Paragraph>
                  <Text strong>Scalability Review:</Text>{' '}
                  {allocation.scalabilityReview || 'N/A'}
                </Paragraph>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
