import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const iconSize = 20

const SocialMediaIcons = [
  { icon: <FaLinkedin size={iconSize} />, url: "https://www.linkedin.com" },
  { icon: <FaInstagram size={iconSize}/>, url: "https://www.instagram.com" },
  { icon: <FaFacebook size={iconSize}/>, url: "https://www.facebook.com" },
  { icon: <FaYoutube size={iconSize}/>, url: "https://www.youtube.com" },
  { icon: <FaTiktok size={iconSize}/>, url: "https://www.tiktok.com" },
];

export default SocialMediaIcons;
