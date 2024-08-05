import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

export interface RootStackParamsList {
    Splash: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
}

const Stack = createNativeStackNavigator()

const RootStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack