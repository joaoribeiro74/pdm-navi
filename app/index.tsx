import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import { Link, usePathname, useRouter } from 'expo-router'

export default function index() {
    const router = useRouter();

    const handleGoToLinks = () => {
        router.push("/list");
    };

  return (
    <View style={styles.container}>
        <Link style={styles.links} href="/list">
            <Text>Link to list</Text>
        </Link>

        <Link style={styles.links} href={{pathname: "/user/[id]", params: { id: 1 }}}>
            <Text>Usuário 1</Text>
        </Link>
        
        <Link style={styles.links} href={{pathname: "/user/[id]", params: { id: Math.floor(Math.random() * 100) }}}>
            <Text>Usuário 2</Text>
        </Link>

        <Button title='List' onPress={handleGoToLinks} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    links: {
      marginBottom: 10,
    },
})