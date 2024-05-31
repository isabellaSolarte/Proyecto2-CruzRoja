import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { styled } from 'styled-components';
import { Box } from '@mui/material';
interface TabProps {
  tabsHeaderTitle: string[];
  tabsContent: React.ReactNode[];
}

const StyledTabs = styled(Tabs)`
  && {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: flex-end;
    width: fit-content;
  }
`;

const StyledTab = styled(Tab)`
  && {
    min-width: 100px;
    text-transform: none;
    font-size: 16px;
  }
`;

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
      <StyledTabs value={selectedTab} onChange={handleTabChange}>
        {tabsHeaderTitle.map((label, index) => (
          <StyledTab key={index} label={label} />
        ))}
      </StyledTabs>

      {tabsContent.map((content, index) => (
        <CustomTabPanel key={index} value={selectedTab} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </>
  );
};

export default TabsAtomComponent;
