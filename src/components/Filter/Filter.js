import { connect } from 'react-redux';

import * as tasksActions from '../../redux/tasks/tasksActions';

function Filter({ filter, onFilterChange }) {
  return (
    <div className="form-group">
      <input
        type="text"
        autoComplete="off"
        className="form-input"
        placeholder="Filter"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  onFilterChange: (e) => tasksActions.change(e.target.value),
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFilterChange: (e) => dispatch(filterActions.change(e.target.value)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
