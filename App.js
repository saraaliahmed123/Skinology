import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IndexScreen from './src/screens/IndexScreen';
import CreateAccount from './src/screens/CreateAccount';
import LogIn from './src/screens/LogIn';
import HomeScreen from './src/screens/tab/HomeScreen';
import Search from './src/screens/tab/Search'
import Account from './src/screens/tab/Account'
import StartPage from './src/screens/StartPage';
import SkinTypePage from './src/screens/SkinTypePage';
import SkinConcernPage from './src/screens/SkinConcernPage';
import GenderPage from './src/screens/GenderPage';
import AgeScreen from './src/screens/AgeScreen';
import ResultsPage from './src/screens/ResultsPage';

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
          name='StartPage'
          component={StartPage}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='SkinTypePage'
          component={SkinTypePage}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='SkinConcernPage'
          component={SkinConcernPage}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='GenderPage'
          component={GenderPage}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='AgeScreen'
          component={AgeScreen}
          options={{title: "SKINOLOGY"}}
        />
         <Stack.Screen 
          name='ResultsPage'
          component={ResultsPage}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='CreateAccount'
          component={CreateAccount}
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
