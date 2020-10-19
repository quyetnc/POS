import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChangeOutLet from './ChangeOutLet';
import { Sizes } from '@dungdang/react-native-basic'
import FindTransaction from './FindTransaction'
import FindGuest from './FindGuest';
import SyncData from './SyncData';

const ActionComponents = props => {
    const data = [
        { title: 'ChangeOutlet', screen: 'Login' },
        { title: 'FindTransaction', screen: 'FindTransaction' },
        { title: 'FindGuest', screen: 'FindGuest' },
        { title: 'SyncData', screen: 'SyncData' }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.menuButton}>
                <ChangeOutLet title='ChangeOutlet' onPress={() => props.navigation.navigate('Login')} />
                <FindTransaction />
                <FindGuest />
                <SyncData />
                {/* {data.map((item, index) => { })} */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    menuButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.s10,
        paddingVertical: Sizes.s10
    }
})
export default ActionComponents;