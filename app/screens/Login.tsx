import { View, Image, StyleSheet, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_URL, useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin, onRegister } = useAuth(); // Mengambil onLogin dan onRegister dari context

    useEffect(() => {
        const testCall = async() => {
            const result = await axios.get(`${API_URL}/users`);
            console.log("test", result)
        }
        testCall();
    }, [])

    const login = async () => {
        const result = await onLogin!(email, password);
        if (result && result.error) {
            alert(result.msg);
        }
    };
   

    // We automatically call the login after a successful registration
    const register = async () => {
        const result = await onRegister!(email, password);
        if (result && result.error) {
            alert(result.msg);
        } else {
            login();
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://galaxies.dev/img/logos/logo-blue.png' }} 
            style={styles.image} 
            />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text: string) => setEmail(text)}
                    value={email}
                    // autoCapitalize="none"
                    // keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text: string) => setPassword(text)}
                    value={password}
                />
                <Button onPress={login} title="Sign in" />
                <Button onPress={register} title="Create Account" />
            </View>
        </View>

    ); 
};

const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
    },
    form: {
       gap: 10,
       width: '60%',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    container: {
        alignItems: 'center',
        width: '100%',
    },
    
  
   
});
export default Login;
