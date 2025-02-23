import React from 'react';
import axios from 'axios';
import List from './components/List';
import Add from './components/Add';

class App extends React.Component {
  state = {
    moath: 1,
    colorText: 'red',
    todos: [
      {
        id: 1,
        title: 'eat pizza',
        isCompleted: true
      },
      {
        id: 2,
        title: 'eat sban5',
        isCompleted: false
      },
      {
        id: 3,
        title: 'say aseeeeeem',
        isCompleted: false
      }
    ]
  };



  edit =ID => {
    axios
      .put(`http://localhost:9000/edit/${ID}`)
      .then(r => {
        this.setState({ todos: r.data });
      })
      .catch(error => {
        console.log(error);
      });
  };




  deleteItem = ID => {
    // console.log('id', ID);
    // let newState = this.state.todos.filter((elem, i) => {
    //   // return false
    //   return ID !== elem.id;
    // });
    // this.setState({ todos: newState });

    axios.delete(`http://localost:9000/delete/${ID}`)
    .then(r => {
      // handle success
      console.log(r.data);
      this.setState({ todos: r.data });
    })
  };



  getRequest = () => {
    console.log('get request called');
    axios
      .get('http://localhost:9000/data')
      .then(r => {
        // handle success
        console.log(r.data);
        this.setState({ todos: r.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };



  // item like {id:77, title : "eat" , isCompleted : false}
  addItem = title => {
    axios.post(`http://localhost:9000/addNewTask`,{
      
title     
    })
    .then(({data})=> {
      // console.log(response);
      this.setState({repos:data})
    })
  };
  

  render() {
    const { state, edit, deleteItem, addItem } = this;
    const { todos, moath, colorText } = state;
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h1 style={{ color: colorText }}>{moath}</h1>
        {/* <button onClick={edit.bind(this, 3)}>toggle</button> */}
        <button onClick={this.getRequest}>get Request</button>
        <br />
        {/* <button onClick={deleteItem.bind(this, 2)}>deleteItem</button> */}
        {/* <button
          onClick={addItem.bind(this, {
            id: 77,
            title: 'eat',
            isCompleted: false
          })}
        >
          AddItem
        </button> */}

        <br />
        <Add addItem={addItem} />
        <List toggle={edit} todos={todos} deldel={deleteItem} />
        {/* <h6>App component1</h6> */}
        {/* <h1>{todos[1].title}</h1> */}
      </div>
    );
  }
}

export default App;
