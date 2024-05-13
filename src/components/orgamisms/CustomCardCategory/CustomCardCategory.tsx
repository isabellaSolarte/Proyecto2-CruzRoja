import { useState } from 'react';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Collapse, IconButton, Box} from '@mui/material';
import { CustomButton } from '../../Atoms';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';
import './CustomCardStyle.css';

interface CustomCardCategoryProps{
  idCategory:number;
  categoryName: string;
  categoryScope: string;
  categoryDescription: string;
}
const CustomCardCategory = ({idCategory, categoryName ,categoryScope ,categoryDescription }:CustomCardCategoryProps) => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const maxDescriptionLength = 130;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getDescriptionToShow = () => {
    return expanded ? categoryDescription : `${categoryDescription.slice(0, maxDescriptionLength)}...`;
  };

  const handleEditButtonClick = () => {
    navigate(PathNames.EDIT_CATEGORY.replace(':id', idCategory.toString()));
    console.log(PathNames.EDIT_CATEGORY.replace(':id', idCategory.toString()))
  };

  return (
    <Card sx={{ width: 345, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.01)' } }}>
      <CardActionArea onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="140"
          src="/imagen-categoria.png"
          alt="categoría"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {categoryName}
          </Typography>
          <Typography variant="body1" component="div">
            {categoryScope}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {getDescriptionToShow()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
      <CardActions disableSpacing>
        <Box sx={{ display: 'flex',justifyContent: 'space-between', width: '100%',height:'100%'  }}>
          <CustomButton
            variant="contained"
            color="info"
            sx={{ mt: 1, mb: 1 }}
            onClick={handleEditButtonClick}
            content={t('generalButtonText.edit')}
          />
          <IconButton
            aria-expanded={expanded}
            aria-label="show more"
            onClick={handleExpandClick}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
export default CustomCardCategory;