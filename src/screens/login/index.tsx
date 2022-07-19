import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput as RNTextInput,
  Animated,
} from 'react-native';
import PieCrust from '../../ui-system/data-display/pie-crust';
import Button from '../../ui-system/inputs/button/button';
import {TAB_NAV} from '../../navigation/ScreenAliases';
import TextInput from '../../ui-system/inputs/TextInput';

interface ILoginScreenProps {
  navigation: NativeStackNavigationProp<any, never, undefined>;
}
/*
const size = 45;
const thickness = 5;
const activeThickness = 10;
const color = '#6366f1';
const inactiveColor = '#e0e7ff';
const gap = 2;

<PieCrust
value={[true, false, false, false]}
size={size}
thickness={thickness}
activeThickness={activeThickness}
color={color}
inactiveColor={inactiveColor}
gap={gap}
/>
*/
const LoginScreen = ({navigation}: ILoginScreenProps) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
      <View style={{flex: 1, backgroundColor: 'grey'}}></View>
      <View style={{marginBottom: 21}}>
        <Text
          style={{
            fontFamily: 'Red Hat display',
            fontWeight: '700',
            fontSize: 18,
            color: '#202236',
          }}>
          Se connecter
        </Text>
        <TextInput
          icon="todo"
          placeholder="Utilisateur"
          value={username}
          onChangeText={setUsername}
          style={{marginVertical: 10}}
        />
        <TextInput
          icon="todo"
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          style={{marginVertical: 10}}
          inputProps={{secureTextEntry: true}}
        />
        <Text
          style={{
            margin: 7,
            textAlign: 'right',
            color: '#6366f1',
            fontWeight: '700',
            textDecorationLine: 'underline',
            fontSize: 13,
            lineHeight: 18,
          }}>
          Mot de passe oublier
        </Text>

        <Button
          textStyle={{fontWeight: '700', fontSize: 14, lineHeight: 24}}
          style={{margin: 7}}
          onPress={() => navigation.navigate(TAB_NAV)}>
          Se connecter
        </Button>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 7,
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontWeight: '400',
              fontSize: 12,
              lineHeight: 25,
              color: '#8a929e',
            }}>
            Vous n'avez pas un compte?
          </Text>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 25,
              color: '#8a929e',
            }}>
            Creez un compte
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
