import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

interface ScrollSpyProps {
  sections: Section[];
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ sections }) => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setVisible(scrollY > 300); 
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 300) { //в константу 
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 p-6 bg-zinc-800 bg-opacity-75 text-white rounded-lg shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ width: '200px' }} 
    >
      <ul className="space-y-2">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`cursor-pointer p-2 rounded transition-colors duration-200 ${
              activeSection === section.id
                ? 'bg-zinc-700 font-bold'
                : 'hover:bg-zinc-600'
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSpy;