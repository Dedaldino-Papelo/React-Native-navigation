import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="Profile" 
        component={Profile}
        />
    </Stack.Navigator>
  );
}