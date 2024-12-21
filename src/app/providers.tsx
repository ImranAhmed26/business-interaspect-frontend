'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import tw from 'tailwind-styled-components';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='bg-[#f5f5f5] text-gray-700 dark:bg-[#1a2744] dark:text-gray-200  transition-all duration-100 ease-in ease-out'>
        {children}
      </div>
    </ThemeProvider>
  );
}
