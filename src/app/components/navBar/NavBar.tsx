import React, {SyntheticEvent} from 'react';
import {StyledNavBar} from "./styles/styledNavBar";
import {StyledButton} from "../../styles/styledButton";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../routes/Routes";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";

type NavBarPropsType = {
    signUpClickHandler?: (event: SyntheticEvent) => void
    signInClickHandler?: (event: SyntheticEvent) => void
}

const NavBar = (props: NavBarPropsType) => {
    const {isSuccess, user} = useTypeSelector(state => state.signUp.data)

    const {signUpClickHandler, signInClickHandler}= props



    return (
        <StyledNavBar>
            <NavLink to={`${PATH.CREATE_CV}`}>
                <div className='logo'/>
            </NavLink>
            {isSuccess ? <div className={'welcome'}>{`Welcome ${user.name} ${user.surname}`}</div> : null}
            <div className='authWrapper'>
                <div>
                    <StyledButton onClick={signUpClickHandler}>
                        Sign Up
                    </StyledButton>
                </div>
                <div>
                    <StyledButton onClick={signInClickHandler}>
                        Sign In
                    </StyledButton>
                </div>
            </div>
        </StyledNavBar>
    );
};

export default NavBar;