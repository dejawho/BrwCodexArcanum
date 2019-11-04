/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Image from 'react-native-scalable-image';
import SchoolList from './SchoolList';
import ListSchoolSpell from './ListSchoolSpell';
import SchoolDescription from './SchoolDescription';
import MagesDescription from './MageDescription';

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
    isSchoolDescriptionOpen: false,
    isMagesDescriptionOpen: false,
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

  showSchoolDescription = () => {
    this.setState({isSchoolDescriptionOpen: true});
  }

  showMagesDescription = () => {
    this.setState({isMagesDescriptionOpen: true});
  }

  schoolSelected = (schoolName) => {
    if (schoolName === null){
      this.setState({isSchoolSelectionOpen: false});
    } else {
      this.setState({isSchoolSelectionOpen: false, showSchoolName: schoolName});
    }
  }

  doSchoolListBack = () => {
    this.setState({isSchoolSelectionOpen: false, showSchoolName: null});
  }

  doSchoolDescriptionBack = () => {
    this.setState({isSchoolDescriptionOpen: false} );
  }

  doMagesDescriptionBack = () => {
    this.setState({isMagesDescriptionOpen: false} );
  }

  render() {
    const imageHeight = (this.state.imageContainerHeight - 50) / 4;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
          {this.state.isSchoolSelectionOpen ? <SchoolList isSchoolOpen={this.state.isSchoolSelectionOpen} itemSelected={this.schoolSelected}/> : null}
          {this.state.showSchoolName ? <ListSchoolSpell isSchoolListOpen={this.state.showSchoolName !== null} schoolName={this.state.showSchoolName} doBack={this.doSchoolListBack}/> : null}
          {this.state.isSchoolDescriptionOpen ? <SchoolDescription isOpen={this.state.isSchoolDescriptionOpen} doBack={this.doSchoolDescriptionBack}/> : null}
          {this.state.isMagesDescriptionOpen ? <MagesDescription isOpen={this.state.isMagesDescriptionOpen} doBack={this.doMagesDescriptionBack}/> : null}
          <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }} onLayout={this.imageContainerLayout}>
            <Image height={imageHeight} source={grimoryImage} onPress={this.showSchoolSelection}/>
            <Image height={imageHeight} source={schoolImage} onPress={this.showSchoolDescription}/>
            <Image height={imageHeight} source={magesImage} onPress={this.showMagesDescription}/>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Image height={imageHeight} width={100}  source={roomImage} />
              <Text style={{width: 50}}/>
              <Image height={imageHeight} width={100} source={referenceImage} />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}



export default Home;
