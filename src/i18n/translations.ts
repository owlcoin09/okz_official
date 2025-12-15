// 翻译内容
export interface Translations {
  nav: {
    home: string;
    markets: string;
    solutions: string;
    about: string;
    login: string;
    register: string;
  };
  footer: {
    company: string;
    description: string;
    products: string;
    about: string;
    contact: string;
    quantStrategy: string;
    dataAnalysis: string;
    api: string;
    accountManagement: string;
    companyIntro: string;
    history: string;
    honors: string;
    privacyPolicy: string;
    email: string;
    phone: string;
    address: string;
    copyright: string;
    userAgreement: string;
    riskWarning: string;
  };
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    viewStrategies: string;
    search: string;
    price: string;
    change24h: string;
    volume24h: string;
    high24h: string;
    low24h: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    viewStrategies: string;
    learnMore: string;
    stats: {
      users: string;
      usersDesc: string;
      assets: string;
      assetsDesc: string;
      strategies: string;
      strategiesDesc: string;
      returns: string;
      returnsDesc: string;
    };
    features: {
      smartStrategy: { title: string; description: string };
      security: { title: string; description: string };
      stableReturns: { title: string; description: string };
      dataAnalysis: { title: string; description: string };
      professionalService: { title: string; description: string };
      convenientManagement: { title: string; description: string };
    };
    whyChoose: {
      title: string;
      subtitle: string;
      items: string[];
    };
  };
  about: {
    title: string;
    subtitle: string;
    strengths: {
      professionalTeam: { title: string; description: string };
      security: { title: string; description: string };
      technology: { title: string; description: string };
      performance: { title: string; description: string };
    };
    milestones: string[];
    stats: {
      users: string;
      assets: string;
      strategies: string;
      returns: string;
      serviceHours: string;
      stability: string;
    };
    honors: {
      title: string;
      items: Array<{ title: string; organization: string; year: string }>;
    };
  };
  markets: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
  };
  services: {
    title: string;
    subtitle: string;
    services: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };
}

export const translations: Record<string, Translations> = {
  zh: {
    nav: {
      home: '首页',
      markets: '市场价格',
      solutions: '解决方案',
      about: '关于我们',
      login: '登录',
      register: '注册',
    },
    footer: {
      company: 'OKZ 量化交易',
      description: '专业的量化交易平台，基于 OKX 交易所，为全球投资者提供安全、高效、智能的量化交易解决方案。',
      products: '产品服务',
      about: '关于我们',
      contact: '联系我们',
      quantStrategy: '量化策略',
      dataAnalysis: '数据分析',
      api: 'API 接口',
      accountManagement: '账户管理',
      companyIntro: '公司简介',
      history: '发展历程',
      honors: '荣誉资质',
      privacyPolicy: '隐私政策',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: '北京市朝阳区\n金融科技大厦',
      copyright: '© 2024 OKZ 量化交易平台. 保留所有权利.',
      userAgreement: '用户协议',
      riskWarning: '风险提示',
    },
    common: {
      learnMore: '了解更多',
      getStarted: '开始使用',
      contactUs: '联系我们',
      viewStrategies: '查看策略',
      search: '搜索',
      price: '价格',
      change24h: '24h涨跌',
      volume24h: '24h成交量',
      high24h: '24h最高',
      low24h: '24h最低',
    },
    home: {
      heroTitle: '专业的量化交易平台',
      heroSubtitle: '基于 OKX 交易所，为您提供安全、高效、智能的量化交易解决方案',
      heroDescription: '10年+行业经验 | 银行级安全标准 | 7x24小时稳定运行',
      viewStrategies: '查看策略',
      learnMore: '了解更多',
      stats: {
        users: '累计用户',
        usersDesc: '全球用户信赖',
        assets: '管理资产',
        assetsDesc: '专业资产管理',
        strategies: '交易策略',
        strategiesDesc: '多样化策略选择',
        returns: '年化收益',
        returnsDesc: '平均收益率',
      },
      features: {
        smartStrategy: {
          title: '智能策略',
          description: '50+种经过市场验证的量化策略，自动执行交易，24小时不间断运行',
        },
        security: {
          title: '安全可靠',
          description: '采用银行级安全标准，多重加密保护，全方位保障您的资产和交易安全',
        },
        stableReturns: {
          title: '稳定收益',
          description: '年化收益率稳定在20%以上，累计管理资产超过10亿美元',
        },
        dataAnalysis: {
          title: '数据分析',
          description: '实时查看交易数据、收益统计和策略表现，专业的数据分析报告',
        },
        professionalService: {
          title: '专业服务',
          description: '7x24小时专业客服支持，快速响应，及时解决您的问题',
        },
        convenientManagement: {
          title: '便捷管理',
          description: '多账户统一管理，资金划转便捷，完善的账户权限管理',
        },
      },
      whyChoose: {
        title: '为什么选择我们',
        subtitle: '专业的量化交易平台，为您的投资保驾护航',
        items: [
          '10年+量化交易经验，专业团队',
          '银行级安全标准，多重加密保护',
          '50+种量化策略，多样化选择',
          '年化收益率稳定在20%以上',
          '7x24小时稳定运行，实时监控',
          '专业客服支持，快速响应',
        ],
      },
    },
    about: {
      title: '关于我们',
      subtitle: '专业的量化交易平台，为全球投资者提供安全、高效、智能的量化交易解决方案',
      strengths: {
        professionalTeam: {
          title: '专业团队',
          description: '拥有10年+量化交易经验的专业团队，核心成员来自知名金融机构和互联网公司',
        },
        security: {
          title: '安全可靠',
          description: '采用银行级安全标准，多重加密保护，保障用户资产和交易数据安全',
        },
        technology: {
          title: '技术领先',
          description: '自主研发的量化交易系统，毫秒级响应，7x24小时稳定运行',
        },
        performance: {
          title: '业绩优异',
          description: '累计管理资产超过10亿美元，年化收益率稳定在20%以上',
        },
      },
      milestones: [
        '2018年：公司成立，专注于量化交易技术研发',
        '2019年：获得首轮融资，团队规模扩大至50人',
        '2020年：自主研发的交易系统正式上线，用户突破1万人',
        '2021年：与OKX交易所达成深度合作，成为官方合作伙伴',
        '2022年：管理资产规模突破5亿美元，荣获行业最佳平台奖',
        '2023年：推出AI智能策略，用户突破10万人',
        '2024年：管理资产规模突破10亿美元，成立海外分公司',
      ],
      stats: {
        users: '累计用户',
        assets: '管理资产',
        strategies: '交易策略',
        returns: '年化收益',
        serviceHours: '服务时长',
        stability: '系统稳定性',
      },
      honors: {
        title: '荣誉资质',
        items: [
          { title: '2023年度最佳量化交易平台', organization: '中国金融科技协会', year: '2023' },
          { title: '金融科技创新奖', organization: '全球金融科技峰会', year: '2022' },
          { title: '用户满意度金奖', organization: '互联网金融行业', year: '2023' },
          { title: '安全合规认证', organization: '国际金融安全标准组织', year: '2022' },
        ],
      },
    },
    markets: {
      title: '市场价格',
      subtitle: '实时查看加密货币市场价格和交易数据',
      searchPlaceholder: '搜索交易对...',
      noResults: '未找到匹配的交易对',
    },
    services: {
      title: '产品服务',
      subtitle: '为您提供全方位的量化交易服务',
      services: [
        {
          title: '量化交易服务',
          description: '提供多种经过市场验证的量化交易策略，自动执行交易',
          features: [
            '50+种量化策略可选',
            '自动执行，无需人工干预',
            '实时监控和风险控制',
            '历史回测数据验证',
            '个性化策略定制',
          ],
        },
        {
          title: '数据分析服务',
          description: '提供专业的数据分析和市场洞察，助您做出更好的投资决策',
          features: [
            '实时市场数据分析',
            '策略表现评估',
            '风险分析报告',
            '收益预测模型',
            '定制化数据报表',
          ],
        },
        {
          title: '资产安全保障',
          description: '多重安全机制，全方位保障您的资产安全',
          features: [
            '银行级加密技术',
            '多重身份验证',
            '冷热钱包分离',
            '实时安全监控',
            '保险保障',
          ],
        },
        {
          title: '账户管理服务',
          description: '便捷的账户管理和资金操作，支持多账户管理',
          features: [
            '多账户统一管理',
            '资金划转便捷',
            '交易记录查询',
            '收益统计报表',
            '账户权限管理',
          ],
        },
        {
          title: 'API 接口服务',
          description: '提供完整的API接口，支持第三方系统集成',
          features: [
            'RESTful API接口',
            'WebSocket实时数据',
            '完善的API文档',
            '技术支持服务',
            '沙箱测试环境',
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      markets: 'Markets',
      solutions: 'Solutions',
      about: 'About',
      login: 'Login',
      register: 'Register',
    },
    footer: {
      company: 'OKZ Quantitative Trading',
      description: 'Professional quantitative trading platform based on OKX exchange, providing safe, efficient, and intelligent quantitative trading solutions for global investors.',
      products: 'Products & Services',
      about: 'About Us',
      contact: 'Contact Us',
      quantStrategy: 'Quantitative Strategies',
      dataAnalysis: 'Data Analysis',
      api: 'API Interface',
      accountManagement: 'Account Management',
      companyIntro: 'Company Introduction',
      history: 'History',
      honors: 'Honors & Qualifications',
      privacyPolicy: 'Privacy Policy',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Chaoyang District, Beijing\nFinTech Building',
      copyright: '© 2024 OKZ Quantitative Trading Platform. All rights reserved.',
      userAgreement: 'User Agreement',
      riskWarning: 'Risk Warning',
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      viewStrategies: 'View Strategies',
      search: 'Search',
      price: 'Price',
      change24h: '24h Change',
      volume24h: '24h Volume',
      high24h: '24h High',
      low24h: '24h Low',
    },
    home: {
      heroTitle: 'Professional Quantitative Trading Platform',
      heroSubtitle: 'Based on OKX exchange, providing safe, efficient, and intelligent quantitative trading solutions',
      heroDescription: '10+ years industry experience | Bank-level security | 7x24 hours stable operation',
      viewStrategies: 'View Strategies',
      learnMore: 'Learn More',
      stats: {
        users: 'Total Users',
        usersDesc: 'Trusted by global users',
        assets: 'Managed Assets',
        assetsDesc: 'Professional asset management',
        strategies: 'Trading Strategies',
        strategiesDesc: 'Diverse strategy options',
        returns: 'Annual Returns',
        returnsDesc: 'Average return rate',
      },
      features: {
        smartStrategy: {
          title: 'Smart Strategies',
          description: '50+ market-validated quantitative strategies, automatic execution, 24/7 operation',
        },
        security: {
          title: 'Secure & Reliable',
          description: 'Bank-level security standards, multiple encryption protection, comprehensive asset and trading security',
        },
        stableReturns: {
          title: 'Stable Returns',
          description: 'Annual return rate stable above 20%, cumulative managed assets exceed $1 billion',
        },
        dataAnalysis: {
          title: 'Data Analysis',
          description: 'Real-time trading data, profit statistics and strategy performance, professional data analysis reports',
        },
        professionalService: {
          title: 'Professional Service',
          description: '7x24 hours professional customer support, quick response, timely problem solving',
        },
        convenientManagement: {
          title: 'Convenient Management',
          description: 'Unified multi-account management, convenient fund transfer, comprehensive account permission management',
        },
      },
      whyChoose: {
        title: 'Why Choose Us',
        subtitle: 'Professional quantitative trading platform, protecting your investment',
        items: [
          '10+ years quantitative trading experience, professional team',
          'Bank-level security standards, multiple encryption protection',
          '50+ quantitative strategies, diverse options',
          'Annual return rate stable above 20%',
          '7x24 hours stable operation, real-time monitoring',
          'Professional customer support, quick response',
        ],
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Professional quantitative trading platform, providing safe, efficient, and intelligent quantitative trading solutions for global investors',
      strengths: {
        professionalTeam: {
          title: 'Professional Team',
          description: 'Professional team with 10+ years of quantitative trading experience, core members from renowned financial institutions and internet companies',
        },
        security: {
          title: 'Secure & Reliable',
          description: 'Bank-level security standards, multiple encryption protection, ensuring user assets and trading data security',
        },
        technology: {
          title: 'Advanced Technology',
          description: 'Self-developed quantitative trading system, millisecond-level response, 7x24 hours stable operation',
        },
        performance: {
          title: 'Excellent Performance',
          description: 'Cumulative managed assets exceed $1 billion, annual return rate stable above 20%',
        },
      },
      milestones: [
        '2018: Company founded, focusing on quantitative trading technology R&D',
        '2019: Received first round of funding, team expanded to 50 people',
        '2020: Self-developed trading system officially launched, users exceeded 10,000',
        '2021: Reached deep cooperation with OKX exchange, became official partner',
        '2022: Managed assets exceeded $500 million, won industry best platform award',
        '2023: Launched AI smart strategies, users exceeded 100,000',
        '2024: Managed assets exceeded $1 billion, established overseas branch',
      ],
      stats: {
        users: 'Total Users',
        assets: 'Managed Assets',
        strategies: 'Trading Strategies',
        returns: 'Annual Returns',
        serviceHours: 'Service Hours',
        stability: 'System Stability',
      },
      honors: {
        title: 'Honors & Qualifications',
        items: [
          { title: '2023 Best Quantitative Trading Platform', organization: 'China FinTech Association', year: '2023' },
          { title: 'FinTech Innovation Award', organization: 'Global FinTech Summit', year: '2022' },
          { title: 'User Satisfaction Gold Award', organization: 'Internet Finance Industry', year: '2023' },
          { title: 'Security Compliance Certification', organization: 'International Financial Security Standards Organization', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Market Prices',
      subtitle: 'View real-time cryptocurrency market prices and trading data',
      searchPlaceholder: 'Search trading pairs...',
      noResults: 'No matching trading pairs found',
    },
    services: {
      title: 'Products & Services',
      subtitle: 'Providing comprehensive quantitative trading services',
      services: [
        {
          title: 'Quantitative Trading Services',
          description: 'Provide various market-validated quantitative trading strategies, automatic execution',
          features: [
            '50+ quantitative strategies available',
            'Automatic execution, no manual intervention',
            'Real-time monitoring and risk control',
            'Historical backtesting data validation',
            'Personalized strategy customization',
          ],
        },
        {
          title: 'Data Analysis Services',
          description: 'Provide professional data analysis and market insights to help you make better investment decisions',
          features: [
            'Real-time market data analysis',
            'Strategy performance evaluation',
            'Risk analysis reports',
            'Return prediction models',
            'Customized data reports',
          ],
        },
        {
          title: 'Asset Security Protection',
          description: 'Multiple security mechanisms, comprehensive protection of your assets',
          features: [
            'Bank-level encryption technology',
            'Multi-factor authentication',
            'Cold and hot wallet separation',
            'Real-time security monitoring',
            'Insurance coverage',
          ],
        },
        {
          title: 'Account Management Services',
          description: 'Convenient account management and fund operations, supporting multi-account management',
          features: [
            'Unified multi-account management',
            'Convenient fund transfer',
            'Trading record query',
            'Profit statistics reports',
            'Account permission management',
          ],
        },
        {
          title: 'API Interface Services',
          description: 'Provide complete API interfaces, supporting third-party system integration',
          features: [
            'RESTful API interface',
            'WebSocket real-time data',
            'Complete API documentation',
            'Technical support services',
            'Sandbox test environment',
          ],
        },
      ],
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      markets: '市場価格',
      solutions: 'ソリューション',
      about: '会社概要',
      login: 'ログイン',
      register: '登録',
    },
    footer: {
      company: 'OKZ 定量取引',
      description: 'OKX取引所をベースとした専門的な定量取引プラットフォーム。世界中の投資家に安全で効率的なインテリジェントな定量取引ソリューションを提供します。',
      products: '製品・サービス',
      about: '会社概要',
      contact: 'お問い合わせ',
      quantStrategy: '定量戦略',
      dataAnalysis: 'データ分析',
      api: 'APIインターフェース',
      accountManagement: 'アカウント管理',
      companyIntro: '会社紹介',
      history: '沿革',
      honors: '栄誉と資格',
      privacyPolicy: 'プライバシーポリシー',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: '北京市朝陽区\n金融科技ビル',
      copyright: '© 2024 OKZ 定量取引プラットフォーム. 全著作権所有.',
      userAgreement: '利用規約',
      riskWarning: 'リスク警告',
    },
    common: {
      learnMore: '詳細を見る',
      getStarted: '始める',
      contactUs: 'お問い合わせ',
      viewStrategies: '戦略を見る',
      search: '検索',
      price: '価格',
      change24h: '24時間変動',
      volume24h: '24時間取引量',
      high24h: '24時間最高',
      low24h: '24時間最低',
    },
    home: {
      heroTitle: 'プロフェッショナルな定量取引プラットフォーム',
      heroSubtitle: 'OKX取引所をベースに、安全で効率的なインテリジェントな定量取引ソリューションを提供',
      heroDescription: '10年以上の業界経験 | 銀行レベルのセキュリティ | 7x24時間安定運用',
      viewStrategies: '戦略を見る',
      learnMore: '詳細を見る',
      stats: {
        users: '累計ユーザー',
        usersDesc: '世界中のユーザーに信頼',
        assets: '管理資産',
        assetsDesc: 'プロフェッショナルな資産管理',
        strategies: '取引戦略',
        strategiesDesc: '多様な戦略選択',
        returns: '年間リターン',
        returnsDesc: '平均リターン率',
      },
      features: {
        smartStrategy: { title: 'インテリジェント戦略', description: '50以上の市場検証済み定量戦略、自動実行、24時間無休運転' },
        security: { title: '安全で信頼性', description: '銀行レベルのセキュリティ標準、多重暗号化保護、資産と取引の包括的なセキュリティ' },
        stableReturns: { title: '安定したリターン', description: '年間リターン率20%以上で安定、累計管理資産10億ドル超' },
        dataAnalysis: { title: 'データ分析', description: 'リアルタイム取引データ、収益統計と戦略パフォーマンス、プロフェッショナルなデータ分析レポート' },
        professionalService: { title: 'プロフェッショナルサービス', description: '7x24時間プロフェッショナルカスタマーサポート、迅速な対応、タイムリーな問題解決' },
        convenientManagement: { title: '便利な管理', description: '複数アカウント統一管理、資金移動が便利、包括的なアカウント権限管理' },
      },
      whyChoose: {
        title: 'なぜ私たちを選ぶのか',
        subtitle: 'プロフェッショナルな定量取引プラットフォーム、あなたの投資を保護',
        items: ['10年以上の定量取引経験、プロフェッショナルチーム', '銀行レベルのセキュリティ標準、多重暗号化保護', '50以上の定量戦略、多様な選択', '年間リターン率20%以上で安定', '7x24時間安定運用、リアルタイム監視', 'プロフェッショナルカスタマーサポート、迅速な対応'],
      },
    },
    about: {
      title: '会社概要',
      subtitle: 'プロフェッショナルな定量取引プラットフォーム。世界中の投資家に安全で効率的なインテリジェントな定量取引ソリューションを提供',
      strengths: {
        professionalTeam: {
          title: 'プロフェッショナルチーム',
          description: '10年以上の定量取引経験を持つプロフェッショナルチーム。コアメンバーは有名な金融機関やインターネット企業出身',
        },
        security: {
          title: '安全で信頼性',
          description: '銀行レベルのセキュリティ標準、多重暗号化保護、ユーザーの資産と取引データのセキュリティを確保',
        },
        technology: {
          title: '技術リーダー',
          description: '独自開発の定量取引システム、ミリ秒レベルの応答、7x24時間安定運用',
        },
        performance: {
          title: '優れた業績',
          description: '累計管理資産10億ドル超、年間リターン率20%以上で安定',
        },
      },
      milestones: [
        '2018年：会社設立、定量取引技術の研究開発に専念',
        '2019年：初回資金調達を獲得、チーム規模を50人に拡大',
        '2020年：独自開発の取引システムが正式にリリース、ユーザー数が1万人を突破',
        '2021年：OKX取引所と深い協力関係を確立、公式パートナーとなる',
        '2022年：管理資産規模が5億ドルを突破、業界最優秀プラットフォーム賞を受賞',
        '2023年：AIインテリジェント戦略をリリース、ユーザー数が10万人を突破',
        '2024年：管理資産規模が10億ドルを突破、海外支社を設立',
      ],
      stats: {
        users: '累計ユーザー',
        assets: '管理資産',
        strategies: '取引戦略',
        returns: '年間リターン',
        serviceHours: 'サービス時間',
        stability: 'システム安定性',
      },
      honors: {
        title: '栄誉と資格',
        items: [
          { title: '2023年度最優秀定量取引プラットフォーム', organization: '中国金融科技協会', year: '2023' },
          { title: '金融科技创新賞', organization: 'グローバル金融科技サミット', year: '2022' },
          { title: 'ユーザー満足度金賞', organization: 'インターネット金融業界', year: '2023' },
          { title: 'セキュリティコンプライアンス認証', organization: '国際金融セキュリティ標準機関', year: '2022' },
        ],
      },
    },
    markets: {
      title: '市場価格',
      subtitle: '暗号通貨の市場価格と取引データをリアルタイムで確認',
      searchPlaceholder: '取引ペアを検索...',
      noResults: '一致する取引ペアが見つかりません',
    },
    services: {
      title: '製品・サービス',
      subtitle: '包括的な定量取引サービスを提供',
      services: [
        {
          title: '定量取引サービス',
          description: '市場検証済みの多様な定量取引戦略を提供し、自動的に取引を実行',
          features: [
            '50以上の定量戦略から選択可能',
            '自動実行、人的介入不要',
            'リアルタイム監視とリスク管理',
            '履歴バックテストデータ検証',
            'パーソナライズされた戦略カスタマイズ',
          ],
        },
        {
          title: 'データ分析サービス',
          description: 'プロフェッショナルなデータ分析と市場洞察を提供し、より良い投資判断をサポート',
          features: [
            'リアルタイム市場データ分析',
            '戦略パフォーマンス評価',
            'リスク分析レポート',
            '収益予測モデル',
            'カスタマイズされたデータレポート',
          ],
        },
        {
          title: '資産セキュリティ保護',
          description: '多重セキュリティメカニズム、資産の包括的な保護',
          features: [
            '銀行レベルの暗号化技術',
            '多要素認証',
            'コールド・ホットウォレット分離',
            'リアルタイムセキュリティ監視',
            '保険保障',
          ],
        },
        {
          title: 'アカウント管理サービス',
          description: '便利なアカウント管理と資金操作、複数アカウント管理をサポート',
          features: [
            '複数アカウント統一管理',
            '資金移動が便利',
            '取引記録照会',
            '収益統計レポート',
            'アカウント権限管理',
          ],
        },
        {
          title: 'APIインターフェースサービス',
          description: '完全なAPIインターフェースを提供し、サードパーティシステム統合をサポート',
          features: [
            'RESTful APIインターフェース',
            'WebSocketリアルタイムデータ',
            '完全なAPIドキュメント',
            '技術サポートサービス',
            'サンドボックステスト環境',
          ],
        },
      ],
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      markets: 'Märkte',
      solutions: 'Lösungen',
      about: 'Über uns',
      login: 'Anmelden',
      register: 'Registrieren',
    },
    footer: {
      company: 'OKZ Quantitativer Handel',
      description: 'Professionelle Plattform für quantitativen Handel basierend auf der OKX-Börse, die globalen Investoren sichere, effiziente und intelligente Lösungen für quantitativen Handel bietet.',
      products: 'Produkte & Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      quantStrategy: 'Quantitative Strategien',
      dataAnalysis: 'Datenanalyse',
      api: 'API-Schnittstelle',
      accountManagement: 'Kontoverwaltung',
      companyIntro: 'Firmenvorstellung',
      history: 'Geschichte',
      honors: 'Auszeichnungen & Qualifikationen',
      privacyPolicy: 'Datenschutzrichtlinie',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Chaoyang Bezirk, Peking\nFinTech Gebäude',
      copyright: '© 2024 OKZ Plattform für quantitativen Handel. Alle Rechte vorbehalten.',
      userAgreement: 'Nutzungsbedingungen',
      riskWarning: 'Risikowarnung',
    },
    common: {
      learnMore: 'Mehr erfahren',
      getStarted: 'Loslegen',
      contactUs: 'Kontaktieren Sie uns',
      viewStrategies: 'Strategien anzeigen',
      search: 'Suchen',
      price: 'Preis',
      change24h: '24h Änderung',
      volume24h: '24h Volumen',
      high24h: '24h Hoch',
      low24h: '24h Niedrig',
    },
    home: {
      heroTitle: 'Professionelle Plattform für quantitativen Handel',
      heroSubtitle: 'Basierend auf der OKX-Börse, bieten sichere, effiziente und intelligente Lösungen für quantitativen Handel',
      heroDescription: '10+ Jahre Branchenerfahrung | Bank-Level-Sicherheit | 7x24 Stunden stabiler Betrieb',
      viewStrategies: 'Strategien anzeigen',
      learnMore: 'Mehr erfahren',
      stats: {
        users: 'Gesamtbenutzer',
        usersDesc: 'Von globalen Benutzern vertraut',
        assets: 'Verwaltete Vermögenswerte',
        assetsDesc: 'Professionelles Vermögensverwaltung',
        strategies: 'Handelsstrategien',
        strategiesDesc: 'Vielfältige Strategieoptionen',
        returns: 'Jährliche Rendite',
        returnsDesc: 'Durchschnittliche Rendite',
      },
      features: {
        smartStrategy: { title: 'Intelligente Strategien', description: '50+ marktvalidierte quantitative Strategien, automatische Ausführung, 24/7 Betrieb' },
        security: { title: 'Sicher & Zuverlässig', description: 'Bank-Level-Sicherheitsstandards, mehrfacher Verschlüsselungsschutz, umfassende Vermögens- und Handelssicherheit' },
        stableReturns: { title: 'Stabile Renditen', description: 'Jährliche Rendite stabil über 20%, kumulierte verwaltete Vermögenswerte übersteigen 1 Milliarde USD' },
        dataAnalysis: { title: 'Datenanalyse', description: 'Echtzeit-Handelsdaten, Gewinnstatistiken und Strategieleistung, professionelle Datenanalyseberichte' },
        professionalService: { title: 'Professioneller Service', description: '7x24 Stunden professioneller Kundensupport, schnelle Reaktion, rechtzeitige Problemlösung' },
        convenientManagement: { title: 'Bequemes Management', description: 'Einheitliches Multi-Konto-Management, bequemer Geldtransfer, umfassendes Kontoberechtigungsmanagement' },
      },
      whyChoose: {
        title: 'Warum uns wählen',
        subtitle: 'Professionelle Plattform für quantitativen Handel, schützt Ihre Investition',
        items: ['10+ Jahre quantitative Handelserfahrung, professionelles Team', 'Bank-Level-Sicherheitsstandards, mehrfacher Verschlüsselungsschutz', '50+ quantitative Strategien, vielfältige Optionen', 'Jährliche Rendite stabil über 20%', '7x24 Stunden stabiler Betrieb, Echtzeitüberwachung', 'Professioneller Kundensupport, schnelle Reaktion'],
      },
    },
    about: {
      title: 'Über uns',
      subtitle: 'Professionelle Plattform für quantitativen Handel, die globalen Investoren sichere, effiziente und intelligente Lösungen für quantitativen Handel bietet',
      strengths: {
        professionalTeam: {
          title: 'Professionelles Team',
          description: 'Professionelles Team mit 10+ Jahren Erfahrung im quantitativen Handel, Kernmitglieder von renommierten Finanzinstituten und Internetunternehmen',
        },
        security: {
          title: 'Sicher & Zuverlässig',
          description: 'Bank-Level-Sicherheitsstandards, mehrfacher Verschlüsselungsschutz, Gewährleistung der Sicherheit von Benutzervermögen und Handelsdaten',
        },
        technology: {
          title: 'Führende Technologie',
          description: 'Selbstentwickeltes System für quantitativen Handel, Millisekunden-Reaktionszeit, 7x24 Stunden stabiler Betrieb',
        },
        performance: {
          title: 'Ausgezeichnete Leistung',
          description: 'Kumulierte verwaltete Vermögenswerte übersteigen 1 Milliarde USD, jährliche Rendite stabil über 20%',
        },
      },
      milestones: [
        '2018: Unternehmen gegründet, Fokus auf Forschung und Entwicklung von Technologie für quantitativen Handel',
        '2019: Erste Finanzierungsrunde erhalten, Team auf 50 Personen erweitert',
        '2020: Selbstentwickeltes Handelssystem offiziell gestartet, Benutzerzahl überschritt 10.000',
        '2021: Tiefe Zusammenarbeit mit OKX-Börse erreicht, offizieller Partner geworden',
        '2022: Verwaltete Vermögenswerte überschritten 500 Millionen USD, Branchenpreis für beste Plattform gewonnen',
        '2023: KI-Intelligente Strategien gestartet, Benutzerzahl überschritt 100.000',
        '2024: Verwaltete Vermögenswerte überschritten 1 Milliarde USD, Übersee-Niederlassung gegründet',
      ],
      stats: {
        users: 'Gesamtbenutzer',
        assets: 'Verwaltete Vermögenswerte',
        strategies: 'Handelsstrategien',
        returns: 'Jährliche Rendite',
        serviceHours: 'Service-Stunden',
        stability: 'Systemstabilität',
      },
      honors: {
        title: 'Auszeichnungen & Qualifikationen',
        items: [
          { title: '2023 Beste Plattform für quantitativen Handel', organization: 'China FinTech Association', year: '2023' },
          { title: 'FinTech-Innovationspreis', organization: 'Global FinTech Summit', year: '2022' },
          { title: 'Goldpreis für Benutzerzufriedenheit', organization: 'Internet-Finanzbranche', year: '2023' },
          { title: 'Sicherheits-Compliance-Zertifizierung', organization: 'Internationale Organisation für Finanzsicherheitsstandards', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Marktpreise',
      subtitle: 'Echtzeit-Kryptowährungsmarkpreise und Handelsdaten anzeigen',
      searchPlaceholder: 'Handelspaare suchen...',
      noResults: 'Keine passenden Handelspaare gefunden',
    },
    services: {
      title: 'Produkte & Dienstleistungen',
      subtitle: 'Umfassende Dienstleistungen für quantitativen Handel anbieten',
      services: [
        {
          title: 'Dienstleistungen für quantitativen Handel',
          description: 'Bereitstellung verschiedener marktvalidierter Strategien für quantitativen Handel, automatische Ausführung',
          features: [
            '50+ Strategien für quantitativen Handel verfügbar',
            'Automatische Ausführung, keine manuelle Intervention',
            'Echtzeitüberwachung und Risikokontrolle',
            'Validierung historischer Backtesting-Daten',
            'Personalisierte Strategieanpassung',
          ],
        },
        {
          title: 'Datenanalysedienstleistungen',
          description: 'Bereitstellung professioneller Datenanalyse und Markteinblicke zur Unterstützung besserer Investitionsentscheidungen',
          features: [
            'Echtzeit-Marktdatenanalyse',
            'Strategieleistungsbewertung',
            'Risikoanalyseberichte',
            'Renditevorhersagemodelle',
            'Angepasste Datenberichte',
          ],
        },
        {
          title: 'Vermögenssicherheitsschutz',
          description: 'Mehrere Sicherheitsmechanismen, umfassender Schutz Ihrer Vermögenswerte',
          features: [
            'Bank-Level-Verschlüsselungstechnologie',
            'Mehrfaktor-Authentifizierung',
            'Trennung von Cold- und Hot-Wallets',
            'Echtzeit-Sicherheitsüberwachung',
            'Versicherungsschutz',
          ],
        },
        {
          title: 'Kontoverwaltungsdienste',
          description: 'Bequeme Kontoverwaltung und Geldoperationen, Unterstützung für Multi-Konto-Verwaltung',
          features: [
            'Einheitliche Multi-Konto-Verwaltung',
            'Bequemer Geldtransfer',
            'Handelsdatensatzabfrage',
            'Gewinnstatistikberichte',
            'Kontoberechtigungsverwaltung',
          ],
        },
        {
          title: 'API-Schnittstellendienste',
          description: 'Bereitstellung vollständiger API-Schnittstellen, Unterstützung für Drittanbieter-Systemintegration',
          features: [
            'RESTful API-Schnittstelle',
            'WebSocket-Echtzeitdaten',
            'Vollständige API-Dokumentation',
            'Technischer Support-Service',
            'Sandbox-Testumgebung',
          ],
        },
      ],
    },
  },
  hi: {
    nav: {
      home: 'होम',
      markets: 'बाजार',
      solutions: 'समाधान',
      about: 'हमारे बारे में',
      login: 'लॉगिन',
      register: 'पंजीकरण',
    },
    footer: {
      company: 'OKZ मात्रात्मक व्यापार',
      description: 'OKX एक्सचेंज पर आधारित पेशेवर मात्रात्मक व्यापार प्लेटफॉर्म, वैश्विक निवेशकों के लिए सुरक्षित, कुशल और बुद्धिमान मात्रात्मक व्यापार समाधान प्रदान करता है।',
      products: 'उत्पाद और सेवाएं',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
      quantStrategy: 'मात्रात्मक रणनीतियां',
      dataAnalysis: 'डेटा विश्लेषण',
      api: 'API इंटरफेस',
      accountManagement: 'खाता प्रबंधन',
      companyIntro: 'कंपनी परिचय',
      history: 'इतिहास',
      honors: 'सम्मान और योग्यता',
      privacyPolicy: 'गोपनीयता नीति',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'चाओयांग जिला, बीजिंग\nफिनटेक भवन',
      copyright: '© 2024 OKZ मात्रात्मक व्यापार प्लेटफॉर्म. सभी अधिकार सुरक्षित।',
      userAgreement: 'उपयोगकर्ता समझौता',
      riskWarning: 'जोखिम चेतावनी',
    },
    common: {
      learnMore: 'अधिक जानें',
      getStarted: 'शुरू करें',
      contactUs: 'संपर्क करें',
      viewStrategies: 'रणनीतियां देखें',
      search: 'खोजें',
      price: 'कीमत',
      change24h: '24h परिवर्तन',
      volume24h: '24h मात्रा',
      high24h: '24h उच्च',
      low24h: '24h निम्न',
    },
    home: {
      heroTitle: 'पेशेवर मात्रात्मक व्यापार प्लेटफॉर्म',
      heroSubtitle: 'OKX एक्सचेंज पर आधारित, सुरक्षित, कुशल और बुद्धिमान मात्रात्मक व्यापार समाधान प्रदान करता है',
      heroDescription: '10+ वर्षों का उद्योग अनुभव | बैंक-स्तरीय सुरक्षा | 7x24 घंटे स्थिर संचालन',
      viewStrategies: 'रणनीतियां देखें',
      learnMore: 'अधिक जानें',
      stats: {
        users: 'कुल उपयोगकर्ता',
        usersDesc: 'वैश्विक उपयोगकर्ताओं द्वारा विश्वसनीय',
        assets: 'प्रबंधित संपत्ति',
        assetsDesc: 'पेशेवर संपत्ति प्रबंधन',
        strategies: 'व्यापार रणनीतियां',
        strategiesDesc: 'विविध रणनीति विकल्प',
        returns: 'वार्षिक रिटर्न',
        returnsDesc: 'औसत रिटर्न दर',
      },
      features: {
        smartStrategy: { title: 'स्मार्ट रणनीतियां', description: '50+ बाजार-सत्यापित मात्रात्मक रणनीतियां, स्वचालित निष्पादन, 24/7 संचालन' },
        security: { title: 'सुरक्षित और विश्वसनीय', description: 'बैंक-स्तरीय सुरक्षा मानक, कई एन्क्रिप्शन सुरक्षा, व्यापक संपत्ति और व्यापार सुरक्षा' },
        stableReturns: { title: 'स्थिर रिटर्न', description: 'वार्षिक रिटर्न दर 20% से अधिक स्थिर, संचयी प्रबंधित संपत्ति $1 बिलियन से अधिक' },
        dataAnalysis: { title: 'डेटा विश्लेषण', description: 'वास्तविक समय व्यापार डेटा, लाभ सांख्यिकी और रणनीति प्रदर्शन, पेशेवर डेटा विश्लेषण रिपोर्ट' },
        professionalService: { title: 'पेशेवर सेवा', description: '7x24 घंटे पेशेवर ग्राहक सहायता, त्वरित प्रतिक्रिया, समय पर समस्या समाधान' },
        convenientManagement: { title: 'सुविधाजनक प्रबंधन', description: 'एकीकृत बहु-खाता प्रबंधन, सुविधाजनक धन हस्तांतरण, व्यापक खाता अनुमति प्रबंधन' },
      },
      whyChoose: {
        title: 'हमें क्यों चुनें',
        subtitle: 'पेशेवर मात्रात्मक व्यापार प्लेटफॉर्म, आपके निवेश की सुरक्षा',
        items: ['10+ वर्षों का मात्रात्मक व्यापार अनुभव, पेशेवर टीम', 'बैंक-स्तरीय सुरक्षा मानक, कई एन्क्रिप्शन सुरक्षा', '50+ मात्रात्मक रणनीतियां, विविध विकल्प', 'वार्षिक रिटर्न दर 20% से अधिक स्थिर', '7x24 घंटे स्थिर संचालन, वास्तविक समय निगरानी', 'पेशेवर ग्राहक सहायता, त्वरित प्रतिक्रिया'],
      },
    },
    about: {
      title: 'हमारे बारे में',
      subtitle: 'पेशेवर मात्रात्मक व्यापार प्लेटफॉर्म, वैश्विक निवेशकों के लिए सुरक्षित, कुशल और बुद्धिमान मात्रात्मक व्यापार समाधान प्रदान करता है',
      strengths: {
        professionalTeam: {
          title: 'पेशेवर टीम',
          description: '10+ वर्षों के मात्रात्मक व्यापार अनुभव के साथ पेशेवर टीम, प्रसिद्ध वित्तीय संस्थानों और इंटरनेट कंपनियों के मूल सदस्य',
        },
        security: {
          title: 'सुरक्षित और विश्वसनीय',
          description: 'बैंक-स्तरीय सुरक्षा मानक, कई एन्क्रिप्शन सुरक्षा, उपयोगकर्ता संपत्ति और व्यापार डेटा सुरक्षा सुनिश्चित करना',
        },
        technology: {
          title: 'अग्रणी प्रौद्योगिकी',
          description: 'स्व-विकसित मात्रात्मक व्यापार प्रणाली, मिलीसेकंड-स्तरीय प्रतिक्रिया, 7x24 घंटे स्थिर संचालन',
        },
        performance: {
          title: 'उत्कृष्ट प्रदर्शन',
          description: 'संचयी प्रबंधित संपत्ति $1 बिलियन से अधिक, वार्षिक रिटर्न दर 20% से अधिक स्थिर',
        },
      },
      milestones: [
        '2018: कंपनी की स्थापना, मात्रात्मक व्यापार प्रौद्योगिकी अनुसंधान और विकास पर ध्यान केंद्रित',
        '2019: पहला वित्तपोषण प्राप्त किया, टीम का आकार 50 लोगों तक बढ़ाया',
        '2020: स्व-विकसित व्यापार प्रणाली आधिकारिक रूप से लॉन्च की गई, उपयोगकर्ता 10,000 से अधिक',
        '2021: OKX एक्सचेंज के साथ गहरी साझेदारी स्थापित की, आधिकारिक भागीदार बना',
        '2022: प्रबंधित संपत्ति $500 मिलियन से अधिक, उद्योग सर्वश्रेष्ठ प्लेटफॉर्म पुरस्कार जीता',
        '2023: AI स्मार्ट रणनीतियां लॉन्च कीं, उपयोगकर्ता 100,000 से अधिक',
        '2024: प्रबंधित संपत्ति $1 बिलियन से अधिक, विदेशी शाखा स्थापित की',
      ],
      stats: {
        users: 'कुल उपयोगकर्ता',
        assets: 'प्रबंधित संपत्ति',
        strategies: 'व्यापार रणनीतियां',
        returns: 'वार्षिक रिटर्न',
        serviceHours: 'सेवा घंटे',
        stability: 'सिस्टम स्थिरता',
      },
      honors: {
        title: 'सम्मान और योग्यता',
        items: [
          { title: '2023 सर्वश्रेष्ठ मात्रात्मक व्यापार प्लेटफॉर्म', organization: 'चीन फिनटेक एसोसिएशन', year: '2023' },
          { title: 'फिनटेक नवाचार पुरस्कार', organization: 'वैश्विक फिनटेक शिखर सम्मेलन', year: '2022' },
          { title: 'उपयोगकर्ता संतुष्टि स्वर्ण पुरस्कार', organization: 'इंटरनेट वित्त उद्योग', year: '2023' },
          { title: 'सुरक्षा अनुपालन प्रमाणन', organization: 'अंतर्राष्ट्रीय वित्तीय सुरक्षा मानक संगठन', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'बाजार मूल्य',
      subtitle: 'क्रिप्टोकरेंसी बाजार मूल्य और व्यापार डेटा वास्तविक समय में देखें',
      searchPlaceholder: 'व्यापार जोड़े खोजें...',
      noResults: 'कोई मिलान व्यापार जोड़े नहीं मिले',
    },
    services: {
      title: 'उत्पाद और सेवाएं',
      subtitle: 'व्यापक मात्रात्मक व्यापार सेवाएं प्रदान करना',
      services: [
        {
          title: 'मात्रात्मक व्यापार सेवाएं',
          description: 'विभिन्न बाजार-सत्यापित मात्रात्मक व्यापार रणनीतियां प्रदान करना, स्वचालित निष्पादन',
          features: [
            '50+ मात्रात्मक रणनीतियां उपलब्ध',
            'स्वचालित निष्पादन, कोई मैनुअल हस्तक्षेप नहीं',
            'वास्तविक समय निगरानी और जोखिम नियंत्रण',
            'ऐतिहासिक बैकटेस्टिंग डेटा सत्यापन',
            'व्यक्तिगत रणनीति अनुकूलन',
          ],
        },
        {
          title: 'डेटा विश्लेषण सेवाएं',
          description: 'पेशेवर डेटा विश्लेषण और बाजार अंतर्दृष्टि प्रदान करना, बेहतर निवेश निर्णय लेने में मदद करना',
          features: [
            'वास्तविक समय बाजार डेटा विश्लेषण',
            'रणनीति प्रदर्शन मूल्यांकन',
            'जोखिम विश्लेषण रिपोर्ट',
            'रिटर्न भविष्यवाणी मॉडल',
            'अनुकूलित डेटा रिपोर्ट',
          ],
        },
        {
          title: 'संपत्ति सुरक्षा सुरक्षा',
          description: 'कई सुरक्षा तंत्र, आपकी संपत्ति की व्यापक सुरक्षा',
          features: [
            'बैंक-स्तरीय एन्क्रिप्शन प्रौद्योगिकी',
            'बहु-कारक प्रमाणीकरण',
            'ठंडे और गर्म वॉलेट अलगाव',
            'वास्तविक समय सुरक्षा निगरानी',
            'बीमा कवरेज',
          ],
        },
        {
          title: 'खाता प्रबंधन सेवाएं',
          description: 'सुविधाजनक खाता प्रबंधन और धन संचालन, बहु-खाता प्रबंधन का समर्थन',
          features: [
            'बहु-खाता एकीकृत प्रबंधन',
            'सुविधाजनक धन हस्तांतरण',
            'व्यापार रिकॉर्ड क्वेरी',
            'लाभ सांख्यिकी रिपोर्ट',
            'खाता अनुमति प्रबंधन',
          ],
        },
        {
          title: 'API इंटरफेस सेवाएं',
          description: 'पूर्ण API इंटरफेस प्रदान करना, तृतीय-पक्ष सिस्टम एकीकरण का समर्थन',
          features: [
            'RESTful API इंटरफेस',
            'WebSocket वास्तविक समय डेटा',
            'पूर्ण API दस्तावेज़',
            'तकनीकी सहायता सेवाएं',
            'सैंडबॉक्स परीक्षण वातावरण',
          ],
        },
      ],
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      markets: 'Marchés',
      solutions: 'Solutions',
      about: 'À propos',
      login: 'Connexion',
      register: 'Inscription',
    },
    footer: {
      company: 'OKZ Trading Quantitatif',
      description: 'Plateforme professionnelle de trading quantitatif basée sur l\'échange OKX, offrant des solutions de trading quantitatif sûres, efficaces et intelligentes pour les investisseurs mondiaux.',
      products: 'Produits et Services',
      about: 'À propos de nous',
      contact: 'Contactez-nous',
      quantStrategy: 'Stratégies Quantitatives',
      dataAnalysis: 'Analyse de Données',
      api: 'Interface API',
      accountManagement: 'Gestion de Compte',
      companyIntro: 'Présentation de l\'entreprise',
      history: 'Historique',
      honors: 'Honneurs et Qualifications',
      privacyPolicy: 'Politique de Confidentialité',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'District de Chaoyang, Pékin\nBâtiment FinTech',
      copyright: '© 2024 Plateforme de Trading Quantitatif OKZ. Tous droits réservés.',
      userAgreement: 'Accord Utilisateur',
      riskWarning: 'Avertissement de Risque',
    },
    common: {
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      contactUs: 'Contactez-nous',
      viewStrategies: 'Voir les stratégies',
      search: 'Rechercher',
      price: 'Prix',
      change24h: 'Variation 24h',
      volume24h: 'Volume 24h',
      high24h: 'Haut 24h',
      low24h: 'Bas 24h',
    },
    home: {
      heroTitle: 'Plateforme Professionnelle de Trading Quantitatif',
      heroSubtitle: 'Basée sur l\'échange OKX, offrant des solutions de trading quantitatif sûres, efficaces et intelligentes',
      heroDescription: '10+ années d\'expérience dans l\'industrie | Sécurité de niveau bancaire | Fonctionnement stable 7x24 heures',
      viewStrategies: 'Voir les stratégies',
      learnMore: 'En savoir plus',
      stats: {
        users: 'Utilisateurs Totaux',
        usersDesc: 'Fait confiance par les utilisateurs mondiaux',
        assets: 'Actifs Gérés',
        assetsDesc: 'Gestion professionnelle des actifs',
        strategies: 'Stratégies de Trading',
        strategiesDesc: 'Options de stratégie diversifiées',
        returns: 'Rendements Annuels',
        returnsDesc: 'Taux de rendement moyen',
      },
      features: {
        smartStrategy: { title: 'Stratégies Intelligentes', description: '50+ stratégies quantitatives validées par le marché, exécution automatique, fonctionnement 24/7' },
        security: { title: 'Sécurisé et Fiable', description: 'Normes de sécurité de niveau bancaire, protection par chiffrement multiple, sécurité complète des actifs et des transactions' },
        stableReturns: { title: 'Rendements Stables', description: 'Taux de rendement annuel stable au-dessus de 20%, actifs gérés cumulatifs dépassent 1 milliard USD' },
        dataAnalysis: { title: 'Analyse de Données', description: 'Données de trading en temps réel, statistiques de profit et performance des stratégies, rapports d\'analyse de données professionnels' },
        professionalService: { title: 'Service Professionnel', description: 'Support client professionnel 7x24 heures, réponse rapide, résolution de problèmes en temps opportun' },
        convenientManagement: { title: 'Gestion Pratique', description: 'Gestion unifiée multi-comptes, transfert de fonds pratique, gestion complète des permissions de compte' },
      },
      whyChoose: {
        title: 'Pourquoi Nous Choisir',
        subtitle: 'Plateforme professionnelle de trading quantitatif, protégeant votre investissement',
        items: ['10+ années d\'expérience en trading quantitatif, équipe professionnelle', 'Normes de sécurité de niveau bancaire, protection par chiffrement multiple', '50+ stratégies quantitatives, options diversifiées', 'Taux de rendement annuel stable au-dessus de 20%', 'Fonctionnement stable 7x24 heures, surveillance en temps réel', 'Support client professionnel, réponse rapide'],
      },
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Plateforme professionnelle de trading quantitatif, offrant des solutions de trading quantitatif sûres, efficaces et intelligentes pour les investisseurs mondiaux',
      strengths: {
        professionalTeam: {
          title: 'Équipe Professionnelle',
          description: 'Équipe professionnelle avec 10+ années d\'expérience en trading quantitatif, membres clés d\'institutions financières et d\'entreprises Internet renommées',
        },
        security: {
          title: 'Sécurisé et Fiable',
          description: 'Normes de sécurité de niveau bancaire, protection par chiffrement multiple, garantissant la sécurité des actifs utilisateurs et des données de trading',
        },
        technology: {
          title: 'Technologie Avancée',
          description: 'Système de trading quantitatif auto-développé, réponse au niveau milliseconde, fonctionnement stable 7x24 heures',
        },
        performance: {
          title: 'Performance Excellente',
          description: 'Actifs gérés cumulatifs dépassent 1 milliard USD, taux de rendement annuel stable au-dessus de 20%',
        },
      },
      milestones: [
        '2018: Entreprise fondée, se concentrant sur la R&D technologique de trading quantitatif',
        '2019: Premier financement obtenu, équipe étendue à 50 personnes',
        '2020: Système de trading auto-développé officiellement lancé, utilisateurs dépassent 10 000',
        '2021: Coopération approfondie avec l\'échange OKX, devenu partenaire officiel',
        '2022: Actifs gérés dépassent 500 millions USD, remporté le prix de la meilleure plateforme de l\'industrie',
        '2023: Stratégies intelligentes IA lancées, utilisateurs dépassent 100 000',
        '2024: Actifs gérés dépassent 1 milliard USD, succursale à l\'étranger établie',
      ],
      stats: {
        users: 'Utilisateurs Totaux',
        assets: 'Actifs Gérés',
        strategies: 'Stratégies de Trading',
        returns: 'Rendements Annuels',
        serviceHours: 'Heures de Service',
        stability: 'Stabilité du Système',
      },
      honors: {
        title: 'Honneurs et Qualifications',
        items: [
          { title: '2023 Meilleure Plateforme de Trading Quantitatif', organization: 'Association FinTech de Chine', year: '2023' },
          { title: 'Prix d\'Innovation FinTech', organization: 'Sommet Mondial FinTech', year: '2022' },
          { title: 'Prix d\'Or de Satisfaction Utilisateur', organization: 'Industrie Financière Internet', year: '2023' },
          { title: 'Certification de Conformité Sécuritaire', organization: 'Organisation Internationale des Normes de Sécurité Financière', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Prix du Marché',
      subtitle: 'Voir les prix du marché des cryptomonnaies et les données de trading en temps réel',
      searchPlaceholder: 'Rechercher des paires de trading...',
      noResults: 'Aucune paire de trading correspondante trouvée',
    },
    services: {
      title: 'Produits et Services',
      subtitle: 'Offrir des services complets de trading quantitatif',
      services: [
        {
          title: 'Services de Trading Quantitatif',
          description: 'Fournir diverses stratégies de trading quantitatif validées par le marché, exécution automatique',
          features: [
            '50+ stratégies quantitatives disponibles',
            'Exécution automatique, aucune intervention manuelle',
            'Surveillance en temps réel et contrôle des risques',
            'Validation des données de backtesting historiques',
            'Personnalisation de stratégie personnalisée',
          ],
        },
        {
          title: 'Services d\'Analyse de Données',
          description: 'Fournir une analyse de données professionnelle et des insights de marché pour aider à prendre de meilleures décisions d\'investissement',
          features: [
            'Analyse de données de marché en temps réel',
            'Évaluation de la performance des stratégies',
            'Rapports d\'analyse des risques',
            'Modèles de prédiction des rendements',
            'Rapports de données personnalisés',
          ],
        },
        {
          title: 'Protection de la Sécurité des Actifs',
          description: 'Plusieurs mécanismes de sécurité, protection complète de vos actifs',
          features: [
            'Technologie de chiffrement de niveau bancaire',
            'Authentification multi-facteurs',
            'Séparation des portefeuilles chauds et froids',
            'Surveillance de sécurité en temps réel',
            'Couverture d\'assurance',
          ],
        },
        {
          title: 'Services de Gestion de Compte',
          description: 'Gestion de compte pratique et opérations de fonds, supportant la gestion multi-comptes',
          features: [
            'Gestion unifiée multi-comptes',
            'Transfert de fonds pratique',
            'Requête d\'historique de trading',
            'Rapports de statistiques de profit',
            'Gestion des permissions de compte',
          ],
        },
        {
          title: 'Services d\'Interface API',
          description: 'Fournir des interfaces API complètes, supportant l\'intégration de systèmes tiers',
          features: [
            'Interface API RESTful',
            'Données en temps réel WebSocket',
            'Documentation API complète',
            'Services de support technique',
            'Environnement de test Sandbox',
          ],
        },
      ],
    },
  },
  it: {
    nav: {
      home: 'Home',
      markets: 'Mercati',
      solutions: 'Soluzioni',
      about: 'Chi siamo',
      login: 'Accedi',
      register: 'Registrati',
    },
    footer: {
      company: 'OKZ Trading Quantitativo',
      description: 'Piattaforma professionale di trading quantitativo basata sull\'exchange OKX, che offre soluzioni di trading quantitativo sicure, efficienti e intelligenti per gli investitori globali.',
      products: 'Prodotti e Servizi',
      about: 'Chi siamo',
      contact: 'Contattaci',
      quantStrategy: 'Strategie Quantitative',
      dataAnalysis: 'Analisi dei Dati',
      api: 'Interfaccia API',
      accountManagement: 'Gestione Account',
      companyIntro: 'Presentazione Aziendale',
      history: 'Storia',
      honors: 'Onorificenze e Qualifiche',
      privacyPolicy: 'Politica sulla Privacy',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Distretto di Chaoyang, Pechino\nEdificio FinTech',
      copyright: '© 2024 Piattaforma di Trading Quantitativo OKZ. Tutti i diritti riservati.',
      userAgreement: 'Accordo Utente',
      riskWarning: 'Avviso di Rischio',
    },
    common: {
      learnMore: 'Scopri di più',
      getStarted: 'Inizia',
      contactUs: 'Contattaci',
      viewStrategies: 'Visualizza Strategie',
      search: 'Cerca',
      price: 'Prezzo',
      change24h: 'Variazione 24h',
      volume24h: 'Volume 24h',
      high24h: 'Massimo 24h',
      low24h: 'Minimo 24h',
    },
    home: {
      heroTitle: 'Piattaforma Professionale di Trading Quantitativo',
      heroSubtitle: 'Basata sull\'exchange OKX, offre soluzioni di trading quantitativo sicure, efficienti e intelligenti',
      heroDescription: '10+ anni di esperienza nel settore | Sicurezza di livello bancario | Funzionamento stabile 7x24 ore',
      viewStrategies: 'Visualizza Strategie',
      learnMore: 'Scopri di più',
      stats: {
        users: 'Utenti Totali',
        usersDesc: 'Fidati dagli utenti globali',
        assets: 'Attività Gestite',
        assetsDesc: 'Gestione professionale delle attività',
        strategies: 'Strategie di Trading',
        strategiesDesc: 'Opzioni di strategia diversificate',
        returns: 'Rendimenti Annuali',
        returnsDesc: 'Tasso di rendimento medio',
      },
      features: {
        smartStrategy: { title: 'Strategie Intelligenti', description: '50+ strategie quantitative validate dal mercato, esecuzione automatica, funzionamento 24/7' },
        security: { title: 'Sicuro e Affidabile', description: 'Standard di sicurezza di livello bancario, protezione crittografica multipla, sicurezza completa di attività e trading' },
        stableReturns: { title: 'Rendimenti Stabili', description: 'Tasso di rendimento annuo stabile sopra il 20%, attività gestite cumulative superano 1 miliardo USD' },
        dataAnalysis: { title: 'Analisi dei Dati', description: 'Dati di trading in tempo reale, statistiche di profitto e performance delle strategie, rapporti di analisi dati professionali' },
        professionalService: { title: 'Servizio Professionale', description: 'Supporto clienti professionale 7x24 ore, risposta rapida, risoluzione tempestiva dei problemi' },
        convenientManagement: { title: 'Gestione Conveniente', description: 'Gestione unificata multi-conto, trasferimento fondi conveniente, gestione completa delle autorizzazioni dell\'account' },
      },
      whyChoose: {
        title: 'Perché Sceglierci',
        subtitle: 'Piattaforma professionale di trading quantitativo, proteggendo il tuo investimento',
        items: ['10+ anni di esperienza nel trading quantitativo, team professionale', 'Standard di sicurezza di livello bancario, protezione crittografica multipla', '50+ strategie quantitative, opzioni diversificate', 'Tasso di rendimento annuo stabile sopra il 20%', 'Funzionamento stabile 7x24 ore, monitoraggio in tempo reale', 'Supporto clienti professionale, risposta rapida'],
      },
    },
    about: {
      title: 'Chi Siamo',
      subtitle: 'Piattaforma professionale di trading quantitativo, che offre soluzioni di trading quantitativo sicure, efficienti e intelligenti per investitori globali',
      strengths: {
        professionalTeam: {
          title: 'Team Professionale',
          description: 'Team professionale con 10+ anni di esperienza nel trading quantitativo, membri chiave da istituzioni finanziarie e aziende Internet rinomate',
        },
        security: {
          title: 'Sicuro e Affidabile',
          description: 'Standard di sicurezza di livello bancario, protezione crittografica multipla, garantendo la sicurezza delle attività utente e dei dati di trading',
        },
        technology: {
          title: 'Tecnologia Avanzata',
          description: 'Sistema di trading quantitativo auto-sviluppato, risposta a livello di millisecondi, funzionamento stabile 7x24 ore',
        },
        performance: {
          title: 'Prestazioni Eccellenti',
          description: 'Attività gestite cumulative superano 1 miliardo USD, tasso di rendimento annuo stabile sopra il 20%',
        },
      },
      milestones: [
        '2018: Azienda fondata, concentrandosi sulla R&S tecnologica del trading quantitativo',
        '2019: Primo finanziamento ottenuto, team espanso a 50 persone',
        '2020: Sistema di trading auto-sviluppato ufficialmente lanciato, utenti superano 10.000',
        '2021: Cooperazione approfondita con l\'exchange OKX, diventato partner ufficiale',
        '2022: Attività gestite superano 500 milioni USD, vinto il premio migliore piattaforma del settore',
        '2023: Strategie intelligenti IA lanciate, utenti superano 100.000',
        '2024: Attività gestite superano 1 miliardo USD, filiale all\'estero stabilita',
      ],
      stats: {
        users: 'Utenti Totali',
        assets: 'Attività Gestite',
        strategies: 'Strategie di Trading',
        returns: 'Rendimenti Annuali',
        serviceHours: 'Ore di Servizio',
        stability: 'Stabilità del Sistema',
      },
      honors: {
        title: 'Onorificenze e Qualifiche',
        items: [
          { title: '2023 Migliore Piattaforma di Trading Quantitativo', organization: 'Associazione FinTech Cina', year: '2023' },
          { title: 'Premio Innovazione FinTech', organization: 'Vertice Globale FinTech', year: '2022' },
          { title: 'Premio Oro Soddisfazione Utente', organization: 'Industria Finanza Internet', year: '2023' },
          { title: 'Certificazione Conformità Sicurezza', organization: 'Organizzazione Internazionale Standard Sicurezza Finanziaria', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Prezzi di Mercato',
      subtitle: 'Visualizza i prezzi di mercato delle criptovalute e i dati di trading in tempo reale',
      searchPlaceholder: 'Cerca coppie di trading...',
      noResults: 'Nessuna coppia di trading corrispondente trovata',
    },
    services: {
      title: 'Prodotti e Servizi',
      subtitle: 'Fornire servizi completi di trading quantitativo',
      services: [
        {
          title: 'Servizi di Trading Quantitativo',
          description: 'Fornire varie strategie di trading quantitativo validate dal mercato, esecuzione automatica',
          features: [
            '50+ strategie quantitative disponibili',
            'Esecuzione automatica, nessun intervento manuale',
            'Monitoraggio in tempo reale e controllo dei rischi',
            'Validazione dei dati di backtesting storici',
            'Personalizzazione strategia personalizzata',
          ],
        },
        {
          title: 'Servizi di Analisi dei Dati',
          description: 'Fornire analisi dati professionale e approfondimenti di mercato per aiutare a prendere migliori decisioni di investimento',
          features: [
            'Analisi dati di mercato in tempo reale',
            'Valutazione delle prestazioni delle strategie',
            'Rapporti di analisi dei rischi',
            'Modelli di previsione dei rendimenti',
            'Rapporti dati personalizzati',
          ],
        },
        {
          title: 'Protezione Sicurezza Attività',
          description: 'Diversi meccanismi di sicurezza, protezione completa delle tue attività',
          features: [
            'Tecnologia di crittografia di livello bancario',
            'Autenticazione multi-fattore',
            'Separazione portafogli caldi e freddi',
            'Monitoraggio sicurezza in tempo reale',
            'Copertura assicurativa',
          ],
        },
        {
          title: 'Servizi di Gestione Account',
          description: 'Gestione account conveniente e operazioni di fondi, supportando la gestione multi-account',
          features: [
            'Gestione unificata multi-account',
            'Trasferimento fondi conveniente',
            'Query storico trading',
            'Rapporti statistiche profitti',
            'Gestione autorizzazioni account',
          ],
        },
        {
          title: 'Servizi Interfaccia API',
          description: 'Fornire interfacce API complete, supportando l\'integrazione di sistemi di terze parti',
          features: [
            'Interfaccia API RESTful',
            'Dati in tempo reale WebSocket',
            'Documentazione API completa',
            'Servizi di supporto tecnico',
            'Ambiente di test Sandbox',
          ],
        },
      ],
    },
  },
  pt: {
    nav: {
      home: 'Início',
      markets: 'Mercados',
      solutions: 'Soluções',
      about: 'Sobre',
      login: 'Entrar',
      register: 'Registrar',
    },
    footer: {
      company: 'OKZ Trading Quantitativo',
      description: 'Plataforma profissional de trading quantitativo baseada na exchange OKX, oferecendo soluções seguras, eficientes e inteligentes de trading quantitativo para investidores globais.',
      products: 'Produtos e Serviços',
      about: 'Sobre Nós',
      contact: 'Contato',
      quantStrategy: 'Estratégias Quantitativas',
      dataAnalysis: 'Análise de Dados',
      api: 'Interface API',
      accountManagement: 'Gestão de Conta',
      companyIntro: 'Apresentação da Empresa',
      history: 'História',
      honors: 'Honras e Qualificações',
      privacyPolicy: 'Política de Privacidade',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Distrito de Chaoyang, Pequim\nEdifício FinTech',
      copyright: '© 2024 Plataforma de Trading Quantitativo OKZ. Todos os direitos reservados.',
      userAgreement: 'Acordo do Usuário',
      riskWarning: 'Aviso de Risco',
    },
    common: {
      learnMore: 'Saiba mais',
      getStarted: 'Começar',
      contactUs: 'Entre em contato',
      viewStrategies: 'Ver Estratégias',
      search: 'Pesquisar',
      price: 'Preço',
      change24h: 'Variação 24h',
      volume24h: 'Volume 24h',
      high24h: 'Máximo 24h',
      low24h: 'Mínimo 24h',
    },
    home: {
      heroTitle: 'Plataforma Profissional de Trading Quantitativo',
      heroSubtitle: 'Baseada na exchange OKX, oferecendo soluções seguras, eficientes e inteligentes de trading quantitativo',
      heroDescription: '10+ anos de experiência na indústria | Segurança de nível bancário | Operação estável 7x24 horas',
      viewStrategies: 'Ver Estratégias',
      learnMore: 'Saiba mais',
      stats: {
        users: 'Total de Usuários',
        usersDesc: 'Confiado por usuários globais',
        assets: 'Ativos Gerenciados',
        assetsDesc: 'Gestão profissional de ativos',
        strategies: 'Estratégias de Trading',
        strategiesDesc: 'Opções de estratégia diversificadas',
        returns: 'Retornos Anuais',
        returnsDesc: 'Taxa de retorno média',
      },
      features: {
        smartStrategy: { title: 'Estratégias Inteligentes', description: '50+ estratégias quantitativas validadas pelo mercado, execução automática, operação 24/7' },
        security: { title: 'Seguro e Confiável', description: 'Padrões de segurança de nível bancário, proteção de criptografia múltipla, segurança abrangente de ativos e trading' },
        stableReturns: { title: 'Retornos Estáveis', description: 'Taxa de retorno anual estável acima de 20%, ativos gerenciados cumulativos excedem $1 bilhão' },
        dataAnalysis: { title: 'Análise de Dados', description: 'Dados de trading em tempo real, estatísticas de lucro e desempenho de estratégias, relatórios profissionais de análise de dados' },
        professionalService: { title: 'Serviço Profissional', description: 'Suporte ao cliente profissional 7x24 horas, resposta rápida, resolução oportuna de problemas' },
        convenientManagement: { title: 'Gestão Conveniente', description: 'Gestão unificada multi-conta, transferência de fundos conveniente, gestão abrangente de permissões de conta' },
      },
      whyChoose: {
        title: 'Por Que Nos Escolher',
        subtitle: 'Plataforma profissional de trading quantitativo, protegendo seu investimento',
        items: ['10+ anos de experiência em trading quantitativo, equipe profissional', 'Padrões de segurança de nível bancário, proteção de criptografia múltipla', '50+ estratégias quantitativas, opções diversificadas', 'Taxa de retorno anual estável acima de 20%', 'Operação estável 7x24 horas, monitoramento em tempo real', 'Suporte ao cliente profissional, resposta rápida'],
      },
    },
    about: {
      title: 'Sobre Nós',
      subtitle: 'Plataforma profissional de trading quantitativo, oferecendo soluções seguras, eficientes e inteligentes de trading quantitativo para investidores globais',
      strengths: {
        professionalTeam: {
          title: 'Equipe Profissional',
          description: 'Equipe profissional com 10+ anos de experiência em trading quantitativo, membros principais de instituições financeiras e empresas de internet renomadas',
        },
        security: {
          title: 'Seguro e Confiável',
          description: 'Padrões de segurança de nível bancário, proteção de criptografia múltipla, garantindo a segurança dos ativos do usuário e dados de trading',
        },
        technology: {
          title: 'Tecnologia Avançada',
          description: 'Sistema de trading quantitativo auto-desenvolvido, resposta em nível de milissegundos, operação estável 7x24 horas',
        },
        performance: {
          title: 'Desempenho Excelente',
          description: 'Ativos gerenciados cumulativos excedem $1 bilhão, taxa de retorno anual estável acima de 20%',
        },
      },
      milestones: [
        '2018: Empresa fundada, focando em P&D tecnológico de trading quantitativo',
        '2019: Primeiro financiamento obtido, equipe expandida para 50 pessoas',
        '2020: Sistema de trading auto-desenvolvido oficialmente lançado, usuários excederam 10.000',
        '2021: Cooperação profunda com a exchange OKX alcançada, tornou-se parceiro oficial',
        '2022: Ativos gerenciados excederam $500 milhões, ganhou prêmio de melhor plataforma da indústria',
        '2023: Estratégias inteligentes de IA lançadas, usuários excederam 100.000',
        '2024: Ativos gerenciados excederam $1 bilhão, filial no exterior estabelecida',
      ],
      stats: {
        users: 'Total de Usuários',
        assets: 'Ativos Gerenciados',
        strategies: 'Estratégias de Trading',
        returns: 'Retornos Anuais',
        serviceHours: 'Horas de Serviço',
        stability: 'Estabilidade do Sistema',
      },
      honors: {
        title: 'Honras e Qualificações',
        items: [
          { title: '2023 Melhor Plataforma de Trading Quantitativo', organization: 'Associação FinTech da China', year: '2023' },
          { title: 'Prêmio de Inovação FinTech', organization: 'Cúpula Global FinTech', year: '2022' },
          { title: 'Prêmio de Ouro de Satisfação do Usuário', organization: 'Indústria de Finanças na Internet', year: '2023' },
          { title: 'Certificação de Conformidade de Segurança', organization: 'Organização Internacional de Padrões de Segurança Financeira', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Preços de Mercado',
      subtitle: 'Visualizar preços de mercado de criptomoedas e dados de trading em tempo real',
      searchPlaceholder: 'Pesquisar pares de trading...',
      noResults: 'Nenhum par de trading correspondente encontrado',
    },
    services: {
      title: 'Produtos e Serviços',
      subtitle: 'Oferecendo serviços abrangentes de trading quantitativo',
      services: [
        {
          title: 'Serviços de Trading Quantitativo',
          description: 'Fornecer várias estratégias de trading quantitativo validadas pelo mercado, execução automática',
          features: [
            '50+ estratégias quantitativas disponíveis',
            'Execução automática, sem intervenção manual',
            'Monitoramento em tempo real e controle de riscos',
            'Validação de dados de backtesting históricos',
            'Personalização de estratégia personalizada',
          ],
        },
        {
          title: 'Serviços de Análise de Dados',
          description: 'Fornecer análise de dados profissional e insights de mercado para ajudar a tomar melhores decisões de investimento',
          features: [
            'Análise de dados de mercado em tempo real',
            'Avaliação de desempenho de estratégias',
            'Relatórios de análise de riscos',
            'Modelos de previsão de retornos',
            'Relatórios de dados personalizados',
          ],
        },
        {
          title: 'Proteção de Segurança de Ativos',
          description: 'Múltiplos mecanismos de segurança, proteção abrangente dos seus ativos',
          features: [
            'Tecnologia de criptografia de nível bancário',
            'Autenticação multifator',
            'Separação de carteiras quentes e frias',
            'Monitoramento de segurança em tempo real',
            'Cobertura de seguro',
          ],
        },
        {
          title: 'Serviços de Gestão de Conta',
          description: 'Gestão de conta conveniente e operações de fundos, suportando gestão multi-conta',
          features: [
            'Gestão unificada multi-conta',
            'Transferência de fundos conveniente',
            'Consulta de histórico de trading',
            'Relatórios de estatísticas de lucro',
            'Gestão de permissões de conta',
          ],
        },
        {
          title: 'Serviços de Interface API',
          description: 'Fornecer interfaces API completas, suportando integração de sistemas de terceiros',
          features: [
            'Interface API RESTful',
            'Dados em tempo real WebSocket',
            'Documentação API completa',
            'Serviços de suporte técnico',
            'Ambiente de teste Sandbox',
          ],
        },
      ],
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      markets: 'Mercados',
      solutions: 'Soluciones',
      about: 'Acerca de',
      login: 'Iniciar sesión',
      register: 'Registrarse',
    },
    footer: {
      company: 'OKZ Trading Cuantitativo',
      description: 'Plataforma profesional de trading cuantitativo basada en el exchange OKX, que ofrece soluciones seguras, eficientes e inteligentes de trading cuantitativo para inversores globales.',
      products: 'Productos y Servicios',
      about: 'Acerca de Nosotros',
      contact: 'Contáctanos',
      quantStrategy: 'Estrategias Cuantitativas',
      dataAnalysis: 'Análisis de Datos',
      api: 'Interfaz API',
      accountManagement: 'Gestión de Cuenta',
      companyIntro: 'Presentación de la Empresa',
      history: 'Historia',
      honors: 'Honores y Calificaciones',
      privacyPolicy: 'Política de Privacidad',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Distrito de Chaoyang, Pekín\nEdificio FinTech',
      copyright: '© 2024 Plataforma de Trading Cuantitativo OKZ. Todos los derechos reservados.',
      userAgreement: 'Acuerdo de Usuario',
      riskWarning: 'Advertencia de Riesgo',
    },
    common: {
      learnMore: 'Saber más',
      getStarted: 'Comenzar',
      contactUs: 'Contáctanos',
      viewStrategies: 'Ver Estrategias',
      search: 'Buscar',
      price: 'Precio',
      change24h: 'Cambio 24h',
      volume24h: 'Volumen 24h',
      high24h: 'Máximo 24h',
      low24h: 'Mínimo 24h',
    },
    home: {
      heroTitle: 'Plataforma Profesional de Trading Cuantitativo',
      heroSubtitle: 'Basada en el exchange OKX, ofreciendo soluciones seguras, eficientes e inteligentes de trading cuantitativo',
      heroDescription: '10+ años de experiencia en la industria | Seguridad de nivel bancario | Operación estable 7x24 horas',
      viewStrategies: 'Ver Estrategias',
      learnMore: 'Saber más',
      stats: {
        users: 'Total de Usuarios',
        usersDesc: 'Confiado por usuarios globales',
        assets: 'Activos Gestionados',
        assetsDesc: 'Gestión profesional de activos',
        strategies: 'Estrategias de Trading',
        strategiesDesc: 'Opciones de estrategia diversificadas',
        returns: 'Retornos Anuales',
        returnsDesc: 'Tasa de retorno promedio',
      },
      features: {
        smartStrategy: { title: 'Estrategias Inteligentes', description: '50+ estrategias cuantitativas validadas por el mercado, ejecución automática, operación 24/7' },
        security: { title: 'Seguro y Confiable', description: 'Estándares de seguridad de nivel bancario, protección de cifrado múltiple, seguridad integral de activos y trading' },
        stableReturns: { title: 'Retornos Estables', description: 'Tasa de retorno anual estable por encima del 20%, activos gestionados acumulativos superan $1 mil millones' },
        dataAnalysis: { title: 'Análisis de Datos', description: 'Datos de trading en tiempo real, estadísticas de ganancias y rendimiento de estrategias, informes profesionales de análisis de datos' },
        professionalService: { title: 'Servicio Profesional', description: 'Soporte al cliente profesional 7x24 horas, respuesta rápida, resolución oportuna de problemas' },
        convenientManagement: { title: 'Gestión Conveniente', description: 'Gestión unificada multi-cuenta, transferencia de fondos conveniente, gestión integral de permisos de cuenta' },
      },
      whyChoose: {
        title: 'Por Qué Elegirnos',
        subtitle: 'Plataforma profesional de trading cuantitativo, protegiendo su inversión',
        items: ['10+ años de experiencia en trading cuantitativo, equipo profesional', 'Estándares de seguridad de nivel bancario, protección de cifrado múltiple', '50+ estrategias cuantitativas, opciones diversificadas', 'Tasa de retorno anual estable por encima del 20%', 'Operación estable 7x24 horas, monitoreo en tiempo real', 'Soporte al cliente profesional, respuesta rápida'],
      },
    },
    about: {
      title: 'Acerca de Nosotros',
      subtitle: 'Plataforma profesional de trading cuantitativo, ofreciendo soluciones seguras, eficientes e inteligentes de trading cuantitativo para inversores globales',
      strengths: {
        professionalTeam: {
          title: 'Equipo Profesional',
          description: 'Equipo profesional con 10+ años de experiencia en trading cuantitativo, miembros clave de instituciones financieras y empresas de internet reconocidas',
        },
        security: {
          title: 'Seguro y Confiable',
          description: 'Estándares de seguridad de nivel bancario, protección de cifrado múltiple, garantizando la seguridad de los activos del usuario y datos de trading',
        },
        technology: {
          title: 'Tecnología Avanzada',
          description: 'Sistema de trading cuantitativo auto-desarrollado, respuesta a nivel de milisegundos, operación estable 7x24 horas',
        },
        performance: {
          title: 'Rendimiento Excelente',
          description: 'Activos gestionados acumulativos superan $1 mil millones, tasa de retorno anual estable por encima del 20%',
        },
      },
      milestones: [
        '2018: Empresa fundada, enfocándose en I+D tecnológico de trading cuantitativo',
        '2019: Primer financiamiento obtenido, equipo expandido a 50 personas',
        '2020: Sistema de trading auto-desarrollado oficialmente lanzado, usuarios superaron 10,000',
        '2021: Cooperación profunda con el exchange OKX alcanzada, se convirtió en socio oficial',
        '2022: Activos gestionados superaron $500 millones, ganó premio de mejor plataforma de la industria',
        '2023: Estrategias inteligentes de IA lanzadas, usuarios superaron 100,000',
        '2024: Activos gestionados superaron $1 mil millones, sucursal en el extranjero establecida',
      ],
      stats: {
        users: 'Total de Usuarios',
        assets: 'Activos Gestionados',
        strategies: 'Estrategias de Trading',
        returns: 'Retornos Anuales',
        serviceHours: 'Horas de Servicio',
        stability: 'Estabilidad del Sistema',
      },
      honors: {
        title: 'Honores y Calificaciones',
        items: [
          { title: '2023 Mejor Plataforma de Trading Cuantitativo', organization: 'Asociación FinTech de China', year: '2023' },
          { title: 'Premio de Innovación FinTech', organization: 'Cumbre Global FinTech', year: '2022' },
          { title: 'Premio de Oro de Satisfacción del Usuario', organization: 'Industria de Finanzas en Internet', year: '2023' },
          { title: 'Certificación de Cumplimiento de Seguridad', organization: 'Organización Internacional de Estándares de Seguridad Financiera', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Precios de Mercado',
      subtitle: 'Ver precios de mercado de criptomonedas y datos de trading en tiempo real',
      searchPlaceholder: 'Buscar pares de trading...',
      noResults: 'No se encontraron pares de trading coincidentes',
    },
    services: {
      title: 'Productos y Servicios',
      subtitle: 'Ofreciendo servicios integrales de trading cuantitativo',
      services: [
        {
          title: 'Servicios de Trading Cuantitativo',
          description: 'Proporcionar varias estrategias de trading cuantitativo validadas por el mercado, ejecución automática',
          features: [
            '50+ estrategias cuantitativas disponibles',
            'Ejecución automática, sin intervención manual',
            'Monitoreo en tiempo real y control de riesgos',
            'Validación de datos de backtesting históricos',
            'Personalización de estrategia personalizada',
          ],
        },
        {
          title: 'Servicios de Análisis de Datos',
          description: 'Proporcionar análisis de datos profesional e insights de mercado para ayudar a tomar mejores decisiones de inversión',
          features: [
            'Análisis de datos de mercado en tiempo real',
            'Evaluación del rendimiento de estrategias',
            'Informes de análisis de riesgos',
            'Modelos de predicción de retornos',
            'Informes de datos personalizados',
          ],
        },
        {
          title: 'Protección de Seguridad de Activos',
          description: 'Múltiples mecanismos de seguridad, protección integral de sus activos',
          features: [
            'Tecnología de cifrado de nivel bancario',
            'Autenticación multifactor',
            'Separación de carteras frías y calientes',
            'Monitoreo de seguridad en tiempo real',
            'Cobertura de seguro',
          ],
        },
        {
          title: 'Servicios de Gestión de Cuenta',
          description: 'Gestión de cuenta conveniente y operaciones de fondos, soportando gestión multi-cuenta',
          features: [
            'Gestión unificada multi-cuenta',
            'Transferencia de fondos conveniente',
            'Consulta de historial de trading',
            'Informes de estadísticas de ganancias',
            'Gestión de permisos de cuenta',
          ],
        },
        {
          title: 'Servicios de Interfaz API',
          description: 'Proporcionar interfaces API completas, soportando integración de sistemas de terceros',
          features: [
            'Interfaz API RESTful',
            'Datos en tiempo real WebSocket',
            'Documentación API completa',
            'Servicios de soporte técnico',
            'Entorno de prueba Sandbox',
          ],
        },
      ],
    },
  },
  nl: {
    nav: {
      home: 'Home',
      markets: 'Markten',
      solutions: 'Oplossingen',
      about: 'Over ons',
      login: 'Inloggen',
      register: 'Registreren',
    },
    footer: {
      company: 'OKZ Kwantitatieve Handel',
      description: 'Professioneel kwantitatief handelsplatform gebaseerd op OKX-beurs, dat veilige, efficiënte en intelligente kwantitatieve handelsoplossingen biedt voor wereldwijde investeerders.',
      products: 'Producten en Diensten',
      about: 'Over Ons',
      contact: 'Contact',
      quantStrategy: 'Kwantitatieve Strategieën',
      dataAnalysis: 'Data-analyse',
      api: 'API-interface',
      accountManagement: 'Accountbeheer',
      companyIntro: 'Bedrijfsintroductie',
      history: 'Geschiedenis',
      honors: 'Eer en Kwalificaties',
      privacyPolicy: 'Privacybeleid',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Chaoyang District, Peking\nFinTech Gebouw',
      copyright: '© 2024 OKZ Kwantitatief Handelsplatform. Alle rechten voorbehouden.',
      userAgreement: 'Gebruikersovereenkomst',
      riskWarning: 'Risicowaarschuwing',
    },
    common: {
      learnMore: 'Meer weten',
      getStarted: 'Aan de slag',
      contactUs: 'Neem contact op',
      viewStrategies: 'Strategieën Bekijken',
      search: 'Zoeken',
      price: 'Prijs',
      change24h: '24h Verandering',
      volume24h: '24h Volume',
      high24h: '24h Hoog',
      low24h: '24h Laag',
    },
    home: {
      heroTitle: 'Professioneel Kwantitatief Handelsplatform',
      heroSubtitle: 'Gebaseerd op OKX-beurs, biedt veilige, efficiënte en intelligente kwantitatieve handelsoplossingen',
      heroDescription: '10+ jaar industrie-ervaring | Bank-niveau beveiliging | 7x24 uur stabiele werking',
      viewStrategies: 'Strategieën Bekijken',
      learnMore: 'Meer weten',
      stats: {
        users: 'Totaal Gebruikers',
        usersDesc: 'Vertrouwd door wereldwijde gebruikers',
        assets: 'Beheerde Activa',
        assetsDesc: 'Professioneel vermogensbeheer',
        strategies: 'Handelsstrategieën',
        strategiesDesc: 'Diverse strategie-opties',
        returns: 'Jaarlijkse Rendementen',
        returnsDesc: 'Gemiddeld rendement',
      },
      features: {
        smartStrategy: { title: 'Slimme Strategieën', description: '50+ marktgevalideerde kwantitatieve strategieën, automatische uitvoering, 24/7 werking' },
        security: { title: 'Veilig en Betrouwbaar', description: 'Bank-niveau beveiligingsstandaarden, meerdere encryptiebescherming, uitgebreide activa- en handelsbeveiliging' },
        stableReturns: { title: 'Stabiele Rendementen', description: 'Jaarlijks rendement stabiel boven 20%, cumulatieve beheerde activa overschrijden $1 miljard' },
        dataAnalysis: { title: 'Data-analyse', description: 'Realtime handelsgegevens, winststatistieken en strategieprestaties, professionele data-analyse rapporten' },
        professionalService: { title: 'Professionele Service', description: '7x24 uur professionele klantenservice, snelle reactie, tijdige probleemoplossing' },
        convenientManagement: { title: 'Handig Beheer', description: 'Geünificeerd multi-account beheer, handige fondsoverdracht, uitgebreid accountmachtigingsbeheer' },
      },
      whyChoose: {
        title: 'Waarom Ons Kiezen',
        subtitle: 'Professioneel kwantitatief handelsplatform, beschermt uw investering',
        items: ['10+ jaar kwantitatieve handelservaring, professioneel team', 'Bank-niveau beveiligingsstandaarden, meerdere encryptiebescherming', '50+ kwantitatieve strategieën, diverse opties', 'Jaarlijks rendement stabiel boven 20%', '7x24 uur stabiele werking, realtime monitoring', 'Professionele klantenservice, snelle reactie'],
      },
    },
    about: {
      title: 'Over Ons',
      subtitle: 'Professioneel kwantitatief handelsplatform, biedt veilige, efficiënte en intelligente kwantitatieve handelsoplossingen voor wereldwijde investeerders',
      strengths: {
        professionalTeam: {
          title: 'Professioneel Team',
          description: 'Professioneel team met 10+ jaar kwantitatieve handelservaring, kernleden van gerenommeerde financiële instellingen en internetbedrijven',
        },
        security: {
          title: 'Veilig en Betrouwbaar',
          description: 'Bank-niveau beveiligingsstandaarden, meerdere encryptiebescherming, waarborgen van gebruikersactiva en handelsgegevensbeveiliging',
        },
        technology: {
          title: 'Geavanceerde Technologie',
          description: 'Zelfontwikkeld kwantitatief handelssysteem, milliseconde-niveau respons, 7x24 uur stabiele werking',
        },
        performance: {
          title: 'Uitstekende Prestaties',
          description: 'Cumulatieve beheerde activa overschrijden $1 miljard, jaarlijks rendement stabiel boven 20%',
        },
      },
      milestones: [
        '2018: Bedrijf opgericht, gericht op technologisch R&D van kwantitatieve handel',
        '2019: Eerste financiering verkregen, team uitgebreid naar 50 personen',
        '2020: Zelfontwikkeld handelssysteem officieel gelanceerd, gebruikers overschreden 10.000',
        '2021: Diepe samenwerking met OKX-beurs bereikt, officiële partner geworden',
        '2022: Beheerde activa overschreden $500 miljoen, industrie beste platformprijs gewonnen',
        '2023: AI slimme strategieën gelanceerd, gebruikers overschreden 100.000',
        '2024: Beheerde activa overschreden $1 miljard, buitenlandse filiaal opgericht',
      ],
      stats: {
        users: 'Totaal Gebruikers',
        assets: 'Beheerde Activa',
        strategies: 'Handelsstrategieën',
        returns: 'Jaarlijkse Rendementen',
        serviceHours: 'Service-uren',
        stability: 'Systeemstabiliteit',
      },
      honors: {
        title: 'Eer en Kwalificaties',
        items: [
          { title: '2023 Beste Kwantitatief Handelsplatform', organization: 'China FinTech Vereniging', year: '2023' },
          { title: 'FinTech Innovatieprijs', organization: 'Wereldwijd FinTech Top', year: '2022' },
          { title: 'Goudprijs Gebruikerstevredenheid', organization: 'Internet Financiële Industrie', year: '2023' },
          { title: 'Beveiligingsconformiteitscertificering', organization: 'Internationale Organisatie voor Financiële Beveiligingsstandaarden', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Marktprijzen',
      subtitle: 'Realtime cryptovaluta marktprijzen en handelsgegevens bekijken',
      searchPlaceholder: 'Handelsparen zoeken...',
      noResults: 'Geen overeenkomende handelsparen gevonden',
    },
    services: {
      title: 'Producten en Diensten',
      subtitle: 'Uitgebreide kwantitatieve handelsdiensten aanbieden',
      services: [
        {
          title: 'Kwantitatieve Handelsdiensten',
          description: 'Verschillende marktgevalideerde kwantitatieve handelsstrategieën bieden, automatische uitvoering',
          features: [
            '50+ kwantitatieve strategieën beschikbaar',
            'Automatische uitvoering, geen handmatige interventie',
            'Realtime monitoring en risicobeheer',
            'Validatie van historische backtesting-gegevens',
            'Gepersonaliseerde strategieaanpassing',
          ],
        },
        {
          title: 'Data-analyse Diensten',
          description: 'Professionele data-analyse en marktinzichten bieden om betere investeringsbeslissingen te helpen nemen',
          features: [
            'Realtime marktdata-analyse',
            'Strategieprestatie-evaluatie',
            'Risicoanalyse rapporten',
            'Rendementsvoorspellingsmodellen',
            'Aangepaste datarapporten',
          ],
        },
        {
          title: 'Activa Beveiligingsbescherming',
          description: 'Meerdere beveiligingsmechanismen, uitgebreide bescherming van uw activa',
          features: [
            'Bank-niveau encryptietechnologie',
            'Multi-factor authenticatie',
            'Scheiding van koude en warme portefeuilles',
            'Realtime beveiligingsmonitoring',
            'Verzekeringsdekking',
          ],
        },
        {
          title: 'Accountbeheer Diensten',
          description: 'Handig accountbeheer en fondsoperaties, ondersteuning voor multi-account beheer',
          features: [
            'Geünificeerd multi-account beheer',
            'Handige fondsoverdracht',
            'Handelsgeschiedenis query',
            'Winststatistiek rapporten',
            'Accountmachtigingsbeheer',
          ],
        },
        {
          title: 'API Interface Diensten',
          description: 'Volledige API-interfaces bieden, ondersteuning voor integratie van derde partij systemen',
          features: [
            'RESTful API-interface',
            'WebSocket realtime gegevens',
            'Volledige API-documentatie',
            'Technische ondersteuningsdiensten',
            'Sandbox testomgeving',
          ],
        },
      ],
    },
  },
  pl: {
    nav: {
      home: 'Strona główna',
      markets: 'Rynki',
      solutions: 'Rozwiązania',
      about: 'O nas',
      login: 'Zaloguj się',
      register: 'Zarejestruj się',
    },
    footer: {
      company: 'OKZ Handel Ilościowy',
      description: 'Profesjonalna platforma handlu ilościowego oparta na giełdzie OKX, oferująca bezpieczne, wydajne i inteligentne rozwiązania handlu ilościowego dla globalnych inwestorów.',
      products: 'Produkty i Usługi',
      about: 'O Nas',
      contact: 'Kontakt',
      quantStrategy: 'Strategie Ilościowe',
      dataAnalysis: 'Analiza Danych',
      api: 'Interfejs API',
      accountManagement: 'Zarządzanie Kontem',
      companyIntro: 'Prezentacja Firmy',
      history: 'Historia',
      honors: 'Honory i Kwalifikacje',
      privacyPolicy: 'Polityka Prywatności',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Dzielnica Chaoyang, Pekin\nBudynek FinTech',
      copyright: '© 2024 Platforma Handlu Ilościowego OKZ. Wszelkie prawa zastrzeżone.',
      userAgreement: 'Umowa Użytkownika',
      riskWarning: 'Ostrzeżenie o Ryzyku',
    },
    common: {
      learnMore: 'Dowiedz się więcej',
      getStarted: 'Zacznij',
      contactUs: 'Skontaktuj się z nami',
      viewStrategies: 'Zobacz Strategie',
      search: 'Szukaj',
      price: 'Cena',
      change24h: 'Zmiana 24h',
      volume24h: 'Wolumen 24h',
      high24h: 'Maksimum 24h',
      low24h: 'Minimum 24h',
    },
    home: {
      heroTitle: 'Profesjonalna Platforma Handlu Ilościowego',
      heroSubtitle: 'Oparta na giełdzie OKX, oferuje bezpieczne, wydajne i inteligentne rozwiązania handlu ilościowego',
      heroDescription: '10+ lat doświadczenia w branży | Bezpieczeństwo na poziomie bankowym | Stabilna praca 7x24 godziny',
      viewStrategies: 'Zobacz Strategie',
      learnMore: 'Dowiedz się więcej',
      stats: {
        users: 'Łączni Użytkownicy',
        usersDesc: 'Zaufanie użytkowników na całym świecie',
        assets: 'Zarządzane Aktywa',
        assetsDesc: 'Profesjonalne zarządzanie aktywami',
        strategies: 'Strategie Handlowe',
        strategiesDesc: 'Różnorodne opcje strategii',
        returns: 'Roczne Zwroty',
        returnsDesc: 'Średnia stopa zwrotu',
      },
      features: {
        smartStrategy: { title: 'Inteligentne Strategie', description: '50+ zwalidowanych przez rynek strategii ilościowych, automatyczne wykonanie, praca 24/7' },
        security: { title: 'Bezpieczne i Niezawodne', description: 'Standardy bezpieczeństwa na poziomie bankowym, wielokrotna ochrona szyfrowania, kompleksowe bezpieczeństwo aktywów i handlu' },
        stableReturns: { title: 'Stabilne Zwroty', description: 'Roczna stopa zwrotu stabilna powyżej 20%, skumulowane zarządzane aktywa przekraczają 1 miliard USD' },
        dataAnalysis: { title: 'Analiza Danych', description: 'Dane handlowe w czasie rzeczywistym, statystyki zysków i wydajność strategii, profesjonalne raporty analizy danych' },
        professionalService: { title: 'Profesjonalna Usługa', description: 'Profesjonalne wsparcie klienta 7x24 godziny, szybka reakcja, terminowe rozwiązywanie problemów' },
        convenientManagement: { title: 'Wygodne Zarządzanie', description: 'Ujednolicone zarządzanie wieloma kontami, wygodny transfer środków, kompleksowe zarządzanie uprawnieniami konta' },
      },
      whyChoose: {
        title: 'Dlaczego Nas Wybrać',
        subtitle: 'Profesjonalna platforma handlu ilościowego, chroniąca Twoją inwestycję',
        items: ['10+ lat doświadczenia w handlu ilościowym, profesjonalny zespół', 'Standardy bezpieczeństwa na poziomie bankowym, wielokrotna ochrona szyfrowania', '50+ strategii ilościowych, różnorodne opcje', 'Roczna stopa zwrotu stabilna powyżej 20%', 'Stabilna praca 7x24 godziny, monitorowanie w czasie rzeczywistym', 'Profesjonalne wsparcie klienta, szybka reakcja'],
      },
    },
    about: {
      title: 'O Nas',
      subtitle: 'Profesjonalna platforma handlu ilościowego, oferująca bezpieczne, wydajne i inteligentne rozwiązania handlu ilościowego dla globalnych inwestorów',
      strengths: {
        professionalTeam: {
          title: 'Profesjonalny Zespół',
          description: 'Profesjonalny zespół z 10+ latami doświadczenia w handlu ilościowym, kluczowi członkowie z renomowanych instytucji finansowych i firm internetowych',
        },
        security: {
          title: 'Bezpieczne i Niezawodne',
          description: 'Standardy bezpieczeństwa na poziomie bankowym, wielokrotna ochrona szyfrowania, zapewniające bezpieczeństwo aktywów użytkowników i danych handlowych',
        },
        technology: {
          title: 'Zaawansowana Technologia',
          description: 'Własny system handlu ilościowego, odpowiedź na poziomie milisekund, stabilna praca 7x24 godziny',
        },
        performance: {
          title: 'Doskonała Wydajność',
          description: 'Skumulowane zarządzane aktywa przekraczają 1 miliard USD, roczna stopa zwrotu stabilna powyżej 20%',
        },
      },
      milestones: [
        '2018: Firma założona, skupiając się na badaniach i rozwoju technologii handlu ilościowego',
        '2019: Uzyskano pierwsze finansowanie, zespół rozszerzony do 50 osób',
        '2020: Własny system handlowy oficjalnie uruchomiony, użytkownicy przekroczyli 10 000',
        '2021: Osiągnięto głęboką współpracę z giełdą OKX, stało się oficjalnym partnerem',
        '2022: Zarządzane aktywa przekroczyły 500 milionów USD, wygrało nagrodę najlepszej platformy w branży',
        '2023: Uruchomiono inteligentne strategie AI, użytkownicy przekroczyli 100 000',
        '2024: Zarządzane aktywa przekroczyły 1 miliard USD, założono zagraniczny oddział',
      ],
      stats: {
        users: 'Łączni Użytkownicy',
        assets: 'Zarządzane Aktywa',
        strategies: 'Strategie Handlowe',
        returns: 'Roczne Zwroty',
        serviceHours: 'Godziny Usługi',
        stability: 'Stabilność Systemu',
      },
      honors: {
        title: 'Honory i Kwalifikacje',
        items: [
          { title: '2023 Najlepsza Platforma Handlu Ilościowego', organization: 'Chińskie Stowarzyszenie FinTech', year: '2023' },
          { title: 'Nagroda Innowacji FinTech', organization: 'Globalny Szczyt FinTech', year: '2022' },
          { title: 'Złota Nagroda Satysfakcji Użytkownika', organization: 'Branża Finansów Internetowych', year: '2023' },
          { title: 'Certyfikacja Zgodności Bezpieczeństwa', organization: 'Międzynarodowa Organizacja Standardów Bezpieczeństwa Finansowego', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Ceny Rynkowe',
      subtitle: 'Zobacz ceny rynkowe kryptowalut i dane handlowe w czasie rzeczywistym',
      searchPlaceholder: 'Szukaj par handlowych...',
      noResults: 'Nie znaleziono pasujących par handlowych',
    },
    services: {
      title: 'Produty i Usługi',
      subtitle: 'Oferowanie kompleksowych usług handlu ilościowego',
      services: [
        {
          title: 'Usługi Handlu Ilościowego',
          description: 'Dostarczanie różnych zwalidowanych przez rynek strategii handlu ilościowego, automatyczne wykonanie',
          features: [
            '50+ strategii ilościowych dostępnych',
            'Automatyczne wykonanie, brak interwencji ręcznej',
            'Monitorowanie w czasie rzeczywistym i kontrola ryzyka',
            'Walidacja historycznych danych backtestingu',
            'Personalizacja strategii',
          ],
        },
        {
          title: 'Usługi Analizy Danych',
          description: 'Dostarczanie profesjonalnej analizy danych i wglądów rynkowych, aby pomóc w podejmowaniu lepszych decyzji inwestycyjnych',
          features: [
            'Analiza danych rynkowych w czasie rzeczywistym',
            'Ocena wydajności strategii',
            'Raporty analizy ryzyka',
            'Modele przewidywania zwrotów',
            'Niestandardowe raporty danych',
          ],
        },
        {
          title: 'Ochrona Bezpieczeństwa Aktywów',
          description: 'Wiele mechanizmów bezpieczeństwa, kompleksowa ochrona Twoich aktywów',
          features: [
            'Technologia szyfrowania na poziomie bankowym',
            'Uwierzytelnianie wieloczynnikowe',
            'Rozdzielenie portfeli zimnych i gorących',
            'Monitorowanie bezpieczeństwa w czasie rzeczywistym',
            'Ubezpieczenie',
          ],
        },
        {
          title: 'Usługi Zarządzania Kontem',
          description: 'Wygodne zarządzanie kontem i operacje funduszami, wspieranie zarządzania wieloma kontami',
          features: [
            'Ujednolicone zarządzanie wieloma kontami',
            'Wygodny transfer środków',
            'Zapytanie historii handlu',
            'Raporty statystyk zysków',
            'Zarządzanie uprawnieniami konta',
          ],
        },
        {
          title: 'Usługi Interfejsu API',
          description: 'Dostarczanie kompletnych interfejsów API, wspieranie integracji systemów stron trzecich',
          features: [
            'Interfejs API RESTful',
            'Dane w czasie rzeczywistym WebSocket',
            'Kompletna dokumentacja API',
            'Usługi wsparcia technicznego',
            'Środowisko testowe Sandbox',
          ],
        },
      ],
    },
  },
  sv: {
    nav: {
      home: 'Hem',
      markets: 'Marknader',
      solutions: 'Lösningar',
      about: 'Om oss',
      login: 'Logga in',
      register: 'Registrera',
    },
    footer: {
      company: 'OKZ Kvantitativ Handel',
      description: 'Professionell plattform för kvantitativ handel baserad på OKX-börsen, som erbjuder säkra, effektiva och intelligenta lösningar för kvantitativ handel för globala investerare.',
      products: 'Produkter och Tjänster',
      about: 'Om Oss',
      contact: 'Kontakta Oss',
      quantStrategy: 'Kvantitativa Strategier',
      dataAnalysis: 'Dataanalys',
      api: 'API-gränssnitt',
      accountManagement: 'Kontohantering',
      companyIntro: 'Företagspresentation',
      history: 'Historia',
      honors: 'Heder och Kvalifikationer',
      privacyPolicy: 'Integritetspolicy',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Chaoyang-distriktet, Peking\nFinTech-byggnad',
      copyright: '© 2024 OKZ Kvantitativ Handelsplattform. Alla rättigheter förbehållna.',
      userAgreement: 'Användaravtal',
      riskWarning: 'Risktvarning',
    },
    common: {
      learnMore: 'Läs mer',
      getStarted: 'Kom igång',
      contactUs: 'Kontakta oss',
      viewStrategies: 'Visa Strategier',
      search: 'Sök',
      price: 'Pris',
      change24h: 'Förändring 24h',
      volume24h: 'Volym 24h',
      high24h: 'Högsta 24h',
      low24h: 'Lägsta 24h',
    },
    home: {
      heroTitle: 'Professionell Plattform för Kvantitativ Handel',
      heroSubtitle: 'Baserad på OKX-börsen, erbjuder säkra, effektiva och intelligenta lösningar för kvantitativ handel',
      heroDescription: '10+ års branscherfarenhet | Banknivå säkerhet | Stabil drift 7x24 timmar',
      viewStrategies: 'Visa Strategier',
      learnMore: 'Läs mer',
      stats: {
        users: 'Totalt Användare',
        usersDesc: 'Förtroende från globala användare',
        assets: 'Förvaltade Tillgångar',
        assetsDesc: 'Professionell tillgångsförvaltning',
        strategies: 'Handelsstrategier',
        strategiesDesc: 'Mångfaldiga strategialternativ',
        returns: 'Årliga Avkastningar',
        returnsDesc: 'Genomsnittlig avkastning',
      },
      features: {
        smartStrategy: { title: 'Smarta Strategier', description: '50+ marknadsvaliderade kvantitativa strategier, automatisk utförande, 24/7 drift' },
        security: { title: 'Säker och Pålitlig', description: 'Banknivå säkerhetsstandarder, flera krypteringsskydd, omfattande tillgångs- och handelssäkerhet' },
        stableReturns: { title: 'Stabila Avkastningar', description: 'Årlig avkastning stabil över 20%, kumulativa förvaltade tillgångar överstiger $1 miljard' },
        dataAnalysis: { title: 'Dataanalys', description: 'Realtids handelsdata, vinststatistik och strategiprestanda, professionella dataanalysrapporter' },
        professionalService: { title: 'Professionell Service', description: '7x24 timmar professionell kundsupport, snabb respons, rättvisande problemlösning' },
        convenientManagement: { title: 'Bekväm Förvaltning', description: 'Enhetlig multi-kontoförvaltning, bekväm fondöverföring, omfattande kontobehörighetsförvaltning' },
      },
      whyChoose: {
        title: 'Varför Välja Oss',
        subtitle: 'Professionell plattform för kvantitativ handel, skyddar din investering',
        items: ['10+ års erfarenhet av kvantitativ handel, professionellt team', 'Banknivå säkerhetsstandarder, flera krypteringsskydd', '50+ kvantitativa strategier, mångfaldiga alternativ', 'Årlig avkastning stabil över 20%', 'Stabil drift 7x24 timmar, realtidsövervakning', 'Professionell kundsupport, snabb respons'],
      },
    },
    about: {
      title: 'Om Oss',
      subtitle: 'Professionell plattform för kvantitativ handel, erbjuder säkra, effektiva och intelligenta lösningar för kvantitativ handel för globala investerare',
      strengths: {
        professionalTeam: {
          title: 'Professionellt Team',
          description: 'Professionellt team med 10+ års erfarenhet av kvantitativ handel, nyckelmedlemmar från renommerade finansiella institutioner och internetföretag',
        },
        security: {
          title: 'Säker och Pålitlig',
          description: 'Banknivå säkerhetsstandarder, flera krypteringsskydd, säkerställande av användartillgångar och handelsdatasäkerhet',
        },
        technology: {
          title: 'Avancerad Teknologi',
          description: 'Självutvecklat system för kvantitativ handel, millisekundnivå respons, stabil drift 7x24 timmar',
        },
        performance: {
          title: 'Utmärkt Prestanda',
          description: 'Kumulativa förvaltade tillgångar överstiger $1 miljard, årlig avkastning stabil över 20%',
        },
      },
      milestones: [
        '2018: Företag grundat, fokuserar på teknisk R&D av kvantitativ handel',
        '2019: Första finansieringen erhållen, team utökat till 50 personer',
        '2020: Självutvecklat handelssystem officiellt lanserat, användare överskred 10 000',
        '2021: Djup samarbete med OKX-börsen uppnådd, blev officiell partner',
        '2022: Förvaltade tillgångar överskred $500 miljoner, vann branschens bästa plattformspris',
        '2023: AI-smarta strategier lanserade, användare överskred 100 000',
        '2024: Förvaltade tillgångar överskred $1 miljard, utländsk filial etablerad',
      ],
      stats: {
        users: 'Totalt Användare',
        assets: 'Förvaltade Tillgångar',
        strategies: 'Handelsstrategier',
        returns: 'Årliga Avkastningar',
        serviceHours: 'Service-timmar',
        stability: 'Systemstabilitet',
      },
      honors: {
        title: 'Heder och Kvalifikationer',
        items: [
          { title: '2023 Bästa Plattform för Kvantitativ Handel', organization: 'Kina FinTech-föreningen', year: '2023' },
          { title: 'FinTech Innovationspris', organization: 'Global FinTech-topp', year: '2022' },
          { title: 'Guldpris Användarnöjdhet', organization: 'Internet Finansindustri', year: '2023' },
          { title: 'Säkerhetsöverensstämmelsecertifiering', organization: 'Internationell Organisation för Finansiella Säkerhetsstandarder', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Marknadspriser',
      subtitle: 'Visa realtids kryptovalutamarknadspriser och handelsdata',
      searchPlaceholder: 'Sök handelspar...',
      noResults: 'Inga matchande handelspar hittades',
    },
    services: {
      title: 'Produkter och Tjänster',
      subtitle: 'Erbjuder omfattande tjänster för kvantitativ handel',
      services: [
        {
          title: 'Tjänster för Kvantitativ Handel',
          description: 'Tillhandahålla olika marknadsvaliderade strategier för kvantitativ handel, automatisk utförande',
          features: [
            '50+ kvantitativa strategier tillgängliga',
            'Automatisk utförande, ingen manuell intervention',
            'Realtidsövervakning och riskkontroll',
            'Validering av historiska backtesting-data',
            'Personlig strategianpassning',
          ],
        },
        {
          title: 'Dataanalystjänster',
          description: 'Tillhandahålla professionell dataanalys och marknadsinsikter för att hjälpa till att fatta bättre investeringsbeslut',
          features: [
            'Realtids marknadsdataanalys',
            'Strategiprestandautvärdering',
            'Riskanalysrapporter',
            'Avkastningsprediktionsmodeller',
            'Anpassade datarapporter',
          ],
        },
        {
          title: 'Tillgångssäkerhetsskydd',
          description: 'Flera säkerhetsmekanismer, omfattande skydd av dina tillgångar',
          features: [
            'Banknivå krypteringsteknologi',
            'Multifaktorautentisering',
            'Separation av kalla och varma plånböcker',
            'Realtids säkerhetsövervakning',
            'Försäkringsskydd',
          ],
        },
        {
          title: 'Kontoförvaltningstjänster',
          description: 'Bekväm kontoförvaltning och fondoperationer, stödjer multi-kontoförvaltning',
          features: [
            'Enhetlig multi-kontoförvaltning',
            'Bekväm fondöverföring',
            'Handelshistorikfråga',
            'Vinststatistikrapporter',
            'Kontobehörighetsförvaltning',
          ],
        },
        {
          title: 'API-gränssnittstjänster',
          description: 'Tillhandahålla kompletta API-gränssnitt, stödjer integration av tredjepartssystem',
          features: [
            'RESTful API-gränssnitt',
            'WebSocket realtidsdata',
            'Komplett API-dokumentation',
            'Teknisk supporttjänst',
            'Sandbox testmiljö',
          ],
        },
      ],
    },
  },
  da: {
    nav: {
      home: 'Hjem',
      markets: 'Markeder',
      solutions: 'Løsninger',
      about: 'Om os',
      login: 'Log ind',
      register: 'Registrer',
    },
    footer: {
      company: 'OKZ Kvantitativ Handel',
      description: 'Professionel platform til kvantitativ handel baseret på OKX-børsen, der tilbyder sikre, effektive og intelligente løsninger til kvantitativ handel for globale investorer.',
      products: 'Produkter og Tjenester',
      about: 'Om Os',
      contact: 'Kontakt Os',
      quantStrategy: 'Kvantitative Strategier',
      dataAnalysis: 'Dataanalyse',
      api: 'API-grænseflade',
      accountManagement: 'Kontostyring',
      companyIntro: 'Virksomhedspræsentation',
      history: 'Historie',
      honors: 'Ære og Kvalifikationer',
      privacyPolicy: 'Fortrolighedspolitik',
      email: 'support@okzquant.com',
      phone: '400-888-8888',
      address: 'Chaoyang-distriktet, Beijing\nFinTech-bygning',
      copyright: '© 2024 OKZ Kvantitativ Handelsplatform. Alle rettigheder forbeholdes.',
      userAgreement: 'Brugeraftale',
      riskWarning: 'Risikovarsel',
    },
    common: {
      learnMore: 'Lær mere',
      getStarted: 'Kom i gang',
      contactUs: 'Kontakt os',
      viewStrategies: 'Se Strategier',
      search: 'Søg',
      price: 'Pris',
      change24h: 'Ændring 24h',
      volume24h: 'Volumen 24h',
      high24h: 'Højeste 24h',
      low24h: 'Laveste 24h',
    },
    home: {
      heroTitle: 'Professionel Platform til Kvantitativ Handel',
      heroSubtitle: 'Baseret på OKX-børsen, tilbyder sikre, effektive og intelligente løsninger til kvantitativ handel',
      heroDescription: '10+ års brancheerfaring | Bankniveau sikkerhed | Stabil drift 7x24 timer',
      viewStrategies: 'Se Strategier',
      learnMore: 'Lær mere',
      stats: {
        users: 'Samlede Brugere',
        usersDesc: 'Betroet af globale brugere',
        assets: 'Forvaltede Aktiver',
        assetsDesc: 'Professionel aktivforvaltning',
        strategies: 'Handelsstrategier',
        strategiesDesc: 'Diverse strategivalg',
        returns: 'Årlige Afkast',
        returnsDesc: 'Gennemsnitlig afkastrate',
      },
      features: {
        smartStrategy: { title: 'Smarte Strategier', description: '50+ markedsvaliderede kvantitative strategier, automatisk udførelse, 24/7 drift' },
        security: { title: 'Sikker og Pålidelig', description: 'Bankniveau sikkerhedsstandarder, flere krypteringsbeskyttelse, omfattende aktiv- og handelssikkerhed' },
        stableReturns: { title: 'Stabile Afkast', description: 'Årlig afkastrate stabil over 20%, kumulative forvaltede aktiver overstiger $1 milliard' },
        dataAnalysis: { title: 'Dataanalyse', description: 'Realtid handelsdata, profitstatistikker og strategipræstation, professionelle dataanalyserapporter' },
        professionalService: { title: 'Professionel Service', description: '7x24 timer professionel kundesupport, hurtig reaktion, rettidig problemløsning' },
        convenientManagement: { title: 'Bekvem Forvaltning', description: 'Forenet multi-konto forvaltning, bekvem fondsoverførsel, omfattende kontotilladelsesforvaltning' },
      },
      whyChoose: {
        title: 'Hvorfor Vælge Os',
        subtitle: 'Professionel platform til kvantitativ handel, beskytter din investering',
        items: ['10+ års erfaring med kvantitativ handel, professionelt team', 'Bankniveau sikkerhedsstandarder, flere krypteringsbeskyttelse', '50+ kvantitative strategier, diverse valg', 'Årlig afkastrate stabil over 20%', 'Stabil drift 7x24 timer, realtids overvågning', 'Professionel kundesupport, hurtig reaktion'],
      },
    },
    about: {
      title: 'Om Os',
      subtitle: 'Professionel platform til kvantitativ handel, tilbyder sikre, effektive og intelligente løsninger til kvantitativ handel for globale investorer',
      strengths: {
        professionalTeam: {
          title: 'Professionelt Team',
          description: 'Professionelt team med 10+ års erfaring med kvantitativ handel, kerne medlemmer fra anerkendte finansielle institutioner og internetvirksomheder',
        },
        security: {
          title: 'Sikker og Pålidelig',
          description: 'Bankniveau sikkerhedsstandarder, flere krypteringsbeskyttelse, sikring af brugeraktiver og handelsdatasikkerhed',
        },
        technology: {
          title: 'Avanceret Teknologi',
          description: 'Selvudviklet system til kvantitativ handel, millisekundniveau respons, stabil drift 7x24 timer',
        },
        performance: {
          title: 'Fremragende Præstation',
          description: 'Kumulative forvaltede aktiver overstiger $1 milliard, årlig afkastrate stabil over 20%',
        },
      },
      milestones: [
        '2018: Virksomhed grundlagt, fokuserer på teknisk R&D af kvantitativ handel',
        '2019: Første finansiering opnået, team udvidet til 50 personer',
        '2020: Selvudviklet handelssystem officielt lanceret, brugere overskred 10.000',
        '2021: Dyb samarbejde med OKX-børsen opnået, blev officiel partner',
        '2022: Forvaltede aktiver overskred $500 millioner, vandt branchens bedste platformpris',
        '2023: AI-smarte strategier lanceret, brugere overskred 100.000',
        '2024: Forvaltede aktiver overskred $1 milliard, udenlandsk filial etableret',
      ],
      stats: {
        users: 'Samlede Brugere',
        assets: 'Forvaltede Aktiver',
        strategies: 'Handelsstrategier',
        returns: 'Årlige Afkast',
        serviceHours: 'Service-timer',
        stability: 'Systemstabilitet',
      },
      honors: {
        title: 'Ære og Kvalifikationer',
        items: [
          { title: '2023 Bedste Platform til Kvantitativ Handel', organization: 'Kina FinTech Forening', year: '2023' },
          { title: 'FinTech Innovationspris', organization: 'Global FinTech Top', year: '2022' },
          { title: 'Guldpris Bruger tilfredshed', organization: 'Internet Finansindustri', year: '2023' },
          { title: 'Sikkerhedsoverensstemmelsescertificering', organization: 'International Organisation for Finansielle Sikkerhedsstandarder', year: '2022' },
        ],
      },
    },
    markets: {
      title: 'Markedspriser',
      subtitle: 'Se realtids kryptovaluta markedspriser og handelsdata',
      searchPlaceholder: 'Søg handelspar...',
      noResults: 'Ingen matchende handelspar fundet',
    },
    services: {
      title: 'Produkter og Tjenester',
      subtitle: 'Tilbyder omfattende tjenester til kvantitativ handel',
      services: [
        {
          title: 'Tjenester til Kvantitativ Handel',
          description: 'Tilvejebringe forskellige markedsvaliderede strategier til kvantitativ handel, automatisk udførelse',
          features: [
            '50+ kvantitative strategier tilgængelige',
            'Automatisk udførelse, ingen manuel intervention',
            'Realtids overvågning og risikokontrol',
            'Validering af historiske backtesting-data',
            'Personlig strategitilpasning',
          ],
        },
        {
          title: 'Dataanalysetjenester',
          description: 'Tilvejebringe professionel dataanalyse og markedsindsigter for at hjælpe med at træffe bedre investeringsbeslutninger',
          features: [
            'Realtids markedsdataanalyse',
            'Strategipræstationsvurdering',
            'Risikoanalyserapporter',
            'Afkastforudsigelsesmodeller',
            'Tilpassede datarapporter',
          ],
        },
        {
          title: 'Aktivsikkerhedsbeskyttelse',
          description: 'Flere sikkerhedsmekanismer, omfattende beskyttelse af dine aktiver',
          features: [
            'Bankniveau krypteringsteknologi',
            'Multifaktorautentificering',
            'Separation af kolde og varme tegnebøger',
            'Realtids sikkerhedsovervågning',
            'Forsikringsdækning',
          ],
        },
        {
          title: 'Kontoforvaltningstjenester',
          description: 'Bekvem kontoforvaltning og fondsoperationer, understøtter multi-konto forvaltning',
          features: [
            'Forenet multi-konto forvaltning',
            'Bekvem fondsoverførsel',
            'Handelshistorikforespørgsel',
            'Profitstatistikrapporter',
            'Kontotilladelsesforvaltning',
          ],
        },
        {
          title: 'API-grænsefladetjenester',
          description: 'Tilvejebringe komplette API-grænseflader, understøtter integration af tredjepartssystemer',
          features: [
            'RESTful API-grænseflade',
            'WebSocket realtidsdata',
            'Komplet API-dokumentation',
            'Teknisk supporttjenester',
            'Sandbox testmiljø',
          ],
        },
      ],
    },
  },
};

export function getTranslation(locale: string): Translations {
  // 如果没有匹配的语言，返回英语
  const translation = translations[locale] || translations.en;
  
  // 如果翻译缺少某些字段，使用英文作为fallback
  if (!translation.home) {
    translation.home = translations.en.home;
  }
  if (!translation.about) {
    translation.about = translations.en.about;
  }
  if (!translation.markets) {
    translation.markets = translations.en.markets;
  }
  if (!translation.services) {
    translation.services = translations.en.services;
  }
  if (!translation.common.viewStrategies) {
    translation.common = { ...translations.en.common, ...translation.common };
  }
  
  return translation;
}

