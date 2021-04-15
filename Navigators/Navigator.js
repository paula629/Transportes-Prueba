import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Inicio from '../Screens/Inicio'
import Buscador from '../Screens/Buscador'

const Stack = createStackNavigator()

export default function Navigator(){

    return (
       
     <Stack.Navigator>

         <Stack.Screen
             name= 'inicio'
             component = {Inicio}
            
         />
            <Stack.Screen
             name= 'buscador'
             component = {Buscador}
            
         />

     </Stack.Navigator>
       
    );

};