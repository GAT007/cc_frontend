import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import {CssBaseline} from '@mui/material';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <Routes>
                <Route path="/*" element={<HomeComponent/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
