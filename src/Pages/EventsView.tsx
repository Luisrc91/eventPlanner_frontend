import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/viewEvents.css'
interface Event {
  event_id: number;
  event_name: string;
  event_type: string;
  place_name: string;
  date_of_event: string;
}

const EventsView: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch events data from the server
    fetchEventsData();
  }, []);

  const fetchEventsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.log('Failed to fetch events data:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="events-view-container">
      <h1>Events</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.event_id}>
              <h2>{event.event_name}</h2>
              <p>Type: {event.event_type}</p>
              <p>Place: {event.place_name}</p>
              <p>Date: {event.date_of_event}</p>
              <Link to={`/events/${event.event_id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsView;
