import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function SpotifySignUp({ navigation }) {
  const [gender, setGender] = useState(null);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/spotify.png")} style={styles.logo} />
      <Text style={styles.title}>Spotify</Text>

      {/* Input fields */}
      <TextInput placeholder="Email Address" placeholderTextColor="#aaa" style={styles.input} />
      <TextInput placeholder="Full Name" placeholderTextColor="#aaa" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#aaa" secureTextEntry style={styles.input} />

      {/* Date of Birth */}
      <Text style={styles.label}>Date Of Birth :</Text>
      <View style={styles.dobContainer}>
        <TextInput placeholder="DD" placeholderTextColor="#aaa" style={styles.dobInput} />
        <TextInput placeholder="MM" placeholderTextColor="#aaa" style={styles.dobInput} />
        <TextInput placeholder="YY" placeholderTextColor="#aaa" style={styles.dobInput} />
      </View>

      {/* Gender */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderBtn, gender === "Male" && styles.selectedGender]}
          onPress={() => setGender("Male")}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderBtn, gender === "Female" && styles.selectedGender]}
          onPress={() => setGender("Female")}
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up button */}
      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social sign up */}
      <Text style={styles.footerTitle}>Sign Up With</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.social}>f</Text>
        <Text style={styles.social}>G</Text>
      </View>

      {/* Back to login */}
      <Text style={styles.footer}>
        Already have an account?{" "}
        <Text style={styles.login} onPress={() => navigation.navigate("Login")}>
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center", padding: 20 },
  logo: { width: 150, height: 150, marginBottom: 15 },
  title: { fontSize: 32, fontWeight: "bold", color: "#fff", marginBottom: 40 },
  input: { width: "100%", backgroundColor: "#333", padding: 12, borderRadius: 25, marginVertical: 8, color: "#fff" },
  label: { color: "#1DB954", alignSelf: "flex-start", marginTop: 10, marginBottom: 5, fontWeight: "bold" },
  dobContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  dobInput: { flex: 1, backgroundColor: "#333", padding: 12, borderRadius: 10, marginHorizontal: 5, color: "#fff", textAlign: "center" },
  genderContainer: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginVertical: 15 },
  genderBtn: { paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: "#333" },
  selectedGender: { backgroundColor: "#1DB954" },
  genderText: { color: "#1DB954", fontWeight: "bold" },
  signUpBtn: { width: "100%", backgroundColor: "#1DB954", padding: 15, borderRadius: 25, alignItems: "center", marginVertical: 20 },
  signUpText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  footerTitle: { color: "#1DB954", marginVertical: 10, fontWeight: "bold" },
  socialContainer: { flexDirection: "row", justifyContent: "space-around", width: "40%", marginBottom: 15 },
  social: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  footer: { color: "#aaa" },
  login: { color: "#1DB954", fontWeight: "bold" },
});
