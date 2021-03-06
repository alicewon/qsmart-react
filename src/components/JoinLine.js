import React from 'react';
import { Input, Button, Message } from 'semantic-ui-react'

class JoinLine extends React.Component{

  handleCodeChange = (event) => {
    let code = event.target.value
    this.props.updateCode(code)
  }

  render(){
    return(
      <div>
        <Input size="huge" label="Line Code:" placeholder="Enter code..." onChange={this.handleCodeChange}/>
        <Button positive size="huge" onClick={this.props.joinLine}>Join line!</Button>
        {this.props.joinLineData.error && <Message negative>{this.props.joinLineData.error}</Message>}
      </div>
    )
  }
}

export default JoinLine;
