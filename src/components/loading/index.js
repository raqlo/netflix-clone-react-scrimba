import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';
import {assetsUrlPrefix} from "../../constants/utils";

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`${assetsUrlPrefix}/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}
