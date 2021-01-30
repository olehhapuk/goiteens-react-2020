import Loader from 'react-loader-spinner';

import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.container}>
      <Loader type="TailSpin" />
    </div>
  );
}

export default Spinner;
