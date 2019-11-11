/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SchoolSpell from './SchoolSpell';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {connect} from 'react-redux';
import {getSpellsById} from './data/schools';

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
                  data={getSpellsById(this.props.schoolName)}
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
