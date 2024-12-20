import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ShowcaseFilters from '@site/src/components/ShowcaseFilters';
import ShowcaseCards from '@site/src/components/ShowcaseCards';
import ShowcaseSearchBar from '@site/src/components/ShowcaseSearchBar';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.hero)} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'What is FinOps'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/what-is-finops.svg')}
            width="360"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  '<b>FinOps Foundation</b> Japan Chapter <b>Docs</b>',
                description:
                  'FinOps Foundation Japan Chapter Document website',
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/what-is-finops">
            FinOpsとは？ - 約8分 ⏱️
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=finops-jp&amp;repo=ja&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function TopBanner() {
  // TODO We should be able to strongly type customFields
  //  Refactor to use a CustomFields interface + TS declaration merging
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;
  
  return (
    <div></div>
  );
  /*
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'\xa0'}
        <Link
          to={``}
          className={styles.topBannerTitleText}>
          {'Coming soon...'}
        </Link>
        {'\xa0'}
      </div>
    </div>
  );
  */
}

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">ドキュメント一覧</Heading>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="${siteConfig.title} website">
      <TopBanner />
      <HeroBanner />
      <main>
        <ShowcaseHeader />
        <ShowcaseFilters />
        <div
          style={{display: 'flex', marginLeft: 'auto'}}
          className="container">
          <ShowcaseSearchBar />
        </div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
