import React, { ReactElement } from 'react';

type Props = { children: ReactElement | ReactElement[] };

export const Main = ({ children }: Props) => <main>{children}</main>;
