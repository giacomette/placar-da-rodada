import React from "react"
import { teams, create_game } from "../data";
import Avatar from 'react-avatar';
import { List,Button,Segment,Dimmer,Loader, Checkbox, Form,Grid,Input } from "semantic-ui-react"
import {Link} from "react-router-dom"
import Select from "../components/Select"

class CreateGame extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeHome = this.handleChangeHome.bind(this);    
        this.handleChangeVisitor = this.handleChangeVisitor.bind(this);    
        this.state = {
            teams: [],
            options: [],
            isFetching: false,
            visitor: '',
            home: '',
            homeScore: '',
            visitorScore: ''
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let { visitor, home, homeScore, visitorScore} = this.state
        console.log(visitor, home, homeScore, visitorScore)
         return fetch('http://localhost:3000/v1/games', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              team_visitor_score: visitorScore,
              team_home_score: homeScore,
              team_id: home,
              team_visitor: visitor
            }),
          }).then(() => this.props.history.push("/games"));
      }
    

    fetchTeams() {
        this.setState({isFetching: true})
       return teams().then(res => res.json()).then(teams => this.setState({teams, isFetching: false}))
        
    }

    componentWillMount() {
        this.fetchTeams()
    }

    handleChangeVisitor(event) {
        this.setState({ visitor: event.target.value });
    }

    handleChangeHome(event) {
        this.setState({ home: event.target.value });
    }

    render() {
        let {isFetching, teams} = this.state
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
                <h1>Novo Jogo</h1>
               <Grid columns={5} divided>
                <Grid.Row>
                    <Form.Field>
                        <Select value={this.state.home} onChange={this.handleChangeHome} team={teams} />
                    </Form.Field>
                    <Form.Field>
                    <Input onChange={e => this.setState({homeScore: e.target.value})} placeholder="Gols" />
                    </Form.Field>
                    <p padding={20}>X</p>
                    <Form.Field>
                        <Input onChange={e => this.setState({visitorScore: e.target.value})} placeholder="Gols" />
                    </Form.Field>
                    <Form.Field>
                    <Form.Field>
                        <Select value={this.state.visitor} onChange={this.handleChangeVisitor} team={teams} />
                    </Form.Field>
                    </Form.Field>
                </Grid.Row>
                <Button onClick={this.handleSubmit.bind(this)} secondary>Salvar</Button>
             </Grid>
            </div>
        )
    }
}

export  default CreateGame