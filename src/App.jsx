import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const btnInfo = [
    {
      color: "red",
      text: "Red",
      textColor: "white"
    },
    
    {
      color: "green",
      text: "Green",
      textColor: "white"
    },
    {
      color: "blue",
      text: "Blue",
      textColor: "white"
    },
    {
      color: "olive",
      text: "Olive",
      textColor: "white"
    },
    {
      color: "gray",
      text: "Gray",
      textColor: "white"
    },
    {
      color: "yellow",
      text: "Yellow",
      textColor: "black"
    },
    {
      color: "pink",
      text: "Pink",
      textColor: "black"
    },
    {
      color: "purple",
      text: "Purple",
      textColor: "black"
    },
    {
      color: "lavender",
      text: "Lavender",
      textColor: "black"
    },
    {
      color: "white",
      text: "White",
      textColor: "black"
    },
    {
      color: "black",
      text: "Black",
      textColor: "white"
    }
  ]

  function onHandelClick(colorValue) {
    setColor(colorValue);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white p-2 rounded-xl">
          {
            btnInfo.map((btn, index) => {
              return <CustomBtn key={index} btn={btn} onHandelClick={onHandelClick} />
            })
          }
        </div>
      </div>
    </div>
  );
}

function CustomBtn({btn, onHandelClick}) {
  console.log(btn);

  function handelClick(colorValue) {
    onHandelClick(colorValue);
  }

  
  return (
    <button
      className="px-3 py-1 rounded-lg shadow-lg cursor-pointer"
      style={{
        backgroundColor: btn.color,
        color: btn.textColor
      }}
      onClick={() => handelClick(btn.color)}
    >
      {btn.text}
    </button>
  );
}

export default App;
