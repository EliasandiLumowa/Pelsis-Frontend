"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar';
import '@/app/styles/globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Footer from '@/app/components/footer';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function Events() {
  const [latestEvents, setLatestEvents] = useState([]);
  const [year2023Events, setYear2023Events] = useState([]);
  const router = useRouter(); 
  const url = "http://localhost:1337";

  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/events?populate=*');
        const data = response.data.data;

        const mappedEvents = data.map((item: any) => ({
          id: item.id,
          seotitle: item.attributes.seotitle, // Pastikan field ini ada dan diisi
          image: item.attributes.image.data.attributes.formats.large.url,
          title: item.attributes.title,
          deskripsi: item.attributes.deskripsi,
          benefit: item.attributes.benefit,
          jam: item.attributes.jam,
          lokasi: item.attributes.lokasi,
          tanggal: item.attributes.tanggal,
        }));

        setLatestEvents(mappedEvents);
      } catch (error) {
        console.error('Error fetching latest Events:', error);
      }
    };

    const fetchYear2023Events = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/event23s?populate=*');
        const data = response.data.data;

        const mappedEvents = data.map((item: any) => ({
          id: item.id,
          seotitle: item.attributes.seotitle, // Pastikan field ini ada dan diisi
          image: item.attributes.image.data.attributes.formats.large.url,
          title: item.attributes.title,
          deskripsi: item.attributes.deskripsi,
          benefit: item.attributes.benefit,
          jam: item.attributes.jam,
          lokasi: item.attributes.lokasi,
          tanggal: item.attributes.tanggal,
        }));

        setYear2023Events(mappedEvents);
      } catch (error) {
        console.error('Error fetching year 2023 Events:', error);
      }
    };

    fetchLatestEvents();
    fetchYear2023Events();
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white overflow-hidden" style={{ backgroundImage: 'url(/Background-White.png)', backgroundAttachment: 'fixed' }}>
      <Navbar />

      {/* Main Content */}
      <div className="px-6 py-10 md:px-12 md:py-16">
        {/* Kegiatan Terbaru */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            <span className="text-pink-700">Kegiatan</span> Terbaru
          </h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation={{ nextEl: null, prevEl: null }}
            pagination={{ clickable: true }}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            className="events-swiper"
          >
            {latestEvents.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="overflow-hidden rounded-t-lg" style={{ height: '200px' }}>
                    <img src={url + image.image} alt={image.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-black">{image.title}</h3>
                  
                  <button 
                    className="mt-4 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition-colors"
                    onClick={() => router.push(`/Events/${image.seotitle}`)} // Menggunakan seotitle
                  >
                    Selengkapnya &rarr;
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Kegiatan Tahun 2023 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            <span className="text-pink-700">Kegiatan</span> Tahun 2023
          </h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation={{ nextEl: null, prevEl: null }}
            pagination={{ clickable: true }}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            className="events-swiper"
          >
            {year2023Events.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="overflow-hidden rounded-t-lg" style={{ height: '200px' }}>
                    <img src={url + image.image} alt={image.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-black">{image.title}</h3>
                  
                  <button 
                    className="mt-4 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition-colors"
                    onClick={() => router.push(`/Events/${image.seotitle}`)} // Menggunakan seotitle
                  >
                    Selengkapnya &rarr;
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
