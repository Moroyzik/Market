import React, { Component } from 'react'
import './stylesNew.css';
import Fcomponent from './Fcomponent'


class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'кнопку не нажал'
        };

        this.updateData = this.updateData.bind(this);
    }

    updateData(value) {
        this.setState({
            name: value
        })
    }

    render() {
        return(
            <div>
               <p>Состояние: {this.state.name}</p>
               <Fcomponent updateData={this.updateData}/>
            </div>
        )
    }
}

export default Ccomponent;