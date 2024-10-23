import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { View } from "@/components/Themed";

const ProgressChartComponent = () => {
  return (
    <View style={styles.container}>
      <ProgressChart
        data={{
          data: [0.7], // Progress value, 0.7 means 70%
        }}
        width={Dimensions.get("window").width - 40} // Set chart width
        height={220} // Set chart height
        strokeWidth={16} // Width of the chart stroke
        radius={32} // Radius of the progress arc
        chartConfig={{
          backgroundColor: "transparent", // Remove solid background
          backgroundGradientFrom: "transparent", // Remove gradient background start
          backgroundGradientTo: "transparent", // Remove gradient background end
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Adjust color
          style: {
            borderRadius: 16,
          },
        }}
        hideLegend={true} // Disable the legend display
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default ProgressChartComponent;
