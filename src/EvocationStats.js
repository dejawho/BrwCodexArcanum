/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image from 'react-native-scalable-image';
import { EVOCATIONS_DATA } from './data/mages';

class EvocationStats extends React.Component {

    getImage = () => {
        if (this.props.type === 'speed') {
            return EVOCATIONS_DATA[0].image;
        } else if (this.props.type === 'strength') {
            return EVOCATIONS_DATA[1].image;
        } else if (this.props.type === 'health') {
            return EVOCATIONS_DATA[2].image;
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingRight: 10, paddingBottom: 3, paddingTop: 3, justifyContent: 'center' }}>
                <Image height={40} source={this.getImage()}/>
                <Text style={[{fontSize: 30, fontWeight: 'bold', textAlignVertical: 'center'}, {paddingLeft: 5}]}>{this.props.value}</Text>
            </View>
        );
    }
}

export default EvocationStats;
