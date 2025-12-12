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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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
      email: 'support@okz.com',
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

