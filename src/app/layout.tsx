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
        <link
          href="https://cdn.jsdelivr.net/npm/@fontsource/monaspace-krypton@5.0.1/index.min.css"
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
                  <NavbarDropdownItem href="/voice" title="Voice Agent" description="Human-like calls at scale" />
                  <NavbarDropdownItem href="/chat-agent" title="Chat Agent" description="24/7 omni-channel support" />
                  <NavbarDropdownItem href="/outbound" title="Outbound Orchestration" />
                </NavbarDropdown>

                <NavbarDropdown label="Solutions">
                  <NavbarDropdownItem href="/" title="Customer Support" />
                  <NavbarDropdownItem href="/" title="Telesales" />
                  <NavbarDropdownItem href="/" title="Collections" />
                  <NavbarDropdownItem href="/" title="Dropoff Rescue" />
                </NavbarDropdown>

                <NavbarLink href="/">Customers</NavbarLink>

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
                  Log in
                </PlainButtonLink>
                <ButtonLink href="#">Get started</ButtonLink>
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
