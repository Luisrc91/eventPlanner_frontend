import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../../contexts/CurrentUser";


interface Event {
  user_id: number;
  event_name: string;
  event_type: string;
  guest: string;
  place_name: string;
  date_of_event: string;
  start_time: string;
  end_time: string;
  description: string;
  picture: string;
  band_name: string;
}

const EventForm: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUser);

  const initialEventState: Event = {
    user_id: currentUser ? currentUser.id : 0, // Set 0 as a fallback if user_id is not available
    event_name: "",
    event_type: "",
    guest: "",
    place_name: "",
    date_of_event: "",
    start_time: "",
    end_time: "",
    description: "",
    picture: "",
    band_name: "",
  };

  const [event, setEvent] = useState<Event>(initialEventState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      };

      const response = await fetch(
        "http://localhost:5000/events",
        requestOptions
      );
      const data = await response.json();
      console.log(data);

      // If the POST request is successful, navigate to the '/events' page
      navigate("/events");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
    
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  return (
    <div className="newEventForm">
      <h2> Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event_name">Event Name:</label>
          <input
            type="text"
            id="event_name"
            name="event_name"
            value={event.event_name}
            onChange={(e) => setEvent({ ...event, event_name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="event_type">Event Type:</label>
          <input
            type="text"
            id="event_type"
            name="event_type"
            value={event.event_type}
            onChange={(e) => setEvent({ ...event, event_type: e.target.value })}
          />
        </div>
       
        <div>
          <label htmlFor="place_name">Place Name:</label>
          <input
            type="text"
            id="place_name"
            name="place_name"
            value={event.place_name}
            onChange={(e) => setEvent({ ...event, place_name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="band_name">Band Name:</label>
          <input
            type="text"
            id="band_name"
            name="band_name"
            value={event.band_name}
            onChange={(e) => setEvent({ ...event, band_name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="number"
            id="guest"
            name="capacity"
            value={event.guest || ""}
            onChange={(e) => setEvent({ ...event, guest: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="date_of_event">Date of Event:</label>
          <input
            type="date"
            id="date_of_event"
            name="date_of_event"
            value={event.date_of_event}
            onChange={(e) =>
              setEvent({ ...event, date_of_event: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="start_time">Start Time:</label>
          <input
            type="time"
            id="start_time"
            name="start_time"
            value={event.start_time}
            onChange={(e) => setEvent({ ...event, start_time: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="end_time">End Time:</label>
          <input
            type="time"
            id="end_time"
            name="end_time"
            value={event.end_time}
            onChange={(e) => setEvent({ ...event, end_time: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
          ></textarea>
        </div>

        <div>
          <label htmlFor="picture">Picture:</label>
          <input
            type="input"
            id="picture"
            name="picture"
            value={event.picture}
            onChange={(e) => setEvent({ ...event, picture: e.target.value })}
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
