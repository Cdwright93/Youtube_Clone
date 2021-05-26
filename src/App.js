import './App.css';
import axios from 'axios'
import React, { Component } from 'react';

const api = axios.create({
  baseURL:'http://127.0.0.1:8000/comment/'
})
class App extends Component {
  constructor(){
    super();
    this.state = {
      comments: [],
    }
    this.getComments()
  }
  
  getComments = async () => {
    let data = await api.get('/').then(({ data }) => data)
    this.setState({ comments : data })
    console.log(this.state.comments)
  }
  render() {
    return (
       <h1>Hello World!</h1>
    );
  }
}
export default App