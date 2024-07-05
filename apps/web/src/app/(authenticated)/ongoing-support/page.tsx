'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Card, Spin } from 'antd'
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function OngoingSupportPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [supports, setSupports] = useState<Model.Support[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchSupports = async () => {
      try {
        const supportsFound = await Api.Support.findMany({
          includes: ['siemSolution'],
        })
        setSupports(supportsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch supports', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchSupports()
  }, [])

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Ongoing Support for SIEM Tool</Title>
        <Paragraph>
          As an admin, you can ensure ongoing support for the SIEM tool so that
          it remains effective and up-to-date.
        </Paragraph>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <Spin size="large" />
          </div>
        ) : (
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={supports}
            renderItem={support => (
              <List.Item>
                <Card
                  title={support.siemSolution?.name || 'Unnamed SIEM Solution'}
                  extra={
                    support.status === 'active' ? (
                      <CheckCircleOutlined style={{ color: 'green' }} />
                    ) : (
                      <ExclamationCircleOutlined style={{ color: 'red' }} />
                    )
                  }
                >
                  <Text>{support.supportDetails}</Text>
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    </PageLayout>
  )
}
