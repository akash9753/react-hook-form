import './App.css';
import HookForm from './react-hook-form/HookForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const notify = () => toast("Wow so easy!");
 return (
    <div>
      <HookForm/>
      {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
    </div>
  )
}

export default App;
