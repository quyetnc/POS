import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Sizes } from '@dungdang/react-native-basic'

import MenuButton from './MenuButton'

const data = [
    { title: 'ChangeOutlet', icon: 'map-marker', screen: 'Login' },
    { title: 'FindTransaction', icon: 'search', screen: 'FindTransaction' },
    { title: 'FindGuest', icon: 'search', screen: 'FindGuest' },
    { title: 'SyncData', icon: 'sync-alt', screen: 'SyncData' }
]
class ActionComponents extends Component {

    render() {
        const menuOption = data.map((item, index) => {
            return <MenuButton onPress={() => this.props.navigation.navigate(item.screen)}
                key={index}
                title={item.title}
                icon={item.icon}
                screen={item.screen}
            />
        })
        return (
            <View style={styles.container} >
                <View style={styles.menuButton}>
                    {menuOption}
                </View>
            </View>
        );
    }
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