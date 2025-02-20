export interface Service {
  id: number;
  title: string;
  description: string;
  details: string;
  duration: string;
  price: number;
  required_doc: string;
  icon: string;
  procedures?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Document Attestation",
    description: "Official certification of documents",
    details: "Complete attestation process through MOFA and government authorities including document verification, stamping, and legalization for personal and commercial documents.",
    duration: "3-5 working days",
    price: 6500,
    required_doc: "1. Original Certificate   2. Passport Copy",
    icon: "FaFileSignature",
    procedures: [
      "Notary public attestation",
      "Ministry certification",
      "Embassy legalization"
    ]
  },
  {
    id: 2,
    title: "Visa Processing",
    description: "Comprehensive visa assistance",
    details: "End-to-end visa processing including document preparation, application submission, and follow-up for various visa types.",
    duration: "7-10 working days",
    price: 6500,
    required_doc: "1. Original Certificate   2. Passport Copy",
    icon: "FaPassport",
    procedures: [
      "Tourist visa applications",
      "Employment visa processing",
      "Family sponsorship visas"
    ]
  }
];