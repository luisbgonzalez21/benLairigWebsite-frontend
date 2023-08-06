import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Estatepage() {
  const { trips, error, loading } = useFetch(
    "http://localhost:1337/api/trips?populate=*"
  );
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  return (
    <div className="trips">
      <section>
        <h2>Trips</h2>
        <hr className=" " />
        {trips.map((trip) => (
          <article className=" " key={trip.id}>
            <h2>{trip.attributes.name}</h2>
            <h3>
            {trip.attributes.body}
            </h3>
          </article>
        ))}
      </section>
    </div>
  );
}
