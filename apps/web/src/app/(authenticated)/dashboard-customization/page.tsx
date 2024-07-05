'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Select,
  List,
  Alert as AntAlert,
} from 'antd'
import { BellOutlined, DashboardOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DashboardCustomizationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [siemSolution, setSiemSolution] = useState<Model.SiemSolution | null>(
    null,
  )
  const [alerts, setAlerts] = useState<Model.Alert[]>([])
  const [securityEvents, setSecurityEvents] = useState<Model.SecurityEvent[]>(
    [],
  )
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchSiemSolution = async () => {
      try {
        const siemSolutionId = params.siemSolutionId
        const siemSolutionData = await Api.SiemSolution.findOne(
          siemSolutionId,
          { includes: ['alerts', 'securityEvents'] },
        )
        setSiemSolution(siemSolutionData)
        setAlerts(siemSolutionData.alerts || [])
        setSecurityEvents(siemSolutionData.securityEvents || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch SIEM Solution data', {
          variant: 'error',
        })
      }
    }

    fetchSiemSolution()
  }, [params.siemSolutionId])

  const handleCreateAlert = async (values: Partial<Model.Alert>) => {
    try {
      setLoading(true)
      const siemSolutionId = params.siemSolutionId
      const newAlert = await Api.Alert.createOneBySiemSolutionId(
        siemSolutionId,
        values,
      )
      setAlerts([...alerts, newAlert])
      enqueueSnackbar('Alert created successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to create alert', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>
        <DashboardOutlined /> Dashboard Customization
      </Title>
      <Paragraph>
        As an admin, you can customize dashboards to monitor security events in
        real-time and set up alerts for critical security events.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Security Events" bordered={false}>
            <List
              dataSource={securityEvents}
              renderItem={event => (
                <List.Item>
                  <List.Item.Meta
                    title={`Event ID: ${event.id}`}
                    description={`Details: ${event.eventDetails} | Timestamp: ${dayjs(event.timestamp).format('YYYY-MM-DD HH:mm:ss')}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Alerts" bordered={false}>
            <List
              dataSource={alerts}
              renderItem={alert => (
                <List.Item>
                  <List.Item.Meta
                    title={`Alert ID: ${alert.id}`}
                    description={`Details: ${alert.alertDetails} | Severity: ${alert.severity} | Status: ${alert.status}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Create New Alert" bordered={false}>
            <Form layout="vertical" onFinish={handleCreateAlert}>
              <Form.Item
                name="alertDetails"
                label="Alert Details"
                rules={[
                  { required: true, message: 'Please input alert details!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="severity"
                label="Severity"
                rules={[{ required: true, message: 'Please select severity!' }]}
              >
                <Select placeholder="Select a severity">
                  <Option value="low">Low</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="high">High</Option>
                  <Option value="critical">Critical</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status!' }]}
              >
                <Select placeholder="Select a status">
                  <Option value="open">Open</Option>
                  <Option value="closed">Closed</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Create Alert
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
