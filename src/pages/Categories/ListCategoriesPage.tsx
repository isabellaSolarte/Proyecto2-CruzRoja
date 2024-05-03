import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { CustomButton, CustomText, ManagmentLayout } from "../../components";
import { PathNames } from "../../core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CustomCardCategory from "../../components/orgamisms/CustomCardCategory/CustomCardCategory";



const CategoriesList = () => {
    const { t } = useTranslation('commons');
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate(PathNames.CREATE_CATEGORY);
      };
   
  
    return (
        <ManagmentLayout
            title={
                <Box >
                    <CustomText texto={t('pageTitles.listCategories')} variante="titulo" />
                    <Box mt = {2}>
                        <CustomText texto={t('categoryPages.desciption.generalDescription')} variante="texto" />
                    </Box>
                </Box>
                
            }
            actionsContent={
                <Box>
                    <CustomButton
                        content={t('generalButtonText.registerCategory')}
                        variant="contained"
                        color="success"
                        onClick={handleCreateButtonClick}
                        style={{ marginLeft: '10px' }}
                    />
                </Box>
            }
            generalContents={

          
               <CustomCardCategory 
            
             />
            }
      />
    );
  };
  
  export default CategoriesList;