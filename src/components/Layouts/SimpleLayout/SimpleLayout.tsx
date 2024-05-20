import { Box } from '@mui/material';
import { EmptyBox } from '../../Atoms';

type SimpleLayoutProps = {
  children: JSX.Element;
};

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <Box
      sx={{
        paddingInline: { xs: 1, md: 4, lg: 16 },
        width: { xs: 'calc(100vw - 20%)', md: 'calc(100vw - 25%) ', lg: 'calc(100vw - 5%) ' },
      }}
    >
      <EmptyBox height={30} width={1} />
      {children}
    </Box>
  );
};

export default SimpleLayout;
