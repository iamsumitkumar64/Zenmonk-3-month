import React, { useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import './pass-comp.css'
import { ValidatorProps } from '@/types/pass-comp';

export const PasswordValidatorComp: React.FC<ValidatorProps> = ({ text, sendDataToParent }) => {
    const checks = {
        length: text.length >= 8,
        capital: /[A-Z]/.test(text),
        numeric: /\d/.test(text),
        special: /[!@#$%^&*().?":{}|<>]/.test(text)
    };

    const isValid = Object.values(checks).every(Boolean);

    useEffect(() => {
        sendDataToParent(isValid);
    }, [isValid, sendDataToParent]);

    const getStyle = (valid: boolean) => ({
        // color: valid ? '#2e7d32' : '#d32f2f',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.875rem'
    });

    return (
        <Box>
            <Typography variant="subtitle2" className='require-text'>Password Requirements:</Typography>
            <ul>
                <li style={getStyle(checks.length)}>{checks.length ? '✅' : '❌'} 8+ Characters</li>
                <li style={getStyle(checks.capital)}>{checks.capital ? '✅' : '❌'} One Capital Letter</li>
                <li style={getStyle(checks.numeric)}>{checks.numeric ? '✅' : '❌'} One Number</li>
                <li style={getStyle(checks.special)}>{checks.special ? '✅' : '❌'} One Special Character</li>
            </ul>
        </Box>
    );
};
