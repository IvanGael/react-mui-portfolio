import React from 'react';
import Typewriter from 'typewriter-effect';
import { Typography } from '@mui/material';

const TypewriterEffect = ({ text, strings, variant, component }) => {
    if (text && variant && component) {
        return (
            <Typography variant={variant} component={component}>
                <Typewriter
                    options={{
                        strings: [text],
                        autoStart: true,
                        loop: false,
                    }}
                />
            </Typography>
        );
    }
    if (strings && variant && component) {
        return (
            <Typography variant={variant} component={component}>
                <Typewriter
                    options={{
                        strings: strings,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Typography>
        );
    }
    if (strings) {
        return (
            <Typewriter
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                }}
            />
        );
    }
    return (
        <Typewriter
            options={{
                strings: [text],
                autoStart: true,
                loop: false,
            }}
        />
    );
};

export default TypewriterEffect;