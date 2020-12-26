import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import ColorPallet from './src/screens/ColorPallet';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ColorPallet' component={ColorPallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
