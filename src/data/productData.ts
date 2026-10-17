import { ProductItem } from '../types';

export const MANUFACTURER_DIVISIONS = [
  'All Manufacturers',
  'Senores Pharmaceuticals',
  'Concord Biotech (INCA)',
  'Mankind Pharma (Saviour)',
  'Vitabionics Healthcare',
  'Biohelix Life Science',
  'Aviral Pharmaceuticals',
  'Mscians Nutrition',
  'R S Pharma',
];

export const THERAPEUTIC_CATEGORIES = [
  'All Categories',
  'Critical Care & Injectables',
  'Antibiotics & Anti-Infectives',
  'Antifungals & Antivirals',
  'Plasma & Blood Derivatives',
  'Anesthesia & Emergency',
  'Gastroenterology & PPIs',
  'Cardiovascular & Renal',
  'Nutrition & Joint Care',
  'Analgesics & Anti-Inflammatory',
];

export const DOSAGE_FORMS = [
  'All Forms',
  'Injectables & Infusions',
  'Tablets & Capsules',
  'Oral Liquids & Sachets',
  'Topical & Ointments',
];

export const PHARMA_PRODUCTS: ProductItem[] = [
  // ==========================================
  // VITABIONICS HEALTHCARE PRIVATE LIMITED
  // ==========================================
  {
    id: 'vita-01',
    code: 'VITA-CALC-D3',
    name: 'CALCINICS-D3 60 000IU/5ML',
    description: 'Vitamin D3 60,000 IU/5ml oral solution formulated for rapid correction of vitamin D deficiency and calcium absorption.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Oral Liquids & Sachets',
    strength: '60,000 IU / 5ml',
    packaging: 'Nano Shot (5ml Bottle)',
    mrp: '140',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-02',
    code: 'VITA-CALC-XT',
    name: 'CALCINICS-XT TAB',
    description: 'Calcium Carbonate 1250mg + Vitamin D3 2000IU + Methylcobalamin 1500mcg + L-Methylfolate 1mg + Pyridoxal-5 Phosphate 20mg Tablets.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '1250mg / 2000IU / 1500mcg / 1mg / 20mg',
    packaging: '10x10 Tablets',
    mrp: '220',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-03',
    code: 'VITA-CISS-D',
    name: 'CISSNICS-D TAB',
    description: 'Cissus Quadrangularis 750mg, Elemental Calcium 250mg, Magnesium 50mg, Vitamin D3 325mcg & Vitamin K2-7 45mcg Tablets.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '750mg / 250mg / 50mg / 325mcg / 45mcg',
    packaging: '10x1x10 Tablets',
    mrp: '320',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-04',
    code: 'VITA-CURC',
    name: 'CURCUNICS TAB',
    description: 'Nano Curcumin 600mg + Boswellic Acid 200mg + Spirulina 250mg + Lycopene 8mg + Beta Carotene 15mg + Piperine 5mg Tablets.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Tablets & Capsules',
    strength: '600mg / 200mg / 250mg / 8mg / 15mg / 5mg',
    packaging: '10x10 Tablets',
    mrp: '450',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-05',
    code: 'VITA-ETON-90',
    name: 'ETONICS TAB 90MG',
    description: 'Etoricoxib Tablets 90mg for selective COX-2 inhibition and targeted management of acute musculoskeletal and postoperative pain.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Tablets & Capsules',
    strength: '90mg',
    packaging: '10x10 Tablets',
    mrp: '180',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-06',
    code: 'VITA-GUTN-PRO',
    name: 'GUTNICS-PRO TAB',
    description: 'Multi Digestive Enzymes and high-potency Probiotics with Fructooligosaccharides (FOS) for gastrointestinal balance.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Tablets & Capsules',
    strength: 'Multi Digestive Enzymes + Probiotics + FOS',
    packaging: '1x10 Tablets',
    mrp: '150',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-07',
    code: 'VITA-JOINT-PLUS',
    name: 'JOINT-FORTE-PLUS TAB',
    description: 'Undenatured Type II Collagen 40mg, Rosehip Extract 275mg, Curcumin, Boswellia 307mg, Vitamin C 40mg & Sodium Hyaluronate 40mg Softgel.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '40mg / 275mg / 307mg / 40mg / 40mg',
    packaging: '10x1x10 Capsules',
    mrp: '580',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-08',
    code: 'VITA-NUTR-GOLD',
    name: 'NUTRANICS-GOLD SACHET 5G',
    description: 'L-Arginine 100mg, Lycopene 5000mcg, Cyanocobalamin, CoQ10 30mg, Zinc, Folic Acid, L-Carnitine 1gm Multivitamin & Multimineral Sachet.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Oral Liquids & Sachets',
    strength: 'L-Arginine + CoQ10 + L-Carnitine 1g',
    packaging: '1x10 Sachets (5g)',
    mrp: '390',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-09',
    code: 'VITA-NUTR-Q10',
    name: 'NUTRANICS-Q10 TAB',
    description: 'Co-Enzyme Q10 100mg, Lycopene 4mg, Omega-3 Fatty Acids 150mg, Piperine, Zinc Sulphate, Sodium Selenite & Mixed Carotenoids Softgel.',
    category: 'Cardiovascular & Renal',
    dosageForm: 'Tablets & Capsules',
    strength: '100mg / 4mg / 150mg / 5mg / 7.5mg',
    packaging: '10x1x10 Capsules',
    mrp: '620',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-10',
    code: 'VITA-RUTO-TAB',
    name: 'RUTONICS TAB',
    description: 'Trypsin 48mg + Bromelain 90mg + Rutoside Trihydrate 100mg + Diclofenac Sodium 50mg Tablets for rapid edema and inflammation resolution.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Tablets & Capsules',
    strength: '48mg / 90mg / 100mg / 50mg',
    packaging: '10x10 Tablets',
    mrp: '280',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-11',
    code: 'VITA-THIO-GEL',
    name: 'THIONICS GEL 30GM',
    description: 'Diclofenac Diethylamine 1.16% w/w, Thiocolchicoside 0.125% w/w, Linseed Oil 3%, Methyl Salicylate 10% & Menthol 5% Topical Gel.',
    category: 'Topical & Ointments',
    dosageForm: 'Topical & Ointments',
    strength: '1.16% / 0.125% / 3% / 10% / 5%',
    packaging: '30g Tube',
    mrp: '145',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'vita-12',
    code: 'VITA-TRIO-SP',
    name: 'TRIONICS-SP TAB',
    description: 'Aceclofenac 100mg, Paracetamol 325mg and Serratiopeptidase 15mg Tablets for acute inflammatory pain management.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Tablets & Capsules',
    strength: '100mg / 325mg / 15mg',
    packaging: '10x10 Tablets',
    mrp: '115',
    mfg: 'Vitabionics Healthcare Private Limited',
    division: 'Vitabionics Healthcare',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // SENORES PHARMACEUTICALS LIMITED (SENORES)
  // ==========================================
  {
    id: 'sen-01',
    code: 'SEN-VIR-250',
    name: 'SENOVIR INJ 250MG',
    description: 'Acyclovir Intravenous Infusion I.P 250mg for severe herpes simplex and varicella zoster in immunocompromised hospital patients.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '250mg',
    packaging: '1 Vial + WFI',
    mrp: '369.37',
    price: '35.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-02',
    code: 'SEN-VIR-500',
    name: 'SENOVIR INJ 500MG',
    description: 'Acyclovir Intravenous Infusion I.P 500mg sterile hospital injectable for serious systemic viral infections.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg',
    packaging: '1 Vial + WFI',
    mrp: '563.43',
    price: '42.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-03',
    code: 'SEN-UMIN-20G',
    name: 'SENUMIN INJ 20G',
    description: 'Human Normal Albumin I.P 20% (20g/100ml) sterile biological infusion for volume resuscitation and hypoproteinemia.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '20% (20g / 100ml)',
    packaging: '1 Glass Bottle (100ml)',
    mrp: '8855.00',
    price: '3800.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-04',
    code: 'SEN-DAR-3ML',
    name: 'SENODARONE INJ 3ML',
    description: 'Amiodarone Sterile Concentrate I.P 150mg/3ml class III antiarrhythmic injection for ventricular tachycardia and fibrillation.',
    category: 'Cardiovascular & Renal',
    dosageForm: 'Injectables & Infusions',
    strength: '150mg / 3ml',
    packaging: '1x5 Ampoules',
    mrp: '297.10',
    price: '105.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-05',
    code: 'SEN-ATRA-2.5',
    name: 'ATRASEN INJ 2.5ML',
    description: 'Atracurium Besylate Injection I.P 25mg/2.5ml intermediate-duration neuromuscular blocking agent for surgical anesthesia.',
    category: 'Anesthesia & Emergency',
    dosageForm: 'Injectables & Infusions',
    strength: '25mg / 2.5ml',
    packaging: '1x5 Ampoules',
    mrp: '196.85',
    price: '100.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-06',
    code: 'SEN-ITHRO-500',
    name: 'SENITHRO INJ 500MG',
    description: 'Azithromycin Injection USP 500mg broad-spectrum macrolide antibiotic for moderate to severe community-acquired pneumonia.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg',
    packaging: '1 Vial + WFI',
    mrp: '214.86',
    price: '53.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-07',
    code: 'SEN-AZTREO-1G',
    name: 'AZTREOSEN INJ 1GM',
    description: 'Aztreonam Injection USP 1000mg monobactam antibiotic active against aerobic gram-negative bacilli including P. aeruginosa.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg',
    packaging: '1 Vial + WFI',
    mrp: '1102.50',
    price: '115.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-08',
    code: 'SEN-CEFOS-1.5',
    name: 'CEFOSENTUM INJ 1.5GM',
    description: 'Cefoperazone + Sulbactam for Injection 1500mg (1g + 0.5g) broad-spectrum third-generation cephalosporin and beta-lactamase inhibitor.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1500mg (1000mg + 500mg)',
    packaging: '1 Vial + WFI',
    mrp: '464.06',
    price: '45.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-09',
    code: 'SEN-CEFUS-500',
    name: 'CEFUSEN TAB 500MG',
    description: 'Cefuroxime Axetil Tablets IP 500mg second-generation oral cephalosporin antibiotic for respiratory and ENT infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Tablets & Capsules',
    strength: '500mg',
    packaging: '1x10 Tablets',
    mrp: '490.59',
    price: '137.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-10',
    code: 'SEN-CITI-500',
    name: 'SENOCOLINE INJ 500MG',
    description: 'Citicoline Sodium Injection IP 500mg/2ml neuroprotective agent indicated in acute ischemic stroke and head trauma recovery.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg / 2ml',
    packaging: '1x5 Ampoules',
    mrp: '280.31',
    price: '21.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-11',
    code: 'SEN-CLARE-500',
    name: 'SENOCLARE INJ 500MG',
    description: 'Clarithromycin for Infusion BP 500mg macrolide antibiotic for serious lower respiratory tract infections in hospital settings.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg',
    packaging: '1 Vial + WFI',
    mrp: '1392.18',
    price: '126.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-12',
    code: 'SEN-COLIS-1M',
    name: 'SENCOLIS INJ 1MIU',
    description: 'Colistimethate Sodium for Injection IP 1 Million IU reserve polymyxin antibiotic for multi-drug resistant gram-negative pathogens.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '1,000,000 IU',
    packaging: '1 Vial',
    mrp: '1509.37',
    price: '62.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-13',
    code: 'SEN-COLIS-2M',
    name: 'SENCOLIS INJ 2MIU',
    description: 'Colistimethate Sodium for Injection IP 2 Million IU critical care formulation for hospital-acquired pneumonia and sepsis.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '2,000,000 IU',
    packaging: '1 Vial',
    mrp: '2629.68',
    price: '94.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-14',
    code: 'SEN-COLIS-3M',
    name: 'SENCOLIS INJ 3MIU',
    description: 'Colistimethate Sodium for Injection IP 3 Million IU reserve antibiotic for carbapenem-resistant infections.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '3,000,000 IU',
    packaging: '1 Vial',
    mrp: '3083.43',
    price: '157.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-15',
    code: 'SEN-COLIS-4.5M',
    name: 'SENCOLIS INJ 4.5MIU',
    description: 'Colistimethate Sodium for Injection IP 4.5 Million IU high-titer presentation for ICU severe sepsis management.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '4,500,000 IU',
    packaging: '1 Vial',
    mrp: '6249.37',
    price: '315.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-16',
    code: 'SEN-DOXY-100',
    name: 'SENODOXY INJ 100MG',
    description: 'Doxycycline for Injection USP 100mg broad-spectrum tetracycline antibiotic for atypical hospital-acquired infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg',
    packaging: '1 Vial + WFI',
    mrp: '479.42',
    price: '65.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-17',
    code: 'SEN-ENOX-40',
    name: 'SENOXAPARIN INJ 40MG',
    description: 'Enoxaparin Sodium Injection IP 40mg/0.4ml low-molecular-weight heparin in pre-filled syringe (PFS) for DVT prophylaxis.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '40mg / 0.4ml',
    packaging: '1 Pre-Filled Syringe (PFS)',
    mrp: '470.00',
    price: '80.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-18',
    code: 'SEN-ENOX-60',
    name: 'SENOXAPARIN INJ 60MG',
    description: 'Enoxaparin Sodium Injection IP 60mg/0.6ml pre-filled syringe (PFS) for acute coronary syndromes and deep vein thrombosis treatment.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '60mg / 0.6ml',
    packaging: '1 Pre-Filled Syringe (PFS)',
    mrp: '705.41',
    price: '90.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-19',
    code: 'SEN-ESO-40',
    name: 'SENESO INJ 40MG',
    description: 'Esomeprazole Sodium for Injection 40mg proton pump inhibitor for severe gastroesophageal reflux and ulcer bleeding.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Injectables & Infusions',
    strength: '40mg',
    packaging: '1 Vial + WFI',
    mrp: '374.06',
    price: '16.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-20',
    code: 'SEN-FCM-500',
    name: 'SENO-FCM INJ 500MG',
    description: 'Ferric Carboxymaltose Injection 500mg/10ml colloidal iron complex for rapid intravenous replenishment of severe iron deficiency.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg / 10ml',
    packaging: '1 Vial',
    mrp: '4030.31',
    price: '315.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-21',
    code: 'SEN-FURO-2ML',
    name: 'SENFURO INJ 2ML',
    description: 'Frusemide Injection IP 20mg/2ml high-ceiling loop diuretic for acute pulmonary edema and fluid retention in heart failure.',
    category: 'Cardiovascular & Renal',
    dosageForm: 'Injectables & Infusions',
    strength: '20mg / 2ml',
    packaging: '1x5 Ampoules',
    mrp: '31.15',
    price: '20.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-22',
    code: 'SEN-GLUTA-600',
    name: 'SENGLUTA INJ 600MG',
    description: 'Glutathione for Injection 600mg (Lyophilized) endogenous master antioxidant for cellular protection and hepatic support.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '600mg',
    packaging: '1 Vial + WFI',
    mrp: '1598.43',
    price: '136.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-23',
    code: 'SEN-HEP-25K',
    name: 'SENOHEP INJ 25000IU',
    description: 'Heparin Sodium Injection IP 25,000 IU/5ml fast-acting anticoagulant for hemodialysis, cardiovascular surgery, and thrombosis.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '25,000 IU / 5ml',
    packaging: '1 Vial',
    mrp: '312.18',
    price: '80.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-24',
    code: 'SEN-IMMUNO-5',
    name: 'IMMUNOSEN INJ 5%',
    description: 'Human Normal Immunoglobulin IP 5% (5g/100ml) sterile biological IVIG for primary immunodeficiency and autoimmune disorders.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '5g / 100ml (5%)',
    packaging: '1 Glass Bottle',
    mrp: '15603.00',
    price: '5900.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-25',
    code: 'SEN-IMMUNO-10',
    name: 'IMMUNOSEN INJ 10%',
    description: 'Human Normal Immunoglobulin IP 10% (10g/100ml) high-concentration sterile IVIG biological line maintained at 2°C–8°C.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '10g / 100ml (10%)',
    packaging: '1 Glass Bottle',
    mrp: '21685.00',
    price: '13900.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-26',
    code: 'SEN-IRON-5ML',
    name: 'SENIRON INJ 5ML',
    description: 'Iron Sucrose Injection USP 100mg/5ml complex for dialysis and surgical anemia management.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg / 5ml',
    packaging: '1x5 Ampoules',
    mrp: '1345.30',
    price: '115.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-27',
    code: 'SEN-LEVI-500',
    name: 'SENLEVI INJ 500MG',
    description: 'Levetiracetam Injection USP 500mg/5ml second-generation antiepileptic agent for acute seizure and status epilepticus control.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg / 5ml',
    packaging: '1 Vial',
    mrp: '107.81',
    price: '20.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-28',
    code: 'SEN-PENUM-S',
    name: 'SENOPENUM-S INJ 1.5GM',
    description: 'Meropenem 1000mg & Sulbactam 500mg for Injection 1500mg synergistic broad-spectrum carbapenem for multi-drug resistant nosocomial infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1500mg (1000mg + 500mg)',
    packaging: '1 Vial + WFI',
    mrp: '3280.31',
    price: '140.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-29',
    code: 'SEN-PENUM-500',
    name: 'SENOPENUM INJ 500MG',
    description: 'Meropenem Injection I.P 500mg ultra-broad-spectrum carbapenem antibiotic for severe hospital-acquired infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg',
    packaging: '1 Vial + WFI',
    mrp: '771.56',
    price: '59.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-30',
    code: 'SEN-PENUM-1G',
    name: 'SENOPENUM INJ 1GM',
    description: 'Meropenem Injection I.P 1000mg premier hospital carbapenem standard for intensive care and surgical sepsis.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg',
    packaging: '1 Vial + WFI',
    mrp: '999.37',
    price: '99.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-31',
    code: 'SEN-ZOLAM-5',
    name: 'SENOZOLAM INJ 5MG',
    description: 'Midazolam Injection IP 5mg/5ml short-acting benzodiazepine for procedural sedation, anesthesia induction, and status epilepticus.',
    category: 'Anesthesia & Emergency',
    dosageForm: 'Injectables & Infusions',
    strength: '5mg / 5ml',
    packaging: '1 Vial',
    mrp: '27.71',
    price: '18.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-32',
    code: 'SEN-MINO-100',
    name: 'SENOMINO INJ 100MG',
    description: 'Minocycline for Injection USP 100mg (Lyophilized) broad-spectrum antibiotic targeting multi-drug resistant Acinetobacter baumannii.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg',
    packaging: '1 Vial + WFI',
    mrp: '4686.56',
    price: '209.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-33',
    code: 'SEN-PRAZ-40',
    name: 'SENPRAZOLE INJ 40MG',
    description: 'Pantoprazole for Injection 40mg proton pump inhibitor for hospital treatment of acute peptic ulcer bleeding and acid suppression.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Injectables & Infusions',
    strength: '40mg',
    packaging: '1 Vial + WFI',
    mrp: '53.85',
    price: '7.50',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-34',
    code: 'SEN-OTAZ-4.5',
    name: 'SENOTAZ INJ 4.5GM',
    description: 'Piperacillin 4000mg & Tazobactam 500mg Injection IP 4500mg broad-spectrum antibiotic for moderate-to-severe hospital bacterial infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '4500mg (4g + 0.5g)',
    packaging: '1 Vial + WFI',
    mrp: '426.56',
    price: '65.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-35',
    code: 'SEN-POLY-500K',
    name: 'SENPOLY INJ 5,00,000IU',
    description: 'Polymyxin B for Injection IP 5,00,000 IU (Lyophilized) last-line cyclic polypeptide for pan-drug resistant gram-negative infections.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '5,00,000 IU',
    packaging: '1 Vial',
    mrp: '3450.00',
    price: '93.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-36',
    code: 'SEN-POLY-750K',
    name: 'SENPOLPLUS INJ 7,50,000IU',
    description: 'Polymyxin B for Injection IP 7,50,000 IU (Lyophilized) high-dose presentation for intensive care resistant pathogen rescue therapy.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '7,50,000 IU',
    packaging: '1 Vial',
    mrp: '4893.75',
    price: '288.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-37',
    code: 'SEN-PLAN-400',
    name: 'SENOPLANIN INJ 400MG',
    description: 'Teicoplanin for Injection IP 400mg (Lyophilized) glycopeptide antibiotic for severe MRSA, enterococcal, and bone/joint infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '400mg',
    packaging: '1 Vial + WFI',
    mrp: '3080.00',
    price: '288.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-38',
    code: 'SEN-TERI-750',
    name: 'SENOTERI INJ 750MCG',
    description: 'Teriparatide Injection I.P. 750mcg / 3ml (Recombinant Human Parathyroid Hormone rhPTH1-34) prefilled multi-dose delivery pen.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Injectables & Infusions',
    strength: '750mcg / 3ml',
    packaging: '1 Pre-Filled Pen',
    mrp: '8436.56',
    price: '2500.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-39',
    code: 'SEN-LIPR-10',
    name: 'SENLIPRESSIN INJ 10ML',
    description: 'Terlipressin Injection 1mg/10ml synthetic vasopressin analogue for acute bleeding esophageal varices and hepatorenal syndrome.',
    category: 'Anesthesia & Emergency',
    dosageForm: 'Injectables & Infusions',
    strength: '1mg / 10ml',
    packaging: '1x5 Ampoules',
    mrp: '14437.50',
    price: '475.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-40',
    code: 'SEN-CYCL-100',
    name: 'SENOCYCLINE INJ 100MG',
    description: 'Tigecycline for Injection 100mg first-in-class glycylcycline for complicated skin, soft-tissue, and intra-abdominal infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg',
    packaging: '1 Vial',
    mrp: '8332.50',
    price: '909.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-41',
    code: 'SEN-VAN-500',
    name: 'SENOVAN INJ 500MG',
    description: 'Vancomycin Hydrochloride for Intravenous Infusion IP 500mg glycopeptide standard for MRSA bacteremia and surgical prophylaxis.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '500mg',
    packaging: '1 Vial + WFI',
    mrp: '333.00',
    price: '47.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'sen-42',
    code: 'SEN-FLUX-1G',
    name: 'SENFLUCLOX INJ 1GM',
    description: 'Flucloxacillin Sodium for Injection BP 1000mg isoxazolyl penicillin for staphylococcal bacteremia and osteomyelitis.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg',
    packaging: '1 Vial + WFI',
    mrp: '1199.00',
    price: '160.00',
    mfg: 'Senores Pharmaceuticals Limited',
    division: 'Senores Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // CONCORD BIOTECH LIMITED (CONCORD INCA)
  // ==========================================
  {
    id: 'con-01',
    code: 'CON-AMFO-50',
    name: 'AMFOEVA INJ 50MG',
    description: 'Liposomal Amphotericin B Injection 50mg (Lyophilized) gold-standard liposomal antifungal for invasive systemic fungal infections.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '50mg',
    packaging: '1 Vial',
    mrp: '3696.00',
    price: '1100.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-02',
    code: 'CON-AMFOT-50',
    name: 'AMFOTEROL INJ 50MG',
    description: 'Liposomal Amphotericin B Injection 50mg (Lyophilized) premier fermentation-derived formulation for mucormycosis and aspergillosis.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '50mg',
    packaging: '1 Vial',
    mrp: '6980.64',
    price: '1100.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-03',
    code: 'CON-ANIC-100',
    name: 'ANICORD INJ 100MG',
    description: 'Anidulafungin for Injection 100mg (Lyophilized) echinocandin antifungal for invasive candidiasis and candidemia.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg',
    packaging: '1 Vial',
    mrp: '13020.00',
    price: '2500.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-04',
    code: 'CON-CASP-50',
    name: 'CASPOCON INJ 50MG',
    description: 'Caspofungin Acetate for Injection 50mg (Lyophilized) first-line echinocandin for empirical antifungal therapy.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '50mg',
    packaging: '1 Vial',
    mrp: '21841.00',
    price: '1200.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-05',
    code: 'CON-CASP-70',
    name: 'CASPOCON INJ 70MG',
    description: 'Caspofungin Acetate for Injection 70mg (Lyophilized) initial loading dose formulation for invasive candidiasis.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '70mg',
    packaging: '1 Vial',
    mrp: '21841.00',
    price: '1200.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-06',
    code: 'CON-DAPU-350',
    name: 'DAPUTE INJ 350MG',
    description: 'Daptomycin for Injection 350mg (Lyophilized) cyclic lipopeptide antibiotic for complicated MRSA bacteremia and endocarditis.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '350mg',
    packaging: '1 Vial',
    mrp: '7180.00',
    price: '1500.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-07',
    code: 'CON-ELTRI-1.5',
    name: 'ELTRICORD INJ 1.5GM',
    description: 'Ceftriaxone 1000mg + Disodium Edetate 37mg & Sulbactam 500mg Powder for Solution for Infusion 1500mg with biofilm disruptor.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1500mg',
    packaging: '1 Vial',
    mrp: '2395.00',
    price: '130.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-08',
    code: 'CON-FOSU-4G',
    name: 'FOSUTRAC INJ 4GM',
    description: 'Fosfomycin Sodium for Injection 4gm broad-spectrum bactericidal agent active against multi-drug resistant urinary and systemic pathogens.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '4g',
    packaging: '1 Vial',
    mrp: '6805.00',
    price: '500.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-09',
    code: 'CON-MICA-50',
    name: 'MICACORD INJ 50MG',
    description: 'Micafungin Sodium for Injection USP 50mg (Lyophilized) echinocandin for candidemia and prophylaxis in hematopoietic stem cell transplants.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '50mg',
    packaging: '1 Vial + WFI',
    mrp: '9355.00',
    price: '950.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-10',
    code: 'CON-MICA-100',
    name: 'MICACORD INJ 100MG',
    description: 'Micafungin Sodium for Injection USP 100mg (Lyophilized) high-potency systemic antifungal for severe invasive candidiasis.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg',
    packaging: '1 Vial + WFI',
    mrp: '14032.00',
    price: '1800.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-11',
    code: 'CON-PICO-100',
    name: 'PICOCORD-GR TAB 100MG',
    description: 'Posaconazole Gastro-Resistant Tablets 100mg broad-spectrum triazole antifungal for prophylaxis in severely immunocompromised patients.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Tablets & Capsules',
    strength: '100mg',
    packaging: '1x10 Tablets',
    mrp: '8783.00',
    price: '1300.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-12',
    code: 'CON-PICO-300',
    name: 'PICOCORD-GR TAB 300MG',
    description: 'Posaconazole Gastro-Resistant Tablets 300mg high-titer once-daily antifungal formulation with enhanced bioavailability.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Tablets & Capsules',
    strength: '300mg',
    packaging: '1x10 Tablets',
    mrp: '15999.00',
    price: '4000.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-13',
    code: 'CON-ISAC-100',
    name: 'ISACCREST CAP 100MG',
    description: 'Isavuconazole Capsules 100mg novel broad-spectrum triazole prodrug for invasive aspergillosis and invasive mucormycosis.',
    category: 'Antifungals & Antivirals',
    dosageForm: 'Tablets & Capsules',
    strength: '100mg',
    packaging: '7 Capsules',
    mrp: '8999.00',
    price: '3800.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'con-14',
    code: 'CON-FEPE-200',
    name: 'FEPECORD TAB 200MG',
    description: 'Faropenem Sodium Tablets JP 200mg oral penem antibiotic for resistant respiratory tract and uncomplicated urinary tract infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Tablets & Capsules',
    strength: '200mg',
    packaging: '10x6 Tablets',
    mrp: '719.40',
    price: '300.00',
    mfg: 'Concord Biotech Limited',
    division: 'Concord Biotech (INCA)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // MANKIND PHARMA LIMITED (SAVIOUR MANKIND)
  // ==========================================
  {
    id: 'man-01',
    code: 'MAN-AZTRO-AV',
    name: 'AZTROHIGH-AV INJ 2GM',
    description: 'Aztreonam & Avibactam for Injection (1500mg + 500mg) 2000mg novel beta-lactamase inhibitor combination targeting MBL metallo-beta-lactamases.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '2000mg (1500mg + 500mg)',
    packaging: '1 Vial + WFI',
    mrp: '2990.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-02',
    code: 'MAN-MEROH-1G',
    name: 'MEROHUGE INJ 1GM',
    description: 'Meropenem Injection I.P 1000mg hospital-grade carbapenem standard for complicated intra-abdominal and ICU bacteremia.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg',
    packaging: '1 Vial + WFI',
    mrp: '990.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-03',
    code: 'MAN-TIGEC-50',
    name: 'TIGECROSS INJ 50MG',
    description: 'Tigecycline for Injection 50mg glycylcycline broad-spectrum antibacterial agent for resistant hospital pathogens.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '50mg',
    packaging: '1 Vial + WFI',
    mrp: '4800.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-04',
    code: 'MAN-GUDCEF-AV',
    name: 'GUDCEF-AV INJ 2.5GM',
    description: 'Ceftazidime & Avibactam for Injection 2500mg advanced beta-lactamase inhibitor combination for KPC and carbapenemase producers.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '2500mg',
    packaging: '1 Vial',
    mrp: '6200.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-05',
    code: 'MAN-ALBU-20G',
    name: 'ALBUKIND INJ 20G',
    description: 'Human Normal Albumin I.P 20% (20g/100ml) sterile human plasma volume expander for critical hypovolemia.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '20g / 100ml (20%)',
    packaging: '1 Bottle',
    mrp: '8450.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-06',
    code: 'MAN-GLOB-5G',
    name: 'GLOBUGOLD INJ 5G',
    description: 'Human Normal Immunoglobulin for Intravenous Administration IP 5% (5g/100ml) sterile polyvalent IVIG biological solution.',
    category: 'Plasma & Blood Derivatives',
    dosageForm: 'Injectables & Infusions',
    strength: '5g / 100ml (5%)',
    packaging: '1 Bottle',
    mrp: '16200.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-07',
    code: 'MAN-ERTA-1G',
    name: 'ERTASAVE INJ 1GM',
    description: 'Ertapenem for Injection 1000mg (Lyophilized) once-daily carbapenem for complicated intra-abdominal and skin infections.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg',
    packaging: '1 Vial',
    mrp: '2800.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-08',
    code: 'MAN-ZORA-5MG',
    name: 'ZORAFIBAN INJ 5MG',
    description: 'Tirofiban Hydrochloride Injection 5mg/100ml non-peptide glycoprotein IIb/IIIa inhibitor for acute coronary syndrome.',
    category: 'Cardiovascular & Renal',
    dosageForm: 'Injectables & Infusions',
    strength: '5mg / 100ml',
    packaging: '1 Bottle',
    mrp: '1450.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'man-09',
    code: 'MAN-T98-IV',
    name: 'T-98 IV 100ML',
    description: 'Paracetamol Infusion IP 1000mg/100ml ready-to-use parenteral antipyretic and analgesic for rapid postoperative pain management.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg / 100ml',
    packaging: '1 Bottle (100ml)',
    mrp: '285.00',
    mfg: 'Mankind Pharma Limited',
    division: 'Mankind Pharma (Saviour)',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // BIOHELIX LIFE SCIENCE
  // ==========================================
  {
    id: 'bio-01',
    code: 'BIO-PZOF-40',
    name: 'PZOF 40 TAB',
    description: 'Pantoprazole 40mg Gastro-Resistant Tablets for GERD, gastric ulcers, and erosive esophagitis.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Tablets & Capsules',
    strength: '40mg',
    packaging: '10x10 Tablets',
    mrp: '140.00',
    hsnCode: '30049069',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'bio-02',
    code: 'BIO-PZOF-D',
    name: 'PZOF D CAP',
    description: 'Pantoprazole 40mg and Domperidone 30mg Sustained Release Capsules for gastro-esophageal reflux and functional dyspepsia.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Tablets & Capsules',
    strength: '40mg / 30mg',
    packaging: '10x10 Capsules',
    mrp: '120.00',
    hsnCode: '30049099',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'bio-03',
    code: 'BIO-AMOX-625',
    name: 'AMOXY-CV 625 TAB',
    description: 'Amoxycillin 500mg & Potassium Clavulanate 125mg Tablets for acute bacterial sinusitis, otitis media, and community-acquired pneumonia.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Tablets & Capsules',
    strength: '625mg (500mg + 125mg)',
    packaging: '10x10 Tablets',
    mrp: '204.84',
    hsnCode: '30041010',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'bio-04',
    code: 'BIO-CACH-1.125',
    name: 'CACHMAX-TZ INJ 1.125GM',
    description: 'Ceftriaxone 1000mg + Tazobactam 125mg Injection 1.125gm broad-spectrum third-generation cephalosporin injectable.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1.125gm (1000mg + 125mg)',
    packaging: '1 Vial + WFI',
    mrp: '240.00',
    hsnCode: '30049099',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'bio-05',
    code: 'BIO-ONDEZ-8',
    name: 'ONDEZ-MD 8 TAB',
    description: 'Ondansetron 8mg Mouth Dissolving Tablets for rapid prevention of chemotherapy, radiotherapy, and postoperative nausea.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Tablets & Capsules',
    strength: '8mg',
    packaging: '10x10 Tablets',
    mrp: '101.00',
    hsnCode: '30049099',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'bio-06',
    code: 'BIO-MONO-LC',
    name: 'MONO LC TAB',
    description: 'Levocetirizine Dihydrochloride 5mg + Montelukast Sodium 10mg Tablets for allergic rhinitis and chronic asthma prophylaxis.',
    category: 'Critical Care & Injectables',
    dosageForm: 'Tablets & Capsules',
    strength: '5mg / 10mg',
    packaging: '10x10 Tablets',
    mrp: '110.00',
    hsnCode: '30049099',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'bio-07',
    code: 'BIO-TRYM-FLAM',
    name: 'TRYMOFLAM TAB',
    description: 'Diclofenac Potassium 50mg, Trypsin-Chymotrypsin 50,000 Armour Units & Paracetamol 325mg Tablets for acute trauma and inflammation.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Tablets & Capsules',
    strength: '50mg / 50,000 A.U / 325mg',
    packaging: '10x10 Tablets',
    mrp: '125.50',
    hsnCode: '30049099',
    mfg: 'Biohelix Life Science',
    division: 'Biohelix Life Science',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // AVIRAL PHARMACEUTICALS
  // ==========================================
  {
    id: 'avi-01',
    code: 'AVI-SURC-XT',
    name: 'SURCAL-XT TAB',
    description: 'Calcium Carbonate 1250mg, Vitamin D3 2000IU, Methylcobalamin 1500mcg, L-Methylfolate 1mg & Pyridoxal-5-Phosphate 20mg Tablets.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '1250mg / 2000IU / 1500mcg / 1mg / 20mg',
    packaging: '10x10 Tablets',
    mrp: '210.00',
    mfg: 'Aviral Pharmaceuticals',
    division: 'Aviral Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'avi-02',
    code: 'AVI-EURI-DOL',
    name: 'EURIDOL TAB',
    description: 'Paracetamol & Tramadol Hydrochloride Tablets for moderate to severe acute pain and surgical recovery.',
    category: 'Analgesics & Anti-Inflammatory',
    dosageForm: 'Tablets & Capsules',
    strength: '325mg / 37.5mg',
    packaging: '10x10 Tablets',
    mrp: '165.00',
    mfg: 'Aviral Pharmaceuticals',
    division: 'Aviral Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'avi-03',
    code: 'AVI-SUCA-Q',
    name: 'SUCAR-Q TAB',
    description: 'Co-Enzyme Q10 100mg, L-Carnitine L-Tartrate 500mg, L-Glutathione 10mg, EPA 90mg, DHA 60mg, Lycopene 8000mcg & Zinc 12.5mg.',
    category: 'Cardiovascular & Renal',
    dosageForm: 'Tablets & Capsules',
    strength: '100mg / 500mg / 10mg / 90mg / 60mg / 8000mcg',
    packaging: '10x10 Tablets',
    mrp: '480.00',
    mfg: 'Aviral Pharmaceuticals',
    division: 'Aviral Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'avi-04',
    code: 'AVI-TYMO-JOINTS',
    name: 'TYMORFORT-JOINTS TAB',
    description: 'Calcium 125mg, L-Proline, Glycine, Boswellia Serrata 100mg, Vitamin C 60mg, Collagen Type II 40mg, Magnesium, Zinc, Vitamin D3 600IU & Trace Minerals.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: 'Complete Orthopedic Cartilage Matrix',
    packaging: '10x10 Tablets',
    mrp: '395.00',
    mfg: 'Aviral Pharmaceuticals',
    division: 'Aviral Pharmaceuticals',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // MSCIANS NUTRITION LLP
  // ==========================================
  {
    id: 'msc-01',
    code: 'MSC-PROB-25',
    name: 'PROB-25 CAP',
    description: 'Pre & Probiotic Capsules with high CFU viability for restore of intestinal microflora and post-antibiotic recovery.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Tablets & Capsules',
    strength: 'Multi-Strain Pre & Probiotics 25 Billion CFU',
    packaging: '10x10 Capsules',
    mrp: '2000.00',
    mfg: 'Mscians Nutrition LLP',
    division: 'Mscians Nutrition',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'msc-02',
    code: 'MSC-T-JOINT',
    name: 'T-JOINT TAB',
    description: 'Collagen Peptide Type II 50mg, Boswellia Serrata 250mg, Hyaluronic Acid 50mg & Chondroitin Sulfate joint cartilage restorative.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '50mg + 250mg + 50mg + Chondroitin',
    packaging: '10x10 Tablets',
    mrp: '3500.00',
    mfg: 'Mscians Nutrition LLP',
    division: 'Mscians Nutrition',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'msc-03',
    code: 'MSC-DMSC-60K',
    name: 'D-MSC SOFTGEL CAPSULES',
    description: 'Cholecalciferol 60,000 IU Softgel Capsules for intensive correction of hypovitaminosis D and bone mineralization.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '60,000 IU',
    packaging: '10x1x4 Softgels',
    mrp: '960.00',
    mfg: 'Mscians Nutrition LLP',
    division: 'Mscians Nutrition',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'msc-04',
    code: 'MSC-250-TAB',
    name: 'MSC-250 TAB',
    description: 'Calcium Lysinate, Vitamin D3 & Magnesium Bisglycinate Tablets for high-absorption bone density enhancement.',
    category: 'Nutrition & Joint Care',
    dosageForm: 'Tablets & Capsules',
    strength: '800mg + 2000IU + 2mg',
    packaging: '10x10 Tablets',
    mrp: '2000.00',
    mfg: 'Mscians Nutrition LLP',
    division: 'Mscians Nutrition',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'msc-05',
    code: 'MSC-KENO-OIL',
    name: 'KENOGESIC OIL 50ML',
    description: 'Herbal pain-relieving liniment containing Gandhpura Oil, Kapur Oil, Tarpin Oil, Arand Oil, Nirgundi Oil, Nilgiri Oil, Pudina Oil & Shallaki.',
    category: 'Topical & Ointments',
    dosageForm: 'Topical & Ointments',
    strength: 'Multi-Herb Active Extract Liniment',
    packaging: '50ml Bottle',
    mrp: '180.00',
    mfg: 'Mscians Nutrition LLP',
    division: 'Mscians Nutrition',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
  },

  // ==========================================
  // R S PHARMA
  // ==========================================
  {
    id: 'rs-01',
    code: 'RS-PANT-40',
    name: 'PANTARS INJ 40MG',
    description: 'Pantoprazole for Injection I.P 40mg sterile hospital injectable for rapid parenteral acid suppression.',
    category: 'Gastroenterology & PPIs',
    dosageForm: 'Injectables & Infusions',
    strength: '40mg',
    packaging: '1 Vial',
    mrp: '54.24',
    mfg: 'R S Pharma',
    division: 'R S Pharma',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'rs-02',
    code: 'RS-SIAX-1G',
    name: 'SIAXONE INJ 1GM',
    description: 'Ceftriaxone Injection I.P 1000mg third-generation cephalosporin for bacteremia, meningitis, and surgical prophylaxis.',
    category: 'Antibiotics & Anti-Infectives',
    dosageForm: 'Injectables & Infusions',
    strength: '1000mg',
    packaging: '1 Vial',
    mrp: '67.07',
    mfg: 'R S Pharma',
    division: 'R S Pharma',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'rs-03',
    code: 'RS-HYDR-100',
    name: 'HYDRORS INJ 100MG',
    description: 'Hydrocortisone Sodium Succinate Injection I.P 100mg emergency glucocorticoid for anaphylactic shock, acute adrenal crisis, and severe asthma.',
    category: 'Anesthesia & Emergency',
    dosageForm: 'Injectables & Infusions',
    strength: '100mg',
    packaging: '1 Vial',
    mrp: '48.16',
    mfg: 'R S Pharma',
    division: 'R S Pharma',
    gstPct: '5%',
    countryOfOrigin: 'India',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80',
  },
];

/**
 * Enriches product with structured clinical indications, therapeutic classes,
 * administration routes, storage specifications, and regulatory details.
 */
export function enrichProduct(product: ProductItem): ProductItem {
  const name = product.name.toUpperCase();
  const desc = product.description.toLowerCase();
  const cat = product.category.toLowerCase();
  const form = product.dosageForm || 'Injectables & Infusions';

  let indications: string[] = [];
  let therapeuticClass: string[] = [];
  let routeOfAdministration = 'Intravenous Infusion (IV)';
  let storageConditions = 'Store below 25°C in a dry place. Protect from moisture and direct light.';
  let regulatorySchedule = 'Schedule H Prescription Drug · CDSCO Registered';
  let clinicalHighlights: string[] = [];
  let targetDepartments: string[] = ['Hospital Pharmacy', 'General Medicine', 'Emergency Ward'];
  let pharmacology: ProductItem['pharmacology'] = undefined;
  let dosingGuidelines: ProductItem['dosingGuidelines'] = undefined;
  let renalHepaticAdjustment: string | undefined = undefined;
  let monitoringParameters: string[] | undefined = undefined;
  let contraindications: string[] | undefined = undefined;

  // 1. Antivirals (Acyclovir)
  if (name.includes('ACYCLOVIR') || name.includes('SENOVIR')) {
    indications = [
      'Severe Herpes Simplex Virus (HSV) encephalitis and mucosal infections in immunocompromised patients',
      'Initial and recurrent Varicella-Zoster Virus (VZV) infections / severe disseminated shingles',
      'Neonatal Herpes Simplex Virus systemic infection management and central nervous system involvement',
      'Prophylaxis of cytomegalovirus and herpesvirus in solid organ and bone marrow transplant recipients',
      'Severe primary genital herpes simplex episodes requiring inpatient intravenous management',
    ];
    therapeuticClass = ['Antiviral Agent', 'Synthetic Purine Nucleoside Analogue', 'DNA Polymerase Inhibitor'];
    routeOfAdministration = 'Slow Intravenous Infusion over minimum 1 hour via volumetric pump';
    storageConditions = 'Store below 25°C. Do not refrigerate reconstituted solution to prevent crystal formation.';
    regulatorySchedule = 'Schedule H Prescription Drug · CDSCO Regulated';
    clinicalHighlights = [
      'Maintain vigorous intravenous hydration and high urinary output during infusion to avoid acute renal tubular precipitation',
      'Dose must be precisely calculated based on ideal body weight (IBW) in obese patients',
      'Supplied with verified analytical test release records confirming chromatographic purity and sterility',
    ];
    targetDepartments = ['Infectious Diseases', 'Medical ICU', 'Pediatric Intensive Care', 'Neurology', 'Transplant Unit'];
    pharmacology = {
      mechanismOfAction:
        'Selectively converted to acyclovir monophosphate by viral-specific thymidine kinase (TK). Host cellular enzymes convert the monophosphate to acyclovir triphosphate, which acts as a competitive substrate for viral DNA polymerase and incorporates into the growing viral DNA chain, leading to obligate chain termination.',
      pharmacodynamics:
        'Concentration-dependent inhibition of viral replication with high selectivity index (>3000-fold higher affinity for viral vs human DNA polymerase).',
      pharmacokinetics: {
        halfLife: '2.5 to 3.3 hours (prolonged to 19.5 hours in end-stage renal disease)',
        proteinBinding: '9% to 33% (low plasma protein binding)',
        metabolism: 'Minor hepatic conversion to 9-carboxymethoxymethylguanine (CMMG)',
        elimination: 'Renal clearance accounts for 60%–91% of total excretion primarily via glomerular filtration and tubular secretion',
      },
      targetSpectrumOrReceptors: ['Herpes Simplex Virus 1 (HSV-1)', 'Herpes Simplex Virus 2 (HSV-2)', 'Varicella-Zoster Virus (VZV)', 'Epstein-Barr Virus (EBV)'],
    };
    dosingGuidelines = [
      {
        title: 'HSV Encephalitis Protocol',
        detail: '10 mg/kg IV every 8 hours for 14 to 21 days. Infuse over at least 60 minutes.',
        badge: 'ICU Critical Care Standard',
      },
      {
        title: 'Mucocutaneous HSV in Immunocompromised',
        detail: '5 mg/kg IV every 8 hours for 7 to 14 days until mucosal re-epithelialization occurs.',
        badge: 'Transplant / Oncology',
      },
      {
        title: 'Severe Disseminated Varicella Zoster',
        detail: '10 mg/kg IV every 8 hours for 7 to 10 days, accompanied by intravenous hydration.',
        badge: 'Inpatient Regimen',
      },
    ];
    renalHepaticAdjustment = 'CrCl 25–50 mL/min: 100% standard dose every 12 hours. CrCl 10–25 mL/min: 100% standard dose every 24 hours. CrCl <10 mL/min: 50% standard dose every 24 hours. Hemodialysis: Administer supplemental dose following dialysis session.';
    monitoringParameters = ['Baseline and daily serum creatinine / BUN', 'Strict hourly urine output monitoring (target >1 mL/kg/h)', 'Neurological mental status evaluation (screen for CMMG encephalopathy in renal patients)', 'Infusion site inspection for extravasation phlebitis'];
    contraindications = ['Known hypersensitivity to acyclovir or valacyclovir', 'Severe dehydration without concurrent volume replacement', 'Rapid intravenous bolus injection (contraindicated due to acute tubular necrosis risk)'];
  }
  // 2. Human Albumin
  else if (name.includes('ALBUMIN') || name.includes('SENUMIN') || name.includes('ALBUKIND')) {
    indications = [
      'Emergency hypovolemic shock resuscitation and acute intravascular volume depletion refractory to crystalloids',
      'Severe hypoalbuminemia associated with decompensated liver cirrhosis, refractory ascites, and nephrotic syndrome',
      'Intravascular volume replacement following large-volume therapeutic paracentesis (>5 Liters fluid removal)',
      'Adjunct in acute adult respiratory distress syndrome (ARDS) and severe third-degree burn shock resuscitation',
      'Prevention of circulatory dysfunction and acute kidney injury in Cirrhotic Spontaneous Bacterial Peritonitis (SBP)',
      'Priming fluid for cardiopulmonary bypass circuits and therapeutic plasmapheresis volume exchange',
    ];
    therapeuticClass = ['Human Plasma Colloid Fraction', 'Hyperoncotic Volume Expander', 'Sterile Biologic Infusion'];
    routeOfAdministration = 'Intravenous Infusion (IV) through dedicated non-vented infusion set';
    storageConditions = 'Store between 2°C and 8°C (Cold-Chain). Do not freeze. Protect from light in original carton.';
    regulatorySchedule = 'Schedule H Biologic · Cold-Chain Monitored · Batch Released';
    clinicalHighlights = [
      'A 20% solution is approximately 4 times hyperoncotic relative to normal human plasma, expanding vascular volume by ~3–4 times infused volume within 15 minutes',
      'Pasteurized at 60°C for 10 hours for verified viral inactivation with zero blood group antibody presence',
      'Continuous multi-probe telemetry maintained during depot storage and express transit',
    ];
    targetDepartments = ['Intensive Care Unit (ICU)', 'Surgical Trauma', 'Hepatology', 'Cardiothoracic Surgery', 'Burn Unit'];
    pharmacology = {
      mechanismOfAction:
        'Provides 70% to 80% of normal total human plasma colloid oncotic pressure. Rapidly draws interstitial edema fluid across vascular endothelial barriers into the intravascular space, stabilizing capillary hydrostatic pressure and delivering endogenous ligands, bilirubin, and trace ions.',
      pharmacodynamics:
        'Immediate restoration of circulating intravascular volume, elevation of mean arterial pressure (MAP), and reduction in secondary capillary leak.',
      pharmacokinetics: {
        halfLife: 'Intravascular redistribution half-life 16 to 24 hours; overall biological elimination half-life 19 to 21 days',
        proteinBinding: 'Acts as primary plasma carrier protein for hormones, fatty acids, bilirubin, and medications',
        metabolism: 'Catabolized intracellularly by ubiquitous lysosomal proteolytic enzymes into amino acid building blocks',
        elimination: 'Negligible renal clearance under normal glomerular barrier function (<0.1%)',
      },
      targetSpectrumOrReceptors: ['Intravascular Colloid Oncotic Gradient', 'Endothelial Glycocalyx Layer', 'Plasma Albumin Receptors'],
    };
    dosingGuidelines = [
      {
        title: 'Hypovolemic Shock Resuscitation',
        detail: '100 to 125 mL of 20% solution (20–25g albumin) infused rapidly over 15 to 30 minutes, titrated to MAP >65 mmHg.',
        badge: 'Emergency / Trauma',
      },
      {
        title: 'Large-Volume Paracentesis Protocol',
        detail: '8g of albumin (40 mL of 20% solution) per liter of ascitic fluid removed for taps exceeding 5 Liters.',
        badge: 'AASLD / EASL Guideline',
      },
      {
        title: 'Spontaneous Bacterial Peritonitis (SBP)',
        detail: '1.5 g/kg IV within 6 hours of diagnosis, followed by 1.0 g/kg on Day 3 to prevent hepatorenal syndrome.',
        badge: 'Cirrhosis Critical Care',
      },
    ];
    renalHepaticAdjustment = 'No primary renal dose reduction required. In severe oliguric renal failure, monitor closely for hypervolemic pulmonary edema. Highly indicated in hepatic failure for oncotic and detoxification support.';
    monitoringParameters = ['Central venous pressure (CVP) and invasive mean arterial pressure', 'Hourly pulmonary auscultation for bibasilar crackles / acute fluid overload', 'Hematocrit / hemoglobin (to avoid excessive hemodilution)', 'Serum electrolytes, especially sodium and potassium'];
    contraindications = ['Severe uncompensated congestive heart failure with pulmonary edema', 'Severe chronic normovolemic anemia without concurrent red cell replacement', 'Known hypersensitivity to human albumin preparations'];
  }
  // 3. Human Normal Immunoglobulin (IVIG)
  else if (name.includes('IMMUNOGLOBULIN') || name.includes('IMMUNOSEN') || name.includes('GAMACON') || name.includes('GLOBUGOLD')) {
    indications = [
      'Primary Immunodeficiency Diseases (PID) with antibody synthesis failure (X-linked agammaglobulinemia, CVID)',
      'Immune Thrombocytopenic Purpura (ITP) in adults and children with acute bleeding or high risk of hemorrhage',
      'Guillain-Barré Syndrome (acute inflammatory demyelinating polyradiculoneuropathy)',
      'Kawasaki Disease in pediatric patients to prevent coronary artery aneurysm development',
      'Chronic Inflammatory Demyelinating Polyradiculoneuropathy (CIDP) and Multifocal Motor Neuropathy (MMN)',
      'Myasthenia Gravis acute exacerbation / crisis prior to thymectomy or during ventilatory failure',
    ];
    therapeuticClass = ['Human Normal Immunoglobulin (IVIG)', 'Polyvalent Intravenous Immunotherapy', 'Biologic Plasma Derivative'];
    routeOfAdministration = 'Slow Intravenous Infusion with graduated titration rate';
    storageConditions = 'Store between 2°C and 8°C (Cold-Chain). Protect from light. Do not freeze.';
    regulatorySchedule = 'Schedule H Biologic · Strict Batch Release Dossier · Cold-Chain Monitored';
    clinicalHighlights = [
      'Prepared from pooled human plasma collected from thousands of healthy donors, screened negative for HIV-1/2, HBV, and HCV',
      'Multi-modal immunomodulation: competitive Fc receptor blockade, complement scavenging, and anti-inflammatory cytokine induction',
      'Excursion-insured cold-chain delivery with calibrated temperature loggers enclosed in thermal packaging',
    ];
    targetDepartments = ['Hematology', 'Neurology', 'Pediatric ICU', 'Rheumatology', 'Immunology Clinic'];
    pharmacology = {
      mechanismOfAction:
        'Saturates and competitively blocks Fc receptors on splenic and hepatic reticuloendothelial macrophages, preventing immune clearance of autoantibody-opsonized platelets and erythrocytes. Neutralizes autoantibodies via anti-idiotypic networks, accelerates pathogenic IgG catabolism via neonatal Fc receptor (FcRn) saturation, and inhibits complement activation cascades.',
      pharmacodynamics:
        'Provides broad-spectrum passive humoral immunity against bacterial and viral antigens. Produces rapid therapeutic elevation of circulating platelet counts within 24–48 hours in ITP.',
      pharmacokinetics: {
        halfLife: 'Terminal elimination half-life approximately 21 to 28 days in immunocompetent individuals',
        proteinBinding: 'Physiologic human polyclonal IgG antibodies',
        metabolism: 'Reticuloendothelial catabolism and cellular lysosomal degradation',
        elimination: 'Shedding and degradation across reticuloendothelial system; minimal urinary elimination',
      },
      targetSpectrumOrReceptors: ['Fcγ Receptors (FcγR I, II, III)', 'Neonatal Fc Receptor (FcRn)', 'Complement Component C3b/C4b', 'Inflammatory Cytokine Networks'],
    };
    dosingGuidelines = [
      {
        title: 'Replacement in Primary Immunodeficiency',
        detail: '400 to 800 mg/kg IV every 3 to 4 weeks to maintain serum trough IgG levels above 5.0 to 6.0 g/L.',
        badge: 'Chronic Replacement Protocol',
      },
      {
        title: 'Immune Thrombocytopenic Purpura (ITP)',
        detail: '0.8 to 1.0 g/kg IV on Day 1 (optional repeat on Day 3) OR 400 mg/kg/day for 2 to 5 consecutive days.',
        badge: 'Acute Hematology Regimen',
      },
      {
        title: 'Kawasaki Disease Protocol',
        detail: '2.0 g/kg as a single intravenous infusion over 10 to 12 hours initiated within 10 days of fever onset, with high-dose oral aspirin.',
        badge: 'American Heart Association Guideline',
      },
      {
        title: 'Guillain-Barré Syndrome',
        detail: '0.4 g/kg/day IV for 5 consecutive days (cumulative total dose 2.0 g/kg).',
        badge: 'Neurology Critical Care',
      },
    ];
    renalHepaticAdjustment = 'Use with extreme caution and reduce infusion rate to <0.2 mL/kg/min in pre-existing renal impairment, diabetes, or elderly patients to prevent osmotic nephrosis / acute kidney injury.';
    monitoringParameters = ['Strict infusion rate ramp: start at 0.5 mL/kg/h, titrate every 30 min to max 4–8 mL/kg/h', 'Pre-infusion serum IgA levels (screen for anti-IgA antibodies)', 'Baseline and post-infusion serum creatinine, BUN, and urine output', 'Vital signs (BP, heart rate, temp) every 15 min during initiation to detect infusion-related aseptic reactions'];
    contraindications = ['Selective IgA deficiency with documented anti-IgA antibodies (high risk of severe anaphylaxis)', 'Severe systemic hyperprolinemia', 'Severe acute uncompensated congestive heart failure'];
  }
  // 4. Carbapenems (Meropenem / Ertapenem)
  else if (name.includes('MEROPENEM') || name.includes('SENOPENUM') || name.includes('MEPECON') || name.includes('MEROHUGE') || name.includes('ERTASAVE')) {
    indications = [
      'Hospital-acquired and ventilator-associated pneumonia (HAP / VAP) caused by multi-drug resistant Pseudomonas and Enterobacteriaceae',
      'Complicated intra-abdominal infections (cIAI) including secondary peritonitis, appendiceal rupture, and intra-abdominal abscesses',
      'Complicated urinary tract infections (cUTI) and acute urosepsis with bacteremia',
      'Acute bacterial meningitis in adults and pediatric patients over 3 months of age',
      'Empirical monotherapy for persistent febrile neutropenia in high-risk oncology and bone marrow transplant patients',
      'Complicated skin and soft-tissue infections (cSSTI) involving polymicrobial aerobic and anaerobic pathogens',
    ];
    therapeuticClass = ['Carbapenem Antibacterial', 'Ultra Broad-Spectrum Beta-Lactam', 'Bacterial Cell Wall Synthesis Inhibitor'];
    routeOfAdministration = 'Intravenous Bolus over 3-5 min or Extended 3-Hour Infusion';
    storageConditions = 'Store below 25°C. Keep vial in outer carton to protect from light. Reconstituted solution stable 24h at 2°C–8°C.';
    regulatorySchedule = 'Schedule H1 Antibiotic · Hospital Formulary Reserve Line';
    clinicalHighlights = [
      'High resistance to degradation by most plasmid- and chromosomal-mediated beta-lactamases and extended-spectrum beta-lactamases (ESBLs)',
      'Optimized pharmacodynamics: Extended 3-hour infusion significantly elevates percentage of dosing interval that unbound drug concentration exceeds MIC (%fT > MIC)',
      'Significantly lower epileptogenic neurotoxicity profile compared to imipenem/cilastatin, making it preferred in CNS infections',
    ];
    targetDepartments = ['Intensive Care Unit (ICU)', 'Pulmonology', 'General Surgery', 'Infectious Diseases', 'Onco-Hematology'];
    pharmacology = {
      mechanismOfAction:
        'Penetrates bacterial cell wall outer membrane through OmpD / OmpF porins and binds covalently with high affinity to essential penicillin-binding proteins (primarily PBP-2 and PBP-3 in Gram-negative bacteria, and PBP-1a/1b in Gram-positives). This irreversibly blocks the transpeptidase cross-linking of peptidoglycan chains, inducing autolytic enzymes and rapid osmotic cell lysis.',
      pharmacodynamics:
        'Time-dependent bactericidal activity. Clinical efficacy correlates with %fT > MIC (target >40%–50% for standard strains, >80% for critical care ICU pathogens).',
      pharmacokinetics: {
        halfLife: 'Approximately 1.0 hour in normal renal function (extended up to 7 hours in end-stage renal disease)',
        proteinBinding: 'Approximately 2% (minimal plasma protein binding)',
        metabolism: 'Minor hydrolysis of beta-lactam ring to microbiologically inactive open-ring metabolite (ICI-213,689)',
        elimination: 'Approximately 70% excreted unchanged in urine via glomerular filtration and tubular secretion over 12 hours',
      },
      targetSpectrumOrReceptors: ['Penicillin-Binding Proteins PBP-2 / PBP-3', 'Enterobacteriaceae (E. coli, Klebsiella pneumoniae, Enterobacter cloacae)', 'Pseudomonas aeruginosa', 'Acinetobacter baumannii (non-carbapenemase)', 'Streptococcus pneumoniae', 'Bacteroides fragilis'],
    };
    dosingGuidelines = [
      {
        title: 'Severe Hospital-Acquired Pneumonia / HAP / VAP',
        detail: '1g to 2g IV every 8 hours administered as an extended 3-hour infusion to optimize pharmacokinetic targets.',
        badge: 'IDSA / ATS Guideline',
      },
      {
        title: 'Complicated Intra-Abdominal Infections (cIAI)',
        detail: '1g IV every 8 hours as an infusion over 30 minutes to 3 hours for 4 to 7 days post-source control.',
        badge: 'SIS / IDSA Regimen',
      },
      {
        title: 'Bacterial Meningitis Protocol',
        detail: '2g IV every 8 hours as a 30-minute infusion; achieves therapeutic CSF penetration across inflamed meninges.',
        badge: 'CNS High-Dose Regimen',
      },
      {
        title: 'Febrile Neutropenia Monotherapy',
        detail: '1g IV every 8 hours initiated immediately upon fever onset (>38.3°C) with ANC <500 cells/mcL.',
        badge: 'Empiric Oncology Protocol',
      },
    ];
    renalHepaticAdjustment = 'CrCl 26–50 mL/min: 1g IV every 12 hours. CrCl 10–25 mL/min: 500mg IV every 12 hours. CrCl <10 mL/min: 500mg IV every 24 hours. Hemodialysis: Administer standard scheduled dose after completion of dialysis.';
    monitoringParameters = ['Serum creatinine, eGFR, and BUN prior to and during therapy', 'Complete blood count (CBC) with differential for eosinophilia or neutropenia', 'Hepatic transaminases (ALT, AST) and alkaline phosphatase', 'Continuous clinical observation for central nervous system toxicity or seizure activity in renal failure'];
    contraindications = ['Severe anaphylactic hypersensitivity to meropenem or other carbapenem agents', 'Concurrent administration with valproic acid / divalproex sodium (meropenem causes profound drop in serum valproate levels within 24h, triggering breakthrough seizures)'];
  }
  // 5. Polymyxins (Colistimethate Sodium / Polymyxin B)
  else if (name.includes('COLISTIMETHATE') || name.includes('SENCOLIS') || name.includes('CRICOLIST') || name.includes('COLIGYL') || name.includes('POLYMYXIN') || name.includes('SENPOLY') || name.includes('POLIZKTA') || name.includes('POBIX')) {
    indications = [
      'Severe bloodstream infections, sepsis, and septic shock caused by multi-drug resistant (MDR) Gram-negative bacilli',
      'Hospital-acquired and ventilator-associated pneumonia due to Carbapenem-Resistant Enterobacteriaceae (CRE) and Acinetobacter baumannii',
      'Complicated intra-abdominal infections caused by Extensively Drug-Resistant (XDR) Pseudomonas aeruginosa',
      'Complicated hospital-acquired urinary tract infections with bacteremia refractory to beta-lactamase combinations',
      'Targeted rescue therapy in critically ill ICU patients with documented metallo-beta-lactamase (NDM-1, VIM, IMP) producing pathogens',
    ];
    therapeuticClass = ['Polypeptide Antimicrobial', 'Last-Line Cationic Detergent', 'Reserve Gram-Negative Bactericidal Agent'];
    routeOfAdministration = 'Slow Intravenous Infusion over 60 minutes / Inhalation via vibrating mesh nebulizer';
    storageConditions = 'Store below 25°C in original container. Protect from moisture and direct light.';
    regulatorySchedule = 'Schedule H1 Reserve Antibiotic · Critical Care Restricted Line';
    clinicalHighlights = [
      'Critical loading dose required in all critically ill patients to rapidly achieve therapeutic plasma concentrations and prevent early mortality',
      'Colistimethate Sodium (CMS) is an inactive prodrug converted in vivo to active colistin; Polymyxin B is administered as the active moiety',
      'Dose individualization and therapeutic drug monitoring (TDM) strongly advised to balance bactericidal efficacy against acute kidney injury risk',
    ];
    targetDepartments = ['Medical ICU', 'Surgical ICU', 'Trauma Resuscitation Center', 'Nephrology', 'Infectious Diseases'];
    pharmacology = {
      mechanismOfAction:
        'Cationic diaminobutyric acid residues electrostatically bind to negatively charged phosphate groups on lipid A of the outer lipopolysaccharide (LPS) membrane of Gram-negative bacteria. Displaces stabilizing divalent calcium and magnesium cations ($Ca^{2+}, Mg^{2+}$), disrupting membrane integrity, inducing trans-envelope permeability, causing leakage of intracellular purines and pyrimidines, and triggering cell death.',
      pharmacodynamics:
        'Rapid concentration-dependent bactericidal activity. Pharmacodynamic target is ratio of free-drug area under the concentration-time curve to minimum inhibitory concentration ($f\text{AUC}_{24}/\text{MIC} \approx 50\text{--}60$).',
      pharmacokinetics: {
        halfLife: 'Colistin elimination half-life approximately 4 to 6 hours in healthy adults; extended up to 18 hours in renal impairment. Polymyxin B half-life 11 to 14 hours.',
        proteinBinding: 'Colistin ~50%; Polymyxin B ~56% to 70%',
        metabolism: 'CMS undergoes extensive in vivo non-enzymatic spontaneous hydrolysis to colistin. Polymyxin B undergoes non-renal clearance.',
        elimination: 'CMS is cleared predominantly by renal glomerular filtration; formed colistin is reabsorbed renal tubularly and cleared non-renally.',
      },
      targetSpectrumOrReceptors: ['Lipid A Domain of Bacterial LPS', 'Carbapenem-Resistant Klebsiella pneumoniae (CRKP)', 'Acinetobacter baumannii (XDR/PDR)', 'Pseudomonas aeruginosa (MDR)', 'Enterobacter cloacae complex'],
    };
    dosingGuidelines = [
      {
        title: 'Colistimethate Loading Dose',
        detail: '9 Million IU (approx. 300 mg colistin base equivalent) infused IV over 60 minutes in critically ill patients regardless of baseline renal function.',
        badge: 'International Consensus Guideline',
      },
      {
        title: 'Colistimethate Maintenance Dose',
        detail: '4.5 Million IU IV every 12 hours initiated 12 hours after loading dose in patients with CrCl >50 mL/min.',
        badge: 'ICU Maintenance Standard',
      },
      {
        title: 'Polymyxin B Protocol',
        detail: 'Loading dose: 2.0 to 2.5 mg/kg (20,000–25,000 IU/kg) over 1 hour. Maintenance: 1.25 to 1.5 mg/kg every 12 hours.',
        badge: 'Weight-Based Active Moiety',
      },
      {
        title: 'Adjunctive Nebulized Colistin',
        detail: '1 to 2 Million IU nebulized every 8 to 12 hours via dedicated mesh nebulizer for ventilator-associated pneumonia.',
        badge: 'Inhalation Adjunct',
      },
    ];
    renalHepaticAdjustment = 'Colistimethate requires rigorous renal dose reduction: CrCl 30–50 mL/min: 5.5–7.5 MIU/day in 2 divided doses; CrCl 10–30 mL/min: 4.5 MIU/day in 2 divided doses; CrCl <10 mL/min: 3.0 MIU/day; Hemodialysis: 2 MIU daily plus supplemental 1.5 MIU post-dialysis. Polymyxin B requires no routine renal dose reduction.';
    monitoringParameters = ['Daily serum creatinine, BUN, and calculated eGFR (stop or adjust if creatinine doubles)', 'Hourly urine output monitoring via Foley catheter (target >0.5 mL/kg/h)', 'Serum electrolytes: screen daily for hypokalemia, hypomagnesemia, and hyperchloremic metabolic acidosis', 'Neurological assessment for circumoral paresthesia, peripheral numbness, neuromuscular blockade, and respiratory depression'];
    contraindications = ['Known hypersensitivity to polymyxins', 'Concurrent co-administration with other neurotoxic / nephrotoxic agents (e.g. aminoglycosides, amphotericin B, neuromuscular blockers) unless life-saving', 'Myasthenia gravis (high risk of neuromuscular blockade and respiratory arrest)'];
  }
  // 6. Glycopeptides (Teicoplanin / Vancomycin)
  else if (name.includes('TEICOPLANIN') || name.includes('SENOPLANIN') || name.includes('TEICOEXTRA') || name.includes('VANCOMYCIN') || name.includes('SENOVAN') || name.includes('VANOGARD')) {
    indications = [
      'Complicated skin and soft-tissue infections (cSSTI) caused by Methicillin-Resistant Staphylococcus aureus (MRSA)',
      'Hospital-acquired and ventilator-associated pneumonia due to confirmed or suspected MRSA',
      'Infective endocarditis caused by staphylococci or enterococci resistant to penicillins and cephalosporins',
      'Severe osteomyelitis, prosthetic joint infections, and septic arthritis requiring prolonged bactericidal penetration',
      'Continuous Ambulatory Peritoneal Dialysis (CAPD)-associated peritonitis and hemodialysis catheter bloodstream infections',
    ];
    therapeuticClass = ['Glycopeptide Antibacterial', 'MRSA Targeted Lipoglycopeptide', 'Peptidoglycan Cell Wall Inhibitor'];
    routeOfAdministration = 'Slow Intravenous Infusion over 60 min or Deep Intramuscular Injection (Teicoplanin)';
    storageConditions = 'Store below 25°C in original package. Protect from light and excessive heat.';
    regulatorySchedule = 'Schedule H Prescription Formulation · Hospital Formulary Reserve';
    clinicalHighlights = [
      'High tissue penetration into bone, synovial fluid, lung epithelial lining fluid, and soft tissues',
      'Teicoplanin exhibits significantly lower incidence of nephrotoxicity and anaphylactoid reactions compared to vancomycin',
      'Rigorous loading dose regimen required during the first 48 hours to ensure target therapeutic trough levels are achieved promptly',
    ];
    targetDepartments = ['Orthopedics', 'Cardiology', 'Critical Care Medicine', 'Infectious Diseases', 'Nephrology'];
    pharmacology = {
      mechanismOfAction:
        'Binds with high affinity via five hydrogen bonds to the terminal D-alanyl-D-alanine carboxyl end of nascent peptidoglycan pentapeptide chains on the outer surface of the bacterial cytoplasmic membrane. Sterically prevents transglycosylase polymerization and transpeptidase cross-linking, compromising structural cell wall integrity and inducing autolysis.',
      pharmacodynamics:
        'Time-dependent and concentration-dependent bactericidal action. Established therapeutic pharmacokinetic/pharmacodynamic target is $\text{AUC}_{24}/\text{MIC} \ge 400\text{--}600$ (correlating with trough levels $\ge 15\text{--}20\text{ mcg/mL}$ for vancomycin, $\ge 15\text{--}30\text{ mg/L}$ for teicoplanin).',
      pharmacokinetics: {
        halfLife: 'Teicoplanin: prolonged terminal elimination half-life of 100 to 170 hours (permitting once-daily dosing). Vancomycin: 4 to 6 hours.',
        proteinBinding: 'Teicoplanin: 90% to 95% bound to human albumin; Vancomycin: 50% to 55%',
        metabolism: 'Minimal metabolic transformation (<3%)',
        elimination: 'Excreted almost exclusively in active unchanged form via renal glomerular filtration (>80% within 16 days for teicoplanin, >80% within 24h for vancomycin)',
      },
      targetSpectrumOrReceptors: ['D-Alanyl-D-Alanine Peptidoglycan Terminus', 'Methicillin-Resistant Staphylococcus aureus (MRSA)', 'Methicillin-Resistant Staphylococcus epidermidis (MRSE)', 'Enterococcus faecalis (vancomycin-susceptible)', 'Streptococcus pneumoniae (PRSP)', 'Clostridioides difficile'],
    };
    dosingGuidelines = [
      {
        title: 'Teicoplanin Loading Dose Protocol',
        detail: '6 mg/kg (up to 12 mg/kg in endocarditis, septic arthritis, and severe sepsis) IV every 12 hours for the first 3 to 4 doses.',
        badge: 'Mandatory Loading Phase',
      },
      {
        title: 'Teicoplanin Maintenance Dose',
        detail: '6 to 12 mg/kg IV or IM once daily, initiated on Day 3 or Day 4 based on indication and therapeutic drug monitoring.',
        badge: 'Once-Daily Maintenance',
      },
      {
        title: 'Vancomycin Dosing Protocol',
        detail: '15 to 20 mg/kg IV every 8 to 12 hours (max 2g per single dose). Infuse at rate no faster than 10 mg/min (minimum 60 min) to prevent Red Man Syndrome.',
        badge: 'AUC-Guided Infusion',
      },
    ];
    renalHepaticAdjustment = 'Teicoplanin requires dose maintenance until Day 4; starting Day 5, adjust based on CrCl: CrCl 30–80 mL/min: reduce dose by 50% or administer every 48 hours; CrCl <30 mL/min: reduce dose by 67% or administer every 72 hours. Vancomycin requires interval prolongation based on measured trough levels.';
    monitoringParameters = ['Therapeutic drug monitoring (TDM): target trough concentration >15–20 mg/L in uncomplicated bacteremia, >20–30 mg/L in infective endocarditis and osteomyelitis', 'Serum creatinine and eGFR at baseline and at least twice weekly during therapy', 'Full blood count with differential (monitor for leukopenia and thrombocytopenia on prolonged therapy)', 'Audiometric evaluation in prolonged therapy or concurrent ototoxic medication use'];
    contraindications = ['Known hypersensitivity to teicoplanin or vancomycin', 'Co-administration with aminoglycosides without intensive serum level monitoring'];
  }
  // 7. Systemic Antifungals (Amphotericin B / Caspofungin / Micafungin / Posaconazole / Voriconazole / Isavuconazole)
  else if (name.includes('AMPHOTERICIN') || name.includes('AMFOEVA') || name.includes('AMFOTEROL') || name.includes('CASPOFUNGIN') || name.includes('CASPOCON') || name.includes('MICAFUNGIN') || name.includes('MICACORD') || name.includes('POSACONAZOLE') || name.includes('VORICONAZOLE') || name.includes('ISAVUCONAZOLE')) {
    indications = [
      'Invasive Aspergillosis, Invasive Candidiasis, and Candidemia in neutropenic and intensive care patients',
      'Invasive Mucormycosis (Zygomycosis / Black Fungus) in diabetic ketoacidosis, COVID-19, and immunocompromised hosts',
      'Cryptococcal Meningitis in HIV/AIDS patients as induction therapy in combination with flucytosine',
      'Empirical antifungal therapy for persistent unexplained febrile neutropenia in high-risk oncology patients',
      'Primary antifungal prophylaxis in allogeneic hematopoietic stem cell and solid organ transplant recipients',
      'Refractory fungal osteomyelitis, endophthalmitis, and cardiovascular fungal infections',
    ];
    therapeuticClass = ['Systemic Antifungal Agent', 'Polyene Macrolide / Echinocandin / Extended-Spectrum Triazole', 'Fungal Cell Membrane & Wall Inhibitor'];
    routeOfAdministration = 'Intravenous Infusion via dedicated line with in-line 0.22/1.2 micron filter / Oral Gastro-Resistant';
    storageConditions = 'Store at 2°C–8°C (Cold-Chain) for parenteral liposomal and lyophilized vials. Protect from light. Do not freeze.';
    regulatorySchedule = 'Schedule H High-Potency Antifungal · Strict Batch Traceability';
    clinicalHighlights = [
      'Liposomal Amphotericin B utilizes spherical unilamellar liposomes of hydrogenated soy phosphatidylcholine and cholesterol, significantly reducing nephrotoxicity while maintaining high tissue concentration',
      'Echinocandins (Caspofungin, Micafungin) exhibit broad fungicidal activity against Candida species including fluconazole-resistant strains',
      'Extended-spectrum triazoles (Posaconazole, Isavuconazole) provide superior oral bioavailability for consolidation and step-down therapy',
    ];
    targetDepartments = ['Onco-Hematology', 'Intensive Care Unit (ICU)', 'Organ Transplant Unit', 'Pulmonology', 'Infectious Diseases'];
    pharmacology = {
      mechanismOfAction:
        'Polyenes (Amphotericin B) bind irreversibly to ergosterol in fungal cell membranes, forming cylindrical transmembrane pores that leak monovalent ions ($K^+, Na^+, Cl^-$), causing rapid osmotic collapse. Echinocandins non-competitively inhibit 1,3-beta-D-glucan synthase, halting fungal cell wall structural integrity. Triazoles inhibit fungal CYP51 (lanosterol 14-alpha-demethylase), depleting ergosterol.',
      pharmacodynamics:
        'Concentration-dependent fungicidal action against Candida and Aspergillus. High tissue accumulation in liver, spleen, and lungs.',
      pharmacokinetics: {
        halfLife: 'Liposomal Amphotericin B terminal elimination half-life approximately 152 hours; Caspofungin ~10 hours; Posaconazole ~35 hours',
        proteinBinding: '>95% plasma protein binding across systemic formulations',
        metabolism: 'Echinocandins undergo peptide hydrolysis; Triazoles undergo hepatic clearance via CYP enzymes',
        elimination: 'Biliary and fecal elimination predominate; negligible intact renal excretion (<5%)',
      },
      targetSpectrumOrReceptors: ['Fungal Membrane Ergosterol Complex', '1,3-Beta-D-Glucan Synthase Complex', 'Candida albicans & Candida auris', 'Aspergillus fumigatus & flavus', 'Mucorales (Rhizopus, Mucor, Lichtheimia)', 'Cryptococcus neoformans'],
    };
    dosingGuidelines = [
      {
        title: 'Liposomal Amphotericin B Protocol',
        detail: '3 to 5 mg/kg/day IV infused over 2 hours via dedicated line. In severe Rhino-Orbital-Cerebral Mucormycosis, escalate to 5 to 10 mg/kg/day.',
        badge: 'ECMM / CDC Guideline',
      },
      {
        title: 'Caspofungin Invasive Candidiasis',
        detail: 'Loading dose of 70 mg IV on Day 1 infused over 60 minutes, followed by 50 mg IV once daily (70 mg/day if body weight >80 kg).',
        badge: 'First-Line Echinocandin',
      },
      {
        title: 'Posaconazole Gastro-Resistant Prophylaxis',
        detail: '300 mg (three 100 mg tablets) twice daily on Day 1, followed by 300 mg once daily with food.',
        badge: 'Transplant Prophylaxis',
      },
      {
        title: 'Micafungin Candidemia Regimen',
        detail: '100 mg IV once daily infused over 60 minutes for at least 14 days following first negative blood culture.',
        badge: 'Daily Parenteral',
      },
    ];
    renalHepaticAdjustment = 'Amphotericin B and Echinocandins require no dose adjustment for pre-existing renal impairment (do not require hemodialysis supplementation). For Caspofungin in moderate hepatic impairment (Child-Pugh 7–9), reduce maintenance dose to 35 mg daily after 70 mg loading dose.';
    monitoringParameters = ['Serum potassium, magnesium, and creatinine daily with Amphotericin B (pre-hydrate with 500–1000 mL normal saline)', 'Hepatic transaminases (ALT, AST, total bilirubin) weekly during therapy', 'Therapeutic drug monitoring (TDM) for Voriconazole (target trough 1.5–4.5 mg/L) and Posaconazole (target trough >1.0 mg/L)', 'Complete blood count (CBC) with differential'];
    contraindications = ['Known hypersensitivity to respective active moiety or liposomal constituents', 'Co-administration of triazoles with narrow-index CYP3A4 substrates (quinidine, pimozide, ergot alkaloids)', 'Infusion of Amphotericin B with saline-containing diluents (must be reconstituted exclusively with Sterile Water and diluted in 5% Dextrose)'];
  }
  // 8. Glycylcyclines (Tigecycline)
  else if (name.includes('TIGECYCLINE') || name.includes('SENOCYCLINE') || name.includes('TIGICON') || name.includes('TIGECROSS')) {
    indications = [
      'Complicated intra-abdominal infections (cIAI) including secondary peritonitis, appendicitis, and intra-abdominal abscesses',
      'Complicated skin and skin structure infections (cSSSI) including necrotizing soft-tissue infections and diabetic foot infections',
      'Targeted rescue therapy in multi-drug resistant Acinetobacter baumannii systemic infections when alternative options are limited',
      'Carbapenem-resistant Enterobacteriaceae (CRE) infections as part of multi-agent synergistic hospital regimens',
    ];
    therapeuticClass = ['Glycylcycline Antibiotic', '30S Ribosomal Protein Synthesis Inhibitor', 'Broad-Spectrum Hospital Reserve'];
    routeOfAdministration = 'Intravenous Infusion over 30 to 60 minutes via dedicated infusion line';
    storageConditions = 'Store below 25°C. Keep vial in carton to protect from moisture and light.';
    regulatorySchedule = 'Schedule H1 Antibiotic · Hospital Formulary Reserve';
    clinicalHighlights = [
      'Structural 9-t-butylglycylamido substitution circumvents classical tetracycline efflux pumps and ribosomal protection resistance mechanisms',
      'Exceptionally high volume of distribution ($V_d \approx 7\text{--}10\text{ L/kg}$) provides superior intracellular and tissue penetration into bile, peritoneal fluid, and soft tissues',
      'Does not require dosage adjustment for renal impairment or hemodialysis',
    ];
    targetDepartments = ['Intensive Care Unit (ICU)', 'General Surgery', 'Plastic & Reconstructive Surgery', 'Infectious Diseases'];
    pharmacology = {
      mechanismOfAction:
        'Binds with 5-fold higher binding affinity than tetracycline to the bacterial 30S ribosomal subunit. Sterically hinders the entry of aminoacyl-tRNA molecules into the ribosomal A-site, arresting incorporation of amino acid residues into nascent peptide chains and shutting down bacterial protein synthesis.',
      pharmacodynamics:
        'Primarily bacteriostatic in nature; demonstrates bactericidal activity against Streptococcus pneumoniae and Legionella pneumophila. PK/PD predictor of clinical efficacy is free-drug area under the concentration-time curve to MIC ($\text{AUC}_{24}/\text{MIC}$).',
      pharmacokinetics: {
        halfLife: 'Terminal elimination half-life approximately 42.4 hours',
        proteinBinding: 'Approximately 71% to 89% bound to plasma proteins',
        metabolism: 'Minimal systemic metabolism (glucuronidation accounts for <10%)',
        elimination: 'Eliminated primarily through biliary/fecal excretion (59%) and renal excretion (33%)',
      },
      targetSpectrumOrReceptors: ['Bacterial 30S Ribosomal Subunit', 'Acinetobacter baumannii (MDR/XDR)', 'Klebsiella pneumoniae (ESBL & CRE)', 'Escherichia coli', 'Staphylococcus aureus (MRSA)', 'Enterococcus faecalis (VRE)', 'Bacteroides fragilis'],
    };
    dosingGuidelines = [
      {
        title: 'Standard Loading Dose Protocol',
        detail: '100 mg IV initial loading dose infused over 30 to 60 minutes in 100 mL 0.9% Sodium Chloride or 5% Dextrose.',
        badge: 'Mandatory Loading Phase',
      },
      {
        title: 'Maintenance Dosing Regimen',
        detail: '50 mg IV every 12 hours for 5 to 14 days based on infection site and surgical source control.',
        badge: 'Standard Inpatient Regimen',
      },
      {
        title: 'High-Dose ICU Regimen in XDR Infections',
        detail: '200 mg initial loading dose, followed by 100 mg IV every 12 hours (under expert infectious disease guidance for deep tissue/pulmonary infections).',
        badge: 'High-Dose Off-Label Protocol',
      },
    ];
    renalHepaticAdjustment = 'No dosage adjustment required for renal impairment or patients undergoing hemodialysis. In severe hepatic impairment (Child-Pugh Class C), reduce maintenance dose to 25 mg IV every 12 hours following the standard 100 mg loading dose.';
    monitoringParameters = ['Liver function tests (ALT, AST, total bilirubin) twice weekly', 'Serum amylase and lipase (monitor for drug-induced acute pancreatitis; discontinue immediately if diagnosed)', 'Coagulation panel including PT/INR and serum fibrinogen (monitor for hypofibrinogenemia during therapy >7 days)', 'Daily assessment for treatment-related nausea and vomiting (manage with 5-HT3 antagonists)'];
    contraindications = ['Known hypersensitivity to tigecycline or tetracycline-class antibiotics', 'Monotherapy in primary bacteremia or ventilator-associated pneumonia (boxed warning: associated with higher mortality compared to active comparators in VAP trials)'];
  }
  // 9. Anticoagulants (Enoxaparin / Heparin)
  else if (name.includes('ENOXAPARIN') || name.includes('SENOXAPARIN') || name.includes('ANXACORD') || name.includes('ENOXAWAYS') || name.includes('HEPARIN') || name.includes('SENOHEP')) {
    indications = [
      'Prophylaxis of deep vein thrombosis (DVT) and pulmonary embolism (PE) in patients undergoing orthopedic or abdominal surgery',
      'Prophylaxis of venous thromboembolism in acute medically ill patients bedridden with acute cardiac failure or severe respiratory disease',
      'Treatment of acute deep vein thrombosis and pulmonary embolism in conjunction with oral anticoagulation initiation',
      'Management of acute ST-segment elevation myocardial infarction (STEMI) and non-ST-segment elevation acute coronary syndromes (NSTEMI / Unstable Angina)',
      'Prevention of thrombus formation in extracorporeal circulation circuits during continuous hemodialysis',
    ];
    therapeuticClass = ['Low-Molecular-Weight Heparin (LMWH)', 'Antithrombotic Agent', 'Factor Xa Inhibitor'];
    routeOfAdministration = 'Subcutaneous (SC) Injection / IV Bolus in acute STEMI';
    storageConditions = 'Store below 25°C. Do not freeze. Keep pre-filled syringes in blister packaging protected from light.';
    regulatorySchedule = 'Schedule H Prescription Formulation · Pre-Filled Syringes (PFS)';
    clinicalHighlights = [
      'Supplied in graduated ready-to-administer Pre-Filled Syringes with automatic safety needle shield to prevent needle-stick injury',
      'Superior anti-Factor Xa to anti-Factor IIa ratio (3.8:1) provides consistent antithrombotic efficacy with significantly lower incidence of Heparin-Induced Thrombocytopenia (HIT)',
      'High subcutaneous bioavailability (~100%) eliminates the need for routine laboratory coagulation monitoring in standard-weight patients',
    ];
    targetDepartments = ['Cardiology', 'Orthopedics', 'General Surgery', 'Critical Care Medicine', 'Emergency Trauma'];
    pharmacology = {
      mechanismOfAction:
        'Binds to and induces a conformational change in antithrombin III (ATIII). The enoxaparin-ATIII complex accelerates the physiological inactivation of activated Factor Xa by over 1,000-fold, preventing prothrombinase complex assembly and thrombin generation while having minimal direct effect on thrombin (Factor IIa).',
      pharmacodynamics:
        'Maximum anti-Xa activity is achieved within 3 to 5 hours following subcutaneous injection. Antithrombotic activity persists for approximately 24 hours.',
      pharmacokinetics: {
        halfLife: 'Elimination half-life approximately 4.5 to 7 hours based on anti-Factor Xa activity',
        proteinBinding: 'Does not bind significantly to vascular endothelial cells, plasma proteins, or macrophages',
        metabolism: 'Hepatic desulfation and depolymerization into lower molecular weight fragments',
        elimination: 'Renal excretion accounts for ~40% of administered dose (anti-Xa clearance is closely correlated with creatinine clearance)',
      },
      targetSpectrumOrReceptors: ['Antithrombin III (ATIII)', 'Coagulation Factor Xa', 'Coagulation Factor IIa (Thrombin)', 'Extracorporeal Dialysis Circuits'],
    };
    dosingGuidelines = [
      {
        title: 'Surgical DVT Prophylaxis',
        detail: '40 mg (4,000 IU) SC once daily initiated 12 hours prior to elective surgery or 12 hours post-operatively for 10 to 14 days.',
        badge: 'Orthopedic / Surgical Protocol',
      },
      {
        title: 'Acute DVT / PE Treatment',
        detail: '1.0 mg/kg (100 IU/kg) SC every 12 hours OR 1.5 mg/kg (150 IU/kg) SC once daily for at least 5 days until INR is therapeutic on oral agents.',
        badge: 'Full Anticoagulation Regimen',
      },
      {
        title: 'Acute STEMI Management Protocol',
        detail: '30 mg IV bolus plus 1.0 mg/kg SC, followed by 1.0 mg/kg SC every 12 hours (first two doses max 100 mg each).',
        badge: 'ACC / AHA Guideline',
      },
    ];
    renalHepaticAdjustment = 'Severe Renal Impairment (CrCl <30 mL/min): Prophylaxis dose adjusted to 20 mg (2,000 IU) SC once daily. Treatment dose adjusted to 1.0 mg/kg SC once daily. Contraindicated for once-daily 1.5 mg/kg regimen.';
    monitoringParameters = ['Baseline complete blood count including platelet count prior to initiation and on Days 3, 5, and 7 to screen for HIT', 'Renal function (serum creatinine / calculated CrCl) prior to initiation and periodically', 'Anti-Factor Xa levels (target peak 0.6–1.0 IU/mL for twice-daily treatment, 0.2–0.4 IU/mL for prophylaxis) recommended in severe renal impairment, extreme obesity (>120 kg), or pregnancy', 'Daily clinical inspection of surgical wounds and puncture sites for hematoma formation'];
    contraindications = ['Active clinically significant major bleeding', 'History of immune-mediated Heparin-Induced Thrombocytopenia (HIT) within past 100 days', 'Severe acute uncontrolled hypertension (SBP >200 mmHg or DBP >110 mmHg)', 'Neuraxial anesthesia (epidural/spinal) within 12 hours (risk of epidural hematoma and permanent paralysis)'];
  }
  // 10. Gastro / PPIs (Pantoprazole / Esomeprazole / Rabeprazole)
  else if (name.includes('PANTOPRAZOLE') || name.includes('SENPRAZOLE') || name.includes('PZOF') || name.includes('PANTARS') || name.includes('ESOMEPRAZOLE') || name.includes('SENESO') || name.includes('RABEPRAZOLE') || name.includes('RABSENOLE')) {
    indications = [
      'Emergency endoscopic and medical management of acute upper gastrointestinal bleeding secondary to gastric or duodenal peptic ulcers',
      'Stress ulcer prophylaxis (SUP) in critically ill intensive care patients on mechanical ventilation or with acute coagulopathy',
      'Severe erosive gastroesophageal reflux disease (GERD) with Los Angeles Grade C/D esophagitis and esophageal ulceration',
      'Pathological hypersecretory conditions including Zollinger-Ellison Syndrome',
      'Eradication of Helicobacter pylori in combination with clarithromycin and amoxicillin',
    ];
    therapeuticClass = ['Proton Pump Inhibitor (PPI)', 'Substituted Benzimidazole', 'Gastric Parietal H+/K+-ATPase Inhibitor'];
    routeOfAdministration = form.includes('Tablet') ? 'Oral Administration (PO) with water' : 'Slow IV Injection over 2-15 min or Continuous Infusion';
    storageConditions = 'Store below 25°C. Keep vial/blister in outer carton protected from moisture and light.';
    regulatorySchedule = 'Schedule H Prescription Formulation · CDSCO Registered';
    clinicalHighlights = [
      'Specific activation in the acidic secretory canaliculus ($pH < 2.0$) of parietal cells produces targeted inhibition with minimal systemic side effects',
      'Continuous IV infusion maintains intragastric pH >6.0, an essential physiological threshold that promotes platelet aggregation and prevents fibrin clot dissolution in peptic ulcers',
      'Favorable drug interaction profile compared to omeprazole due to lower affinity for hepatic cytochrome P450 2C19 (CYP2C19)',
    ];
    targetDepartments = ['Gastroenterology', 'Intensive Care Unit (ICU)', 'Emergency Trauma', 'General Surgery', 'General Medicine'];
    pharmacology = {
      mechanismOfAction:
        'A lipophilic weak base that crosses the parietal cell membrane and concentrates in the acidic secretory canaliculus. Undergoes protonation to form an active cationic cyclic sulfenamide, which forms covalent disulfide bonds with cysteine residues ($Cys^{813}$ and $Cys^{822}$) on the alpha subunit of the $H^+/K^+$-ATPase proton pump, permanently disabling acid secretion.',
      pharmacodynamics:
        'Dose-dependent suppression of basal and stimulated gastric acid secretion. Intravenous administration produces >85% inhibition of acid output within 1 hour.',
      pharmacokinetics: {
        halfLife: 'Plasma elimination half-life approximately 1.0 to 1.9 hours (effect persists 24 to 48 hours due to covalent enzyme binding)',
        proteinBinding: 'Approximately 98% bound to serum albumin',
        metabolism: 'Extensive hepatic metabolism via CYP2C19 demethylation and CYP3A4 sulfoxidation',
        elimination: 'Renal excretion of metabolites accounts for ~80%; biliary/fecal excretion accounts for ~20%',
      },
      targetSpectrumOrReceptors: ['Parietal Cell H+/K+-ATPase Enzyme', 'Gastric Acid Secretory Canaliculus', 'Upper Gastrointestinal Mucosal Barrier'],
    };
    dosingGuidelines = [
      {
        title: 'Acute Peptic Ulcer Hemorrhage Protocol',
        detail: '80 mg IV bolus infused over 15 minutes, immediately followed by an 8 mg/hour continuous infusion for 72 hours.',
        badge: 'ACG / ESGE Guideline',
      },
      {
        title: 'ICU Stress Ulcer Prophylaxis',
        detail: '40 mg IV once daily as a slow 2- to 15-minute injection in patients meeting mechanical ventilation (>48h) criteria.',
        badge: 'Critical Care Protocol',
      },
      {
        title: 'Severe Erosive GERD',
        detail: '40 mg oral tablet or slow IV injection once daily for 4 to 8 weeks.',
        badge: 'Standard Therapy',
      },
    ];
    renalHepaticAdjustment = 'No dosage adjustment required for renal impairment or hemodialysis. In severe hepatic impairment (Child-Pugh Class C), maximum daily dose should not exceed 20 mg to 40 mg.';
    monitoringParameters = ['Serial hemoglobin and hematocrit in gastrointestinal bleeding', 'Stool monitoring for Clostridioides difficile-associated diarrhea in hospitalized patients', 'Serum magnesium levels during prolonged therapy (>3 months)', 'Serum vitamin B12 levels in patients on therapy exceeding 2 years'];
    contraindications = ['Known hypersensitivity to substituted benzimidazoles or excipients', 'Co-administration with rilpivirine, atazanavir, or nelfinavir (causes profound decrease in antiretroviral bioavailability)'];
  }
  // 11. Anesthesia, Resuscitation & Emergency
  else if (name.includes('ATRACURIUM') || name.includes('ATRASEN') || name.includes('MIDAZOLAM') || name.includes('SENOZOLAM') || name.includes('TERLIPRESSIN') || name.includes('SENLIPRESSIN') || name.includes('AMIODARONE') || name.includes('SENODARONE')) {
    indications = [
      'Neuromuscular blockade for endotracheal intubation and mechanical ventilation during surgical anesthesia (Atracurium)',
      'Conscious procedural sedation, anesthesia induction, and acute status epilepticus control (Midazolam)',
      'Emergency management of bleeding gastroesophageal varices and Type 1 Hepatorenal Syndrome (Terlipressin)',
      'Hemodynamically unstable ventricular tachycardia (VT) and ventricular fibrillation (VF) refractory to defibrillation (Amiodarone)',
    ];
    therapeuticClass = ['Emergency Critical Care Agent', 'Neuromuscular Blocker / Sedative / Splanchnic Vasoconstrictor / Antiarrhythmic'];
    routeOfAdministration = 'Intravenous Bolus or Controlled Continuous Syringe-Pump Infusion';
    storageConditions = name.includes('ATRA') ? 'Store between 2°C and 8°C (Cold-Chain). Protect from light.' : 'Store below 25°C protected from light.';
    regulatorySchedule = 'Schedule H / H1 Hospital Resuscitation Line · ICU Use Only';
    clinicalHighlights = [
      'Atracurium undergoes organ-independent non-enzymatic Hofmann elimination and ester hydrolysis, ensuring predictable recovery without prolonged paralysis in hepatic or renal failure',
      'Terlipressin provides sustained splanchnic vasoconstriction, lowering portal pressure while preserving central arterial perfusion in hepatorenal syndrome',
      'Supplied in hospital ampoules and vials with comprehensive analytical release assays',
    ];
    targetDepartments = ['Anesthesiology', 'Operation Theatres (OT)', 'Critical Care Medicine (ICU)', 'Emergency Trauma'];
    pharmacology = {
      mechanismOfAction:
        'Atracurium: Competitive nicotinic acetylcholine receptor antagonist at motor endplates. Terlipressin: Selective vascular V1 receptor agonist causing splanchnic vasoconstriction. Midazolam: Positive allosteric modulator of GABA-A receptors. Amiodarone: Multi-channel blocker (potassium, sodium, calcium, alpha/beta adrenergic).',
      pharmacodynamics:
        'Immediate onset of hemodynamic and neuromuscular modulation. Rapid titration capability via volumetric syringe pumps.',
      pharmacokinetics: {
        halfLife: 'Atracurium: ~20 minutes; Midazolam: 1.5–2.5 hours; Terlipressin (active lysine-vasopressin): ~6 hours; Amiodarone: 40–55 days',
        proteinBinding: 'Variable (Atracurium 82%, Amiodarone >96%)',
        metabolism: 'Hofmann elimination (Atracurium); Hepatic CYP3A4 (Midazolam); Endopeptidases (Terlipressin)',
        elimination: 'Organ-independent clearance for Atracurium; renal/biliary for others',
      },
      targetSpectrumOrReceptors: ['Nicotinic Acetylcholine Receptors', 'Vascular V1 Vasopressin Receptors', 'GABA-A Receptor Complex', 'Cardiac Potassium Channels (IKr/IKs)'],
    };
    dosingGuidelines = [
      {
        title: 'Atracurium Intubation Dosing',
        detail: '0.4 to 0.5 mg/kg IV initial bolus; intubation conditions achieved in 90 to 120 seconds. Maintenance 0.08 to 0.10 mg/kg every 20 to 45 minutes.',
        badge: 'Anesthesia Protocol',
      },
      {
        title: 'Terlipressin Acute Variceal Bleeding',
        detail: '1 to 2 mg IV bolus every 4 to 6 hours for 24 to 48 hours until bleeding is controlled for 24 consecutive hours.',
        badge: 'Hepatology Emergency',
      },
      {
        title: 'Amiodarone Cardiac Arrest / Pulseless VT/VF',
        detail: '300 mg IV bolus diluted in 20 mL D5W rapid injection after 3rd shock; subsequent 150 mg bolus if ventricular arrhythmia recurs.',
        badge: 'ACLS Guideline',
      },
    ];
    renalHepaticAdjustment = 'Atracurium: No dosage adjustment required in renal or hepatic failure due to Hofmann degradation. Terlipressin: Highly indicated in hepatorenal syndrome with concurrent 20% albumin.';
    monitoringParameters = ['Continuous 5-lead ECG monitoring and continuous pulse oximetry', 'Train-of-four (TOF) neuromuscular transmission monitoring for Atracurium', 'Invasive arterial blood pressure monitoring', 'Serum potassium and magnesium levels prior to and during Amiodarone therapy'];
    contraindications = ['Known hypersensitivity to active formulation', 'Terlipressin: Severe ischemic heart disease, severe peripheral arterial occlusive disease', 'Amiodarone: Severe sinus bradycardia, second- or third-degree AV block without pacemaker'];
  }
  // 12. Extended-Spectrum Penicillins & Beta-Lactamase Inhibitors (Piperacillin + Tazobactam)
  else if (name.includes('PIPERACILLIN') || name.includes('SENOTAZ') || name.includes('PIPTAZ') || name.includes('TAZMAC')) {
    indications = [
      'Severe nosocomial hospital-acquired and ventilator-associated pneumonia (HAP/VAP) caused by Pseudomonas aeruginosa',
      'Complicated intra-abdominal infections (cIAI) including peritonitis, biliary tract sepsis, and appendiceal perforation',
      'Complicated skin and soft-tissue infections (cSSTI) including diabetic foot ulcers and necrotizing fasciitis',
      'Complicated urinary tract infections (cUTI) and pyelonephritis with bacteremia',
      'Empirical broad-spectrum monotherapy for febrile neutropenia in immunocompromised oncology patients',
      'Polymicrobial pelvic and intra-abdominal gynecological infections',
    ];
    therapeuticClass = ['Extended-Spectrum Ureidopenicillin + Beta-Lactamase Inhibitor', 'Pseudomonal Cell Wall Synthesis Inhibitor'];
    routeOfAdministration = 'Intravenous Infusion over 30 minutes or Extended 4-Hour Infusion';
    storageConditions = 'Store below 25°C. Keep vial in carton protected from light. Reconstituted solution stable 24h at 2°C–8°C.';
    regulatorySchedule = 'Schedule H1 Antibiotic · Hospital Critical Care Reserve';
    clinicalHighlights = [
      'Extended 4-hour intravenous infusion significantly improves pharmacokinetic/pharmacodynamic target attainment (%fT > MIC >50%) in critically ill septic patients',
      'Tazobactam irreversibly binds to and inactivates class A penicillinases, Richmond-Sykes type III and IV enzymes, and extended-spectrum beta-lactamases (TEM, SHV)',
      'Provides synergistic coverage against Gram-negative aerobes and strict anaerobes without necessitating addition of metronidazole',
    ];
    targetDepartments = ['Intensive Care Unit (ICU)', 'Surgical Wards', 'Infectious Diseases', 'Pulmonology', 'Oncology'];
    pharmacology = {
      mechanismOfAction:
        'Piperacillin inhibits bacterial cell wall septum formation and cross-linking by binding covalently to essential penicillin-binding proteins (PBPs 1b, 2, and 3), leading to cell lysis. Tazobactam acts as a suicide inhibitor, forming stable covalent acyl-enzyme complexes with bacterial beta-lactamases, preserving piperacillin from enzymatic hydrolysis.',
      pharmacodynamics:
        'Time-dependent bactericidal action. Efficacy correlates with the percentage of the dosing interval during which unbound drug concentration remains above the minimum inhibitory concentration (%fT > MIC).',
      pharmacokinetics: {
        halfLife: '0.7 to 1.2 hours in normal renal function (extended to 2.5–3.5 hours in end-stage renal disease)',
        proteinBinding: 'Approximately 30% bound to plasma proteins',
        metabolism: 'Piperacillin is converted to minor desethyl metabolite; tazobactam to a single inactive metabolite',
        elimination: 'Renal excretion: 68% of piperacillin and 80% of tazobactam eliminated unchanged in urine via tubular secretion and filtration',
      },
      targetSpectrumOrReceptors: ['Penicillin-Binding Proteins PBP-2/PBP-3', 'Beta-Lactamases (TEM, SHV)', 'Pseudomonas aeruginosa', 'Enterobacteriaceae', 'Bacteroides fragilis', 'Enterococcus faecalis'],
    };
    dosingGuidelines = [
      {
        title: 'Severe Nosocomial Pneumonia / Sepsis',
        detail: '4.5g IV every 6 hours administered as an extended 3- to 4-hour infusion, or continuous infusion post-bolus.',
        badge: 'Surviving Sepsis / IDSA Guideline',
      },
      {
        title: 'Complicated Intra-Abdominal Infections',
        detail: '4.5g IV every 8 hours infused over 30 to 60 minutes for 4 to 7 days post-source control.',
        badge: 'SIS Surgical Consensus',
      },
      {
        title: 'Febrile Neutropenia Protocol',
        detail: '4.5g IV every 6 hours initiated urgently upon documented fever (ANC <500 cells/mcL).',
        badge: 'Empiric Oncology Guideline',
      },
    ];
    renalHepaticAdjustment = 'CrCl 20–40 mL/min: 3.375g IV every 6 hours. CrCl <20 mL/min: 2.25g IV every 6 hours. Hemodialysis: 2.25g IV every 8 hours plus 0.75g supplemental dose post-dialysis.';
    monitoringParameters = ['Baseline and serial serum creatinine, BUN, and estimated GFR (monitor for vancomycin-piperacillin synergistic AKI)', 'Complete blood count (CBC) with differential for bone marrow suppression on therapy >10 days', 'Electrolytes: monitor serum potassium and sodium (4.5g vial contains ~12.5 mEq sodium)', 'Stool monitoring for Clostridioides difficile toxins'];
    contraindications = ['Severe anaphylactic history to penicillins, cephalosporins, or beta-lactamase inhibitors', 'Co-administration with high-dose methotrexate (causes renal clearance reduction and methotrexate toxicity)'];
  }
  // 13. Cephalosporins (Ceftriaxone / Cefoperazone + Sulbactam / Cefuroxime)
  else if (name.includes('CEFTRIAXONE') || name.includes('SIAXONE') || name.includes('CEFOSENTUM') || name.includes('CEFOPERAZONE') || name.includes('CEFUSEN') || name.includes('CEFUROXIME') || name.includes('CEF')) {
    indications = [
      'Bacterial meningitis and acute neuroinfections crossing the inflamed blood-brain barrier (Ceftriaxone)',
      'Severe hospital-acquired pneumonia, aspiration pneumonia, and bacteremia (Cefoperazone-Sulbactam)',
      'Complicated intra-abdominal, biliary tract, and peritonitis infections',
      'Acute pyelonephritis, complicated urinary tract infections, and urosepsis',
      'Surgical antimicrobial prophylaxis in elective colorectal, cardiovascular, and orthopedic procedures',
      'Community-acquired pneumonia, acute exacerbations of COPD, and ENT infections',
    ];
    therapeuticClass = ['Third-Generation Cephalosporin', 'Cell Wall Synthesis Inhibitor', 'Hospital Injectable Beta-Lactam'];
    routeOfAdministration = form.includes('Tablet') ? 'Oral Administration (PO) with food' : 'Slow IV Infusion over 30 min / Deep Intramuscular Injection';
    storageConditions = 'Store below 25°C. Protect from moisture and light. Reconstituted vial stable 24h at room temperature.';
    regulatorySchedule = 'Schedule H / H1 Prescription Formulation · CDSCO Regulated';
    clinicalHighlights = [
      'Ceftriaxone possesses a uniquely long elimination half-life (~8 hours) permitting convenient once-daily dosing in severe systemic infections',
      'Cefoperazone achieves exceptionally high biliary excretion (up to 70%), making it the premier cephalosporin for acute cholecystitis and biliary tree infections',
      'Sulbactam provides intrinsic bactericidal activity against Acinetobacter baumannii in addition to broad beta-lactamase inhibition',
    ];
    targetDepartments = ['General Medicine', 'Neurology / Stroke ICU', 'Surgery & Gastroenterology', 'Emergency Trauma', 'Pediatrics'];
    pharmacology = {
      mechanismOfAction:
        'Selectively binds to high-molecular-weight penicillin-binding proteins (PBPs), inhibiting the transpeptidation phase of bacterial peptidoglycan cell wall synthesis. Ceftriaxone and cefoperazone trigger autolytic murein hydrolases, causing bacterial osmotic lysis. Sulbactam competitively binds to beta-lactamases preventing drug degradation.',
      pharmacodynamics:
        'Concentration-independent, time-dependent bactericidal action. Predictor of microbiological eradication is %fT > MIC (>40% to 50% of dosing interval).',
      pharmacokinetics: {
        halfLife: 'Ceftriaxone: 5.8 to 8.7 hours; Cefoperazone: 1.6 to 2.4 hours; Cefuroxime: 1.2 hours',
        proteinBinding: 'Ceftriaxone: 85% to 95% bound to serum albumin; Cefoperazone: 82% to 93%',
        metabolism: 'Minimal metabolic transformation; excreted unchanged in active bioactive form',
        elimination: 'Dual balanced elimination: Ceftriaxone ~60% renal and ~40% biliary; Cefoperazone up to 70% biliary clearance',
      },
      targetSpectrumOrReceptors: ['Penicillin-Binding Proteins (PBPs)', 'Streptococcus pneumoniae (including PRSP)', 'Neisseria meningitidis', 'Enterobacteriaceae (E. coli, Klebsiella)', 'Haemophilus influenzae', 'Acinetobacter baumannii (sulbactam-targeted)'],
    };
    dosingGuidelines = [
      {
        title: 'Bacterial Meningitis Protocol',
        detail: 'Ceftriaxone 2g IV every 12 hours infused over 30 minutes; achieves therapeutic cerebrospinal fluid levels.',
        badge: 'CNS High-Dose Protocol',
      },
      {
        title: 'Severe Biliary & Intra-Abdominal Sepsis',
        detail: 'Cefoperazone + Sulbactam 1.5g to 3g IV every 12 hours infused over 30 to 60 minutes for 5 to 10 days.',
        badge: 'Hepatobiliary Standard',
      },
      {
        title: 'Community-Acquired Pneumonia / Pyelonephritis',
        detail: 'Ceftriaxone 1g to 2g IV once daily (or 1g IV every 12 hours in severe sepsis) for 7 to 10 days.',
        badge: 'IDSA / ATS Guideline',
      },
    ];
    renalHepaticAdjustment = 'Ceftriaxone: No dosage adjustment needed in isolated renal or hepatic impairment due to dual clearance pathways (maximum 2g/day in combined end-stage renal and hepatic failure). Cefoperazone: Reduce dose in severe biliary obstruction or hepatic cirrhosis.';
    monitoringParameters = ['Baseline liver function and renal function tests', 'Complete blood count (CBC) with differential', 'Coagulation parameters: PT/INR with Cefoperazone (risk of hypoprothrombinemia; administer Vitamin K 10mg weekly if prolonged)', 'Infusion site inspection for thrombophlebitis'];
    contraindications = ['Severe anaphylactic hypersensitivity to cephalosporins', 'Co-administration of Ceftriaxone with intravenous calcium-containing solutions (e.g. Ringer’s Lactate) in neonates and adults due to fatal calcium-ceftriaxone particulate precipitation in lungs and kidneys'];
  }
  // 14. Emergency Corticosteroids (Hydrocortisone / Dexamethasone / Methylprednisolone)
  else if (name.includes('HYDROCORTISONE') || name.includes('HYDRORS') || name.includes('METHYLPRED') || name.includes('DEXAMETHASONE')) {
    indications = [
      'Emergency management of anaphylactic shock and acute angioedema refractory to epinephrine',
      'Refractory septic shock requiring vasopressor-sparing corticosteroid therapy (Surviving Sepsis Campaign)',
      'Acute adrenal crisis / acute primary or secondary adrenocortical insufficiency',
      'Life-threatening status asthmaticus and acute severe exacerbation of COPD',
      'Severe acute systemic inflammatory and autoimmune flares (SLE, acute vasculitis, pemphigus)',
      'Pre-operative stress coverage in corticosteroid-dependent patients undergoing major surgery',
    ];
    therapeuticClass = ['Systemic Glucocorticoid', 'Adrenal Mineralocorticoid Restorative', 'Emergency Resuscitation Corticosteroid'];
    routeOfAdministration = 'Slow Intravenous Injection over 2-5 minutes or Continuous IV Infusion';
    storageConditions = 'Store below 25°C. Protect reconstituted solution from light. Use within 24h.';
    regulatorySchedule = 'Schedule H Prescription Formulation · Emergency Hospital Formulary';
    clinicalHighlights = [
      'Rapid onset of cellular genomic and non-genomic anti-inflammatory and vascular endothelial stabilizing actions',
      'Restores vascular alpha-1 adrenergic receptor responsiveness to catecholamines (norepinephrine, epinephrine) in vasodilatory septic shock',
      'Possesses balanced glucocorticoid and mineralocorticoid activity (sodium retention and volume support) vital in adrenal crisis',
    ];
    targetDepartments = ['Emergency Trauma', 'Medical & Surgical ICU', 'Anesthesiology', 'Endocrinology', 'Pulmonology'];
    pharmacology = {
      mechanismOfAction:
        'Passes across cell membranes to bind cytosolic glucocorticoid receptors (GR-alpha). The activated drug-receptor complex translocates to the nucleus, binding to glucocorticoid response elements (GRE) to upregulate anti-inflammatory proteins (lipocortin-1/annexin A1, I-kappa-B) while repressing pro-inflammatory transcription factor NF-kappa-B. Non-genomically stabilizes vascular endothelial tight junctions and downregulates inducible nitric oxide synthase (iNOS).',
      pharmacodynamics:
        'Anti-inflammatory, immunosuppressive, and vasopressor-sensitizing actions. Rapid elevation of systemic vascular resistance (SVR) in vasopressor-refractory shock within 2 to 4 hours.',
      pharmacokinetics: {
        halfLife: 'Biological half-life 8 to 12 hours (plasma elimination half-life 1.5 to 2 hours)',
        proteinBinding: 'Approximately 90% bound to corticosteroid-binding globulin (CBG / transcortin) and albumin',
        metabolism: 'Extensive hepatic reduction to tetrahydrocortisol and tetrahydrocortisone',
        elimination: 'Renal excretion of conjugated glucuronide and sulfate metabolites (>90%)',
      },
      targetSpectrumOrReceptors: ['Glucocorticoid Receptor Alpha (GR-alpha)', 'Mineralocorticoid Receptors', 'Nuclear Factor Kappa-B (NF-kB)', 'Vascular Alpha-1 Adrenoceptors'],
    };
    dosingGuidelines = [
      {
        title: 'Refractory Septic Shock Protocol',
        detail: '200 mg/day IV administered as 50 mg IV every 6 hours or continuous infusion (8.3 mg/h) when vasopressors fail to stabilize MAP >65 mmHg.',
        badge: 'Surviving Sepsis Campaign Guideline',
      },
      {
        title: 'Acute Anaphylaxis Adjunct Protocol',
        detail: '100 mg to 200 mg slow IV injection immediately following primary intramuscular epinephrine administration.',
        badge: 'Emergency Resuscitation Regimen',
      },
      {
        title: 'Acute Adrenal Crisis Protocol',
        detail: '100 mg IV bolus stat with 0.9% Normal Saline hydration, followed by 100 mg IV every 8 hours until clinical stabilization.',
        badge: 'Endocrine Society Guideline',
      },
    ];
    renalHepaticAdjustment = 'No dosage adjustment required for renal impairment or hemodialysis. Use with clinical care in severe cirrhosis due to reduced metabolic clearance.';
    monitoringParameters = ['Capillary blood glucose every 4 to 6 hours (screen for steroid-induced hyperglycemia; initiate insulin sliding scale)', 'Serum potassium and sodium (monitor for hypokalemia and fluid retention)', 'Blood pressure and daily hemodynamic vasopressor requirements', 'Screening for secondary nosocomial infections'];
    contraindications = ['Known hypersensitivity to hydrocortisone or excipients', 'Systemic fungal infections without concurrent antifungal therapy', 'Administration of live vaccines while receiving immunosuppressive doses'];
  }
  // 15. Neuroprotection & Stroke (Citicoline / Senocoline)
  else if (name.includes('CITICOLINE') || name.includes('SENOCOLINE') || name.includes('COLINE')) {
    indications = [
      'Acute phase of ischemic cerebrovascular accident (acute ischemic stroke) to promote neuronal recovery',
      'Traumatic brain injury (TBI), cerebral contusion, and post-concussive neurological rehabilitation',
      'Cognitive impairment and vascular dementia secondary to chronic cerebral hypoperfusion',
      'Parkinsonian tremor and akinesia adjunct to enhance dopaminergic receptor transmission',
      'Glaucoma and ischemic optic neuropathy to prevent retinal ganglion cell apoptosis',
    ];
    therapeuticClass = ['Neuroprotective Agent', 'Neuronal Phospholipid Precursor', 'Cerebrovascular Restorative'];
    routeOfAdministration = 'Slow Intravenous Injection / Continuous IV Infusion / Intramuscular Injection';
    storageConditions = 'Store below 25°C. Protect from light in original amber packaging.';
    regulatorySchedule = 'Schedule H Prescription Formulation · CDSCO Regulated';
    clinicalHighlights = [
      'Biosynthetic precursor of phosphatidylcholine, the core structural phospholipid constituent of neuronal and mitochondrial membranes',
      'Crosses the blood-brain barrier to attenuate free fatty acid liberation and suppress ischemic arachidonic acid cascade neurotoxicity',
      'Proven clinical tolerability profile with near-zero incidence of severe adverse events in acute stroke patient cohorts',
    ];
    targetDepartments = ['Neurology', 'Neuro-Intensive Care (NICU)', 'Emergency Stroke Unit', 'Neurosurgery', 'Rehabilitation Medicine'];
    pharmacology = {
      mechanismOfAction:
        'Hydrolyzed to choline and cytidine, which enter the brain parenchyma and resynthesize cytidine-5-diphosphate choline. Stimulates biosynthesis of structural phospholipids in neuronal membranes, stabilizes mitochondrial electron transport chains, inhibits activation of phospholipase A2 ($PLA_2$), reduces reactive oxygen species (ROS) generation, and stimulates striatal dopamine release.',
      pharmacodynamics:
        'Reduces ischemic brain infarct volume, improves neurological deficit scores (NIHSS), and promotes neuroplastic functional rehabilitation.',
      pharmacokinetics: {
        halfLife: 'Biphasic elimination half-life: initial phase 56 hours, terminal structural phase 71 hours',
        proteinBinding: 'Very low plasma protein binding (<10%)',
        metabolism: 'Extensive gut and vascular hydrolysis to choline and cytidine; incorporated into cerebral metabolic pathways',
        elimination: 'Excreted as respiratory carbon dioxide (~16%) and urinary metabolites (<3%)',
      },
      targetSpectrumOrReceptors: ['Neuronal Membrane Phospholipids', 'Phospholipase A2 (PLA2)', 'Striatal Dopamine Receptors', 'Mitochondrial Cardiolipin Matrix'],
    };
    dosingGuidelines = [
      {
        title: 'Acute Ischemic Stroke Protocol',
        detail: '1000 mg to 2000 mg IV daily (500mg every 12h or 1000mg every 12h) initiated within 24 hours of stroke onset for 14 days, followed by oral maintenance.',
        badge: 'Acute Stroke Protocol',
      },
      {
        title: 'Traumatic Brain Injury (TBI)',
        detail: '500 mg to 1000 mg IV or IM once to twice daily for 2 to 4 weeks depending on Glasgow Coma Scale (GCS) score.',
        badge: 'Neuro-Trauma Protocol',
      },
      {
        title: 'Cognitive Decline Maintenance',
        detail: '500 mg oral tablet twice daily with meals for 3 to 6 consecutive months.',
        badge: 'Oral Step-Down Regimen',
      },
    ];
    renalHepaticAdjustment = 'No dose modification required in mild to moderate renal or hepatic impairment due to physiological metabolic breakdown.';
    monitoringParameters = ['Baseline and serial NIH Stroke Scale (NIHSS) scores and Glasgow Coma Scale (GCS)', 'Blood pressure (monitor for mild transient hypotension during rapid IV injection)', 'Routine neurological assessments and functional Rankin scores'];
    contraindications = ['Known hypersensitivity to citicoline', 'Severe hypertonia of the parasympathetic autonomic nervous system', 'Active persistent intracranial hemorrhage with uncontrolled arterial hypertension'];
  }
  // 16. Cardiovascular, Metabolic & Antioxidant Complexes (CoQ10, L-Carnitine, Omega-3, SUCAR-Q, NUTRANICS-Q10)
  else if (name.includes('SUCAR-Q') || name.includes('NUTRANICS-Q10') || name.includes('MULTIVON') || name.includes('CARNITINE') || name.includes('COQ10') || name.includes('SURCAL')) {
    indications = [
      'Adjunct metabolic cardioprotection in chronic ischemic heart disease and congestive heart failure',
      'Mitochondrial cytopathy, muscle myopathy, and statin-induced co-enzyme Q10 depletion',
      'End-stage renal disease (ESRD) secondary carnitine deficiency in maintenance hemodialysis patients',
      'Male idiopathic oligoasthenoteratozoospermia (OAT) to enhance sperm motility and chromatin integrity',
      'Vascular endothelial protection and reduction of systemic microvascular oxidative stress in diabetes mellitus',
    ];
    therapeuticClass = ['Cardiovascular Metabolic Matrix', 'Mitochondrial Bioenergetic Restorative', 'Cellular Antioxidant Complex'];
    routeOfAdministration = 'Oral Administration (PO) with fatty meal or water';
    storageConditions = 'Store below 25°C in a dry place. Protect softgels from direct heat, humidity, and sunlight.';
    regulatorySchedule = 'Nutraceutical / Prescription Therapeutic Formulation · FSSAI & CDSCO Compliant';
    clinicalHighlights = [
      'Bio-enhanced lipid matrix provides superior micellar emulsification, significantly increasing lipophilic CoQ10 and EPA/DHA intestinal bioavailability',
      'L-Carnitine facilitates long-chain fatty acid translocation across inner mitochondrial membranes into the matrix for beta-oxidation ATP production',
      'Synergistic antioxidant network (Glutathione, Lycopene, Zinc, Selenium) neutralizes reactive lipid peroxides and protects endothelial nitric oxide signaling',
    ];
    targetDepartments = ['Cardiology', 'Nephrology / Dialysis Unit', 'Endocrinology', 'Urology / Andrology', 'Internal Medicine'];
    pharmacology = {
      mechanismOfAction:
        'Co-Enzyme Q10 (Ubiquinone) functions as an obligate electron carrier between Complexes I/II and Complex III in the mitochondrial respiratory chain, enhancing oxidative phosphorylation and ATP synthesis. L-Carnitine acts as an essential cofactor for carnitine palmitoyltransferase-1 (CPT-1). Omega-3 ethyl esters (EPA/DHA) downregulate hepatic SREBP-1c, reducing circulating triglycerides and stabilizing cardiomyocyte cell membranes.',
      pharmacodynamics:
        'Improves left ventricular ejection fraction (LVEF), reduces myocardial oxygen consumption, and elevates serum antioxidant capacity.',
      pharmacokinetics: {
        halfLife: 'CoQ10 elimination half-life approximately 33 hours; L-Carnitine ~17 hours',
        proteinBinding: 'Incorporated into circulating lipoproteins (LDL, VLDL)',
        metabolism: 'CoQ10 undergoes cellular reduction to bioactive ubiquinol; Carnitine metabolized into trimethylamine-N-oxide (TMAO)',
        elimination: 'Predominantly biliary and fecal elimination (>85%); carnitine excreted renally',
      },
      targetSpectrumOrReceptors: ['Mitochondrial Electron Transport Complexes', 'Carnitine Palmitoyltransferase-1 (CPT-1)', 'Endothelial Nitric Oxide Synthase (eNOS)', 'Lipid Peroxide Radicals'],
    };
    dosingGuidelines = [
      {
        title: 'Cardiovascular Mitochondrial Support',
        detail: '1 to 2 tablets/capsules daily with meals for a minimum of 12 weeks to achieve therapeutic tissue CoQ10 saturation.',
        badge: 'Cardiology Regimen',
      },
      {
        title: 'Dialysis Carnitine Replenishment',
        detail: '1 tablet daily orally or post-dialysis replacement protocol as indicated by clinical symptoms of cramping and asthenia.',
        badge: 'Nephrology Guideline',
      },
      {
        title: 'Reproductive Antioxidant Protocol',
        detail: '1 tablet twice daily for 90 to 180 days (covering the full cycle of spermatogenesis).',
        badge: 'Andrology Guideline',
      },
    ];
    renalHepaticAdjustment = 'Safe across mild to moderate renal and hepatic impairment. In dialysis patients, monitor carnitine levels during long-term therapy.';
    monitoringParameters = ['Clinical symptom score: NYHA functional class in heart failure patients', 'Fasting lipid panel and serum triglyceride reduction', 'Blood pressure and glycemic control in diabetic individuals'];
    contraindications = ['Known hypersensitivity to active antioxidants or excipients', 'Co-administration with high-dose warfarin without routine INR monitoring (CoQ10 exhibits minor structural homology to Vitamin K)'];
  }
  // 17. Prebiotics, Probiotics & Gastrointestinal Restoration (PROB-25, etc.)
  else if (name.includes('PROB') || name.includes('PROBIOTIC') || desc.includes('probiotic')) {
    indications = [
      'Prevention and clinical management of Antibiotic-Associated Diarrhea (AAD) in hospitalized patients',
      'Adjunct in eradication of Clostridioides difficile-associated colitis and recurrent enteritis',
      'Irritable Bowel Syndrome (IBS) with bloating, abdominal distension, and altered bowel habits',
      'Restoration of gut microbiome diversity following prolonged broad-spectrum parenteral antimicrobials',
      'Infectious acute gastroenteritis in pediatric and adult inpatient populations',
    ];
    therapeuticClass = ['Multi-Strain Probiotic Formulations', 'Gastrointestinal Barrier Restorative', 'Microbiome Therapeutic'];
    routeOfAdministration = 'Oral Administration (PO) with cold or lukewarm water (avoid hot liquids)';
    storageConditions = 'Store below 25°C in moisture-barrier blister packs. Keep away from humidity and heat.';
    regulatorySchedule = 'Therapeutic Formulation / FSSAI & CDSCO Compliant';
    clinicalHighlights = [
      'Formulated with 25 Billion CFU multi-strain viable bacteria with guaranteed gastro-resistant micro-encapsulation to survive gastric acid ($pH < 2.0$)',
      'Produces bacteriocins, short-chain fatty acids (SCFAs like butyrate and acetate), and lowers luminal pH to inhibit colonization of pathogens',
      'Strengthens tight junction proteins (Claudin, Occludin, ZO-1), preventing bacterial translocation across mucosal barriers',
    ];
    targetDepartments = ['Gastroenterology', 'General Medicine', 'Hospital Pharmacy', 'Inpatient Medical Wards'];
    pharmacology = {
      mechanismOfAction:
        'Competitive exclusion of enteropathogenic bacteria for binding sites on intestinal enterocytes. Produces antimicrobial peptides (bacteriocins), lactic acid, and short-chain fatty acids (acetate, propionate, butyrate) that lower colonic pH and suppress pathogenic spore germination. Stimulates production of secretory IgA (sIgA) and enhances epithelial tight junction integrity.',
      pharmacodynamics:
        'Normalizes stool consistency, reduces colonic transit time, restores commensal microflora ratio, and downregulates mucosal inflammatory cytokines (IL-6, TNF-alpha).',
      pharmacokinetics: {
        halfLife: 'Transient gastrointestinal colonization; steady-state shedding maintained during daily ingestion',
        proteinBinding: 'Not applicable (acts intraluminally)',
        metabolism: 'Bacterial fermentation of non-digestible prebiotic fibers in the colon',
        elimination: 'Natural excretion in feces',
      },
      targetSpectrumOrReceptors: ['Intestinal Enterocyte Mucosal Layer', 'Enteric Pathogens (C. difficile, Salmonella, E. coli)', 'Epithelial Tight Junctions (ZO-1)'],
    };
    dosingGuidelines = [
      {
        title: 'Antibiotic-Associated Diarrhea Prophylaxis',
        detail: '1 to 2 capsules daily, administered at least 2 hours separated from oral antibiotic dosing; continue for 7 days post-antibiotic course.',
        badge: 'ACG Guideline',
      },
      {
        title: 'IBS & Microbial Rebalancing Protocol',
        detail: '1 capsule daily 30 minutes before the morning meal with room-temperature water for 4 to 8 weeks.',
        badge: 'Gastroenterology Standard',
      },
    ];
    renalHepaticAdjustment = 'No dosage adjustment required for renal or hepatic impairment.';
    monitoringParameters = ['Stool frequency, consistency (Bristol Stool Scale), and resolution of abdominal cramping', 'Screening for systemic bacteremia in severely immunocompromised ICU patients with central lines'];
    contraindications = ['Severe acute pancreatitis with multi-organ failure', 'Patients with central venous catheters who are severely neutropenic (ANC <100) or post-bone marrow transplant (risk of probiotic translocation fungemia/bacteremia)'];
  }
  // 18. Clinical Nutrition / Bone / Joint Care
  else if (cat.includes('nutrition') || cat.includes('joint') || name.includes('CALCINICS') || name.includes('NUTRANICS') || name.includes('CISSNICS') || name.includes('JOINT') || name.includes('COLLAGEN') || name.includes('MSC')) {
    indications = [
      'Treatment and rapid correction of documented Vitamin D3 deficiency and secondary hyperparathyroidism',
      'Prevention and management of osteopenia, senile osteoporosis, and post-menopausal bone mineral density loss',
      'Accelerated bone healing, callus formation, and osteogenesis following fractures or orthopedic arthroplasty',
      'Cartilage matrix synthesis, synovial lubrication, and joint mobility enhancement in osteoarthritis',
      'Adjunct nutritional replenishment in post-operative surgical recovery, convalescence, and athletic rehabilitation',
    ];
    therapeuticClass = ['Bone Mineral Restorative', 'Orthopedic Chondroprotective Matrix', 'Clinical Vitamin & Mineral Formulation'];
    routeOfAdministration = form.includes('Gel') ? 'Topical Cutaneous Application' : form.includes('Liquid') ? 'Oral Liquid Solution (PO)' : 'Oral Tablet / Capsule (PO)';
    storageConditions = 'Store in a cool, dry place below 25°C. Protect from direct heat, sunlight, and moisture.';
    regulatorySchedule = 'Dietary Formulation / FSSAI & CDSCO Quality Compliant';
    clinicalHighlights = [
      'Micro-encapsulated nano-emulsion technology ensures rapid gastrointestinal micellar absorption independent of dietary fat intake',
      'Synergistic combination of Vitamin K2-7 (Menaquinone-7) activates osteocalcin, directing calcium deposition into bone matrix rather than arterial walls',
      'Manufactured in WHO-GMP certified facilities with strict testing for heavy metals and microbiological purity',
    ];
    targetDepartments = ['Orthopedics', 'Rheumatology', 'Endocrinology', 'Geriatrics', 'Sports Medicine'];
    pharmacology = {
      mechanismOfAction:
        'Cholecalciferol is hydroxylated in the liver to 25(OH)D and subsequently in the kidney to 1,25(OH)2D (calcitriol), which binds to vitamin D receptors (VDR) to stimulate intestinal calcium transport proteins (TRPV6, Calbindin-D9k). Vitamin K2-7 acts as cofactor for gamma-glutamyl carboxylase, carboxylating osteocalcin to bind calcium to hydroxyapatite crystals. Undenatured Type II Collagen acts via oral tolerance in gut-associated lymphoid tissue to reduce articular T-cell destruction.',
      pharmacodynamics:
        'Sustained elevation of circulating 25(OH)D levels, normalization of parathyroid hormone (PTH), and stimulation of chondrocyte glycosaminoglycan synthesis.',
      pharmacokinetics: {
        halfLife: '25(OH)D half-life approximately 15 to 30 days',
        proteinBinding: '>99% bound to vitamin D binding protein (DBP) and albumin',
        metabolism: 'Sequential hepatic CYP2R1 and renal CYP27B1 hydroxylation',
        elimination: 'Biliary and fecal elimination (>90%); minimal urinary excretion',
      },
      targetSpectrumOrReceptors: ['Vitamin D Nuclear Receptors (VDR)', 'Osteoblast Gamma-Glutamyl Carboxylase', 'Bone Hydroxyapatite Matrix', 'Articular Chondrocytes'],
    };
    dosingGuidelines = [
      {
        title: 'Severe Vitamin D Deficiency Correction',
        detail: '60,000 IU orally once weekly for 8 to 12 consecutive weeks, followed by monthly maintenance.',
        badge: 'Endocrine Society Guideline',
      },
      {
        title: 'Osteopenia / Osteoporosis Maintenance',
        detail: '1 tablet / capsule daily after the main meal with water for long-term bone mineral support.',
        badge: 'Daily Orthopedic Dosing',
      },
      {
        title: 'Joint Cartilage Repair Regimen',
        detail: '1 capsule/tablet daily for a minimum of 60 to 90 days to achieve clinical improvement in joint mobility and pain scores.',
        badge: 'Chondroprotective Protocol',
      },
    ];
    renalHepaticAdjustment = 'Use with caution in moderate-to-severe renal impairment; active vitamin D (calcitriol) may be required in end-stage renal disease due to impaired 1-alpha-hydroxylase activity.';
    monitoringParameters = ['Serum 25-hydroxyvitamin D [25(OH)D] at baseline and at 3 to 6 months (target >30 ng/mL)', 'Serum total and ionized calcium levels (monitor for hypercalcemia)', 'Serum alkaline phosphatase and intact parathyroid hormone (iPTH)', 'DEXA bone mineral density scans at 12 to 24 months'];
    contraindications = ['Documented hypercalcemia (serum calcium >10.5 mg/dL)', 'Hypervitaminosis D', 'Severe active calcium-containing nephrolithiasis / renal calculi'];
  }
  // 13. Other Antibiotics & Specialty Formulations
  else {
    indications = [
      'Empirical and culture-directed therapy for moderate to severe bacterial infections in hospitalized patients',
      'Complicated respiratory tract, intra-abdominal, bone/joint, and urinary tract infections',
      'Bacteremia, septicemia, and systemic infections caused by susceptible pathogens',
      'Pre- and peri-operative antimicrobial prophylaxis in high-risk surgical procedures',
    ];
    therapeuticClass = ['Hospital-Grade Antibacterial', 'Systemic Anti-Infective Formulation'];
    routeOfAdministration = form.includes('Tablet') ? 'Oral Administration (PO)' : 'Intravenous Infusion / Injection';
    storageConditions = 'Store below 25°C in original packaging. Protect from light and moisture.';
    regulatorySchedule = 'Schedule H Prescription Formulation · CDSCO Regulated';
    clinicalHighlights = [
      'Procured directly from authorized primary manufacturer production lines (WHO-GMP / US-FDA audited)',
      'Certified batch release documentation and manufacturer Certificate of Analysis (CoA) attached to every dispatch',
      'Compliance with CDSCO Wholesale Drug License Wholesale-819-A',
    ];
    targetDepartments = ['Hospital Pharmacy', 'General Medicine', 'Surgical Wards', 'Emergency Care'];
    pharmacology = {
      mechanismOfAction:
        'Inhibits essential bacterial processes—such as peptidoglycan cell wall biosynthesis or bacterial protein synthesis—leading to bactericidal or bacteriostatic suppression of pathogenic microorganisms.',
      pharmacodynamics:
        'Broad antimicrobial coverage targeting common nosocomial and community-acquired Gram-positive and Gram-negative pathogens.',
      pharmacokinetics: {
        halfLife: 'Formulation-specific hospital pharmacokinetics',
        proteinBinding: 'Clinically standard plasma protein binding',
        metabolism: 'Hepatic or non-enzymatic clearance pathways',
        elimination: 'Predominantly renal excretion',
      },
      targetSpectrumOrReceptors: ['Bacterial Cell Wall Synthesis Enzymes', 'Hospital Pathogens', 'Bacterial Ribosomes'],
    };
    dosingGuidelines = [
      {
        title: 'Standard Institutional Regimen',
        detail: 'Administer according to hospital formulary guidelines, culture susceptibility reports, and patient weight.',
        badge: 'Formulary Standard',
      },
    ];
    renalHepaticAdjustment = 'Adjust dosage intervals or reduce dose in moderate-to-severe renal impairment in accordance with calculated creatinine clearance.';
    monitoringParameters = ['Baseline renal and hepatic function panels', 'Complete blood count (CBC) with differential', 'Clinical temperature curve and inflammatory markers (CRP, procalcitonin)'];
    contraindications = ['Known hypersensitivity to the active pharmaceutical ingredient or excipients'];
  }

  return {
    ...product,
    indications: product.indications || indications,
    therapeuticClass: product.therapeuticClass || therapeuticClass,
    routeOfAdministration: product.routeOfAdministration || routeOfAdministration,
    storageConditions: product.storageConditions || storageConditions,
    regulatorySchedule: product.regulatorySchedule || regulatorySchedule,
    clinicalHighlights: product.clinicalHighlights || clinicalHighlights,
    targetDepartments: product.targetDepartments || targetDepartments,
    pharmacology: product.pharmacology || pharmacology,
    dosingGuidelines: product.dosingGuidelines || dosingGuidelines,
    renalHepaticAdjustment: product.renalHepaticAdjustment || renalHepaticAdjustment,
    monitoringParameters: product.monitoringParameters || monitoringParameters,
    contraindications: product.contraindications || contraindications,
  };
}

/**
 * Get product by ID with full clinical metadata
 */
export function getProductById(id: string): ProductItem | undefined {
  const found = PHARMA_PRODUCTS.find((p) => p.id === id || p.code.toLowerCase() === id.toLowerCase());
  return found ? enrichProduct(found) : undefined;
}

/**
 * Get related products based on category or division
 */
export function getRelatedProducts(productId: string, limit = 4): ProductItem[] {
  const current = PHARMA_PRODUCTS.find((p) => p.id === productId);
  if (!current) return PHARMA_PRODUCTS.slice(0, limit);

  return PHARMA_PRODUCTS
    .filter((p) => p.id !== productId && (p.category === current.category || p.division === current.division))
    .slice(0, limit);
}

