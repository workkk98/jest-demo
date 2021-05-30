function add (a, b) {
  return a + b;
}

function branch (value) {
  if (typeof value === 'string') {
    return 'string';
  } else {
    return '~ string';
  }
}

module.exports = {
  add,
  branch
}