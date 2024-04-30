import { Box, FormControl, RadioGroup } from '@mui/material';
import CustomText from '../../../components/Atoms/CustomText/CustomText';
import UserTypeCard from '../Components/UserTypeCard';
import { useTranslation } from 'react-i18next';
import { CustomButton, EmptyBox } from '../../../components';
import { useEffect } from 'react';

interface SelectUserFormProps {
  // eslint-disable-next-line no-unused-vars
  handleUserType: (type: 'volunter' | 'business') => void;
  userType: 'volunter' | 'business';
  handleNext: () => void;
  handleBack?: () => void;
}

const SelectUserForm = ({ handleUserType, userType, handleNext }: SelectUserFormProps) => {
  const { t } = useTranslation('commons');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = (event.target as HTMLInputElement).value as 'volunter' | 'business';
    handleUserType(type);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CustomText texto={t('usersPages.userForm.userTypeSelection')} variante="texto" />
        <FormControl>
          <RadioGroup value={userType} onChange={handleChange} row>
            <UserTypeCard
              value={'volunter'}
              label={t('userTypes.redCross')}
              banner="/voluntarioLogo.png"
              active={userType === 'volunter'}
              onClick={() => {
                handleUserType('volunter');
              }}
            />

            <UserTypeCard
              value={'business'}
              label={t('userTypes.businessRepresntative')}
              banner="/personaLogoBG.png"
              active={userType === 'business'}
              onClick={() => {
                handleUserType('business');
              }}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <EmptyBox height={50} width={10} />

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <CustomButton content={t('components.stepper.next')} onClick={handleNext} color="info" />
      </Box>
    </Box>
  );
};

export default SelectUserForm;
