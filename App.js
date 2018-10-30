import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.posicao = this.posicao.bind(this)
  }

  posicao(){

    navigator.geolocation.getCurrentPosition((data)=>{
      //alert('Pegou a localização')
      alert(JSON.stringify(data))
    }
    
    )

  }
  render(){
    return(
      <View style={styles.container}>
        <Button title="Pegar posição" onPress={this.posicao} />
        <Button title="Monitorar Posição" onPress={this.posicao} />
      </View>
    )
  }
 
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})


