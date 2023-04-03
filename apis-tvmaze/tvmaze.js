"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");
const $episodesList = $("#episodes-list");

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

const url = "https://api.tvmaze.com/search/shows?q=bletchley";
const TV_MAZE_API = "https://api.tvmaze.com/search/shows?q=";
const TV_MAZE_EPISODES = "https://api.tvmaze.com/shows/";
// https://api.tvmaze.com/shows/590/episodes /shows/:id/episodes

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(response);
  console.log(data);
  getShowsByTerm(data);
}

async function getShowsByTerm(term) {
  const response = await fetch(`${TV_MAZE_API}${term}`);
  const data = await response.json();
  // console.log(data);
  return await data;
  // console.log(term);
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  // console.log(term[0].show.id);
  // populateShows(data);
  // console.log(data);
}
async function getEpisodesById(id) {
  const response = await fetch(`${TV_MAZE_EPISODES}${id}/episodes`);
  const data = await response.json();
  populateEpisodes(data);
  console.log(id);
  console.log(data);
  // console.log(id);
}

function populateEpisodes(id) {
  $(".modal-body").empty();
  for (let episodes of id) {
    // console.log(episodes);

    const $episodes = $(
      `<li>Name: ${episodes.name}  Season: ${episodes.season}  Episodes: ${episodes.number}</li>`
    );
    // $episodesArea.show();
    $(".modal-body").append($episodes);
    $episodesArea.show();
  }
}

/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();
  for (let show of shows) {
    // console.log(show.show.id);
    const $show = $(
      `<div data-show-id="${show.show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src=${show.show.image.medium} 
              alt="hahaha not an image"
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.show.name}</h5>
             <div><small>${show.show.summary}</small></div>
             <button type="button" class="btn btn-primary Show-getEpisodes" data-bs-toggle="modal" 
             data-bs-target="#exampleModal" id="${show.show.id}">
              Episodes
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

           </div>
         </div>  
       </div>
      `
    );
    // <button class="btn btn-light btn-sm Show-getEpisodes" id="${show.show.id}">
    //            Episodes
    //          </button>
    const id = show.show.id;
    // getEpisodesById(id);
    // console.log(show.name);

    $showsList.append($show);
  }
}

// function getEpisodesById(episodes) {
//   for (let episode of episodes) {
//     console.log(episode.show.id);
//   }
// }

/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

// $(".Show-getEpisodes").on("click", function (e) {
//   $("li").css("display", "block");
// });

async function searchForShowAndDisplay() {
  const term = $("input").get(0).value;
  const shows = await getShowsByTerm(term);
  const episodes = await getShowsByTerm(term);
  // console.log(shows);
  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

$showsList.on("click", ".Show-getEpisodes", function (e) {
  getEpisodesById(e.target.id);
});

/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) { }

/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
