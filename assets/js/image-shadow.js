/*
 * image-shadow.js
 * <fabien.dutaud@gmail.com> (https://tungu.me)
 * Released under the MIT License.
 */

const headCss = '@supports (-ms-ime-align: auto) { .image-shadow { display: none; } } @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { .image-shadow { display: none; } }';
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = headCss;
} else {
  style.appendChild(document.createTextNode(headCss));
}

head.appendChild(style);


document.querySelectorAll('.ishadow').forEach(function(el) {
  el.style.position = 'relative';

  const realImage = el.getElementsByTagName('img')[0];
  const imageSource = realImage.getAttribute('src');
  const shadowBox = document.createElement('div');
  const parent = realImage.parentNode;
  const blurValue = realImage.getAttribute('data-blur');

  shadowBox.classList.add('image-shadow');
  parent.insertBefore(shadowBox, realImage.nextSibling);

  const styles = {
    backgroundImage: `url('${imageSource}')`,
    WebkitFilter: `blur(${blurValue}px)`,
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    bottom: '-10%',
    left: '5%',
    width: '90%',
    height: '95%',
    zIndex: '-1',
  };


  Object.keys(styles).forEach(function (key) {
    shadowBox.style[key] = styles[key];
  });
});
