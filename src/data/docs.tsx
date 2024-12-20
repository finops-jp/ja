/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

// LIST OF AVAILABLE TAGS
export type TagType =
  | 'favorite'
  | 'introduction'
  | 'framework'
  | 'focus';

// Add docs to this list
const Docs: Doc[] = [
  {
    title: 'FinOpsとは',
    description: 'FinOpsの概要について説明します。',
    preview: require('./showcase/what-is-finops.png'),
    website: '/docs/introduction/what-is-finops',
    source: 'https://github.com/finops-jp/ja/docs/introduction/what-is-finops',
    tags: [ 'favorite', 'introduction' ],
  },
  {
    title: 'FinOpsフレームワーク',
    description: 'FinOpsフレームワークの概要について説明します。',
    preview: require('./showcase/framework.png'),
    website: '/docs/framework',
    source: 'https://github.com/finops-jp/ja/docs/framework',
    tags: [ 'favorite', 'introduction', 'framework' ],
  },
  {
    title: 'FinOps用語',
    description: 'FinOpsの用語について説明します。',
    preview: require('./showcase/terminology.png'),
    website: '/docs/assets/terminology',
    source: 'https://github.com/finops-jp/ja/docs/assets/teminology',
    tags: [ 'favorite', 'introduction' ],
  },

  /*
  Pro Tip: add docs in alphabetical order.
  Appending docs here (at the end) is more likely to produce Git conflicts.
   */
];

export type Doc = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'おすすめ'}),
    description: translate({
      message: 'ぜひチェックしてほしいおすすめのドキュメントです！',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  introduction: {
    label: translate({message: '入門'}),
    description: translate({
      message: 'FinOpsの入門にピッタリのドキュメントです！',
      id: 'showcase.tag.introduction.description',
    }),
    color: '#dfd545',
  },

  framework: {
    label: translate({message: 'フレームワーク'}),
    description: translate({
      message: 'FinOpsフレームワークに関するドキュメントです！',
      id: 'showcase.tag.framework.description',
    }),
    color: '#39ca30',
  },

  focus: {
    label: translate({message: 'FOCUS'}),
    description: translate({
      message: 'FOCUSに関するドキュメントです！',
      id: 'showcase.tag.focus.description',
    }),
    color: '#a44fb7',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortDocs() {
  let result = Docs;
  // Sort by site name
  result = sortBy(result, (doc) => doc.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (doc) => !doc.tags.includes('favorite'));
  return result;
}

export const sortedDocs = sortDocs();
