import React from 'react';
import {Text, View} from 'react-native';
import CMP from './CMP';
import TabsView from './TabsView';

function App() {
  return (
    <View>
      <TabsView
        style={{marginHorizontal: 10}}
        tabs={TABS_VIEW_MOCK}
        renderContent={renderTabContent}
      />

      <CMP
        title="23 juillet 2020 - 12h46"
        subTitle="Ouverture"
        fullName="Hayat LADJICI"
        initial="HL"
      />
    </View>
  );
}

const renderTabContent = (tab: {index: number; key: React.Key}) => {
  switch (tab.key) {
    case '1':
      return (
        <View>
          <Text>Description Tab</Text>
        </View>
      );
    case '2':
      return (
        <View>
          <Text>Historique Tab</Text>
        </View>
      );
    case '3':
      return (
        <View>
          <Text>Correlation Tab</Text>
        </View>
      );
  }
  return null;
};

const TABS_VIEW_MOCK = [
  {
    key: '1',
    title: 'Description',
  },
  {
    key: '2',
    title: 'Historique',
  },
  {
    key: '3',
    title: 'Correlation',
  },
];

export default App;
