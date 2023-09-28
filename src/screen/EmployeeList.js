import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from './CustomHeader';
import { addEmployeeAction } from '../action/addEmployeeAction';
import FontAwesome from "react-native-vector-icons/FontAwesome"

const EmployeeList = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const employeeList = useSelector(state => state.employee || []);

    console.log("employeeList", employeeList)

    const addToFavourite = (item) => {
        console.log("item", item);

        const newObj = employeeList.data.map(val => {

            if (val.id == item.id) {
                return { ...val, isFavourite: true };
            } else {
                return { ...val, name: 'Alice' };
            }

        });


        console.log("newObj", newObj)
        // dispatch(addEmployeeAction(newObj))

        /*   const indexVal = employeeData.findIndex(value => value.id == 2);
          console.log("indexVal", indexVal);
          if (item.favourite) {
              employeeData[indexVal].favourite = false
          } else {
              employeeData[indexVal].favourite = true
          } */
    }


    const renderEmployee = ({ item }) => (

        < View style={style.card}>
            <Text
                style={{

                    flexGrow: 1
                }}
            >Image</Text>
            <View
                style={{

                    flexGrow: 2
                }}
            >
                <Text>{item.firstName} {item.lastName}</Text>
                <Text>{item.jobTitle}</Text>
            </View>
            <TouchableOpacity
                onPress={() => addToFavourite(item)}
                style={{

                    flexGrow: 1
                }}
            >
                {item.isFavourite ?
                    <FontAwesome
                        name="star"
                        size={20}
                        color='yellow'

                    />
                    :
                    <FontAwesome
                        name="star-o"
                        size={20}
                        color='yellow'
                    />

                }
            </TouchableOpacity>

        </View>
    )
    return (
        <>
            <CustomHeader />
            <FlatList
                data={employeeList.data || []}
                renderItem={renderEmployee}
            // keyExtractor={}

            />
            <View style={{
                flex: 1,


            }}>
                <TouchableOpacity
                    style={style.addBtn}
                    onPress={() => navigation.navigate('employeeForm')}
                    activeOpacity={0.8}
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
        </>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: '5%',
        marginVertical: '2%',
        flexDirection: 'row',
        padding: '3%',
        borderRadius: 5
    },
    addBtn: {
        backgroundColor: 'rgba(0, 170, 58, 0.8)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
})

export default EmployeeList