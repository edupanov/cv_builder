import React from 'react';
import {StyledNavBar} from "./styles/styledNavBar";
import {StyledButton} from "../../styles/styledButton";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../routes/Routes";

const NavBar = () => {

    return (
        <StyledNavBar>
            <NavLink to={`${PATH.CREATE_CV}`}>
                <div className='logo'/>
            </NavLink>
            <div className='authWrapper'>
                <div>
                    <StyledButton>
                        Sign Up
                    </StyledButton>
                </div>
                <div>
                    <StyledButton>
                        Sign In
                    </StyledButton>
                </div>
            </div>
        </StyledNavBar>
    );
};

export default NavBar;