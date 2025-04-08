import React from "react";
import {Grid, CssBaseline} from '@mui/material';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import BaseCard from '../Base/BaseCard';

function CommunityPartners() {
    return (
        <>
            <CssBaseline/>
            <Grid justifyContent={"space-evenly"} alignItems={"flex-start"} container
                  style={{height: "100vh"}}>
                <Grid item xs={5}>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
                                  style={{height: "500px", width: "100%"}}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Grid>
                <Grid item xs={5}>
                    <BaseCard/>
                </Grid>
                <Grid item xs={5}>
                    <BaseCard/>
                </Grid>
                <Grid item xs={5}>
                    <BaseCard/>
                </Grid>
            </Grid>
        </>
    );
}

export default CommunityPartners;
