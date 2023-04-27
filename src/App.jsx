import './App.css';
import { Advice } from './components/Advice';
import { useCreateAdvice } from './hooks/useCreateAdvice';

function App() {
  const [id, advice, fetchAdvice] = useCreateAdvice();

  const reloadAdvice = ()=>{
    fetchAdvice()
  }

  return (
    <>
      <Advice id={id} advice={advice} reloadAdvice={reloadAdvice}  />
    </>
  );
}

export default App;
