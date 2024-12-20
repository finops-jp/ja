/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedDocs, type Doc} from '@site/src/data/docs';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredDocs} from '../_utils';

import styles from './styles.module.css';

const favoriteDocs = sortedDocs.filter((doc) =>
  doc.tags.includes('favorite'),
);

const otherDocs = sortedDocs.filter(
  (doc) => !doc.tags.includes('favorite'),
);

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="showcase.docsList.noResult">表示する結果はありません</Translate>
    </Heading>
  );
}

function HeadingFavorites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
    </Heading>
  );
}

function HeadingAllSites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
    </Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: Doc[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} doc={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function ShowcaseCards() {
  const filteredDocs = useFilteredDocs();

  if (filteredDocs.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredDocs.length === sortedDocs.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteDocs} />
          </div>
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllSites />} items={otherDocs} />
          </div>
        </>
      ) : (
        <CardList items={filteredDocs} />
      )}
    </section>
  );
}
