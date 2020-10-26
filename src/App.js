import React from 'react';
import ItemList from './components/ItemList'
import ItemForm from './components/ItemForm';
import "./components/Todo.css"

const items = [{ 
  title: "Gift Card", 
  completed: false
}, 
{  
  title: "Socks", 
  completed: false
}]


class App extends React.Component {
  constructor(){ 
    super() 
      this.state= { 
        items:items
      }
    }

    handleSubmit = (item) => {
      this.setState({items: [...this.state.items, item]});
  }

    handleCompletedItem = () => { 
      console.log("this is completed")
    }
    handleDelete = (index) => { 
      const newList = [...this.state.items]
      newList.splice(index, 1)
      this.setState({items: newList})
    }


  render() {
    return (
      <div className="item-container">
        <h1>Christmas Wish List</h1>
        <div className="container shadow-lg">
        
          <ItemList items={this.state.items} handleDelete={this.handleDelete}/>
          <ItemForm handleSubmit={this.handleSubmit}  />
        </div>
      </div>
    );
  }
}

export default App;
