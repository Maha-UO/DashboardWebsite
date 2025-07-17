import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2 className="about-title">{t('aboutTitle')}</h2>
      <p>{t('aboutParagraph1')}</p>
      <p>{t('aboutParagraph2')}</p>
    </div>
  );
};

export default About;
