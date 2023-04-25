const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="chicken" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
