// web storage操作
export const setlStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

export const getlStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

export const removelStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
export const clearlStore = () => {
  window.localStorage.clear();
};
export const setsStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

export const getsStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

export const removesStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};
export const clearsStore = () => {
  window.sessionStorage.clear();
};