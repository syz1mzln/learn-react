import React, { Component } from "react";
import netflixOriginals from "../../asset/homeList.json";
import trendingNow from "../../asset/myListList.json";
import PosterList from "../../Component/PosterList/PosterList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <PosterList title="netflix originals" posters={netflixOriginals} />
        <PosterList title="trending now" posters={trendingNow} />
      </div>
    );
  }
}
