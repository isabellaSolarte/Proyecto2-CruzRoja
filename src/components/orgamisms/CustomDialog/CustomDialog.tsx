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
  onClose?: () => void;
  color: string;
}

const CustomDialog = ({
  isOpen,
  content,
  buttons,
  onClose,
  title,
  icon,
  color,
}:CustomDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          width: 560, // Set the width as per Figma properties
          padding: 10,
          borderRadius: 8,
          borderColor: '#429a3a', // Border color from Figma
          borderStyle: 'solid',
          borderWidth: 3,
          boxShadow: 'none', // Add this if you want to remove the shadow
        },
      }}
      
    >
      <DialogTitle id="alert-dialog-title">
        <Box style={{ display: 'flex', gap: '10px', justifyContent:'flex-end'}} color={color}>
          <CustomText texto='' variante="subtitulo" icon={<CloseIcon />} />
        </Box>
        <Box style={{color:`${color}`}}>
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
