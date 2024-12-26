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
  | 'focus'
  | 'develop';

// Add docs to this list
const Docs: Doc[] = [
  {
    title: 'FinOpsとは',
    description: 'FinOpsの概要について説明します。',
    preview: require('./showcase/what-is-finops.png'),
    website: '/docs/introduction/what-is-finops',
    source: 'https://github.com/finops-jp/ja/blob/main/docs/introduction/what-is-finops.md',
    tags: [ 'favorite', 'introduction' ],
  },
  {
    title: 'FinOpsフレームワーク',
    description: 'FinOpsフレームワークの概要について説明します。',
    preview: require('./showcase/framework.png'), // 要修正
    website: '/docs/framework',
    source: 'https://github.com/finops-jp/ja/docs/framework',
    // 開発中のタグは作業が完了したら外す
    tags: [ 'favorite', 'introduction', 'framework', 'develop' ],
  },
  {
    title: 'FinOps用語',
    description: 'FinOpsの用語について説明します。',
    preview: require('./showcase/terminology.png'),
    website: '/docs/assets/terminology',
    source: 'https://github.com/finops-jp/ja/docs/assets/teminology',
    // 開発中のタグは作業が完了したら外す
    tags: [ 'favorite', 'introduction', 'develop' ],
  },
  /*
  {
    title: 'FinOpsの採用',
    description: 'FinOpsの初期導入ガイドです。',
    preview: require('./showcase/what-is-finops.png'), // 要修正
    website: 'https://www.finops.org/wg/adopting-finops/',
    source: 'https://github.com/finops-jp/ja/blob/main/docs/wg/adopting-finops',
    // 開発中のタグは作業が完了したら外す
    tags: [ 'favorite', 'introduction', 'develop' ],
  },
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
      message: 'FinOpsの入門にピッタリのドキュメント',
      id: 'showcase.tag.introduction.description',
    }),
    color: '#dfd545',
  },

  framework: {
    label: translate({message: 'フレームワーク'}),
    description: translate({
      message: 'FinOpsフレームワークに関するドキュメント',
      id: 'showcase.tag.framework.description',
    }),
    color: '#39ca30',
  },

  focus: {
    label: translate({message: 'FOCUS'}),
    description: translate({
      message: 'FOCUSに関するドキュメント',
      id: 'showcase.tag.focus.description',
    }),
    color: '#a44fb7',
  },

  /*
  draft: {
    label: translate({message: 'ドラフト版'}),
    description: translate({
      message: 'ドラフト版のドキュメント',
      id: 'showcase.tag.focus.description',
    }),
    color: '#fe6829',
  },
  */
  develop: {
    label: translate({message: '開発中'}),
    description: translate({
      message: '開発中のドキュメント',
      id: 'showcase.tag.focus.description',
    }),
    color: '#8c2f00',
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
