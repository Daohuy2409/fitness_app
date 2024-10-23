import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useState } from "react";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { WebView } from "react-native-webview";
export default function TabTwoScreen() {
  const [loading, setLoading] = useState(true);
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
          html, body {
            height: 100%;
            padding: 0;
            margin: 0;
          }
          #map {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map', {zoomControl: false}).setView([21.036985, 105.782062], 18);
          L.tileLayer('https://tmdt.fimo.edu.vn/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          }).addTo(map);
          L.control.scale({imperial: true, metric: true}).addTo(map);
          L.control.zoom({position: 'bottomleft'}).addTo(map);
          //thêm button định vị 
          var locationBtn = L.Control.extend({
            options: {
                position: 'bottomright' // Vị trí của button trên bản đồ
            },

            onAdd: function(map) {
                var container = L.DomUtil.create('div', 'leaflet-bar custom-button');

                container.innerHTML = '<i class="fa-solid fa-location-crosshairs fa-2xl"></i>'; // Nội dung của button
                container.style.backgroundColor = 'white';
                container.style.display = 'flex';
                container.style.justifyContent = 'center';
                container.style.alignItems = 'center';
                container.style.width = '50px';
                container.style.height = '50px';
                container.style.borderRadius = '100%';
                container.style.marginBottom = '30px';
                // Thêm sự kiện click
                container.onclick = function() {
                    alert('Button clicked!');
                };

                return container;
            }
        });

        // Thêm control vào bản đồ
        map.addControl(new locationBtn());
        </script>
      </body>
    </html>
  `;

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loading}
        />
      )}
      <TextInput
        placeholder="Enter a location"
        style={styles.locationInput}
      ></TextInput>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={styles.webview}
        onLoadEnd={() => setLoading(false)}
      />
      {/* <View style={styles.locationBtn}>
        <FontAwesomeIcon icon={faLocationCrosshairs} size={25} />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  webview: {
    flex: 1,
    width: 400,
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  locationInput: {
    position: "absolute",
    top: 60,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 100,
    width: "90%",
    height: 30,
    paddingLeft: 10,
    zIndex: 10,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
