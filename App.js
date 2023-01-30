import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IndexScreen from './src/screens/IndexScreen';
import CreateAccount from './src/screens/CreateAccount';
import LogIn from './src/screens/LogIn';
import HomeScreen from './src/screens/HomeScreen';
import Search from './src/screens/Search'
import Account from './src/screens/Account'
import TermsConditions from './src/screens/TermsConditions'

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#3D5744",
        },
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );

}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='IndexScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name='IndexScreen'
          component={IndexScreen}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='LogIn'
          component={LogIn}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='Main'
          component={Main}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='CreateAccount'
          component={CreateAccount}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='TermsConditions'
          component={TermsConditions}
          options={{title: "SKINOLOGY"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
