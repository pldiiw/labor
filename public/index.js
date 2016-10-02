'use strict';

function retrieveData () {

}

function serializeTextToCSV (text) {
  return text
    .split('\n')
    .slice(1, -1)
    .map(v => {
      return v
        .split(',')
        .reduce((a, v, i) => {
          if (i === 0) {
            a.date = v;
          } else if (i === 1) {
            a.who = v;
          } else {
            a.what = v.split('-');
          }
          return a;
        }, {});
    });
}
