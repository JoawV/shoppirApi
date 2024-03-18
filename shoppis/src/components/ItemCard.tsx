import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";

interface Props {
  product: ProductDTO;
}
const ItemCard = ({ product }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Details", product)}>
      <View>
        <View>
          <Image
            style={styles.imagem}
            source={{ uri: product.thumbnail }}
          />

          <View style={styles.conteudo}>
            <Text style={styles.titulo}>{product.title}</Text>
            <Text style={styles.descrição}>{product.description}</Text>
            <Text style={styles.preço}>$ {product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imagem: {
    height: 140,
    borderRadius: 10,
  },
  conteudo: {
    padding: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descrição: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  preço: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 5,
  },
});