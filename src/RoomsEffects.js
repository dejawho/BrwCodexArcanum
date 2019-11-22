/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, SafeAreaView, TouchableWithoutFeedback, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {ROOMS_DATA} from './data/rooms';
import RoomEntryModal from './RoomEntryModal';


class RoomsEffects extends React.Component {

  state = {
    currentRoom : null,
  }

  onBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  renderItem = ({item, index}) => {
    return ;
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };

  onItemSelected = (item) => {
    this.setState({currentRoom: item})
  }

  closeModal = () => {
    this.onItemSelected(null);
  }

  render() {
    return (
      <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
      <RoomEntryModal item={this.state.currentRoom} closeModal={this.closeModal}/>
      <AndroidBackHandler onBackPress={this.onBack}>
        <View style={{ flex: 1}}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, alignItems: 'stretch' }}>
              <SafeAreaView style={{flex:1}}>
              <FlatList
                  data={ROOMS_DATA.sort((el1, el2) => {return el1.name.localeCompare(el2.name);})}
                  renderItem={({ item }) => (<TouchableWithoutFeedback onPress={() => this.itemSelected(item)}>
                  <View style={{marginVertical:3, flexDirection: 'row', alignItems: 'center'}}>
                    <Text onPress={() => this.onItemSelected(item)} style={{fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 10}}>
                      {item.name}
                    </Text>
                    {item.color ? <View style={{width: 15, height: 15, backgroundColor: item.color, marginLeft: 10}}/> : null}
                  </View>
                </TouchableWithoutFeedback>)}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                  keyExtractor={item => item.name}
                />
              </SafeAreaView>
            </View>
        </View>
        </AndroidBackHandler>
        </ImageBackground>
    );
  }
}

export default RoomsEffects;
