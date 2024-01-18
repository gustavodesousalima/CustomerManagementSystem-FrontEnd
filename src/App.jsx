import Header from './components/header/Header';
import Main from './components/main/Main';
import SearchCustomer from './components/searchCustomer/SearchCustomer';
import './App.css';

function App() {
  return (
    <div id='container_App'>
      <Header />
      <SearchCustomer />
      <Main />
    </div>
  );
}

export default App;
