import React, { Component, PropTypes } from 'react'
import * as handler from '../handler/handler'
import DialogButton from './DialogButton.js'
import $ from "jquery"

class EditLayout extends Component {
    constructor(props) {
        super(props)
    }

    removeElement(e) {
        var index = $(e.currentTarget).attr("data-index");
        handler.removeElement(index);
    }


    addElement(imem) {
        handler.addElement(item);
    }

    render() {
        var self = this;
        var ul = this.props.items.map(function (item, index) {
            if (item === "textbox") {
                return (<div>{item}:
                    <input type="text"/>
                    <button data-index={index} onClick={self.removeElement}>-</button>
                </div>)
            }
            else {
                return (<div>{item}:
                    <input type="date"/>
                    <button data-index={index} onClick={self.removeElement}>-</button>
                </div>)
            }
        });
        return (
            <div>
                <div>{ul}</div>
                <DialogButton addElement={this.addElement}></DialogButton>
            </div>
        )
    }
}

export default EditLayout
