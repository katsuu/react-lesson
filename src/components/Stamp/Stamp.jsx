import React from 'react'
import styled from 'styled-components'

export const StyledStamp = styled.span`
    background: pink;

    & > span {
        font-size: 2rem;
    }
`


export const Stamp = (props) => {
    if (props.isHidden) return null
    // return <span>{ props.children }</span>

    // return <span>{ props.data ? props.data.name : props.children }</span>
    return (
        <StyledStamp>
            <span>Meep</span>
            {props.data ? props.data.name : props.children}
        </StyledStamp>
    )
}