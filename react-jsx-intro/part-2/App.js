const App = () => {
  return (
    <div>
      <Tweet
        username="drake bell"
        name="drake"
        date="05/04/2019"
        message="I like cows"
      />
      <Tweet
        username="Josh Ketchup"
        name="Josh"
        date="02/14/2020"
        message="I like chicken"
      />
      <Tweet
        username="ChristianBale"
        name="Chris"
        date="01/04/2025"
        message="I like beef"
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
