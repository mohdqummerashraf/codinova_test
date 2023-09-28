import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from './screen/Home';
import MainScreen from './drawer/MainScreen';

const Stack = createStackNavigator();
function Appnavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='MainScreen' component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigator