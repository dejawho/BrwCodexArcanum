/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Image from 'react-native-scalable-image';

const grimoryImage = require('../assets/grimoryImage.png');

const schoolImage = require('../assets/schoolImage.png');

const magesImage = require('../assets/magesImage.png');

const referenceImage = require('../assets/referenceImage.png');

const roomImage = require('../assets/roomImage.png');

class Home extends React.Component {

  state = {
    imageContainerWidth: 0,
    imageContainerHeight: 0,
  }

  imageContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    if (this.state.imageContainerWidth !== width || this.state.imageContainerHeight !== height) {
      this.setState({ imageContainerHeight: height, imageContainerWidth: width });
    }
  }

  showSchoolSelection = () => {
    this.props.navigation.navigate('SchoolList');
  }

  showSchoolDescription = () => {
    this.props.navigation.navigate('SchoolDescription');
  }

  showMagesDescription = () => {
    this.props.navigation.navigate('Mages');
  }

  showRoomEffects = () => {
    this.props.navigation.navigate('RoomsEffects');
  }

  showReference = () => {
    this.props.navigation.navigate('Reference');
  }

  render() {
    const imageHeight = (this.state.imageContainerHeight - 50) / 4;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }} onLayout={this.imageContainerLayout}>
            <Image height={imageHeight} source={grimoryImage} onPress={this.showSchoolSelection}/>
            <Image height={imageHeight} source={schoolImage} onPress={this.showSchoolDescription}/>
            <Image height={imageHeight} source={magesImage} onPress={this.showMagesDescription}/>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Image height={imageHeight} width={100}  source={roomImage} onPress={this.showRoomEffects}/>
              <Text style={{width: 50}}/>
              <Image height={imageHeight} width={100} source={referenceImage} onPress={this.showReference}/>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}



export default Home;
