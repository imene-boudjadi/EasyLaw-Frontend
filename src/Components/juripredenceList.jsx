import React, { useState, useEffect } from 'react'
import JuripredenceComponent from './juripredenceComponent'
import Pagination from './Pagination'

export default function JuripredenceList() {
    const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = 10; 
    const itemsPerPage = 10; // Nombre d'éléments à afficher par page

    const [totalPages, setTotalPages] = useState(0);
    const [qraratMahkama, setQraratMahkama] = useState([]);
    // const [shuffledList, setshuffledList] = useState([]);

    const fetchQraratMahkama = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/qraratwihDetails');
            const data = await response.json();
            if (JSON.stringify(data) !== JSON.stringify(qraratMahkama)) {
              setQraratMahkama(data); // Mettre à jour les données seulement si elles ont changé
              // setshuffledList (data.sort(() => Math.random() - 0.5));
              const pages = Math.ceil(data.length / itemsPerPage);
              setTotalPages(pages);
            }
            // setQraratMahkama(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données : ', error);
        }
    };

    useEffect(() => {
      fetchQraratMahkama();
    }, []); // Appel de la fonction fetchQraratMahkama lors du chargement initial


    useEffect(() => {
      const interval = setInterval(() => {
          fetchQraratMahkama(); // Rafraîchir les données à intervalle régulier
      }, 5000); // Rafraîchir toutes les 5 secondes

      return () => clearInterval(interval);
    }, []);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    // Calcul de l'index de départ et de fin des éléments à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
  return (
    <div className='flex flex-col gap-4 mx-10 my-10'>
    <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>
    <div className='grid grid-cols-7 p-3 bg-light_Blue bg-opacity-40 gap-10'>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> التفاصيل</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> الهيئة</h1>
        <h1 className=' col-span-2 text-Deep_Blue font-cairo font-bold'> المبدا</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> الموضوع</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> تاريخ القرار</h1>
        {/* <h1 className='text-Deep_Blue font-cairo font-bold'> التكييف </h1> */}
        {/* <h1 className='text-Deep_Blue font-cairo font-bold'> القسم</h1> */}
        {/* <h1 className='text-Deep_Blue font-cairo font-bold'> الغرفة</h1> */}
        <h1 className='text-Deep_Blue font-cairo font-bold'>رقم القرار</h1>

    </div>
    {
    // qraratMahkama.map((qrar, index) => (
    //             <JuripredenceComponent key={index} index={index} qrar={qrar} />
    //         ))}
    qraratMahkama
    .slice(startIndex, endIndex) // Sélectionner les éléments pour la page actuelle
    .map((qrar, index) => (
        <JuripredenceComponent key={index} index={index} qrar={qrar} />
    ))}
<Pagination  
currentPage={currentPage} 
totalPages={totalPages} 
onPageChange={handlePageChange} 
/>
</div>
  )
}
