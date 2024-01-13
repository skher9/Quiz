import { useState } from "react";

const Hypotenuse = () => {
  const [Ans, setAns] = useState();

  let Input = [
    { name: "Enter base value (a) =_____", value: 0, id: "Base" },
    { name: "Enter height value (b) =_____", value: 0, id: "Height" },
  ];

  function add(Inputval, key) {
    Input.forEach((element) => {
      if (element.id === key) {
        element.value = Inputval;
      }
    });
  }

  const handlechange = (e) => {
    let Inputval = e.target.value;
    let key = e.target.id;
    add(Inputval, key);
  };

  const handleSubmit = () => {
    let baseVal = 0;
    let heightVal = 0;
    let Final = 0;

    Input.forEach((element) => {
      if (element.id === "Base") {
        baseVal = element.value;
        console.log(baseVal);
      } else {
        if (element.id === "Height") {
          heightVal = element.value;
          console.log(heightVal);
        }
      }
      
    });

    Final = Math.hypot(baseVal, heightVal);
    setAns("The length of hypotenuse is  " + Final);
  };

  return (
    <>
      <div>
        <h1>Calculate Hypotenuse of a triangle...</h1>
      </div>
      <div>
        {Input.map((element) => {
          return (
            <div>
              <h2>{element.name}</h2>
              <input
                type="number"
                id={element.id}
                onChange={handlechange}
              ></input>
            </div>
          );
        })}
        <br />
        <br />
        <button onClick={handleSubmit}>Is Hypotenuse...?</button>
      </div>
      <div>
        <h1>Hypotenuse formula</h1>
        <h3>√(base² + height²)</h3>
        <h2>{Ans}</h2>
      </div>
    </>
  );
};

export default Hypotenuse;
