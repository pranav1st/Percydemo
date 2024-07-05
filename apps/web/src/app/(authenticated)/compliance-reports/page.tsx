'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Space,
  Row,
  Col,
  Table,
  Spin,
} from 'antd'
import { FileAddOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ComplianceReportsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [reports, setReports] = useState<Model.ComplianceReport[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const fetchedReports = await Api.ComplianceReport.findMany({
          includes: ['siemSolution'],
        })
        setReports(fetchedReports)
      } catch (error) {
        enqueueSnackbar('Failed to fetch reports', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [])

  const handleCreateReport = async (
    values: Partial<Model.ComplianceReport>,
  ) => {
    try {
      const newReport = await Api.ComplianceReport.createOneBySiemSolutionId(
        'default-siem-solution-id',
        values,
      )
      setReports([...reports, newReport])
      enqueueSnackbar('Report created successfully', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create report', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Report Details',
      dataIndex: 'reportDetails',
      key: 'reportDetails',
    },
    {
      title: 'Customizations',
      dataIndex: 'customizations',
      key: 'customizations',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditReport(record.id)}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ]

  const handleEditReport = (reportId: string) => {
    // Navigate to edit page or open edit modal
    router.push(`/compliance-reports/edit/${reportId}`)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col span={24}>
          <Title level={2}>Compliance Reports</Title>
          <Text>
            Generate and customize reports from the SIEM tool to document
            compliance efforts.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={handleCreateReport}>
            <Form.Item
              name="reportDetails"
              label="Report Details"
              rules={[
                { required: true, message: 'Please input report details!' },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item name="customizations" label="Customizations">
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Please input status!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<FileAddOutlined />}
              >
                Create Report
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Table columns={columns} dataSource={reports} rowKey="id" />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
