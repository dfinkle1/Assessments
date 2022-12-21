const $btn = $("#submit");
const $search = $("#search");
// $search.val("");
$btn.on("click", async function (evt) {
  evt.preventDefault();
  let searchName = $search.val();

  if (searchName.length <= 0) {
    alert("Please put in a word");
  } else {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: { q: searchName, key: "7Okz7FX3bnzQN1m0n2lPQdBlh2t2kyjj" },
    });
    renderGip(response.data);
    //   console.log(response);
  }
});

//   }
//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: { q: searchName, key: "7Okz7FX3bnzQN1m0n2lPQdBlh2t2kyjj" },
//   });
//   renderGip(response.data);
//   //   console.log(response);
// });

function renderGip(gifs) {
  const ul = document.querySelector("#gifs");
  const $numOfGifs = gifs.data.length;
  //   const $newImg = $("<img/>");
  let randomIndex = Math.floor(Math.random() * $numOfGifs);
  const randomImg = gifs.data[randomIndex].images.original.url;
  $("<img/>")
    .addClass("col-sm-3 col-md-4 col-lg-6")
    .attr("src", `${randomImg}`)
    .appendTo("#gifs");
  //  let randomImg = gifs.data[randomIndex].images.original.url;

  //   console.log(randomIndex);
}

$("#remove").on("click", function (e) {
  e.preventDefault();
  $("img").remove();
});

// function makeNewGip(gifff) {
//   const newLI = document.createElement("LI");
//   newLI.innerText = "hello";
// }
// console.log(gip.data.data[0].url);

// const value = gip.data.data[0] * Math.floor(Math.random() * 50);

// 7Okz7FX3bnzQN1m0n2lPQdBlh2t2kyjj
