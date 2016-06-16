import React, { Component, PropTypes } from 'react'
import * as handler from '../handler/handler'
import EditLayout from './EditLayout.js'
import PreviewLayout from './PreviewLayout.js'
import $ from "jquery"

class Panel extends Component {
  constructor(props) {
    super(props)
  }

  showPreviewLayout() {
    handler.showPreview();
  }

  showEditorLayout() {
    handler.showEditor();
  }

  render() {
    var self = this;
    var layout;
    if (this.state.isEdit) {
      layout =
        <div>
          <input type="button" value="preview" onClick={this.showPreviewLayout}/>
          <EditLayout items={self.items}/>
        </div>
    } else {
      layout =
        <div>
          <input type="button" value="edit" onClick={this.showEditorLayout}/>
          <PreviewLayout items={self.items}/>
        </div>
    }
    return (
      { layout }
    )
  }
}

export default Panel
