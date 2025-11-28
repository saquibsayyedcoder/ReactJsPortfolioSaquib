import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import SkillCard from '../Components/SkillCards';
// ... your existing Skills code

function Skills() {
  const { isDarkMode } = useTheme();
  
  return (
    <SkillCard isDarkMode={isDarkMode} />
  );
}

export default Skills;