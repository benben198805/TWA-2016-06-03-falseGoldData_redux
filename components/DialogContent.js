import React, { Component, PropTypes } from 'react'

class DialogContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            type:"date"
        }
    }

    changeSelect() {
        this.setState({
            type: e.target.value
        })
    }

    submitSelectedType() {
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <div>
                <div><input name="radio" value="date" checked={this.state.type == "date"} onChange={this.changeSelect} type="radio" />datepicker</div>
                <div><input name="radio" value="text" checked={this.state.type == "text"} onChange={this.changeSelect} type="radio" />textbox</div>
                <input type="button" role="dialog-submit" value="submit" onClick={e=>this.submitSelectedType()}/>
                <input type="button" role="dialog-close" value="cancle" onClick={this.props.closeDialog}/>
            </div>
        )

    }

}

export default DialogContent