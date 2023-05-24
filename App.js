import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreenObj from "./src/screens/ListScreenObj";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import colorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import BoxScreenFlex from "./src/screens/BoxScreenFlex";
import CounterNoState from "./src/screens/CounterNoState";
import SquareScreen1 from "./src/screens/SquareScreen1";
import InputScreen from "./src/screens/InputScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Listobj: ListScreenObj,
    Components: ComponentsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterNoST: CounterNoState,
    Color: colorScreen,
    Square: SquareScreen,
    MyText: TextScreen,
    Box: BoxScreen,
    BoxFlex: BoxScreenFlex,
    SquareScreen1: SquareScreen1,
    InputScr:InputScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
