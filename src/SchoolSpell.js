/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-scalable-image';

const fff = require('../assets/grimoryImage.png');


class SchoolSpell extends React.Component {

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
    const imageWidth = (this.state.imageContainerWidth - 50) / 4;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image width={imageWidth} source={fff} style={{flex: 1, justifyContent: 'center'}}/>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={{fontSize: 30, fontWeight: 'Bold'}}>{this.props.title}</Text>
              <Text style={{fontSize: 15, fontWeight: 'Bold'}}>Effetto</Text>
              <Text style={{fontSize: 15}}>{this.props.effect}</Text>
              <Text style={{fontSize: 15, fontWeight: 'Bold'}}>Effetto Verso</Text>
              <Text style={{fontSize: 15}}>{this.props.reverseEffect}</Text>
            </View>
      </View>
    );
  }
}



export default SchoolSpell;
