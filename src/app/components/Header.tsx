import React, { ReactElement } from 'react';

type Props = { children: ReactElement | ReactElement[] };

export const Header = ({ children }: Props) => <header className="text-zinc-200">{children}</header>;
