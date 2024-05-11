import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CustomCardCalculatorCategoryProps {
    idCategory:number;
    categoryName: string;
    categoryScope: string;
    categoryDescription: string;
}
const CustomCardCalculatorCategory = ({idCategory, categoryName ,categoryScope ,categoryDescription }:CustomCardCalculatorCategoryProps) => {

    return (
        <Card sx={{ 
            width: 300,
            height: 300, 
            backgroundImage: `url('/image-categoria.png')`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            borderRadius: '40px', 
            border: '7px solid #D9D9D9',
            display: 'flex',
            alignItems: 'center',
            transition: 'border-color 0.3s ease-in-out', 
            '&:hover': {
                borderColor: '#65B741', 
            },
            }}
            onClick={() => {
                console.log('Box clicked!');
            }}
        >
           <Box 
                sx={{ 
                    width: '100%', 
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#D9D9D9', 
                }}
            >
                    <Typography gutterBottom variant="h6" component="div">
                        {categoryName}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {categoryScope}
                    </Typography>
            </Box>
        </Card>
    );
};

export default CustomCardCalculatorCategory;