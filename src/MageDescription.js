/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MAGES_DATA } from './data/mages';
import ScalableImage from 'react-native-scalable-image';
import SchoolSpell from './SchoolSpell';
import { COSPIRATION_DESCRIPTION } from './data/cospiration';
import { DESTRUCTION_DESCRIPTION } from './data/destruction';
import { DIVINATION_DESCRIPTION } from './data/divination';
import { ILLUSION_DESCRIPTION } from './data/illusion';
import { NECROMANCY_DESCRIPTION } from './data/necromancy';
import { TRASMUTATION_DESCRIPTION } from './data/trasmutation';
import { FORGOTTEN_DESCRIPTION } from './data/forgotten';
import { MYTHOLOGIC_DESCRIPTION } from './data/mythologic';
import {AndroidBackHandler} from 'react-navigation-backhandler';

const SEPARATOR = require('../assets/div.png');

class MagesDescription extends React.Component {

  doBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  getSchoolImage = (schoolName) => {
    switch (schoolName) {
      case 'divination':
        return DIVINATION_DESCRIPTION.image;
      case 'cospiration':
        return COSPIRATION_DESCRIPTION.image;
      case 'destruction':
        return DESTRUCTION_DESCRIPTION.image;
      case 'illusion':
        return ILLUSION_DESCRIPTION.image;
      case 'necromancy':
        return NECROMANCY_DESCRIPTION.image;
      case 'trasmutation':
        return TRASMUTATION_DESCRIPTION.image;
      case 'forgotten':
        return FORGOTTEN_DESCRIPTION.image;
      case 'mythologic':
        return MYTHOLOGIC_DESCRIPTION.image;
      default:
        return undefined;
    }
  }

  getSchoolName = (schoolName) => {
    switch (schoolName) {
      case 'divination':
        return DIVINATION_DESCRIPTION.name;
      case 'cospiration':
        return COSPIRATION_DESCRIPTION.name;
      case 'destruction':
        return DESTRUCTION_DESCRIPTION.name;
      case 'illusion':
        return ILLUSION_DESCRIPTION.name;
      case 'necromancy':
        return NECROMANCY_DESCRIPTION.name;
      case 'trasmutation':
        return TRASMUTATION_DESCRIPTION.name;
      case 'forgotten':
        return FORGOTTEN_DESCRIPTION.name;
      case 'mythologic':
        return MYTHOLOGIC_DESCRIPTION.name;
      default:
        return undefined;
    }
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <Image source={SEPARATOR} style={{resizeMode: 'stretch', width: '100%', height: 15}}/>
    );
  };


  renderItem = ({ item, index }) => {
    const spellData = {title: item.personalSpell,
                       set: item.set,
                       effect: item.personalSpellEffect,
                       reverseEffect: item.personalSpellReverseEffect,
                       image: item.personalSpellImage,
                       evocationStats: item.spellEvocationStats,
                       reverseEvocationStats: item.reverseSpellEvocationStats,
                      };
    return (<View style={{ flex: 1, marginVertical: 3, marginLeft: 10, marginRight: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>{item.name}</Text>
      <ScalableImage source={item.image} width={200} style={{ resizeMode: 'contain', alignSelf: 'center' }} />
      <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Magia Personale</Text>
      <View style={{ alignSelf: 'stretch' }}>
        <SchoolSpell data={spellData}/>
      </View>
      <ScalableImage source={this.getSchoolImage(item.favouriteSchool)} width={120} style={{ resizeMode: 'contain', alignSelf: 'center' }} />
      <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>{this.getSchoolName(item.favouriteSchool)}</Text>
    </View>);
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.doBack}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <SafeAreaView style={[{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5 }]}>
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.doBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1 }} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={MAGES_DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.name}
                ItemSeparatorComponent= {this.FlatListItemSeparator}
              />
            </SafeAreaView>
          </View>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default MagesDescription;
