/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import Image from 'react-native-scalable-image';
import SchoolList from './SchoolList';

const grimoryImage = require('../assets/grimoryImage.png');

const schoolImage = require('../assets/schoolImage.png');

const magesImage = require('../assets/magesImage.png');

const referenceImage = require('../assets/referenceImage.png');

const roomImage = require('../assets/roomImage.png');

class Home extends React.Component {

  state = {
    imageContainerWidth: 0,
    imageContainerHeight: 0,
    isSchoolSelectionOpen: false,
    showSchoolName: null,
  }

  imageContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    if (this.state.imageContainerWidth !== width || this.state.imageContainerHeight !== height) {
      this.setState({ imageContainerHeight: height, imageContainerWidth: width });
    }
  }

  showSchoolSelection = () => {
    this.setState({isSchoolSelectionOpen: true});
  }

  schoolSelected = (schoolName) => {
    if (schoolName === null){
      this.setState({isSchoolSelectionOpen: false});
    } else {
      this.setState({isSchoolSelectionOpen: false, showSchoolName: schoolName});
    }
  }

  render() {
    const imageHeight = (this.state.imageContainerHeight - 50) / 4;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
          <SchoolList isSchoolOpen={this.state.isSchoolSelectionOpen} itemSelected={this.addItemCallback}/>
          <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'space-between', paddingTop: 10 }} onLayout={this.imageContainerLayout}>
            <Image height={imageHeight} source={grimoryImage} onPress={this.showSchoolSelection}/>
            <Image height={imageHeight} source={schoolImage} />
            <Image height={imageHeight} source={magesImage} />
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Image height={imageHeight} source={roomImage} />
              <Image height={imageHeight} source={referenceImage} />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}



export default Home;
