const anime = jest.fn();

anime.stagger = (duration, options) => {
  // Mock implementation of the stagger function
  return (element, index) => {
    // Return the calculated delay for each element based on the index
    return duration * index;
  };
};

export default anime;