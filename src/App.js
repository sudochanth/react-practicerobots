import React from 'react';
import CardList from './CardList';
import Header from './Header';
// import {robots} from './robots';
import SearchBox from './SearchBox'
import axios from 'axios'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        // const response = await axios.get('https://api.vschool.io/sunny/todo');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        console.log(filteredRobots)
        
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div>
                <Header />
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
                
            </div>
        );
        }
    }
};

export default App;