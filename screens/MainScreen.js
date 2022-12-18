import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function MainScreen (navigation) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Главный экран" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  }
});

export default MainScreen;