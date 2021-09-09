
import React, {Dispatch, SetStateAction} from 'react';
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../../routes/Routes";

type ListType = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Ul = styled.ul<{ open: boolean }>`
 list-style: none;     
 background-color: #0d2538;  
 position: fixed;
 transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
 top: 3.2rem;
 left: 0;
 right: 0;
 height: 100vh;
 width: 300px;
 margin: .8rem 0;
 padding: 3.5rem 1rem; 
 transition: transform 0.3s ease-in-out;
 z-index: 20;
 
    .main {
        font-size: 1.5rem;
        }
   
    li {
        padding: 20px 10px 5px;
        font-size: 2rem;
    }
    
     a {
            text-decoration: none;
            color: #e2d211;
        }
`

function MenuItems(props: ListType) {

    return (
        <Ul open={props.open}>
            <Link className='main' to={PATH.CREATE_CV} onClick={() => props.setOpen(!props.open)}>Main page</Link>
            <li onClick={() => props.setOpen(!props.open)}><NavLink to={PATH.MY_RESUME}>My Resume</NavLink></li>
        </Ul>

);
}

export default MenuItems;