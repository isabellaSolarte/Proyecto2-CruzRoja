import { useParams } from 'react-router-dom';
import { getCompayUserById } from '../../services';
import { useEffect, useState } from 'react';
import { CompanyUserModel } from '../../models';
import { CustomLoader } from '../../components';

const ViewBusinessPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [business, setBusiness] = useState<CompanyUserModel | null>(null);

  const fetchBusiness = async () => {
    try {
      setLoading(true);
      const response = await getCompayUserById(`${id}`);
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

      <div>ViewBusinessPage {id}</div>
      <div>{JSON.stringify(business)}</div>
    </>
  );
};

export default ViewBusinessPage;
