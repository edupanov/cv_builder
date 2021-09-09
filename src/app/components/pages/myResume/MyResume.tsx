import React, {useEffect} from 'react';
import {useActions} from "../../../store/hooks/useActions";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import NavBar from "../../navBar/NavBar";
import {CvInterface} from "../createCV/types/cvInterface";

const MyResume = () => {
    const {getResume} = useActions()
    const {data} = useTypeSelector(state => state.resume)
    console.log(data)
    const savedUser = JSON.parse(localStorage.getItem('user') as string);

    useEffect(()=> {getResume(savedUser.email)}, [])
    return (
        <div>
            <NavBar/>

        </div>
    );
};

export default MyResume;