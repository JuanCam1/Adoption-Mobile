import type { FC } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

interface Props {
  latitude: number;
  longitude: number;
  location: string;
}

const PostMap: FC<Props> = ({ latitude, longitude, location }) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <style>
          html, body, #map {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <script>
          document.addEventListener("DOMContentLoaded", function () {
            var map = L.map('map').setView([${latitude}, ${longitude}], 15);   

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            L.marker([${latitude}, ${longitude}])
              .addTo(map)
              .bindPopup('${location.replace(/'/g, "\\'")}')
              .openPopup();
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View className="flex-1 rounded-xl overflow-hidden">
      <WebView
        originWhitelist={["*"]}
        source={{ html }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        automaticallyAdjustContentInsets={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default PostMap;
