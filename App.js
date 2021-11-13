import React, {Component} from 'react';
import {Text, View, Image,Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
    input: '',
    cons: 0,
    vowel: 0,
    charc: 0,
    }
  }
analyzeWord = () => {
   let input = this.state.input;
   let cons = 0;
   let vowel=0;
   let charc=0;
   let inp= '';
charc = input.length;
inp = input.split('');
for (let i=0; i <charc ;i++ ) {
  if((inp[i].match(/[aeiouAEIOU]/)))
  {
    vowel++;
  }
  else if ((inp[i].match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)))
  {
    cons++;
  }
  this.setState({charc:charc, vowel:vowel,cons:cons})
}
    
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Image
        style={Styles.logo}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      />

  

       <Text style={Styles.Header}> World Analyzer</Text>
       <TextInput style={Styles.input} onChangeText={(input) => this.setState({input})}  placeholder="Text input" />
      <Button  onPress={this.analyzeWord}  title="Analyze"  color="#841584" />
      <Text></Text>
      <Text style={Styles.Text} >Words                               :  {this.state.input}</Text>
       <Text style={Styles.Text} >No of Consonants         :  {this.state.cons}</Text>
       <Text style={Styles.Text} >No of Vowels                 :  {this.state.vowel}</Text>
       <Text style={Styles.Text} >No of Characters           :  {this.state.charc}</Text>
       </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  Text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});