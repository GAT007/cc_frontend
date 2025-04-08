import React, {useEffect, useState} from "react";
import Axios from "axios";

// MUI Imports
import {styled} from '@mui/material/styles';
import {
    Grid,
    CssBaseline,
    AppBar,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    IconButton,
    Typography,
    CircularProgress,
} from '@mui/material';

// Leaflet Imports
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css';

// Base Components
import BaseCard from '../Base/BaseCard';

// Assets and Data
import communityIconPng from '/assets/community_map.png';
import mylistings from '../../data/dummydata.js';

const StyledCard = styled(Card)({
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    width: '240px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'top',
    overflow: 'hidden'
});

const StyledCardMedia = styled(CardMedia)({
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
});

function CommunityPartners() {
    const communityIcon = new Icon({
        iconUrl: communityIconPng,
        iconSize: [40, 40]
    });

    // fetch('http://localhost:8000/api/partners/').then(response => response.json()).then(data => console.log(data))
    //
    // console.log(mylistings);

    const [allPartners, setAllPartners] = useState([]);
    const [dataIsLoading, setDataIsLoading] = useState(true);

    useEffect(() => {
        const source = Axios.CancelToken.source();

        async function GetAllListings() {
            try {
                const response = await Axios.get('http://localhost:8000/api/partners/', {cancelToken: source.token});
                console.log(response.data);
                setAllPartners(response.data);
                setDataIsLoading(false);
            } catch (err) {
                console.log(err);
            }

        }

        GetAllListings();
        return () => {
            source.cancel()
        }
    }, []);

    useEffect(() => {
        console.log('All Partners State:', allPartners);
    }, [allPartners]);

    if (dataIsLoading === true) {
        return (
            <Grid container justifyContent={"center"} alignItems={"center"} style={{height: "100vh"}}>
                <CircularProgress/>
            </Grid>
        )
    }


    return (
        <>
            <CssBaseline/>
            <Grid container spacing={2} sx={{px: 2}}>
                < Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {allPartners.map((listing) => (
                            <Grid item key={listing.id}>
                                <StyledCard>
                                    <CardHeader title={listing.name}/>
                                    <StyledCardMedia
                                        component="img"
                                        height="150"
                                        image={listing.image}
                                        alt={listing.name}
                                    />
                                    <CardContent>
                                        <Typography variant="body2">
                                            {listing.description.substring(0, 300)}
                                        </Typography>
                                    </CardContent>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} style={{marginTop: "0.5rem"}}>
                    <AppBar position="sticky">
                        <MapContainer center={[33.753746, -84.386330]} zoom={13} scrollWheelZoom={false}
                                      style={{height: "500px", width: "100%"}}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            {mylistings.map((listing) => (
                                <Marker key={listing.id} icon={communityIcon} position={listing.location.coordinates}>
                                    <Popup>
                                        <Typography variant="h5">{listing.title}</Typography>
                                        <Typography variant="body1">{listing.description}</Typography>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    )
        ;
}

export default CommunityPartners;