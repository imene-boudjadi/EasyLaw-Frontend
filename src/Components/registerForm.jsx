import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


// pour l'integration
export default function RegisterForm() {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [adresse, setAdresse] = useState(''); 
    const [numero, setNumero] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [verfipassword, setVerfipassword] = useState(''); 
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        // send data to backend 
       
    
        // // Clear form fields after submission
        // setUsername('');
        // setPassword('');
      };
    return (
        <div className="card border" style={{ border: '2px solid #001F3F' , height : '93vh' , width : "55%" , marginLeft : "22%" , marginTop : "5%", marginBottom : "5%"}}>
        <div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%',marginTop: '5%', marginLeft : '25%' }}>
        <h5 className="card-title text-center" style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 'bold', fontSize: '32px' , color : "#001F3F" , marginBottom : "18%" , marginLeft : "18%"}}> إنشاء حساب جديد </h5>
            <form>
            <div className="form-group">
            <input
            type="text"
            className="form-control"
            style={{
                border: '1.5px solid #001F3F',
                width: '140%',
                height: '6vh',
                marginLeft : '-13%',
                marginBottom : "5%",
                borderRadius: '5px',
                direction: 'rtl',
                fontFamily: 'Cairo, sans-serif'
            }}
            placeholder="   اسم المستخدم    " 
            />
        </div>
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            style={{
                border: '1.5px solid #001F3F',
                width: '140%',
                height: '6vh',
                marginLeft : '-13%',
                marginBottom : "5%",
                borderRadius: '5px',
                direction: 'rtl',
                fontFamily: 'Cairo, sans-serif'
            }}
            placeholder="    البريد الالكتروني     " 
            />
        </div>
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            style={{
                border: '1.5px solid #001F3F',
                width: '140%',
                height: '6vh',
                marginLeft : '-13%',
                marginBottom : "5%",
                borderRadius: '5px',
                direction: 'rtl',
                fontFamily: 'Cairo, sans-serif'
            }}
            placeholder="    العنوان    " 
            />
        </div>
        <div className="form-group">
            <input
            type="number"
            className="form-control"
            style={{
                border: '1.5px solid #001F3F',
                width: '140%',
                height: '6vh',
                marginLeft : '-13%',
                marginBottom : "5%",
                borderRadius: '5px',
                direction: 'rtl',
                fontFamily: 'Cairo, sans-serif'
            }}
            placeholder="   رقم الهاتف     " 
            />
        </div>
        <div className="form-group">
            <input
            type="password"
            className="form-control"
            style={{
                border: '1.5px solid #001F3F',
                width: '140%',
                height: '6vh',
                marginBottom : "5%",
                marginLeft : '-13%',
                borderRadius: '5px',
                direction: 'rtl',
                fontFamily: 'Cairo, sans-serif'
            }}
            placeholder="   كلمة السر"
            />
        </div>
        <div className="form-group">
            <input
            type="password"
            className="form-control"
            style={{
                border: '1.5px solid #001F3F',
                width: '140%',
                height: '6vh',
                marginBottom : "5%",
                marginLeft : '-13%',
                borderRadius: '5px',
                direction: 'rtl',
                fontFamily: 'Cairo, sans-serif'
            }}
            placeholder="    تأكيد  كلمة السر"
            />
        </div>
        <div className="text-center mt-3" style={{
                    
                    color: '#001F3F', // Texte blanc
                    fontFamily: 'Cairo, sans-serif',
                    fontSize : '15px',
                    marginTop : "-2%",
                    marginRight : "70%",
        }}>
            {/* <a href="#" style={{ textDecoration: "underline" }}>نسيت كلمة السر   </a> */}
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                    borderRadius: '5px', 
                    backgroundColor: '#9FC2CC', // Couleur de fond bleue
                    color: '#EEEEEE', // Texte blanc
                    width: '30%', 
                    height: '5vh', 
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: 'bold',
                    marginTop : "8%",
                    marginLeft : "18%"
                }}
            >
                تسجيل
            </button>
            </form>
            <div className="text-center mt-3 mb-4" style={{
                    
                    color: '#001F3F', // Texte blanc
                    fontFamily: 'Cairo, sans-serif',
                    marginTop : "8%",
                    marginLeft : "18%",
                }}>
            <a href="/login" style={{ textDecoration: "underline" }}> لديك حساب، قم بتسجيل الدخول </a>
            </div>
        </div>
        </div>
    );
};


        
