/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COSPIRATION_DATA} from './data/cospiration';
import {DESTRUCTION_DATA} from './data/destruction';
import {ILLUSION_DATA} from './data/illusion';
import {DIVINATION_DATA} from './data/divination';
import {NECROMANCY_DATA} from './data/necromancy';
import {TRASMUTATION_DATA} from './data/trasmutation';
import {FORGOTTEN_DATA} from './data/forgotten';
import {MYTHOLOGIC_DATA} from './data/mythologic';
import SchoolSpell from './SchoolSpell';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {connect} from 'react-redux';

class ListSchoolSpell extends React.Component {

  flatListRef = null;

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


  getData = () => {
    switch (this.props.schoolName ) {
      case 'Cospirazione':
        return COSPIRATION_DATA;
      case 'Distruzione':
        return DESTRUCTION_DATA;
      case 'Divinazione':
        return DIVINATION_DATA;
      case 'Illusione':
        return ILLUSION_DATA;
      case 'Necromanzia':
        return NECROMANCY_DATA;
      case 'Trasmutazione':
        return TRASMUTATION_DATA;
      case 'Dimenticata':
        return FORGOTTEN_DATA;
      case 'Mitologica':
        return MYTHOLOGIC_DATA;
      default:
        return undefined;
    }
  }

  renderItem = ({item, index}) => {
    return <View style={{flex: 1, backgroundColor: (index % 2 === 0 ? 'white' : 'lightgray')}}>
                <SchoolSpell data={item}/>
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
            <View style={{ flex: 1, alignItems: 'stretch' }}>
              <SafeAreaView style={{flex:1}}>
              <FlatList
                  ref={(ref) => { this.flatListRef = ref; }}
                  data={this.getData()}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.title}
                  initialNumToRender={4}
                />
              </SafeAreaView>
            </View>
          </View>
      </AndroidBackHandler>
    );
  }
}

const mapStateToProps = state => {
  return {
    schoolName: state.mainReducer.spellSchool,
  };
};

export default connect(mapStateToProps)(ListSchoolSpell);
