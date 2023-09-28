import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const AddEmployees = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 186, 64, 0.8)'
        }}>
            <TouchableOpacity
                style={{
                    backgroundColor: 'rgba(0, 170, 58, 0.8)',
                    width: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60
                }}
                onPress={() => navigation.navigate('employeeForm')}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '600'
                    }}
                >ADD EMPLOYEE</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AddEmployees