import React, {ChangeEvent, Dispatch, useState} from 'react';
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar'
import AvatarEditor from "react-avatar-editor";
import {Box, Slider} from "@material-ui/core";
import {PersonalDetailsInterface} from "../types/cvInterface";

type LogoPropsType = {
    personalDetails: PersonalDetailsInterface
    setPersonalDetails: Dispatch<React.SetStateAction<PersonalDetailsInterface>>
}

const Logo = (props: LogoPropsType) => {

    const {personalDetails, setPersonalDetails} = props
    const [avatar, setAvatar] = useState<string>('')

    let editor = "";
    const [picture, setPicture] = useState({
        cropperOpen: false,
        img: null,
        zoom: 1,
        croppedImg:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    });


    const handleSlider = (event: ChangeEvent<{}>, value: any) => {
        setPicture({
            ...picture,
            zoom: value
        });
    };

    const handleCancel = () => {
        setPicture({
            ...picture,
            cropperOpen: false
        });
    };

    const setEditorRef = (ed: any) => {
        editor = ed;
    };

    const handleSave = () => {
        // @ts-ignore
        const canvasScaled = editor.getImageScaledToCanvas();
        const croppedImg = canvasScaled.toDataURL();

        setPicture({
            ...picture,
            img: null,
            cropperOpen: false,
            croppedImg: croppedImg
        });
        setAvatar(croppedImg)

        // @ts-ignore
        setPersonalDetails({...personalDetails, logo: {name: picture.img.name, imgPath: croppedImg, img: avatar}})


        // if (contact.id) {
        //     // @ts-ignore
        //     saveAvatar(picture.img.name, croppedImg, contact.id)
        // } else {
        //     // @ts-ignore
        //     const newLogo = {name: picture.img.name, file: croppedImg}
        //     if (setLogo) {
        //         setLogo(newLogo)
        //     }
        // }

    };
    const handleFileChange = (e: any) => {
        setPicture({
            ...picture,
            img: e.target.files![0],
            cropperOpen: true
        });
    };

    return (
        <div>
            <Box className={'avatarWrapper'}>
                <Box className={'stylesBox'}>
                    <label htmlFor="logoCheck" className={'logoLabel'}>
                        <Avatar
                            className={'avatar'}
                            src={avatar}
                        />
                    </label>
                    <input className={'logoInput'} type="file" accept="image/*" id={'logoCheck'}
                           onChange={handleFileChange}/>

                </Box>

                {picture.cropperOpen && (
                    <Box
                        className={'editorWrapper'}
                    >
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img!}
                            width={200}
                            height={200}
                            border={5}
                            color={[255, 255, 255, 0.6]}
                            rotate={0}
                            scale={picture.zoom}
                        />
                        <Slider
                            aria-label="raceSlider"
                            value={picture.zoom}
                            min={1}
                            max={10}
                            step={0.1}
                            onChange={handleSlider}
                        />
                        <Box>
                            <Button variant="contained" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button onClick={handleSave}>Save</Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default Logo;
