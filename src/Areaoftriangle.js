import { useState } from "react";

const Areaoftriangle = () => {
  const [Input, setInput] = useState();

  const Sides = [
    {
      name: "Enter first side of a triangle.",
      value: 0,
      id: 0,
    },
    {
      name: "Enter second side of a triangle.",
      value: 0,
      id: 1,
    },
    {
      name: "Enter third side of a triangle.",
      value: 0,
      id: 2,
    },
  ];

  function add(Val, key) {
    Sides.forEach((element) => {
      if (element.id === key) {
        element.value = Val;
      }
    });
  }

  const handleChange = (e) => {
    let Val = e.target.value;
    let key = e.target.id;
    add(Val, key);
  };

  function Area() {
    let s = 0;
    let area = 0;
    let abc = [];

    Sides.forEach((element, id) => {
      let val = parseInt(element.value);
      s = val + s;
      abc[id] = element.value;
    });

    s = s / 2;

    area = Math.sqrt(s * ((s - abc[0]) * (s - abc[1]) * (s - abc[2])));

    console.log(area);

    return area;
  }

  const handleSubmit = () => {
    let Final = Area();
    setInput("Area of a triangle using heron's formula is " + Final + " units");
  };

  return (
    <>
      <div>
        <h1>Calculate Area of a triangle...</h1>
      </div>
      <div>
        {Sides.map((element, id) => {
          return (
            <div>
              <h2>{element.name}</h2>
              <input type="number" id={id} onChange={handleChange}></input>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <button onClick={handleSubmit}>Calculate</button>
      <br />
      <br />
      <h2>{Input}</h2>
    </>
  );
};

export default Areaoftriangle;
