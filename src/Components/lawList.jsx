import React, { useState, useEffect } from 'react';
import LawComponent from './lawComponent';
import Pagination from './Pagination';
import { IoMdSearch } from "react-icons/io";

export default function LawList() {
  const [laws, setLaws] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [wizara , setWizara] = useState(null)
  const [type, setType] = useState(null)
  const [num_jarida, setNum_jarida] = useState('')
  const [annee_jarida, setAnnee_jarida] = useState('')
  const [filteredLaws, setFilteredLaws] = useState([]); // Nouvel état pour les résultats filtrés
  const [wizaraOptions, setWizaraOptions] = useState([]);
  const lawsPerPage = 10;

  // Fonction pour récupérer les lois depuis l'API
  const fetchLaws = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/laws');
      const data = await response.json();
      setLaws(data);
    } catch (error) {
      console.error('Error fetching laws:', error);
    }
  };
  const fetchWizaraOptions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/laws/wizara');
      const data = await response.json();
      setWizaraOptions(data);
    } catch (error) {
      console.error('Error fetching wizara options:', error);
    }
  };
  const search = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search?q=${searchTerm}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        // Transform the data structure here to match the structure of laws
        // const transformedData = data.map(item => item._source);
        setFilteredLaws(data);
      } else {
        console.error('Data returned by the API is not in the expected format:', data);
      }
    } catch (error) {
      console.error('Error fetching laws:', error);
    }
  };
  
  
  useEffect(() => {
    if (searchTerm !== '') {
      search();
    } else {
      fetchLaws();
    }
    fetchWizaraOptions() ;
  }, [searchTerm]);

  const getCurrentLawsPaginated = () => {
    const currentLaws = searchTerm !== '' ? filteredLaws : laws; // Utiliser les résultats filtrés s'ils existent
    let filteredCurrentLaws = currentLaws.filter(law =>
      (wizara ? law.wizara.startsWith(wizara) : true) &&
      (type ? law.type.startsWith(type) : true) &&
      (annee_jarida ? law.date_jarida.includes(annee_jarida) : true) &&
      (num_jarida ? law.num_jarida.toString().includes(num_jarida) : true)
    );
     
    const indexOfLastLaw = currentPage * lawsPerPage;
    const indexOfFirstLaw = indexOfLastLaw - lawsPerPage;
    return filteredCurrentLaws.slice(indexOfFirstLaw, indexOfLastLaw);
  };

  const getCurrentLaws = () => {
    const currentLaws = searchTerm !== '' ? filteredLaws : laws; // Utiliser les résultats filtrés s'ils existent
    let filteredCurrentLaws = currentLaws.filter(law =>
      (wizara ? law.wizara.startsWith(wizara) : true) &&
      (type ? law.type.startsWith(type) : true) &&
      (annee_jarida ? law.date_jarida.includes(annee_jarida) : true) &&
      (num_jarida ? law.num_jarida.toString().includes(num_jarida) : true)
    );
     
    return filteredCurrentLaws;
  };

  const totalPages = Math.ceil((searchTerm !== '' ? filteredLaws.length : getCurrentLaws().length) / lawsPerPage); // Utiliser le bon état pour obtenir le nombre total de pages
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleWizaraChange = (e) => {
    setWizara(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleAnneeJaridaChange = (e) => {
    setAnnee_jarida(e.target.value);
  };
  const handleNumJaridaChange = (e) => {
    setNum_jarida(e.target.value);
  };
  
  return (
    <div>
      <div className='flex flex-col mt-5 mx-10'>
        <div className='px-5 py-2  flex flex-row justify-between w-1/2 inputStyle md:ml-auto '>
          <input
            className='font-cairo border-0 outline-none focus:border-0'
            placeholder='البحث'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IoMdSearch className='text-Deep_Blue' />
        </div>

                {/* filter  */}
                <h1 className='text-Deep_Blue text-2xl font-cairo text-right mt-4 mb-2'>الفرز</h1>
                <div className='flex flex-wrap gap-4 self-end mb-5'>
                <div className='flex flex-col'>
                 <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base  text-right">
        سنة الجريدة الرسمية
                 </label>
              <input
                id="lawType"
                type="number"
                className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
                value={annee_jarida}
                onChange={handleAnneeJaridaChange}
              />
             </div>
                 <div className='flex flex-col'>
                 <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base  text-right">
        رقم الجريدة الرسمية
                 </label>
              <input
                id="lawType"
                type="number"
                className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
                value={num_jarida}
                onChange={handleNumJaridaChange}
             />
             </div>
             <div className='flex flex-col'>
                 <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
                المجال
                 </label>
                <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
                >
                <option value="">اختر المجال</option>
                <option value="مرسوم">الرياضة</option>
                <option value="قرار"> الصحة</option>
                <option value="امر">الاقتصاد</option>
                <option value="تصريح">التعليم</option>
                <option value="تقرير">الفنون</option>
              </select>
              
                 </div>
             <div className='flex flex-col'>
                 <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
                الوزارة
                 </label>
                <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
              value={wizara}
              onChange={handleWizaraChange}
             >
                <option value="">اختر الوزارة</option>
                <option value="">اختر الوزارة</option>
          {wizaraOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
              </select>
              
                 </div>
             <div className='flex flex-col'>
                 <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
                   نوع القانون:
                 </label>
                <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
                value={type}
                onChange={handleTypeChange}
               >
                <option value="">اختر النوع</option>
                <option value="مرسوم">مرسوم</option>
                <option value="قرار">قرار</option>
                <option value="أمر">أمر</option>
                <option value="تصريح">تصريح</option>
                <option value="تقرير">تقرير</option>
              </select>
                 </div>
             </div>
             {/* <div className='flex flex-row gap-2 border-2 border-light_Blue rounded-md shadow-sm text-right p-2 self-end'>
             <input className="text-right self-end text-Deep_Blue" placeholder='xx-xx-xxxx'/>
             <p>الى</p>
             <input className="text-right self-end text-Deep_Blue" placeholder='xx-xx-xxxx'/>
             <p>الفترة الممتدة</p>
             </div> */}
      </div>

      <div className='flex flex-col gap-4 mx-10 my-10'>
       <div className='flex flex-row justify-between'>
        <h1 className='text-Deep_Blue font-cairo text-right'> { getCurrentLaws().length}:عدد النتائج  </h1>
        <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>

       </div>
        {getCurrentLawsPaginated().map((law, index) => (
          <LawComponent key={index} law={law} index={(currentPage - 1) * lawsPerPage + index + 1} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );

}
