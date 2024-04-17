import React, { useState, useEffect } from 'react';
import LawComponent from './lawComponent';
import Pagination from './Pagination';

export default function LawList() {
  const [laws, setLaws] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  // Utilisation de useEffect pour effectuer la requête une fois que le composant est monté
  useEffect(() => {
    fetchLaws();
  }, []);

  // Fonction pour obtenir les lois de la page actuelle
  const getCurrentLaws = () => {
    const indexOfLastLaw = currentPage * lawsPerPage;
    const indexOfFirstLaw = indexOfLastLaw - lawsPerPage;
    return laws.slice(indexOfFirstLaw, indexOfLastLaw);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='flex flex-col gap-4 mx-10 my-10'>
      <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>

      {getCurrentLaws().map((law, index) => (
        <LawComponent key={index} law={law} index={(currentPage - 1) * lawsPerPage + index + 1} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(laws.length / lawsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
