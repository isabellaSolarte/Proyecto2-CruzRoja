import { useParams } from 'react-router-dom';
import { getCompayUserById } from '../../services';
import { useEffect, useState } from 'react';
import { CompanyUserModel } from '../../models';
import { CustomLoader, CustomText, ManagmentLayout, TabsAtomComponent } from '../../components';
import CompensationPlanEmpresaPage from '../CompensationPlans/CompensationPlanEmpresaPage';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BusinessData } from './components';

const ViewBusinessPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [business, setBusiness] = useState<CompanyUserModel | null>(null);

  const fetchBusiness = async () => {
    try {
      setLoading(true);
      const response = await getCompayUserById(Number(id));
      setBusiness(response);
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusiness();
  }, []);

  return (
    <>
      {loading && <CustomLoader />}

      <ManagmentLayout
        title={
          <Box sx={{ display: 'flex' }}>
            <AccountCircleIcon sx={{ fontSize: 64 }} />
            <CustomText texto={`${business?.companyName}`} variante={'titulo'} />
          </Box>
        }
        generalContents={
          <>
            <TabsAtomComponent
              tabsHeaderTitle={['Empresa', 'Planes de compensación', 'Representante']}
              tabsContent={[
                <BusinessData key={1} business={business} />,
                <CompensationPlanEmpresaPage key={2} />,
                <></>,
              ]}
            />
          </>
        }
      />

      {/*  */}
    </>
  );
};

export default ViewBusinessPage;
