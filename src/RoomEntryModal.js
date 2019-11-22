import React, { Component } from 'react';
import { Modal, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import RoomEntry from './RoomEntry';
import Icon from 'react-native-vector-icons/Ionicons';

class RoomEntryModal extends Component {

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.item !== null}
                onRequestClose={() => {
                    this.props.closeModal();
                }}>
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <SafeAreaView style={[{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5 }]}>
                        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={this.props.closeModal}>
                            <Icon size={40} style={{ paddingLeft: 10, flex: 1 }} name="ios-backspace" color="grey" />
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                    <View style={{ backgroundColor: 'lightgray', flex: 1 }}>
                        <RoomEntry room={this.props.item} />
                    </View>
                </View>
            </Modal>
        );
    }
}

export default RoomEntryModal;