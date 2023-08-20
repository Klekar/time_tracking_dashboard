import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface SkeletonableElementProps {
    children: ReactNode | undefined,
    loaded?: boolean
}

const SkeletonKeyframes = keyframes`
    0% {
        background-position-x: 100%;
    }
    100% {
        background-position-x: 0%;
    }
`

const SkeletonElement = styled.div`
    background: repeating-linear-gradient(45deg, #696969 0%, #d7d7d7 33%, #696969 67%);
    background-size: 400%;
    border-radius: 0.5rem;
    min-width: 3em;
    animation: ${SkeletonKeyframes} 1.5s linear infinite;
`

export default function SkeletonableElement(props: SkeletonableElementProps) {

    if (props.children === undefined || props.loaded === false) {
        return <SkeletonElement>&nbsp;</SkeletonElement>
    }
    else {
        return <>{props.children}</>
    }
}