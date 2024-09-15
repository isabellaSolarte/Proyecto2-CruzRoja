import { Box, Grid, Modal } from "@mui/material";
import { CustomButton, EmptyBox } from "../../Atoms";
import { useTranslation } from "react-i18next";

interface ModalProps {
  open: boolean;
  title: JSX.Element;
  description?: JSX.Element;
  generalContents: JSX.Element;
  actionsContent?: JSX.Element;
  onClose: () => void;
}

const CustomModal = ({ open, title, description, generalContents, actionsContent, onClose }: ModalProps) => {
    const { t } = useTranslation('commons');
    return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: '60%',
          margin: 'auto',
          marginTop: '5%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          padding: '20px',
          backdropFilter: 'blur(5px)',
          outline: 'none'
        }}
      >
        <Grid container>
          <Grid item md={8} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            {title}
          </Grid>
          
        </Grid>

        {description && (
          <div>
            <EmptyBox height={20} width={100} />
            {description}
          </div>
        )}

        <EmptyBox height={20} width={100} />
        {generalContents}
        
        <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CustomButton
                    variant="contained"
                    color="error"
                    content={t('generalButtonText.cancel')}
                    onClick={onClose}
                    sx={{ marginRight: '10px' }}
                />
                {actionsContent}
            </Grid>
      </Box>
    </Modal>
  );
}

export default CustomModal;
