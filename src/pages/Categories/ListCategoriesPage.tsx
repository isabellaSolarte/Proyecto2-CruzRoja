import { useTranslation } from "react-i18next";
import { useNavigate} from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { CustomButton, CustomText, ManagmentLayout } from "../../components";
import { PathNames } from "../../core";
import SearchIcon from '@mui/icons-material/Search';
import { useCategoriesForm } from "./hooks/useCategoriesForm";
import CustomCardCategory from "../../components/orgamisms/CustomCardCategory/CustomCardCategory";
import { useState } from "react";

const CategoriesList = () => {
    const { t } = useTranslation('commons');
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const{
        categoryList
    }= useCategoriesForm()

    const handleSearch = (event:any) => {
        setSearchTerm(event.target.value);
    };
    
    const handleCreateButtonClick = () => {
        navigate(PathNames.CREATE_CATEGORY);
      };
    
    const filteredCategories = categoryList.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
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
                <Box mt={3}>
                   <TextField
                        fullWidth
                        placeholder={t('registerCategory.placeholderSearch')}
                        value={searchTerm}
                        onChange={handleSearch}
                        variant="outlined"
                        InputProps={{
                            endAdornment: <SearchIcon />
                        }}
                        style={{
                            borderRadius: 5,
                            border: '1px solid #ccc', 
                        }}
                    />
                    <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px', display: "flex", flexWrap: 'wrap', gap: '20px' }}>
                     
                    {filteredCategories.map((category) => (
                        <CustomCardCategory
                            idCategory={category.id}
                            categoryName={category.name}
                            categoryScope={category.scope}
                            categoryDescription={category.descripction}
                            
                        />
                    ))}     
                </Box>
                </Box>
                

            }
      />
    );
  };
  
  export default CategoriesList;