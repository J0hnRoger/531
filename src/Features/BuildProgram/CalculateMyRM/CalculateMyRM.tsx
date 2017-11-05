import * as React from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../ProgramRedux'
import { Form, Button, Container, Divider, Message } from 'semantic-ui-react'


export interface ReduxProps {
  onCalculate: (weight: number, nbReps: number) => any;
}

class CalculateMyRM extends React.Component<ReduxProps, any> {
  state = {
    result: 0,
    loading: false,
    success: false,
    weight: 0,
    nbReps: 0
  }

  onChange = (event: any) => {
    let state = this.state
    const target = event.target
    state[target] = event.value
    this.setState({
      state
    })
  }

  calculate = () => {
    this.props.onCalculate && this.props.onCalculate(this.state.weight, this.state.nbReps)
    this.setState({
      success: true
    })
  }

  render() {
    return (
      <div>
        <Container>
        <h2>Squat</h2>
         <Form loading={this.state.loading} success={this.state.success} >
         <Message
            success >
            <h4>Your 1RM for the Squat is : </h4>
            {this.state.result}
          </Message>
            <Form.Field>
            <label>Poids :</label>
            <input placeholder='Poids soulevé ?' name="weight" onChange={this.onChange} />
            </Form.Field>
            <Form.Field>
            <label>Nombre de rep'? </label>
            <input placeholder='Nombre de fois ?' name="reps" onChange={this.onChange}/>
            </Form.Field>
            <Button type='submit' onClick={this.calculate} >Calcules moi ça!</Button>
        </Form>
        </Container>
        <Divider />
      </div>
    );
  }
}

export default connect(null,
  {
    onCalculate: actionCreators.calculateRM
  }
)(CalculateMyRM) 