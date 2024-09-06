// "use client";

// import Navbar from '@/app/components/navbar'; // Import Navbar
// import '@/app/styles/globals.css'; // Import global CSS file

// export default function Sejarah() {
//   return (
//     <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white" style={{ backgroundImage: 'url(/Background-White.png)' }}>
//       <div className="absolute inset-0"></div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex flex-col justify-center items-center py-20 px-20 md:px-60 space-y-40">
//         <div className="flex items-center w-full md:w-2/3 lg:w-3/5 xl:w-1/2 mr-auto space-x-6">
//           {/* Box Teks di sebelah kanan */}
//           <div className="bg-gray-100 p-6 rounded-md shadow-md flex-1">
//             <p className="text-gray-800 leading-relaxed">
//               Mewujudkan suatu harapan menjadi realita ternyata menuntut suatu perjuangan yang kadangkala membawa resiko. 
//               Tetapi apabila suatu resiko itu mengundang seuntai bunga kasih bagi masa depan sesama, bukankah itu namanya kewajiban? 
//               Untaian kata di atas tetap hanya merupakan impian sekiranya motivasi yang terkandung tak seirama dengan rencana dan kehendak Tuhan.
//             </p>
//           </div>
//             {/* Gambar di sebelah kanan */}
//           <img src="/DJI_0192.JPG" alt="Descriptive Alt Text" className="w-20 h-40 object-cover rounded-md shadow-md" />
//         </div>

//         {/* Top-right Box with Image */}
//         <div className="flex items-center w-full md:w-2/3 lg:w-3/5 xl:w-1/2 ml-auto space-x-6">
//         <img src="/DJI_0192.JPG" alt="Descriptive Alt Text" className="w-20 h-40 object-cover rounded-md shadow-md" />
//           <div className="bg-gray-100 p-6 rounded-md shadow-md flex-1">
//             <p className="text-gray-800 leading-relaxed">
//               Beranjak dari rasa keterbebanan dan kerinduan dari beberapa siswa serta aktivis pelayanan siswa Kristen di Kota Manado & Bitung untuk 
//               mewartakan dan menyatakan kehadiran Kristus dalam kehidupan siswa Kristen se-Sulawesi Utara, maka hadirlah suatu bentuk jaringan pelayanan 
//               siswa Kristen yang mempersatukan pola pelayanan bagi seluruh siswa Kristen SLTP/SMK/SMU se-Sulawesi Utara.
//             </p>
//           </div>
          
//         </div>

//         {/* Bottom-left Box with Image */}
//         <div className="flex items-center w-full md:w-2/3 lg:w-3/5 xl:w-1/2 mr-auto space-x-6">
          
//           <div className="bg-gray-100 p-6 rounded-md shadow-md flex-1">
//             <p className="text-gray-800 leading-relaxed">
//               Walaupun banyak permasalahan yang dihadapi, pelayanan ini terus bertumbuh dengan segala keterbatasan dan kekurangannya. 
//               Namun janganlah kita berhenti untuk berkarya dalam pelayanan ini. Ini semua adalah untuk Tuhan maka pasti Tuhan akan buka jalan 
//               dan segalanya pasti akan terjadi indah pada waktunya.
//             </p>
//           </div>
//           <img src="/DJI_0192.JPG" alt="Descriptive Alt Text" className="w-20 h-40 object-cover rounded-md shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Navbar from '@/app/components/navbar'; // Import Navbar
import '@/app/styles/globals.css'; // Import global CSS file
import Footer from '@/app/components/footer'

export default function Sejarah() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white" style={{ backgroundImage: 'url(/Background-White.png)' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center py-20 px-20 md:px-60 space-y-20 relative z-10">
        {/* Top Row: Text on the left, Image on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <div className="bg-gray-100 p-4 rounded-md shadow-md w-full">
            <p className="text-gray-800 leading-relaxed text-justify">
              Mewujudkan suatu harapan menjadi realita ternyata menuntut suatu perjuangan yang kadangkala membawa resiko.
              Tetapi apabila suatu resiko itu mengundang seuntai bunga kasih bagi masa depan sesama, bukankah itu namanya kewajiban?
              Untaian kata di atas tetap hanya merupakan impian sekiranya motivasi yang terkandung tak seirama dengan rencana dan kehendak Tuhan.
              Beranjak dari rasa keterbebanan dan kerinduan dari beberapa siswa serta aktivis pelayanan siswa Kristen di Kota Manado & Bitung untuk mewartakan dan menyatakan kehadiran Kristus dalam kehidupan siswa Kristen se-Sulawesi Utara, 
            </p>
          </div>
          <img src="/DJI_0192.JPG" alt="Descriptive Alt Text" className="object-cover rounded-md shadow-md w-full h-auto" />
        </div>

        {/* Middle Row: Image on the left, Text on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <img src="/DJI_0192.JPG" alt="Descriptive Alt Text" className="object-cover rounded-md shadow-md w-full h-auto" />
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <p className="text-gray-800 leading-relaxed text-justify">
              Maka hadirlah suatu bentuk jaringan pelayanan siswa Kristen yang mempersatukan pola pelayanan bagi seluruh siswa Kristen SLTP/SMK/SMU se-Sulawesi Utara. Seperti dikatakan tadi bahwa semua rencana yang baik akan diberkati Tuhan namun sangat disadari juga bahwa sungguh besar kuasa kegelapan yang tidak menghendaki semua itu terjadi tetapi
              semuanya kita serahkan kepada kehendak Tuhan. Maka Tuhan pasti akan memberikan kekuatan kepada kita untuk menghalau kuasa jahat serta dapat menyelesaikan pekerjaan pelayanan yang masih banyak menanti di hadapan kita.
            </p>
          </div>
        </div>

        {/* Bottom Row: Text on the left, Image on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <p className="text-gray-800 leading-relaxed text-justify">
              Walaupun banyak permasalahan yang dihadapi, pelayanan ini terus bertumbuh dengan segala keterbatasan dan kekurangannya.
              Namun janganlah kita berhenti untuk berkarya dalam pelayanan ini. Ini semua adalah untuk Tuhan maka pasti Tuhan akan buka jalan dan segalanya pasti akan terjadi indah pada waktunya.
              Olehnya sangatlah diharapkan adanya dukungan doa dan kerjasama dari kita semua untuk melahirkan suatu bentuk organisasi pelayanan siswa yang memiliki legitimasi sehingga dapat diterima dan berkarya serta melayani di sekolah atau di mana saja Tuhan kehendaki.
            </p>
          </div>
          <img src="/DJI_0192.JPG" alt="Descriptive Alt Text" className="object-cover rounded-md shadow-md w-full h-auto" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
