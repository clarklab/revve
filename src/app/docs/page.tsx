import { CopyButton } from '@/components/docs/copy-button'
import { DocsSidebar } from '@/components/docs/docs-sidebar'

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'voice-agents', title: 'Voice Agents' },
  { id: 'chat-agents', title: 'Chat Agents' },
  { id: 'banking-integrations', title: 'Banking Integrations' },
  { id: 'knowledge-base', title: 'Knowledge Base' },
  { id: 'analytics', title: 'Analytics & Reporting' },
  { id: 'security', title: 'Security & Compliance' },
]

const docsContent = {
  introduction: `# Revve Documentation

AI-powered customer service for financial institutions

Revve is an AI-powered customer service platform designed specifically for banks, credit unions, and financial institutions. Our platform combines advanced voice and chat capabilities with deep banking integrations to deliver exceptional customer experiences.

With Revve, you can automate routine inquiries, provide 24/7 support across multiple channels, and ensure every customer interaction meets the highest standards of security and compliance.

## Key Capabilities

- **Voice Agents** — Natural conversations powered by our native voice models
- **Chat Agents** — Multi-channel support across web, mobile, and messaging platforms
- **Banking Integrations** — Secure connections to core banking systems
- **Enterprise Security** — SOC 2 Type II certified with PCI DSS compliance`,

  'getting-started': `# Getting Started

Get up and running with Revve in just a few steps.

## 1. Create Your Account

Sign up for a Revve account at app.revve.ai. You'll need to provide your organization details and verify your email address.

## 2. Generate API Keys

Navigate to Settings → API Keys to generate your credentials. You'll receive a public key for client-side integrations and a secret key for server-side operations.

\`\`\`bash
# Example: Set your API key
export REVVE_API_KEY="sk_live_..."

# Test your connection
curl https://api.revve.ai/v1/health \\
  -H "Authorization: Bearer $REVVE_API_KEY"
\`\`\`

## 3. Configure Your Agent

Use the Revve dashboard to configure your agent's personality, knowledge base, and integration settings. Start with our banking templates for quick setup.

## 4. Deploy to Production

Once configured, deploy your agent to production. Revve provides SDKs for JavaScript, Python, and mobile platforms, plus native integrations for popular contact center solutions.`,

  'voice-agents': `# Voice Agents

Natural voice conversations powered by our native voice models.

## Native Voice Models

Revve's voice agents use proprietary speech recognition and synthesis models trained specifically for banking conversations. Our models understand financial terminology, account numbers, and complex transaction descriptions with high accuracy.

## Supported Languages

Our voice agents support over 30 languages and regional accents, including:

- English (US, UK, Australian, Indian)
- Spanish (Latin American, Castilian)
- French (France, Canadian)
- German, Portuguese, Italian, Dutch
- Mandarin, Cantonese, Japanese, Korean
- Arabic, Hindi, and more

## Voice Customization

Customize your agent's voice to match your brand. Choose from our library of professional voices or work with our team to create a custom voice profile. Adjust speaking rate, tone, and personality attributes.

## Call Routing & Handoff

Seamlessly escalate complex issues to human agents. Revve provides full conversation context, customer sentiment analysis, and suggested next steps to ensure smooth handoffs.`,

  'chat-agents': `# Chat Agents

Multi-channel messaging support for web, mobile, and popular platforms.

## Webchat Integration

Embed Revve's chat widget on your website with a single line of code. The widget is fully customizable to match your brand and supports both authenticated and anonymous sessions.

\`\`\`html
<script src="https://cdn.revve.ai/widget.js"></script>
<script>
  Revve.init({
    apiKey: 'pk_live_...',
    theme: 'light',
    position: 'bottom-right'
  });
</script>
\`\`\`

## Multi-Channel Support

Meet customers where they are with native integrations for:

- Web and mobile in-app chat
- WhatsApp Business API
- Apple Messages for Business
- SMS/MMS
- Facebook Messenger

## Rich Message Types

Go beyond plain text with interactive message types including buttons, quick replies, carousels, cards, and secure forms for collecting sensitive information.

## Conversation Context

Revve maintains full conversation history across channels. If a customer starts on webchat and continues via WhatsApp, the agent has complete context for a seamless experience.`,

  'banking-integrations': `# Banking Integrations

Secure connections to core banking systems and financial data.

## Core Banking Connections

Revve integrates with leading core banking platforms including FIS, Fiserv, Jack Henry, Temenos, and more. Our pre-built connectors handle authentication, data mapping, and error handling.

## Account Lookup & Verification

Verify customer identity through multi-factor authentication, knowledge-based questions, and biometric voice verification. Access account details securely to provide personalized service.

## Transaction Queries

Enable customers to check balances, review recent transactions, understand pending charges, and get detailed transaction information — all through natural conversation.

## Secure Data Handling

All data transmissions are encrypted using TLS 1.3. Sensitive data like account numbers and SSNs are tokenized and never stored in plain text. Our platform is PCI DSS Level 1 compliant.`,

  'knowledge-base': `# Knowledge Base

Train your agent with your organization's specific knowledge.

## Training Your Agent

Upload your existing documentation, policies, and procedures to train your Revve agent. Our system automatically indexes content and makes it available for retrieval during conversations.

## Document Ingestion

Revve supports multiple document formats:

- PDF documents and forms
- Word documents (.docx)
- Web pages and sitemaps
- Markdown and plain text
- Zendesk, Confluence, and other knowledge bases

## FAQ Management

Create and manage FAQs directly in the Revve dashboard. Define questions, answers, and variations to ensure accurate responses. Set up approval workflows for content changes.

## Response Customization

Fine-tune how your agent responds with custom prompts, tone guidelines, and brand voice settings. Create specific response templates for common scenarios.`,

  analytics: `# Analytics & Reporting

Comprehensive insights into your customer service operations.

## Conversation Metrics

Track key metrics including total conversations, average handling time, first response time, and messages per conversation. Filter by channel, agent, time period, and customer segment.

## Resolution Rates

Measure automation effectiveness with detailed resolution analytics. See what percentage of inquiries are fully automated, partially assisted, or escalated to human agents.

## Customer Satisfaction

Collect CSAT scores through post-conversation surveys. Track satisfaction trends over time and identify areas for improvement. Correlate satisfaction with conversation attributes.

## Custom Dashboards

Build custom dashboards with the metrics that matter to your organization. Export data to your data warehouse or BI tools via our API or native integrations with Snowflake, BigQuery, and Looker.`,

  security: `# Security & Compliance

Enterprise-grade security built for financial services.

## SOC 2 Type II Certification

Revve maintains SOC 2 Type II certification, demonstrating our commitment to security, availability, processing integrity, confidentiality, and privacy. Annual audits are conducted by independent third parties.

## Data Encryption

All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed through AWS KMS with automatic rotation. Customer data is isolated in dedicated storage partitions.

## PCI DSS Compliance

Revve is PCI DSS Level 1 compliant, the highest level of certification. This enables secure handling of payment card data during customer interactions. Cardholder data is tokenized immediately upon receipt.

## Audit Logging

Comprehensive audit logs track all system access, configuration changes, and data operations. Logs are immutable and retained for 7 years. Export logs to your SIEM for centralized security monitoring.

## Additional Compliance

Revve also supports GDPR, CCPA, GLBA, and other regulatory requirements. Contact our compliance team for detailed documentation and security questionnaire responses.`,
}

const allDocsMarkdown = Object.values(docsContent).join('\n\n---\n\n')

export default function DocsPage() {
  return (
    <div className="relative">
      <DocsSidebar sections={sections} contentId="docs-content" />

      {/* Main Content */}
      <div>
        {/* Mobile spacer for fixed dropdown */}
        <div className="h-14 lg:hidden" />

        <article id="docs-content" className="mx-auto max-w-3xl px-6 py-12 lg:px-10 lg:py-16">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24 pb-16">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl tracking-tight text-brand-950 dark:text-white">
                  Revve Documentation
                </h1>
                <p className="mt-4 text-lg text-brand-600 dark:text-brand-400">
                  AI-powered customer service for financial institutions
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <CopyButton content={allDocsMarkdown} label="Copy All Docs" />
              </div>
            </div>

            <div className="mt-6 flex">
              <CopyButton content={docsContent.introduction} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <p>
                Revve is an AI-powered customer service platform designed specifically for banks, credit unions, and
                financial institutions. Our platform combines advanced voice and chat capabilities with deep banking
                integrations to deliver exceptional customer experiences.
              </p>
              <p>
                With Revve, you can automate routine inquiries, provide 24/7 support across multiple channels, and
                ensure every customer interaction meets the highest standards of security and compliance.
              </p>

              <h2 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Key Capabilities</h2>
              <ul className="list-[square] pl-6 marker:text-brand-400 dark:marker:text-brand-600">
                <li className="pl-2">
                  <strong className="font-semibold text-brand-950 dark:text-white">Voice Agents</strong> — Natural
                  conversations powered by our native voice models
                </li>
                <li className="pl-2">
                  <strong className="font-semibold text-brand-950 dark:text-white">Chat Agents</strong> — Multi-channel
                  support across web, mobile, and messaging platforms
                </li>
                <li className="pl-2">
                  <strong className="font-semibold text-brand-950 dark:text-white">Banking Integrations</strong> —
                  Secure connections to core banking systems
                </li>
                <li className="pl-2">
                  <strong className="font-semibold text-brand-950 dark:text-white">Enterprise Security</strong> — SOC 2
                  Type II certified with PCI DSS compliance
                </li>
              </ul>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">Getting Started</h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Get up and running with Revve in just a few steps.
                </p>
              </div>
              <CopyButton content={docsContent['getting-started']} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">1. Create Your Account</h3>
              <p>
                Sign up for a Revve account at{' '}
                <a href="#" className="font-semibold text-brand-950 underline underline-offset-4 dark:text-white">
                  app.revve.ai
                </a>
                . You&apos;ll need to provide your organization details and verify your email address.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">2. Generate API Keys</h3>
              <p>
                Navigate to Settings → API Keys to generate your credentials. You&apos;ll receive a public key for
                client-side integrations and a secret key for server-side operations.
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg bg-brand-900 p-4 text-sm text-brand-100 dark:bg-brand-800">
                <pre>
                  <code>{`# Example: Set your API key
export REVVE_API_KEY="sk_live_..."

# Test your connection
curl https://api.revve.ai/v1/health \\
  -H "Authorization: Bearer $REVVE_API_KEY"`}</code>
                </pre>
              </div>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">3. Configure Your Agent</h3>
              <p>
                Use the Revve dashboard to configure your agent&apos;s personality, knowledge base, and integration
                settings. Start with our banking templates for quick setup.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">4. Deploy to Production</h3>
              <p>
                Once configured, deploy your agent to production. Revve provides SDKs for JavaScript, Python, and mobile
                platforms, plus native integrations for popular contact center solutions.
              </p>
            </div>
          </section>

          {/* Voice Agents */}
          <section id="voice-agents" className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">Voice Agents</h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Natural voice conversations powered by our native voice models.
                </p>
              </div>
              <CopyButton content={docsContent['voice-agents']} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">Native Voice Models</h3>
              <p>
                Revve&apos;s voice agents use proprietary speech recognition and synthesis models trained specifically
                for banking conversations. Our models understand financial terminology, account numbers, and complex
                transaction descriptions with high accuracy.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Supported Languages</h3>
              <p>Our voice agents support over 30 languages and regional accents, including:</p>
              <ul className="list-[square] pl-6 marker:text-brand-400 dark:marker:text-brand-600">
                <li className="pl-2">English (US, UK, Australian, Indian)</li>
                <li className="pl-2">Spanish (Latin American, Castilian)</li>
                <li className="pl-2">French (France, Canadian)</li>
                <li className="pl-2">German, Portuguese, Italian, Dutch</li>
                <li className="pl-2">Mandarin, Cantonese, Japanese, Korean</li>
                <li className="pl-2">Arabic, Hindi, and more</li>
              </ul>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Voice Customization</h3>
              <p>
                Customize your agent&apos;s voice to match your brand. Choose from our library of professional voices or
                work with our team to create a custom voice profile. Adjust speaking rate, tone, and personality
                attributes.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Call Routing & Handoff</h3>
              <p>
                Seamlessly escalate complex issues to human agents. Revve provides full conversation context, customer
                sentiment analysis, and suggested next steps to ensure smooth handoffs.
              </p>
            </div>
          </section>

          {/* Chat Agents */}
          <section id="chat-agents" className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">Chat Agents</h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Multi-channel messaging support for web, mobile, and popular platforms.
                </p>
              </div>
              <CopyButton content={docsContent['chat-agents']} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">Webchat Integration</h3>
              <p>
                Embed Revve&apos;s chat widget on your website with a single line of code. The widget is fully
                customizable to match your brand and supports both authenticated and anonymous sessions.
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg bg-brand-900 p-4 text-sm text-brand-100 dark:bg-brand-800">
                <pre>
                  <code>{`<script src="https://cdn.revve.ai/widget.js"></script>
<script>
  Revve.init({
    apiKey: 'pk_live_...',
    theme: 'light',
    position: 'bottom-right'
  });
</script>`}</code>
                </pre>
              </div>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Multi-Channel Support</h3>
              <p>Meet customers where they are with native integrations for:</p>
              <ul className="list-[square] pl-6 marker:text-brand-400 dark:marker:text-brand-600">
                <li className="pl-2">Web and mobile in-app chat</li>
                <li className="pl-2">WhatsApp Business API</li>
                <li className="pl-2">Apple Messages for Business</li>
                <li className="pl-2">SMS/MMS</li>
                <li className="pl-2">Facebook Messenger</li>
              </ul>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Rich Message Types</h3>
              <p>
                Go beyond plain text with interactive message types including buttons, quick replies, carousels, cards,
                and secure forms for collecting sensitive information.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Conversation Context</h3>
              <p>
                Revve maintains full conversation history across channels. If a customer starts on webchat and continues
                via WhatsApp, the agent has complete context for a seamless experience.
              </p>
            </div>
          </section>

          {/* Banking Integrations */}
          <section
            id="banking-integrations"
            className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">
                  Banking Integrations
                </h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Secure connections to core banking systems and financial data.
                </p>
              </div>
              <CopyButton content={docsContent['banking-integrations']} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">Core Banking Connections</h3>
              <p>
                Revve integrates with leading core banking platforms including FIS, Fiserv, Jack Henry, Temenos, and
                more. Our pre-built connectors handle authentication, data mapping, and error handling.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">
                Account Lookup & Verification
              </h3>
              <p>
                Verify customer identity through multi-factor authentication, knowledge-based questions, and biometric
                voice verification. Access account details securely to provide personalized service.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Transaction Queries</h3>
              <p>
                Enable customers to check balances, review recent transactions, understand pending charges, and get
                detailed transaction information — all through natural conversation.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Secure Data Handling</h3>
              <p>
                All data transmissions are encrypted using TLS 1.3. Sensitive data like account numbers and SSNs are
                tokenized and never stored in plain text. Our platform is PCI DSS Level 1 compliant.
              </p>
            </div>
          </section>

          {/* Knowledge Base */}
          <section id="knowledge-base" className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">Knowledge Base</h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Train your agent with your organization&apos;s specific knowledge.
                </p>
              </div>
              <CopyButton content={docsContent['knowledge-base']} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">Training Your Agent</h3>
              <p>
                Upload your existing documentation, policies, and procedures to train your Revve agent. Our system
                automatically indexes content and makes it available for retrieval during conversations.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Document Ingestion</h3>
              <p>Revve supports multiple document formats:</p>
              <ul className="list-[square] pl-6 marker:text-brand-400 dark:marker:text-brand-600">
                <li className="pl-2">PDF documents and forms</li>
                <li className="pl-2">Word documents (.docx)</li>
                <li className="pl-2">Web pages and sitemaps</li>
                <li className="pl-2">Markdown and plain text</li>
                <li className="pl-2">Zendesk, Confluence, and other knowledge bases</li>
              </ul>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">FAQ Management</h3>
              <p>
                Create and manage FAQs directly in the Revve dashboard. Define questions, answers, and variations to
                ensure accurate responses. Set up approval workflows for content changes.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Response Customization</h3>
              <p>
                Fine-tune how your agent responds with custom prompts, tone guidelines, and brand voice settings. Create
                specific response templates for common scenarios.
              </p>
            </div>
          </section>

          {/* Analytics & Reporting */}
          <section id="analytics" className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">
                  Analytics & Reporting
                </h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Comprehensive insights into your customer service operations.
                </p>
              </div>
              <CopyButton content={docsContent.analytics} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">Conversation Metrics</h3>
              <p>
                Track key metrics including total conversations, average handling time, first response time, and
                messages per conversation. Filter by channel, agent, time period, and customer segment.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Resolution Rates</h3>
              <p>
                Measure automation effectiveness with detailed resolution analytics. See what percentage of inquiries
                are fully automated, partially assisted, or escalated to human agents.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Customer Satisfaction</h3>
              <p>
                Collect CSAT scores through post-conversation surveys. Track satisfaction trends over time and identify
                areas for improvement. Correlate satisfaction with conversation attributes.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Custom Dashboards</h3>
              <p>
                Build custom dashboards with the metrics that matter to your organization. Export data to your data
                warehouse or BI tools via our API or native integrations with Snowflake, BigQuery, and Looker.
              </p>
            </div>
          </section>

          {/* Security & Compliance */}
          <section id="security" className="scroll-mt-24 border-t border-brand-200 py-16 dark:border-brand-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">
                  Security & Compliance
                </h2>
                <p className="mt-4 text-brand-600 dark:text-brand-400">
                  Enterprise-grade security built for financial services.
                </p>
              </div>
              <CopyButton content={docsContent.security} />
            </div>

            <div className="mt-8 space-y-4 text-sm/7 text-brand-700 dark:text-brand-400">
              <h3 className="text-base/8 font-medium text-brand-950 dark:text-white">SOC 2 Type II Certification</h3>
              <p>
                Revve maintains SOC 2 Type II certification, demonstrating our commitment to security, availability,
                processing integrity, confidentiality, and privacy. Annual audits are conducted by independent third
                parties.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Data Encryption</h3>
              <p>
                All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed
                through AWS KMS with automatic rotation. Customer data is isolated in dedicated storage partitions.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">PCI DSS Compliance</h3>
              <p>
                Revve is PCI DSS Level 1 compliant, the highest level of certification. This enables secure handling of
                payment card data during customer interactions. Cardholder data is tokenized immediately upon receipt.
              </p>

              <h3 className="mt-8 text-base/8 font-medium text-brand-950 dark:text-white">Audit Logging</h3>
              <p>
                Comprehensive audit logs track all system access, configuration changes, and data operations. Logs are
                immutable and retained for 7 years. Export logs to your SIEM for centralized security monitoring.
              </p>

              <div className="mt-8 rounded-lg border border-brand-200 bg-brand-50 p-4 dark:border-brand-700 dark:bg-brand-800">
                <p className="text-sm font-medium text-brand-950 dark:text-white">Additional Compliance</p>
                <p className="mt-1 text-sm text-brand-600 dark:text-brand-400">
                  Revve also supports GDPR, CCPA, GLBA, and other regulatory requirements. Contact our compliance team
                  for detailed documentation and security questionnaire responses.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
