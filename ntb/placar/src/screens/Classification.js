import React from "react"
import { classifications } from "../data";
import Avatar from 'react-avatar';
import { List,Button,Segment,Dimmer,Loader } from "semantic-ui-react"
import {Link} from "react-router-dom"

class Classification extends React.Component {

    state = {
        classifications: [],
        isFetching: false
    }

    fetchClassifications() {
        this.setState({isFetching: true})
        return classifications().then(res => res.json())
        .then(classifications => this.setState({ classifications, isFetching: false }))
    }

    componentDidMount() {
        this.fetchClassifications()
    }

    renderClassification() {
        let { classifications } = this.state
        return classifications.map(classification => {
            return (
                <tbody key={classification.id}>
                  <tr>
                    <td>{classification.name}</td>
                    <td>{classification.points}</td>
                    <td>{classification.victories}</td>
                    <td>{classification.goals}</td>
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
                <h1>Classificação</h1>
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Pontos</th>
                        <th>Vitórias</th>
                        <th>Gols</th>
                    </tr>
                </thead>
                {this.renderClassification()}
                </table>
                <Link
                    to={{ pathname: `/game/create` }}
                    className="btn btn-xs btn-warning">
                    <Button content='+ Novo Jogo' secondary />
                </Link>
                <Link
                    to={{ pathname: `/games` }}
                    className="btn btn-xs btn-warning">
                    <Button content='Jogos' primary />
                </Link>
            </div>
        )
    }
}

export  default Classification