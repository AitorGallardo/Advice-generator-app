import { useEffect, useState } from 'react';

const APIURL = 'https://api.adviceslip.com/advice';

const ReplaceWithCusomQuotationMark = (text) => {
  const openingQuotation = '“';
  const closingQuotation = '”';
  return openingQuotation + text + closingQuotation;
};

export const useCreateAdvice = () => {
  const [advice, setAdvice] = useState({ id: '', advice: '' });

  useEffect(() => {
    fetch(APIURL)
      .then((data) => data.json())
      .then(({ slip: res }) => {
        const id = res.id;
        const advice = ReplaceWithCusomQuotationMark(res.advice);

        
        setAdvice({ id, advice });
      });

  }, []);

  return [advice.id, advice.advice];
};
