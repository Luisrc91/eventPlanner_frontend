import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";


interface Event {
  event_id: number;
  event_name: string;
  event_type: string;
  guest?: number;
  place_name: string;
  date_of_event: string;
  start_time: string;
  end_time: string;
  description: string;
  picture?: Blob;
  band_name: string;
}

interface EditEventFormProps {
  eventId: number;
}

const EditEvent: React.FC<EditEventFormProps> = ({ eventId }) => {
  const [event, setEvent] = useState<Event>({
    event_id: eventId,
    event_name: "",
    event_type: "",
    guest: undefined,
    place_name: "",
    date_of_event: "",
    start_time: "",
    end_time: "",
    description: "",
    picture: undefined,
    band_name: "",
  });

  useEffect(() => {
    // Fetch event data from the server and update the form
    fetchEventData();
  }, [eventId]);

  const fetchEventData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/events${eventId}`);
      if (response.ok) {
        const data = await response.json();
        setEvent(data);
      } else {
        console.log("Failed to fetch event data:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/events${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Event updated:", data);
      } else {
        console.log("Failed to update event:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="editEventForm">
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="event_name">Event Name:</label>
        <input
          type="text"
          id="event_name"
          name="event_name"
          value={event.event_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="event_type">Event Type:</label>
        <input
          type="text"
          id="event_type"
          name="event_type"
          value={event.event_type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="guest">Guest:</label>
        <input
          type="number"
          id="guest"
          name="guest"
          value={event.guest || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="place_name">Place Name:</label>
        <input
          type="text"
          id="place_name"
          name="place_name"
          value={event.place_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date_of_event">Date of Event:</label>
        <input
          type="date"
          id="date_of_event"
          name="date_of_event"
          value={event.date_of_event}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="start_time">Start Time:</label>
        <input
          type="time"
          id="start_time"
          name="start_time"
          value={event.start_time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="end_time">End Time:</label>
        <input
          type="time"
          id="end_time"
          name="end_time"
          value={event.end_time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={event.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="band_name">Band Name:</label>
        <input
          type="text"
          id="band_name"
          name="band_name"
          value={event.band_name}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Event</button>
    </form>
    </div>
    
  );
};

export default EditEvent;
