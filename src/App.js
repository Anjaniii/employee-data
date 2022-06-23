import './App.css';
import { RealtimeData } from './components/realtimeData/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Crud } from './components/crud/index';

function App() {
  return (

    <><div className="header">
      <p className="logo">Employee App</p>
      
    </div>
    <RealtimeData/>
    <Crud /></>
  );
}

export default App;
