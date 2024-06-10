/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box, Button, Container } from '@mui/material';
import { getUserPositionsList } from '../../../utils/getUserPositionsList';
import { useTranslation } from 'react-i18next';
import { CustomButton, CustomLabelGroup, EmptyBox } from '../../../components';
import { useState } from 'react';
import '../Components/UserTypeStyles.css';
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';

interface VolunterUserDataFormProps {
  updateVolunterUserData: (position: Pick<VolunterUserModel, 'position'>) => void;
  handleNextStep: () => void;
  handleStepBack: () => void;
}

const VolunterUserDataForm = ({
  updateVolunterUserData,
  handleNextStep,
  handleStepBack,
}: VolunterUserDataFormProps) => {
  const { t } = useTranslation('commons');
  const positions = getUserPositionsList();
  const [currentPosition, setCurrentPosition] = useState<number | undefined>(undefined);

  const handleSelectPosition = (positionId: number) => {
    setCurrentPosition(positionId);
    const selectedPosition = positions.find(position => position.id === positionId);
    if (selectedPosition) {
      updateVolunterUserData({ position: selectedPosition.title });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {positions.map(position => (
        <Button
          key={position.id}
          onClick={() => {
            handleSelectPosition(position.id);
          }}
        >
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 10,
            }}
            className={currentPosition === position.id ? 'buttonCardActive' : 'buttonCard'}
          >
            <Box
              sx={{
                width: '10rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className={'box'}
            >
              <img
                src={position.img}
                alt=""
                style={{
                  filter: currentPosition === position.id ? 'grayscale(0)' : 'grayscale(1)',
                  width: 'calc(100% - 3rem)',
                  borderRadius: '50%',
                }}
                className="logo"
              />
            </Box>
            <Box>
              <CustomLabelGroup
                texto1={t(`positions.${position.title}`)}
                texto2={t(`positionsDescription.${position.title}`)}
              />
            </Box>
          </Container>
        </Button>
      ))}

      <EmptyBox height={50} width={10} />

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <CustomButton content={t('components.stepper.back')} onClick={handleStepBack} />
        <CustomButton
          type="submit"
          content={t('components.stepper.next')}
          onClick={handleNextStep}
          color="info"
          disabled={currentPosition === undefined}
        />
      </Box>
    </Box>
  );
};

export default VolunterUserDataForm;
