import React from 'react';
import { Box, Alert } from '@mui/material';
import { CustomModal, CustomText, CustomButton } from '../../../../components';
import RecyclingIcon from '@mui/icons-material/Recycling';
import EditIcon from '@mui/icons-material/Edit';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { green } from '@mui/material/colors';
import { PathNames } from '../../../../core';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



interface ViewActionModalProps {
  open: boolean;
  action: any;
  onClose: () => void;
}

const ViewActionModal: React.FC<ViewActionModalProps> = ({
  open,
  action,
  onClose,
}) => {
    const navigate = useNavigate();
    const { t } = useTranslation('commons');


  const handleEditButtonClick = (actionId: number) => {
    navigate(PathNames.EDIT_ACTIONS.replace(':id', actionId.toString()));
  };
  return (
    <CustomModal
        open={open}
        title={
        <CustomText
            texto={action?.name ?? ''}
            variante="subtitulo"
            icon={<RecyclingIcon style={{ color: green[500] }} />}
        />
        }
        description={
        <Box sx={{ borderBottom: '1px solid #C8C8C8' }}>
            <CustomText texto={action?.description ?? ''} variante="texto" />
        </Box>
        }
        generalContents={
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
            <CustomText
                texto={'Total UFP:'}
                variante="texto"
                styles={{ fontWeight: 'bold' }}
                icon={<EnergySavingsLeafIcon color="success" />}
            />
            <CustomText texto={'' + (action?.footPrintUnity ?? '')} variante="texto" />
            </Box>
            <Box sx={{ display: 'flex' }}>
            <CustomText
                texto={'Costo $: '}
                variante="texto"
                styles={{ fontWeight: 'bold', marginRight: '0.5rem' }}
                icon={<EnergySavingsLeafIcon color="success" />}
            />
            <CustomText texto={' ' + (action?.unitaryPrice ?? '') + ' COP'} variante="texto" />
            </Box>
        </Box>
        }
        actionsContent={
        <CustomButton
            content={t('generalButtonText.edit')}
            variant="contained"
            color="info"
            icon={<EditIcon />}
            onClick={() => handleEditButtonClick(action?.id ?? 0)}
        />
        }
        onClose={onClose}
    />
  );
};

export default ViewActionModal;
