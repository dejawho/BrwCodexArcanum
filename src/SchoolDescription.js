/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScalableImage from 'react-native-scalable-image';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {SCHOOLS_DESCRIPTIONS_DATA} from './data/schools';

const SEPARATOR = require('../assets/div.png');

class SchoolDescription extends React.Component {

  doBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <Image source={SEPARATOR} style={{resizeMode: 'stretch', width: '100%', height: 15}}/>
    );
  };


  renderItem = ({item, index}) => {
    return (<View style={{flex: 1, marginVertical: 6, marginLeft: 10, marginRight: 10 }}>
        <ScalableImage source={item.image} width={100} style={{resizeMode: 'contain', alignSelf: 'center'}}/>
        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>{item.name}</Text>
        <Text style={{alignSelf: 'stretch', fontSize: 18}}>{item.text}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Elementi chiave delle Magie: {item.keyElements}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Affinità con le altre scuole: {item.affinities}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Difficoltà: {item.difficulty}</Text>
    </View>);
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.doBack}>
        <View style={{ flex: 1, backgroundColor: 'black'}}>
            <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
              <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.doBack()}>
                <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
              </TouchableWithoutFeedback>
            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: 'white'}}>
              <SafeAreaView style={{flex:1}}>
              <FlatList
                  data={SCHOOLS_DESCRIPTIONS_DATA}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.name}
                  initialNumToRender={3}
                  ItemSeparatorComponent= {this.FlatListItemSeparator}
                />
              </SafeAreaView>
            </View>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default SchoolDescription;
