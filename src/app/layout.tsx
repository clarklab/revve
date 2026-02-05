import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarDropdownItemMobile,
  NavbarDropdownMobile,
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Revve - Financial AI',
  description: 'AI-powered customer operations for BFSI. Resolve routine issues automatically, escalate complex cases with full context.',
  icons: {
    icon: 'https://revve.superfun.games/favicon.png',
  },
  openGraph: {
    title: 'Revve - Financial AI',
    description: 'AI-powered customer operations for BFSI. Resolve routine issues automatically, escalate complex cases with full context.',
    images: ['https://revve.superfun.games/unfurl.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revve - Financial AI',
    description: 'AI-powered customer operations for BFSI. Resolve routine issues automatically, escalate complex cases with full context.',
    images: ['https://revve.superfun.games/unfurl.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarDropdown label="Platform">
                  <NavbarDropdownItem href="/voice" title="Voice Agent" description="Human-like calls at scale" icon={<svg className="size-6 text-brand-600 dark:text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10}><path d="M8.0025 9.6075L10.41 12L14.4 8.0025" /><path d="M7.95752 20.7975V17.2725C5.41502 15.915 3.75002 13.125 4.04252 9.97499C4.35752 6.53999 7.08752 3.69749 10.515 3.26249C11.25 3.17249 11.9625 3.17999 12.645 3.29249C15.1875 3.68999 17.205 4.96499 18.525 8.85749L20.01 13.515C20.1525 13.95 19.8225 14.3925 19.365 14.3925H16.8075V17.5275C16.8075 18 16.425 18.39 15.945 18.39H13.605V20.79" /></svg>} />
                  <NavbarDropdownItem href="/chat-agent" title="Chat Agent" description="24/7 omni-channel support" icon={<svg className="size-6 text-brand-600 dark:text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10}><path d="M17.385 15.615L20.07 18.3C20.1225 18.3525 20.1225 18.45 20.07 18.5025L17.385 21.1875" /><path d="M20.07 18.405H2.90251C2.62501 18.405 2.40001 18.225 2.40001 18V14.4075" /><path d="M12 10.02L14.685 12.705C14.7375 12.7575 14.7375 12.855 14.685 12.9075L12 15.5925" /><path d="M14.805 12.8025H2.39999V8.80502" /><path d="M5.95501 4.41751L8.64001 7.10251C8.69251 7.15501 8.69251 7.25251 8.64001 7.30501L5.95501 9.99001" /><path d="M8.64001 7.20751H2.46751V3.20251" /></svg>} />
                  <NavbarDropdownItem href="/outbound" title="Outbound Orchestration" description="Automated outreach at scale" icon={<svg className="size-6 text-brand-600 dark:text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10}><path d="M12.8025 4.8075H18.9975C19.11 4.8075 19.2 4.8975 19.2 5.01V11.205" /><path d="M19.2 4.8075L13.605 10.4025" /><path d="M3.20251 4.8075H9.39751C9.51001 4.8075 9.60002 4.8975 9.60002 5.01V11.205" /><path d="M9.6075 4.8075L4.005 10.4025" /><path d="M3.20251 14.4H9.39751C9.51001 14.4 9.60002 14.49 9.60002 14.6025V20.7975" /><path d="M9.6075 14.4L4.005 20.0025" /><path d="M12.8025 14.4H18.9975C19.11 14.4 19.2 14.49 19.2 14.6025V20.7975" /><path d="M19.2 14.4L13.605 20.0025" /></svg>} />
                </NavbarDropdown>

                <NavbarDropdown label="Solutions">
                  <NavbarDropdownItem href="/" title="Customer Support" />
                  <NavbarDropdownItem href="/" title="Telesales" />
                  <NavbarDropdownItem href="/" title="Collections" />
                  <NavbarDropdownItem href="/" title="Dropoff Rescue" />
                </NavbarDropdown>

                <NavbarLink href="/">Customers</NavbarLink>
                <NavbarLink href="/docs">Docs</NavbarLink>

                <NavbarDropdown label="Resources">
                  <NavbarDropdownItem href="/security" title="Security" />
                  <NavbarDropdownItem href="/blog" title="Blog" />
                </NavbarDropdown>
              </>
            }
            mobileLinks={
              <>
                <NavbarDropdownMobile label="Platform" id="platform">
                  <NavbarDropdownItemMobile
                    href="/voice"
                    title="Voice Agent"
                    description="Human-like calls at scale"
                  />
                  <NavbarDropdownItemMobile
                    href="/chat-agent"
                    title="Chat Agent"
                    description="24/7 omni-channel support"
                  />
                  <NavbarDropdownItemMobile href="/outbound" title="Outbound Orchestration" />
                </NavbarDropdownMobile>

                <NavbarDropdownMobile label="Solutions" id="solutions">
                  <NavbarDropdownItemMobile href="/" title="Customer Support" />
                  <NavbarDropdownItemMobile href="/" title="Telesales" />
                  <NavbarDropdownItemMobile href="/" title="Collections" />
                  <NavbarDropdownItemMobile href="/" title="Dropoff Rescue" />
                </NavbarDropdownMobile>

                <NavbarLink href="/">Customers</NavbarLink>
                <NavbarLink href="/docs">Docs</NavbarLink>

                <NavbarDropdownMobile label="Resources" id="resources">
                  <NavbarDropdownItemMobile href="/security" title="Security" />
                  <NavbarDropdownItemMobile href="/blog" title="Blog" />
                </NavbarDropdownMobile>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image
                  src="/img/logos/logo-revve.svg"
                  alt="Revve"
                  width={96}
                  height={28}
                />
              </NavbarLogo>
            }
            actions={
              <>
                <PlainButtonLink href="#" className="max-sm:hidden">
                  Try It
                </PlainButtonLink>
                <ButtonLink href="/request-demo">Book a Demo</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            logo={<Image src="/img/logos/logo-revve.svg" alt="Revve" width={80} height={24} />}
            cta={
              <NewsletterForm
                headline="Stay in the loop"
                subheadline={
                  <p>
                    Get customer support tips, product updates and customer stories that you can archive as soon as they
                    arrive.
                  </p>
                }
                action="#"
              />
            }
            links={
              <>
                <FooterCategory title="Product">
                  <FooterLink href="#">Features</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                  <FooterLink href="#">Integrations</FooterLink>
                </FooterCategory>
                <FooterCategory title="Company">
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Press Kit</FooterLink>
                </FooterCategory>
                <FooterCategory title="Resources">
                  <FooterLink href="#">Help Center</FooterLink>
                  <FooterLink href="#">API Docs</FooterLink>
                  <FooterLink href="#">Status</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterCategory>
                <FooterCategory title="Legal">
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms of Service</FooterLink>
                  <FooterLink href="#">Security</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint="© 2025 Revve, Inc."
            socialLinks={
              <>
                <SocialLink href="https://x.com" name="X">
                  <XIcon />
                </SocialLink>
                <SocialLink href="https://github.com" name="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://www.youtube.com" name="YouTube">
                  <YouTubeIcon />
                </SocialLink>
              </>
            }
          />
        </>
      </body>
    </html>
  )
}
