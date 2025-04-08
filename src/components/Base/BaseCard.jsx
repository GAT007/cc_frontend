import React, {useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Typography} from '@mui/material';

function SampleComponent() {
    const [btnColor, setBtnColor] = useState('error')
    return (
        <>
            <Typography variant={'h1'} align={'center'}>This is a line to demonstrate typography</Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Typography>
            <Button color={btnColor} variant={'contained'} size='large'>
                Text Button
            </Button>
        </>
    );
}

export default SampleComponent;
