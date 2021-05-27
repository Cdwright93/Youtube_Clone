import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        this.createComment();
    }

    //create comment taken from song library project, need to test with comment api
    /*async createSong() {
        let response = await axios.post('http://127.0.0.1:8000/music/', this.state);
        this.setState({
            title: response.data,
            artist: response.data,
            album: response.data,
            release_date: response.data
        });
    } */

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Leave a comment:</label>
                    <br></br>
                    <textarea id='commentSection' name='commentSection' rows='5' cols='70'>
                    </textarea>
                    <br></br>
                    <input type="submit"></input>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Comments:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Comment would go here</td>
                        </tr>
                        <tr>
                            <td>Next comment would go here</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default CommentForm;