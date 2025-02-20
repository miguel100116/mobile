
import Registration from './components/Registration';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Appointment from './components/Appointment';
import Profile from './components/Profile';
import { Mystyle } from './components/Mystyle';



export default function App() {
  const SNavigation=createNativeStackNavigator();

  return (
    <NavigationContainer>
    <SNavigation.Navigator initialRouteName="Profile">
    <SNavigation.Screen  options={{ headerShown: false }} name="Profile" component={Profile}  />
      <SNavigation.Screen options={{ headerShown: false }} name="Registration" component={Registration} />
      <SNavigation.Screen  options={{ headerShown: false }} name="Dashboard" component={Appointment} />
    </SNavigation.Navigator>
  </NavigationContainer>
)}


