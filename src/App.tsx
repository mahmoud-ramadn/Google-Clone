import { useState } from "react";
import { Place } from "./api/Place";
import LocationsSearch from "./components/LocationsSearch";
import Map from "./components/Map";

const App = () => {
  const [place,SetPlace]=useState<Place | null>(null)
  return (
    <div className="grid grid-cols-12 w-screen h-screen">
      <div className=" col-span-3 p-2">
        <LocationsSearch onPlaceClick={(p)=>SetPlace(p)}/>
      </div>

      <div className=" col-span-9">
        <Map place={place}/>
      </div>
    </div>
  )
}

export default App