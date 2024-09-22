import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About Us" },
    { link: "/members", name: "Members" },
    { link: "/events", name: "Events" },
    { link: "/news", name: "News" },
    { link: "/contact", name: "Contact Us" },
];
const footerLink = [
    { link: "/about", name: "About Us" },
    { link: "/members", name: "Members" },
    { link: "/events", name: "Events" },
    { link: "/news", name: "News" },
    { link: "/contact", name: "Contact Us" },
]
const contacts = [
    {
        icon: Phone,
        info: " 9779745432207",
    },
    {
        icon: Mail,
        info: "info@khanepani.com",
    },

    {
        icon: MapPin,
        info: "Tilotama-2, Rupandehi",
    },
];
const socialMedia = [
    {
        image: "/assets/social-media/facebook.png",
        name: "facebook",
        link: "https://www.facebook.com",
    },
    {
        image: "/assets/social-media/instagram.png",
        name: "instagram",
        link: "https://www.instagram.com",
    },
    {
        image: "/assets/social-media/twitter.png",
        name: "whatshap",
        link: "https://www.x.com",
    },
];
export { navLinks, footerLink, contacts, socialMedia }