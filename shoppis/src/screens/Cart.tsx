import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Image, TouchableOpacity } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Products";
import Payment from "./Payment";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation<any>();
  const { cart, getCart, removeProduct } = useContext(CartContext);

  useEffect(() => {
    getCart()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.product.thumbnail }} style={styles.itemImage} />
            <View style={styles.itemDetails} >
              <Text style={styles.itemTitle}>{item.product.title}</Text>
              <Text style={styles.itemPrice}>R$ {item.product.price.toFixed(2)}</Text>
              <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => removeProduct(item.product.id)}>
                <Text>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Button title="Realizar pagamento" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#666",
  },
  deleteButton: {
    position: "absolute",
    top: 37,
    right: 10,
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Cart;
