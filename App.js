import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [showWorld, setShowWorld] = React.useState(false)
  const onPress = () => setShowWorld(true)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity testID='hello' onPress={onPress}>
        <Text>Hello</Text>
      </TouchableOpacity>
      { showWorld ? <World /> : null }
      <StatusBar style="auto" />
    </View>
  );
}

const World = () => (
  <Text>
    World!!!
  </Text>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
