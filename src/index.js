import React, {Component}from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/Video_list";
const API_KEY="AIzaSyAX9d9kTF9vaPeluSHhLDfddaa5QIXJvzA";


class App extends Component{
  constructor(props){
    super(props)
    this.state={videos: []}
    YTSearch({key: API_KEY, term: "surfaceboad"},(videos)=>{
      this.setState({videos})
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector(".container"));
