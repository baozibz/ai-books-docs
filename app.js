// Book Data
const books = {
    'claude-code': {
        title: 'Claude Code 从入门到精通',
        version: 'v2.1.88+',
        color: '#d97706',
        sections: [
            {
                title: 'Part 1: 入门基础',
                chapters: [
                    { id: 'cc-01', title: '为什么选择 Claude Code', icon: '🤔' },
                    { id: 'cc-02', title: '10分钟快速上手', icon: '⚡' },
                    { id: 'cc-03', title: '第一个项目实践', icon: '🚀' },
                ]
            },
            {
                title: 'Part 2: 核心工作流',
                chapters: [
                    { id: 'cc-04', title: 'Plan 计划模式', icon: '📋' },
                    { id: 'cc-05', title: 'Auto 自动模式', icon: '🤖' },
                    { id: 'cc-06', title: '权限管理与 Git', icon: '🔐' },
                ]
            },
            {
                title: 'Part 3: 高级功能',
                chapters: [
                    { id: 'cc-07', title: 'Computer Use', icon: '🖥️' },
                    { id: 'cc-08', title: 'Skills 与 MCP', icon: '🧩' },
                    { id: 'cc-09', title: 'Agent 模式', icon: '🎯' },
                ]
            }
        ]
    },
    'openclaw': {
        title: 'OpenClaw 橙皮书',
        version: 'v1.4.0',
        color: '#059669',
        sections: [
            {
                title: 'Part 1: 认识 OpenClaw',
                chapters: [
                    { id: 'oc-01', title: '什么是 OpenClaw', icon: '❓' },
                    { id: 'oc-02', title: '发展历程', icon: '📜' },
                    { id: 'oc-03', title: '创始人故事', icon: '👨‍💻' },
                    { id: 'oc-04', title: '为什么火爆', icon: '🔥' },
                ]
            },
            {
                title: 'Part 2: 架构设计',
                chapters: [
                    { id: 'oc-05', title: '架构概览', icon: '🏗️' },
                    { id: 'oc-06', title: 'Memory 系统', icon: '🧠' },
                    { id: 'oc-07', title: 'Agent 工作区', icon: '📁' },
                    { id: 'oc-08', title: 'Session 管理', icon: '🔄' },
                    { id: 'oc-09', title: '设计哲学', icon: '💡' },
                ]
            },
            {
                title: 'Part 3: 部署与配置',
                chapters: [
                    { id: 'oc-10', title: '部署概览', icon: '🚀' },
                    { id: 'oc-11', title: '本地安装', icon: '💻' },
                    { id: 'oc-12', title: 'Docker 部署', icon: '🐳' },
                    { id: 'oc-13', title: '中国云部署', icon: '☁️' },
                ]
            },
            {
                title: 'Part 4: Skills 系统',
                chapters: [
                    { id: 'oc-19', title: 'Skills 工作原理', icon: '⚙️' },
                    { id: 'oc-20', title: 'ClawHub 生态', icon: '🌐' },
                    { id: 'oc-21', title: '热门 Skills', icon: '⭐' },
                    { id: 'oc-22', title: '创建自定义 Skill', icon: '🛠️' },
                ]
            },
            {
                title: 'Part 5: 模型配置',
                chapters: [
                    { id: 'oc-24', title: 'Provider 概览', icon: '📊' },
                    { id: 'oc-25', title: '国际模型', icon: '🌍' },
                    { id: 'oc-26', title: '中国模型', icon: '🇨🇳' },
                    { id: 'oc-27', title: '本地模型', icon: '🏠' },
                ]
            }
        ]
    }
};

// Chapter Content
const chapters = {
    // Claude Code Chapters
    'cc-01': {
        book: 'claude-code',
        title: '为什么选择 Claude Code',
        content: `
            <h3>AI 编程助手演进史</h3>
            <p>2022年 GitHub Copilot 开创了 AI 编程辅助的先河，随后在 2023-2024 年，Cursor 引领了 Agent IDE 的概念。而到了 2025 年，Claude Code 正式登场，成为了开发者的首选工具。</p>

            <h3>Claude Code 的核心优势</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>git/CLI 集成</h5>
                    <p>深度集成 Git 和命令行工具，原生支持版本控制和脚本执行</p>
                </div>
                <div class="feature-card">
                    <h5>Shell 执行</h5>
                    <p>直接在终端中执行命令，快速验证和测试代码</p>
                </div>
                <div class="feature-card">
                    <h5>MCP 支持</h5>
                    <p>Model Context Protocol 原生支持，扩展 AI 能力边界</p>
                </div>
                <div class="feature-card">
                    <h5>CLAUDE.md</h5>
                    <p>项目级别的上下文配置，让 AI 深入理解你的项目</p>
                </div>
            </div>

            <h3>Claude Code vs 竞品</h3>
            <table>
                <thead>
                    <tr>
                        <th>特性</th>
                        <th>Claude Code</th>
                        <th>GitHub Copilot</th>
                        <th>Cursor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agent 能力</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>⭐⭐</td>
                        <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>CLI 集成</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>⭐</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>MCP 支持</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>⭐</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>Plan Mode</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>⭐</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                </tbody>
            </table>

            <h3>用户评价</h3>
            <blockquote>
                "Claude Code 在 GitHub Copilot 推出后推出，主打 Agent IDE 概念。它能够理解整个代码库，不仅仅是个代码补全工具。"
            </blockquote>
        `
    },
    'cc-02': {
        book: 'claude-code',
        title: '10分钟快速上手',
        content: `
            <h3>安装 Claude Code</h3>

            <h4>macOS / Linux</h4>
            <pre><code># 方式一：原生安装（推荐）
curl -fsSL https://claude.ai/install.sh | bash

# 方式二：Homebrew
brew install --cask claude-code</code></pre>

            <h4>Windows</h4>
            <pre><code># WinGet
winget install Anthropic.ClaudeCode

# 或使用 Git Bash
./claude-code-installer.exe</code></pre>

            <h3>前置要求</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Git</h5>
                    <p>Windows 用户需要安装 Git for Windows</p>
                </div>
                <div class="feature-card">
                    <h5>API Key</h5>
                    <p>从 Anthropic Console 获取 API Key</p>
                </div>
            </div>

            <h3>快速开始</h3>
            <pre><code># 1. 创建项目
mkdir ~/my-first-project && cd ~/my-first-project

# 2. 启动 Claude Code
claude

# 3. 描述你想要创建的内容
# "创建一个 HTML + CSS 的 Hello World 页面"</code></pre>

            <h3>使用方式</h3>
            <table>
                <thead>
                    <tr>
                        <th>方式</th>
                        <th>说明</th>
                        <th>命令/入口</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CLI</td>
                        <td>终端直接使用</td>
                        <td><code>claude</code></td>
                    </tr>
                    <tr>
                        <td>VS Code</td>
                        <td>IDE 扩展</td>
                        <td><code>Cmd+Shift+X</code> 搜索 Claude</td>
                    </tr>
                    <tr>
                        <td>Desktop App</td>
                        <td>桌面应用</td>
                        <td>claude.ai/download</td>
                    </tr>
                    <tr>
                        <td>JetBrains</td>
                        <td>JetBrains IDE</td>
                        <td>IntelliJ IDEA, WebStorm</td>
                    </tr>
                </tbody>
            </table>

            <h3>认证</h3>
            <pre><code># 登录 Anthropic
claude auth login --console

# 或设置环境变量
export ANTHROPIC_API_KEY="your-api-key"</code></pre>

            <h3>订阅计划</h3>
            <table>
                <thead>
                    <tr>
                        <th>计划</th>
                        <th>价格</th>
                        <th>模型</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pro</td>
                        <td>$20/月</td>
                        <td>Pro (5x)</td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td>$100/月</td>
                        <td>Max (20x)</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'cc-03': {
        book: 'claude-code',
        title: '第一个项目实践',
        content: `
            <h3>项目案例：AI 新闻聚合器</h3>
            <p>让我们通过一个实际项目来学习 Claude Code。这个项目会从多个 RSS 源获取 AI 新闻，并整理成 Markdown 格式。</p>

            <h3>项目需求</h3>
            <pre><code># Claude Code Prompt
"创建一个 AI 新闻聚合 CLI 工具：

1. RSS 源：
   - TechCrunch AI
   - The Verge AI
   - Hacker News (关键词：AI)

2. 功能：
   - 获取最新新闻
   - 保存为 Markdown 格式

3. 技术栈：
   - TypeScript + tsx
   - rss-parser
   - date-fns"</code></pre>

            <h3>Claude Code 工作流程</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>1. 制定计划</h5>
                    <p>Claude 分析需求，制定实施计划</p>
                </div>
                <div class="feature-card">
                    <h5>2. 审查计划</h5>
                    <p>用户确认计划可行性</p>
                </div>
                <div class="feature-card">
                    <h5>3. 执行代码</h5>
                    <p>Claude 编写并执行代码</p>
                </div>
                <div class="feature-card">
                    <h5>4. 验证输出</h5>
                    <p>运行并检查结果</p>
                </div>
            </div>

            <h3>关键命令</h3>
            <pre><code># 初始化项目
npm init -y

# 安装依赖
npm install rss-parser date-fns tsx

# 运行程序
npx tsx src/index.ts

# 设置定时任务
npx tsx src/index.ts --cron</code></pre>

            <h3>心理转变</h3>
            <blockquote>
                使用 Claude Code 需要转变思维：<br>
                - 不再是 "StackOverflow review" 模式<br>
                - 而是 "Describe What You Want" 模式<br>
                - AI 会帮你处理实现细节
            </blockquote>

            <h3>常见问题</h3>
            <ul>
                <li><strong>API Key 问题</strong>：确保正确设置 API Key 环境变量</li>
                <li><strong>权限问题</strong>：使用 <code>/permissions</code> 命令查看和配置权限</li>
                <li><strong>Bug 修复</strong>：Claude 会分析错误并自动修复</li>
            </ul>
        `
    },
    'cc-04': {
        book: 'claude-code',
        title: 'Plan 计划模式',
        content: `
            <h3>什么是 Plan Mode</h3>
            <p>Plan Mode 是 Claude Code 的核心功能之一，让 AI 先制定计划，用户确认后再执行。</p>

            <h3>使用方式</h3>
            <pre><code># 快捷键
Shift + Tab    # 进入 Plan 模式

# Plan 模式下
- Claude 会分析任务
- 制定分步计划
- 等待用户确认
- 用户确认后执行</code></pre>

            <h3>Plan 模式流程</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Step 1</h5>
                    <p>按 Shift+Tab 进入 Plan 模式</p>
                </div>
                <div class="feature-card">
                    <h5>Step 2</h5>
                    <p>Claude 展示详细计划</p>
                </div>
                <div class="feature-card">
                    <h5>Step 3</h5>
                    <p>用户审核并修改</p>
                </div>
                <div class="feature-card">
                    <h5>Step 4</h5>
                    <p>再次按 Shift+Tab 确认执行</p>
                </div>
            </div>

            <h3>Plan 模式优势</h3>
            <ul>
                <li>节省 Token：只在你确认后才执行</li>
                <li>避免错误：提前发现问题</li>
                <li>可控性强：每一步都在掌控中</li>
                <li>学习机会：了解 AI 的思考过程</li>
            </ul>

            <h3>使用场景</h3>
            <table>
                <thead>
                    <tr>
                        <th>场景</th>
                        <th>推荐理由</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>大型重构</td>
                        <td>需要全面了解影响范围</td>
                    </tr>
                    <tr>
                        <td>新增功能</td>
                        <td>确保实现方式正确</td>
                    </tr>
                    <tr>
                        <td>Bug 修复</td>
                        <td>避免引入新问题</td>
                    </tr>
                    <tr>
                        <td>代码审查</td>
                        <td>全面了解代码变更</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'cc-05': {
        book: 'claude-code',
        title: 'Auto 自动模式',
        content: `
            <h3>什么是 Auto Mode</h3>
            <p>Auto Mode 让 Claude Code 可以自动批准大多数操作，无需用户手动确认。</p>

            <h3>启用 Auto Mode</h3>
            <pre><code># 命令行启用
claude --permission-mode auto

# 设置文件中启用
# 在 .claude/settings.json 中配置</code></pre>

            <h3>安全数据</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>93%</h5>
                    <p>操作自动批准准确率</p>
                </div>
                <div class="feature-card">
                    <h5>8.5%</h5>
                    <p>需要用户确认的比例</p>
                </div>
                <div class="feature-card">
                    <h5>0.4%</h5>
                    <p>拒绝误批准（安全）</p>
                </div>
            </div>

            <h3>权限模式对比</h3>
            <table>
                <thead>
                    <tr>
                        <th>模式</th>
                        <th>说明</th>
                        <th>安全性</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>每次操作需确认</td>
                        <td>最高</td>
                    </tr>
                    <tr>
                        <td>Auto</td>
                        <td>自动批准安全操作</td>
                        <td>高</td>
                    </tr>
                    <tr>
                        <td>Bypass</td>
                        <td>跳过所有权限检查</td>
                        <td>危险</td>
                    </tr>
                </tbody>
            </table>

            <h3>安全警告</h3>
            <blockquote>
                ⚠️ Auto Mode 下仍需警惕 Prompt Injection 攻击。Anthropic 数据显示，约 0.4% 的自动批准可能存在风险。请定期检查 Claude 的操作记录。
            </blockquote>

            <h3>使用场景</h3>
            <ul>
                <li>熟练用户日常开发</li>
                <li>CI/CD 自动化流程</li>
                <li>批处理任务</li>
            </ul>
        `
    },
    'cc-06': {
        book: 'claude-code',
        title: '权限管理与 Git',
        content: `
            <h3>权限管理</h3>
            <p>Claude Code 提供了细粒度的权限管理，让你可以控制 Claude 可以执行的操作。</p>

            <h3>权限命令</h3>
            <pre><code>/permissions    # 查看当前权限状态
/permissions check    # 检查权限配置</code></pre>

            <h3>常见权限配置</h3>
            <pre><code># .claude/settings.json
{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git push *)",
      "Edit(/docs/**)"
    ]
  }
}</code></pre>

            <h3>Git 操作</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Commit</h5>
                    <p>Claude 可以自动生成 commit message</p>
                </div>
                <div class="feature-card">
                    <h5>PR</h5>
                    <p>创建 Pull Request 并描述变更</p>
                </div>
                <div class="feature-card">
                    <h5>Worktree</h5>
                    <p>支持 Git Worktree 隔离开发</p>
                </div>
            </div>

            <h3>最佳实践</h3>
            <ul>
                <li>在 Auto Mode 下，Claude 可以自动处理 Git 操作</li>
                <li>使用 Plan Mode 审查大型变更</li>
                <li>定期检查 Git 操作日志</li>
            </ul>
        `
    },
    'cc-07': {
        book: 'claude-code',
        title: 'Computer Use',
        content: `
            <h3>什么是 Computer Use</h3>
            <p>Computer Use 是 Claude Code 的强大功能，允许 AI 控制你的计算机来操作 GUI 应用程序。</p>

            <h3>支持平台</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>macOS</h5>
                    <p>完整支持</p>
                </div>
                <div class="feature-card">
                    <h5>Windows</h5>
                    <p>通过 WSL</p>
                </div>
                <div class="feature-card">
                    <h5>Linux</h5>
                    <p>完整支持</p>
                </div>
            </div>

            <h3>使用方式</h3>
            <pre><code># 启动 Computer Use
claude --computer

# Claude 可以：
# - 控制浏览器
# - 操作桌面应用
# - 执行 GUI 操作
# - 截取屏幕截图</code></pre>

            <h3>应用场景</h3>
            <table>
                <thead>
                    <tr>
                        <th>应用</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Web 测试</td>
                        <td>自动测试 Web 应用</td>
                    </tr>
                    <tr>
                        <td>Figma</td>
                        <td>设计稿自动化操作</td>
                    </tr>
                    <tr>
                        <td>Chrome DevTools</td>
                        <td>调试和性能分析</td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                💡 Computer Use 让你可以通过自然语言控制任何 GUI 应用，大大扩展了 AI 的能力边界。
            </blockquote>
        `
    },
    'cc-08': {
        book: 'claude-code',
        title: 'Skills 与 MCP',
        content: `
            <h3>Skills 系统</h3>
            <p>Claude Code Skills 允许你扩展 Claude 的能力，通过自定义技能来完成特定任务。</p>

            <h3>使用 Skills</h3>
            <pre><code># 查看可用 Skills
/skills

# 使用特定 Skill
/skill python-code-reader

# 查找 Skill
/find-skill "code analysis"</code></pre>

            <h3>MCP (Model Context Protocol)</h3>
            <p>MCP 是 Anthropic 推出的开放协议，用于扩展 AI 助手的能力。</p>

            <div class="feature-grid">
                <div class="feature-card">
                    <h5>工具扩展</h5>
                    <p>添加新的工具和能力</p>
                </div>
                <div class="feature-card">
                    <h5>数据源</h5>
                    <p>连接外部数据和服务</p>
                </div>
                <div class="feature-card">
                    <h5>自动化</h5>
                    <p>执行复杂的工作流</p>
                </div>
            </div>

            <h3>常用 MCP 服务</h3>
            <table>
                <thead>
                    <tr>
                        <th>服务</th>
                        <th>用途</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Filesystem</td>
                        <td>文件操作</td>
                    </tr>
                    <tr>
                        <td>Git</td>
                        <td>版本控制</td>
                    </tr>
                    <tr>
                        <td>Database</td>
                        <td>数据库连接</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'cc-09': {
        book: 'claude-code',
        title: 'Agent 模式',
        content: `
            <h3>Agent 模式概述</h3>
            <p>Claude Code 的 Agent 模式允许 AI 自主完成复杂任务，不需要用户持续干预。</p>

            <h3>工作原理</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>1. 理解目标</h5>
                    <p>AI 理解用户想要达成的目标</p>
                </div>
                <div class="feature-card">
                    <h5>2. 制定计划</h5>
                    <p>分解为可执行的步骤</p>
                </div>
                <div class="feature-card">
                    <h5>3. 自主执行</h5>
                    <p>按照计划执行任务</p>
                </div>
                <div class="feature-card">
                    <h5>4. 自我纠错</h5>
                    <p>遇到问题自动调整</p>
                </div>
            </div>

            <h3>使用场景</h3>
            <table>
                <thead>
                    <tr>
                        <th>场景</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>构建 MVP</td>
                        <td>快速构建最小可行产品</td>
                    </tr>
                    <tr>
                        <td>CI/CD</td>
                        <td>自动化部署流程</td>
                    </tr>
                    <tr>
                        <td>代码重构</td>
                        <td>大规模代码改造</td>
                    </tr>
                    <tr>
                        <td>API 集成</td>
                        <td>第三方服务对接</td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                💡 2025 年，5 大 SaaS 公司（Netflix、Spotify、DoorDash、Notion、Vercel）的开发团队都在使用 Claude Code 构建产品。
            </blockquote>
        `
    },

    // OpenClaw Chapters
    'oc-01': {
        book: 'openclaw',
        title: '什么是 OpenClaw',
        content: `
            <h3>OpenClaw 简介</h3>
            <p>OpenClaw 是一个开源的 AI Agent 平台，类似于 ChatGPT 的 Agent，但支持 20+ 消息平台。</p>

            <h3>核心特点</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>多平台支持</h5>
                    <p>WhatsApp、Telegram、Discord、Slack 等 20+ 平台</p>
                </div>
                <div class="feature-card">
                    <h5>Skills 生态</h5>
                    <p>ClawHub 上 13,700+ 预制 Skills</p>
                </div>
                <div class="feature-card">
                    <h5>多模型支持</h5>
                    <p>Claude / GPT / DeepSeek / Gemini / Ollama</p>
                </div>
                <div class="feature-card">
                    <h5>开源免费</h5>
                    <p>MIT License，完全开源</p>
                </div>
            </div>

            <h3>统计数据</h3>
            <table>
                <thead>
                    <tr>
                        <th>指标</th>
                        <th>数值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GitHub Stars</td>
                        <td>330,000+</td>
                    </tr>
                    <tr>
                        <td>GitHub Forks</td>
                        <td>64,300+</td>
                    </tr>
                    <tr>
                        <td>Skills 数量</td>
                        <td>13,729+</td>
                    </tr>
                    <tr>
                        <td>支持的平台</td>
                        <td>20+</td>
                    </tr>
                    <tr>
                        <td>活跃用户</td>
                        <td>55+</td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                OpenClaw 是一个改变游戏规则的产品，让每个人都能轻松拥有自己的 AI Agent。
            </blockquote>
        `
    },
    'oc-02': {
        book: 'openclaw',
        title: '发展历程',
        content: `
            <h3>OpenClaw 时间线</h3>

            <h4>2025年1月</h4>
            <p>ClawdBot 发布 - Peter Steinberger 创造了第一个版本</p>

            <h4>2026年1月</h4>
            <ul>
                <li>Stars 突破 9,000</li>
                <li>Anthropic Claude 支持</li>
                <li>Moltbot 发布</li>
            </ul>

            <h4>2026年2月</h4>
            <ul>
                <li>OpenClaw v3.x 发布</li>
                <li>发现安全漏洞 CVE-2026-25253 (CVSS 8.8)</li>
                <li>快速修复并推出更新</li>
            </ul>

            <h4>2026年3月</h4>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>v2026.3.2</h5>
                    <p>Context Engine 发布</p>
                </div>
                <div class="feature-card">
                    <h5>v2026.3.7</h5>
                    <p>GPT-5.4 支持</p>
                </div>
                <div class="feature-card">
                    <h5>v2026.3.8</h5>
                    <p>ACP12+ & CNCERT 认证</p>
                </div>
                <div class="feature-card">
                    <h5>v2026.3.13</h5>
                    <p>Stars 突破 280,000</p>
                </div>
            </div>

            <h3>增长速度</h3>
            <table>
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>Stars</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2026.1 初</td>
                        <td>9,000</td>
                    </tr>
                    <tr>
                        <td>2026.1 中</td>
                        <td>60,000+</td>
                    </tr>
                    <tr>
                        <td>2026.2</td>
                        <td>145,000+</td>
                    </tr>
                    <tr>
                        <td>2026.3.13</td>
                        <td>280,000+</td>
                    </tr>
                    <tr>
                        <td>最新</td>
                        <td>330,000+</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'oc-03': {
        book: 'openclaw',
        title: '创始人故事',
        content: `
            <h3>创始人：Peter Steinberger</h3>
            <p>Peter Steinberger 是一位来自 OpenAI 的资深开发者，iOS 和 macOS 领域的专家。</p>

            <h3>背景</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>开源贡献</h5>
                    <p>1,075 次 GitHub 提交</p>
                </div>
                <div class="feature-card">
                    <h5>React</h5>
                    <p>11,684 次提交</p>
                </div>
                <div class="feature-card">
                    <h5>Linux</h5>
                    <p>380+ 次提交</p>
                </div>
            </div>

            <h3>创立故事</h3>
            <blockquote>
                "我内心是一个建设者... 我想要改变世界，而不是建立一个大公司。"<br><br>
                — Peter Steinberger
            </blockquote>

            <h3>相关产品</h3>
            <table>
                <thead>
                    <tr>
                        <th>产品</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ClawdBot</td>
                        <td>OpenClaw 前身</td>
                    </tr>
                    <tr>
                        <td>Moltbot</td>
                        <td>Anthropic Claude 版本</td>
                    </tr>
                    <tr>
                        <td>Molt=</td>
                        <td>Claude 对等物</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'oc-04': {
        book: 'openclaw',
        title: '为什么火爆',
        content: `
            <h3>OpenClaw 成功的关键因素</h3>

            <div class="feature-grid">
                <div class="feature-card">
                    <h5>React 生态</h5>
                    <p>充分利用 React 生态，380+ 开发者贡献</p>
                </div>
                <div class="feature-card">
                    <h5>Linux 原生</h5>
                    <p>首个针对 Linux 优化的 AI Agent 平台</p>
                </div>
                <div class="feature-card">
                    <h5>Skills 生态</h5>
                    <p>13,729+ 预制 Skills，即装即用</p>
                </div>
                <div class="feature-card">
                    <h5>开源文化</h5>
                    <p>MIT 许可证，完全透明</p>
                </div>
            </div>

            <h3>社区数据</h3>
            <table>
                <thead>
                    <tr>
                        <th>平台</th>
                        <th>用户数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AI Agent 社区</td>
                        <td>32,912</td>
                    </tr>
                    <tr>
                        <td>Coworker 群组</td>
                        <td>11 ($15K 赞助)</td>
                    </tr>
                    <tr>
                        <td>Moltbook</td>
                        <td>22,046</td>
                    </tr>
                </tbody>
            </table>

            <h3>商业案例</h3>
            <ul>
                <li><strong>Polymarket</strong> - 使用 OpenClaw 进行市场预测</li>
                <li><strong>ClawWork</strong> - AI 协作者服务</li>
                <li><strong>Moltbook</strong> - Agent 社交平台</li>
            </ul>

            <blockquote>
                🔥 OpenClaw 在 2026 年 3 月成为 AI 领域最热门的话题，38 家媒体报道。
            </blockquote>
        `
    },
    'oc-05': {
        book: 'openclaw',
        title: '架构概览',
        content: `
            <h3>Gateway-Node-Channel 架构</h3>
            <p>OpenClaw 采用三层架构设计：Gateway（网关）、Node（节点）、Channel（渠道）。</p>

            <h3>架构组件</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Gateway</h5>
                    <p>WebSocket 连接中心，处理会话路由</p>
                </div>
                <div class="feature-card">
                    <h5>Node</h5>
                    <p>Agent 执行引擎，运行 AI 逻辑</p>
                </div>
                <div class="feature-card">
                    <h5>Channel</h5>
                    <p>20+ 消息平台适配器</p>
                </div>
            </div>

            <h3>连接流程</h3>
            <pre><code>Channel → Gateway → Node → Agent → Memory
           ↑___________WebSocket___________↓</code></pre>

            <h3>安全设计：Loopback-First</h3>
            <table>
                <thead>
                    <tr>
                        <th>原则</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>本地优先</td>
                        <td>Gateway 默认监听 127.0.0.1</td>
                    </tr>
                    <tr>
                        <td>WebSocket</td>
                        <td>加密的实时通信</td>
                    </tr>
                    <tr>
                        <td>Tailscale</td>
                        <td>安全的远程访问</td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                💡 这种架构确保了安全性和可扩展性的平衡。
            </blockquote>
        `
    },
    'oc-06': {
        book: 'openclaw',
        title: 'Memory 系统',
        content: `
            <h3>Memory 系统架构</h3>
            <p>OpenClaw 采用了类似人脑的记忆系统，分层存储不同类型的记忆。</p>

            <h3>记忆类型</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>SOUL.md</h5>
                    <p>Agent 核心人格和身份</p>
                </div>
                <div class="feature-card">
                    <h5>MEMORY.md</h5>
                    <p>用户长期记忆</p>
                </div>
                <div class="feature-card">
                    <h5>Daily Logs</h5>
                    <p>Append-only 日常记录</p>
                </div>
                <div class="feature-card">
                    <h5>Session</h5>
                    <p>当前会话上下文</p>
                </div>
            </div>

            <h3>Pre-Compaction 机制</h3>
            <p>当 Session token 超过 4000 时，OpenClaw 会自动：</p>
            <ol>
                <li>分析会话内容</li>
                <li>提取重要信息写入 MEMORY.md</li>
                <li>写入 Daily Log</li>
                <li>重置 Session</li>
            </ol>

            <h3>语义搜索</h3>
            <table>
                <thead>
                    <tr>
                        <th>技术</th>
                        <th>用途</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Embedding</td>
                        <td>语义向量匹配</td>
                    </tr>
                    <tr>
                        <td>BM25</td>
                        <td>关键词搜索</td>
                    </tr>
                    <tr>
                        <td>SQLite-vec</td>
                        <td>向量数据库</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'oc-07': {
        book: 'openclaw',
        title: 'Agent 工作区',
        content: `
            <h3>Agent Workspace 结构</h3>
            <p>每个 Agent 都有自己独立的工作区，包含所有必要文件。</p>

            <h3>目录结构</h3>
            <pre><code>Agent Workspace/
├── AGENTS.md          # Agent 定义
├── SOUL.md           # 核心人格
├── USER.md           # 用户信息
├── MEMORY.md         # 长期记忆
├── HEARTBEAT.md      # 心跳文件
├── memory/           # 记忆目录
│   └── YYYY-MM-DD.md # 每日日志
├── skills/           # 技能目录
└── sessions.json     # 会话记录</code></pre>

            <h3>文件说明</h3>
            <table>
                <thead>
                    <tr>
                        <th>文件</th>
                        <th>用途</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AGENTS.md</td>
                        <td>Agent 配置和权限</td>
                    </tr>
                    <tr>
                        <td>SOUL.md</td>
                        <td>Agent 核心定义</td>
                    </tr>
                    <tr>
                        <td>USER.md</td>
                        <td>用户信息和偏好</td>
                    </tr>
                    <tr>
                        <td>HEARTBEAT.md</td>
                        <td>运行状态</td>
                    </tr>
                </tbody>
            </table>

            <h3>多会话支持</h3>
            <p>OpenClaw 支持 Branching 和 Side-Quests，可以同时处理多个独立的任务分支。</p>
        `
    },
    'oc-08': {
        book: 'openclaw',
        title: 'Session 管理',
        content: `
            <h3>Session 机制</h3>
            <p>OpenClaw 支持 DM (Direct Message) 和多会话管理。</p>

            <h3>DM Pairing 流程</h3>
            <ol>
                <li>用户发起 DM</li>
                <li>系统检查 Pairing Policy</li>
                <li>分配或创建 Agent</li>
                <li>建立会话</li>
            </ol>

            <h3>allowFrom 配置</h3>
            <pre><code># AGENTS.md
allowFrom:
  - telegram:123456789
  - whatsapp:+8613800138000
  - discord:user#1234

requireMention: true</code></pre>

            <h3>会话隔离</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Main Session</h5>
                    <p>主要对话上下文</p>
                </div>
                <div class="feature-card">
                    <h5>Private Session</h5>
                    <p>私密对话</p>
                </div>
                <div class="feature-card">
                    <h5>MEMORY.md</h5>
                    <p>跨会话记忆</p>
                </div>
            </div>

            <h3>Token 管理</h3>
            <p>系统自动监控 token 使用量，确保不超出模型限制。</p>
        `
    },
    'oc-09': {
        book: 'openclaw',
        title: '设计哲学',
        content: `
            <h3>OpenClaw 的设计哲学</h3>
            <p>OpenClaw 的设计深受 Unix 哲学影响。</p>

            <h3>核心原则</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Small Tools</h5>
                    <p>小型化、可组合的工具</p>
                </div>
                <div class="feature-card">
                    <h5>Composable</h5>
                    <p>模块化设计，易于扩展</p>
                </div>
                <div class="feature-card">
                    <h5>Text Streams</h5>
                    <p>文本流作为主要交互方式</p>
                </div>
            </div>

            <h3>Minimalism 极简主义</h3>
            <p>系统 prompt 仅包含 4 个基本操作：</p>
            <ol>
                <li>Read - 读取信息</li>
                <li>Write - 写入信息</li>
                <li>Edit - 编辑内容</li>
                <li>Bash - 执行命令</li>
            </ol>

            <h3>对 MCP 的态度</h3>
            <blockquote>
                Peter 认为 MCP 在某些场景下过度设计了。OpenClaw 更倾向于使用 CLI 和 Bash 来扩展功能，保持简单性。
            </blockquote>

            <h3>Self-Extending</h3>
            <p>Agent 可以自我扩展，通过创建新的 Skills 来增强能力。</p>
        `
    },
    'oc-10': {
        book: 'openclaw',
        title: '部署概览',
        content: `
            <h3>部署方式对比</h3>
            <table>
                <thead>
                    <tr>
                        <th>方式</th>
                        <th>推荐配置</th>
                        <th>适用场景</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>本地 (npm)</td>
                        <td>Node.js 22+</td>
                        <td>开发测试</td>
                    </tr>
                    <tr>
                        <td>Docker</td>
                        <td>2C2G + 40GB</td>
                        <td>生产环境</td>
                    </tr>
                    <tr>
                        <td>Railway</td>
                        <td>2C4G</td>
                        <td>快速部署</td>
                    </tr>
                    <tr>
                        <td>Flexus L</td>
                        <td>2C4G</td>
                        <td>中国区</td>
                    </tr>
                </tbody>
            </table>

            <h3>推荐配置</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>CPU</h5>
                    <p>2 核以上</p>
                </div>
                <div class="feature-card">
                    <h5>内存</h5>
                    <p>4GB 以上</p>
                </div>
                <div class="feature-card">
                    <h5>存储</h5>
                    <p>40GB 以上</p>
                </div>
                <div class="feature-card">
                    <h5>Node.js</h5>
                    <p>22+</p>
                </div>
            </div>

            <blockquote>
                💡 Docker 是生产环境部署的最佳选择，支持 24/7 运行。
            </blockquote>
        `
    },
    'oc-11': {
        book: 'openclaw',
        title: '本地安装',
        content: `
            <h3>前置要求</h3>
            <ul>
                <li>Node.js 22+</li>
                <li>npm 或 yarn</li>
                <li>至少 1GB 内存</li>
            </ul>

            <h3>安装步骤</h3>
            <pre><code># 1. 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 2. 安装依赖
npm install

# 3. 配置
cp .env.example .env
# 编辑 .env 配置 API Key

# 4. 启动
npm run dev</code></pre>

            <h3>环境变量</h3>
            <pre><code># .env
ANTHROPIC_API_KEY=your-api-key
OPENCLAW_PORT=18789
OPENCLAW_HOST=127.0.0.1</code></pre>

            <h3>验证安装</h3>
            <pre><code># 检查版本
openclaw --version

# 查看帮助
openclaw --help</code></pre>
        `
    },
    'oc-12': {
        book: 'openclaw',
        title: 'Docker 部署',
        content: `
            <h3>Docker 部署优势</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>隔离性</h5>
                    <p>与主机环境隔离</p>
                </div>
                <div class="feature-card">
                    <h5>可移植</h5>
                    <p>任何 Docker 环境运行</p>
                </div>
                <div class="feature-card">
                    <h5>简易更新</h5>
                    <p>镜像拉取即更新</p>
                </div>
            </div>

            <h3>Docker Compose 配置</h3>
            <pre><code># docker-compose.yml
version: '3.8'
services:
  openclaw:
    image: openclaw/openclaw:latest
    ports:
      - "18789:18789"
    environment:
      - ANTHROPIC_API_KEY=\${ANTHROPIC_API_KEY}
    volumes:
      - ./data:/app/data
    restart: unless-stopped</code></pre>

            <h3>启动命令</h3>
            <pre><code># 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down</code></pre>

            <h3>资源要求</h3>
            <table>
                <thead>
                    <tr>
                        <th>资源</th>
                        <th>最小</th>
                        <th>推荐</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CPU</td>
                        <td>1 核</td>
                        <td>2 核</td>
                    </tr>
                    <tr>
                        <td>内存</td>
                        <td>1GB</td>
                        <td>2GB</td>
                    </tr>
                    <tr>
                        <td>存储</td>
                        <td>10GB</td>
                        <td>40GB</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'oc-13': {
        book: 'openclaw',
        title: '中国云部署',
        content: `
            <h3>中国区部署方案</h3>
            <p>针对中国网络环境，OpenClaw 提供了专门的部署方案。</p>

            <h3>支持的云平台</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Flexus L</h5>
                    <p>华为云，适合中国业务</p>
                </div>
                <div class="feature-card">
                    <h5>阿里云</h5>
                    <p>需要配置国内镜像源</p>
                </div>
                <div class="feature-card">
                    <h5>腾讯云</h5>
                    <p>支持 Docker 部署</p>
                </div>
            </div>

            <h3>推荐：Flexus L</h3>
            <table>
                <thead>
                    <tr>
                        <th>配置</th>
                        <th>规格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CPU</td>
                        <td>2 核</td>
                    </tr>
                    <tr>
                        <td>内存</td>
                        <td>4GB</td>
                    </tr>
                    <tr>
                        <td>带宽</td>
                        <td>按需选择</td>
                    </tr>
                    <tr>
                        <td>价格</td>
                        <td>约 ¥9.9/月起</td>
                    </tr>
                </tbody>
            </table>

            <h3>模型配置</h3>
            <p>中国区推荐使用国内模型：</p>
            <ul>
                <li><strong>DeepSeek</strong> - 性价比高</li>
                <li><strong>GLM-4</strong> - 清华系</li>
                <li><strong>Qwen</strong> - 阿里云</li>
                <li><strong>Spark</strong> - 科大讯飞</li>
            </ul>

            <blockquote>
                💡 v2026.3.8 版本已通过 CNCERT 安全认证。
            </blockquote>
        `
    },
    'oc-19': {
        book: 'openclaw',
        title: 'Skills 工作原理',
        content: `
            <h3>Skills 系统概述</h3>
            <p>Skills 是 OpenClaw 的核心扩展机制，允许 Agent 执行预定义的任务模板。</p>

            <h3>Skill 结构</h3>
            <pre><code>skill-name/
├── skill.yaml      # Skill 配置
├── system.md       # 系统提示
├── handlers/       # 处理脚本
│   └── index.ts
└── assets/         # 资源文件</code></pre>

            <h3>skill.yaml 示例</h3>
            <pre><code>name: python-code-reader
version: 1.0.0
description: 深度解读 Python 项目代码
triggers:
  - "解读 Python 项目"
  - "分析 Python 代码"
  - "生成架构文档"
handler: handlers/index.ts</code></pre>

            <h3>工作流程</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>1. 触发</h5>
                    <p>用户请求匹配 Skill</p>
                </div>
                <div class="feature-card">
                    <h5>2. 加载</h5>
                    <p>读取 Skill 配置</p>
                </div>
                <div class="feature-card">
                    <h5>3. 执行</h5>
                    <p>运行 Handler</p>
                </div>
                <div class="feature-card">
                    <h5>4. 返回</h5>
                    <p>输出结果</p>
                </div>
            </div>

            <h3>内置 Skills</h3>
            <p>OpenClaw 内置 43+ Skills，覆盖常见任务。</p>
        `
    },
    'oc-20': {
        book: 'openclaw',
        title: 'ClawHub 生态',
        content: `
            <h3>ClawHub 概览</h3>
            <p>ClawHub 是 OpenClaw 的官方 Skills 市场。</p>

            <h3>数据统计</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>13,729+</h5>
                    <p>可用 Skills</p>
                </div>
                <div class="feature-card">
                    <h5>396</h5>
                    <p>本周新增</p>
                </div>
                <div class="feature-card">
                    <h5>50%+</h5>
                    <p>免费 Skills</p>
                </div>
            </div>

            <h3>热门分类</h3>
            <table>
                <thead>
                    <tr>
                        <th>分类</th>
                        <th>数量</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>开发</td>
                        <td>3,130</td>
                        <td>编程相关</td>
                    </tr>
                    <tr>
                        <td>生产力</td>
                        <td>2,364</td>
                        <td>效率工具</td>
                    </tr>
                    <tr>
                        <td>社交</td>
                        <td>3,130</td>
                        <td>社交媒体</td>
                    </tr>
                    <tr>
                        <td>AI</td>
                        <td>22,046</td>
                        <td>AI 相关</td>
                    </tr>
                </tbody>
            </table>

            <h3>浏览 Skills</h3>
            <pre><code># 查看热门 Skills
openclaw skills list --sort=downloads

# 搜索 Skills
openclaw skills search "python"</code></pre>
        `
    },
    'oc-21': {
        book: 'openclaw',
        title: '热门 Skills',
        content: `
            <h3>推荐 Skills</h3>

            <div class="feature-grid">
                <div class="feature-card">
                    <h5>python-code-reader</h5>
                    <p>深度解读 Python 项目</p>
                </div>
                <div class="feature-card">
                    <h5>gh-pages-deploy</h5>
                    <p>部署静态网站到 GitHub Pages</p>
                </div>
                <div class="feature-card">
                    <h5>claude-api</h5>
                    <p>使用 Claude API 构建应用</p>
                </div>
                <div class="feature-card">
                    <h5>agent-browser</h5>
                    <p>浏览器自动化</p>
                </div>
            </div>

            <h3>开发类 Skills</h3>
            <table>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>功能</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>python-code-explainer</td>
                        <td>详细解释 Python 代码</td>
                    </tr>
                    <tr>
                        <td>loop</td>
                        <td>定时执行任务</td>
                    </tr>
                    <tr>
                        <td>find-skills</td>
                        <td>查找可用 Skills</td>
                    </tr>
                </tbody>
            </table>

            <h3>安装 Skill</h3>
            <pre><code># 安装 Skill
openclaw skills install python-code-reader

# 列出已安装
openclaw skills list</code></pre>
        `
    },
    'oc-22': {
        book: 'openclaw',
        title: '创建自定义 Skill',
        content: `
            <h3>创建自定义 Skill</h3>
            <p>任何人都可以创建自己的 Skill 并贡献给社区。</p>

            <h3>创建步骤</h3>
            <pre><code># 1. 创建 Skill 目录
mkdir my-skill && cd my-skill

# 2. 创建 skill.yaml
cat > skill.yaml << 'EOF'
name: my-skill
version: 1.0.0
description: 我的自定义 Skill
triggers:
  - "执行我的任务"
handler: handler.ts
EOF

# 3. 创建处理脚本
cat > handler.ts << 'EOF'
export async function handle(input: string) {
  return { result: \`处理: \${input}\` };
}
EOF</code></pre>

            <h3>发布到 ClawHub</h3>
            <pre><code># 登录
openclaw login

# 发布
openclaw publish</code></pre>

            <h3>最佳实践</h3>
            <ul>
                <li>清晰的描述和触发词</li>
                <li>完整的错误处理</li>
                <li>详细的文档</li>
                <li>遵循 MIT 许可证</li>
            </ul>

            <blockquote>
                💡 贡献 Skills 到社区是帮助他人的好方式！
            </blockquote>
        `
    },
    'oc-24': {
        book: 'openclaw',
        title: 'Provider 概览',
        content: `
            <h3>支持的模型 Provider</h3>
            <p>OpenClaw 支持多种 AI 模型提供商。</p>

            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Anthropic</h5>
                    <p>Claude 系列</p>
                </div>
                <div class="feature-card">
                    <h5>OpenAI</h5>
                    <p>GPT 系列</p>
                </div>
                <div class="feature-card">
                    <h5>Google</h5>
                    <p>Gemini 系列</p>
                </div>
                <div class="feature-card">
                    <h5>Ollama</h5>
                    <p>本地模型</p>
                </div>
            </div>

            <h3>配置示例</h3>
            <pre><code># config.json
{
  "providers": {
    "anthropic": {
      "apiKey": "\${ANTHROPIC_API_KEY}",
      "defaultModel": "claude-sonnet-4-20250514"
    },
    "openai": {
      "apiKey": "\${OPENAI_API_KEY}",
      "defaultModel": "gpt-4o"
    }
  }
}</code></pre>

            <h3>选择 Provider</h3>
            <table>
                <thead>
                    <tr>
                        <th>场景</th>
                        <th>推荐</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>通用对话</td>
                        <td>Claude / GPT-4</td>
                    </tr>
                    <tr>
                        <td>代码任务</td>
                        <td>Claude Opus</td>
                    </tr>
                    <tr>
                        <td>成本敏感</td>
                        <td>DeepSeek / Qwen</td>
                    </tr>
                    <tr>
                        <td>隐私优先</td>
                        <td>Ollama (本地)</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'oc-25': {
        book: 'openclaw',
        title: '国际模型',
        content: `
            <h3>国际模型列表</h3>

            <h4>Anthropic</h4>
            <table>
                <thead>
                    <tr>
                        <th>模型</th>
                        <th>上下文</th>
                        <th>适用</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Claude Opus 4</td>
                        <td>200K</td>
                        <td>复杂任务</td>
                    </tr>
                    <tr>
                        <td>Claude Sonnet 4</td>
                        <td>200K</td>
                        <td>日常使用</td>
                    </tr>
                    <tr>
                        <td>Claude Haiku 4</td>
                        <td>200K</td>
                        <td>快速响应</td>
                    </tr>
                </tbody>
            </table>

            <h4>OpenAI</h4>
            <table>
                <thead>
                    <tr>
                        <th>模型</th>
                        <th>上下文</th>
                        <th>适用</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GPT-5.4</td>
                        <td>128K</td>
                        <td>最新能力</td>
                    </tr>
                    <tr>
                        <td>GPT-4o</td>
                        <td>128K</td>
                        <td>平衡之选</td>
                    </tr>
                    <tr>
                        <td>o3</td>
                        <td>200K</td>
                        <td>推理能力</td>
                    </tr>
                </tbody>
            </table>

            <h4>Google</h4>
            <table>
                <thead>
                    <tr>
                        <th>模型</th>
                        <th>上下文</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gemini 2.5 Pro</td>
                        <td>1M</td>
                    </tr>
                    <tr>
                        <td>Gemini 2.0 Flash</td>
                        <td>1M</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'oc-26': {
        book: 'openclaw',
        title: '中国模型',
        content: `
            <h3>中国模型推荐</h3>
            <p>针对中国用户，推荐使用国产大模型。</p>

            <h3>DeepSeek</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>DeepSeek V3</h5>
                    <p>性价比之王</p>
                </div>
                <div class="feature-card">
                    <h5>DeepSeek R1</h5>
                    <p>推理能力强</p>
                </div>
            </div>

            <h3>阿里云</h3>
            <table>
                <thead>
                    <tr>
                        <th>模型</th>
                        <th>特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qwen 2.5</td>
                        <td>开源领先</td>
                    </tr>
                    <tr>
                        <td>Qwen Max</td>
                        <td>旗舰模型</td>
                    </tr>
                </tbody>
            </table>

            <h3>智谱 AI</h3>
            <table>
                <thead>
                    <tr>
                        <th>模型</th>
                        <th>特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GLM-5</td>
                        <td>128K 上下文</td>
                    </tr>
                    <tr>
                        <td>GLM-4V</td>
                        <td>多模态</td>
                    </tr>
                </tbody>
            </table>

            <h3>价格对比</h3>
            <pre><code># DeepSeek 性价比极高
DeepSeek: ~$0.1/1M tokens
GPT-4: ~$15/1M tokens
Claude: ~$15/1M tokens</code></pre>

            <blockquote>
                💡 中国模型在中文理解上往往有优势。
            </blockquote>
        `
    },
    'oc-27': {
        book: 'openclaw',
        title: '本地模型',
        content: `
            <h3>本地模型部署</h3>
            <p>使用 Ollama 在本地运行模型，保护隐私降低成本。</p>

            <h3>Ollama 支持</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>Llama 3</h5>
                    <p>Meta 开源模型</p>
                </div>
                <div class="feature-card">
                    <h5>Mistral</h5>
                    <p>欧洲最强开源</p>
                </div>
                <div class="feature-card">
                    <h5>Qwen</h5>
                    <p>阿里中文模型</p>
                </div>
                <div class="feature-card">
                    <h5>Phi</h5>
                    <p>微软轻量模型</p>
                </div>
            </div>

            <h3>安装 Ollama</h3>
            <pre><code># macOS/Linux
curl -fsSL https://ollama.com/install.sh | sh

# 下载模型
ollama pull llama3
ollama pull qwen:7b</code></pre>

            <h3>OpenClaw 配置</h3>
            <pre><code># config.json
{
  "providers": {
    "ollama": {
      "endpoint": "http://127.0.0.1:11434",
      "models": ["llama3", "qwen:7b"]
    }
  }
}</code></pre>

            <h3>推荐配置</h3>
            <table>
                <thead>
                    <tr>
                        <th>硬件</th>
                        <th>推荐模型</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8GB RAM</td>
                        <td>Phi-3, Qwen:4b</td>
                    </tr>
                    <tr>
                        <td>16GB RAM</td>
                        <td>Qwen:7b, Mistral</td>
                    </tr>
                    <tr>
                        <td>32GB+ RAM</td>
                        <td>Llama 3 70B</td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                💡 本地模型完全离线可用，零 API 成本。
            </blockquote>
        `
    }
};

// State
let currentBook = 'claude-code';
let currentChapter = null;

// Initialize - handle both cases: DOM already loaded or not
function init() {
    renderTOC(currentBook);
    setupBookButtons();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Setup book selector buttons
function setupBookButtons() {
    const buttons = document.querySelectorAll('.book-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const book = btn.dataset.book;
            selectBook(book);
        });
    });
}

// Select book
function selectBook(bookId) {
    currentBook = bookId;
    currentChapter = null;

    // Update button states
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.book === bookId);
    });

    // Update header
    const book = books[bookId];
    document.querySelector('.header-content p').textContent = `${book.title} ${book.version}`;

    // Render TOC
    renderTOC(bookId);

    // Show welcome
    showWelcome();
}

// Render TOC
function renderTOC(bookId) {
    const toc = document.getElementById('toc');
    const book = books[bookId];

    toc.innerHTML = book.sections.map(section => `
        <div class="toc-section">
            <div class="toc-section-title">${section.title}</div>
            ${section.chapters.map(chapter => `
                <div class="toc-item" data-chapter="${chapter.id}">
                    ${chapter.icon} ${chapter.title}
                </div>
            `).join('')}
        </div>
    `).join('');

    // Add click handlers
    toc.querySelectorAll('.toc-item').forEach(item => {
        item.addEventListener('click', () => {
            const chapterId = item.dataset.chapter;
            showChapter(chapterId);
        });
    });
}

// Show chapter
function showChapter(chapterId) {
    const chapter = chapters[chapterId];
    if (!chapter) return;

    currentChapter = chapterId;

    // Update active state in TOC
    document.querySelectorAll('.toc-item').forEach(item => {
        item.classList.toggle('active', item.dataset.chapter === chapterId);
    });

    // Update header
    const book = books[chapter.book];
    document.getElementById('chapter-title').textContent = chapter.title;
    document.getElementById('breadcrumb').innerHTML = `
        ${book.title} <span>›</span> ${chapter.title}
    `;

    // Update content
    document.getElementById('chapter-content').innerHTML = chapter.content;
}

// Show welcome message
function showWelcome() {
    document.getElementById('chapter-title').textContent = '选择一本书开始阅读';
    document.getElementById('breadcrumb').innerHTML = '';
    document.getElementById('chapter-content').innerHTML = `
        <div class="welcome-message">
            <div class="welcome-icon">📚</div>
            <h3>欢迎阅读 AI 工具丛书</h3>
            <p>选择左侧目录中的书籍和章节开始阅读</p>
            <div class="book-cards">
                <div class="book-card" onclick="selectBook('claude-code')">
                    <div class="book-card-icon">📘</div>
                    <h4>Claude Code</h4>
                    <p>从入门到精通 v2.0.0</p>
                    <span class="badge">AI 编程助手</span>
                </div>
                <div class="book-card" onclick="selectBook('openclaw')">
                    <div class="book-card-icon">📗</div>
                    <h4>OpenClaw</h4>
                    <p>橙皮书 v1.4.0</p>
                    <span class="badge">AI Agent 平台</span>
                </div>
            </div>
        </div>
    `;
}
