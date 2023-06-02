import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot actionProvider={ActionProvider} messageParser={MessageParser} config={config} />
      </header>
    </div>
  );
}

export default App;
