import React from 'react'
import MenuPrincipal2 from '../Components/menuPrincipale2'
import Header from '../Components/header';
import EspaceChat from '../Components/espaceChat';
import ChatHistory from '../Components/chatHistory';

export default function ChatBot() {
  
  return (
   
    <div className='flex flex-col'>
     <Header/> 
    <MenuPrincipal2/>
    <div className='flex flex-row mb-5'>
    {/* espace chatBot */}
    <EspaceChat/>
    
    {/* espace historique des chat  */}
    
    <ChatHistory/>  


    </div>
    


    </div>
    
    )
}
