import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "How is my data stored and protected on your platform?",
    ans: "We take data security very seriously. All patient and user data is encrypted both in transit and at rest. Our platform complies with strict healthcare regulations, including HIPAA, to ensure the privacy and security of sensitive medical information.",
  },
  {
    id: 2,
    quest: "How can hospital owners get started with using your platform?",
    ans: "Getting started is simple! Hospital owners can sign up for an account, request a demo, and receive personalized onboarding assistance. Our team will guide you through the setup process, ensuring smooth integration with your existing systems.",
  },
  {
    id: 3,
    quest: "Can multiple users access the platform from different locations?",
    ans: "Yes, our platform is cloud-based and allows secure access from anywhere. Multiple users, including radiologists, doctors, and administrators, can log in from different locations, ensuring seamless collaboration and remote diagnostics.",
  },
];

export default faqData;

