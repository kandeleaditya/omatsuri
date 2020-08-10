import React from 'react';
import ToolCard from '../../components/ToolCard/ToolCard';
import Footer from '../../components/Footer/Footer';
import GithubButton from '../../components/GithubButton/GithubButton';
import Container from '../../components/Container/Container';
import toolsData from '../../tools-data';
import classes from './Index.styles.less';

export default function Index() {
  const tools = toolsData.map(tool => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <main className={classes.wrapper}>
      <Container>
        <header className={classes.header}>
          <div className={classes.headerBody}>
            <h1 className={classes.title}>Omatsuri</h1>
            <p className={classes.description}>Open source browser tools for everyday use</p>
          </div>
          <GithubButton />
        </header>

        <div className={classes.tools}>{tools}</div>
        <Footer />
      </Container>
    </main>
  );
}