import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons atau ikon lainnya dari Expo

export default function HomeScreen ({ navigation }) {
    
    const handleMenu1Press = () => {
        // Implement logic for Menu 1 press
        alert('Menu 1 pressed');
    };

    const handleMenu2Press = () => {
        // Implement logic for Menu 2 press
        alert('Menu 2 pressed');
    };

    const handleMenu3Press = () => {
        // Implement logic for Menu 2 press
        alert('Menu 3 pressed');
    };

    const handleMenu4Press = () => {
        // Implement logic for Menu 2 press
        alert('Menu 4 pressed');
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Header section */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16 }}>
                {/* Left side: Profile Icon */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person-circle-outline" size={32} color="black" />
                </TouchableOpacity>
                
                {/* Right side: Notification Icon */}
                <TouchableOpacity onPress={() => alert('Notification pressed')}>
                    <Ionicons name="notifications-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>

            {/* Menu Boxes */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 16 }}>
                {/* Menu 1 */}
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleMenu1Press}>
                    <Image source={require('../../assets/menu1.png')} style={{ width: 70, height: 70, marginBottom: 8 }} />
                    <Text>Menu 1</Text>
                </TouchableOpacity>

                {/* Menu 2 */}
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleMenu2Press}>
                <Image source={require('../../assets/menu2.png')} style={{ width: 70, height: 70, marginBottom: 8 }} />
                    <Text>Menu 2</Text>
                </TouchableOpacity>

                {/* Menu 3 */}
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleMenu3Press}>
                <Image source={require('../../assets/menu3.png')} style={{ width: 70, height: 70, marginBottom: 8 }} />
                    <Text>Menu 3</Text>
                </TouchableOpacity>

                {/* Menu 4 */}
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleMenu4Press}>
                <Image source={require('../../assets/menu4.png')} style={{ width: 70, height: 70, marginBottom: 8 }} />
                    <Text>Menu 4</Text>
                </TouchableOpacity>
            </View>

            {/* Content section */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => alert('This is the "Home" screen.')} style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
            </View>
        </View>
    );
}
