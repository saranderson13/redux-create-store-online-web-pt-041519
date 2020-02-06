let store = createStore();
let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})


function createStore() {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  return { 
    dispatch,
    getState 
  };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};



function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

store.dispatch({ type: '@@INIT' })

