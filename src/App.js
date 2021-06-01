import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import SearchBar from './Components/Searchbar';
import youtube from './apis/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
  
  class App extends React.Component {
    constructor(){
      super();
      this.state = {
        comments: [],
        videos: [],
        selectedVideo: null
      }
      const api = axios.create({
        baseURL:'http://127.0.0.1:8000/comments/'
      })
      }
      handleSubmit = async (termFromSearchBar) => {
          const response = await youtube.get('/search', {
              params: {
                  q: termFromSearchBar
              }
          })
  
          this.setState({
              videos: response.data.items
          })
      };
      handleVideoSelect = (video) => {
          this.setState({selectedVideo: video})
          console.log(video.id.videoId)
      }
  
      render() {
          return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <SearchBar handleFormSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='col-md-6'>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
          )
      }
  }
  
  export default App;