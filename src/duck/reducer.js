import {createReducer} from 'redux-starter-kit'


addUser = newUser => {
    this.setState({
      personDatas: [newUser, ...this.state.personDatas]
    })
  }


const addUser = (state,action) newUser => {
    const {type, payload} = action
    this.setState({
      personDatas: [newUser, ...this.state.personDatas]
    })
  }