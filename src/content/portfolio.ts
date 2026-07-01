export const locales = ['zh', 'en', 'fr', 'es', 'de', 'ja', 'ko'] as const;
export type Locale = typeof locales[number];
export type LocalizedText = Record<Locale, string>;

export interface ProductLink {
  label: LocalizedText;
  url: string;
}

export interface Product {
  id: 'viabar' | 'commukit' | 'fringe' | 'tokenprism' | 'vision';
  index: string;
  name: string;
  description: LocalizedText;
  tags: string[];
  links: ProductLink[];
}

export interface LocaleOption {
  id: Locale;
  label: string;
  shortLabel: string;
  htmlLang: string;
}

export const localeOptions: LocaleOption[] = [
  { id: 'zh', label: '中文', shortLabel: 'ZH', htmlLang: 'zh-CN' },
  { id: 'en', label: 'English', shortLabel: 'EN', htmlLang: 'en' },
  { id: 'fr', label: 'Français', shortLabel: 'FR', htmlLang: 'fr' },
  { id: 'es', label: 'Español', shortLabel: 'ES', htmlLang: 'es' },
  { id: 'de', label: 'Deutsch', shortLabel: 'DE', htmlLang: 'de' },
  { id: 'ja', label: '日本語', shortLabel: 'JA', htmlLang: 'ja' },
  { id: 'ko', label: '한국어', shortLabel: 'KO', htmlLang: 'ko' },
];

export const localizedAttributes = (text: LocalizedText): Record<string, string> =>
  Object.fromEntries(locales.map((locale) => [`data-i18n-${locale}`, text[locale]]));

export const navigation: Record<'work' | 'github', LocalizedText> = {
  work: {
    zh: '产品', en: 'Products', fr: 'Produits', es: 'Productos', de: 'Produkte',
    ja: 'プロダクト', ko: '제품',
  },
  github: {
    zh: 'GitHub', en: 'GitHub', fr: 'GitHub', es: 'GitHub', de: 'GitHub',
    ja: 'GitHub', ko: 'GitHub',
  },
};

export const controls: Record<'language' | 'themeLight' | 'themeDark', LocalizedText> = {
  language: {
    zh: '选择语言', en: 'Choose language', fr: 'Choisir la langue', es: 'Elegir idioma',
    de: 'Sprache wählen', ja: '言語を選択', ko: '언어 선택',
  },
  themeLight: {
    zh: '切换为浅色模式', en: 'Switch to light mode', fr: 'Passer au thème clair',
    es: 'Cambiar al modo claro', de: 'Zum hellen Modus wechseln', ja: 'ライトモードに切り替え',
    ko: '라이트 모드로 전환',
  },
  themeDark: {
    zh: '切换为深色模式', en: 'Switch to dark mode', fr: 'Passer au thème sombre',
    es: 'Cambiar al modo oscuro', de: 'Zum dunklen Modus wechseln', ja: 'ダークモードに切り替え',
    ko: '다크 모드로 전환',
  },
};

export const heroScroll: LocalizedText = {
  zh: '查看产品', en: 'Explore products', fr: 'Découvrir les produits', es: 'Ver productos',
  de: 'Produkte entdecken', ja: 'プロダクトを見る', ko: '제품 살펴보기',
};

export const products: Product[] = [
  {
    id: 'viabar',
    index: '01',
    name: 'Viabar',
    description: {
      zh: '一款聚焦多项目全局进度与里程碑管理的轻量化生产力工具。',
      en: 'A lightweight productivity tool focused on multi-project progress and milestone management.',
      fr: 'Un outil de productivité léger dédié au suivi multi-projets et à la gestion des jalons.',
      es: 'Una herramienta de productividad ligera centrada en el progreso de múltiples proyectos y la gestión de hitos.',
      de: 'Ein schlankes Produktivitätstool für projektübergreifenden Fortschritt und Meilensteinmanagement.',
      ja: '複数プロジェクトの進捗とマイルストーン管理に特化した軽量な生産性ツール。',
      ko: '여러 프로젝트의 진행 상황과 마일스톤 관리에 집중한 가벼운 생산성 도구입니다.',
    },
    tags: ['macOS', 'Project Management', 'SwiftUI'],
    links: [
      {
        label: {
          zh: '产品官网', en: 'Website', fr: 'Site officiel', es: 'Sitio web', de: 'Website',
          ja: '公式サイト', ko: '공식 웹사이트',
        },
        url: 'https://viabar.tyrival.com/',
      },
    ],
  },
  {
    id: 'commukit',
    index: '02',
    name: 'CommuKit',
    description: {
      zh: '多协议网络调试工具，内置可编程消息解析器、通讯工作流、协议自动识别以及网络工具集。',
      en: 'A multi-protocol network debugging tool with a programmable message parser, communication workflows, automatic protocol detection, and a network tool suite.',
      fr: 'Un outil de débogage réseau multi-protocole avec analyseur de messages programmable, workflows de communication, détection automatique de protocole et suite d’outils réseau.',
      es: 'Una herramienta de depuración de red multiprotocolo con parser de mensajes programable, flujos de comunicación, detección automática de protocolos y una suite de herramientas de red.',
      de: 'Ein Multi-Protokoll-Netzwerk-Debugging-Tool mit programmierbarem Nachrichten-Parser, Kommunikations-Workflows, automatischer Protokollerkennung und einer Netzwerk-Tool-Suite.',
      ja: 'プログラマブルメッセージパーサー、通信ワークフロー、プロトコル自動識別、ネットワークツールセットを備えたマルチプロトコルネットワークデバッグツール。',
      ko: '프로그래머블 메시지 파서, 통신 워크플로, 프로토콜 자동 인식, 네트워크 도구 모음을 갖춘 멀티 프로토콜 네트워크 디버깅 도구.',
    },
    tags: ['macOS', 'Modbus', 'Industrial IoT'],
    links: [
      {
        label: {
          zh: '产品官网', en: 'Website', fr: 'Site officiel', es: 'Sitio web', de: 'Website',
          ja: '公式サイト', ko: '공식 웹사이트',
        },
        url: 'https://commukit.tyrival.com/',
      },
    ],
  },
  {
    id: 'fringe',
    index: '03',
    name: 'Fringe',
    description: {
      zh: '一款便签管理工具，支持Markdown格式、颜色标签、搜索与备份。',
      en: 'A note management tool with Markdown formatting, color tags, search, and backup.',
      fr: 'Un outil de gestion de notes avec formatage Markdown, étiquettes de couleur, recherche et sauvegarde.',
      es: 'Una herramienta de gestión de notas con formato Markdown, etiquetas de color, búsqueda y copia de seguridad.',
      de: 'Ein Notizverwaltungstool mit Markdown-Formatierung, Farb-Tags, Suche und Backup.',
      ja: 'Markdown形式、カラータグ、検索、バックアップを備えたメモ管理ツール。',
      ko: 'Markdown 형식, 색상 태그, 검색 및 백업을 갖춘 메모 관리 도구입니다.',
    },
    tags: ['macOS', 'Markdown', 'SwiftUI'],
    links: [
      {
        label: {
          zh: '产品官网', en: 'Website', fr: 'Site officiel', es: 'Sitio web', de: 'Website',
          ja: '公式サイト', ko: '공식 웹사이트',
        },
        url: 'https://fringe.tyrival.com/',
      },
    ],
  },
  {
    id: 'tokenprism',
    index: '04',
    name: 'TokenPrism',
    description: {
      zh: '一款 macOS 菜单栏工具，实时监控 Codex 与 Claude API 用量、余额与配额重置倒计时。',
      en: 'A macOS menu bar app that monitors Codex and Claude API usage, balance, and quota reset countdowns in real-time.',
      fr: 'Une app de barre de menu macOS qui surveille en temps réel l\'utilisation, le solde et le compte à rebours de réinitialisation des quotas des API Codex et Claude.',
      es: 'Una app de barra de menú para macOS que monitoriza el uso, saldo y cuenta atrás de reinicio de cuotas de las APIs de Codex y Claude en tiempo real.',
      de: 'Eine macOS-Menüleisten-App zur Echtzeit-Überwachung von Codex- und Claude-API-Nutzung, Guthaben und Kontingent-Reset-Countdowns.',
      ja: 'CodexおよびClaude APIの使用量、残高、クォータリセットのカウントダウンをリアルタイムで監視するmacOSメニューバーアプリ。',
      ko: 'Codex 및 Claude API 사용량, 잔액, 할당량 초기화 카운트다운을 실시간으로 모니터링하는 macOS 메뉴 막대 앱.',
    },
    tags: ['macOS', 'API Monitor', 'SwiftUI'],
    links: [
      {
        label: {
          zh: '产品官网', en: 'Website', fr: 'Site officiel', es: 'Sitio web', de: 'Website',
          ja: '公式サイト', ko: '공식 웹사이트',
        },
        url: 'https://tokenprism.tyrival.com/',
      },
    ],
  },
  {
    id: 'vision',
    index: '05',
    name: 'Vision',
    description: {
      zh: '所见即所得的数据可视化驾驶舱平台',
      en: 'A WYSIWYG data visualization cockpit platform.',
      fr: 'Une plateforme WYSIWYG pour créer des cockpits de visualisation de données.',
      es: 'Una plataforma WYSIWYG para crear paneles de visualización de datos.',
      de: 'Eine WYSIWYG-Plattform für Datenvisualisierungs-Cockpits.',
      ja: '見たまま編集できるデータ可視化コックピットプラットフォーム。',
      ko: '보이는 그대로 편집하는 데이터 시각화 콕핏 플랫폼입니다.',
    },
    tags: ['Vue.js', 'Visualization', 'Dashboard'],
    links: [
      {
        label: {
          zh: '试用网站', en: 'Open Vision', fr: 'Ouvrir Vision', es: 'Abrir Vision', de: 'Vision öffnen',
          ja: 'Visionを開く', ko: 'Vision 열기',
        },
        url: 'https://www.tyrival.com/vision/index.html#/design',
      },
      {
        label: {
          zh: '在线文档', en: 'Documentation', fr: 'Documentation', es: 'Documentación', de: 'Dokumentation',
          ja: 'ドキュメント', ko: '문서',
        },
        url: 'https://www.tyrival.com/books/vision-guide/',
      },
    ],
  },
];

export const footerCopy: LocalizedText = {
  zh: '用代码构建产品。', en: 'Building products with code.', fr: 'Créer des produits avec du code.',
  es: 'Creando productos con código.', de: 'Produkte mit Code entwickeln.',
  ja: 'コードでプロダクトをつくる。', ko: '코드로 제품을 만듭니다.',
};
