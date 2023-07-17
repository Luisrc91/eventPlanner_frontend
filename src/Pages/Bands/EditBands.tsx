import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Band {
  band_id: number;
  band_name: string;
  genre: string;
  event_place: string;
}

interface EditBandFormProps {
  bandId: number;
}

const EditBands: React.FC<EditBandFormProps> = ({ bandId }) => {
  const [band, setBand] = useState<Band>({
    band_id: bandId,
    band_name: "",
    genre: "",
    event_place: "",
  });

  useEffect(() => {
    // Fetch band data from the server and update the form
    fetchBandData();
  }, [bandId]);
  const fetchBandData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/bands/${bandId}`);
      if (response.ok) {
        const data = await response.json();
        setBand(data);
      } else {
        console.log("Failed to fetch band data:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
      const response = await fetch(`http://localhost:5000/bands/${bandId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(band),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Band updated:", data);
      } else {
        console.log("Failed to update band:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
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
      <button type="submit">Update Band</button>
    </form>
  );
};

export default EditBands;
