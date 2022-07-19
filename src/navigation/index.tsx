import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ONBOARDING_STACK, TAB_NAV} from './ScreenAliases';
import OnboardingNavigation from './stacks/onboarding';
import TabNavigation from './tab';

const AppNavStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppNavStack.Navigator>
      <AppNavStack.Screen
        name={ONBOARDING_STACK}
        component={OnboardingNavigation}
        options={{animation: 'none', headerShown: false}}
      />
      <AppNavStack.Screen name={TAB_NAV} component={TabNavigation} />
    </AppNavStack.Navigator>
  );
};

export default AppNavigation;
