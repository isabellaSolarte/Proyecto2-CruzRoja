import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Container } from '@mui/material';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight='100vh' sx={{ overflowX: 'hidden' }}>
            <Header />
            <Container>
                <MainContent />
            </Container>
            <Footer />
        </Box>
    );
};

export default LandingPage;