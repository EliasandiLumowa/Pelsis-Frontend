// "use client";

// import React, { useState, useEffect } from 'react';
// import Navbar from '@/app/components/navbar';
// import Loading from '@/app/components/loading'; // Import komponen Loading
// import './styles/globals.css';
// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import SwiperCore, { Navigation, Pagination, EffectCreative, Autoplay } from 'swiper';
// import axios from 'axios';

// SwiperCore.use([Navigation, Pagination, EffectCreative, Autoplay]);

// export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulasi loading selama 2 detik
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);


//   const images = [
//     { image: '/DJI_0143.JPG',
//       title: 'Pengurus PELSIS Sulut dan JTE Sulut mendampingi panitia dan finalis SKB 2021 dalam kegiatan Roadshow ',
//       date: 'Sabtu, 13 November 2021',
//       link: '/details/1' // Link untuk halaman detail
//      },
//     { image: '/DJI_0192.JPG',
//       title: 'Pengurus PELSIS Sulut dan JTE Sulut mendampingi panitia dan finalis SKB 2021',
//       date: 'Sabtu, 13 November 2021',
//       link: '/details/2' // Link untuk halaman detail 
//     },
//     { image: '/DJI_0209.JPG', 
//       title: 'Pengurus PELSIS Sulut dan JTE Sulut mendampingi panitia',
//       date: 'Sabtu, 13 November 2021',
//       link: '/details/3' // Link untuk halaman detail  
//     },
//     { image: '/DJI_0213.JPG',
//       title: 'Pengurus PELSIS Sulut',
//       date: 'Sabtu, 13 November 2021',
//       link: '/details/4' // Link untuk halaman detail    
//     },
//   ];
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white overflow-hidden" style={{ backgroundImage: 'url(/Background-White.png)', backgroundAttachment: 'fixed' }}>
//       <div className="absolute inset-0"></div>

//       <Navbar />

//       {/* Main Content */}
//       <div className="relative flex flex-col items-start justify-center px-10 ml-60 h-screen z-10">
//         {/* Text Content */}
//         <div className="mb-8 max-w-2xl">
//           <h1 className="text-5xl font-extrabold text-black font-poppins">
//             <span className="text-pink-500">Wadah</span> Pelayanan Generasi Muda Kristen
//           </h1>
//           <p className="mt-4 text-lg text-black">Nusa Wash Laundry merupakan jasa laundry yang menyediakan layanan antar jemput daerah</p>
//           <p className="text-lg text-black font-bold">Bojongsoang & sekitarnya</p>
//         </div>

//         {/* Circular Frame for Image */}
//         <div className="absolute right-10 top-1/2 transform -translate-y-1/2 px-10 mr-60 z-0">
//           <div className="w-[600px] h-[600px] rounded-full border-4 border-white flex items-center justify-center bg-white overflow-hidden">
//             <img src="/DJI_0192.JPG" alt="Placeholder" className="w-full h-full object-cover rounded-full" />
//           </div>
//         </div>

//         {/* Join Now Button */}
//         <button className="mt-6 px-8 py-4 bg-pink-500 text-white text-lg font-bold rounded-full shadow-md hover:bg-pink-600 transition-transform transform hover:scale-105" style={{ borderRadius: '50px' }}>
//           GABUNG SEKARANG!
//         </button>
//       </div>

//       {/* New Section Below */}
//       <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(/Rectangle.png)', backgroundAttachment: 'fixed' }}>
//         <div className="text-center flex flex-col items-center">
//           {/* Text Content */}
//           <h2 className="text-7xl font-poppins text-black">Sejarah Pelayanan Siswa Kristen</h2>
//           <div className="w-full flex justify-start">
//             <Link href="/Sejarah">
//               <button className="mt-4 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
//                 Selengkapnya →
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="ml-8 w-60 h-60">
//           <img src="/Logo-Pelsis.png" alt="Logo" className="w-full h-full object-contain" />
//         </div>
//       </div>

//       {/* Swiper Section */}
//       <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white overflow-hidden" style={{ backgroundImage: 'url(/Background-White.png)', backgroundAttachment: 'fixed' }}>
//         <h1 className="text-5xl font-extrabold text-black font-poppins text-center mt-20">
//           <span className="text-black">Sorotan Kegiatan</span> <span className="text-pink-500">Pelayanan Siswa Kristen</span>
//         </h1>

//         <Swiper
//           spaceBetween={70} // Jarak antar slide
//           slidesPerView={3} // Menampilkan 3 slide sekaligus
//           navigation={{ nextEl: null, prevEl: null }}
//           pagination={{ clickable: true }}
//           effect="coverflow"
//           centeredSlides={true}
//           loop={true} // Menambahkan properti loop
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 200,
//             modifier: 1,
//             slideShadows: false,
//           }}
//         >
//           {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 mt-20 mb-5">
//               <img
//                 src={image.image}
//                 className="w-full h-[400px] object-cover"
//               />
//             </div>
//             <div className="p-4 bg-white mb-10">
//                 <p className="text-sm text-gray-600 text-center">
//                   {image.date}
//                 </p>
//                 <h3 className="text-lg font-bold text-black text-center">
//                   {image.title}
//                 </h3>
//                 <div className="text-center">
//                   <Link href={image.link}>
//                     <button className="mt-2 px-6 py-2 bg-pink-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-transform transform hover:scale-105">
//                       Selengkapnya →
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//           </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//     );
//   }

"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar';
import Loading from '@/app/components/loading';
import Footer from '@/app/components/footer' // Import komponen Loading
import './styles/globals.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import axios from 'axios';



export default function Home() {
  // const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]); // State untuk menyimpan data dari Strapi

  // useEffect(() => {
  //   // Simulasi loading selama 2 detik
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);
  
  const url = "http://localhost:1337"
  useEffect(() => {
    // Fetch data dari Strapi
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/sorotans?populate=*'); // Ganti dengan endpoint API Strapi Anda
        const data = response.data.data;
        // console.log(data);
        
        // Mapping data ke dalam format yang sesuai
        const mappedImages = data.map((item: any) => ({
          image: item.attributes.image.data.attributes.formats.large.url, // Sesuaikan dengan struktur data dari Strapi
          title: item.attributes.title, 
          date: item.attributes.date, 
          link: item.attributes.link, // Sesuaikan link detail dengan ID dari Strapi
        }));
        
        // console.log(map.image);
        
        

        setImages(mappedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }


  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white overflow-hidden" style={{ backgroundImage: 'url(/Background-White.png)', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0"></div>

      <Navbar />

      {/* Main Content */}
      <div className="relative flex flex-col items-start justify-center px-10 ml-60 h-screen z-10">
        {/* Text Content */}
        <div className="mb-8 max-w-2xl">
          <h1 className="text-5xl font-extrabold text-black font-poppins">
            <span className="text-pink-700">Wadah</span> Pelayanan Generasi Muda Kristen
          </h1>
          <p className="mt-4 text-lg text-black">Nusa Wash Laundry merupakan jasa laundry yang menyediakan layanan antar jemput daerah</p>
          <p className="text-lg text-black font-bold">Bojongsoang & sekitarnya</p>
        </div>

        {/* Circular Frame for Image */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 px-10 mr-60 z-0">
          <div className="w-[600px] h-[600px] rounded-full border-4 border-white flex items-center justify-center bg-white overflow-hidden">
            <img src="/DJI_0192.JPG" alt="Placeholder" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        
        {/* Join Now Button */}
        <Link href="/Events">
          <button className="mt-6 px-8 py-4 bg-pink-700 text-white text-lg font-bold rounded-full shadow-md hover:bg-pink-800 transition-transform transform hover:scale-105" style={{ borderRadius: '50px' }}>
            GABUNG SEKARANG!
          </button>
        </Link>
      </div>

      {/* New Section Below */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(/Rectangle.png)', backgroundAttachment: 'fixed' }}>
        <div className="text-center flex flex-col items-center">
          {/* Text Content */}
          <h2 className="text-7xl font-poppins text-black">Sejarah Pelayanan Siswa Kristen</h2>
          <div className="w-full flex justify-start">
            <Link href="/Sejarah">
              <button className="mt-4 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
                Selengkapnya →
              </button>
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="ml-8 w-60 h-60">
          <img src="/Logo-Pelsis.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Swiper Section */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white overflow-hidden" style={{ backgroundImage: 'url(/Background-White.png)', backgroundAttachment: 'fixed' }}>
        <h1 className="text-5xl font-extrabold text-black font-poppins text-center mt-20">
          <span className="text-black">Sorotan Kegiatan</span> <span className="text-pink-700">Pelayanan Siswa Kristen</span>
        </h1>

        <Swiper
          spaceBetween={70} // Jarak antar slide
          slidesPerView={3} // Menampilkan 3 slide sekaligus
          navigation={{ nextEl: null, prevEl: null }}
          pagination={{ clickable: true }}
          effect="coverflow"
          centeredSlides={true}
          loop={true} // Menambahkan properti loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 mt-20 mb-5">
              <img
                src={url + image.image}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-4 bg-white mb-10">
                <p className="text-sm text-gray-600 text-center">
                  {image.date}
                </p>
                <h3 className="text-lg font-bold text-black text-center">
                  {image.title}
                </h3>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-20">
          <Link href={"https://www.instagram.com/pelsis_official?igsh=dG5udHZqaHJtOTJ3"}>
            <button className="mt-2 px-10 py-4 bg-pink-700 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-pink-800 transition-transform transform hover:scale-105">
              Selengkapnya →
            </button>
          </Link>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}
