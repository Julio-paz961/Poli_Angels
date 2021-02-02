import { Children } from 'react'
import styled from 'styled-components'


function styledLink({children:ReactChildren}) {
    const List=styled.li`
        list-style:none;
    `
    const Link=styled.a`
        text-decoration:none;
        color:red
    `    
    return(
    <List><Link>{Children}</Link></List>
    )  
}
export default styledLink