/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {ROOMS_DATA} from './data/rooms';
import RoomEntry from './RoomEntry';


class RoomsEffects extends React.Component {

  onBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  renderItem = ({item, index}) => {
    return <View style={{flex: 1, backgroundColor: (index % 2 === 0 ? 'white' : 'lightgray')}}>
                <RoomEntry room={item}/>
            </View>;
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBack}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, alignItems: 'stretch' }}>
              <SafeAreaView style={{flex:1}}>
              <FlatList
                  data={ROOMS_DATA}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.name}
                  initialNumToRender={8}
                />
              </SafeAreaView>
            </View>
        </View>
        </AndroidBackHandler>
    );
  }
}

export default RoomsEffects;
