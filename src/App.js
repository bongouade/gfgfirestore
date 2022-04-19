import './App.css';
import Firestore from './write';
import Read from './read';

function App() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <Firestore/>
          </div>
          <div className='col-sm-6'>
            <Read/>
          </div>
        </div>
      </div>
  );
}

export default App;
