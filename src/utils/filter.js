export default function filterSearch(searchInput, data) {
    const filteredData = data.filter((value) => {
      const searchStr = searchInput.toLowerCase();
      const nameMatches = value.title.toLowerCase().includes(searchStr);
  
      return nameMatches;
    });
    return filteredData
  }