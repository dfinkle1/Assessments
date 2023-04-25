const Person = (props) => {
  let ageReply;
  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);
  if (props.age > 18) {
    ageReply = "please go vote!";
  } else {
    ageReply = "you must be 18";
  }

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
        <ul>
          Hobbies
          {hobbies}
        </ul>
      </ul>
      <h3>{ageReply}</h3>
    </div>
  );
};
