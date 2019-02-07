const getPageChunk = (projects, page) => {
  return projects.slice(page * 6, (page + 1) * 6);
};

export { getPageChunk };
