import ProgressDots from "@/components/ProgressDots";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding2 = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("./../../assets/images/bg-pattern.png")}
      style={styles.patternBackground}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.onboardingScreenContainer}>
        <BlurView intensity={10}>
          <LinearGradient
            colors={["rgba(255,255,255,1)", "transparent"]}
            style={styles.glassCardBorder}
          >
            <LinearGradient
              colors={["rgba(255,255,255,0.1)", "transparent"]}
              style={styles.glassCard}
            >
              <Text style={styles.onboardingHeading}>
                Welcome to symptom checker AI
              </Text>
              <Text style={styles.onboardingText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam nesciunt
              </Text>
              <ProgressDots current={2} total={3} />
              <View style={styles.onboardingBtnsDiv}>
                <TouchableOpacity
                  style={[styles.onboardingBtn, styles.onboardingBtnSkip]}
                  onPress={() => router.replace("/auth")}
                >
                  <Text
                    style={[
                      styles.onboardingBtnText,
                      styles.onboardingBtnTextSkip,
                    ]}
                  >
                    Skip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.onboardingBtn, styles.onboardingBtnContinue]}
                  onPress={() => router.push("/onboarding/3")}
                >
                  <Text
                    style={[
                      styles.onboardingBtnText,
                      styles.onboardingBtnTextContinue,
                    ]}
                  >
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.onboardingDisclaimerText}>
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </LinearGradient>
          </LinearGradient>
        </BlurView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  patternBackground: {
    flex: 1,
    backgroundColor: "#001E3F",
  },
  onboardingScreenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  glassCardBorder: {
    padding: 3,
    borderRadius: 30,
  },

  glassCard: {
    backgroundColor: "rgba(0, 30, 63, 0.5)",
    borderRadius: 26,
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  onboardingHeading: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  onboardingText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 24,
  },
  onboardingBtnsDiv: {
    flexDirection: "row",
    gap: 20,
    marginTop: 50,
    marginBottom: 40,
  },
  onboardingBtn: {
    flex: 1,
    padding: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  onboardingBtnText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  onboardingBtnSkip: {
    backgroundColor: "#707e8e",
  },
  onboardingBtnContinue: {
    backgroundColor: "#0057b8",
  },
  onboardingBtnTextSkip: { color: "#fff" },
  onboardingBtnTextContinue: { color: "#fff" },
  onboardingDisclaimerText: {
    textAlign: "center",
    color: "#c4c4c4",
    fontSize: 14,
  },
});
