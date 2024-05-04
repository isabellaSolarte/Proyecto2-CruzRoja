import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { CustomButton, CustomText, ManagmentLayout } from "../../components";
import { PathNames } from "../../core";
import { useCategoriesForm } from "./hooks/useCategoriesForm";
import CustomCardCategory from "../../components/orgamisms/CustomCardCategory/CustomCardCategory";



const CategoriesList = () => {
    const { t } = useTranslation('commons');
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate(PathNames.CREATE_CATEGORY);
      };
    const{
        categoryList
    }= useCategoriesForm()
   
  
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
                <Box mt={2} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px', display: "flex", flexWrap: 'wrap', gap: '20px' }}>
                    {categoryList.map((category, index) => (
                        <CustomCardCategory
                            idCategory={category.id}
                            categoryName={category.name}
                            categoryScope={category.scope}
                            categoryDescription={category.descripction}
                        
                        />
                    ))} 
                       
                </Box>

               
          
            }
      />
    );
  };
  
  export default CategoriesList;