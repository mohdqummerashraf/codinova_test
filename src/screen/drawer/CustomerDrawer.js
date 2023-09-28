import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CustomDrawer = () => {
    const employee = useSelector(state => state.employee.data);
    return (
        <View style={
            style.drawerContainer
        }>
            <View style={{
                flexDirection: 'row',
                marginVertical: '3%'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 600
                }}>
                    Total Employee :-
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 400,
                    marginHorizontal: 5
                }}>
                    {employee.length}
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginVertical: '3%'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 600
                }}>
                    Favourite Employee :-
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 400,
                    marginHorizontal: 5
                }}>
                    {employee.length}
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    drawerContainer: {
        margin: '5%',
        paddingTop: '5%'
    }
})

export default CustomDrawer