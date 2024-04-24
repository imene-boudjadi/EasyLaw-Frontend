import React, { useState, useEffect } from 'react';

export default function MahkamaDetails(props) {
    const [qrarMahkama, setQrarMahkama] = useState(null);

    useEffect(() => {
        const fetchQrarMahkamaDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/DetailsqrarMahkama/${props.id}`);
                const data = await response.json();
                setQrarMahkama(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du qrarMahkama : ', error);
            }
        };

        fetchQrarMahkamaDetails();
    }, [props.id]);

    // Fonction pour formater la date
    // const formatDate = (dateString) => {
    //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(dateString).toLocaleDateString('ar-EG', options);
    // };
        // Fonction pour formater la date
        const formatDate = (dateString) => {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const date = new Date(dateString);
            const arabicMonths = ["جانفي", "فيفري","مارس", "أفريل", "ماي", "جوان", "جويلية","أوت", "سبتمبر","أكتوبر", "نوفمبر", "ديسمبر"];
            const arabicMonth = arabicMonths[date.getMonth()];
            return `${date.getDate()} ${arabicMonth} ${date.getFullYear()}`;
        };
    

    return (
        <div style={{ marginBottom: "5%" }}>
            {qrarMahkama ? (
                <div className="flex flex-col mt-20 mx-20 mb-8" style={{ border: "5px solid #0C6291", borderRadius: '15px', opacity: 0.69 }}>
                    <div className="flex flex-col text-center md:flex-row justify-content-center mt-10 mb-4">
                        <h2 className="text-xl" style={{ margin: 'auto', opacity: '1', fontFamily: "Cairo", fontSize: "32px", fontWeight: "bold" }}>
                            <span style={{ color: "#000000" }}>{qrarMahkama.raqmQarar}</span> <span style={{ color: "#0C6291" }}>تفاصيل القرار</span> 
                        </h2>
                    </div>
                    <div className="flex flex-col text-center md:flex-row justify-content-center mb-1">
                        <p className="mb-2" style={{ margin: 'auto', color: "#9FC2CC", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المؤرخ في {formatDate(qrarMahkama.dataQarar)}</p>
                    </div>
                    <div className="flex flex-col text-center md:flex-row justify-content-center mb-16">
                        <p className="mb-2" style={{ margin: 'auto', color: "#9FC2CC", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>الموضوع : {qrarMahkama.sujetQarar}</p>
                    </div>

                    <div className="flex flex-row justify-content-around mb-12 mt-16" style={{ alignItems: "flex-start"}}>
                        <div className="flex flex-col my-2 mx-10 mb-12" style={{ opacity: "1", width: "40%" }}>
                            <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المبدأ</p>
                            <p className="flex flex-col my-7 mx-7 text-right">
                                {qrarMahkama.principe}
                            </p>
                        </div>
                        <hr style={{ border: "1px solid #9FC2CC", width: "1px", margin: "auto", height: "200px" }} />
                        <div className="flex flex-col my-2 mx-10 mb-12" style={{opacity: "1", width: "40%" }}>
                            <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المرجع القانوني</p>
                            <p className="flex flex-col my-7 mx-7 text-right">
                                {qrarMahkama.refLegale}
                            </p>
                        </div>
                        <hr style={{ border: "1px solid #9FC2CC", width: "1px", margin: "auto", height: "200px" }} />
                        <div className="flex flex-col my-2 mx-10 mb-12" style={{opacity: "1", width: "40%" }}>
                            <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>الأطراف</p>
                            <p className="flex flex-col my-7 mx-7 text-right">
                                {qrarMahkama.parties}
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col text-center md:flex-row justify-content-center">
                        <p className="mb-" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>رد المحكمة العليا عن الوجه المرتبط بالمبدأ</p>
                    </div>
                    <div className="flex flex-col my-2 mx-10 mb-12 mt-4" style={{ border: "2px solid #9FC2CC", borderRadius: '15px', opacity: "1" }}>
                        <p className="flex flex-col my-7 mx-7 text-right">{qrarMahkama.repMahkama}</p>
                    </div>
                    <div className="flex flex-col text-center md:flex-row justify-content-center">
                        <p className="mb-6" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>منطوق القرار </p>
                    </div>
                    <div className="flex flex-col my-2 mx-10 mb-16 mt-4" style={{ border: '2px solid #9FC2CC', borderRadius: '15px', opacity: '1' }}>
                        <p className="flex flex-col my-3 mx-7 text-right">{qrarMahkama.OperatDecision}</p>
                    </div>
                </div>
            ) : (
                <p>...جارٍ تحميل المعلومات</p>
            )}

            <button
                type="button"
                className="btn btn-primary btn-block mb-12"
                style={{
                    borderRadius: '5px',
                    width: '120px',
                    height: '5vh',
                    backgroundColor: '#0C6291', // Couleur de fond bleue
                    color: '#FFFFFF', // Texte blanc
                    fontSize: "20px",
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    fontSize : "20px",
                    marginLeft : "-75%"
                }}
                onClick={() => { window.location.href = '#'; }}
            >
                طباعة
            </button>
        </div>
    );
}
