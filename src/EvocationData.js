/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback,ScrollView } from 'react-native';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import ScalableImage from 'react-native-scalable-image';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import {EVOCATION_DATA} from './data/evocations';

class EvocationData extends React.Component {

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

  onBack = () => {
    this.props.navigation.navigate('ListSchoolSpell');
    return true;
  }

  render() {
    const dataInfo = EVOCATION_DATA.find((element) => {
      return element.name === this.props.evocationName;
    });

    return (
      <AndroidBackHandler onBackPress={this.onBack}>
      <View style={{ flex: 1, backgroundColor: 'black' }} onLayout={this.imageContainerLayout}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgray', paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
              <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>{dataInfo.label}</Text>
              <ScrollView>
                <ScalableImage width={this.state.imageContainerWidth - 20} source={dataInfo.image} />
                {dataInfo.set ?
                      <View style={{flexDirection: 'row', paddingTop: 10}}>
                         <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Espansione:</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 3}}>{dataInfo.set}</Text>
                      </View> : null}
                {dataInfo.effect ?
                      <View style={{flexDirection: 'row', paddingTop: 10}}>
                         <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Effetto:</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', flexWrap: 'wrap', flex: 1, marginLeft: 3}}>{dataInfo.effect}</Text>
                      </View> : null}
              </ScrollView>
            </SafeAreaView>
      </View>
      </AndroidBackHandler>
    );
  }
}

const mapStateToProps = state => {
  return {
    evocationName: state.mainReducer.evocationName,
  };
};

export default withNavigation(connect(mapStateToProps)(EvocationData));
