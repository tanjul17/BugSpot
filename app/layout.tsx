import { ClerkProvider } from '@clerk/nextjs'
import React from 'react';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})
export const metadata: Metadata = {
  title: 'BugSpot',
  description: 'A community-driven platform for asking and answering, programming . Get help, share knowledge,and collaborate with developers from around the world. Explore topics in web development,mobile app development,algorithm,data structures, and more.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
     appearance={{
      elements:{
        formButtonPrimary:'primary-gradient',
        footerActionLink:'primary-test-gradient hover:text-primary-500'
      }
     }}
    
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>

      </html>
    </ClerkProvider>
  )
}