import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CustomCardCalculatorCategoryProps {
    idCategory: number;
    categoryName: string;
    categoryScope: string;
    categoryDescription: string;
    isSelected: boolean;
    onSelect: (idCategory: number) => void;
}

const CustomCardCalculatorCategory = ({ idCategory, categoryName, categoryScope, categoryDescription, isSelected, onSelect }: CustomCardCalculatorCategoryProps) => {
    return (
        <Card 
            sx={{ 
                width: 300,
                height: 300, 
                backgroundImage: `url('/image-categoria.png')`, 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                borderRadius: '40px', 
                border: isSelected ? '7px solid #65B741' : '7px solid #D9D9D9',
                display: 'flex',
                alignItems: 'center',
                transition: 'border-color 0.3s ease-in-out', 
                '&:hover': {
                    borderColor: isSelected ? '#65B741' : '#A9A9A9', 
                },
            }}
            onClick={() => onSelect(idCategory)}
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