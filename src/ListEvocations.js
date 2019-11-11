/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, SafeAreaView, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {EVOCATION_DATA} from './data/evocations';
import ScalableImage from 'react-native-scalable-image';

class ListEvocations extends React.Component {

  flatListRef = null;

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


  doBack = () => {
    this.props.navigation.navigate('SchoolList');
    return true;
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      if (this.flatListRef !== null) {
        this.flatListRef.scrollToOffset({ animated: false, offset: 0 });
      }
    });
  }

  componentWillUnmount = () => {
    // Remove the event listener
    this.focusListener.remove();
  }

  renderItem = ({item, index}) => {
    return <View style={{flex: 1, backgroundColor: (index % 2 === 0 ? 'white' : 'lightgray')}}>
             <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>{item.label}</Text>
             <View style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>
              <ScalableImage width={this.state.imageContainerWidth - 20} source={item.image} />
                  {item.set ?
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                          <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Espansione:</Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 3}}>{item.set}</Text>
                        </View> : null}
                  {item.effect ?
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                          <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Effetto:</Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold', flexWrap: 'wrap', flex: 1, marginLeft: 3}}>{item.effect}</Text>
                        </View> : null}
              </View>
            </View>;
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.doBack}>
         <View style={{ flex: 1, backgroundColor: 'black' }}>
            <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
              <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.doBack()}>
                <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
              </TouchableWithoutFeedback>
            </SafeAreaView>
            <View style={{ flex: 1, alignItems: 'stretch' }} onLayout={this.imageContainerLayout}>
              <SafeAreaView style={{flex:1}}>
              <FlatList
                  ref={(ref) => { this.flatListRef = ref; }}
                  data={EVOCATION_DATA}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.name}
                  initialNumToRender={3}
                />
              </SafeAreaView>
            </View>
          </View>
      </AndroidBackHandler>
    );
  }
}

export default ListEvocations;
