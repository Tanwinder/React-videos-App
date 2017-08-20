import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_details';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDR7PZ35d74BpYyeu1hMDTB7XKNnngMozI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    };

    YTSearch({key:API_KEY, term: this.state.term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });  // this.setState({videos: videos})  ES6 beauty
    })
  }
  render() {
    return (
      <div className="my-app">
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    )
  }
}

// const App = () => {                      //functional component
//   return (
//     <div>
//     <SearchBar />
//     </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector('.container'));
