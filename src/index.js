module.exports = function check(str, bracketsConfig) {
  let conf = [];
  bracketsConfig.forEach((el) => {
    conf.push(el.join(''));
  })

  let hasChanges;

  do {
    hasChanges = false;

    for (const pair of conf) {

      let regex = new RegExp(pair, 'g');
      if (regex == '/()/g') {
        regex = /\(\)/g;
      }
      if (regex == '/{}/g') {
        regex = /\{\}/g;
      }
      if (regex == '/[]/g') {
        regex = /\[\]/g;
      }
      if (regex == '/||/g') {
        regex = /\|\|/g;
      }
      const newStr = str.replace(regex, '');
      if (newStr !== str) {
        hasChanges = true;
        str = newStr;
      }
    }
  } while (hasChanges);

  return str.length === 0;
}