import './globals.css';
import { LanguageProvider } from '@inlang/paraglide-js-adapter-next';
import { languageTag } from '@/paraglide/runtime.js';
import * as m from '@/paraglide/messages.js';
import Nav from './nav';
import { Suspense } from 'react';

export async function generateMetadata() {
  return {
    title: m.home_metadata_title(),
    description:
      m.home_metadata_description()
  };  
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html lang={languageTag()} className="h-full bg-gray-50">
        <body className="h-full">
          <Suspense>
            <Nav />
          </Suspense>
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
