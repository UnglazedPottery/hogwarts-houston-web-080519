import React from 'react'
export default class HogSpecificCard extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.resetState}>back</button>
                <h1>{this.props.CurrentHog.name}</h1>
                <img src={this.props.CurrentHog.image}/>
                <h2>{`Specialty: ${this.props.CurrentHog.specialty}`}</h2>
                <h2>{`Greased: ${this.props.CurrentHog.greased}`}</h2>
                <h2>{`Weight: ${this.props.CurrentHog.weight}`}</h2>
                <h2>{`Highest Medal Achieved: ${this.props.CurrentHog.highestMedalAchieved}`}</h2>
            </div>
        )
    }
}