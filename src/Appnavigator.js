import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeList from './screen/EmployeeList';
import AddEmployees from './screen/AddEmployees';
import EmployeeForm from './screen/EmployeeForm';
import { useSelector } from 'react-redux';


const Appnavigator = () => {
    const Stack = createNativeStackNavigator();
    const employeeList = useSelector(state => state.employee || []);
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={employeeList.data.length>0?'Home':'addButton'}
        >
            <Stack.Screen name='Home' component={EmployeeList}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='addButton' component={AddEmployees}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='employeeForm' component={EmployeeForm}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>

    );
}

export default Appnavigator