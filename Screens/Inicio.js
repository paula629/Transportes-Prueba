import React from 'react'
import {View,Button,Text, StyleSheet, Image} from 'react-native'


 
export default function Inicio({navigation}){

return (
<View style={styles.contenedor}>
     
    <Text style={styles.texto}> Microbuses Chillan</Text>
    <Image
    source= {require('../assets/logo.png')}
    />
    <Button title='Empezar' 
    onPress={()=> navigation.navigate('buscador')}></Button>
    
</View>
)
}
const styles= StyleSheet.create({
contenedor: {flex: 1 , justifyContent:'center', alignItems:'center', backgroundColor: 'aliceblue'},
texto: {fontSize:30},

})