import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';

import { Main } from '@/common/layout/Main';
import { Meta } from '@/common/seo/Meta';

import { Container, Grid, Card } from '@/Home/home.styles';

const Home: NextPage = () => {
  return (
    <Main meta={<Meta title="home" description="Lorem ipsum" />}>
      <Container>
        <Typography variant="h3">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>

        <Typography variant="h6">
          Get started by editing <code>pages/index.tsx</code>
        </Typography>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export default Home;
