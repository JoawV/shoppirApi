import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const User = () => {
    const { user, logout } = useContext(UserContext)


    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={{ uri: user?.image }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.nome}>{user?.firstName} {user?.lastName}</Text>
                    <Text style={styles.email}>{user?.email}</Text>
                </View>
            </View>
            <Button title="Logout" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 450
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    textContainer: {
        marginLeft: 20,
    },
    email: {
      paddingLeft: 30,
      fontWeight: 'bold',
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    }
});


export default User;