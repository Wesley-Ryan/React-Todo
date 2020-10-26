import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Todo.css'



class ItemForm extends React.Component {
     constructor() { 
         super()
         this.state = { 
            title: '', 
            completed: false
         }
        }

        handleInput = (event) => { 
             this.setState({ 
                 title: event.target.value, 
                 completed: false
             })
         }

         onFormCancel = () => { 
            this.setState({ 
                title: '', 
                completed: false
             })
         }

         onFormSubmit = (e) => { 
             e.preventDefault()
             if(this.state.title === '') return 
             this.props.handleSubmit(this.state)
             this.setState({ 
                 title: '', 
                 completed: false
              })
         }
         
     
        render() { 
            return (
                <div id='component'>
                    <Form onSubmit={this.onFormSubmit} >
                    <FormGroup>
                        <Input type="text"
                         name="title"
                         value={this.state.title}
                         onChange={this.handleInput}
                         placeholder="All I want for Christmas is ..."
                           />
                    </FormGroup>
                    <Button color="success">Submit</Button> <Button onClick={this.onFormCancel} color='danger'>Cancel</Button>
                    </Form>
                </div>
             );

        }
        
}
 
export default ItemForm;