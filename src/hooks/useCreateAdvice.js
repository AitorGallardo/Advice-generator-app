import { useEffect, useState } from 'react';

const APIURL = 'https://api.adviceslip.com/advice';

const replaceWithCusomQuotationMark = (text) => {
  const openingQuotation = '“';
  const closingQuotation = '”';
  return openingQuotation + text + closingQuotation;
};

export const useCreateAdvice = () => {
  const [advice, setAdvice] = useState({ id: '', advice: '' });
  const fetchAdvice = () => {
    fetch(APIURL)
      .then((data) => data.json())
      .then(({ slip: res }) => {
        const id = res.id;
        const advice = replaceWithCusomQuotationMark(res.advice);

        setAdvice({ id, advice });
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return [advice.id, advice.advice, fetchAdvice];
};
