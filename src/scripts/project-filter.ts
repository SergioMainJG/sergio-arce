const root = document.querySelector<HTMLElement>('[data-projects]');

if (root) {
  const search = root.querySelector<HTMLInputElement>('[data-search]')!;
  const techs = [...root.querySelectorAll<HTMLInputElement>('[data-tech]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-project]')];
  const results = root.querySelector<HTMLElement>('[data-results]')!;
  const empty = root.querySelector<HTMLElement>('[data-empty]')!;
  const clear = root.querySelector<HTMLButtonElement>('[data-clear]')!;

  const normalize = (text: string) =>
    text
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .trim();

  const update = () => {
    const query = normalize(search.value);
    const selected = techs.filter((tech) => tech.checked).map((tech) => tech.value);
    let visible = 0;

    for (const card of cards) {
      const stack = (card.dataset['stack'] ?? '').split('|');
      const matches =
        (card.dataset['text'] ?? '').includes(query) && selected.every((tech) => stack.includes(tech));
      card.hidden = !matches;
      if (matches) visible++;
    }

    empty.hidden = visible > 0;
    results.textContent = (results.dataset['template'] ?? '')
      .replace('{count}', `${visible}`)
      .replace('{total}', results.dataset['total'] ?? `${cards.length}`);
  };

  search.addEventListener('input', update);
  techs.forEach((tech) => tech.addEventListener('change', update));
  clear.addEventListener('click', () => {
    search.value = '';
    techs.forEach((tech) => (tech.checked = false));
    update();
  });

  update();
}
