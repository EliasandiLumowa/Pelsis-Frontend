// // src/app/api/fetchEvents.ts

// import axios from 'axios';

// const url = "http://localhost:1337";

// export const fetchEvents = async () => {
//   try {
//     const response = await axios.get(`${url}/api/event23s?populate=*`);
//     const data = response.data.data;

//     // Mapping data ke dalam format yang sesuai
//     const mappedEvents = data.map((item: any) => ({
//       image: item.attributes.image.data.attributes.formats.large.url,
//       title: item.attributes.title,
//       deskripsi: item.attributes.deskripsi,
//       benefit: item.attributes.benefit,
//       jam: item.attributes.jam,
//       lokasi: item.attributes.lokasi,
//       tanggal: item.attributes.tanggal,
//     }));

//     return mappedEvents;
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     throw error;
//   }
// };
