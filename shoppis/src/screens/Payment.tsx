import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from "react-native";

const Payment = () => {
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleConfirmPayment = () => {
    showToast("Pedido enviado!");
  };

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Informações de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço de Entrega"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        onChangeText={(text) => setCardNumber(text)}
        value={cardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Expiração (MM/AA)"
        onChangeText={(text) => setExpiryDate(text)}
        value={expiryDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        onChangeText={(text) => setCvv(text)}
        value={cvv}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirmPayment}>
        <Text style={styles.buttonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
