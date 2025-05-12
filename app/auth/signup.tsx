import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {};

  return (
    <ImageBackground
      source={require("../../assets/images/bg-pattern.png")}
      style={styles.patternBackground}
      resizeMode="cover"
    >
      {/* <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      {/* <ScrollView keyboardShouldPersistTaps="handled"> */}
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => router.push("/auth")}
          style={styles.backBtn}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={32}
            style={styles.white}
          />
        </TouchableOpacity>
        <Text style={styles.authHeading}>Create an Account</Text>
        <Text style={styles.authText}>
          Find the best Ai assistance for you mental wellbeing on Symptom
          Checker
        </Text>
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={24} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#00c4cc"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#00c4cc"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#00c4cc"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.btn]} onPress={handleSignup}>
          <Text style={styles.white}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={[styles.authText, styles.endText]}>
          Already have an account?{" "}
          <Link href="/auth/login" style={styles.loginLink}>
            Login
          </Link>
        </Text>
      </SafeAreaView>
      {/* </ScrollView> */}
      {/* </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */}
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  patternBackground: {
    flex: 1,
  },
  backBtn: {
    color: "#fff",
    padding: 10,
    marginRight: "auto",
    marginBottom: 24,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  authHeading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  authText: {
    color: "#c9c9c9",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 50,
  },
  formWrapper: {
    gap: 20,
    width: "100%",
    marginBottom: 50,
  },
  inputWrapper: {
    backgroundColor: "rgba(0, 87, 184, 0.5)",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    borderRadius: 24,
  },
  inputIcon: {
    color: "#fff",
    marginRight: 20,
  },
  input: {
    width: "100%",
    color: "#fff",
  },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 20,
    borderRadius: 24,
    backgroundColor: "#0057b8",
  },
  white: {
    color: "#fff",
  },
  endText: {
    marginTop: "auto",
    marginBottom: 0,
  },
  loginLink: {
    color: "#0057b8",
  },
});
