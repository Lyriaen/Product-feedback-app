import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
    colors: {
        inputBg: '#F7F8FD',
        inputPlaceholderText: '#8C92B3',
        primaryBg: '#FFFFFF',
        buttonText: '#F2F4FE',
        tagBg: '#F2F4FF',
        header: '#373F68',
        text: '#647196',
        replyAndTagText: '#4661E6',
        mention: '#AD1FEA',
        decorator: '#4661E6',
        primaryBtnAndInProgressStatus: '#AD1FEA',
        secondaryHeaderAndBtn: '#3A4374',
        deleteBtn: '#D73737',
        plannedStatus: '#F49F85',
        liveStatus: '#62BCFA',
    },
}

type MainThemeProviderProps = {
    children: React.ReactNode,
}

export const MainThemeProvider = ({children} : MainThemeProviderProps) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
)}