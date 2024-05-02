import { Container } from '@mui/material';
import { useUserActions } from '../../recoil';
import { CustomButton } from '../../components';

const LoginPage = () => {
  const userActions = useUserActions();

  const handleLogin = async () => {
    await userActions.login({
      user: 'mesa',
      password: '1234',
    });
  };

  return (
    <div>
      LoginPage
      <Container>
        {JSON.stringify(userActions.getLoggedUser())}
        <CustomButton
          content={'INICIAR SESION'}
          onClick={() => {
            void handleLogin();
          }}
        />
      </Container>
    </div>
  );
};

export default LoginPage;
