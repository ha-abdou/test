import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button} from 'react-native';
import {
  CUSTOM_SCOPE_STACK,
  DAILY_RISK2,
  HOME_SCREEN,
  PARAMETERS_STACK,
  SEARCH_STACK,
  STATUS_STACK,
} from './ScreenAliases';
import CustomScopeNavigation from './stacks/customScope';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
    </View>
  );
}

function StatusScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Status</Text>
    </View>
  );
}

function Parameters() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Parameters</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search</Text>
    </View>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={STATUS_STACK} component={StatusScreen} />
      <Tab.Screen name={PARAMETERS_STACK} component={Parameters} />
      <Tab.Screen name={SEARCH_STACK} component={Search} />
      <Tab.Screen name={CUSTOM_SCOPE_STACK} component={CustomScopeNavigation} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
