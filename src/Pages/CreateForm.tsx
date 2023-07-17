import EventForm from "./EventPages/NewEvent";
import NewPlaces from "./Places/NewPlaces";
import NewBandForm from "./Bands/NewBand";


import React from 'react'

export default function CreateForm() {
  return (
    <div>
        <EventForm />
        <NewPlaces/>
        <NewBandForm/>
    </div>
  )
}
