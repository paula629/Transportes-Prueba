import React from 'react'
import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';


export default function Buscador({ navigation }) {
    return (
        <View style={styles.contenedor}>

            <View style={styles.header}>
                <Image
                    source={require('../assets/mapaaa.png')}
                    style={styles.mapa}
                />
            </View>

            <View style={styles.bodytitulo}>
                <Text style={{ fontSize: 25 }}> ¿Qué deseas buscar?</Text>

            </View>

            <View style={styles.bodydireccion}>
                <Text style={{ fontSize: 20, marginLeft:11}}> Buscar por dirección</Text>
                <TextInput placeholder="Direccion" placeholderTextColor="white"
                    maxLength={30}
                    style={{ borderWidth: 3, borderColor: 'black', padding: 8, marginTop: 8, color: 'blue',marginLeft:20, marginRight:20 }}
                ></TextInput>
            

            </View>
            <View style={styles.bodylugar}>
                <Text style={{ fontSize: 20, marginLeft:11, alignItems:'center'}}> Buscar por lugar de interés </Text>
                <TextInput placeholder="Lugar" placeholderTextColor="white"
                    maxLength={30}
                    style={{ borderWidth: 3, borderColor: 'black', padding: 8, marginTop: 8,marginLeft:20, marginRight:20 }}
                ></TextInput>
               
            </View>
            <View style={styles.bodymicrobus}>
                <Text style={{ fontSize: 20,marginLeft:11 }}> Buscar por Microbus</Text>
                <TextInput placeholder="Microbus" placeholderTextColor="white"
                    maxLength={30} 
                    style={{ borderWidth: 3, borderColor: 'black', padding: 8, marginTop: 8, marginLeft:20, marginRight:20 }}
                ></TextInput>
                <TouchableOpacity
                    style={styles.button}

                >
                    <Text style={{ color: 'black', fontSize: 15 }}>Buscar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'aliceblue'
    },
    header: {
        flex: 2

    },
    bodytitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue'
    },
    mapa: {
        width: 400,
        height: 200

    },
    bodydireccion: {
        flex: 1
    },
    bodylugar: {
        flex: 1
    },
    bodymicrobus: {
        flex: 2
    },
    button: {

        justifyContent: 'center',
        alignItems: "center",
        marginTop: 8,
        marginLeft: 120,
        padding: 10,
        width: 100,
        height: 40,
        backgroundColor: `#add8e6`

    }

});