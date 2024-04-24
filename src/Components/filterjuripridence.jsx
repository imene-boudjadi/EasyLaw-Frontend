import React, { useState , useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

export default function Filterjuripridence() {
    const [selectedType, setSelectedType] = useState('');

    const [sujets, setSujets] = useState([]); 
    const [years, setYears] = useState([]); 
    const [takyifs, setTakyifs] = useState([]);
    const [classes, setClasses] = useState([]);
    const [chambres, setChambres] = useState([]);
    const [selectedTypeHayaa, setSelectedTypeHayaa] = useState('');

    // Fonction pour récupérer les sujets depuis l'API backend
    const fetchSujets = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/sujetsQarar');
          const data = await response.json();
          setSujets(data); // Met à jour la liste des sujets
      } catch (error) {
          console.error('Erreur lors de la récupération des sujets : ', error);
      }
    };

    useEffect(() => {
      fetchSujets(); // Appel de la fonction fetchSujets
    }, []);

    // Fonction pour récupérer les années 
    const fetchYears = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/yearsQarar');
          const data = await response.json();
          setYears(data); // Met à jour la liste des années
      } catch (error) {
          console.error('Erreur lors de la récupération des années : ', error);
      }
    };
    
    useEffect(() => {
      fetchYears(); // Appel de la fonction fetchYears
    }, []);


    const fetchTakyifs = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/TakyifQarar');
          const data = await response.json();
          setTakyifs(data); 
      } catch (error) {
          console.error('Erreur lors de la récupération des TakyifQarar : ', error);
      }
    };

    useEffect(() => {
      fetchTakyifs(); // Appel de la fonction fetchTakyifs
    }, []);

    const fetchClasses = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/ClassesQarar');
          const data = await response.json();
          setClasses(data); // Met à jour la liste des sujets
      } catch (error) {
          console.error('Erreur lors de la récupération des classes : ', error);
      }
    };

    useEffect(() => {
      fetchClasses(); // Appel de la fonction fetchClasses
    }, []);

    const fetchChambres = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/ChambresQarar');
          const data = await response.json();
          setChambres(data); // Met à jour la liste des chambres
      } catch (error) {
          console.error('Erreur lors de la récupération des classes : ', error);
      }
    };

    useEffect(() => {
      fetchChambres(); // Appel de la fonction fetchChambres
    }, []);

    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };

  return (
    <div className='flex flex-col mt-5 mx-10'>
                
    <div className='flex flex-row gap-20 self-end'>
    <div className='flex flex-row gap-2'>
    <select className='border-2 border-light_Blue px-3 py-2 shadow-sm rounded-md font-cairo text-Deep_Blue focus:text-my_yellow focus:bg-light_Blue'
    value={selectedTypeHayaa} onChange={(e) => setSelectedTypeHayaa(e.target.value)}>
        <option value="">الهيئة</option>
        <option value="المحكمة العليا">المحكمة العليا</option>
        <option value="مجلس الدولة">مجلس الدولة</option>
    </select>
    </div>

<div className='flex flex-row gap-4'>
<div className='flex felx-row bg-my_yellow rounded-md shadow-sm pr-2'>
      <select id="lawType" className="font-cairo text-Deep_Blue py-2 bg-transparent  text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value="">ترتيب حسب الزمن </option>
    <option value="مرسوم"> من الاحدث الى الاقدم </option>
    <option value="قرار"> من الاقدم الى الاحدث </option>
    </select>
    {/* <IoFilter /> */}
</div>
{/* search bar  */}
<div className='px-5 py-2  flex flex-row justify-between inputStyle '> 
      <IoMdSearch className='text-Deep_Blue' />
      <input className='font-cairo bg-transparent border-0 outline-none focus:border-0' placeholder='البحث'/>
</div>

</div>
</div>
    

    {/* filter  */}
    <div className='flex flex-wrap-reverse gap-3 self-end my-5'> 
    
    {selectedTypeHayaa === "مجلس الدولة" && (
                    <>
        <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option value="">التكييف </option>
        {takyifs.map((takyif, index) => (
            <option key={index} value={takyif.nom_takyif}>{takyif.nom_takyif}</option>
        ))}
        </select> 
      <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option value=""> القسم</option>
        {classes.map((classe, index) => (
          classe.Nomclasse !== "NaN" &&
            <option key={index} value={classe.Nomclasse}>{classe.Nomclasse}</option>
        ))}
        </select> 
      
        <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option value=""> الغرفة</option>
        {chambres.map((chambre, index) => (
            <option key={index} value={chambre.NomChambre}>{chambre.NomChambre}</option>
        ))}
        </select> 
                    </>
                )}
    
    <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
    value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
    <option disabled value="">سنة الصدور</option>
    {years.map((year, index) => (
        <option key={index} value={year.year}>{year.year}</option>
    ))} 
    </select>

    <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option disabled value="">الموضوع</option>
        {sujets.map((sujet, index) => (
            <option key={index} value={sujet.Nomsujet}>{sujet.Nomsujet}</option>
        ))}
    </select>

  </div>

 <div className='flex flex-row gap-2 border-2 border-light_Blue rounded-md shadow-sm text-right p-2 self-end'>
 <input type= "date" className="bg-transparent text-right self-end border-0 outline-none focus:border-0 text-Deep_Blue" placeholder='xx-xx-xxxx' value=''/>
 <p>الى</p>
 <input type= "date" className="bg-transparent text-right self-end border-0 outline-none focus:border-0 text-Deep_Blue" placeholder='xx-xx-xxxx' value=''/>
 <p>الفترة الممتدة</p>
 </div>
   





</div>

  )
}
