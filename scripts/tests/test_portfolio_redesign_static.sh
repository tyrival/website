#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$root"

require() {
  rg -q "$1" "$2" || {
    echo "missing: $1 in $2"
    exit 1
  }
}

forbid() {
  ! rg -q "$1" "$2" || {
    echo "forbidden: $1 in $2"
    exit 1
  }
}

require 'devToolbar:[[:space:]]*\{[[:space:]]*enabled:[[:space:]]*false' astro.config.mjs
require 'Talking is cheap' src/components/Hero.astro
require '<del[^>]*>code</del>' src/components/Hero.astro
forbid '专注于高并发底层通信' src
forbid '低代码公式/表达式配置与能源数据计量平台' src

for preview in ViabarPreview CommuKitPreview VisionPreview; do
  require "$preview" src/pages/index.astro
  test -f "src/components/previews/${preview}.astro"
done

require '所见即所得的数据可视化驾驶舱平台' src/content/portfolio.ts
require 'A WYSIWYG data visualization cockpit platform' src/content/portfolio.ts
require '多协议网络调试工具，内置可编程消息解析器、通讯工作流、协议自动识别以及网络工具集。' src/content/portfolio.ts
require 'A multi-protocol network debugging tool with a programmable message parser, communication workflows, automatic protocol detection, and a network tool suite.' src/content/portfolio.ts
require '通信ワークフロー' src/content/portfolio.ts
require '통신 워크플로' src/content/portfolio.ts
require 'Kommunikations-Workflows' src/content/portfolio.ts
require 'workflows de communication' src/content/portfolio.ts
require 'flujos de comunicación' src/content/portfolio.ts
forbid '工业物联网协议支持' src/content/portfolio.ts
forbid 'industrial IoT protocol support' src/content/portfolio.ts
require 'Communication Workflow' src/components/previews/CommuKitPreview.astro
require 'Wait for matching reply' src/components/previews/CommuKitPreview.astro
require 'Parser: Modbus Response' src/components/previews/CommuKitPreview.astro
require 'Run log' src/components/previews/CommuKitPreview.astro
require 'data-i18n' src
require 'localStorage' src/layouts/BaseLayout.astro
require 'prefers-color-scheme' src/layouts/BaseLayout.astro
require 'data-language-toggle' src/components/SiteHeader.astro
require 'data-language-menu' src/components/SiteHeader.astro
require 'aria-expanded' src/components/SiteHeader.astro
require 'data-theme-toggle' src/components/SiteHeader.astro
require '☀' src/components/SiteHeader.astro
require '☾' src/components/SiteHeader.astro
require 'Manrope' src/layouts/BaseLayout.astro
require '&nbsp;' src/components/Hero.astro
require '@media.*max-width' src/styles/global.css

for locale in zh en fr es de ja ko; do
  require "'$locale'" src/content/portfolio.ts
done

forbid "root.dataset.language === 'zh' \? 'en' : 'zh'" src/layouts/BaseLayout.astro

echo "portfolio redesign static contracts passed"
