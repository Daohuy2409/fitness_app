import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import ImageViewer from "@/components/ImageViewer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import BoxComponent from "@/components/BoxComponent";
import { ProgressChart } from "react-native-chart-kit";
import ProgressChartComponent from "@/components/ProgressChart";
import CircularProgress from "react-native-circular-progress-indicator";
import { Image } from "expo-image";

const chart1 = require("../../assets/images/chart1.png");
const chart2 = require("../../assets/images/chart2.png");
export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headLeft}>
          <FontAwesomeIcon size={32} icon={faCircleUser} />
          <View style={styles.headTextLeft}>
            <Text style={styles.textLeft1}>Hello, Huy</Text>
            <Text style={styles.textLeft2}>Welcome Back</Text>
          </View>
        </View>

        <FontAwesomeIcon style={styles.headRight} icon={faBell} size={20} />
      </View>
      <View style={styles.body}>
        <BoxComponent
          header={<Text style={styles.headerText}>Activity Ring</Text>}
          content={
            <View style={styles.contentView}>
              <CircularProgress
                value={60}
                showProgressValue={false}
                inActiveStrokeWidth={20}
                activeStrokeWidth={20}
                activeStrokeColor="#06c930"
                inActiveStrokeColor={"#7af595"}
              />
              <View style={styles.contentText}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Move</Text>
                <Text>60/100 KCAL</Text>
              </View>
            </View>
          }
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <BoxComponent
              header={
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Step Count
                  </Text>
                  <FontAwesomeIcon icon={faAngleRight} size={18} />
                </View>
              }
              content={
                <View>
                  <Text>Today</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#9d8bdb",
                    }}
                  >
                    556
                  </Text>
                  <Image source={chart1} style={styles.image} />
                </View>
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <BoxComponent
              header={
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Step Distance
                  </Text>
                  <FontAwesomeIcon icon={faAngleRight} size={18} />
                </View>
              }
              content={
                <View>
                  <Text>Today</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#51b4f9",
                    }}
                  >
                    0,35km
                  </Text>
                  <Image source={chart2} style={styles.image} />
                </View>
              }
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <BoxComponent
              header={
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faPersonRunning} size={16} />
                    Running
                  </Text>
                  <FontAwesomeIcon icon={faAngleRight} size={18} />
                </View>
              }
              content={
                <View>
                  <Text>Weekly Distance</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#02b7ff",
                    }}
                  >
                    0,00km
                  </Text>
                  <Image source={chart1} style={styles.image} />
                </View>
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <BoxComponent
              header={
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Awards
                  </Text>
                  <FontAwesomeIcon icon={faAngleRight} size={18} />
                </View>
              }
              content={
                <View>
                  <Text>Today</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#51b4f9",
                    }}
                  >
                    challenge
                  </Text>
                  <Image source={chart2} style={styles.image} />
                </View>
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    fontFamily: "Roboto",
    backgroundColor: "white",
  },
  header: {
    margin: 20,
    marginTop: 50,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  headLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headTextLeft: {
    marginLeft: 10,
  },
  textLeft1: {
    color: "gray",
  },
  textLeft2: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headRight: {
    marginTop: 10,
  },
  body: { margin: 20 },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  contentText: {
    marginLeft: 20,
  },
  image: {
    width: 150,
    height: 100,
  },
});
