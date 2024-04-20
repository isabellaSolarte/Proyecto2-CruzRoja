import { Box, FormControl, RadioGroup } from '@mui/material';
import CustomText from '../../../components/Atoms/CustomText/CustomText';
import UserTypeCard from '../Components/UserTypeCard';
import { useTranslation } from 'react-i18next';

interface SelectUserFormProps {
  // eslint-disable-next-line no-unused-vars
  handleUserType: (type: 'volunter' | 'business') => void;
  userType: 'volunter' | 'business';
}

const SelectUserForm = ({ handleUserType, userType }: SelectUserFormProps) => {
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
          />

          <UserTypeCard
            value={'business'}
            label={t('userTypes.business')}
            banner="/personaLogoBG.png"
            active={userType === 'business'}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SelectUserForm;
