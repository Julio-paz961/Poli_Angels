import Card from "./_Card";
import styled from 'styled-components'

export const CardStyle=styled.div`
    box-shadow: 5px 10px 20px #cacaca;
    border-radius:30px;
    background-color:white;
    width:310px;
    padding:10px 0;

    p,h1{
        margin:0;
        padding:0
    }
    h1{
        color:#0C2634;
    }

`
export const Background=styled.div`
    background-color:#1DBBFF;
    height:100px;
    width:315px;
    position: relative;
    left:20px;
    bottom:120px;
    z-index:-2;
`
export const Text=styled.div`
    margin:5px
`