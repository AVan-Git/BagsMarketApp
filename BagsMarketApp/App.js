import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentDetail from './src/components/ComponentDetail';
import ComponentStart from './src/components/ComponentStart';
import ComponentHome from './src/components/ComponentHome';
import styles from './src/themes/styles';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <ComponentStart style= {styles.flex_1} />


    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponentStart" screenOptions={{headerShown: false}}>
        <Stack.Screen name="ComponentStart" component={ComponentStart} />
        <Stack.Screen name="ComponentHome" component={ComponentHome} />
        <Stack.Screen name="ComponentDetail" component={ComponentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
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
