import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function HistoryPage() {
  const { history, error, loading } = useFetch(
    "http://localhost:1337/api/history?populate=*"
  );
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  return (
    <div className="history">
      <section>
        <h2>Our History</h2>
        <hr className=" " />
        {history.map((history) => (
          <article className=" " key={history.id}>
            <h2>{history.attributes.title}</h2>
            <h3>
            {history.attributes.body}
            </h3>
          </article>
        ))}
      </section>
    </div>
  );
}
