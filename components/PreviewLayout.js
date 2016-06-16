import React, { Component, PropTypes } from 'react'

class PreviewLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var ul = this.props.items.map(function (item) {
            if (item == "textbox") {
                return (<div>{item}: <input type="text"/></div>)
            }
            else {
                return (<div>{item}: <input type="date"/></div>)
            }
        });
        return (
            <div>{ul}</div>
        )
    }
}

export default PreviewLayout
