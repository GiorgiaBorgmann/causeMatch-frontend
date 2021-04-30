const donorReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_DONOR':
        return state.concat([action.payload]);
      default:
        return state;
    }
  };
  export default donorReducer;