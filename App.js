import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

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
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#3D5744",
        },
        tabBarStyle: {
          backgroundColor: "#3D5744",
          height: 65,
          
        },
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          tabBarIcon: ({ focused  }) => (
          <AntDesign 
          name="home" 
          size={27} 
          color={focused ? "white" : "white"} />
          )
        }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{ 
          tabBarIcon: ({ focused  }) => (
          <Ionicons 
          name="ios-search" 
          size={27} 
          color={focused ? "white" : "white"} />
          )
        }}
      />
      <Tab.Screen 
          name="Account" 
          component={Account} 
          options={{ 
            tabBarIcon: ({ focused  }) => (
            <MaterialCommunityIcons 
            name="account-circle-outline" 
            size={28} 
            color={focused ? "white" : "white"} />
            )
          }}
          />
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
        <Stack.Screen 
          name='Main'
          component={Main}
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
