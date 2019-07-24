import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Zip from './components/zip';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      fetched: true
    }
  }

  async passZip(zip){    
    try{
      let temp = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${zip}`);
      this.setState({
        data:temp.data,
        fetched:true
      })
    }
    catch(err){
      console.log(err);
      this.setState({
        fetched:false
      })
    }
  }

  handleChange = (props) =>{
    let zip = props.target.value;
    this.passZip(zip);
  }

  render() {
    return (
      <div>
        <div className="header">Zip Code Search</div>
          <div className="center">
            <h3>Zip Code:</h3>
            <input type="text" onChange={(props)=>this.handleChange(props)}></input>
          </div>
          <div className="display">
            {this.state.fetched? (
              <div>
                <Zip data={this.state.data}></Zip>
              </div>
            ):(
              <div>No Results</div>
            )}
          </div>
      </div>
    );
  }
}

export default App;
