import { connect } from 'react-redux';

import timerActions from '../redux/timer/timerActions';

function Timer({ increment, value }) {
  return (
    <div>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <input type="number" />
      <p>{value}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.timer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(timerActions.increment(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
