import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { educationBarData } from '../data/educationData';
import { useTranslation } from 'react-i18next';

const EducationBarChart = () => {
  const { t } = useTranslation();
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);

  return (
    <div style={{ width: '100%', height: 400, padding: '20px 0', marginBottom: '150px' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        marginTop: '30px',
        fontSize: '26px',
        color: '#030303ff'
      }}>
        {t('barTitle') || 'Education Level by Gender (2024)'}
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '25px'
      }}>
        <label style={{ fontWeight: 'bold' }}>
          <input
            type="checkbox"
            checked={showMale}
            onChange={() => setShowMale(!showMale)}
            style={{ marginRight: '6px' }}
          />
          {t('male')}
        </label>
        <label style={{ fontWeight: 'bold' }}>
          <input
            type="checkbox"
            checked={showFemale}
            onChange={() => setShowFemale(!showFemale)}
            style={{ marginRight: '6px' }}
          />
          {t('female')}
        </label>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={educationBarData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="level"
            tickFormatter={(level) => {
              const translations = {
                'High School': t('educationLevels.highschool'),
                'College': t('educationLevels.college'),
                "Bachelor's": t('educationLevels.bachelor'),
                "Master's": t('educationLevels.master'),
                'PhD': t('educationLevels.phd'),
              };
              return translations[level] || level;
            }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {showMale && <Bar dataKey="male" fill="#3a9bc1ff" name={t('male')} />}
          {showFemale && <Bar dataKey="female" fill="#b13e3eff" name={t('female')} />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EducationBarChart;
