import { View } from "react-native";
import { WebView } from "react-native-webview";

const PostMap = () => {
  const location = "Girón";
  const latitude = "7.0682";
  const longitude = "-73.16981";
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
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <script>
          var map = L.map('map').setView([${latitude}, ${longitude}], 13); 
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);
          L.marker([6.25184, -75.56359]).addTo(map)
            .bindPopup(${location})
            .openPopup();
        </script>
      </body>
    </html>
  `;

  return (
    <View className="flex-1">
      <WebView
        originWhitelist={["*"]}
        source={{ html }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};
export default PostMap;
