import React, {SyntheticEvent} from 'react';
import {StyledMainPage} from "./styles/styledMainPage";
import Footer from "./Footer";
import NavBar from "../../navBar/NavBar";
import SignUp from "../../auth/signUp/SignUp";
import SignIn from "../../auth/signIn/SignIn";

const MainPage = () => {

    const [openSignUp, setOpenSignUp] = React.useState(false);
    const [openSignIn, setOpenSignIn] = React.useState(false);

    const openSignUpClickHandler = () => {
        setOpenSignUp(false)
    }
    const openSignInClickHandler = () => {
        setOpenSignIn(false)
    }

    const signUpClickHandler = (event: SyntheticEvent) => {
        if (event.currentTarget) {
            setOpenSignUp(true)
        }
    }
    const signInClickHandler = (event: SyntheticEvent) => {
        if (event.currentTarget) {
            setOpenSignIn(true)
        }
    }
    return (
        <StyledMainPage>
            <NavBar signUpClickHandler={signUpClickHandler} signInClickHandler={signInClickHandler}/>
            <h1 className='title'>
                Welcome to CV builder
            </h1>
            <div className='text'>
                Here you can create your perfect resume
            </div>
            {openSignUp ? <SignUp openLoginFormClickHandler={openSignUpClickHandler}/> : null}
            {openSignIn ? <SignIn openLoginFormClickHandler={openSignInClickHandler}/> : null}
            <Footer/>
        </StyledMainPage>
    );
};

export default MainPage;