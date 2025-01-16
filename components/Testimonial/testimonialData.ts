import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "John D.",
    designation: "CEO, TechCorp Solutions",
    image: image1,
    content:
      "The team at SkyLogic Systems transformed our digital infrastructure, helping us increase efficiency and streamline operations. Their expertise is unmatched!",
  },
  {
    id: 2,
    name: "Sarah P. ",
    designation: "CTO, InnovateTech",
    image: image2,
    content:
      "Thanks to SkyLogic Systems, we now have a robust IT strategy that supports our rapid growth. They provided personalized solutions that truly fit our needs.",
  },
  {
    id: 3,
    name: "Mark L.",
    designation: "Operations Manager, Finserve Systems",
    image: image1,
    content:
      "Exceptional service and attention to detail. SkyLogic Systems has been a reliable partner in upgrading our IT systems and ensuring smooth business operations.",
  },
  {
    id: 4,
    name: "Emily R.",
    designation: "Project Manager, CreativeDesign",
    image: image2,
    content:
      "With SkyLogic Systems, we’ve experienced seamless IT support and innovative solutions. They’ve helped us stay ahead in a competitive market!",
  },
];
