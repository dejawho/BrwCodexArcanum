/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import EvocationStats from './EvocationStats';

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

  getEffectWithStats = (evocationStats, effect) =>{
    const stats = evocationStats.map(stat => {
      return <EvocationStats key={this.props.title + stat.type} type={stat.type} value={stat.value}/>;
    });
    const effectEvocationsStats = <View style={{flexDirection: 'row'}}>{stats}</View>;
    const splittedString = effect.split('{evocationStats}');
    if (splittedString.length === 1){
      effect = <><Text style={{fontSize: 17}}>{splittedString[0]}</Text>{effectEvocationsStats}</>;
    } else {
      effect = <>
                <Text style={{fontSize: 17}}>{splittedString[0]}</Text>
                {effectEvocationsStats}
                <Text style={{fontSize: 17}}>{splittedString[1]}</Text>
              </>;
    }
    return effect;
  }

  render() {
    const imageWidth = this.state.imageContainerWidth;

    let effect = null;
    if (this.props.evocationStats){
      effect = this.getEffectWithStats(this.props.evocationStats, this.props.effect);
    } else {
      effect = <Text style={{fontSize: 17}}>{this.props.effect}</Text>;
    }

    let reverseEffect = null;
    if (this.props.reverseEvocationStats){
      reverseEffect = this.getEffectWithStats(this.props.reverseEvocationStats, this.props.reverseEffect);
    } else {
      reverseEffect = <Text style={{fontSize: 17}}>{this.props.reverseEffect}</Text>;
    }

    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
             <View style ={{flex: 1, justifyContent: 'center'}} onLayout={this.imageContainerLayout}>
                {this.props.image ?  <Image source={this.props.image} style={{resizeMode: 'contain', width: imageWidth}}/> : null}
             </View>
            <View style={{flex: 2, flexDirection: 'column', paddingLeft: 3}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>{this.props.title}</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', fontStyle: 'italic', paddingTop: 2, paddingBottom: 2}}>Effetto</Text>
              {effect}
              <Text style={{fontSize: 17, fontWeight: 'bold', fontStyle: 'italic', paddingTop: 2, paddingBottom: 2}}>Effetto Verso</Text>
              {reverseEffect}
            </View>
      </View>
    );
  }
}



export default SchoolSpell;
