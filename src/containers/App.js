import React, { Component } from 'react';
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";



class App extends Component {
    constructor(){
        super();
        this.state = {
            searchfield :'',
            robots : []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }


    onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value});

 
}
    render() {
        const foundRobots = this.state.robots.filter(robot => {
            return(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        });
        return (
            <div className="tc">
                <h1 className="Header f1">Robot Friends</h1>
                <SearchBox searchChange ={this.onSearchChange} />
                <Scroll>
                  < CardList robots = {foundRobots}  />
                </Scroll>
            </div>
         );
    }
}

  
export default App;
