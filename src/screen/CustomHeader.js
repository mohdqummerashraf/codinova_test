import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'
 
const CustomHeader = ({ sortArray,setShowSortCard, showSortCard }) => {
    const navigation = useNavigation();
 
    return (
        <>
            <View style={styles.containerStyle}>

                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}

                >
                    <Feather name="menu" size={25} style={{ marginRight: 15 }} />
                </TouchableOpacity>

                {/* <Image source={LOCAL_IMAGES.crossIcon}/> */}
                <Text style={styles.headerTitleText}>Inbox</Text>
                <TouchableOpacity
                    style={{

                        justifyContent: 'flex-end',

                    }}
                    onPress={() => setShowSortCard(prev => !prev)}
                >
                    <Feather name="more-vertical" size={25} style={{ marginRight: 15, }} />
                </TouchableOpacity>


            </View>
            {showSortCard && <View style={styles.sortCard}>
                <TouchableOpacity
                    onPress={()=>sortArray('firstName')}
                >
                    <Text style={styles.sortContent}>Sort By First Name</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>sortArray('lastName')}
                >
                    <Text style={styles.sortContent}>Sort By Last Name</Text>
                </TouchableOpacity>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: "100%",
        height: 55,
        backgroundColor: 'rgb(0, 170, 58)',
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
        paddingHorizontal: 10

    },
    headerTitleText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Lato-Medium',
        flexGrow: 1
    },
    sortCard: {
        position: 'absolute',
        right: '8%',
        top: 55,
        zIndex: 10,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
    },
    sortContent: {
        color: 'white',
        margin: 5
    }

})

export default CustomHeader