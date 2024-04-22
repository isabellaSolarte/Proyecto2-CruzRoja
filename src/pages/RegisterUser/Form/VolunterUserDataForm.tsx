/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box } from '@mui/material';
import { getUserPositionsList } from '../../../utils/getUserPositionsList';
import { useTranslation } from 'react-i18next';
import { UserPositions } from '../../../models/UserModels/UserPositions';
import { CustomText } from '../../../components';

const VolunterUserDataForm = () => {
  const { t } = useTranslation('commons');
  const positions: UserPositions[] = getUserPositionsList();
  const positionsName = positions.map(position => t(`positions.${position}`));

  return (
    <Box>
      {positionsName.map(position => (
        <CustomText texto={position} key={position} variante={'texto'} />
      ))}
    </Box>
  );
};

export default VolunterUserDataForm;
