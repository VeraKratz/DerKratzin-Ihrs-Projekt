import reducer from './reducer'
import {addUser} from './reducer'



describe('reducer', () => {
  it('has a test', () => {
    expect(true).toEqual(true)
  })
})

it('can addUser', () => {
  const state= {user : []}
  const newState = reducer (state, {type:'newUser', payload: 'foo'
})

  expect(newState).toEqual({ user: [{: 'text?'foo', done:false}]}
  
  )

})
