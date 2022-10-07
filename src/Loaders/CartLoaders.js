const cartLoader = () => {
  if (!localStorage.getItem('cart')) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('cart'));
  }
};

export default cartLoader;
