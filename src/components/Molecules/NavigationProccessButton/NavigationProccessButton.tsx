import { Button, useTheme } from '@mui/material';
import { CustomText } from '../../Atoms/CustomText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NavigationProccessButton = () => {
  const theme = useTheme();

  const navigationHistory = ['Home', 'Business', 'Create'];

  const navigationItems = navigationHistory.map((item, index) => {
    if (index == navigationHistory.length - 1) {
      return {
        title: <CustomText texto={item} variante="subtitulo" />,
        path: item,
      };
    }
    return {
      title: <CustomText texto={item} variante="subtitulo" />,
      path: item,
      icon: (
        <KeyboardArrowRightIcon
          sx={{
            color: theme.textColors?.grey,
          }}
        />
      ),
    };
  });

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
            <Button sx={{ textTransform: 'capitalize', padding: 0 }}>{item.title}</Button>
            {item.icon && item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationProccessButton;
