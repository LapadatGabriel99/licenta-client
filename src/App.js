import logo from './logo.svg';
import './App.css';
import { Form, FormGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Form>
        <FormGroup>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
                        placeholder='Enter username'
                        name='username'/>
        </FormGroup>
        <FormGroup>
          <Form.Label></Form.Label>
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;
