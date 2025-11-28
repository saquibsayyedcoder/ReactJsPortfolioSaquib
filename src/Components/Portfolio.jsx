// In your parent component
import React, { useState } from 'react';
import SkillCard from './SkillCards';


function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  return (
    <div>
      <SkillCard isDarkMode={isDarkMode} />
      {/* Your theme toggle logic */}
    </div>
  );
}