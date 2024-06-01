import React from 'react';
import { Box, Tab, Tabs, styled } from '@mui/material';
import { BorderBottom } from '@mui/icons-material';
interface TabProps {
  tabsHeaderTitle: string[];
  tabsContent: React.ReactNode[];
}

// const StyledTabs = styled(Tabs)`
//   && {
//     border-bottom: 1px solid #ccc;
//     display: flex;
//     justify-content: flex-end;
//     width: fit-content;
//   }
// `;

interface StyledTabProps {
  label: string;
}

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    color: theme.palette.error.main,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: `4px solid ${theme.palette.error.main} !important`,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#A1eaff',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const TabsAtomComponent = ({ tabsHeaderTitle, tabsContent }: TabProps) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        {tabsHeaderTitle.map((label, index) => (
          <AntTab key={index} label={label} />
        ))}
      </Tabs>

      {tabsContent.map((content, index) => (
        <CustomTabPanel key={index} value={selectedTab} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </>
  );
};

export default TabsAtomComponent;
