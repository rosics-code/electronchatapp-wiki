document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const content = document.getElementById('content');

  searchInput.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    if (pages[query]) {
      window.location.href = `?page=${query}`;
      return;
    }

    const results = Object.entries(pages).filter(([key, html]) => {
      const text = html.replace(/<[^>]*>/g, "").toLowerCase();
      return key.toLowerCase().includes(query) || text.includes(query);
    });

    if (results.length === 0) {
      content.innerHTML = `
        <h1>🔍 No results found</h1>
        <p>Nothing in BlockCraft Wiki matches <strong>${query}</strong>.</p>
      `;
    } else {
      content.innerHTML = `
        <h1>Search results for “${query}”</h1>
        <ul>
          ${results.map(([key]) => `<li><a href="?page=${key}">${key}</a></li>`).join('')}
        </ul>
      `;
    }
  });
});
