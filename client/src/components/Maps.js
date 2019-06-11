import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function Maps() {
  return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: -33.907028, lng: 151.022690 }}
      >
        <Marker
          position={{ lat: -33.907028, lng: 151.022690 }}
        />
      </GoogleMap>
  )
}

const WrrapedMap = withScriptjs(withGoogleMap(Maps))

export default WrrapedMap