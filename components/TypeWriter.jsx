import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import { Col } from "reactstrap";

const otherSentences = ["infirmière.", "développeuse Web.", "une battante !!"];
let index = 0; // create an js object to have many sentences and an index initialized at 0

const TypeWriter = () => {
  const [sentence, setSentence] = useState("infirmière."); // initialization the state with the first sentence to display
  const intervalRef = useRef({}); // contains an editable value that does not refresh the page
  const text = useTypewriter(sentence);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // modify sentence at an imposed interval
      index = index > 2 ? 0 : ++index;
      setSentence(otherSentences[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current); // canceled the setInterval method
    };
  }, [sentence]);

  return (
    <>
      <Col className="writer">
        <h2>
          <span className="hello">Hello World !</span> Moi c'est Sylène !
        </h2>
        <h2>Bienvenue sur mon Portfolio réalisé avec NextJs</h2>
        <h3 className="cursor">Je suis {text}</h3>
      </Col>
      <style jsx>
        {`
          .writer {
            text-align: center;
          }
          .cursor {
            display: inline-block;
            position: relative;
          }
          .cursor::after {
            content: "";
            margin: auto;
            position: absolute;
            right: -4px;
            top: -3px;
            width: 1px;
            height: 100%;
            background-color: #666;
            animation: cursor-animation 1.5s step-end infinite;
          }
          .hello {
            font-family: Courier New, Courier, monospace;
          }
          h2 {
            text-align: center;
          }
          h3 {
            margin-left: 20%;
          }
        `}
      </style>
    </>
  );
};

export default TypeWriter;
