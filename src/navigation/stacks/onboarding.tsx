import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, ONBOARDING} from '../ScreenAliases';
import OnboardingScreen from '../../screens/onboarding';
import LoginScreen from '../../screens/login';

const OnboardingStack = createNativeStackNavigator();

const screenOptions = {animation: 'none', headerShown: false} as const;

const OnboardingNavigation = () => {
  return (
    <OnboardingStack.Navigator screenOptions={screenOptions}>
      <OnboardingStack.Screen name={ONBOARDING} component={OnboardingScreen} />
      <OnboardingStack.Screen name={LOGIN} component={LoginScreen} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigation;
