import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addEmployeeAction } from '../action/addEmployeeAction';

const CustomHeader = () => {
    const dispatch = useDispatch();
    const employeeList = useSelector(state => state.employee || []);

    const sortArray = (type) => {
        const sortedByName = employeeList.data.sort(function (a, b) {
            return a[type].localeCompare(b[type]);
        });
        dispatch(addEmployeeAction(sortedByName))
    }
    return (
        <View>
            <TouchableOpacity
                onPress={() => sortArray('firstName')}
            >
                <Text>Order By First Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => sortArray('lastName')}
            >
                <Text>Order By Last Name</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader