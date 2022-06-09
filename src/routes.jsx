import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header";
import CharPerEpisode from "./components/CharPerEpisode";
import { createStackNavigator } from "@react-navigation/stack";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Tabs" component={Home} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Episodes" component={Episodes} />
        <Stack.Screen name="Modal" component={CharPerEpisode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
