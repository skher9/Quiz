import { useState } from "react";

const Quiz = () => {
  const [points, setpoints] = useState();

  const abc = [
    {
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: [
        {
          value: "45°",
        },
        { value: "90°" },
        {
          value: "60°",
        },
      ],
      id: 1,
    },
    {
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: [
        {
          value: "obtuse",
        },
        { value: "acute" },
        {
          value: "right angled",
        },
      ],
      id: 2,
    },
    {
      question: "A triangle can have____________?",
      options: [
        {
          value: "one right angle",
        },
        { value: "two right angles" },
      ],
      id: 3,
    },
    {
      question: "Which of the following can form a right angled triangle?",
      options: [
        {
          value: " 14, 15, 26",
        },
        { value: "12, 16, 20" },
      ],
      id: 4,
    },
    {
      question: "Which of the following triangles are always similar?",
      options: [
        {
          value: "Equilateral triangle",
        },
        { value: "Isosceles triangle" },
      ],
      id: 5,
    },
    {
      question:
        "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
      options: [
        {
          value: "100°",
        },
        { value: "85°" },
      ],
      id: 6,
    },
    {
      question:
        "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
      options: [
        {
          value: "30°",
        },
        { value: "10°" },
      ],
      id: 7,
    },
    {
      question:
        "The perimeter of scalene triangle with sides a, b, c is_________?",
      options: [
        {
          value: "a + b + c",
        },
        { value: "2a" },
        { value: "None of these" },
      ],
      id: 8,
    },
    {
      question: "A scalene triangle has _______ lines of symmetry",
      options: [
        {
          value: "two ",
        },
        { value: "no" },
        { value: "15" },
      ],
      id: 9,
    },
    {
      question:
        "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
      options: [
        {
          value: "85°",
        },
        { value: "65°" },
        { value: "45°" },
      ],
      id: 10,
    },
  ];

  let Input = [];

  const Answers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

  const handle = (e) => {
    let userAns = e.target.value;
    Input.push(userAns);
  };

  const compare = () => {
    const val = Answers.length;
    let counter = 0;

    for (let i = 0; i < val; i++) {
      if (Input[i] === Answers[i]) {
        counter = counter + 1;
      }
    }

    setpoints(counter);
  };

  function handlesubmit(e) {
    compare();
  }

  return (
    <>
      <div className="Header-two">
        <h1>Quiz on triangles</h1>
        <h3>For each answer you will get 1 point.</h3>
      </div>

      <div className="Body">
        <form>
          {abc.map((i) => {
            return (
              <fieldset>
                <legend required>{i.question}</legend>
                {i.options.map((option) => {
                  return (
                    <lable>
                      <input
                        type="radio"
                        name={i.id}
                        value={option.value}
                        onChange={handle}
                      ></input>
                      {option.value}
                    </lable>
                  );
                })}
              </fieldset>
            );
          })}
        </form>
        <button onClick={handlesubmit}>Submit</button>
      </div>

      <div>
        <h1> The Score is :{points} </h1>
      </div>

      <div className="Footer">
        <p>hsdbhsdbjcfksdclsmlsakd</p>
      </div>
    </>
  );
};

export default Quiz;
