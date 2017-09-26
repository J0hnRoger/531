import * as React from 'react';
import { Form, Button, Container, Label, Divider } from 'semantic-ui-react'

export interface CalculateMyRMProps {

}

export default class CalculateMyRM extends React.Component<CalculateMyRMProps, any> {
  state = {
    result: 0 
  }

  calculate = () => {
    
  }

  render() {
    return (
      <div>
        <Container>
        <h2>Squat</h2>
         <Form>
            <Form.Field>
            <label>Poids :</label>
            <input placeholder='Poids ?' />
            </Form.Field>
            <Form.Field>
            <label>Nombre de rep'? </label>
            <input placeholder='' />
            </Form.Field>
            <Button type='submit' onClick={this.calculate} >Calcules moi ça!</Button>
        </Form>
        </Container>
        <Divider />
        <Label> {this.state.result} KG / 1RM </Label>
      </div>
    );
  }
}
