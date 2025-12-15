// SEO Metadata 多语言翻译
export interface MetadataTranslations {
  home: {
    title: string;
    description: string;
    keywords: string[];
  };
  about: {
    title: string;
    description: string;
    keywords: string[];
  };
  markets: {
    title: string;
    description: string;
    keywords: string[];
  };
  services: {
    title: string;
    description: string;
    keywords: string[];
  };
  solutions: {
    title: string;
    description: string;
    keywords: string[];
  };
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
}

export const metadataTranslations: Record<string, MetadataTranslations> = {
  zh: {
    home: {
      title: 'OKZ - 专业的量化交易平台 | OKX交易所量化策略',
      description: 'OKZ是专业的量化交易平台，基于OKX交易所提供安全、高效、智能的量化交易解决方案。50+种策略选择，年化收益25%+，累计管理资产超过10亿美元。',
      keywords: [
        '量化交易',
        '量化策略',
        'OKX交易所',
        '自动化交易',
        '量化投资',
        '数字货币交易',
        '加密货币量化',
        '量化交易平台',
        '量化交易系统',
        '策略回测',
        '风险管理',
        '资产配置',
      ],
    },
    about: {
      title: '关于我们 - OKZ量化交易平台',
      description: 'OKZ拥有10年+量化交易经验的专业团队，采用银行级安全标准，自主研发的量化交易系统，为全球投资者提供安全、高效、智能的量化交易解决方案。',
      keywords: ['关于OKZ', '量化交易公司', '专业团队', '公司介绍', 'OKZ历史', '荣誉资质'],
    },
    markets: {
      title: '市场行情 - OKZ量化交易平台',
      description: '实时查看OKX交易所的市场行情，包括BTC、ETH等主流加密货币价格、涨跌幅、成交量等实时数据。',
      keywords: ['市场行情', '加密货币价格', 'BTC价格', 'ETH价格', 'OKX交易所', '实时行情', '数字货币行情'],
    },
    services: {
      title: '公司服务 - OKZ量化交易平台',
      description: 'OKZ为全球投资者提供全方位的量化交易服务：策略执行、资产管理、风险控制、技术支持、客户服务等专业服务。',
      keywords: ['量化交易服务', '资产管理', '风险控制', '技术支持', '客户服务', '量化交易平台服务'],
    },
    solutions: {
      title: '量化策略解决方案 - OKZ量化交易平台',
      description: 'OKZ提供50+种量化交易策略，包括套利策略、趋势策略、网格策略等，年化收益25%+，满足不同风险偏好的投资者需求。',
      keywords: ['量化策略', '交易策略', '套利策略', '趋势策略', '网格策略', '量化投资方案'],
    },
    siteName: 'OKZ量化交易平台',
    defaultTitle: 'OKZ - 专业的量化交易平台',
    defaultDescription: '专业的量化交易平台，基于OKX交易所提供安全、高效、智能的量化交易解决方案。',
  },
  en: {
    home: {
      title: 'OKZ - Professional Quantitative Trading Platform | OKX Exchange Strategies',
      description: 'OKZ is a professional quantitative trading platform based on OKX exchange, providing safe, efficient, and intelligent quantitative trading solutions. 50+ strategies, 25%+ annual returns, managing over $1 billion in assets.',
      keywords: [
        'quantitative trading',
        'quantitative strategies',
        'OKX exchange',
        'automated trading',
        'quantitative investment',
        'cryptocurrency trading',
        'crypto quantitative trading',
        'quantitative trading platform',
        'quantitative trading system',
        'strategy backtesting',
        'risk management',
        'asset allocation',
      ],
    },
    about: {
      title: 'About Us - OKZ Quantitative Trading Platform',
      description: 'OKZ has a professional team with 10+ years of quantitative trading experience, using bank-level security standards and self-developed quantitative trading systems to provide safe, efficient, and intelligent solutions for global investors.',
      keywords: ['about OKZ', 'quantitative trading company', 'professional team', 'company introduction', 'OKZ history', 'honors'],
    },
    markets: {
      title: 'Market Data - OKZ Quantitative Trading Platform',
      description: 'View real-time market data from OKX exchange, including BTC, ETH and other major cryptocurrency prices, changes, and trading volumes.',
      keywords: ['market data', 'cryptocurrency prices', 'BTC price', 'ETH price', 'OKX exchange', 'real-time market', 'digital currency market'],
    },
    services: {
      title: 'Services - OKZ Quantitative Trading Platform',
      description: 'OKZ provides comprehensive quantitative trading services for global investors: strategy execution, asset management, risk control, technical support, and customer service.',
      keywords: ['quantitative trading services', 'asset management', 'risk control', 'technical support', 'customer service', 'trading platform services'],
    },
    solutions: {
      title: 'Quantitative Strategy Solutions - OKZ Trading Platform',
      description: 'OKZ offers 50+ quantitative trading strategies including arbitrage, trend, and grid strategies, with 25%+ annual returns to meet different risk preferences.',
      keywords: ['quantitative strategies', 'trading strategies', 'arbitrage strategies', 'trend strategies', 'grid strategies', 'quantitative investment solutions'],
    },
    siteName: 'OKZ Quantitative Trading Platform',
    defaultTitle: 'OKZ - Professional Quantitative Trading Platform',
    defaultDescription: 'Professional quantitative trading platform based on OKX exchange, providing safe, efficient, and intelligent quantitative trading solutions.',
  },
  ja: {
    home: {
      title: 'OKZ - プロフェッショナルな定量取引プラットフォーム | OKX取引所戦略',
      description: 'OKZはOKX取引所をベースとしたプロフェッショナルな定量取引プラットフォームで、安全で効率的なインテリジェントな定量取引ソリューションを提供します。50以上の戦略、年率25%以上のリターン、10億ドル以上の資産を管理。',
      keywords: [
        '定量取引',
        '定量戦略',
        'OKX取引所',
        '自動取引',
        '定量投資',
        '暗号通貨取引',
        '暗号定量取引',
        '定量取引プラットフォーム',
        '定量取引システム',
        '戦略バックテスト',
        'リスク管理',
        '資産配分',
      ],
    },
    about: {
      title: '私たちについて - OKZ定量取引プラットフォーム',
      description: 'OKZは10年以上の定量取引経験を持つプロフェッショナルなチームを持ち、銀行レベルのセキュリティ基準と独自開発の定量取引システムを使用して、世界中の投資家に安全で効率的なインテリジェントなソリューションを提供します。',
      keywords: ['OKZについて', '定量取引会社', 'プロフェッショナルチーム', '会社紹介', 'OKZの歴史', '栄誉'],
    },
    markets: {
      title: '市場データ - OKZ定量取引プラットフォーム',
      description: 'OKX取引所からのリアルタイム市場データを表示。BTC、ETHなどの主要暗号通貨の価格、変動、取引量を含みます。',
      keywords: ['市場データ', '暗号通貨価格', 'BTC価格', 'ETH価格', 'OKX取引所', 'リアルタイム市場', 'デジタル通貨市場'],
    },
    services: {
      title: 'サービス - OKZ定量取引プラットフォーム',
      description: 'OKZは世界中の投資家に包括的な定量取引サービスを提供：戦略実行、資産管理、リスク管理、技術サポート、カスタマーサービス。',
      keywords: ['定量取引サービス', '資産管理', 'リスク管理', '技術サポート', 'カスタマーサービス', '取引プラットフォームサービス'],
    },
    solutions: {
      title: '定量戦略ソリューション - OKZ取引プラットフォーム',
      description: 'OKZは50以上の定量取引戦略を提供し、アービトラージ、トレンド、グリッド戦略を含み、年率25%以上のリターンで異なるリスク選好を満たします。',
      keywords: ['定量戦略', '取引戦略', 'アービトラージ戦略', 'トレンド戦略', 'グリッド戦略', '定量投資ソリューション'],
    },
    siteName: 'OKZ定量取引プラットフォーム',
    defaultTitle: 'OKZ - プロフェッショナルな定量取引プラットフォーム',
    defaultDescription: 'OKX取引所をベースとしたプロフェッショナルな定量取引プラットフォームで、安全で効率的なインテリジェントな定量取引ソリューションを提供します。',
  },
  // 为其他语言添加默认英文版本
  de: {
    home: {
      title: 'OKZ - Professionelle Quantitative Trading-Plattform | OKX Börsenstrategien',
      description: 'OKZ ist eine professionelle quantitative Trading-Plattform basierend auf der OKX-Börse, die sichere, effiziente und intelligente quantitative Trading-Lösungen bietet. 50+ Strategien, 25%+ Jahresrendite, Verwaltung von über 1 Milliarde US-Dollar an Vermögenswerten.',
      keywords: [
        'quantitatives Trading',
        'quantitative Strategien',
        'OKX Börse',
        'automatisiertes Trading',
        'quantitative Investition',
        'Kryptowährungshandel',
        'Krypto-Quant-Trading',
        'quantitative Trading-Plattform',
        'quantitatives Trading-System',
        'Strategie-Backtesting',
        'Risikomanagement',
        'Vermögensallokation',
      ],
    },
    about: {
      title: 'Über uns - OKZ Quantitative Trading-Plattform',
      description: 'OKZ verfügt über ein professionelles Team mit über 10 Jahren Erfahrung im quantitativen Trading, nutzt Sicherheitsstandards auf Bankniveau und selbstentwickelte quantitative Trading-Systeme, um sichere, effiziente und intelligente Lösungen für globale Investoren zu bieten.',
      keywords: ['über OKZ', 'quantitative Trading-Firma', 'professionelles Team', 'Firmenvorstellung', 'OKZ Geschichte', 'Auszeichnungen'],
    },
    markets: {
      title: 'Marktdaten - OKZ Quantitative Trading-Plattform',
      description: 'Echtzeit-Marktdaten von der OKX-Börse anzeigen, einschließlich BTC-, ETH- und anderen wichtigen Kryptowährungspreisen, Änderungen und Handelsvolumen.',
      keywords: ['Marktdaten', 'Kryptowährungspreise', 'BTC Preis', 'ETH Preis', 'OKX Börse', 'Echtzeitmarkt', 'Digitalwährungsmarkt'],
    },
    services: {
      title: 'Dienstleistungen - OKZ Quantitative Trading-Plattform',
      description: 'OKZ bietet umfassende quantitative Trading-Dienstleistungen für globale Investoren: Strategieausführung, Vermögensverwaltung, Risikokontrolle, technischer Support und Kundenservice.',
      keywords: ['quantitative Trading-Dienstleistungen', 'Vermögensverwaltung', 'Risikokontrolle', 'technischer Support', 'Kundenservice', 'Trading-Plattform-Dienstleistungen'],
    },
    solutions: {
      title: 'Quantitative Strategielösungen - OKZ Trading-Plattform',
      description: 'OKZ bietet 50+ quantitative Trading-Strategien einschließlich Arbitrage-, Trend- und Grid-Strategien mit 25%+ Jahresrendite, um verschiedene Risikopräferenzen zu erfüllen.',
      keywords: ['quantitative Strategien', 'Trading-Strategien', 'Arbitrage-Strategien', 'Trend-Strategien', 'Grid-Strategien', 'quantitative Investitionslösungen'],
    },
    siteName: 'OKZ Quantitative Trading-Plattform',
    defaultTitle: 'OKZ - Professionelle Quantitative Trading-Plattform',
    defaultDescription: 'Professionelle quantitative Trading-Plattform basierend auf der OKX-Börse, die sichere, effiziente und intelligente quantitative Trading-Lösungen bietet.',
  },
  // 为其他语言使用英文作为fallback
  hi: {
    home: {
      title: 'OKZ - Professional Quantitative Trading Platform | OKX Exchange Strategies',
      description: 'OKZ is a professional quantitative trading platform based on OKX exchange, providing safe, efficient, and intelligent quantitative trading solutions. 50+ strategies, 25%+ annual returns, managing over $1 billion in assets.',
      keywords: [
        'quantitative trading',
        'quantitative strategies',
        'OKX exchange',
        'automated trading',
        'quantitative investment',
        'cryptocurrency trading',
        'crypto quantitative trading',
        'quantitative trading platform',
        'quantitative trading system',
        'strategy backtesting',
        'risk management',
        'asset allocation',
      ],
    },
    about: {
      title: 'About Us - OKZ Quantitative Trading Platform',
      description: 'OKZ has a professional team with 10+ years of quantitative trading experience, using bank-level security standards and self-developed quantitative trading systems to provide safe, efficient, and intelligent solutions for global investors.',
      keywords: ['about OKZ', 'quantitative trading company', 'professional team', 'company introduction', 'OKZ history', 'honors'],
    },
    markets: {
      title: 'Market Data - OKZ Quantitative Trading Platform',
      description: 'View real-time market data from OKX exchange, including BTC, ETH and other major cryptocurrency prices, changes, and trading volumes.',
      keywords: ['market data', 'cryptocurrency prices', 'BTC price', 'ETH price', 'OKX exchange', 'real-time market', 'digital currency market'],
    },
    services: {
      title: 'Services - OKZ Quantitative Trading Platform',
      description: 'OKZ provides comprehensive quantitative trading services for global investors: strategy execution, asset management, risk control, technical support, and customer service.',
      keywords: ['quantitative trading services', 'asset management', 'risk control', 'technical support', 'customer service', 'trading platform services'],
    },
    solutions: {
      title: 'Quantitative Strategy Solutions - OKZ Trading Platform',
      description: 'OKZ offers 50+ quantitative trading strategies including arbitrage, trend, and grid strategies, with 25%+ annual returns to meet different risk preferences.',
      keywords: ['quantitative strategies', 'trading strategies', 'arbitrage strategies', 'trend strategies', 'grid strategies', 'quantitative investment solutions'],
    },
    siteName: 'OKZ Quantitative Trading Platform',
    defaultTitle: 'OKZ - Professional Quantitative Trading Platform',
    defaultDescription: 'Professional quantitative trading platform based on OKX exchange, providing safe, efficient, and intelligent quantitative trading solutions.',
  },
  fr: {
    home: {
      title: 'OKZ - Plateforme de Trading Quantitatif Professionnelle | Stratégies OKX Exchange',
      description: 'OKZ est une plateforme de trading quantitatif professionnelle basée sur l\'échange OKX, offrant des solutions de trading quantitatif sûres, efficaces et intelligentes. 50+ stratégies, rendements annuels de 25%+, gestion de plus de 1 milliard de dollars d\'actifs.',
      keywords: [
        'trading quantitatif',
        'stratégies quantitatives',
        'échange OKX',
        'trading automatisé',
        'investissement quantitatif',
        'trading de cryptomonnaies',
        'trading quantitatif crypto',
        'plateforme de trading quantitatif',
        'système de trading quantitatif',
        'backtesting de stratégie',
        'gestion des risques',
        'allocation d\'actifs',
      ],
    },
    about: {
      title: 'À propos de nous - Plateforme de Trading Quantitatif OKZ',
      description: 'OKZ dispose d\'une équipe professionnelle avec plus de 10 ans d\'expérience en trading quantitatif, utilisant des normes de sécurité de niveau bancaire et des systèmes de trading quantitatif auto-développés pour fournir des solutions sûres, efficaces et intelligentes aux investisseurs mondiaux.',
      keywords: ['à propos d\'OKZ', 'entreprise de trading quantitatif', 'équipe professionnelle', 'présentation de l\'entreprise', 'historique OKZ', 'honneurs'],
    },
    markets: {
      title: 'Données de marché - Plateforme de Trading Quantitatif OKZ',
      description: 'Afficher les données de marché en temps réel de l\'échange OKX, y compris les prix BTC, ETH et autres principales cryptomonnaies, les changements et les volumes de trading.',
      keywords: ['données de marché', 'prix des cryptomonnaies', 'prix BTC', 'prix ETH', 'échange OKX', 'marché en temps réel', 'marché des devises numériques'],
    },
    services: {
      title: 'Services - Plateforme de Trading Quantitatif OKZ',
      description: 'OKZ fournit des services complets de trading quantitatif pour les investisseurs mondiaux : exécution de stratégie, gestion d\'actifs, contrôle des risques, support technique et service client.',
      keywords: ['services de trading quantitatif', 'gestion d\'actifs', 'contrôle des risques', 'support technique', 'service client', 'services de plateforme de trading'],
    },
    solutions: {
      title: 'Solutions de Stratégie Quantitative - Plateforme de Trading OKZ',
      description: 'OKZ propose 50+ stratégies de trading quantitatif incluant l\'arbitrage, la tendance et les stratégies de grille, avec des rendements annuels de 25%+ pour répondre à différentes préférences de risque.',
      keywords: ['stratégies quantitatives', 'stratégies de trading', 'stratégies d\'arbitrage', 'stratégies de tendance', 'stratégies de grille', 'solutions d\'investissement quantitatif'],
    },
    siteName: 'Plateforme de Trading Quantitatif OKZ',
    defaultTitle: 'OKZ - Plateforme de Trading Quantitatif Professionnelle',
    defaultDescription: 'Plateforme de trading quantitatif professionnelle basée sur l\'échange OKX, offrant des solutions de trading quantitatif sûres, efficaces et intelligentes.',
  },
  it: {
    home: {
      title: 'OKZ - Piattaforma di Trading Quantitativo Professionale | Strategie OKX Exchange',
      description: 'OKZ è una piattaforma di trading quantitativo professionale basata sull\'exchange OKX, che fornisce soluzioni di trading quantitativo sicure, efficienti e intelligenti. 50+ strategie, rendimenti annui del 25%+, gestione di oltre 1 miliardo di dollari di asset.',
      keywords: [
        'trading quantitativo',
        'strategie quantitative',
        'exchange OKX',
        'trading automatizzato',
        'investimento quantitativo',
        'trading di criptovalute',
        'trading quantitativo crypto',
        'piattaforma di trading quantitativo',
        'sistema di trading quantitativo',
        'backtesting di strategia',
        'gestione del rischio',
        'allocazione degli asset',
      ],
    },
    about: {
      title: 'Chi siamo - Piattaforma di Trading Quantitativo OKZ',
      description: 'OKZ ha un team professionale con oltre 10 anni di esperienza nel trading quantitativo, utilizzando standard di sicurezza di livello bancario e sistemi di trading quantitativo auto-sviluppati per fornire soluzioni sicure, efficienti e intelligenti per gli investitori globali.',
      keywords: ['su OKZ', 'azienda di trading quantitativo', 'team professionale', 'presentazione aziendale', 'storia OKZ', 'onorificenze'],
    },
    markets: {
      title: 'Dati di mercato - Piattaforma di Trading Quantitativo OKZ',
      description: 'Visualizza dati di mercato in tempo reale dall\'exchange OKX, inclusi prezzi BTC, ETH e altre principali criptovalute, variazioni e volumi di trading.',
      keywords: ['dati di mercato', 'prezzi delle criptovalute', 'prezzo BTC', 'prezzo ETH', 'exchange OKX', 'mercato in tempo reale', 'mercato delle valute digitali'],
    },
    services: {
      title: 'Servizi - Piattaforma di Trading Quantitativo OKZ',
      description: 'OKZ fornisce servizi completi di trading quantitativo per investitori globali: esecuzione di strategie, gestione degli asset, controllo del rischio, supporto tecnico e servizio clienti.',
      keywords: ['servizi di trading quantitativo', 'gestione degli asset', 'controllo del rischio', 'supporto tecnico', 'servizio clienti', 'servizi della piattaforma di trading'],
    },
    solutions: {
      title: 'Soluzioni di Strategia Quantitativa - Piattaforma di Trading OKZ',
      description: 'OKZ offre 50+ strategie di trading quantitativo incluse arbitraggio, trend e strategie a griglia, con rendimenti annui del 25%+ per soddisfare diverse preferenze di rischio.',
      keywords: ['strategie quantitative', 'strategie di trading', 'strategie di arbitraggio', 'strategie di trend', 'strategie a griglia', 'soluzioni di investimento quantitativo'],
    },
    siteName: 'Piattaforma di Trading Quantitativo OKZ',
    defaultTitle: 'OKZ - Piattaforma di Trading Quantitativo Professionale',
    defaultDescription: 'Piattaforma di trading quantitativo professionale basata sull\'exchange OKX, che fornisce soluzioni di trading quantitativo sicure, efficienti e intelligenti.',
  },
  pt: {
    home: {
      title: 'OKZ - Plataforma de Trading Quantitativo Profissional | Estratégias OKX Exchange',
      description: 'OKZ é uma plataforma de trading quantitativo profissional baseada na exchange OKX, fornecendo soluções de trading quantitativo seguras, eficientes e inteligentes. 50+ estratégias, retornos anuais de 25%+, gerenciando mais de US$ 1 bilhão em ativos.',
      keywords: [
        'trading quantitativo',
        'estratégias quantitativas',
        'exchange OKX',
        'trading automatizado',
        'investimento quantitativo',
        'trading de criptomoedas',
        'trading quantitativo crypto',
        'plataforma de trading quantitativo',
        'sistema de trading quantitativo',
        'backtesting de estratégia',
        'gestão de riscos',
        'alocação de ativos',
      ],
    },
    about: {
      title: 'Sobre nós - Plataforma de Trading Quantitativo OKZ',
      description: 'OKZ possui uma equipe profissional com mais de 10 anos de experiência em trading quantitativo, usando padrões de segurança de nível bancário e sistemas de trading quantitativo auto-desenvolvidos para fornecer soluções seguras, eficientes e inteligentes para investidores globais.',
      keywords: ['sobre OKZ', 'empresa de trading quantitativo', 'equipe profissional', 'apresentação da empresa', 'história OKZ', 'honras'],
    },
    markets: {
      title: 'Dados de mercado - Plataforma de Trading Quantitativo OKZ',
      description: 'Visualizar dados de mercado em tempo real da exchange OKX, incluindo preços BTC, ETH e outras principais criptomoedas, mudanças e volumes de trading.',
      keywords: ['dados de mercado', 'preços de criptomoedas', 'preço BTC', 'preço ETH', 'exchange OKX', 'mercado em tempo real', 'mercado de moedas digitais'],
    },
    services: {
      title: 'Serviços - Plataforma de Trading Quantitativo OKZ',
      description: 'OKZ fornece serviços abrangentes de trading quantitativo para investidores globais: execução de estratégia, gestão de ativos, controle de risco, suporte técnico e atendimento ao cliente.',
      keywords: ['serviços de trading quantitativo', 'gestão de ativos', 'controle de risco', 'suporte técnico', 'atendimento ao cliente', 'serviços da plataforma de trading'],
    },
    solutions: {
      title: 'Soluções de Estratégia Quantitativa - Plataforma de Trading OKZ',
      description: 'OKZ oferece 50+ estratégias de trading quantitativo incluindo arbitragem, tendência e estratégias de grade, com retornos anuais de 25%+ para atender diferentes preferências de risco.',
      keywords: ['estratégias quantitativas', 'estratégias de trading', 'estratégias de arbitragem', 'estratégias de tendência', 'estratégias de grade', 'soluções de investimento quantitativo'],
    },
    siteName: 'Plataforma de Trading Quantitativo OKZ',
    defaultTitle: 'OKZ - Plataforma de Trading Quantitativo Profissional',
    defaultDescription: 'Plataforma de trading quantitativo profissional baseada na exchange OKX, fornecendo soluções de trading quantitativo seguras, eficientes e inteligentes.',
  },
  es: {
    home: {
      title: 'OKZ - Plataforma de Trading Cuantitativo Profesional | Estrategias OKX Exchange',
      description: 'OKZ es una plataforma de trading cuantitativo profesional basada en el exchange OKX, que proporciona soluciones de trading cuantitativo seguras, eficientes e inteligentes. 50+ estrategias, retornos anuales del 25%+, gestionando más de $1 mil millones en activos.',
      keywords: [
        'trading cuantitativo',
        'estrategias cuantitativas',
        'exchange OKX',
        'trading automatizado',
        'inversión cuantitativa',
        'trading de criptomonedas',
        'trading cuantitativo crypto',
        'plataforma de trading cuantitativo',
        'sistema de trading cuantitativo',
        'backtesting de estrategia',
        'gestión de riesgos',
        'asignación de activos',
      ],
    },
    about: {
      title: 'Acerca de nosotros - Plataforma de Trading Cuantitativo OKZ',
      description: 'OKZ tiene un equipo profesional con más de 10 años de experiencia en trading cuantitativo, utilizando estándares de seguridad de nivel bancario y sistemas de trading cuantitativo auto-desarrollados para proporcionar soluciones seguras, eficientes e inteligentes para inversores globales.',
      keywords: ['acerca de OKZ', 'empresa de trading cuantitativo', 'equipo profesional', 'presentación de la empresa', 'historia de OKZ', 'honores'],
    },
    markets: {
      title: 'Datos de mercado - Plataforma de Trading Cuantitativo OKZ',
      description: 'Ver datos de mercado en tiempo real del exchange OKX, incluyendo precios de BTC, ETH y otras principales criptomonedas, cambios y volúmenes de trading.',
      keywords: ['datos de mercado', 'precios de criptomonedas', 'precio BTC', 'precio ETH', 'exchange OKX', 'mercado en tiempo real', 'mercado de monedas digitales'],
    },
    services: {
      title: 'Servicios - Plataforma de Trading Cuantitativo OKZ',
      description: 'OKZ proporciona servicios integrales de trading cuantitativo para inversores globales: ejecución de estrategia, gestión de activos, control de riesgos, soporte técnico y servicio al cliente.',
      keywords: ['servicios de trading cuantitativo', 'gestión de activos', 'control de riesgos', 'soporte técnico', 'servicio al cliente', 'servicios de plataforma de trading'],
    },
    solutions: {
      title: 'Soluciones de Estrategia Cuantitativa - Plataforma de Trading OKZ',
      description: 'OKZ ofrece 50+ estrategias de trading cuantitativo incluyendo arbitraje, tendencia y estrategias de cuadrícula, con retornos anuales del 25%+ para satisfacer diferentes preferencias de riesgo.',
      keywords: ['estrategias cuantitativas', 'estrategias de trading', 'estrategias de arbitraje', 'estrategias de tendencia', 'estrategias de cuadrícula', 'soluciones de inversión cuantitativa'],
    },
    siteName: 'Plataforma de Trading Cuantitativo OKZ',
    defaultTitle: 'OKZ - Plataforma de Trading Cuantitativo Profesional',
    defaultDescription: 'Plataforma de trading cuantitativo profesional basada en el exchange OKX, que proporciona soluciones de trading cuantitativo seguras, eficientes e inteligentes.',
  },
  nl: {
    home: {
      title: 'OKZ - Professioneel Kwantitatief Trading Platform | OKX Exchange Strategieën',
      description: 'OKZ is een professioneel kwantitatief trading platform gebaseerd op OKX exchange, dat veilige, efficiënte en intelligente kwantitatieve trading oplossingen biedt. 50+ strategieën, 25%+ jaarlijkse rendementen, beheer van meer dan $1 miljard aan activa.',
      keywords: [
        'kwantitatief trading',
        'kwantitatieve strategieën',
        'OKX exchange',
        'geautomatiseerd trading',
        'kwantitatieve investering',
        'cryptocurrency trading',
        'crypto kwantitatief trading',
        'kwantitatief trading platform',
        'kwantitatief trading systeem',
        'strategie backtesting',
        'risicobeheer',
        'activa allocatie',
      ],
    },
    about: {
      title: 'Over ons - OKZ Kwantitatief Trading Platform',
      description: 'OKZ heeft een professioneel team met meer dan 10 jaar ervaring in kwantitatief trading, gebruikmakend van bankniveau beveiligingsstandaarden en zelfontwikkelde kwantitatieve trading systemen om veilige, efficiënte en intelligente oplossingen te bieden voor wereldwijde investeerders.',
      keywords: ['over OKZ', 'kwantitatieve trading bedrijf', 'professioneel team', 'bedrijfsintroductie', 'OKZ geschiedenis', 'onderscheidingen'],
    },
    markets: {
      title: 'Marktgegevens - OKZ Kwantitatief Trading Platform',
      description: 'Bekijk real-time marktgegevens van OKX exchange, inclusief BTC, ETH en andere belangrijke cryptocurrency prijzen, veranderingen en handelsvolumes.',
      keywords: ['marktgegevens', 'cryptocurrency prijzen', 'BTC prijs', 'ETH prijs', 'OKX exchange', 'real-time markt', 'digitale valuta markt'],
    },
    services: {
      title: 'Diensten - OKZ Kwantitatief Trading Platform',
      description: 'OKZ biedt uitgebreide kwantitatieve trading diensten voor wereldwijde investeerders: strategie uitvoering, vermogensbeheer, risicobeheer, technische ondersteuning en klantenservice.',
      keywords: ['kwantitatieve trading diensten', 'vermogensbeheer', 'risicobeheer', 'technische ondersteuning', 'klantenservice', 'trading platform diensten'],
    },
    solutions: {
      title: 'Kwantitatieve Strategie Oplossingen - OKZ Trading Platform',
      description: 'OKZ biedt 50+ kwantitatieve trading strategieën inclusief arbitrage, trend en grid strategieën, met 25%+ jaarlijkse rendementen om verschillende risicovoorkeuren te voldoen.',
      keywords: ['kwantitatieve strategieën', 'trading strategieën', 'arbitrage strategieën', 'trend strategieën', 'grid strategieën', 'kwantitatieve investeringsoplossingen'],
    },
    siteName: 'OKZ Kwantitatief Trading Platform',
    defaultTitle: 'OKZ - Professioneel Kwantitatief Trading Platform',
    defaultDescription: 'Professioneel kwantitatief trading platform gebaseerd op OKX exchange, dat veilige, efficiënte en intelligente kwantitatieve trading oplossingen biedt.',
  },
  pl: {
    home: {
      title: 'OKZ - Profesjonalna Platforma Tradingu Ilościowego | Strategie OKX Exchange',
      description: 'OKZ to profesjonalna platforma tradingu ilościowego oparta na giełdzie OKX, zapewniająca bezpieczne, wydajne i inteligentne rozwiązania tradingu ilościowego. 50+ strategii, 25%+ rocznych zwrotów, zarządzanie ponad 1 miliardem dolarów aktywów.',
      keywords: [
        'trading ilościowy',
        'strategie ilościowe',
        'giełda OKX',
        'zautomatyzowany trading',
        'inwestycje ilościowe',
        'trading kryptowalut',
        'krypto trading ilościowy',
        'platforma tradingu ilościowego',
        'system tradingu ilościowego',
        'backtesting strategii',
        'zarządzanie ryzykiem',
        'alokacja aktywów',
      ],
    },
    about: {
      title: 'O nas - Platforma Tradingu Ilościowego OKZ',
      description: 'OKZ ma profesjonalny zespół z ponad 10-letnim doświadczeniem w tradingu ilościowym, wykorzystujący standardy bezpieczeństwa na poziomie bankowym i samodzielnie opracowane systemy tradingu ilościowego, aby zapewnić bezpieczne, wydajne i inteligentne rozwiązania dla globalnych inwestorów.',
      keywords: ['o OKZ', 'firma tradingu ilościowego', 'profesjonalny zespół', 'prezentacja firmy', 'historia OKZ', 'honory'],
    },
    markets: {
      title: 'Dane rynkowe - Platforma Tradingu Ilościowego OKZ',
      description: 'Wyświetl dane rynkowe w czasie rzeczywistym z giełdy OKX, w tym ceny BTC, ETH i innych głównych kryptowalut, zmiany i wolumeny transakcji.',
      keywords: ['dane rynkowe', 'ceny kryptowalut', 'cena BTC', 'cena ETH', 'giełda OKX', 'rynek w czasie rzeczywistym', 'rynek walut cyfrowych'],
    },
    services: {
      title: 'Usługi - Platforma Tradingu Ilościowego OKZ',
      description: 'OKZ zapewnia kompleksowe usługi tradingu ilościowego dla globalnych inwestorów: wykonanie strategii, zarządzanie aktywami, kontrola ryzyka, wsparcie techniczne i obsługa klienta.',
      keywords: ['usługi tradingu ilościowego', 'zarządzanie aktywami', 'kontrola ryzyka', 'wsparcie techniczne', 'obsługa klienta', 'usługi platformy tradingowej'],
    },
    solutions: {
      title: 'Rozwiązania Strategii Ilościowej - Platforma Tradingowa OKZ',
      description: 'OKZ oferuje 50+ strategii tradingu ilościowego, w tym arbitraż, trend i strategie siatkowe, z 25%+ rocznymi zwrotami, aby spełnić różne preferencje dotyczące ryzyka.',
      keywords: ['strategie ilościowe', 'strategie tradingowe', 'strategie arbitrażowe', 'strategie trendowe', 'strategie siatkowe', 'rozwiązania inwestycyjne ilościowe'],
    },
    siteName: 'Platforma Tradingu Ilościowego OKZ',
    defaultTitle: 'OKZ - Profesjonalna Platforma Tradingu Ilościowego',
    defaultDescription: 'Profesjonalna platforma tradingu ilościowego oparta na giełdzie OKX, zapewniająca bezpieczne, wydajne i inteligentne rozwiązania tradingu ilościowego.',
  },
  sv: {
    home: {
      title: 'OKZ - Professionell Kvantitativ Tradingplattform | OKX Exchange Strategier',
      description: 'OKZ är en professionell kvantitativ tradingplattform baserad på OKX-börsen, som tillhandahåller säkra, effektiva och intelligenta kvantitativa tradinglösningar. 50+ strategier, 25%+ årliga avkastningar, förvaltning av över $1 miljard i tillgångar.',
      keywords: [
        'kvantitativ trading',
        'kvantitativa strategier',
        'OKX börs',
        'automatiserad trading',
        'kvantitativ investering',
        'kryptovaluta trading',
        'krypto kvantitativ trading',
        'kvantitativ tradingplattform',
        'kvantitativt tradingsystem',
        'strategi backtesting',
        'riskhantering',
        'tillgångsfördelning',
      ],
    },
    about: {
      title: 'Om oss - OKZ Kvantitativ Tradingplattform',
      description: 'OKZ har ett professionellt team med över 10 års erfarenhet av kvantitativ trading, använder banksäkerhetsstandarder och självutvecklade kvantitativa tradingsystem för att tillhandahålla säkra, effektiva och intelligenta lösningar för globala investerare.',
      keywords: ['om OKZ', 'kvantitativt tradingföretag', 'professionellt team', 'företagspresentation', 'OKZ historia', 'utmärkelser'],
    },
    markets: {
      title: 'Marknadsdata - OKZ Kvantitativ Tradingplattform',
      description: 'Visa realtidsmarknadsdata från OKX-börsen, inklusive BTC, ETH och andra stora kryptovalutapriser, förändringar och handelsvolymer.',
      keywords: ['marknadsdata', 'kryptovalutapriser', 'BTC pris', 'ETH pris', 'OKX börs', 'realtidsmarknad', 'digital valuta marknad'],
    },
    services: {
      title: 'Tjänster - OKZ Kvantitativ Tradingplattform',
      description: 'OKZ tillhandahåller omfattande kvantitativa tradingtjänster för globala investerare: strategiutförande, tillgångsförvaltning, riskkontroll, teknisk support och kundservice.',
      keywords: ['kvantitativa tradingtjänster', 'tillgångsförvaltning', 'riskkontroll', 'teknisk support', 'kundservice', 'tradingplattformtjänster'],
    },
    solutions: {
      title: 'Kvantitativa Strategilösningar - OKZ Tradingplattform',
      description: 'OKZ erbjuder 50+ kvantitativa tradingstrategier inklusive arbitrage, trend och rutnätsstrategier, med 25%+ årliga avkastningar för att möta olika riskpreferenser.',
      keywords: ['kvantitativa strategier', 'tradingstrategier', 'arbitragestrategier', 'trendstrategier', 'rutnätsstrategier', 'kvantitativa investeringslösningar'],
    },
    siteName: 'OKZ Kvantitativ Tradingplattform',
    defaultTitle: 'OKZ - Professionell Kvantitativ Tradingplattform',
    defaultDescription: 'Professionell kvantitativ tradingplattform baserad på OKX-börsen, som tillhandahåller säkra, effektiva och intelligenta kvantitativa tradinglösningar.',
  },
  da: {
    home: {
      title: 'OKZ - Professionel Kvantitativ Trading Platform | OKX Exchange Strategier',
      description: 'OKZ er en professionel kvantitativ trading platform baseret på OKX-børsen, der leverer sikre, effektive og intelligente kvantitative trading løsninger. 50+ strategier, 25%+ årlige afkast, forvaltning af over $1 milliard i aktiver.',
      keywords: [
        'kvantitativ trading',
        'kvantitative strategier',
        'OKX børs',
        'automatiseret trading',
        'kvantitativ investering',
        'kryptovaluta trading',
        'krypto kvantitativ trading',
        'kvantitativ trading platform',
        'kvantitativt trading system',
        'strategi backtesting',
        'risikostyring',
        'aktivallokering',
      ],
    },
    about: {
      title: 'Om os - OKZ Kvantitativ Trading Platform',
      description: 'OKZ har et professionelt team med over 10 års erfaring med kvantitativ trading, bruger banksikkerhedsstandarder og selvudviklede kvantitative trading systemer til at levere sikre, effektive og intelligente løsninger til globale investorer.',
      keywords: ['om OKZ', 'kvantitativt trading firma', 'professionelt team', 'firmapresentation', 'OKZ historie', 'æresbevisninger'],
    },
    markets: {
      title: 'Markedsdata - OKZ Kvantitativ Trading Platform',
      description: 'Se realtids markedsdata fra OKX-børsen, inklusive BTC, ETH og andre store kryptovalutapriser, ændringer og handelsvolumener.',
      keywords: ['markedsdata', 'kryptovalutapriser', 'BTC pris', 'ETH pris', 'OKX børs', 'realtidsmarked', 'digital valuta marked'],
    },
    services: {
      title: 'Tjenester - OKZ Kvantitativ Trading Platform',
      description: 'OKZ leverer omfattende kvantitative trading tjenester til globale investorer: strategiudførelse, aktivforvaltning, risikokontrol, teknisk support og kundeservice.',
      keywords: ['kvantitative trading tjenester', 'aktivforvaltning', 'risikokontrol', 'teknisk support', 'kundeservice', 'trading platform tjenester'],
    },
    solutions: {
      title: 'Kvantitative Strategiløsninger - OKZ Trading Platform',
      description: 'OKZ tilbyder 50+ kvantitative trading strategier inklusive arbitrage, trend og gitter strategier, med 25%+ årlige afkast for at opfylde forskellige risikopræferencer.',
      keywords: ['kvantitative strategier', 'trading strategier', 'arbitrage strategier', 'trend strategier', 'gitter strategier', 'kvantitative investeringsløsninger'],
    },
    siteName: 'OKZ Kvantitativ Trading Platform',
    defaultTitle: 'OKZ - Professionel Kvantitativ Trading Platform',
    defaultDescription: 'Professionel kvantitativ trading platform baseret på OKX-børsen, der leverer sikre, effektive og intelligente kvantitative trading løsninger.',
  },
};

// 获取语言对应的 locale 代码（用于 OpenGraph）
export function getLocaleCode(lang: string): string {
  const localeMap: Record<string, string> = {
    zh: 'zh_CN',
    en: 'en_US',
    ja: 'ja_JP',
    de: 'de_DE',
    hi: 'hi_IN',
    fr: 'fr_FR',
    it: 'it_IT',
    pt: 'pt_BR',
    es: 'es_ES',
    nl: 'nl_NL',
    pl: 'pl_PL',
    sv: 'sv_SE',
    da: 'da_DK',
  };
  return localeMap[lang] || 'en_US';
}

// 获取 metadata 翻译
export function getMetadataTranslation(locale: string): MetadataTranslations {
  return metadataTranslations[locale] || metadataTranslations.en;
}

