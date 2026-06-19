export interface LocalizedText {
  zh: string;
  en: string;
}

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

export const navigation = {
  work: { zh: '产品', en: 'Products' },
  github: { zh: 'GitHub', en: 'GitHub' },
};

export const controls = {
  language: { zh: '切换为英文', en: 'Switch to Chinese' },
  themeLight: { zh: '切换为浅色模式', en: 'Switch to light mode' },
  themeDark: { zh: '切换为深色模式', en: 'Switch to dark mode' },
};

export const products: Product[] = [
  {
    id: 'viabar',
    index: '01',
    name: 'Viabar',
    description: {
      zh: '一款聚焦多项目全局进度与里程碑管理的轻量化生产力工具。',
      en: 'A lightweight productivity tool focused on multi-project progress and milestone management.',
    },
    tags: ['macOS', 'Project Management', 'SwiftUI'],
    links: [
      {
        label: { zh: '产品官网', en: 'Website' },
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
    },
    tags: ['macOS', 'Modbus', 'Industrial IoT'],
    links: [
      {
        label: { zh: '产品官网', en: 'Website' },
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
    },
    tags: ['Vue.js', 'Visualization', 'Dashboard'],
    links: [
      {
        label: { zh: '试用网站', en: 'Open Vision' },
        url: 'https://www.tyrival.com/vision/index.html#/design',
      },
      {
        label: { zh: '在线文档', en: 'Documentation' },
        url: 'https://www.tyrival.com/books/vision-guide/',
      },
    ],
  },
];

export const footerCopy = {
  zh: '用代码构建产品。',
  en: 'Building products with code.',
};
