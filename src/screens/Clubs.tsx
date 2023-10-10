import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
})

export default function ClubsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{ process.env.EXPO_PUBLIC_API_URL}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://d1z7g1qkaqpbo1.cloudfront.net/logos/4977147.jpg',
        }}
      />
    </View>
  );
}