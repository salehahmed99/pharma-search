import { Drug } from "../models/Drug.js";
const PANADOL = new Drug(
  0,
  "PANADOL COLD & FLU DAY 24",
  "CAFFEINE+PARACETAMOL+PHENYLEPHRINEHYDROCHLORIDE",
  "36.5 > 76 EGP",
  "COLD & FLU",
  "RESPIRATORY CARE MEDICATIONS",
  "ALEXANDRIA",
  "https://i5.walmartimages.com/seo/PANADOL-C-F-ND-CAP-325-MG-APAP-5MG-PE2X12_b624f84d-62c4-40c3-90cd-327eb7adc2a8.53a7ef746ca4b33a01f0cee7d6a65cfd.jpeg",
  "1. RELIEF OF NASAL CONGESTION AND SINUS PRESSURE 2. REDUCTION OF FEVER 3. MANAGEMENT OF HEADACHE AND BODY ACHES 4. RELIEF OF NASAL DISCOMFORT 5. OVERALL RELIEF OF COLD AND FLU SYMPTOMS"
);
const STOPADOL = new Drug(
  1,
  "STOPADOL COLD MAX 20",
  "PARACETAMOL+CHLORPHENIRAMINE+DEXTROMETHORPHAN+PHENYLEPHRINE",
  "46 > 46 EGP",
  "COLD & FLU",
  "RESPIRATORY CARE MEDICATIONS",
  "",
  "https://i0.wp.com/taypharmacies.com/wp-content/uploads/2024/12/2024-12-28T100031.739.png?resize=510%2C510&ssl=1",
  "used to relieve sorre throuat, nasal congestion, calm dry cough, relieve, and as an analgesic & antipyretic"
);
const TELFAST = new Drug(
  2,
  "TELFAST 120MG 20 F.C.TAB",
  "FEXOFENADINE",
  "76 > 99 EGP",
  "ALLERGY ANTI HISTAMINIC",
  "RESPIRATORY CARE MEDICATIONS",
  "SANOFI",
  "https://www.telfast.com/dam/jcr:702f508f-9136-41e0-ab8f-50ef36149743/Telfast_180.png",
  "ALLERGIC RHINITIS, HAY FEVER, ITCHY EYES"
);
const ALLERFEN = new Drug(
  3,
  "ALLERFEN 120 MG 20 F.C. TAB",
  "FEXOFENADINE",
  "26 > 64 EGP",
  "ALLERGY ANTI HISTAMINIC",
  "RESPIRATORY CARE MEDICATIONS",
  "AMOUN",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblxIJdZSxAZPBxXH7FgcYIRpKZlRJT1lGJA&s",
  "ALLERGIC RHINITIS, HAY FEVER, ITCHY EYES"
);


const ABIMOL = new Drug(
  4,
  "ABIMOL 300MG 5 RECTAL SUPP",
  "PARACETAMOL",
  "15 > 15 EGP",
  "ANALGESICS & ANTI PYRETICS",
  "PAIN, FEVER & INFLAMMATIONS",
  "GLAXO PHARMA",
  "http://egyptiandrugstore.com/image/cache/data/manar13/ABIMOL%20INF-400x400.png",
  "1. PAIN RELIEF 2. REDUCES FEVER 3. USED FOR HEADACHES, MUSCLE ACHES 4. SUITABLE FOR MILD TO MODERATE PAIN 5. COMMON OVER-THE-COUNTER PAIN RELIEVER"
);


const ATCORELIVO = new Drug(
  5,
  "ATCORELIVO 10 ORAL POWDER IN SACHET",
  "PARACETAMOL+PHENIRAMINE+PHENYLEPHRINE+VITAMIN C",
  "35 > 35 EGP",
  "COLD & FLU",
  "RESPIRATORY CARE MEDICATIONS",
  "ATCO PHARMA",
  "https://api.c0umyt3cda-pharmaove1-p1-public.model-t.cc.commerce.ondemand.com/medias/000000000000029031.jpg?context=bWFzdGVyfGltYWdlc3w1MjA1Njd8aW1hZ2UvanBlZ3xhRFptTDJneFlpOHhNRGc1TnpjNE5ETTBNRFV4TUM4d01EQXdNREF3TURBd01EQXdNamt3TXpFdWFuQm58Y2M2MTY1ZmUxNjFlYjhiNDFkY2VjZTJhMTc3MGQwYmYyOGVhZGI4ZjliZGUwZTA4MDhmMjYxMmQ3ODRlNGRlYg",
  "1. TREATS SYMPTOMS OF COLD AND ALLERGIES 2. RELIEVES NASAL CONGESTION 3. ALLEVIATES PAIN AND FEVER 4. ANTIHISTAMINE ACTION FOR ALLERGY RELIEF 5. VITAMIN C FOR IMMUNE SUPPORT"
);



const HISTAFREE = new Drug(
  6,
  "HISTAFREE 120MG 10 TAB",
  "FEXOFENADINE",
  "22 > 33 EGP",
  "ALLERGY ANTI HISTAMINIC",
  "RESPIRATORY CARE MEDICATIONS",
  "HI-PHARM",
  "https://dw2.org/img/8404.jpg",
  "ALLERGIC RHINITIS, HAY FEVER, ITCHY EYES"
);

export const DRUGS = [
  PANADOL,
  TELFAST,
  STOPADOL,
  ALLERFEN,
  ABIMOL,
  ATCORELIVO,
  HISTAFREE,
];
