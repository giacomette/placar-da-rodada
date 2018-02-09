import { post } from './fetcher';

function create_game(team_visitor_score, team_home_score, team_id, team_visitor) {
    return post('public', '/games', { team_visitor_score, team_home_score, team_id, team_visitor })
}

export { create_game }