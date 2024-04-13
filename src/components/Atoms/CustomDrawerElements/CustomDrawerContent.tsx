import { List } from '@mui/material';
import { MenuOption } from '../../../models';
import { MenuButton } from '../MenuButton';

interface CustomDrawerContentProps {
  open: boolean;
  navigationOptions: MenuOption[];
}

const CustomDrawerContent = ({ open, navigationOptions }: CustomDrawerContentProps) => {
  return (
    <List>
      {navigationOptions.map(option => (
        <MenuButton
          key={option.path}
          title={option.title}
          icon={option.icon}
          path={option.path}
          collapse={open}
        />
      ))}
    </List>
  );
};

export default CustomDrawerContent;
