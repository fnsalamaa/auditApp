import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../navigation/screens/HomeScreen';
import AuditDetail from '../navigation/screens/AuditDetail';
import AuditInput from '../navigation/screens/AuditInput';

// Screen names
const homeName = 'Home';
const auditDetailName = 'Audit Details';
const auditInputName = 'Audit Input ';
const hi = '   ';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Detail Stack Navigator
function DetailStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={hi} component={AuditDetail} />
            {/* Other Stack Screens */}
        </Stack.Navigator>
    );
}

// Tab Navigator
function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === auditDetailName) {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if (route.name === auditInputName) {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'navy',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 },
            }}
        >
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={auditInputName} component={AuditInput} />
            <Tab.Screen name={auditDetailName} component={DetailStackNavigator} />
        </Tab.Navigator>
    );
}

// Main Container
export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs" headerMode="none">
                <Stack.Screen name="Tabs" component={TabNavigator} />
                {/* Other Stack Screens */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
