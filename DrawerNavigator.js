import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "./screens/Homescreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homescreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
