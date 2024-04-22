import { Tooltip } from '@mui/material';

interface CustomIconDetailsProps {
  icon: JSX.Element;
  description: string;
}

const CustomIconDetails = ({ icon, description }: CustomIconDetailsProps) => {
  return <Tooltip title={description}>{icon}</Tooltip>;
};

export default CustomIconDetails;
