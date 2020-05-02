import React, { Component } from 'react'
import './stylesNew.css';
import Fcomponent from './Fcomponent'


class Ccomponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'ты НЕ купил эти педали'
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
               <p>{this.state.name}</p>

               <img src="https://static.rendez-vous.ru/files/catalog_models/resize_640x630/1/1868764_krossovki_ash_addict_belyy_kozha_natural_naya.JPG" alt="image name"/>
                <p>Купить педали</p>
                <p>Цена: 40 гривень!</p>
               <Fcomponent updateData={this.updateData}/>
            </div>
        )
    }
}

export default Ccomponent;