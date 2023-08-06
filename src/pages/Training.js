import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function TrainingPage() {
  const { training, error, loading } = useFetch(
    "http://localhost:1337/api/training?populate=*"
  );
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  return (
    <div className="training">
      <section>
        <h2>Training</h2>
        <hr className=" " />
        {training.map((training) => (
          <article className=" " key={training.id}>
            <h2>{training.attributes.title}</h2>
            <h3>
            {training.attributes.body}
            </h3>
          </article>
        ))}
      </section>
    </div>
  );
}
