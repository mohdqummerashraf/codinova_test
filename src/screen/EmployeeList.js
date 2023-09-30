import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';



import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from './CustomHeader';
import { addFavEmployeeAction } from '../action/addEmployeeAction';
import FontAwesome from "react-native-vector-icons/FontAwesome"

const EmployeeList = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const employeeList = useSelector(state => state.employee || []);
    const [employeeData, setEmployeeData] = useState(employeeList.data)
    const [showSortCard, setShowSortCard] = useState(false);



    const addToFavourite = (item) => {
        dispatch(addFavEmployeeAction(item))
    }


    const sortArray = (type) => {
        const sortedByName = employeeList.data.sort(function (a, b) {
            return a[type].localeCompare(b[type]);
        });
        setEmployeeData([...sortedByName]);
         setShowSortCard(prev => !prev)

    }


    useEffect(() => {
        setEmployeeData(employeeList.data)

    }, [employeeList.data])


    return (
        <>
            <CustomHeader sortArray={sortArray} setShowSortCard={setShowSortCard} showSortCard={showSortCard} />
            <View
                style={{
                    paddingBottom: '20%'
                }}
            >
                <FlatList
                    data={employeeData || []}
                    renderItem={({ item, index }) => (
                        < View style={style.card}>
                            <View
                                style={{
                                    marginHorizontal: 10
                                }}
                            >
                                <Text
                                    style={{
                                        backgroundColor: 'rgb(0, 170, 58)',
                                        borderRadius: 40,
                                        textAlign: 'center',
                                        padding: 7,
                                        fontSize: 20,
                                        fontWeight: 600
                                    }}
                                >{item.firstName.slice(0, 1)}{item.lastName.slice(0, 1)}</Text>
                            </View>
                            <View
                                style={{

                                    flexGrow: 2,
                                    marginHorizontal: 10,

                                }}
                            >
                                <Text style={{
                                    fontWeight: 600,
                                    color:'#000',
                                    fontSize:18

                              
                              
                              }}>{item.firstName} {item.lastName}</Text>
                                <Text 
                                style={{
                                    color:'grey'
                                }}
                                >{item.jobTitle}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => addToFavourite(item)}

                            >
                                {item.isFavourite ?
                                    <FontAwesome
                                        name="star"
                                        size={30}
                                        color='yellow'

                                    />
                                    :
                                    <FontAwesome
                                        name="star-o"
                                        size={30}
                                        color='#000'
                                    />

                                }
                            </TouchableOpacity>

                        </View>
                    )}
                    keyExtractor={
                        (item) => item.id.toString()
                    }


                />
            </View >
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
        width: "90%",
        height: 70,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#0000001C',
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#0000001C",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        paddingHorizontal: 10,
        marginHorizontal: '5%',
        marginVertical: '3%'
    },
    addBtn: {
        backgroundColor: 'rgb(0, 170, 58)',
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