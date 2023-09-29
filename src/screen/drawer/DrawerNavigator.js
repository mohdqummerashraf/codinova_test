import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomerDrawer';
import Appnavigator from '../../Appnavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (

        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='Inbox' component={Appnavigator} 
            options={{
                headerShown:false
            }}
            />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator