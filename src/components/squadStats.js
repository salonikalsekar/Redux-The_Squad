import React, { Component } from 'react';
import { connect } from 'react-redux';


class SquadStats extends Component{
    strength(){
        let strength=0;
        this.props.heroes.forEach(hero => strength += hero.strength); 
            return strength;
        
    }

      intelligence(){
        let intelligence=0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence); 
            return intelligence;
        
    }

      speed(){
        let speed=0;
        this.props.heroes.forEach(hero => speed += hero.speed); 
            return speed;
        
    }
    render(){
        return(
            <div>
                <h4>STATISTICS:</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>TOTAL STRENGTH:</b> { this.strength()}
                    </li>
                    <li className="list-group-item">
                     <b>TOTAL INTELLIGENCE:</b> { this.intelligence()}
                    </li> 
                     <li className="list-group-item">
                     <b>TOTAL SPEED:</b> { this.speed()}
                    </li>
                </ul>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, null)(SquadStats);
