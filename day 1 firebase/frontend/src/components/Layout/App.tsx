"use client"

import { SnackbarProvider } from "notistack";
import HeaderComponent from "./header layout/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
            <HeaderComponent />
            {children}
        </SnackbarProvider>
    );
}

export default HomeLayout;