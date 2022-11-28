import React from 'react';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import cn from '@common/classnames';
import { Button } from '@theme';
import styles from './PricingSupport.module.css';

const PricingSupport: React.FC<{
  className?: string;
  onylSupport?: boolean;
}> = ({ className = '', onylSupport = false }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={cn(className)}>
      <h2>
        {formatMessage({
          id: onylSupport ? 'support.title' : 'support.pricing.title',
        })}
      </h2>
      {!onylSupport && (
        <p>
          {formatMessage(
            { id: 'support.desc1' },
            {
              empty: <span />,
              b: (chunks) => <b>{chunks}</b>,
              a: (chunks) => (
                <a
                  href="https://github.com/SayHelloGmbH/git-installer/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                >
                  {chunks}
                </a>
              ),
            }
          )}
        </p>
      )}
      <p>
        {formatMessage(
          { id: 'support.desc2' },
          {
            empty: <span />,
            a: (chunks) => (
              <a
                href="https://github.com/sponsors/SayHelloGmbH"
                target="_blank"
                rel="noreferrer"
              >
                {chunks}
              </a>
            ),
          }
        )}
        <br />
        {formatMessage({ id: 'support.desc3' })} ❤
      </p>
      <div className={styles.tiers}>
        {[
          {
            price: formatMessage({ id: 'support.tiers.1.price' }),
            title: formatMessage({ id: 'support.tiers.1.title' }),
            listItems: [
              formatMessage({ id: 'support.tiers.1.list.1' }),
              formatMessage(
                { id: 'support.tiers.1.list.2' },
                {
                  empty: <span />,
                  a: (chunks) => <Link href="/supporter">{chunks}</Link>,
                }
              ),
            ],
            link: 'https://github.com/sponsors/SayHelloGmbH/sponsorships?tier_id=236263',
          },
          {
            price: formatMessage({ id: 'support.tiers.2.price' }),
            title: formatMessage({ id: 'support.tiers.2.title' }),
            listItems: [
              formatMessage({ id: 'support.tiers.2.list.1' }),
              formatMessage(
                { id: 'support.tiers.2.list.2' },
                {
                  empty: <span />,
                  a: (chunks) => <Link href="/supporter">{chunks}</Link>,
                }
              ),
            ],
            link: 'https://github.com/sponsors/SayHelloGmbH/sponsorships?tier_id=236264',
          },
          {
            price: formatMessage({ id: 'support.tiers.3.price' }),
            title: formatMessage({ id: 'support.tiers.3.title' }),
            listItems: [
              formatMessage({ id: 'support.tiers.3.list.1' }),
              formatMessage(
                { id: 'support.tiers.3.list.2' },
                {
                  empty: <span />,
                  a: (chunks) => <Link href="/supporter">{chunks}</Link>,
                }
              ),
            ],
            link: 'https://github.com/sponsors/SayHelloGmbH/sponsorships?tier_id=236265',
          },
        ].map(({ price, title, listItems, link }, i) => (
          <div className={styles.tier} key={i}>
            <span className={styles.tierPrice}>{price}</span>
            <h3 className={styles.tierTitle}>{title}</h3>
            <ul className={styles.tierList}>
              {listItems.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <Button
              className={styles.tierButton}
              href={link}
              target="_blank"
              rel="noreferrer"
              useAnchor
              icon="openInNew"
            >
              GitHub Sponsors
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSupport;
