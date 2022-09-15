import React, {useState} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface ITab {
  key: React.Key;
  title: string;
}
interface ITabsViewProps {
  tabs: Array<ITab>;
  renderContent: (res: {index: number; key: React.Key}) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TabsView = ({tabs, renderContent, style}: ITabsViewProps) => {
  const [selected, setSelected] = useState({index: 0, key: tabs[0].key});

  return (
    <View style={style}>
      <View style={styles.titleContainer}>
        {tabs.map((tab, i) => (
          <TabBTN
            key={tab.key}
            isSelected={selected.index === i}
            index={i}
            tab={tab}
            onPress={setSelected}
          />
        ))}
      </View>
      {renderContent(selected)}
    </View>
  );
};

interface ITabBTNProps {
  onPress: React.Dispatch<
    React.SetStateAction<{
      index: number;
      key: React.Key;
    }>
  >;
  tab: ITab;
  index: number;
  isSelected: boolean;
}
const TabBTN = ({onPress, tab, index, isSelected}: ITabBTNProps) => {
  if (isSelected) {
    return (
      <Pressable
        style={styles.titleSelected}
        onPress={() => onPress({index, key: tab.key})}>
        <Text style={styles.titleTextSelected}>{tab.title}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable
      style={styles.titleUnselected}
      onPress={() => onPress({index, key: tab.key})}>
      <Text style={styles.titleTextUnselected}>{tab.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 30,
  },
  titleSelected: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  titleUnselected: {
    flex: 1,
  },
  titleTextSelected: {
    textAlign: 'center',
    color: 'black',
    padding: 3,
  },
  titleTextUnselected: {
    textAlign: 'center',
    color: '#383838',
    padding: 3,
  },
});

export default TabsView;

/*

import React from 'react';
import {Text, View} from 'react-native';
import TabsView from './TabsView';

function App() {
  return (
    <TabsView
      style={{marginHorizontal: 10}}
      tabs={TABS_VIEW_MOCK}
      renderContent={renderTabContent}
    />
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

*/
