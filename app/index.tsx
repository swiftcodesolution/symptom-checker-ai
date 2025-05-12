import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function Index() {
  const router = useRouter();
  // const rootNavigation = useRootNavigationState();

  useEffect(() => {
    let timerId;

    if (Platform.OS === "ios") {
      timerId = setTimeout(() => {
        router.replace("/onboarding/1");
      }, 1);
    } else {
      timerId = setImmediate(() => {
        router.replace("/onboarding/1");
      });
    }

    // Cleanup to prevent memory leaks
    return () => {
      if (timerId) {
        if (Platform.OS === "ios") {
          clearTimeout(timerId);
        } else {
          clearImmediate(timerId);
        }
      }
    };
  }, [router]);

  return null;
}
