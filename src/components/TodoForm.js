import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Todo.css'


const TodoForm = () => {
     
        return (
            <div>
                <Form >
                <FormGroup>
                    <Input type="text"
                     name="todo"
                      placeholder="All I want for Christmas is ..."
                       />
                </FormGroup>
                <Button>Submit</Button> <Button>Cancel</Button>
                </Form>
            </div>
         );
}
 
export default TodoForm;