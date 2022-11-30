import {NavigationContainer} from "@react-navigation/native";
import { StackNavigator } from "./screens/Stack";
import { Signup} from "./screens/Signup";



export default function App() {
  return (
    <Signup>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    </Signup>
  );
  }