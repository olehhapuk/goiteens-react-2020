import { connect } from 'react-redux';

import { timerIncrementAction } from '../redux/store';

function Timer({ increment }) {
  return (
    <div>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(timerIncrementAction),
  };
}

export default connect(null, mapDispatchToProps)(Timer);
