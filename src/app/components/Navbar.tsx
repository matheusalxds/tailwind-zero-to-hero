import Image from 'next/image';

import { MenuItem } from '@/app/components/MenuItem';
import { SubMenuItem } from '@/app/components/SubMenuItem';

export const Navbar = () => (
  <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
    <div className="flex items-center p-2 gap-2">
      <Image src="/images/logo-inverted.png" alt="logo" width={50} height={0} />
      <div className="text-2xl font-bold">
        tw:<span className="text-sky-900">mf</span>
      </div>
    </div>
    <div className="flex flex-1 items-center justify-end">
      <MenuItem label="Home" />
      <MenuItem label="Lineup" />
      <MenuItem label="Tickets">
        <SubMenuItem labels={['Single day ticket', '7 day ticket']} />
      </MenuItem>
      <MenuItem label="Support" />
    </div>
  </nav>
);
