import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    HomeScreen,
    BusinessDetailScreen,
    ServicesScreen,
    BookServiceScreen,
} from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="BusinessDetails" component={BusinessDetailScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="BookService" component={BookServiceScreen} />
    </Stack.Navigator>
);

export default HomeStack;
