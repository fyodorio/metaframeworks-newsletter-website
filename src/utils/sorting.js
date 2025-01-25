let currentSort = {
  field: null,
  direction: null
};

const updateSortDirection = (field) => {
  if (currentSort.field === field) {
    if (currentSort.direction === 'asc') {
      currentSort.direction = 'desc';
    } else if (currentSort.direction === 'desc') {
      currentSort.direction = null;
      currentSort.field = null;
    } else {
      currentSort.direction = 'asc';
    }
  } else {
    currentSort.field = field;
    currentSort.direction = 'asc';
  }
};

const updateSortIcons = (field) => {
  document.querySelectorAll('.sort-icon').forEach((icon) => {
    icon.innerHTML = `<svg class="sort-default" viewBox="0 0 24 24" width="1em" height="1em">
      <path fill="rgba(255, 255, 255, 0.6)" d="M12 3.67l5 5-1.41 1.41L13 7.5V17h-2V7.5L8.41 10.08 7 8.67l5-5M12 20.33l-5-5 1.41-1.41L11 16.5V7h2v9.5l2.59-2.58L17 15.33l-5 5z"/>
    </svg>`;
  });

  if (currentSort.field === field && currentSort.direction) {
    const currentHeader = document.querySelector(`th[data-field="${field}"]`);
    const icon = currentHeader?.querySelector('.sort-icon');
    if (icon) {
      icon.innerHTML =
        currentSort.direction === 'asc'
          ? `<svg class="sort-asc" viewBox="0 0 24 24" width="1em" height="1em">
              <path fill="white" d="M12 3.67l5 5-1.41 1.41L13 7.5V17h-2V7.5L8.41 10.08 7 8.67l5-5z"/>
            </svg>`
          : `<svg class="sort-desc" viewBox="0 0 24 24" width="1em" height="1em">
              <path fill="white" d="M12 20.33l-5-5 1.41-1.41L11 16.5V7h2v9.5l2.59-2.58L17 15.33l-5 5z"/>
            </svg>`;
    }
  }
};

export const initializeSort = () => {
  // Store original order
  document.querySelectorAll('tbody tr').forEach((row, index) => {
    row.dataset.originalIndex = String(index);
  });

  // Add click handlers to sortable headers
  document.querySelectorAll('.sortable').forEach((header) => {
    header.addEventListener('click', () => {
      const field = header.getAttribute('data-field');
      if (field) sortTable(field);
    });
  });
};

const sortTable = (field) => {
  const table = document.getElementById('comparison-table');
  if (!table) return;

  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody?.getElementsByTagName('tr') || []);

  updateSortDirection(field);
  updateSortIcons(field);

  if (currentSort.direction) {
    const headers = Array.from(table.querySelectorAll('th'));
    const columnIndex = headers.findIndex(
      (header) => header.getAttribute('data-field') === field
    );

    const sortedRows = rows.sort((a, b) => {
      const aValue = a.cells[columnIndex]?.textContent || '';
      const bValue = b.cells[columnIndex]?.textContent || '';

      if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
        return currentSort.direction === 'asc'
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }

      const levelOrder = { High: 3, Medium: 2, Low: 1 };
      if (levelOrder[aValue] && levelOrder[bValue]) {
        return currentSort.direction === 'asc'
          ? levelOrder[aValue] - levelOrder[bValue]
          : levelOrder[bValue] - levelOrder[aValue];
      }

      return currentSort.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    while (tbody?.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    sortedRows.forEach((row) => tbody?.appendChild(row));
  } else {
    const originalRows = Array.from(rows).sort((a, b) => {
      return (
        Number(a.dataset.originalIndex || 0) -
        Number(b.dataset.originalIndex || 0)
      );
    });

    while (tbody?.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    originalRows.forEach((row) => tbody?.appendChild(row));
  }
};
