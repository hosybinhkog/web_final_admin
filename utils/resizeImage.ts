export const resizeImage = function (file: any, maxSize = 500) {
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement("canvas");
  const dataURItoBlob = function (dataURI: any) {
    const bytes =
      dataURI.split(",")[0].indexOf("base64") >= 0
        ? atob(dataURI.split(",")[1])
        : unescape(dataURI.split(",")[1]);
    const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const max = bytes.length;
    const ia = new Uint8Array(max);
    for (let i = 0; i < max; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ia], {type: mime});
  };
  const resize = function () {
    let width = image.width;
    let height = image.height;
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    // @ts-ignore
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/jpeg");
    return dataURItoBlob(dataUrl);
  };
  return new Promise(function (ok, no) {
    if (!file.type.match(/image.*/)) {
      no(new Error("Not an image"));
      return;
    }
    reader.onload = function (readerEvent) {
      image.onload = function () {
        return ok(resize());
      };
      // @ts-ignore
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
};
