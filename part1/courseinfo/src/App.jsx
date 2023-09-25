const Header = (props) => <h1>{props.course}</h1>

const Part = props => <p>{props.name} {props.exercises}</p>

const Content = ({parts}) => (
    <>
      {
        parts.map((object, index) => <Part {...object} key={index}/>)
      }
    </> 
)

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((total, part) => total + part.exercises,0)}</p>
  )
}

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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
