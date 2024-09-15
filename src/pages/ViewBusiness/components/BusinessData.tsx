import { Box, Grid } from '@mui/material';
import { CustomText } from '../../../components';
import { CompanyUserModel } from '../../../models';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { useTranslation } from 'react-i18next';
import PublicIcon from '@mui/icons-material/Public';
import PlaceIcon from '@mui/icons-material/Place';
import SignpostIcon from '@mui/icons-material/Signpost';
import DirectionsIcon from '@mui/icons-material/Directions';
import NumbersIcon from '@mui/icons-material/Numbers';

interface BusinessDataProps {
  business: CompanyUserModel | null;
}

const BusinessData = ({ business }: BusinessDataProps) => {
  const { t } = useTranslation('commons');

  if (!business) {
    return <Box />;
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} paddingInline={3}>
          <CustomText texto={t('businessPage.bussinesInfoTitle')} variante={'subtitulo'} />
        </Grid>

        <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={t('businessPage.phone')}
            variante="pequeño"
            icon={<PhoneAndroidOutlinedIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={business.companyPhone} />
        </Grid>
        <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={t('businessPage.email')}
            variante="pequeño"
            icon={<MarkEmailReadOutlinedIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={business.companyEmail} />
        </Grid>

        <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={t('businessPage.nit')}
            variante="pequeño"
            icon={<CreditScoreOutlinedIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={`${business.companyNit}`} />
        </Grid>

        <Grid item xs={12} md={6} sm={12} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={t('businessPage.name')}
            variante="pequeño"
            icon={<MedicalInformationOutlinedIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={business.companyName} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} paddingInline={3}>
          <CustomText texto={t('businessPage.addressInfo')} variante={'subtitulo'} />
        </Grid>

        <Grid item xs={12} md={6} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={`${t('address.country')} `}
            variante="pequeño"
            icon={<PublicIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={business.address.country} />
        </Grid>

        <Grid item xs={12} md={6} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={`${t('address.city')} `}
            variante="pequeño"
            icon={<PlaceIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={business.address.city} />
        </Grid>
        <Grid item xs={12} md={4} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={`${t('address.neighborhood')} `}
            variante="pequeño"
            icon={<SignpostIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={`${business.address.neighborhood} `} />
        </Grid>

        <Grid item xs={12} md={4} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={`${t('address.direction')} `}
            variante="pequeño"
            icon={<DirectionsIcon color="disabled" />}
          />
          <CustomText
            variante="texto"
            texto={`${t('address.street')} ${business.address.street} # ${business.address.number}`}
          />
        </Grid>

        <Grid item xs={12} md={4} paddingInline={3} paddingBlock={2}>
          <CustomText
            texto={`${t('address.floorOrApartment')} `}
            variante="pequeño"
            icon={<NumbersIcon color="disabled" />}
          />
          <CustomText variante="texto" texto={`${business.address.floorOrApartment} `} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessData;
