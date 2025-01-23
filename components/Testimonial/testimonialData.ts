import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Emily Roberts",
    designation: "Radiologist @City Hospital",
    image: image1,
    content:
      "Our hospital has seen a significant improvement in diagnostic efficiency since we started using this platform. The AI-powered analysis helps us detect conditions faster and more accurately, ensuring timely treatments for our patients.",
  },
  {
    id: 2,
    name: "Dr. Johnathan Miller",
    designation: "Chief Medical Officer @MedCare Clinic",
    image: image2,
    content:
      "This platform has transformed the way we handle medical imaging. The integration of AI has drastically reduced our diagnostic errors and allowed our doctors to make more informed decisions, ultimately improving patient outcomes.",
  },
  {
    id: 3,
    name: "Dr. Sarah Lee",
    designation: "Radiology Director @Global Health Network",
    image: image1,
    content:
      "The AI assistance on this platform is a game-changer for our radiology department. It's incredibly user-friendly, and the results are consistently accurate. We're now able to process more cases with higher precision every day.",
  },
  {
    id: 4,
    name: "Dr. Michael Davis",
    designation: "Head of Radiology @Parkview Medical Center",
    image: image2,
    content:
      "We've integrated this platform across our network of hospitals, and it's been a huge success. The ease of use, along with the speed and accuracy of the AI-driven diagnostics, has made a real difference in patient care and workflow efficiency.",
  },
];
