import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeAction } from '../action/addEmployeeAction';
import { useNavigation } from '@react-navigation/native';




const EmployeeForm = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const employeeList = useSelector(state => state.employee || []);


    const [employeeDetail, setEmployeeDetail] = useState({
        fName: '',
        lName: '',
        email: '',
        jobTitle: '',
        salary: null
    });

    const [alertName, setAlertName] = useState('');

    const handleInputChange = (inputName, inputValue) => {
        setEmployeeDetail({ ...employeeDetail, [inputName]: inputValue })
    }

    const addEmployee = () => {
        if (employeeDetail.fName == '') {
            setAlertName('First Name')
        }
        else if (employeeDetail.lName == '') {
            setAlertName('Last Name')
        } else if (employeeDetail.email == '') {
            setAlertName('Email');
        } else if (employeeDetail.jobTitle == '') {
            setAlertName('Job Title');
        } else if (employeeDetail.salary == null) {
            setAlertName('Salary');
        }

        if (employeeDetail.fName !== '' && employeeDetail.lName !== '' && employeeDetail.email !== '' && employeeDetail.salary !== null && employeeDetail.jobTitle !== '') {
            const payLoad = {
                id: employeeList.data && employeeList.data.length > 0 ? employeeList.data.length + 1 : 1,
                firstName: employeeDetail.fName,
                lastName: employeeDetail.lName,
                jobTitle: employeeDetail.jobTitle,
                salary: employeeDetail.salary
            }
            console.log("payload", payLoad);
            dispatch(addEmployeeAction(payLoad));
            navigation.navigate('Home')

        } else {
            Alert.alert(`Please fill the ${alertName} detail`);
        }
    }

    return (
        <ScrollView keyboardShouldPersistTaps={"handled"} >

            <View style={styles.formHeading}>
                <Text
                    style={
                        styles.headingStyle
                    }
                >Enter employee details</Text>
            </View>

            <View style={styles.formContainer}>

                <TextInput
                    placeholder="First Name"
                    style={styles.input}
                    placeholderTextColor="rgba(44, 44, 44, 0.61)"
                    value={employeeDetail.fName}
                    name="fName"
                    
                    onChangeText={value => handleInputChange('fName', value)}
                />
                <TextInput
                    placeholder="Last Name"
                    style={styles.input}
                    placeholderTextColor="rgba(44, 44, 44, 0.61)"
                    value={employeeDetail.lName}
                    name="lName"
                    
                    onChangeText={value => handleInputChange('lName', value)}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    placeholderTextColor="rgba(44, 44, 44, 0.61)"
                    value={employeeDetail.email}
                    name="email"
                   
                    keyboardType='email-address'
                    onChangeText={value => handleInputChange('email', value)}
                />
                <TextInput
                    placeholder="Job Title"
                    style={styles.input}
                    placeholderTextColor="rgba(44, 44, 44, 0.61)"
                    value={employeeDetail.jobTitle}
                    name="jobTitle"
                    onChangeText={value => handleInputChange('jobTitle', value)}
                />
                <TextInput
                    placeholder="Salary"
                    style={styles.input}
                    placeholderTextColor="rgba(44, 44, 44, 0.61)"
                    value={employeeDetail.salary}
                    name="salary"
                    keyboardType='numeric'
                    onChangeText={value => handleInputChange('salary', value)}
                />

                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(0, 170, 58, 0.8)',
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 10,
                        marginVertical: '4%'
                    }}
                    onPress={() => addEmployee()}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '600'
                        }}
                    >SAVE</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    formContainer: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        marginVertical: '2%',
        color:'#000',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 170, 58, 0.8)'
    },
    headingStyle: {
        color: 'rgba(0, 170, 58, 0.8)',
        fontSize: 20,
        fontWeight: '600'
    }
})

export default EmployeeForm