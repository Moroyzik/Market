import React, {Component} from 'react'

export default class Fcomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'кнопку нажал'
        }
    }

    render() {
        return(
            <div>
                    <button type="button" class="btn btn-primary" onClick={() => 
                    {this.props.updateData(this.state.name)}}>Жми</button>
            </div>
        )
    }
}

