import { Box } from "@mui/material";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef } from "react";

const ExampleMap = () => {

  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {

    if (map.current) {
      console.log("loading...")
      return
    }

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 0],
      zoom: 2,
    })

    map.current.addControl(new maplibregl.NavigationControl(), "top-right")

    //add a marker to the map
    // new Marker().setLngLat([30.5, 50.5]).addTo(map)

    new maplibregl.Marker({ color: 'red' }) 
        .setLngLat([-74.006, 40.7128])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setText('Hello from NYC!')
        ) // optional popup
        .addTo(map.current);

  }, [])

  return (
    
    <Box 
      ref={mapContainer}
      width={"100%"}
      height={"500px"}  
    />

  )

}

export default ExampleMap