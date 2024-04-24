import React, { useState } from 'react' 
import { TbMessageChatbot } from "react-icons/tb";

export default function EspaceChat() {
    const [messages, setMessages] = useState([
        { text: "مرحبا", isBot: true },
      ]);
      const [inputValue, setInputValue] = useState('');
    
      const sendMessage = () => {
        if (inputValue.trim() === '') return;
    
        setMessages([...messages, { text: inputValue, isBot: false }]);
        setInputValue('');
        // ajouter la logique de réponse te3 chatbot
      };

  return (
    <div className="absolute left-10 flex flex-col  w-2/3 mt-10">
    <div className='flex flex-col self-center'>
    <h1 className='text-2xl font-cairo text-Deep_Blue'>مرحبا, انا على استعداد للرد عليك فيما يتعلق بالقانون الجزائري"</h1>
    <TbMessageChatbot className='self-center text-Deep_Blue' size={80}/>
    </div> 
    <div className="flex-grow p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}>
            <span className={`px-4 py-2 rounded-lg inline-block ${message.isBot ? 'bg-light_Blue' : 'bg-my_yellow'}`}>{message.text}</span>
          </div>
        ))}
    </div>
    <div className="fixed bottom-0 w-2/3 p-4 bg-my_whitee border-t">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Écrivez un message..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <button
        onClick={sendMessage}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Envoyer
      </button>
    </div>
  </div>
  )
}
