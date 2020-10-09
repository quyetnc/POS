import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TableComponent = props => {
    return (
        <View style={styles.table}>
            <View style={styles.headerTable}>
                <Text>Bar 10</Text>
                <Text>Bar 10</Text>
                <Icon name='ellipsis-v' size={20} color='black' />
            </View>
            <View style={styles.contentTable}>
                <Text>{props.name}</Text>
                <Text>{props.user}</Text>
                <Text>{props.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        width: '48%',
        // height: 'auto',
        borderRadius: Sizes.s100
    },
    headerTable: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        // borderTopLeftRadius: Sizes.s10,
        borderTopStartRadius: Sizes.s10,
        borderTopEndRadius: Sizes.s10,

    },
    contentTable: {
        backgroundColor: '#cccccc',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        borderBottomLeftRadius: Sizes.s10,
        borderBottomRightRadius: Sizes.s10
    }
})
export default TableComponent;