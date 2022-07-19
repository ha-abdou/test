import React, {useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button, ScrollView, Animated} from 'react-native';
import {SCOPES_LIST, SCOPE_DETAILS} from '../ScreenAliases';
import Paper from '../../ui-system/surfaces/paper';
import TextTag from '../../ui-system/data-display/text-tag';
import ProgressBar from '../../ui-system/data-display/progress-bar';

const CustomScopeStack = createNativeStackNavigator();

const Card = () => {
  return (
    <Paper style={{margin: 7}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>CIB</Text>
        <View style={{width: 20, height: 20, justifyContent: 'center'}}>
          <View style={{width: 20, height: 5, backgroundColor: 'grey'}} />
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#6b52ae',
              width: 25,
              height: 25,
              borderRadius: 20,
              margin: 5,
              marginRight: 10,
            }}
          />
          <View style={{flex: 1}}>
            <Text>Incidents</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>20</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#6b52ae',
              width: 25,
              height: 25,
              borderRadius: 20,
              margin: 5,
              marginRight: 10,
            }}
          />
          <View style={{flex: 1}}>
            <Text>Incidents</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>20</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontStyle: 'italic'}}>Risque du jour</Text>
        </View>
        <View>
          <TextTag>12%</TextTag>
        </View>
      </View>
      <ProgressBar progress={0.7} />
    </Paper>
  );
};

function ScopesListScreen({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{margin: 7}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Card />
          </View>
          <View style={{flex: 1}}>
            <Card />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Card />
          </View>
          <View style={{flex: 1}}>
            <Card />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

/*
<Text>ScopesListScreen</Text>
      <Button
        title="go to ScopeDetailScreen"
        onPress={() => navigation.navigate(SCOPE_DETAILS)}
      />
*/

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
