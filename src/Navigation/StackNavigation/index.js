import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Transaction from "../../Pages/Transactions";

const stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontFamily: "Poppins-Black",
                    },
                    headerStyle: {
                        backgroundColor: "#000"
                    }
                }}>
                <stack.Screen name="Home" component={Home} options={{ title: "Minha carteira" }} />
                <stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
                <stack.Screen name="Transaction" component={Transaction} options={{ title: "Transações" }} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;