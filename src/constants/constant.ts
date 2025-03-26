import { Option } from "@/types/types";

export const CountryName: Option[] = [
  { label: "Pakistan", value: 1 },
  { label: "USA", value: 2 },
  { label: "United Kingdom", value: 3 },
];

export const CompanyType: Option[] = [
  { label: "International", value: 1 },
  { label: "Domestic", value: 2 },
];

export const AccountType: Option[] = [
  { label: "Credit", value: 1 },
  { label: "Performa", value: 2 },
];

export const AccountStatus: Option[] = [
  { label: "Active", value: 1 },
  { label: "Dissolved", value: 2 },
  { label: "Dormant", value: 3 },
];

export const BusinessStructure: Option[] = [
  { label: "Sole Trader", value: 1 },
  { label: "Partnership", value: 2 },
  { label: "Limited Company (LTD)", value: 3 },
  { label: "Limited Liability Partnership (LLP)", value: 4 },
  { label: "Non-Profit Organization", value: 5 },
];

export const Currency: Option[] = [
  { label: "£ British Pounds (GBP)", value: 1 },
  { label: "$ United States Dollar (USD)", value: 2 },
  { label: "€ Euro (EUR)", value: 3 },
];

export const VATRate: Option[] = [
  { label: "Standard Rate 20%", value: 1 },
  { label: "Zero Rate 0%", value: 2 },
];

export const TypeofLicense: Option[] = [
  { label: "GMC", value: 1 },
  { label: "GPC", value: 2 },
  { label: "HPC", value: 3 },
  { label: "JDC", value: 4 },
  { label: "NMC", value: 5 },
  { label: "WDL", value: 6 },
  { label: "GPSC", value: 7 },
  { label: "Other", value: 8 },
];

export const CertificateName: Option[] = [
  { label: "CE", value: 1 },
  { label: "ISO 13458", value: 2 },
  { label: "ISO 9001", value: 3 },
  { label: "WDA", value: 4 },
  { label: "GDP", value: 5 },
  { label: "Other", value: 6 },
];

export const InternationalShippingTerms: Option[] = [
  { label: "Ex-Works (EXW)", value: 1 },
  { label: "Free Carrier (FCA)", value: 2 },
  { label: "Free On Board (FOB)", value: 3 },
  { label: "Cost And Freight (CNF)", value: 4 },
  { label: "Cost, Insurance, And Freight (CIF)", value: 5 },
  { label: "Delivered at Place Unloaded (DPU)", value: 6 },
  { label: "Delivery Duty Unpaid (DDU)", value: 7 },
  { label: "Delivered At Place (DAP) (EU)", value: 8 },
];
export const DashboardList: Option[] = [
  { label: "My Orders", value: 1 },
  { label: "My Whishlist", value: 2 },
  { label: "My Account Profile", value: 3 },
];

export const categories = [
  {
    name: "Disposables",
    subcategories: [
      {
        name: "Accident & Emergency",
        subcategories: [
          { name: "Aspirators and Pumps",
            products:[
              {
                id: "asp-001",
                name: "Portable Electric Aspirator",
                description: "Compact medical suction device with adjustable pressure settings",
                price: 299.99,
                image: "/images/portable-aspirator.jpg"
              },
              {
                id: "pump-202",
                name: "Surgical Grade Vacuum Pump",
                description: "High-power surgical suction system with HEPA filtration",
                price: 1450.00,
                image: "/images/surgical-pump.jpg"
              },
              {
                id: "asp-3n",
                name: "Neonatal Aspiration Kit",
                description: "Gentle suction device for neonatal care with multiple tip sizes",
                price: 189.50,
                image: "/images/neonatal-aspirator.jpg"
              },
              {
                id: "pump-d45",
                name: "Dental Office Aspiration System",
                description: "Complete dental suction unit with quiet operation",
                price: 2200.00,
                image: "/images/dental-pump.jpg"
              },
              {
                id: "asp-emerg",
                name: "Emergency Manual Aspirator",
                description: "Hand-operated suction device for emergency medical use",
                price: 89.99,
                image: "/images/emergency-aspirator.jpg"
              }
            ]
           },
          { name: "CPR" ,
            products:[
              {
                id: "asp-001",
                name: "Portable Electric Aspirator",
                description: "Compact medical suction device with adjustable pressure settings",
                price: 299.99,
                image: "/images/portable-aspirator.jpg"
              },
              {
                id: "pump-202",
                name: "Surgical Grade Vacuum Pump",
                description: "High-power surgical suction system with HEPA filtration",
                price: 1450.00,
                image: "/images/surgical-pump.jpg"
              },
              {
                id: "asp-3n",
                name: "Neonatal Aspiration Kit",
                description: "Gentle suction device for neonatal care with multiple tip sizes",
                price: 189.50,
                image: "/images/neonatal-aspirator.jpg"
              },
              {
                id: "pump-d45",
                name: "Dental Office Aspiration System",
                description: "Complete dental suction unit with quiet operation",
                price: 2200.00,
                image: "/images/dental-pump.jpg"
              },
              {
                id: "asp-emerg",
                name: "Emergency Manual Aspirator",
                description: "Hand-operated suction device for emergency medical use",
                price: 89.99,
                image: "/images/emergency-aspirator.jpg"
              }
            ]},
          { name: "Extrication Collar" ,
            products:[
              {
                id: "asp-001",
                name: "Portable Electric Aspirator",
                description: "Compact medical suction device with adjustable pressure settings",
                price: 299.99,
                image: "/images/portable-aspirator.jpg"
              },
              {
                id: "pump-202",
                name: "Surgical Grade Vacuum Pump",
                description: "High-power surgical suction system with HEPA filtration",
                price: 1450.00,
                image: "/images/surgical-pump.jpg"
              },
              {
                id: "asp-3n",
                name: "Neonatal Aspiration Kit",
                description: "Gentle suction device for neonatal care with multiple tip sizes",
                price: 189.50,
                image: "/images/neonatal-aspirator.jpg"
              },
              {
                id: "pump-d45",
                name: "Dental Office Aspiration System",
                description: "Complete dental suction unit with quiet operation",
                price: 2200.00,
                image: "/images/dental-pump.jpg"
              },
              {
                id: "asp-emerg",
                name: "Emergency Manual Aspirator",
                description: "Hand-operated suction device for emergency medical use",
                price: 89.99,
                image: "/images/emergency-aspirator.jpg"
              }
            ]},
          { name: "Patient Handling" ,
            products:[
              {
                id: "asp-001",
                name: "Portable Electric Aspirator",
                description: "Compact medical suction device with adjustable pressure settings",
                price: 299.99,
                image: "/images/portable-aspirator.jpg"
              },
              {
                id: "pump-202",
                name: "Surgical Grade Vacuum Pump",
                description: "High-power surgical suction system with HEPA filtration",
                price: 1450.00,
                image: "/images/surgical-pump.jpg"
              },
              {
                id: "asp-3n",
                name: "Neonatal Aspiration Kit",
                description: "Gentle suction device for neonatal care with multiple tip sizes",
                price: 189.50,
                image: "/images/neonatal-aspirator.jpg"
              },
              {
                id: "pump-d45",
                name: "Dental Office Aspiration System",
                description: "Complete dental suction unit with quiet operation",
                price: 2200.00,
                image: "/images/dental-pump.jpg"
              },
              {
                id: "asp-emerg",
                name: "Emergency Manual Aspirator",
                description: "Hand-operated suction device for emergency medical use",
                price: 89.99,
                image: "/images/emergency-aspirator.jpg"
              }
            ]},
        ],
      },
      {
        name: "Airway Management",
        subcategories: [
          { name: "Anaesthetic Facemask" },
          { name: "Double Lumen Endobronchial Tube" },
          { name: "Endobronchial Blocker Tube" },
          { name: "Endotracheal Bougie Introducer" },
          { name: "Endotracheal Tubes" },
          { name: "Intubating Stylet" },
          { name: "Laryngeal Mask" },
          { name: "Nasopharyngeal Airway" },
          { name: "Oropharyngeal Guedel Airway" },
          { name: "Tracheostomy Tubes " },
        ],
      },
      {
        name: "Cleaning Supplies",
        subcategories: [
          { name: "Air Fresheners" },
          { name: "Bin Liners" },
          { name: "Bins" },
          { name: "Broom Supplies" },
          { name: "Buckets & Wringers" },
          { name: "Cleaners Essentials" },
          { name: "Cleaning Chemicals" },
          { name: "Cleaning Cloths" },
          { name: "Cleaning Gloves" },
          { name: "Cleaning Trolley" },
          { name: "Clinical Waste Bags" },
          { name: "Dust Control" },
          { name: "Dustpans" },
          { name: "Laundry" },
          { name: "Laundry Bags" },
          { name: "Laundry Trolleys" },
          { name: "Linen Collection & Distribution" },
          { name: "Microfibre Cloths" },
          { name: "Mop Supplies" },
          { name: "Odour Control" },
          { name: "Odour Elimination & Air Purification" },
          { name: "Spray Bottles & Trigger Heads" },
          { name: "Toilet Brush & Holders" },
          { name: "Warning Signs" },
          { name: "Wiper Dispenser" },
          { name: "Wiping Cloths" },
        ],
      },

      { name: "Continence Skin Protection" },

      {
        name: "Diabetes Management",
        subcategories: [{ name: "Glucose Testing" }],
      },

      {
        name: "Diagnostics",
        subcategories: [
          { name: "Blood Testing" },
          { name: "Diabetic Neuropathy Testing" },
          { name: "Diagnostic Analysers" },
          { name: "INR Testing" },
          { name: "Lancets" },
          { name: "Medicine Measures" },
          { name: "Pregnancy & Fertility Testing" },
          { name: "Specimen Collection" },
          { name: "Transport Swabs" },
          { name: "Urinalysis Reagent Strips" },
        ],
      },

      {
        name: "ENT",
        subcategories: [
          { name: "Ear Curettes" },
          { name: "Ear Irrigation" },
          { name: "Nasal Care" },
          { name: "Oral Care" },
          { name: "Pen Torches" },
          { name: "Tongue Depressors" },
        ],
      },

      {
        name: "Enteral Feeding",
        subcategories: [
          { name: "Levins Tube" },
          { name: "Nasogastric Feeding Tube" },
          { name: "Ryles Tube" },
        ],
      },

      {
        name: "Gloves",
        subcategories: [
          { name: "Gauntlets" },
          { name: "Gloves Dispenser" },
          { name: "Latex Gloves" },
          { name: "Nitrile Gloves" },
          { name: "Polythene Gloves" },
          { name: "Sterile Gloves" },
          { name: "Surgical Gloves" },
          { name: "Synthetic Gloves" },
          { name: "Underglove" },
          { name: "Vinyl Gloves" },
        ],
      },

      {
        name: "Gynaecology Instruments",
        subcategories: [{ name: "Delivery Packs" }, { name: "Maternity Pads" }],
      },

      { name: "Histology" },

      {
        name: "Holloware",
        subcategories: [
          { name: "Foil Holloware" },
          { name: "Polypropylene Holloware" },
          { name: "Pulp Holloware" },
        ],
      },

      { name: "Incontinence Bedding" },

      {
        name: "Maternity & Obstetrics",
        subcategories: [
          { name: "Umbilical Cord Scissors" },
          { name: "Amniotic Membrane Perforator" },
          { name: "Delivery Packs" },
          { name: "Maternity Pads" },
          { name: "Umbilical Cord Clamps" },
        ],
      },

      {
        name: "Paper Products",
        subcategories: [
          { name: "Centrefeed Roll Dispenser" },
          { name: "Centrefeed Rolls" },
          { name: "Couch Rolls" },
          { name: "Hand Towel Dispenser" },
          { name: "Hand Towels" },
          { name: "Tissue Dispenser" },
          { name: "Tissues" },
          { name: "Toilet Tissue Dispenser" },
          { name: "Toilet Tissues" },
        ],
      },

      {
        name: "Sexual Health",
        subcategories: [
          { name: "Diaphragm" },
          { name: "IUD" },
          { name: "Spermicide" },
        ],
      },

      {
        name: "Sharps & Cannulae",
        subcategories: [
          { name: "Blood Collection" },
          { name: "Blood Giving Sets" },
          { name: "Dental Needles" },
          { name: "Infusion Sets" },
          { name: "Insulin Syringe" },
          { name: "IV Cannula" },
          { name: "Needle Clipping & Storage" },
          { name: "Needles" },
          { name: "Pen Needles" },
          { name: "Pre-Filled Saline Syringe" },
          { name: "Sharps Bins" },
          { name: "Syringes" },
        ],
      },

      { name: "Skin Disinfectant" },

      {
        name: "Ultrasound",
        subcategories: [{ name: "Ultrasound Gel" }],
      },

      {
        name: "Urine Collection",
        subcategories: [
          { name: "Catheter Bag Holder" },
          { name: "Paediatric Urine Bag" },
          { name: "Urine Collection Device" },
        ],
      },
    ],
  },
  {
    name: "Equipment",
    subcategories: [
      {
        name: "Audiometry",
        subcategories: [],
      },
      {
        name: "Autoclave Accessories",
        subcategories: [],
      },
      {
        name: "Blood Pressure Monitors",
        subcategories: [
          { name: "Ambulatory Blood Pressure Monitor (ABPM)" },
          { name: "Aneroid Blood Pressure Monitors" },
          { name: "Blood Pressure Cuffs" },
          { name: "Blood Pressure Monitor Accessories" },
          { name: "Digital Blood Pressure Monitors" },
        ],
      },
      {
        name: "Defibrillators",
        subcategories: [
          { name: "Automatic Defibrillator" },
          { name: "Defibrillator Battery Packs" },
          { name: "Defibrillator Cases & Cabinets" },
          { name: "Defibrillator Pads" },
          { name: "Defibrillators Accessories" },
        ],
      },
      {
        name: "Dermatology",
        subcategories: [
          { name: "Biopsy Punches" },
          { name: "Dermatology Blade" },
          { name: "Dermal Curettes" },
          { name: "Dermatology Accessories" },
          { name: "Dermatoscopes" },
        ],
      },
      {
        name: "Dining Assistance",
        subcategories: [
          { name: "Beakers & Tumblers" },
          { name: "Cutlery" },
          { name: "Non-Slip Mat" },
        ],
      },
      {
        name: "Dopplers",
        subcategories: [
          { name: "Doppler" },
          { name: "Doppler Accessories" },
          { name: "Doppler Cuffs" },
          { name: "Doppler Probes" },
        ],
      },
      {
        name: "ECG",
        subcategories: [
          { name: "ECG Accessories" },
          { name: "ECG Electrodes" },
          { name: "ECG Machines" },
        ],
      },
      {
        name: "Fridge, Freezers & Carriers",
        subcategories: [
          { name: "Pharmacy Refrigeration" },
          { name: "Vaccine Carrier" },
        ],
      },
      {
        name: "Height Measures",
        subcategories: [{ name: "Tape Measures" }],
      },
      {
        name: "Lighting",
        subcategories: [
          { name: "Examination Lighting" },
          { name: "Lighting Accessories" },
          { name: "Magnifying Lights" },
          { name: "Pen Lights" },
          { name: "Procedure Lighting" },
        ],
      },
      {
        name: "Minor Surgery",
        subcategories: [{ name: "Hyfrecator" }],
      },
      {
        name: "Ophthalmology",
        subcategories: [
          { name: "Eye Test" },
          { name: "Slit Lamp" },
          { name: "Tonometer" },
          { name: "Volk Lenses" },
        ],
      },
      {
        name: "Orthotic Products",
        subcategories: [
          { name: "Ankle Foot Orthosis" },
          { name: "Knee Immobiliser" },
          { name: "Open Toe Cast" },
          { name: "Plantar Faciitis Orthosis" },
          { name: "Post-Op Shoe" },
          { name: "Shoulder Sling" },
        ],
      },
      {
        name: "Otoscopes & Ophthalmoscopes",
        subcategories: [
          { name: "Desk Sets" },
          { name: "Diagnostic Sets" },
          { name: "Ophthalmoscopes" },
          { name: "Otoscopes" },
          { name: "Otoscopes & Ophthalmoscopes Accessories" },
          { name: "Wall Sets" },
        ],
      },
      {
        name: "Pulse Oximeters",
        subcategories: [],
      },
      {
        name: "Respiratory & Aerosol Therapy",
        subcategories: [
          { name: "Aerosol Facemask" },
          { name: "Anaesthetic Facemask" },
          { name: "Closed Suction Catheter Systems" },
          { name: "Nasal Cannula" },
          { name: "Nebuliser Facemask with Chamber" },
          { name: "Nebuliser Facemask with T Mouthpiece" },
          { name: "Nebulisers" },
          { name: "Nebulisers Compressor" },
          { name: "Non-Rebreathing Oxygen Facemask" },
          { name: "Oxygen Connecting Tubing" },
          { name: "Oxygen Facemask" },
          { name: "Tracheostomy Oxygen Mask" },
          { name: "Venturi Oxygen Mask" },
          { name: "Venturi Oxygen Mask Multi-Concentration" },
        ],
      },
      {
        name: "Scales & Measurement",
        subcategories: [
          { name: "Measuring Stations & Column Scales" },
          { name: "Specialized Scales" },
          { name: "Baby Measuring Mats" },
          { name: "Baby Scales" },
          { name: "Flat Scales" },
          { name: "Height Measuring Systems" },
          { name: "Height Measuring Systems Accessories" },
          { name: "Multifunctional & Wheelchair Scales" },
          { name: "Paediatric Measuring Systems" },
        ],
      },
      {
        name: "Spirometers",
        subcategories: [
          { name: "Inhaler Trainers" },
          { name: "Peak Flow Meter" },
          { name: "Spirometer Accessories" },
        ],
      },
      {
        name: "Stethoscopes",
        subcategories: [
          { name: "Cardiology Stethoscopes" },
          { name: "Classic Stethoscopes" },
          { name: "Entry Level Stethoscopes" },
          { name: "Stethoscope Accessories" },
          { name: "Stethoscopes Dual Head" },
          { name: "Stethoscopes Single Head" },
        ],
      },
      {
        name: "Temperature Management",
        subcategories: [{ name: "Warming Blankets" }],
      },
      {
        name: "Thermometers",
        subcategories: [
          { name: "Digital Ear Thermometers" },
          { name: "Digital Oral Thermometers" },
          { name: "Fridge Thermometer" },
          { name: "Non-Contact Thermometers" },
          { name: "Thermometer Probe Covers" },
          { name: "Wall Thermometer" },
        ],
      },
      {
        name: "Vital Signs Monitors",
        subcategories: [],
      },
    ],
  },
  {
    name: "First Aid",
    subcategories: [
      {
        name: "Antiseptics",
        subcategories: [],
      },
      {
        name: "Bandages",
        subcategories: [
          { name: "Adhesive Bandage" },
          { name: "Cohesive Bandage" },
          { name: "Compression Bandages" },
          { name: "Conforming Bandage" },
          { name: "Crepe Bandage" },
          { name: "Eye Pads" },
          { name: "Eye Patches" },
          { name: "Orthopaedic Bandage" },
          { name: "Retention Bandage" },
          { name: "Stayform Bandages" },
          { name: "Support Bandages" },
          { name: "Triangular Bandages" },
          { name: "Tubular Bandage" },
          { name: "White Open Wove (WOW) Bandages" },
        ],
      },
      {
        name: "Biohazard",
        subcategories: [
          { name: "Biohazard & Sharps Disposal Kits" },
          { name: "Biohazard Absorbent Granules" },
          { name: "Biohazard Disinfectant Spray" },
          { name: "Biohazard Kits" },
          { name: "Plastic Scoop & Scraper" },
          { name: "Sharps Disposal Kits" },
          { name: "Vomit Bags & Bowls" },
        ],
      },
      {
        name: "Burn Care",
        subcategories: [
          { name: "Burn Dressings" },
          { name: "Burn Gels" },
          { name: "Burns Dressing" },
          { name: "Burns Kits" },
          { name: "H-F Antidote Gel" },
        ],
      },
      {
        name: "Casts & Splints",
        subcategories: [
          { name: "Casting" },
          { name: "Plaster Of Paris" },
          { name: "Plastic Mallet Splint" },
          { name: "Stockinette" },
        ],
      },
      {
        name: "Dressings",
        subcategories: [
          { name: "Absorbent Dressing" },
          { name: "Absorbent Pads" },
          { name: "Adhesive Dressing" },
          { name: "Adhesive Remover" },
          { name: "Alginate Dressing" },
          { name: "Ambulance Dressing" },
          { name: "Antimicrobial Dressings" },
          { name: "Boxed Dressing" },
          { name: "Cast Padding" },
          { name: "Compression Stockings" },
          { name: "Dressing Pads" },
          { name: "Film Dressing Spray" },
          { name: "Film Dressings" },
          { name: "Finger Dressing" },
          { name: "Fingerstalls" },
          { name: "Flow Wrapped Dressing" },
          { name: "Foam Dressings" },
          { name: "HSE Dressings" },
          { name: "Hydrocolloid Dressing" },
          { name: "Hydrogel Wound Dressing" },
          { name: "Island Dressings" },
          { name: "IV Dressings" },
          { name: "Low Adherent Dressing" },
          { name: "Mesh Dressing" },
          { name: "Non Adherent Dressing" },
          { name: "Paraffin Gauze Dressing" },
          { name: "Post Operative Dressings" },
          { name: "Training Dressing" },
        ],
      },
      {
        name: "Eye Care",
        subcategories: [
          { name: "Eye Bath" },
          { name: "Eye Care Packs" },
          { name: "Eye Wash Kits" },
          { name: "Eye Wash Solution" },
          { name: "Eye Wash Station" },
        ],
      },
      {
        name: "First Aid Accessories",
        subcategories: [],
      },
      {
        name: "First Aid Kits",
        subcategories: [
          { name: "Catering First Aid Kit" },
          { name: "Children's First Aid Kit" },
          { name: "Critical Care Kit" },
          { name: "First Aid Bags" },
          { name: "First Aid Boxes" },
          { name: "First Aid Cabinet" },
          { name: "First Aid Kit Refills" },
          { name: "Home & Workplace First Aid Kits" },
          { name: "Personal Use First Aid Kit" },
          { name: "Rapid Response First Aid Kits" },
          { name: "Sports First Aid Kits" },
          { name: "Travel First Aid Kit" },
          { name: "Vehicle First Aid Kit" },
          { name: "Workplace & Statutory First Aid Kits" },
        ],
      },
      {
        name: "Gauze Swabs",
        subcategories: [
          { name: "Gauze Swabs Non-Sterile" },
          { name: "Gauze Swabs Sterile" },
          { name: "X-Ray Detectable Gauze Swabs" },
        ],
      },
      {
        name: "Hot & Cold Therapy",
        subcategories: [
          { name: "Heat & Freeze Sprays" },
          { name: "Ice & Heat Packs" },
        ],
      },
      {
        name: "Medical Dressings",
        subcategories: [],
      },
      {
        name: "Medical Tapes",
        subcategories: [
          { name: "Microporous Tapes" },
          { name: "Adhesive Tape" },
          { name: "Detectable Tape" },
          { name: "Fabric Strapping Tapes" },
          { name: "Fixation Tape" },
          { name: "Foam Tape" },
          { name: "Kinesiology Sports Tapes" },
          { name: "Plastic Perforated Tape" },
          { name: "Plastic Tape" },
          { name: "Surgical Tape" },
          { name: "Zinc Oxide Tapes" },
          { name: "Zinc Tape" },
        ],
      },
      {
        name: "Plasters",
        subcategories: [
          { name: "Children’s Plasters" },
          { name: "Detectable Plasters" },
          { name: "Fabric Plasters" },
          { name: "Spot Plasters" },
          { name: "Washproof Plasters" },
          { name: "Waterproof Plasters" },
        ],
      },
      {
        name: "Resuscitation",
        subcategories: [{ name: "Resuscitation Face Shields" }],
      },
      {
        name: "Skin Preparation",
        subcategories: [{ name: "Cotton Tipped Applicators" }],
      },
      {
        name: "Supports & Braces",
        subcategories: [
          { name: "Ankle Supports & Braces" },
          { name: "Thumb Spica" },
        ],
      },
      {
        name: "Swabsticks",
        subcategories: [],
      },
      {
        name: "Temperature Management",
        subcategories: [{ name: "Thermal Foil Blankets" }],
      },
      {
        name: "Tourniquets",
        subcategories: [],
      },
      {
        name: "Wound Care",
        subcategories: [
          { name: "Absorbent Lint" },
          { name: "Adhesive Dressing" },
          { name: "Cotton Tipped Applicators" },
          { name: "Cotton Wool Balls" },
          { name: "Cotton Wool Roll" },
          { name: "Dressing Pads" },
          { name: "Gamgee Dressing" },
          { name: "Sterile Water" },
          { name: "Wound Dressing" },
          { name: "Wound Irrigation" },
          { name: "Wound Probe" },
        ],
      },
      {
        name: "Wound Closure",
        subcategories: [
          { name: "Skin Adhesive" },
          { name: "Skin Closure Strips" },
          { name: "Skin Stapler" },
          { name: "Staple Remover" },
        ],
      },
    ],
  },
  {
    name: "Furniture",
    subcategories: [
      {
        name: "Medical Couches",
        subcategories: [
          { name: "Podiatry Couches" },
          { name: "2 Section Medical Couch" },
          { name: "3 Section Medical Couch" },
          { name: "Bariatric 2 Section Plinth" },
          { name: "Bariatric 3 Section Plinth" },
          { name: "Examination Couch" },
          { name: "Gynaecology Chair" },
          { name: "Medical Couches Accessories" },
          { name: "Multi-Discipline Couch" },
          { name: "Phlebotomy Chair" },
          { name: "Practice Couch" },
          { name: "Treatment Chairs" },
        ],
      },
      {
        name: "Medical Waste Bins",
      },
      {
        name: "Mobile Screens",
      },
      {
        name: "Patient Bedding",
      },
      {
        name: "Pressure Care",
        subcategories: [
          { name: "Dynamic Mattresses" },
          { name: "Dynamic Seat Cushion" },
          { name: "Motion Sensors and Alarms" },
          { name: "Static Cushions" },
        ],
      },
      {
        name: "Screens",
      },
      {
        name: "Seating",
        subcategories: [
          { name: "Bariatric Chairs" },
          { name: "Examination Stool" },
          { name: "Operator Chairs" },
          { name: "Visitor & Patient Seating" },
        ],
      },
      {
        name: "Toilet & Bathroom Assistance",
        subcategories: [
          { name: "Bath & Shower Aids" },
          { name: "Toilet Aids" },
        ],
      },
      {
        name: "Trolleys",
        subcategories: [
          { name: "Clinical Trolley" },
          { name: "Medical Storage Trolley" },
          { name: "Surgical Trolley" },
        ],
      },
    ],
  },
  {
    name: "Gynaecology",
    subcategories: [
      {
        name: "Gynaecology Instruments",
        subcategories: [
          { name: "Cervical Dilators" },
          { name: "Gynaecology Forceps" },
          { name: "Gynaecology Scissors" },
          { name: "Instillaquill" },
          { name: "IUD Hook" },
          { name: "IUD Thread Retriever" },
          { name: "Pessaries" },
          { name: "Uterine Sound" },
          { name: "Vaginal Speculum" },
        ],
      },
      {
        name: "Gynaecology Procedure Packs",
        subcategories: [
          { name: "Implant Procedure Pack" },
          { name: "IUCD Pack" },
          { name: "Vaginal Examination Pack" },
          { name: "Vaginal Trainer" },
        ],
      },
      { name: "Lubricating Jelly" },
      { name: "Samplers & Sampling" },
      {
        name: "Single Use Instruments",
        subcategories: [{ name: "Gynaecology Forceps" }],
      },
    ],
  },
  {
    name: "Infection Control",
    subcategories: [
      {
        name: "Hand Hygiene",
        subcategories: [
          { name: "Hand Sanitisers" },
          { name: "Hand Moisturisers" },
          { name: "Hand Wash" },
        ],
      },
      { name: "Hard Surface Cleaners" },
      { name: "Infection Control Accessories" },
      { name: "Medical Device Disinfectant" },
      {
        name: "Patient Hygiene",
        subcategories: [
          { name: "Patient Hygiene Wipes" },
          { name: "Wash Mitts" },
        ],
      },
      {
        name: "Personal Protective Equipment (PPE)",
        subcategories: [
          { name: "Aprons" },
          { name: "Aprons Dispenser" },
          { name: "Beard Cover" },
          { name: "Drapes" },
          { name: "Face Masks" },
          { name: "Face Visors" },
          { name: "Gown Cover Up" },
          { name: "Isolation Gowns" },
          { name: "Overshoes" },
          { name: "Oversleeves" },
          { name: "Patient Examination Gowns" },
          { name: "Respirator Face Mask" },
          { name: "Surgical Gown Fully Impervious" },
          { name: "Surgical Gown Reinforced" },
          { name: "Surgical Gown Standard" },
          { name: "Surgical Gown Standard High Performance" },
          { name: "Surgical Gown Zonal Impervious" },
          { name: "Surgical Gown Zonal Reinforced" },
          { name: "Theatre Caps & Mobs" },
          { name: "Thumb Loop Fluid Protection Gowns" },
        ],
      },
      { name: "Surface Wipes" },
    ],
  },
  {
    name: "Minor Operations",
    subcategories: [
      {
        name: "Circumcisions",
        subcategories: [
          { name: "Circumcision Device" },
          { name: "Circumcision Packs" },
        ],
      },
      {
        name: "Dental Instruments",
        subcategories: [
          { name: "Cavity Preparation" },
          { name: "Dental Elevator" },
          { name: "Dental Elevator Retractor" },
          { name: "Dental Forceps" },
          { name: "Dental Mirror" },
          { name: "Dental Probe" },
          { name: "Dental Syringe" },
          { name: "Extracting Forceps" },
          { name: "Hygiene Scaler" },
          { name: "Luxation Instrument" },
        ],
      },
      { name: "Dental Procedure Packs" },
      {
        name: "ENT Instruments",
        subcategories: [
          { name: "Crocodile Forceps" },
          { name: "ENT Dressing Forceps" },
          { name: "ENT Probe" },
          { name: "Laryngeal Mirror" },
          { name: "Magills Forceps" },
          { name: "Mouth Prop" },
          { name: "Nasal Speculum" },
          { name: "Sinus Forceps" },
          { name: "Tracheal Dilating Forceps" },
          { name: "Wax Hook" },
        ],
      },
      {
        name: "Podiatry Instruments",
        subcategories: [
          { name: "Digit Tourniquets" },
          { name: "Emery Boards" },
          { name: "Foot Dresser" },
          { name: "Nail Cutter" },
          { name: "Nail Elevator" },
          { name: "Nail File" },
          { name: "Nail Splitter" },
          { name: "Podiatry Burs" },
          { name: "Podiatry Probe" },
          { name: "Podiatry Scissors" },
          { name: "Splinter Forceps" },
          { name: "Tubegauze Applicator" },
        ],
      },
      { name: "Podiatry Procedure Packs" },
      { name: "Silver Nitrate Applicator" },
      {
        name: "Single Use Instruments",
        subcategories: [
          { name: "Artery Forceps" },
          { name: "Bandage Scissors" },
          { name: "Dissecting Forceps" },
          { name: "Dissecting Packs" },
          { name: "Dissecting Scissors" },
          { name: "Dressing Forceps" },
          { name: "Dressing Scissors" },
          { name: "Needle Holder" },
          { name: "Plastic Forceps" },
          { name: "Probes" },
          { name: "Proctology" },
          { name: "Scalpels" },
          { name: "Scalpels Blade" },
          { name: "Sigmoidoscope" },
          { name: "Skin Hook Retractor" },
          { name: "Splinter Forceps" },
          { name: "Sponge Forceps" },
          { name: "Stitch Cutter" },
          { name: "Suture Scissors" },
          { name: "Tick Removal Forceps" },
          { name: "Tissue Forceps" },
          { name: "Vasectomy Forceps" },
          { name: "Volkmann Spoon" },
        ],
      },
      {
        name: "Single Use Procedure Packs",
        subcategories: [
          { name: "Biopsy Pack" },
          { name: "Catheterisation Pack" },
          { name: "Minor Operation Packs" },
          { name: "Podiatry Packs" },
          { name: "Suture Packs" },
          { name: "Suture Removal Packs" },
          { name: "Vasectomy Packs" },
        ],
      },
      { name: "Surgical Skin Marking" },
      {
        name: "Sutures",
        subcategories: [
          { name: "Coated Vicryl Sutures" },
          { name: "Ethilon Sutures" },
          { name: "Monocryl Sutures" },
          { name: "Permahand Silk Suture" },
          { name: "Prolene Suture" },
          { name: "Vicryl Rapide Suture" },
          { name: "Vicryl Suture" },
        ],
      },
      { name: "Wound Care Packs" },
    ],
  },
  {
    name: "Pharmaceuticals",
    subcategories: [
      { name: "Anaesthetic Lubricant" },
      { name: "Anaesthetics" },
      { name: "Analgesics" },
      { name: "Anaphylaxis" },
      { name: "Antibacterials" },
      { name: "Antibiotics" },
      { name: "Antidiarrheal Agents" },
      { name: "Antiemetics" },
      { name: "Antihemorrhagics" },
      { name: "Antihistamines" },
      { name: "Anti-inflammatory & Antirheumatic" },
      { name: "Antimalarials" },
      { name: "Antispasmodics" },
      { name: "Antithrombotic Agent" },
      { name: "Antivirals" },
      { name: "Asthma & COPD" },
      { name: "Bisphosphonates" },
      { name: "Cardiovascular & Heart" },
      { name: "Contraceptives" },
      { name: "Corticosteroids" },
      { name: "Dextrose" },
      { name: "Diabetes" },
      { name: "Dry Skin" },
      { name: "Dry Skin Care" },
      { name: "Enzyme Inhibitors" },
      { name: "Erectile Dysfunction" },
      { name: "Hormones" },
      { name: "HRT (Hormone Replacement Therapy)" },
      { name: "Hypnotics & Sedatives" },
      { name: "Infusion" },
      { name: "IV Drugs" },
      { name: "Labour & Birth" },
      { name: "Mental Health" },
      { name: "Minims & Eye Health" },
      { name: "NSAIDs" },
      { name: "Nutrition" },
      { name: "Opiate Antagonists" },
      {
        name: "Pain Relief",
        subcategories: [{ name: "Pain & Fever Relief" }],
      },
      { name: "Period Pain" },
      { name: "Prostap" },
      { name: "Proton Pump Inhibitors" },
      { name: "Purified Water" },
      { name: "Vaccines" },
      { name: "Vasoprotectives" },
    ],
  },
  {
    name: "Pharmacy",
    subcategories: [
      {
        "name": "Diabetes Management",
        "subcategories": [
          { "name": "Blood Glucose Meters" },
          { "name": "Blood Glucose Test Strips" },
          { "name": "Finger Prick" },
          { "name": "Safety Lancets" }
        ]
      },
      { "name": "Ear Care", "subcategories": [{ "name": "Ear Plugs" }] },
      { "name": "Enema kit" },
      {
        "name": "First Aid",
        "subcategories": [
          { "name": "Bandages" },
          { "name": "Medical Dressings" },
          { "name": "Medicated Plaster" },
          { "name": "Wound Care" }
        ]
      },
      { "name": "Heart Health" },
      {
        "name": "Intimate Health",
        "subcategories": [
          { "name": "Atrophy Relief" },
          { "name": "Vaginal Dilators" }
        ]
      },
      { "name": "Maternity Care", "subcategories": [{ "name": "Maternity Pads" }] },
      {
        "name": "Pain Relief",
        "subcategories": [{ "name": "Pain & Fever Relief" }]
      },
      { "name": "Weight Management" }
    ]
    ,
  },
  {
    name: "Sexual Health",
    subcategories: [
      {
        "name": "Condoms",
        "subcategories": [
          { "name": "Close Fit Condoms" },
          { "name": "Extra Safe Condoms" },
          { "name": "Female Condoms" },
          { "name": "Flavoured Condoms" },
          { "name": "Glow Condoms" },
          { "name": "King Size Condoms" },
          { "name": "Natural Condoms" },
          { "name": "Non Latex Condoms" },
          { "name": "Performance Enhancing Condoms" },
          { "name": "Regular Condoms" },
          { "name": "Ribbed & Dotted Condoms" },
          { "name": "Sensation Condoms" },
          { "name": "Themed Condoms" },
          { "name": "Ultra Thin Condoms" }
        ]
      },
      { "name": "Contraceptives" },
      {
        "name": "Personal Lubricants",
        "subcategories": [{ "name": "Water based lube" }]
      }
    ],
  },
  {
    name: "Uniforms",
    subcategories: [
      { name: "Drug Round Tabard" },
      { name: "Medical Uniform Accessories" },
      { name: "Mock Wrap Top" },
      { name: "Scrub Suit" },
      { name: "Scrubs Top" },
      { name: "Scrubs Trousers" },
      { name: "Tunic" },
    ],
  },
  {
    name: "Foot Care",
    subcategories: [{ name: "Antifungal" }],
  },
];
