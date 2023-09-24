import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './Navigation/HomeNavigation';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatScreen/> */}
      <NavigationContainer>
          <HomeNavigation />
      </NavigationContainer>
      {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
