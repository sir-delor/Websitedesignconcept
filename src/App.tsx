import { useState } from 'react';
import { Header } from './components/Header';
import { ContentGrid } from './components/ContentGrid';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-[#f8f9fa] dark:bg-[#1e1e1e] text-[#212529] dark:text-[#e9ecef] transition-colors duration-200">
        <Header isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
        <ContentGrid isDarkTheme={isDarkTheme} />
        <Footer />
      </div>
    </div>
  );
}
