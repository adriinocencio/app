import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    padding: 10,
  },
  Button: {
    margin: 10,
    padding: 10,
  },
});


/* TELA INICIAL */
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Escolha um local:</Text>
      <Button title="Bancos" onPress={() => navigation.navigate('Bancos')} />
      <Button title="Biblioteca" onPress={() => navigation.navigate('Biblioteca')} />
      <Button title="Cantina" onPress={() => navigation.navigate('Cantina')} />
      <Button title="Grama" onPress={() => navigation.navigate('Grama')} />
      <Button title="Mesas" onPress={() => navigation.navigate('Mesas')} />
    </View>
  );
}

/* TELA BANCOS */
function BancosScreen({ navigation }) {
  return (
    <View>
      <Image 
        source={{ uri: 'https://github.com/adriinocencio/app/blob/master/assets/WhatsApp%20Image%202024-02-29%20at%2012.44.08.jpeg?raw=true' }}
        style={{ width: 200, height: 200 }} // Defina as dimensões da imagem
      />
      <Text>Bancos</Text>
      <Text>A Adrielly escolheu esse lugar porque tem sombra, bate um ventinho gostoso e tem bastante árvores.</Text>
      <Text>Escolha outro local:</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Biblioteca" onPress={() => navigation.navigate('Biblioteca')} />
      <Button title="Cantina" onPress={() => navigation.navigate('Cantina')} />
      <Button title="Grama" onPress={() => navigation.navigate('Grama')} />
      <Button title="Mesas" onPress={() => navigation.navigate('Mesas')} />
    </View>
  );
}

/* TELA BIBLIOTECA */
function BibliotecaScreen({ navigation }) {
  return (
    <View>
      <Image 
        source={{ uri: 'https://github.com/adriinocencio/app/blob/master/assets/WhatsApp%20Image%202024-02-29%20at%2012.42.56.jpeg?raw=true' }}
        style={{ width: 200, height: 200 }} // Defina as dimensões da imagem
      />
      <Text>Biblioteca</Text>
      <Text>O Ryan escolheu esse lugar porque é onde jogam ludo e se divertem com os amigos.</Text>
      <Text>Escolha outro local:</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Bancos" onPress={() => navigation.navigate('Bancos')} />
      <Button title="Cantina" onPress={() => navigation.navigate('Cantina')} />
      <Button title="Grama" onPress={() => navigation.navigate('Grama')} />
      <Button title="Mesas" onPress={() => navigation.navigate('Mesas')} />
    </View>
  );
}

/* TELA CANTINA */
function CantinaScreen({ navigation }) {
  return (
    <View>
      <Image 
        source={{ uri: 'https://github.com/adriinocencio/app/blob/master/assets/WhatsApp%20Image%202024-02-29%20at%2012.45.46%20(1).jpg?raw=true' }}
        style={{ width: 200, height: 200 }} // Defina as dimensões da imagem
      />
      <Text>Cantina</Text>
      <Text>O Enzo escolheu esse lugar porque ele gosta da comida de lá.</Text>
      <Text>Escolha outro local:</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Bancos" onPress={() => navigation.navigate('Bancos')} />
      <Button title="Biblioteca" onPress={() => navigation.navigate('Biblioteca')} />
      <Button title="Grama" onPress={() => navigation.navigate('Grama')} />
      <Button title="Mesas" onPress={() => navigation.navigate('Mesas')} />
    </View>
  );
}

/* TELA GRAMA */
function GramaScreen({ navigation }) {
  return (
    <View>
      <Image 
        source={{ uri: 'https://github.com/adriinocencio/app/blob/master/assets/WhatsApp%20Image%202024-02-29%20at%2012.45.46.jpeg?raw=true' }}
        style={{ width: 200, height: 200 }} // Defina as dimensões da imagem
      />
      <Text>Graminha</Text>
      <Text>A Adrielly escolheu esse lugar porque é perto da sala e venta um pouco, além de ser gostoso ficar perto da natureza.</Text>
      <Text>Escolha outro local:</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Bancos" onPress={() => navigation.navigate('Bancos')} />
      <Button title="Biblioteca" onPress={() => navigation.navigate('Biblioteca')} />
      <Button title="Cantina" onPress={() => navigation.navigate('Cantina')} />
      <Button title="Mesas" onPress={() => navigation.navigate('Mesas')} />
    </View>
  );
}

/* TELA MESAS */
function MesasScreen({ navigation }) {
  return (
    <View>
      <Image 
        source={{ uri: 'https://github.com/adriinocencio/app/blob/master/assets/WhatsApp%20Image%202024-02-29%20at%2012.43.58.jpeg?raw=true' }}
        style={{ width: 200, height: 200 }} // Defina as dimensões da imagem
      />
      <Text>Mesas</Text>
      <Text>O Ollyver escolheu esse lugar porque é onde 10 pessoas se divertem bastante, enquanto comem juntos em família.</Text>
      <Text>Escolha outro local:</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Bancos" onPress={() => navigation.navigate('Bancos')} />
      <Button title="Biblioteca" onPress={() => navigation.navigate('Biblioteca')} />
      <Button title="Cantina" onPress={() => navigation.navigate('Cantina')} />
      <Button title="Grama" onPress={() => navigation.navigate('Grama')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bancos" component={BancosScreen} />
        <Stack.Screen name="Biblioteca" component={BibliotecaScreen} />
        <Stack.Screen name="Cantina" component={CantinaScreen} />
        <Stack.Screen name="Grama" component={GramaScreen} />
        <Stack.Screen name="Mesas" component={MesasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
