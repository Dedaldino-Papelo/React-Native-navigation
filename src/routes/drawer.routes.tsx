import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./tab.routes";
import { StackRoutes } from "./stack.routes";
import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: "" }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "home",
        }}
      />

      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "My Profile",
        }}
      />
    </Drawer.Navigator>
  );
}
