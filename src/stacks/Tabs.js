import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Characters from "../pages/Characters";
import Episodes from "../pages/Episodes";
import { Ionicons } from "@expo/vector-icons";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import TabTop from "./TabsTop";
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Characters") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
          return <Ionicons name="person-sharp" size={size} color={color} />;
        } else if (route.name === "Episodes") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="film" size={24} color={color} />;
        } else if (route.name === "Home") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="home" size={24} color={color} />;
        } else if (route.name === "Favorites") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="star" size={24} color={color} />;
        }
      },
      tabBarActiveTintColor: "#6fbe6c",
      tabBarInactiveTintColor: "#3B4459",
      tabBarStyle: {
        backgroundColor: "#262c3a",
        borderTopColor: "#777a81",
      },

      headerShown: false,
      headerTransparent: true,
      headerTitleAlign: "center",
      //   headerTitle: () => <Header />,
    })}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" component={Home} />
    {/* <Tab.Screen name="Characters" component={Characters} /> */}
    <Tab.Screen
      name="Episodes"
      component={Episodes}
     
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      // screenOptions={{ headerShown: true }}
    />
  </Tab.Navigator>
);

export default Tabs;
