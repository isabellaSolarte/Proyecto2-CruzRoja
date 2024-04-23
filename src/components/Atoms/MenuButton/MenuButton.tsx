/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NavLink } from 'react-router-dom';
import { Icon, Tooltip, Typography } from '@mui/material';
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
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        setActive(isActive);
        return isActive ? 'buttonMenu activeButtonMenu' : 'buttonMenu deactiveButtonMenu';
      }}
    >
      {icon && (
        <Tooltip title={title} placement="right-end" arrow>
          <Icon className={active ? 'activeIcon' : ''}>{icon}</Icon>
        </Tooltip>
      )}
      <Typography textTransform={'capitalize'} fontWeight={'regular'}></Typography>
      {title}
    </NavLink>
  );
};

export default MenuButton;
