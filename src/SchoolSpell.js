/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';

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
    const imageWidth = (this.state.imageContainerWidth - 50) / 3;
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
             <View style ={{flex: 1, justifyContent: 'center'}}>
             {this.props.image ?  <Image source={this.props.image} style={{resizeMode: 'contain', width: imageWidth}}/> : null}
             </View>
            <View style={{flex: 2, flexDirection: 'column', paddingLeft: 3}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>{this.props.title}</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Effetto</Text>
              <Text style={{fontSize: 17}}>{this.props.effect}</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Effetto Verso</Text>
              <Text style={{fontSize: 17}}>{this.props.reverseEffect}</Text>
            </View>
      </View>
    );
  }
}



export default SchoolSpell;
