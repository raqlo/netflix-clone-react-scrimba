import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';
import {assetsUrlPrefix} from "../../constants/utils";

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />;
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src={`${assetsUrlPrefix}/images/icons/chevron-right.png`} alt="Try Now" />
        </Button>
    )
}

OptForm.Break = function OptBreak({ ...restProps }) {
    return <Break {...restProps} />;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
