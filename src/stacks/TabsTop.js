import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EpisodesFav from "../components/EpisodesFav";
import CharactersFavorites from "../components/CharactersFavorites";
const Tab = createMaterialTopTabNavigator();

const TabTop = () => {
  return (
    <Tab.Navigator
   
    style={{backgroundColor: '#262c3a'}}
    >
      <Tab.Screen name="Episódios" component={EpisodesFav} />

      <Tab.Screen name="Personagens" component={CharactersFavorites} />
    </Tab.Navigator>
  );
};

export default TabTop;

import { Animated, View, TouchableOpacity } from "react-native";

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
       

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Animated.Text >{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
