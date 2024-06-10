import { Button, useTheme } from '@mui/material';
import { CustomText } from '../../Atoms/CustomText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useLocation, useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';

interface currentPath {
  title: JSX.Element;
  path: string;
  icon: JSX.Element | null;
  index: number;
}

const NavigationProccessButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname.split('/');
  currentPath[0] = 'Home';

  const navigationItems: currentPath[] = currentPath.map((item, index) => {
    const data = {
      title: <CustomText texto={item} variante="pequeño" />,
      path: item,
      icon: null,
      index: index,
    };

    if (index == currentPath.length - 1) return data;

    return {
      ...data,
      icon: (
        <KeyboardArrowRightIcon
          sx={{
            color: theme.textColors?.grey,
          }}
        />
      ),
    };
  });

  const navigateToPath = (item: currentPath) => {
    let goTo = '';
    if (item.index == 0) navigate(PathNames.HOME, { replace: true });

    for (let i = 1; i <= item.index; i++) goTo += '/' + currentPath[i];

    navigate(goTo, { replace: true });
  };

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {navigationItems.map(item => (
          <li
            key={item.path}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{ textTransform: 'capitalize', padding: 0 }}
              onClick={() => {
                navigateToPath(item);
              }}
            >
              {item.title}
            </Button>
            {item.icon && item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationProccessButton;
