export default (function() {
  const { REACT_APP_ENV } = process.env;

  if (REACT_APP_ENV === 'local' || REACT_APP_ENV === 'dev') {
    return import('./dev')
      .then(res => res.default)
      .catch(err => {
        throw err;
      });
  }

  return import('./prod')
    .then(res => res.default)
    .catch(err => {
      throw err;
    });
})();
