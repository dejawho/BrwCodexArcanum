/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import Image from 'react-native-scalable-image';


const REFERENCE_1 = require('../assets/room_effect01.jpg');

const REFERENCE_2 = require('../assets/room_effect02.jpg');

class RoomsEffects extends React.Component {

  state = {
    imageContainerWidth: 0,
    imageContainerHeight: 0,
  }

  onBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  imageContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    if (this.state.imageContainerWidth !== width || this.state.imageContainerHeight !== height) {
      this.setState({ imageContainerHeight: height, imageContainerWidth: width });
    }
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBack}>
        <View style={{ flex: 1, backgroundColor: 'black' }} onLayout={this.imageContainerLayout}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView>
              <Image width={this.state.imageContainerWidth} source={REFERENCE_1}/>
              <Image width={this.state.imageContainerWidth} source={REFERENCE_2}/>
            </ScrollView>
          </SafeAreaView>
        </View>
        </AndroidBackHandler>
    );
  }
}

export default RoomsEffects;