import React from "react"
import { games } from "../data";
import Avatar from 'react-avatar';
import { List,Button,Segment,Dimmer,Loader } from "semantic-ui-react"
import {Link} from "react-router-dom"

class Games extends React.Component {

    state = {
        games: [],
        isFetching: false
    }

    fetchClassifications() {
        this.setState({isFetching: true})
        return games().then(res => res.json())
        .then(games => this.setState({ games, isFetching: false }))
    }

    componentDidMount() {
        this.fetchClassifications()
    }

    renderGames() {
        let { games } = this.state
        return games.map(game => {
            return (
                <tbody key={game.id}>
                  <tr>
                    <td>{game.team.name}</td>
                    <td>{game.team_home_score}</td>
                    <td>{game.team_visitor_score}</td>
                    <td>{game.team_visitor}</td>
                  </tr>
                </tbody>
            )
        })
    }
    
    render() {
        let {isFetching} = this.state
        if(isFetching) {
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
              </Segment>
            )
        }
        return (
            <div>
                <h1>Todos os Jogos</h1>
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Time da Casa</th>
                        <th>Gols Time da Casa</th>
                        <th>Gols Viitante</th>
                        <th>Time Visitante</th>
                    </tr>
                </thead>
                {this.renderGames()}
                </table>
            </div>
        )
    }
}

export  default Games