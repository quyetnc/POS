import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TransactionItem = props => {
    const currencyFormat = (num) => {
        if (num == 0) {
            return '';
        } else {
            return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
    };
    const decimalHoursToString = (hoursDecimal) => {
        const numMinutes = hoursDecimal % 60;
        const numHours = (hoursDecimal - numMinutes) / 60;
        if (hoursDecimal == 0) {
            return '';
        } else {
            return numHours + ':' + numMinutes;
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: Sizes.s60, justifyContent: 'center', marginLeft: 10 }}>
                    <Icon name='user-circle' size={Sizes.s35} color={props.color} />
                </View>
                <View style={styles.transaction}>
                    <Text style={{ fontWeight: 'bold' }}>{props.GUEST_NAME}</Text>
                    <Text>{props.CHECK_NO}</Text>
                    <Text>{decimalHoursToString(props.MINUTE_ORDER)}</Text>
                </View>
            </View>
            <View>
                <Text style={{ textAlign: 'right' }}>{props.NAME}</Text>
                <Text style={{ textAlign: 'right' }}>{props.COVERS}</Text>
                <Text>{currencyFormat(props.TOTAL)}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    transaction: {

    }
});
export default TransactionItem;