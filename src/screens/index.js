import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Breed from './Breed'
import Home from './Home'


const Stack = createStackNavigator()

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen component={Home} name='Home' options={{
                    headerShown: false
                }} />
                <Stack.Screen component={Breed} name='Breed' options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Screens