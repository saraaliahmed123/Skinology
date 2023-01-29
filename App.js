import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from './src/screens/IndexScreen';
import CreateAccount from './src/screens/CreateAccount';
import LogIn from './src/screens/LogIn';

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
          name='CreateAccount'
          component={CreateAccount}
          options={{title: "SKINOLOGY"}}
        />
        <Stack.Screen 
          name='LogIn'
          component={LogIn}
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
