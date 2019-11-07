/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import Image from 'react-native-scalable-image';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


const REFERENCE_1 = require('../assets/magicstructure.png');

class Reference extends React.Component {

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
          <SafeAreaView style={[{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5 }]}>
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1 }} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <ReactNativeZoomableView
            maxZoom={2.5}
            minZoom={1.0}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
          >
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView>
                <Image width={this.state.imageContainerWidth} source={REFERENCE_1} />
              </ScrollView>
            </SafeAreaView>
          </ReactNativeZoomableView>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default Reference;