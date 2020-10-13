import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';

class TableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleInfoGuest: false,
            isModalGuest: false,
            nameGuest: '',
            countGuest: 0
        };
    }
    onChangeNameGuest = input => {
        this.setState({ nameGuest: input });
    }

    onChangeCountGuest = input => {
        this.setState({ countGuest: input });
    }

    openModal = () => {
        this.setState({
            visibleInfoGuest: !this.state.visibleInfoGuest
        });
    }

    render() {
        const { visibleInfoGuest } = this.state;

        return (
            <View style={styles.table} key={this.props.key} >
                <TouchableOpacity onPress={() => { this.openModal() }}>
                    <View style={styles.headerTable}>
                        <Text>Bar 10</Text>
                        <Text>2157:54</Text>
                        <Icon name='ellipsis-v' size={20} color='black' />
                    </View>
                    <View style={styles.contentTable}>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.user}</Text>
                        <Text>{this.props.price}</Text>
                    </View>
                </TouchableOpacity>
                <Modal visible={visibleInfoGuest}
                    transparent={true}
                    animationType="fade"
                ><View style={{ flex: 1, backgroundColor: '#00000050' }}></View></Modal>
                <Modal visible={visibleInfoGuest}
                    transparent={true}
                    animationType="fade"
                >
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.props.offModal()
                        }}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                            }}>
                            <TouchableWithoutFeedback>
                                <View style={styles.CustomModal}>
                                    <Text style={styles.title}>Information Guest</Text>
                                    <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
                                        <TextInput
                                            style={styles.input}
                                            value={this.state.nameGuest}
                                            placeholder='Khách lẻ'
                                            onChangeText={input => this.onChangeNameGuest(input)}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            value={this.state.countGuest}
                                            onChangeText={input => this.onChangeCountGuest(input)}
                                            keyboardType='numeric'
                                            maxLength={10}
                                            placeholder='0'
                                        />
                                    </View>
                                    <View
                                        style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: Sizes.s10, marginTop: Sizes.s35 }}>
                                        <TouchableOpacity onPress={this.openModal}
                                            style={{
                                                padding: Sizes.s10,
                                                backgroundColor: 'orange',
                                                borderRadius: Sizes.s30,
                                                marginRight: Sizes.s20,
                                                width: '35%',
                                                alignItems: 'center',
                                            }}>
                                            <Text style={{ color: 'white' }}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("OrderItem"); this.openModal() }}
                                            style={{
                                                padding: Sizes.s10,
                                                backgroundColor: 'blue',
                                                borderRadius: Sizes.s30,
                                                marginRight: 10,
                                                width: '35%',
                                                alignItems: 'center',
                                            }}>
                                            <Text style={{ color: 'white' }}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: {
        width: '48%',
        borderRadius: Sizes.s100,
        marginBottom: Sizes.s25
    },
    headerTable: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: Sizes.s10,
        paddingVertical: Sizes.s10,
        borderTopStartRadius: Sizes.s10,
        borderTopEndRadius: Sizes.s10,

    },
    contentTable: {
        backgroundColor: '#cccccc',
        flexDirection: 'column',
        alignItems: 'center',
        padding: Sizes.s20,
        borderBottomLeftRadius: Sizes.s10,
        borderBottomRightRadius: Sizes.s10
    },
    CustomModal: {
        backgroundColor: 'white',
        width: '70%',
        alignSelf: 'center',
        borderWidth: 0.5
    },
    input: {
        borderColor: "gray",
        borderRadius: Sizes.s20,
        borderWidth: 0.1,
        height: 50,
        paddingHorizontal: 25,
        fontSize: 18,
        margin: 10,

    },
    title: {
        fontSize: Sizes.s20,
        fontWeight: 'bold',
        padding: Sizes.s15,
        borderColor: '#EFEFEF',

    }
})
export default TableComponent;