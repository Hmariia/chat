import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
        height = "100vh"
        projectID = "84f89c1c-76fb-489b-a7c8-3f7f44e6586a"
        userName = "JavaScriptMastery"
        userSecret = "1234"
        renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
        />
    );  
}
export default App;