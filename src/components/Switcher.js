import { connect } from 'react-redux';

import * as switcherActions from '../reduxv2/switcher/switcherActions';

function Switcher({ isOpen, toggle }) {
  return (
    <div>
      <button type="button" onClick={toggle}>
        Toggle
      </button>

      {isOpen && <h3>Content</h3>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.switcher,
});

const mapDispatchToProps = {
  toggle: switcherActions.toggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);
