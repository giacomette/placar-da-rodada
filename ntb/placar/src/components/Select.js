import React from "react"

const Select = props => {
    return (
        <div>
            <select className="ui selection dropdown" value={props.value} onChange={props.onChange}>
                {props.team.map(team => {
                    return (
                    <option value={team.id}>{team.name}</option>
                    )
                })
                }
            </select>
        </div>
    )
}

export default Select