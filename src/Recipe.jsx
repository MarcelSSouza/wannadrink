import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "./App.css";

function Recipe() {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cocktail").then((response) => {
      setfirst(response.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1
          className="scale-up-center"
          style={{ marginTop: "50vh", marginBottom: "50vh" }}
        >
          LET'S MAKE A DRINK ?
          <div class="arrow" style={{ marginTop: "10vh" }}></div>
        </h1>

        <h2>{first.name}</h2>
        <h2 className="mt-5">Instructions</h2>
        <hr className="mb«5"></hr>
        <h4>{first.instructions}</h4>
        <h2 className="mt-5">Ingredients</h2>
        <hr className="mb-5"></hr>

        <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-evenly">
          {first.ingredients &&
            first.ingredients.map((item, index) => (
              <li>
                <h2>
                  <Badge large bg="secondary">
                    {item}
                  </Badge>
                </h2>{" "}
              </li>
            ))}
        </ul>

        <h2 className="mt-5">Medidas</h2>
        <hr className="mb-5"></hr>

        <ul className="list-unstyled d-flex  flex-column flex-md-row justify-content-evenly ">
          {first.measure &&
            first.measure.map((item, index) => (
              <li>
                <h2>
                  <Badge large bg="secondary">
                    {item}
                  </Badge>
                </h2>{" "}
              </li>
            ))}
        </ul>

        <ul className="list-unstyled d-flex flex-column flex-md-row  justify-content-evenly">
          {first.tags &&
            first.tags.map((item, index) => (
              <li>
                <h2>
                  <Badge large bg="secondary">
                    {item}
                  </Badge>
                </h2>
              </li>
            ))}
        </ul>
      </Container>
    </div>
  );
}

export default Recipe;
