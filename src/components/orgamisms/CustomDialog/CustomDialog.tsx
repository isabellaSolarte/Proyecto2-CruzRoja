import { Dialog, DialogContent, DialogTitle, Box } from "@material-ui/core";
import { ReactElement } from 'react';
import { CustomButton, CustomText } from '../../../components';
import CloseIcon from '@mui/icons-material/Close';

interface CustomDialogProps {
  isOpen: boolean;
  title: string;
  content: string;
  buttons: Array<{
    key: string;
    content: string;
    variant: 'text' | 'outlined' | 'contained';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    icon?: ReactElement;
    onClick: () => void;
  }>;
  icon?: ReactElement;
  color: string;
  onClick: () => void;
}

const CustomDialog = ({
  isOpen,
  content,
  buttons,
  title,
  icon,
  color,
  onClick,
}:CustomDialogProps) => {
  return (
    <Dialog
    open={isOpen} 
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          maxWidth: 560,
          minWidth: 300, 
          padding: 10,
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 3,
          borderColor: color,
          boxShadow: 'none', // Add this if you want to remove the shadow
        },
      }}
      
    >
      <DialogTitle id="alert-dialog-title" style={{ borderColor: color}}>
        <Box style={{ display: 'flex', gap: '10px', justifyContent:'flex-end'}} >
        <CustomButton
              content=''
              variant='contained'
              color='error'
              icon={<CloseIcon />}
              onClick={onClick}
            />
          {/* <CustomText texto='' variante="subtitulo" icon={<CloseIcon />} onClick={onClose}/> */}
        </Box>
        <Box style={{color: color}}>
          <CustomText texto={title} variante="subtitulo" icon={icon} />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box style={{paddingLeft:'1.5rem'}}>
        <CustomText texto={content} variante="texto" />
        </Box>
        <Box style={{ display: 'flex', gap: '10px', padding:'1.5rem', justifyContent: 'flex-end' }} >
          {buttons.map((button, index) => (
            <CustomButton
              key={index}
              content={button.content}
              variant={button.variant}
              color={button.color}
              icon={button.icon}
              onClick={button.onClick}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
