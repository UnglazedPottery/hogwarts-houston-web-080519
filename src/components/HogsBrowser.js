import React from 'react'
import HogsCard from './HogsCard.js'

export default class HogsBrowser extends React.Component{

    state= {
        hogs: [],
        filter: ""
    }

    componentDidMount(){
        fetch('http://localhost:3002/hogs')
          .then(response => response.json())
          .then(result => this.setState({
              hogs: result
          }))
    }
    ChangeFilter = (value) => {
        this.setState({
            filter: value
        })
    }
    render(){
        let filter = ""
        if (this.state.filter === "greased"){
            filter = this.state.hogs.filter(hog => hog.greased == true)
        } else if (this.state.filter === ""){
            filter = this.state.hogs
        } else if (this.state.filter === "weight"){
            filter = this.state.hogs.sort((hogA, hogB) => {
                if(hogA.weight > hogB.weight){
                    return +1
                } else {
                    return -1
                }
            })
        } else if (this.state.filter === "name"){
            filter = this.state.hogs.sort((hogA, hogB) => {
                if(hogA.name > hogB.name){
                    return +1
                } else {
                    return -1
                }
            })
        }
        
        return(
            <div>
                <select onChange={e => this.ChangeFilter(e.target.value)}>
                    <option value="">No Filter</option>
                    <option value ="weight">Weight</option>
                    <option value="greased">Greased</option>
                    <option value="name">Name</option>
                </select>
                <h1>Hi I'm Hogs Index</h1>
                {filter.map( hog => {
                    return <HogsCard hog={hog} key={hog.id} setHog={this.props.setHog}/> 
                })
                }
            </div>
        )
    }
}

//     toggleAtWar(clickedDragon){
//     this.setState({
//         dragons: this.state.dragons.map( dragon => {
//             if(dragon === clickedDragon){
//                 return {...dragon, atWar: !dragon.atWar}
//             }else{
//                 return dragon
//             }
//         })
//     })
// }