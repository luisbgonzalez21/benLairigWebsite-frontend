import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function GearPage() {
  const { gears, error, loading } = useFetch(
    "http://localhost:1337/api/gears"
  );
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  return (
    <div className="gear">
      <section>
        <h2>Available Gear</h2>
        <hr className=" " />
        {gears.map((gear) => (
          <article className=" " key={gear.id}>
            <h2>{gear.attributes.name}</h2>
            <h3>
            {gear.attributes.body}
            </h3>
          </article>
        ))}
      </section>
    </div>
  );
}
