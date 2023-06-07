import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './App.css';


import { Checkbox, CheckboxProps, FluentProvider, webLightTheme } from "@fluentui/react-components";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <Checkbox
          checked={true}
          label="Checked"
        />
        <Chatbot actionProvider={ActionProvider} messageParser={MessageParser} config={config} />
      </div>
    </FluentProvider>
  );
}

export default App;
