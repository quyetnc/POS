import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/AntDesign'
import { objectIsNull, arrayIsEmpty, stringIsEmpty } from '@dungdang/react-native-basic/src/Functions';
import TransactionItem from './TransactionItem';

class FindTransaction extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
            refreshing: false
        }
    }

    async componentDidMount() {
        await this.props.onGetFindTransactionAction();

    }

    async componentDidUpdate(prevProps) {
        if (prevProps.getFindTransactionReducers !== this.props.getFindTransactionReducers) {
            if (!objectIsNull(this.props.getFindTransactionReducers)) {
                await this.setState({
                    data: this.props.getFindTransactionReducers,
                    isLoading: true,
                    refreshing: false
                })

            }
        }
    }
    async handleRefresh() {
        this.setState({ refreshing: true });
        this.props.onGetFindTransactionAction();

    }
    renderItem = ({ item, index }) => (
        <TransactionItem
            CHECK_ID={item.CHECK_ID}
            NAME={item.NAME}
            CHECK_NO={item.CHECK_NO}
            GUEST_NAME={item.GUEST_NAME}
            COVERS={item.COVERS}
            SUM_DIS={item.SUM_DIS}
            SUM_TAX={item.SUM_TAX}
            SUM_AMOUNT={item.SUM_AMOUNT}
            USING_CASHIER_ID={item.USING_CASHIER_ID}
            TOTAL={item.TOTAL}
            STATUS={item.STATUS}
            MINUTE_ORDER={item.MINUTE_ORDER}
        />
    )

    render() {
        const { data, isLoading } = this.state;

        const showContent = isLoading === true ? (<FlatList
            onRefresh={() => this.handleRefresh()}
            refreshing={this.state.refreshing}
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={this.renderItem}

        />) : (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#1890FF" /></View>)
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0, padding: Sizes.s15 }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='left' size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.titile}>Find Transaction</Text>
                </SafeAreaView>
                {showContent}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Sizes.s100,
        backgroundColor: '#1890FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titile: {
        color: '#fff',
        fontSize: Sizes.h32,
        fontWeight: 'bold',
    },

})

export default FindTransaction;