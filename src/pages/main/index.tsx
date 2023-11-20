import { NextPage } from 'next';

import { MyFlowbite } from '@/pages/main/AnyPage';
import '../../../src/app/globals.css';

const MyOwnPage: NextPage = () => (
  <div>
    <MyFlowbite />
  </div>
);

export default MyOwnPage;
