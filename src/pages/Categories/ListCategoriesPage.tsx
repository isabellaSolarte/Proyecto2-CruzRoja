import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { Box, Container } from "@mui/material";
import { CustomButton, CustomText, ManagmentLayout } from "../../components";
import { PathNames } from "../../core";



const CategoriesList = () => {
    const { t } = useTranslation('commons');
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        //navigate(PathNames.CREATE_CATEGORY);
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
                <Box>
                    categoryCards
                </Box>

            
            }
      />
    );
  };
  
  export default CategoriesList;