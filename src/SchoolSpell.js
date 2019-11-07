/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import EvocationStats from './EvocationStats';
import ScalableImage from 'react-native-scalable-image';


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
      return <EvocationStats key={this.props.data.title + stat.type} type={stat.type} value={stat.value}/>;
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
    if (this.props.data.evocationStats){
      effect = this.getEffectWithStats(this.props.data.evocationStats, this.props.data.effect);
    } else {
      effect = <Text style={{fontSize: 17}}>{this.props.data.effect}</Text>;
    }

    let reverseEffect = null;
    if (this.props.data.reverseEvocationStats){
      reverseEffect = this.getEffectWithStats(this.props.data.reverseEvocationStats, this.props.data.reverseEffect);
    } else {
      reverseEffect = <Text style={{fontSize: 17}}>{this.props.data.reverseEffect}</Text>;
    }

    let set = null;
    if (this.props.data.set){
      set = <View style={{flexDirection: 'row', paddingTop: 2, paddingBottom: 2}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', fontStyle: 'italic', paddingRight: 5}}>Espansione:</Text>
              <Text style={{fontSize: 17}}>{this.props.data.set}</Text>
            </View>;
    }
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
             <View style ={{flex: 1, justifyContent: 'center'}} onLayout={this.imageContainerLayout}>
                {this.props.data.image ?  <ScalableImage source={this.props.data.image} width={imageWidth}/> : null}
             </View>
            <View style={{flex: 2, flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>{this.props.data.title}</Text>
              {set}
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
