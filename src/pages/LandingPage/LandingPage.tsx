import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Container } from '@mui/material';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <Container>
                <MainContent />
            </Container>
            <Footer />
        </div>
    );
};

export default LandingPage;