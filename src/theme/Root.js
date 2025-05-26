import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const removeEmoji = () => {
      const elements = document.querySelectorAll('h2.cardTitle_rnsV');
      elements.forEach((el) => {
        if (el.textContent.includes('🗃️')) {
          el.textContent = el.textContent.replace(/^🗃️\s*/, '');
        }

        if (el.textContent.includes('📄️')) {
          el.textContent = el.textContent.replace(/^📄️\s*/, '');
        }
      });
    };

    // Одразу прибираємо, якщо вже є
    removeEmoji();

    // Стежимо за динамічними змінами
    const observer = new MutationObserver(removeEmoji);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Очищення при розмонтуванні
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
