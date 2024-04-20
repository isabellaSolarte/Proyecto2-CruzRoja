import { Box, FormControlLabel, Radio } from '@mui/material';
import './UserTypeStyles.css';

interface UserTypeCardProps {
  label: string;
  banner: string;
  active: boolean;
  value: 'volunter' | 'business' | undefined;
}

const userTypeCardStyle = {
  height: '15rem',
  width: '15rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

const UserTypeCard = ({ value, label, banner, active }: UserTypeCardProps) => {
  return (
    <Box sx={userTypeCardStyle}>
      <img
        src={banner}
        alt={value}
        style={{
          filter: active ? 'grayscale(0)' : 'grayscale(1)',
          width: 'calc(100% - 3rem)',
        }}
        className="logo"
      />
      <FormControlLabel value={value} control={<Radio />} label={label} />{' '}
    </Box>
  );
};

export default UserTypeCard;
