import React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import MediaPicker from 'react-native-media-picker';

export default function App() {
  const getImage = () => {
    MediaPicker.showImageLibrary({}, (data) => {
      console.log(data);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="" onPress={getImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
