import { Image, StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { CartContext } from "../contexts/CartContext";

const Details = ({ route }: any) => {
  const product: ProductDTO = route.params
  const { addProduct } = useContext(CartContext)

  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode="stretch" style={styles.image} source={{ uri: product.images[0] }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.cat}>{product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
      </View>
      <Button title="Adicionar" onPress={() => addProduct(route.params as ProductDTO)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    padding: 12,
    flex: 1
  },
  image: {
    marginTop: 60,
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 60
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  cat: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#AEAEAE",
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    marginBottom: 40,
  },
  price: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: 'center'
  },
  addCart: {
    alignSelf: "center"
  }
});

export default Details;


