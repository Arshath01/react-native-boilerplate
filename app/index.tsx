import HomeScreen from "@/screens/HomeScreen";
import LoginScreen from "@/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function Root() {
  const isAuthenticated = true;
  const initialRouteName = isAuthenticated ? "Home" : "Login";
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </>
    </Stack.Navigator>
  );
}
