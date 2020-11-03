import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import images from '../../res/images/index';


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

                <Image source={images.ic_custom} resizeMode='contain' style={{ width: Sizes.s100, height: Sizes.s200, marginRight: Sizes.s25 }} />

                <View style={styles.transaction}>
                    <View style={{ marginTop: Sizes.s20 }}>
                        <Text style={{ fontWeight: 'bold' }}>{props.GUEST_NAME}</Text>
                        <Text style={{ textAlign: 'left', paddingVertical: Sizes.s10 }}>Bàn {props.NAME}</Text>
                        <Text style={{ textAlign: 'left' }}>{props.COVERS} người</Text>
                    </View>
                    <View style={{ marginTop: Sizes.s20 }}>
                        <Text style={{ textAlign: 'right' }}>{decimalHoursToString(props.MINUTE_ORDER)}</Text>
                        <Text style={{ paddingVertical: Sizes.s10, textAlign: 'right' }}>{props.CHECK_NO}</Text>
                        <Text style={{ color: 'red', textAlign: 'right' }}>{currencyFormat(props.TOTAL)}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,

    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        width: '83%',

    }
});
export default TransactionItem;