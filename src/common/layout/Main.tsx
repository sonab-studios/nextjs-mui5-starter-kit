import type { ReactNode } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = ({ meta, children }: Props) => (
  <>
    <CssBaseline />
    {meta}
    <Container maxWidth="lg">{children}</Container>
  </>
);
