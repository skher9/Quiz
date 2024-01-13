import { useState } from "react";

const Triangle = () => {
  const [input, setinput] = useState();
  const [Ans, setAns] = useState("");

  let Angle = [
    {
      name: "Angle 1",
      key: 0,
      value: 0,
    },
    {
      name: "Angle 2",
      key: 1,
      value: 0,
    },
    {
      name: "Angle 3",
      key: 2,
      value: 0,
    },
  ];

  const handlechange = (e) => {
    const id = e.target.id;
    const inputVal = e.target.value;
    Addval(inputVal, id);
    setinput(inputVal)
  };

  const Addval = (inputVal, id) => {
    Angle.forEach((element) => {
      if (element.key === id) {
        element.value = inputVal;
      }
    });
  };

  function checkTriangle() {
    let Ans = 0;
    let val;

    Angle.forEach((element) => {
      val = parseInt(element.value);
      Ans = Ans + val;
    });

    if (Ans === 180) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit() {
    let Final = false;
    Final = checkTriangle();

    if (Final === true) {
      setAns("Yay, the angles form a triangle!");
    } else {
      setAns("Oh Oh! The angle doesn't form a triangle");
    }
  }

  return (
    <>
      <div>
        <h1>Angles of triangles...</h1>
      </div>
      <div>
        {Angle.map((angle, id) => {
          return (
            <div>
              <h1>{angle.name}</h1>
              <input
                type="number"
                value={input}
                id={id}
                onChange={handlechange}
              ></input>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <button onClick={handleSubmit}>Is Triangle?</button>
      <br />
      <br />
      <h2>{Ans}</h2>
    </>
  );
};

export default Triangle;
