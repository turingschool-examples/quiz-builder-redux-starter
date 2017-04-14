const initialState = [
  {id: 1, name: 'User-1'}
]

const users = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log("Adding a User!")
      return [...state, {id: state.length++, name: `User-${state.length++}`}]
    default:
      return state;
  }
}

export default users
