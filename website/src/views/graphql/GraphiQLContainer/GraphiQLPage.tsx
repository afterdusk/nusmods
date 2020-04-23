import * as React from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import { parse } from 'graphql';
import { execute } from '@apollo/client';
import { link } from '../apolloClient';

import styles from './GraphiQLPage.scss';

async function graphQLFetcher(graphQLParams: { query: string }): Promise<unknown> {
  return new Promise((resolve, reject) => {
    execute(link, {
      ...graphQLParams,
      query: parse(graphQLParams.query),
    }).subscribe(resolve, reject);
  });
}

/**
 * GraphiQL is buggy: https://github.com/graphql/graphiql/issues/770
 * Temporary workaround is to set the GraphiQLPage-pageContainer to a
 * arbitrary height (e.g. 1000px) in Chrome dev console.
 */
const GraphiQLPage: React.FC = () => {
  // TODO: Add prod data disclaimer like https://developer.github.com/v4/explorer/
  return (
    <div className={styles.pageContainer}>
      <GraphiQL fetcher={graphQLFetcher} />
    </div>
  );
};

export default GraphiQLPage;
