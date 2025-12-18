interface ContentGridProps {
  isDarkTheme: boolean;
}

export function ContentGrid({ isDarkTheme }: ContentGridProps) {
  const blocks = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Git',
    'API'
  ];

  return (
    <main className="flex-1 py-12 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="w-full aspect-square max-w-[400px] mx-auto bg-white dark:bg-[#2b2b2b] border border-[#dee2e6] dark:border-[#495057] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#f1f3f5] dark:hover:bg-[#3a3a3a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:text-[#0d6efd] transition-all duration-200 flex items-center justify-center cursor-pointer group"
            >
              <span className="text-[24px] font-bold text-[#212529] dark:text-[#e9ecef] group-hover:text-[#0d6efd] transition-colors duration-200">
                {block}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
