import { useTranslation } from 'react-i18next';
import { CustomButton, CustomText } from '../../Atoms';
import './NotFoundStyles.css';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface NotFoundLayoutProps {
  title: 'rol' | 'user';
}

const NotFoundLayout = ({ title }: NotFoundLayoutProps) => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
  return (
    <div className="notFountLayout">
      <div className="notFoundContainer">
        <img src="/public/confused.png" alt="not found image" className="imgNotFound" />
        <div className="notFoundTexts">
          <CustomText texto={t(`notFoundPage.${title}`)} variante="subtitulo" />
          <CustomText texto={t('notFoundPage.description')} variante={'texto'} />
          <CustomText texto={t('notFoundPage.sorry')} variante="pequeño" />
        </div>
      </div>
      <CustomButton
        content={t('generalButtonText.previousPage')}
        onClick={() => {
          navigate(-1);
        }}
        color="info"
        icon={<ArrowBackIosNewIcon />}
      />
    </div>
  );
};

export default NotFoundLayout;
