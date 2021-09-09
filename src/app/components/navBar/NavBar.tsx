import React, {SyntheticEvent} from 'react';
import {StyledNavBar} from "./styles/styledNavBar";
import {StyledButton} from "../../styles/styledButton";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import Burger from "../menu/BurgerMenu";

type NavBarPropsType = {
    signUpClickHandler?: (event: SyntheticEvent) => void
    signInClickHandler?: (event: SyntheticEvent) => void
}

const NavBar = (props: NavBarPropsType) => {
    const {isSuccess, user} = useTypeSelector(state => state.signUp.data)

    const {signUpClickHandler, signInClickHandler} = props


    return (
        <StyledNavBar>
            <Burger/>
            <div className='logo'/>
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