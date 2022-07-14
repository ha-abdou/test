import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {SCOPES_LIST, SCOPE_DETAILS} from '../ScreenAliases';

const CustomScopeStack = createNativeStackNavigator();

function ScopesListScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ScopesListScreen</Text>
      <Button
        title="go to ScopeDetailScreen"
        onPress={() => navigation.navigate(SCOPE_DETAILS)}
      />
    </View>
  );
}

function ScopeDetailScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ScopeDetailScreen</Text>
    </View>
  );
}

const CustomScopeNavigation = () => {
  return (
    <CustomScopeStack.Navigator screenOptions={{animation: 'none'}}>
      <CustomScopeStack.Screen
        name={SCOPES_LIST}
        component={ScopesListScreen}
      />
      <CustomScopeStack.Screen
        name={SCOPE_DETAILS}
        component={ScopeDetailScreen}
      />
    </CustomScopeStack.Navigator>
  );
};

export default CustomScopeNavigation;
