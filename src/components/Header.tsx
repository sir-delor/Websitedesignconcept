interface HeaderProps {
  isDarkTheme: boolean;
  onToggleTheme: () => void;
}

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export function Header({ isDarkTheme, onToggleTheme }: HeaderProps) {
  const menuItems = ['Главная', 'Примеры', 'Тренировки', 'О проекте'];

  return (
    <header className="h-[80px] bg-[#f8f9fa] dark:bg-[#1e1e1e] shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-colors duration-200">
      <div className="h-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center">
          <div className="w-[120px] h-[40px] flex items-center justify-center text-[18px] font-bold text-[#212529] dark:text-[#e9ecef]">
            Логотип
          </div>
        </div>

        {/* Навигация и переключатель */}
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] font-medium text-[#495057] dark:text-[#adb5bd] hover:text-[#0d6efd] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Переключатель тем */}
          <button
            onClick={onToggleTheme}
            className="w-8 h-8 flex items-center justify-center text-[#495057] hover:text-[#0d6efd] transition-colors duration-200"
            aria-label="Переключить тему"
          >
            {isDarkTheme ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}