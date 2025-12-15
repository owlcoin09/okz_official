'use client';

import { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Avatar,
  Stack,
  Chip,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import DynamicMetadata from '@/components/DynamicMetadata';
import { TrendingUp, Security, Groups, EmojiEvents, Star } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutPage() {
  const [tabValue, setTabValue] = useState(0);

  const strengths = [
    {
      icon: <TrendingUp sx={{ fontSize: 50 }} />,
      title: '专业团队',
      description: '拥有10年+量化交易经验的专业团队，核心成员来自知名金融机构和互联网公司',
      color: '#1976d2',
    },
    {
      icon: <Security sx={{ fontSize: 50 }} />,
      title: '安全可靠',
      description: '采用银行级安全标准，多重加密保护，保障用户资产和交易数据安全',
      color: '#2e7d32',
    },
    {
      icon: <Groups sx={{ fontSize: 50 }} />,
      title: '技术领先',
      description: '自主研发的量化交易系统，毫秒级响应，7x24小时稳定运行',
      color: '#ed6c02',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 50 }} />,
      title: '业绩优异',
      description: '累计管理资产超过10亿美元，年化收益率稳定在20%以上',
      color: '#9c27b0',
    },
  ];

  const milestones = [
    { year: '2018', event: '公司成立，专注于量化交易技术研发' },
    { year: '2019', event: '获得首轮融资，团队规模扩大至50人' },
    { year: '2020', event: '自主研发的交易系统正式上线，用户突破1万人' },
    { year: '2021', event: '与OKX交易所达成深度合作，成为官方合作伙伴' },
    { year: '2022', event: '管理资产规模突破5亿美元，荣获行业最佳平台奖' },
    { year: '2023', event: '推出AI智能策略，用户突破10万人' },
    { year: '2024', event: '管理资产规模突破10亿美元，成立海外分公司' },
  ];

  const stats = [
    { label: '累计用户', value: '100,000+', unit: '人', icon: '👥' },
    { label: '管理资产', value: '$10', unit: '亿+', icon: '💰' },
    { label: '交易策略', value: '50+', unit: '种', icon: '📊' },
    { label: '年化收益', value: '25%', unit: '平均', icon: '📈' },
    { label: '服务时长', value: '7x24', unit: '小时', icon: '⏰' },
    { label: '系统稳定性', value: '99.9%', unit: '可用性', icon: '✅' },
  ];

  const honors = [
    {
      title: '2023年度最佳量化交易平台',
      organization: '中国金融科技协会',
      year: '2023',
    },
    {
      title: '金融科技创新奖',
      organization: '全球金融科技峰会',
      year: '2022',
    },
    {
      title: '用户满意度金奖',
      organization: '互联网金融行业',
      year: '2023',
    },
    {
      title: '安全合规认证',
      organization: '国际金融安全标准组织',
      year: '2022',
    },
  ];

  const policies = [
    {
      title: '用户协议',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>1. 协议范围</Typography>
          <Typography variant="body2" paragraph>
            本协议是您与 OKZ 量化交易平台（以下简称&ldquo;平台&rdquo;）之间关于使用平台服务的法律协议。
            通过访问或使用平台服务，您同意接受并遵守本协议的所有条款和条件。
          </Typography>
          <Typography variant="h6" gutterBottom>2. 服务说明</Typography>
          <Typography variant="body2" paragraph>
            平台为用户提供量化交易相关的技术服务，包括但不限于策略执行、数据分析、账户管理等服务。
            平台不对用户的投资收益做任何承诺或保证。
          </Typography>
          <Typography variant="h6" gutterBottom>3. 用户义务</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="3.1 用户应确保提供的注册信息真实、准确、完整" secondary="如信息变更，应及时更新" />
            </ListItem>
            <ListItem>
              <ListItemText primary="3.2 用户应妥善保管账户信息，对账户下的所有行为负责" secondary="如发现账户被盗用，应立即通知平台" />
            </ListItem>
            <ListItem>
              <ListItemText primary="3.3 用户不得利用平台从事违法违规活动" secondary="包括但不限于洗钱、诈骗等行为" />
            </ListItem>
            <ListItem>
              <ListItemText primary="3.4 用户应遵守平台的使用规则和交易规则" secondary="不得恶意操作或干扰平台正常运行" />
            </ListItem>
          </List>
          <Typography variant="h6" gutterBottom>4. 平台责任</Typography>
          <Typography variant="body2" paragraph>
            平台将尽合理努力确保服务的稳定性和安全性，但不保证服务不会中断或不会出现错误。
            平台不对因使用或无法使用服务而产生的任何直接或间接损失承担责任。
          </Typography>
          <Typography variant="h6" gutterBottom>5. 风险提示</Typography>
          <Typography variant="body2" paragraph>
            量化交易涉及金融风险，可能导致本金损失。用户在参与量化交易前，应充分了解相关风险，
            并根据自身风险承受能力谨慎决策。平台不对用户的投资损失承担责任。
          </Typography>
          <Typography variant="h6" gutterBottom>6. 协议修改</Typography>
          <Typography variant="body2">
            平台有权根据业务发展需要修改本协议。协议修改后，将通过平台公告等方式通知用户。
            如用户不同意修改内容，应停止使用平台服务。
          </Typography>
        </Box>
      ),
    },
    {
      title: '隐私政策',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>1. 信息收集</Typography>
          <Typography variant="body2" paragraph>为了向您提供更好的服务，我们会收集以下信息：</Typography>
          <List dense>
            <ListItem><ListItemText primary="注册信息：姓名、邮箱、手机号码等" /></ListItem>
            <ListItem><ListItemText primary="账户信息：账户余额、交易记录等" /></ListItem>
            <ListItem><ListItemText primary="设备信息：IP地址、设备类型、操作系统等" /></ListItem>
            <ListItem><ListItemText primary="使用信息：访问记录、操作日志等" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>2. 信息使用</Typography>
          <Typography variant="body2" paragraph>我们使用收集的信息用于：</Typography>
          <List dense>
            <ListItem><ListItemText primary="提供、维护和改进平台服务" /></ListItem>
            <ListItem><ListItemText primary="处理您的交易请求和账户管理" /></ListItem>
            <ListItem><ListItemText primary="发送服务通知和重要信息" /></ListItem>
            <ListItem><ListItemText primary="进行数据分析，优化用户体验" /></ListItem>
            <ListItem><ListItemText primary="确保平台安全和防范风险" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>3. 信息保护</Typography>
          <Typography variant="body2" paragraph>我们采用行业标准的安全措施保护您的个人信息，包括：</Typography>
          <List dense>
            <ListItem><ListItemText primary="数据加密传输和存储" /></ListItem>
            <ListItem><ListItemText primary="访问控制和权限管理" /></ListItem>
            <ListItem><ListItemText primary="定期安全审计和漏洞扫描" /></ListItem>
            <ListItem><ListItemText primary="员工安全培训和保密协议" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>4. 信息共享</Typography>
          <Typography variant="body2" paragraph>
            我们不会向第三方出售、出租或交易您的个人信息。仅在以下情况下，我们可能会共享您的信息：
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="获得您的明确同意" /></ListItem>
            <ListItem><ListItemText primary="法律法规要求或司法机关要求" /></ListItem>
            <ListItem><ListItemText primary="与我们的服务提供商共享（需签署保密协议）" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>5. 您的权利</Typography>
          <Typography variant="body2" paragraph>您有权：</Typography>
          <List dense>
            <ListItem><ListItemText primary="访问和查看您的个人信息" /></ListItem>
            <ListItem><ListItemText primary="更正不准确的个人信息" /></ListItem>
            <ListItem><ListItemText primary="删除您的个人信息（法律法规要求保留的除外）" /></ListItem>
            <ListItem><ListItemText primary="撤回您的同意" /></ListItem>
          </List>
        </Box>
      ),
    },
    {
      title: '风险提示',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>重要提示</Typography>
          <Typography variant="body2" paragraph color="error">
            量化交易涉及重大风险，可能导致本金全部损失。在参与量化交易前，请充分了解相关风险，
            并根据自身风险承受能力谨慎决策。
          </Typography>
          <Typography variant="h6" gutterBottom>主要风险</Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="市场风险"
                secondary="市场价格波动可能导致投资损失，极端市场情况下可能造成重大损失"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="技术风险"
                secondary="系统故障、网络中断等技术问题可能影响交易执行或造成损失"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="策略风险"
                secondary="量化策略可能因市场环境变化而失效，历史表现不代表未来收益"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="流动性风险"
                secondary="市场流动性不足可能导致无法及时平仓或执行交易"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="操作风险"
                secondary="用户操作失误或账户被盗用可能导致损失"
              />
            </ListItem>
          </List>
          <Typography variant="h6" gutterBottom>风险控制建议</Typography>
          <Typography variant="body2" paragraph>为了降低风险，建议您：</Typography>
          <List dense>
            <ListItem><ListItemText primary="仅使用可承受损失的资金进行投资" /></ListItem>
            <ListItem><ListItemText primary="充分了解所选择的交易策略和风险特征" /></ListItem>
            <ListItem><ListItemText primary="设置合理的止损和止盈点" /></ListItem>
            <ListItem><ListItemText primary="分散投资，避免集中投资单一策略或品种" /></ListItem>
            <ListItem><ListItemText primary="定期审查和调整投资组合" /></ListItem>
            <ListItem><ListItemText primary="妥善保管账户信息，避免账户被盗用" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>免责声明</Typography>
          <Typography variant="body2">
            平台不对用户的投资收益或损失做任何承诺或保证。用户应自行承担投资决策的风险和后果。
            平台不对因市场波动、系统故障或其他不可抗力因素造成的损失承担责任。
          </Typography>
        </Box>
      ),
    },
    {
      title: '服务条款',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>1. 服务内容</Typography>
          <Typography variant="body2" paragraph>平台提供的服务包括但不限于：</Typography>
          <List dense>
            <ListItem><ListItemText primary="量化交易策略执行服务" /></ListItem>
            <ListItem><ListItemText primary="账户管理和资金划转服务" /></ListItem>
            <ListItem><ListItemText primary="数据分析和报表服务" /></ListItem>
            <ListItem><ListItemText primary="API 接口服务" /></ListItem>
            <ListItem><ListItemText primary="客户支持服务" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>2. 服务费用</Typography>
          <Typography variant="body2" paragraph>
            平台的部分服务可能收取费用。具体的费用标准和支付方式将在服务页面明确说明。
            用户应按照约定支付服务费用。
          </Typography>
          <Typography variant="h6" gutterBottom>3. 服务限制</Typography>
          <Typography variant="body2" paragraph>为了保障平台服务的稳定性和安全性，我们可能对以下行为进行限制：</Typography>
          <List dense>
            <ListItem><ListItemText primary="恶意刷单或操纵市场" /></ListItem>
            <ListItem><ListItemText primary="利用系统漏洞获取不正当利益" /></ListItem>
            <ListItem><ListItemText primary="恶意攻击系统或干扰服务运行" /></ListItem>
            <ListItem><ListItemText primary="违反法律法规或平台规则的行为" /></ListItem>
          </List>
          <Typography variant="h6" gutterBottom>4. 服务变更</Typography>
          <Typography variant="body2" paragraph>
            平台有权根据业务发展需要修改、暂停或终止部分或全部服务。
            我们将尽可能提前通知用户，但对于紧急情况下的服务调整可能无法提前通知。
          </Typography>
          <Typography variant="h6" gutterBottom>5. 服务中断</Typography>
          <Typography variant="body2">
            因系统维护、升级或其他不可抗力因素导致的服务中断，平台将尽力尽快恢复服务，
            但不对服务中断期间的任何损失承担责任。
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)', minHeight: '100vh' }}>
      <DynamicMetadata page="about" />
      <Navigation />

      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 14 }, // 增加顶部padding以避免被fixed Navigation遮挡
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/about-company.jpg"
            alt="OKZ公司介绍 - 专业的量化交易平台"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 4 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: 1200, mx: 'auto' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              关于我们 & 政策协议
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                opacity: 0.95,
                lineHeight: 1.7,
              }}
            >
              了解 OKZ 平台，查看公司信息和政策协议
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, mb: { xs: 6, md: 10 }, pb: 4 }}>
        <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
          <Paper elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  fontSize: '1rem',
                  fontWeight: 'bold',
                },
              }}
            >
              <Tab label="关于我们" />
              <Tab label="政策协议" />
            </Tabs>
          </Paper>

          {tabValue === 0 && (
            <>
              {/* 公司简介 */}
              <Box sx={{ mb: { xs: 8, md: 12 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
                >
                  公司简介
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: { xs: 3, md: 5 },
                        height: '100%',
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                      }}
                    >
                      <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 2, fontSize: '1.3rem' }}>
                        我们的使命
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                        让量化交易变得简单、安全、高效。我们相信，通过先进的技术和专业的服务，
                        每个人都可以享受到量化交易带来的稳定收益。
                      </Typography>
                      <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 4, mb: 2, fontSize: '1.3rem' }}>
                        我们的愿景
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                        成为全球领先的量化交易平台，为全球数千万投资者提供专业、可靠的量化交易服务。
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: { xs: 3, md: 5 },
                        height: '100%',
                        borderRadius: 3,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '50%',
                          height: '100%',
                          opacity: 0.1,
                          zIndex: 0,
                        }}
                      >
                        <Image
                          src="/images/team.jpg"
                          alt="OKZ专业团队 - 量化交易专家和技术团队"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 3, fontSize: '1.3rem' }}>
                          核心价值
                        </Typography>
                        <Stack spacing={2.5}>
                          {[
                            '专业：10年+行业经验，专业团队',
                            '安全：银行级安全标准，多重保护',
                            '创新：持续技术创新，引领行业发展',
                            '服务：7x24小时客户服务，快速响应',
                          ].map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                                <Star sx={{ color: 'white' }} />
                              </Avatar>
                              <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              {/* 品牌实力 */}
              <Box sx={{ mb: { xs: 8, md: 12 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
                >
                  品牌实力
                </Typography>
                <Grid container spacing={4}>
                  {strengths.map((strength, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card
                        elevation={3}
                        sx={{
                          height: '100%',
                          textAlign: 'center',
                          p: 4,
                          borderRadius: 3,
                          transition: 'all 0.3s',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: 8,
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 100,
                            height: 100,
                            mx: 'auto',
                            mb: 3,
                            bgcolor: `${strength.color}15`,
                            color: strength.color,
                          }}
                        >
                          {strength.icon}
                        </Avatar>
                        <Typography
                          variant="h6"
                          gutterBottom
                          fontWeight="bold"
                          sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, mb: 2 }}
                        >
                          {strength.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.7 }}
                        >
                          {strength.description}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* 数据统计 */}
              <Box sx={{ mb: { xs: 8, md: 12 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
                >
                  平台数据
                </Typography>
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} md={2} key={index}>
                      <Paper
                        elevation={2}
                        sx={{
                          p: { xs: 2, md: 3 },
                          textAlign: 'center',
                          height: '100%',
                          borderRadius: 3,
                          transition: 'all 0.3s',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: 6,
                          },
                        }}
                      >
                        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 1 }}>
                          {stat.icon}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="primary"
                          gutterBottom
                          fontWeight="bold"
                          sx={{ fontSize: { xs: '1.3rem', md: '1.8rem' } }}
                        >
                          {stat.value}
                          <Typography component="span" variant="body1" color="text.secondary" sx={{ fontSize: '0.8em' }}>
                            {stat.unit}
                          </Typography>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                          {stat.label}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* 发展历程 */}
              <Box sx={{ mb: { xs: 8, md: 12 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
                >
                  发展历程
                </Typography>
                <Box sx={{ position: 'relative', maxWidth: 1200, mx: 'auto' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 30, md: '50%' },
                      transform: { md: 'translateX(-50%)' },
                      height: '100%',
                      width: 3,
                      bgcolor: 'primary.main',
                      zIndex: 0,
                      borderRadius: 2,
                    }}
                  />
                  <Grid container spacing={4}>
                    {milestones.map((milestone, index) => (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                        }}
                      >
                        <Card
                          elevation={3}
                          sx={{
                            maxWidth: 450,
                            position: 'relative',
                            zIndex: 1,
                            bgcolor: index % 2 === 0 ? 'primary.main' : 'background.paper',
                            color: index % 2 === 0 ? 'white' : 'text.primary',
                            borderRadius: 3,
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateX(8px)',
                              boxShadow: 8,
                            },
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Typography
                              variant="h5"
                              gutterBottom
                              fontWeight="bold"
                              sx={{
                                color: index % 2 === 0 ? 'white' : 'primary.main',
                                fontSize: '1.5rem',
                                mb: 1.5,
                              }}
                            >
                              {milestone.year}
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.05rem' }}>
                              {milestone.event}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>

              {/* 荣誉资质 */}
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
                >
                  荣誉资质
                </Typography>
                <Grid container spacing={3}>
                  {honors.map((honor, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card
                        elevation={3}
                        sx={{
                          borderRadius: 3,
                          transition: 'all 0.3s',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: 8,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ fontSize: '1.2rem' }}>
                                {honor.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                                {honor.organization}
                              </Typography>
                            </Box>
                            <Chip
                              label={honor.year}
                              color="primary"
                              sx={{ ml: 2, fontWeight: 'bold' }}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}

          {tabValue === 1 && (
            <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
              {policies.map((policy, index) => (
                <Box key={index} sx={{ mb: index < policies.length - 1 ? 2 : 0 }}>
                  <Accordion defaultExpanded={index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h5">{policy.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Divider sx={{ mb: 2 }} />
                      {policy.content}
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  最后更新时间：2024年12月
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  如有疑问，请联系客服：support@okzquant.com
                </Typography>
              </Box>
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
}
