import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

export default class Uploader extends Component {
  state = {
    accepted: [],
    rejected: []
  }

  renderFile(){
    var {accepted = [], rejected = []} = this.state
    if ( rejected[0] ) {
      return (<label className="h4 text-danger">{rejected[0].name}</label>)
    }
    else {
      return (<label className="h4 text-success">{accepted[0].name}</label>)
    }
  }

  render(){
    var {accepted = [], rejected = []} = this.state
    var hasFile = accepted.length > 0 || rejected > 0;
    return (
      <section className="uploader">
        <div className="dropzone">
          <Dropzone
            multiple={false}
            accept=".doc, .docx, .txt"
            onDrop={(accepted, rejected) => {
              this.setState({ accepted, rejected });
              if ( this.props.onChange ) {
                this.props.onChange(accepted);
              }
            }}
          >
            {hasFile? this.renderFile():(
              <div>
                <p className="h4 text-info">请将文件拖拽至此处，或点击此区域上传文件</p>
                <p className="h4 text-info">注意：仅支持 *.doc, *.docx, *.txt 文件</p>
              </div>
            )}
          </Dropzone>
        </div>
      </section>
    )
  }
}
