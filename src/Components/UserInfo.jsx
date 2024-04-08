import React from 'react';

export default function UserInfo({ userData, onChange }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className="user-info p-4  w-full">
      <h1 className="text-3xl font-bold mb-2 text-right text-Deep_Blue">إدارة الملف الشخصي</h1> 
      <h2 className="text-2xl font-semibold text-right text-light_Blue mb-4 mr-4">   : معلومات شخصية  </h2> 
      <div className="flex justify-center items-center mb-4"> {/* Utilisation de flex et items-center pour centrer horizontalement le contenu */}
        <div className="flex flex-col items-start mr-4"> {/* Utilisation de flex et flex-col pour aligner le nom et le prénom à gauche */}
          <div className="font-semibold text-lg"> المستخدم</div>
          <div className="font-bold text-lg"> {userData.username}</div>
        </div>
        <img src={userData.photoUrl} alt="User Avatar" className="rounded-full w-24 h-24" />
      </div>
        
      <div className="flex justify-center items-center mb-4 w-full"> {/* Utilisation de flex et items-center pour centrer horizontalement le contenu */}
        <div className="user-info p-4 border rounded-md shadow-md grid grid-cols-2 gap-8 w-full"> {/* Augmentation de l'espacement horizontal entre les colonnes avec gap-8 */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">: اسم المستخدم</label>
            <input type="text" id="username" name="username" value={userData.username} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">:  البريد الإلكتروني</label>
            <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">: كلمة السر </label>
            <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">:  العنوان </label>
            <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">:  رقم الهاتف </label>
            <input type="text" id="phone" name="phone" value={userData.phone} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
          </div>
          <div>
            <label htmlFor="secondaryPhone" className="block text-sm font-medium text-gray-700">: رقم الهاتف الثاني </label>
            <input type="text" id="secondaryPhone" name="secondaryPhone" value={userData.secondaryPhone} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
          </div>


        </div>
      </div>

      <div class="flex justify-center items-center px-4 mb-4 flex-wrap">

  <input type="submit" id="secondaryPhone" name="secondaryPhone" value="حفظ التغييرات "
         className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-Deep_Blue text-my_whitee hover:cursor-pointer hover:bg-my_yellow hover:text-Deep_Blue transition duration-300 ease-in-out hover:shadow-md"/>
</div>



    </div>
  );
}
