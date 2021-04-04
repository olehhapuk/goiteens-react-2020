import { Dimmer, Loader } from 'semantic-ui-react';

function Spinner({ loading }) {
  return (
    <Dimmer active={loading} page>
      <Loader>Loading...</Loader>
    </Dimmer>
  );
}

export default Spinner;
