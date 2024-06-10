import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTranslation } from 'react-i18next';

interface ErrorTextProps {
  error: string | undefined;
  formErrorKey: string | undefined;
}

const ErrorText = ({ error, formErrorKey }: ErrorTextProps) => {
  const { t } = useTranslation('formErrors');
  if (!error) return null;
  if (!formErrorKey) formErrorKey = 'default';
  return (
    <span style={{ fontSize: 13, display: 'flex', alignItems: 'center' }}>
      <ErrorOutlineIcon sx={{ fontSize: 16 }} color="error" />
      {t(`${formErrorKey}.${error}`)}
    </span>
  );
};

export default ErrorText;
