import { Button, FormControlLabel, Radio } from '@mui/material';
import './UserTypeStyles.css';

interface UserTypeCardProps {
  label: string;
  banner: string;
  active: boolean;
  value: 'volunter' | 'business' | undefined;
  onClick: () => void;
}

const userTypeCardStyle = {
  height: '15rem',
  width: '15rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

const UserTypeCard = ({ value, label, banner, active, onClick }: UserTypeCardProps) => {
  return (
    <Button sx={userTypeCardStyle} onClick={onClick}>
      <img
        src={banner}
        alt={value}
        style={{
          filter: active ? 'grayscale(0)' : 'grayscale(1)',
          width: 'calc(100% - 3rem)',
        }}
        className="logo"
      />
      <FormControlLabel
        value={value}
        control={<Radio />}
        label={label}
        sx={{ color: '#000', textTransform: 'capitalize' }}
      />
    </Button>
  );
};

export default UserTypeCard;
