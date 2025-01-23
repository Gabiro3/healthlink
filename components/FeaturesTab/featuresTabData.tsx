import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Upload Medical Image",
    desc1: `Easily upload medical images such as X-rays into the platform, ensuring secure storage and ready access for diagnostic analysis.`,
    desc2: `Our platform supports various image formats, ensuring compatibility with diverse imaging devices and modalities.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/dicoms/software.svg",
  },
  {
    id: "tabTwo",
    title: "Run Diagnostics",
    desc1: `Leverage advanced AI-powered diagnostic tools to analyze the uploaded image, providing an in-depth evaluation for accurate diagnosis.`,
    desc2: `Our system identifies key patterns, abnormalities, and conditions to support precise medical decision-making.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/dicoms/software.svg",
  },
  {
    id: "tabThree",
    title: "AI-Guided Results",
    desc1: `Obtain AI-guided diagnostic results that assist doctors in making informed decisions about the patient's condition and treatment.`,
    desc2: `The AI model provides a detailed analysis with suggested conclusions, which the doctor can use to confirm diagnosis and next steps.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/dicoms/software.svg",
  },
];

export default featuresTabData;

