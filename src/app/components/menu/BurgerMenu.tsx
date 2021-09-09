import React, {useState} from 'react';
import MenuItems from "./menuItems";
import { StyledBurger } from './styles/styledBurger';


function Burger() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <StyledBurger
                open={open}
                onClick={() => setOpen(!open)}
            >
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <MenuItems
                open={open}
                setOpen={setOpen}
            />

        </>
    );
}

export default Burger;