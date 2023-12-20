import { PopularImage, PopularImage2, PopularImage3, PopularImage4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const popularDestinasi = [
    { label: "Flores Road Trip 3D2N", hari: "3 Day", price: "Rp 3.000.000/orang", imgURL:PopularImage, lokasi: "Bandung, Jawa Barat", }, 
    { label: "Forrester Glamping Bogor", hari: "1 Day", price: "Rp 1.000.000/malam", imgURL:PopularImage2, lokasi: "Bogor, Jawa Barat" },
    { label: "Paket Tiket Pesawat Jakarta Bali", hari: "", price: "Rp 600.000/orang", imgURL:PopularImage3, lokasi:  "Jakarta, Jawa Barat" },
    { label: "Desa Wisata Kandiri", hari: "14 Day", price: "Rp 1.400.000/orang", imgURL:PopularImage4, lokasi:  "Semarang, Jawa Tengah"},
];

export const Service = [
    { label: "Melayani pesan tiket pesawat", judul: 'Tiket Pesawat'},
    { label: "Melayani pesan tiket hotel", judul: 'Tiket Hotel'},
    { label: "Melayani pesan tiket liburan", judul: 'Tiket Liburan'},
]