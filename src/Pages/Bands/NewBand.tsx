import React, { useState, ChangeEvent, FormEvent } from "react";

interface Band {
  band_name: string;
  genre: string;
  event_place: string;
}

const NewBandForm: React.FC = () => {
  const [band, setBand] = useState<Band>({
    band_name: "",
    genre: "",
    event_place: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBand((prevBand) => ({
      ...prevBand,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/bands/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(band),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("New band created:", data);
        // Reset the form
        setBand({
          band_name: "",
          genre: "",
          event_place: "",
        });
      } else {
        console.log("Failed to create new band:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h2> Add Band </h2>
 <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="band_name">Band Name:</label>
        <input
          type="text"
          id="band_name"
          name="band_name"
          value={band.band_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={band.genre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="event_place">Event Place:</label>
        <input
          type="text"
          id="event_place"
          name="event_place"
          value={band.event_place}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Band</button>
    </form>
    </div>
   
  );
};

export default NewBandForm;
