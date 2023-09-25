const Header = props => <h1>{props.course}</h1>;

const Part = props => <p> {props.name} {props.exercises} </p>;

const Content = ({ parts }) => (
  <>
    {parts.map((object, index) => (
      <Part {...object} key={index} />
    ))}
  </>
);

const Total = ({ parts }) => <p> Number of exercises = {parts.reduce((total, part) => total + part.exercises, 0)} </p>;

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  );
};

export default App;