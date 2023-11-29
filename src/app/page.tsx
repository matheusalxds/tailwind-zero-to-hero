import { Header } from '@/app/components/Header';
import { Main } from '@/app/components/Main';
import { Navbar } from '@/app/components/Navbar';

export default function Home() {
  return (
    <Main>
      <Header>
        <Navbar />
      </Header>
      <div
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
        className="flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed bg-center"
      ></div>
    </Main>
  );
}
