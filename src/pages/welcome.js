import React from 'react';
import Layout from '@theme/Layout';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

function Welcome() {
  return (
    <Layout>
      <div className="container margin-vert--lg">
        <DocSearch
          appId="WZPQRZB269"
          apiKey="5ed261bafbdc6a82f60ffa61b4e91664"
          indexName="raadtotheraadio"
        />
      </div>
    </Layout>
  );
}

export default Welcome;