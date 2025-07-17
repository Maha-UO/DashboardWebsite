import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>🏠 {t('title')}</h1>
      <p>{t('description')}</p>

      <div style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '700px', marginInline: 'auto' }}>
        <h3 className="charts-title">{t('chartsTitle')}</h3>
        <ul className="chart-list">
          <li><strong>{t('barChart')}</strong></li>
          <li><strong>{t('lineChart')}</strong></li>
        </ul>
        <p><em>{t('note')}</em></p>
        <p style={{ marginTop: '2rem' }}>{t('enjoy')}</p>
      </div>
    </div>
  );
};

export default Home;
