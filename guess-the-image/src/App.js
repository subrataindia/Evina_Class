import React, { useState } from "react";
import "./styles.css";
import win from "./img/win.gif";

const GAME = [
  {
    url:
      "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg",
    imgName: "tiger",
    hint: "__ge_"
  },
  {
    url:
      "https://cdn.pixabay.com/photo/2013/06/30/18/56/butterfly-142506_960_720.jpg",
    imgName: "butterfly",
    hint: "bu____f__"
  },
  {
    url:
      "https://cdn.pixabay.com/photo/2016/04/17/16/37/frog-1335022_960_720.jpg",
    imgName: "frog",
    hint: "f_o_"
  },
  {
    url:
      "https://cdn.pixabay.com/photo/2016/08/31/18/19/snake-1634293_960_720.jpg",
    imgName: "snake",
    hint: "_n__e"
  }
];
export default function App() {
  const [inpText, setInpText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [ind, setInd] = useState(0);

  return (
    <div className="App">
      <h1>Guess The Image</h1>
      {isFinished ? (
        <img src={win} style={{ width: 300 }} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            src={GAME[ind].url}
            style={{ width: 150, height: 150, borderRadius: 75 }}
          />
          <div>
            <input
              type="text"
              style={{ marginTop: 20 }}
              value={inpText}
              onChange={(e) => {
                console.log(e.target.value);
                setInpText(e.target.value);
                console.log(e.target.value === "tiger");
              }}
            />
            {inpText === GAME[ind].imgName ? (
              <span>✔️</span>
            ) : inpText === "" ? (
              <span></span>
            ) : (
              <span>❌</span>
            )}
          </div>
          <button
            disabled={inpText !== GAME[ind].imgName}
            style={{ marginTop: 20 }}
            onClick={() => {
              if (ind < GAME.length - 1) {
                setInd((prev) => prev + 1);
              } else {
                setIsFinished(true);
              }
              setInpText("");
            }}
          >
            Next Image
          </button>
        </div>
      )}
    </div>
  );
}
