import React, {SyntheticEvent} from 'react';
import {StyledMainPage} from "./styles/styledMainPage";
import Footer from "./Footer";
import NavBar from "../../navBar/NavBar";
import SignUp from "../../auth/signUp/SignUp";
import SignIn from "../../auth/signIn/SignIn";
import ReactTypingEffect from 'react-typing-effect';

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
            setOpenSignIn(false)
        }
    }
    const signInClickHandler = (event: SyntheticEvent) => {
        if (event.currentTarget) {
            setOpenSignIn(true)
            setOpenSignUp(false)
        }
    }
    return (
        <StyledMainPage>
            <NavBar signUpClickHandler={signUpClickHandler} signInClickHandler={signInClickHandler}/>
            <h1 className='title'>
                Welcome to CV builder
            </h1>
            {openSignUp ? <SignUp openLoginFormClickHandler={openSignUpClickHandler}/> : null}
            {openSignIn ? <SignIn openLoginFormClickHandler={openSignInClickHandler}/> : null}
            <div className='text'>
                <ReactTypingEffect
                    className={`text`}
                    speed={80}
                    eraseSpeed={30}
                    eraseDelay={3000}
                    text={["Here you can create your perfect resume"]}
                    cursor=''
                />
            </div>
            <Footer/>
        </StyledMainPage>
    );
};

export default MainPage;