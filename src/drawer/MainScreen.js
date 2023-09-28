import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screen/Home';
import Sidebar from '../screen/Sidebar';

const Drawer = createDrawerNavigator();
const MainScreen = () => {
    return (
        <Drawer.Navigator drawerContent={Sidebar} >
            <Drawer.Screen name='Home' component={Home} />
        </Drawer.Navigator>
    )
}

export default MainScreen