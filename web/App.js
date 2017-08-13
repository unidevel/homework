import React, { Component } from 'react';
import logo from './logo.svg';
import Uploader from './Uploader'
import {Button} from 'react-bootstrap'
import './App.css';
import request from 'superagent'

class App extends Component {
  state = {
    file: null,
    uploaded: false,
    error: null
  }
  handleFileChanged = (file)=>{
    console.log('handleFileChanged', file)
    this.setState({file: file})
  }

  handleUpload = ()=>{
    var file = this.state.file
    request.post('/upload')
      .attach('file', file[0])
      .end((err, res)=>{
        if ( res.statusCode != 200 ) {
          this.setState({uploaded: true, error: res.text})
        }
        else {
          var result = res.body || {}
          this.setState({uploaded: true, error: result.err})
        }
      })
  }

  renderResult(error){
    if ( error ){
      return (
        <div className="h3 text-danger">
          <p>上传失败，请<a onClick={()=>{window.location.reload()}}>刷新重试</a></p>
          <p>错误信息：<span dangerouslySetInnerHTML={{__html:error}}/></p>
        </div>
      )
    }
    else {
      return (
        <div className="h3 text-success">
          上传成功
        </div>
      )
    }
  }

  render() {
    var {file, uploaded, error} = this.state
    var hasFile = !!this.state.file
    return (
      <div className="App">
        <div className="App-header">
          <h2>作业上传</h2>
        </div>
        {uploaded ?
          this.renderResult(error) :
          (
            <div key="uploader" className="App-body">
              <Uploader onChange={this.handleFileChanged}/>
              <Button disabled={!hasFile} onClick={this.handleUpload}>上传文件</Button>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
