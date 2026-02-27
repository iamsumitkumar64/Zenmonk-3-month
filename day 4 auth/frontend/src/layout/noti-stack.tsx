'use client';

import { SnackbarProvider } from 'notistack';
import React from 'react';

export default function NotistackProvider({ children }: { children: React.ReactNode }) {
    return (
        <SnackbarProvider maxSnack={7}>
            {children}
        </SnackbarProvider>
    )
}