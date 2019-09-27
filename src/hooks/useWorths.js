import { useState, useEffect } from 'react';

const useWorth = (p, c) => {
  const [pros, setPros] = useState([]);
  const [cons, setCons] = useState([]);

  const [prosResults, setProsResults] = useState([]);
  const [consResults, setConsResults] = useState([]);

  const [finalResult, setFinalResult] = useState();

  useEffect(() => {
    setPros(p);
    setCons(c);
  }, [p, c]);

  const countValues = arr => {
    const numbers = arr.reduce((newArr, item) => [...newArr, Number(item.value)], []);
    let score;
    if (numbers.length) {
      score = numbers.reduce((a, b) => a + b);
    }
    return score;
  };

  const compareTwoValues = (a, b) => {
    const winner = a > b ? 'pros' : 'cons';
    return winner;
  };

  useEffect(() => {
    if (pros.length > 0) {
      setProsResults(countValues(pros));
    }
    if (cons.length > 0) {
      setConsResults(countValues(cons));
    }
  }, [pros, cons]);

  useEffect(() => {
    setFinalResult(compareTwoValues(prosResults, consResults));
  }, [prosResults, consResults]);

  return finalResult;
};

export default useWorth;
