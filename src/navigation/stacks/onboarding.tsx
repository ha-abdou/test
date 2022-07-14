import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {
  DAILY_RISK,
  DAILY_RISK2,
  LOGIN,
  RISK_SCRORE,
  TAB_NAV,
} from '../ScreenAliases';

const OnboardingStack = createNativeStackNavigator();

function DailyRiskScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DailyRiskScreen</Text>
      <Button
        title="go to RiskScoreScreen"
        onPress={() => navigation.navigate(RISK_SCRORE)}
      />
    </View>
  );
}

function RiskScoreScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>RiskScoreScreen</Text>
      <Button
        title="go to DailyRisk2Screen"
        onPress={() => navigation.navigate(DAILY_RISK2)}
      />
    </View>
  );
}
function DailyRisk2Screen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DailyRisk2Screen</Text>
      <Button
        title="go to LoginScreen"
        onPress={() => navigation.navigate(LOGIN)}
      />
    </View>
  );
}

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LoginScreen</Text>
      <Button
        title="go to TAB_NAV"
        onPress={() => navigation.navigate(TAB_NAV)}
      />
    </View>
  );
}

const OnboardingNavigation = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{animation: 'none'}}>
      <OnboardingStack.Screen name={DAILY_RISK} component={DailyRiskScreen} />
      <OnboardingStack.Screen name={RISK_SCRORE} component={RiskScoreScreen} />
      <OnboardingStack.Screen name={DAILY_RISK2} component={DailyRisk2Screen} />
      <OnboardingStack.Screen name={LOGIN} component={LoginScreen} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigation;
