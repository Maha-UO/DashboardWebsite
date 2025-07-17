import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { educationLineData } from '../data/educationData';
import { useTranslation } from 'react-i18next';

const EducationLineChart = () => {
  const [selectedLevel, setSelectedLevel] = useState("High School");
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);
  const { t } = useTranslation();

  const data = educationLineData[selectedLevel] || [];

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '60px auto 40px' }}>
      {/*  Centered Title */}
      <h2 style={{
        textAlign: 'center',
        marginBottom: '25px',
        color: '#060606ff',
        fontSize: '28px'
      }}>
        {t('Line Chart')}
      </h2>

      {/* Inline Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '50px',
        marginBottom: '30px'
      }}>
        {/* Level Selector */}
        <label style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {t('selectLevel')}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            style={{
              padding: '6px 10px',
              fontSize: '1rem',
              borderRadius: '60px',
              border: '1px solid #aaa'
            }}
          >
            <option value="High School">{t('educationLevels.highschool')}</option>
            <option value="College">{t('educationLevels.college')}</option>
            <option value="Bachelor's">{t('educationLevels.bachelor')}</option>
            <option value="Master's">{t('educationLevels.master')}</option>
            <option value="PhD">{t('educationLevels.phd')}</option>
          </select>
        </label>

        {/* Gender Checkboxes */}
        <label style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={showMale}
            onChange={() => setShowMale(!showMale)}
            style={{ marginRight: '6px' }}
          />
          {t('male')}
        </label>

        <label style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={showFemale}
            onChange={() => setShowFemale(!showFemale)}
            style={{ marginRight: '6px' }}
          />
          {t('female')}
        </label>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {showMale && <Line type="monotone" dataKey="male" stroke="#3a9bc1ff" name={t('male')} />}
          {showFemale && <Line type="monotone" dataKey="female" stroke="#b13e3eff" name={t('female')} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EducationLineChart;
