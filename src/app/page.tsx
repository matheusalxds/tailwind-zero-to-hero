import { Header } from '@/app/components/Header';
import { Main } from '@/app/components/Main';
import { Navbar } from '@/app/components/Navbar';

export default function Home() {
  return (
    <Main>
      <Header>
        <Navbar />
      </Header>
    </Main>
  );
}
