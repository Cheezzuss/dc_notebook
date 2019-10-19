const initState = {}

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTE_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_NOTE_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default noteReducer;