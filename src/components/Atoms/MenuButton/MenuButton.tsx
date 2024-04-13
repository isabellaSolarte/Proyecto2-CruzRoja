/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NavLink } from 'react-router-dom';
import { Icon, Typography } from '@mui/material';
import './MenuButtonStyles.css';
import { useState } from 'react';

interface MenuButtonProps {
  title: string;
  icon?: JSX.Element;
  path: string;
  collapse?: boolean;
}

const MenuButton = ({ title, icon, path, collapse = false }: MenuButtonProps) => {
  const [active, setActive] = useState(false);
  console.log(collapse);
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        setActive(isActive);
        return isActive ? 'buttonMenu activeButtonMenu' : 'buttonMenu deactiveButtonMenu';
      }}
    >
      {icon && <Icon className={active ? 'activeIcon' : ''}>{icon}</Icon>}
      <Typography textTransform={'capitalize'} fontWeight={'regular'}>
        {title}
      </Typography>
    </NavLink>
  );
};

export default MenuButton;
