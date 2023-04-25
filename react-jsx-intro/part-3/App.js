const App = () => {
  return (
    <div>
      <Person
        name="Jim"
        age={15}
        hobbies={["fighting", "singing", "driving"]}
      />
      <Person
        name="Carol"
        age={20}
        hobbies={["bowling", "stealing", "gaming"]}
      />
      <Person
        name="MaxineDaisy"
        age={25}
        hobbies={["fishing", "eating", "sleeping"]}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
