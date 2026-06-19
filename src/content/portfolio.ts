export const locales = ['zh', 'en', 'fr', 'es', 'de', 'ja', 'ko'] as const;
export type Locale = typeof locales[number];
export type LocalizedText = Record<Locale, string>;

export interface ProductLink {
  label: LocalizedText;
  url: string;
}

export interface Product {
  id: 'viabar' | 'commukit' | 'vision';
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
      zh: '多协议网络调试工具，内置可编程消息管线、协议解析器及工业物联网协议支持。',
      en: 'A multi-protocol network debugging tool with programmable pipelines and industrial IoT protocol support.',
      fr: 'Un outil de débogage réseau multiprotocole avec pipelines programmables et prise en charge de l’IoT industriel.',
      es: 'Una herramienta de depuración de red multiprotocolo con canalizaciones programables y soporte para IoT industrial.',
      de: 'Ein Multiprotokoll-Netzwerktool mit programmierbaren Pipelines und Unterstützung für industrielle IoT-Protokolle.',
      ja: 'プログラム可能なメッセージパイプラインと産業用IoTプロトコルに対応したマルチプロトコル通信デバッグツール。',
      ko: '프로그래밍 가능한 메시지 파이프라인과 산업용 IoT 프로토콜을 지원하는 다중 프로토콜 네트워크 디버깅 도구입니다.',
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
    id: 'vision',
    index: '03',
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
