import { APIProvider, Map as MapComponent, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function Map() {
    const position = { lat: 38.53451939906247, lng: -0.1561561287896064 };

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <MapComponent style={{ width: "100%", height: "100%" }} defaultCenter={position} defaultZoom={15} mapId={import.meta.env.VITE_GOOGLE_MAP_ID}>
                <AdvancedMarker position={position}></AdvancedMarker>
            </MapComponent>
        </APIProvider>
    );
}
