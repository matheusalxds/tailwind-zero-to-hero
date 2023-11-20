import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';

const MyOwnPage: NextPage = () => (
  <div>
    <FontAwesomeIcon icon={faCoffee} />
  </div>
);

export default MyOwnPage;
