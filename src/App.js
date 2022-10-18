import Basic from './components/Basic';
import Intermediate from './components/Intermediate';
import Calculator from './components/Calculator/Calculator';
import InputList from './components/common/ui/InputList';


function App() {


  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      {/* <Basic />
      <Intermediate /> */}
      <Calculator />
      <InputList />
    </div>
  );
}

export default App;
