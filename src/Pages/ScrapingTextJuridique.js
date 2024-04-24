import React, { useState } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import ScrapingTextJuriTable from '../Components/scrapingTextJuriTable'
import Pagination from '../Components/Pagination'
import DeleteConfirm from '../Components/DeleteConfirm'
import AddScrapingSource from "../Components/AddScrapingSource"
import ScrapingPDF from "../Components/ScrapingPDF"

export default function ScrapingTextJuridique() {
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const [showScrapPDF, setshowScrapPDF] = useState(false);
    const [showScrapImg, setshowScrapImg] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 
  

  const togglePopupScrapPDF = () => {
    setshowScrapPDF(!showScrapPDF);
  };
  const togglePopupScrapImag = () => {
    setshowScrapImg(!showScrapImg);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  const toggleUpdatePopup = () => {
    setShowUpdatePopup(!showUpdatePopup);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const toggleDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup);
  };

  return (
    <div className='flex flex-row bg-my_whitee h-screen bg-opacity-10'>
    <MenuPrincipal/>
    <div className='flex flex-col w-3/4'>
     <Header2 title="تجريف النصوص القانونية "/> 
     <div className=' h-screen'>
     <ScrapingTextJuriTable onClick1={toggleDeletePopup} onClick2={togglePopup} onClick3={toggleUpdatePopup} onClick4= {togglePopupScrapPDF} onClick5= {togglePopupScrapImag}/>
     <Pagination currentPage={currentPage} 
       totalPages={totalPages} 
       onPageChange={handlePageChange} />
     </div>
    </div>
    {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddScrapingSource onClose={togglePopup} description={"اضافة مصدر للتجريف"}/> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
    {showUpdatePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddScrapingSource onClose={toggleUpdatePopup} description={"تعديل مصدر التجريف"}/> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
    {showDeletePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <DeleteConfirm onClose={toggleDeletePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
    </div>} 
    {
        showScrapPDF && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <ScrapingPDF  onClose={togglePopupScrapPDF} description={"  pdf تجريف ملف"} actione={"pdf تحميل ملف"}/> {/* Passer la fonction togglePopup comme prop onClose */}
    </div>
    }  
    {
        showScrapImg && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <ScrapingPDF  onClose={togglePopupScrapImag} description={" تجريف صورة"} actione={" تحميل صورة"}/> {/* Passer la fonction togglePopup comme prop onClose */}
    </div>
    }  
 </div>
  )
}
