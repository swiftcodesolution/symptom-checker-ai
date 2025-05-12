import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthOptions = () => {
  const router = useRouter();

  const handleGoogleSignup = () => {};
  const handleAppleSignup = () => {};

  return (
    <ImageBackground
      source={require("../../assets/images/bg-pattern.png")}
      style={styles.patternBackground}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/images/logo-sm.png")} />
        <Text style={styles.authHeading}>Let's Get Started</Text>
        <Text style={styles.authText}>
          Find the best Ai assistance for you mental wellbeing on Symptom
          Checker
        </Text>
        <TouchableOpacity
          style={[styles.btn, styles.emailBtn]}
          onPress={() => router.push("/auth/signup")}
        >
          <Ionicons name="mail-outline" size={32} style={styles.white} />
          <Text style={styles.white}>Signup with Email</Text>
        </TouchableOpacity>
        <Text style={styles.authText}>or Use an Instant Signup</Text>
        <TouchableOpacity style={[styles.btn, styles.socialBtn]}>
          <Ionicons name="logo-google" size={32} style={styles.white} />
          <Text style={styles.white}>Signup with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.socialBtn]}>
          <Ionicons name="logo-apple" size={32} style={styles.white} />
          <Text style={styles.white}>Signup with Apple</Text>
        </TouchableOpacity>
        <Text style={styles.authText}>
          Already have an account?{" "}
          <Link href="/auth/login" style={styles.loginLink}>
            Login
          </Link>
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AuthOptions;

const styles = StyleSheet.create({
  patternBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    gap: 42,
  },
  authHeading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
  },
  authText: {
    color: "#c9c9c9",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
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
  },
  emailBtn: {
    backgroundColor: "#0057B8",
  },
  socialBtn: {
    backgroundColor: "transparent",
    borderColor: "rgba(0, 87, 184, 0.5)",
    borderWidth: 3,
  },
  white: {
    color: "#fff",
  },
  loginLink: {
    color: "rgba(0, 87, 184, 1)",
  },
});
