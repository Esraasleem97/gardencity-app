import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../Screens/Login";


const Stack = createStackNavigator();

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for unauthenticated user
 */
  const UnAuthorizedScreens = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{
                headerMode: true
            }} >
                <Stack.Screen name="Login" component={Login} headerShown={false} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default UnAuthorizedScreens