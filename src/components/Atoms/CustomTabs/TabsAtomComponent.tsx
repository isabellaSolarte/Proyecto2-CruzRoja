import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import  { styled } from 'styled-components';
interface TabProps {
  tabContentItem: string[];
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

const TabsAtomComponent = ({ tabContentItem }: TabProps) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <StyledTabs value={selectedTab} onChange={handleTabChange}>
      {tabContentItem.map((label, index) => (
        <StyledTab key={index} label={label} />
      ))}
    </StyledTabs>
  );
};

export default TabsAtomComponent;
