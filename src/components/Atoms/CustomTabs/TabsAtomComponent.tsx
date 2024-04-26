import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

interface TabProps {
  tabContentItem: string[];
}

// const StyledTabs = withStyles({
//   root: {
//     borderBottom: '1px solid #ccc',
//     display: 'flex',
//     justifyContent: 'flex-end',
//     width: 'fit-content',
//   },
// })(Tabs);

// const StyledTab = withStyles({
//   root: {
//     minWidth: 100,
//     textTransform: 'none',
//     fontSize: 16,
//   },
// })(Tab);

const TabsAtomComponent = ({ tabContentItem }: TabProps) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} onChange={handleTabChange}>
      {tabContentItem.map((label, index) => (
        <Tab key={index} label={label} />
      ))}
    </Tabs>
  );
};

export default TabsAtomComponent;
