// const response = axios.get("https://swapi.dev/api/planets/");
// console.log("this line is after axios.get");

const test = async function getData() {
  const response = await axios.get(
    "https://api.spacexdata.com/v3/launches/upcoming"
  );
  const ul = document.querySelector("#launches");
  console.log(response);
  //   const newLI = document.createElement("li");
  for (let launch of response.data) {
    const newLI = document.createElement("LI");
    newLI.innerText = `${launch.mission_name} ${launch.launch_date_local}`;
    ul.append(newLI);
  }
};

const btn = document.querySelector("#getLaunches");
btn.addEventListener("click", test);
