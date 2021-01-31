import home from '../view/home.html'

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = home;

  return divElement;
}