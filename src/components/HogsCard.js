import React from 'react'
export default class HogsCard extends React.Component{
    render(){
        return(
            <div onClick={()=> this.props.setHog(this.props.hog)}>
                <h1>{this.props.hog.name}</h1>
                <img src={this.props.hog.image} alt=""/>
            </div>
        )
    }
}