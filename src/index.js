exports.min = function min (array) {
  const reducer = (acc, el) => {
    if (acc > el) {
      return el;
    } else {
      return acc;
    };
  };

  if (!array) {
    return 0;
  } else {
    return array.reduce(reducer, 0);
  }
}

exports.max = function max (array) {
  const reducer = (acc, el) => {
    if (acc < el) {
      return el;
    } else {
      return acc;
    };
  }
  
  if (!array) {
    return 0;
  } else {
    return array.reduce (reducer, 0);
  }
}

exports.avg = function avg (array) {
  const reducer = (acc, el) => {
    acc += el;
    return acc;
  };
  
  if (!array || array.length === 0) {
    return 0;
  } else {
    return (array.reduce (reducer, 0)) / array.length;
  }
}
