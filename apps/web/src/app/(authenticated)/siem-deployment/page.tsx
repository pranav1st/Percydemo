'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Form, Input, Button, Select, Row, Col, Spin } from 'antd'
import { DeploymentUnitOutlined, SettingOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SIEMDeploymentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [siemSolutions, setSiemSolutions] = useState<Model.SiemSolution[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedSiemSolution, setSelectedSiemSolution] = useState<
    string | undefined
  >(undefined)
  const [deploymentConfig, setDeploymentConfig] = useState<string>('')

  useEffect(() => {
    const fetchSiemSolutions = async () => {
      try {
        const solutions = await Api.SiemSolution.findMany({})
        setSiemSolutions(solutions)
      } catch (error) {
        enqueueSnackbar('Failed to load SIEM solutions', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchSiemSolutions()
  }, [])

  const handleDeploy = async () => {
    if (!selectedSiemSolution || !deploymentConfig) {
      enqueueSnackbar(
        'Please select a SIEM solution and provide configuration details',
        { variant: 'error' },
      )
      return
    }

    try {
      await Api.Deployment.createOneBySiemSolutionId(selectedSiemSolution, {
        configurationDetails: deploymentConfig,
        status: 'deployed',
      })
      enqueueSnackbar('SIEM solution deployed successfully', {
        variant: 'success',
      })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to deploy SIEM solution', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Deploy SIEM Solution
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            As an admin, you can deploy and configure the selected SIEM solution
            to integrate with our existing security systems and centralize
            security event data.
          </Paragraph>
          {loading ? (
            <Spin size="large" style={{ display: 'block', margin: '0 auto' }} />
          ) : (
            <Form layout="vertical" onFinish={handleDeploy}>
              <Form.Item label="Select SIEM Solution" required>
                <Select
                  placeholder="Select a SIEM solution"
                  onChange={value => setSelectedSiemSolution(value)}
                  value={selectedSiemSolution}
                >
                  {siemSolutions?.map(solution => (
                    <Option key={solution.id} value={solution.id}>
                      {solution.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Configuration Details" required>
                <Input.TextArea
                  rows={4}
                  placeholder="Enter configuration details"
                  value={deploymentConfig}
                  onChange={e => setDeploymentConfig(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<DeploymentUnitOutlined />}
                >
                  Deploy
                </Button>
              </Form.Item>
            </Form>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
