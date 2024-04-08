import React, { useState } from 'react';
import Header from '../Components/header';
import UserInfo from '../Components/UserInfo';
import Footer from '../Components/footer';
import defaultAvatar from '../Images/avatar2.jpg';
import UserPaie from '../Components/UserPaie';
import NotifInfo from '../Components/NotifInfo';

export default function ProfilePage() {
  const [currentComponent, setCurrentComponent] = useState('UserInfo');
  const [userData, setUserData] = useState({
    username: "دو ياسمين",
    photoUrl: defaultAvatar,
    email: "yasmine.doe@example.com",
    password: "",
    confirmPassword: "",
    phone: "052565",
  });

  // Fonctions pour basculer entre les composants
  const toggleToUserPaie = () => setCurrentComponent('UserPaie');
  const toggleToNotifInfo = () => setCurrentComponent('NotifInfo');
  const backToUserInfo = () => setCurrentComponent('UserInfo');
  const backToUserPaie = () => setCurrentComponent('UserPaie');

  // Fonction pour mettre à jour les informations utilisateur
  const handleInputChange = (name, value) => {
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  // Rendu conditionnel en fonction du composant actuellement sélectionné
  const renderComponent = () => {
    switch (currentComponent) {
      case 'UserPaie':
        return (
          <div>
          <UserPaie userData={userData} onChange={handleInputChange} />
          <div className="flex justify-center mt-10 mb-20">
            <a href="#" className="text-Deep_Blue hover:underline mr-4" onClick={toggleToNotifInfo}>المزيد</a>
            <a href="#" className="text-Deep_Blue hover:underline ml-4" onClick={backToUserInfo}>رجوع</a>
          </div>
        </div>
        );
      case 'NotifInfo':
        return (
          <div>
            <NotifInfo />
            <a href="#" className="mt-10 mb-20 text-Deep_Blue hover:underline flex justify-center" onClick={backToUserPaie}>رجوع</a>
          </div>
        );
      case 'UserInfo':
      default:
        return (
          <div>
            <UserInfo userData={userData} onChange={handleInputChange} />
            <a href="#" className="mt-10 mb-20 text-Deep_Blue hover:underline flex justify-center" onClick={toggleToUserPaie}>المزيد</a>
          </div>
        );
    }
  };

  return (
    <div>
      <Header />
      {renderComponent()}
      <Footer />
    </div>
  );
}