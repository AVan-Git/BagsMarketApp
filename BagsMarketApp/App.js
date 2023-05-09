import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ComponentDetail from './src/components/ComponentDetail';
import ComponentStart from './src/components/ComponentStart';
import ComponentHome from './src/components/ComponentHome';
import styles from './src/themes/styles';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <ComponentStart style= {styles.flex_1} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
