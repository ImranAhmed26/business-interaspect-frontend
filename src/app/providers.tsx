'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='bg-[#f5f5f5] text-gray-700 dark:bg-[#1a2744] dark:text-indigo-200 transition-all duration-100 ease-in ease-out'>
        {children}
      </div>
    </ThemeProvider>
  );
}
