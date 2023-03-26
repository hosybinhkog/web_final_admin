/**
 *
 * @param url {String}
 * @param title {String}
 * @param w {Number}
 * @param h {Number}
 * @author {HoBinh}
 */
export function openWindow(url: string, title: string, w: number, h: number) {
  // Fixes dual-screen position                            Most browsers       Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined
      ? window.screenLeft
      : // @ts-ignore
        screen.left;
  // @ts-ignore

  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const left = width / 2 - w / 2 + dualScreenLeft;
  const top = height / 2 - h / 2 + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );

  // Puts focus on the newWindow
  // @ts-ignore
  if (window.focus) {
    // @ts-ignore
    newWindow.focus();
  }
}
