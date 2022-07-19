import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import OnboardingCarousel from './onboarding-carousel';
import {LOGIN} from '../../navigation/ScreenAliases';

interface IOnboardingScreenProps {
  navigation: NativeStackNavigationProp<any, never, undefined>;
}
const OnboardingScreen = ({navigation}: IOnboardingScreenProps) => {
  const goToLoginScreen = useCallback(() => navigation.navigate(LOGIN), []);

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingCarousel data={mock} onFinish={goToLoginScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default OnboardingScreen;

const mock = [
  {
    title: 'Risque du jour',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: 'Risk score',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
  },
  {
    title: 'Risque du jour',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
  },
];
