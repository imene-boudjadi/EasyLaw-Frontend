import React from 'react'

export default function newsBox() {
  return (
    <div className="flex flex-row gap-5 mx-10  border-2 border-light_Blue rounded-md shadow-md md:flex-row items-end justify-end">
  {/* Première partie avec l'image */}
  <div className="font-cairo md:w-2/3 md:pl-4 text-right">
    <h2 className="font-bold text-xl mb-2 text-Dark_Blue">استحداث مديرية للرياضة المدرسية بوزارة التربية الوطنية</h2>
    <p className="text-sm mb-2 text-Deep_Blue">  أدرج يـوم : الأربعاء, 28 فيفري 2024 08:26</p>
    <p className="text-sm">الجزائر - صدر في العدد الأخير من الجريدة الرسمية المرسوم التنفيذي المتضمن تنظيم الإدارة المركزية لوزارة التربية الوطنية، والذي تم بموجبه استحداث مديرية للرياضة المدرسية تتولى تنفيذ الاستراتيجية الوطنية لترقية هذا النوع من الرياضات، تجسيدا لتعليمات رئيس الجمهورية، السيد عبد المجيد تبون.</p>
  </div>
  {/* Deuxième partie avec le titre, la date et le texte */}
  <div className="md:w-1/5">
    <img src="https://www.aps.dz/ar/media/k2/items/cache/aeffe453800c18d50fe8692781885c02_M.jpg" alt="Description de l'image" className="w-full h-auto" />
  </div>
</div>

  )
}
