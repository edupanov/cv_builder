import React from 'react';
import {StyledMainPage} from "./styles/styledMainPage";
import Footer from "./Footer";

const MainPage = () => {
    return (
        <StyledMainPage>
            <h1 className='title'>
                Welcome to CV builder
            </h1>
            <div className='text'>
                Here you can create your perfect resume
            </div>
<Footer/>
        </StyledMainPage>
    );
};

export default MainPage;