import styled from 'styled-components'

export const Align=styled.header`
    padding:24px 0px 70px 0px;
`
export const Nav=styled.a`
    margin: 16px 12px 12px;
    :hover{
        color:#1DBBFF;
        font-weight:bold;
    }

`
export const Back=styled.div`
    background-color:${props=>props.color}
`