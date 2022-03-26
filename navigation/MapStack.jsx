import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Map from "../screens/Map"

export default function MapStack () {

    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Map"
            component={Map}
            />
        </Stack.Navigator>

    )
}
