import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Todo.css'

const initialFormValues = {  
        
        title: '', 
        completed: false
}
class ItemForm extends React.Component {
     constructor() { 
         super()
         this.state = { 
             initialFormValues
         }
        }

        handleInput = (event) => { 
             this.setState({ 
                 
                 title: event.target.value, 
                 completed: false
             })
         }

         onFormSubmit = (e) => { 
             e.preventDefault()
             console.log("HERE IS MY FORM STATE", this.state)
             if(this.state.title === '') return 
             this.props.handleSubmit(this.state)
             
         }
         
     
        render() { 
            return (
                <div>
                    <Form onSubmit={this.onFormSubmit} >
                    <FormGroup>
                        <Input type="text"
                         name="title"
                         value={this.state.title}
                         onChange={this.handleInput}
                         placeholder="All I want for Christmas is ..."
                           />
                    </FormGroup>
                    <Button>Submit</Button> <Button>Cancel</Button>
                    </Form>
                </div>
             );

        }
        
}
 
export default ItemForm;