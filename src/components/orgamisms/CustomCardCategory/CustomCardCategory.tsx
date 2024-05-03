import React, { useState } from 'react';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button, Collapse, IconButton, Box } from '@mui/material';
import { CustomButton } from '../../Atoms';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';


const CustomCardCategory = () => {
    const [expanded, setExpanded] = useState(false);
    const maxTextLength = 100; // Define la longitud máxima del texto que se mostrará sin expandir
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const getContent = () => {
      if (expanded) {
        return (
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        );
      } else {
        return (
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica...
          </Typography>
        );
      }
    };
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleExpandClick}>
          <CardMedia
            component="img"
            height="140"
            src="/icono-calculadora.png"
            alt="categoría"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Collapse in={true} collapsedHeight={maxTextLength}>
              {getContent()}
            </Collapse>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
  };

export default CustomCardCategory;