export function Footer() {
  const footerLinks = ['Помощь', 'Документация', 'Контакты'];

  return (
    <footer className="h-[100px] bg-[#e9ecef] dark:bg-[#212529] transition-colors duration-200">
      <div className="h-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Левая колонка - Логотип */}
        <div className="flex items-center">
          <div className="w-[100px] h-[30px] flex items-center justify-center text-[14px] font-bold text-[#212529] dark:text-[#e9ecef]">
            Логотип
          </div>
        </div>

        {/* Правая колонка - Меню и копирайт */}
        <div className="flex flex-col items-end gap-2">
          <nav className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] text-[#495057] dark:text-[#adb5bd] hover:text-[#0d6efd] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
          <p className="text-[12px] text-[#6c757d]">
            © 2025 Ваш проект. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
