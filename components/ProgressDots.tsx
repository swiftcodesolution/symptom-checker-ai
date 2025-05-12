import { StyleSheet, View } from "react-native";

type Props = { current: number; total: number };

const ProgressDots = ({ current, total }: Props) => {
  const dots = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <View style={styles.dotsContainer}>
      {dots.map((dot) => (
        <View
          key={dot}
          style={[
            styles.dot,
            {
              backgroundColor: dot === current ? "#0057B8" : "#00C4CC",
              width: dot === current ? 32 : 18,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default ProgressDots;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10",
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
});
