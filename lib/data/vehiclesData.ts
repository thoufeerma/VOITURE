export interface VehicleSpecDetail {
  title: string;
  description: string;
}

export interface VehicleSpecSection {
  title: string;
  iconName: string;
  detailList: VehicleSpecDetail[];
}

export interface VehicleItem {
  id: string;
  slug: string;
  name: string;
  brand: string;
  variant: string;
  category: 'cars' | 'bikes';
  bodyType: string;
  price: string;
  priceNumeric: number;
  emiPerMonth: string;
  regYear: string;
  kmDriven: string;
  fuelType: string;
  transmission: string;
  regState: string;
  ownership: string;
  exteriorColor: string;
  interiorColor: string;
  location: string;
  featured: boolean;
  inStock: boolean;
  verified: boolean;
  heroImage: string;
  gallery: string[];
  keySpecs: {
    engine: string;
    power: string;
    torque: string;
    acceleration: string;
    topSpeed: string;
    drivetrain: string;
    seating: string;
    groundClearance?: string;
  };
  specifications: VehicleSpecSection[];
  similarCarIds: string[];
}

export const VEHICLES_DATA: Record<string, VehicleItem> = {
  // 1. Demo car matching https://cars.co.in/cars/3004 exactly
  '3004': {
    id: '3004',
    slug: 'mercedes-benz-gla-200-3004',
    name: 'Mercedes-Benz GLA 200',
    brand: 'Mercedes-Benz',
    variant: 'Progressive Line',
    category: 'cars',
    bodyType: 'Luxury Compact SUV',
    price: '₹ 39,25,000',
    priceNumeric: 3925000,
    emiPerMonth: '₹ 65,416',
    regYear: '2025',
    kmDriven: '16,200 km',
    fuelType: 'Petrol',
    transmission: '7G-DCT Dual Clutch Automatic',
    regState: 'DD',
    ownership: '1st Owner',
    exteriorColor: 'Polar White',
    interiorColor: 'Black ARTICO Leather / Microfibre',
    location: 'Mumbai Showroom',
    featured: true,
    inStock: true,
    verified: true,
    heroImage: 'https://cdn.bigboytoyz.com/products/3004/gallery/e5b23d79-1709-4bcd-9cd0-6c440470ad20.jpeg',
    gallery: [
      'https://cdn.bigboytoyz.com/products/3004/gallery/e5b23d79-1709-4bcd-9cd0-6c440470ad20.jpeg',
      'https://cdn.bigboytoyz.com/products/3004/gallery/f09ce478-c31b-4c83-9caa-0d8eb33766b9.jpg',
      'https://cdn.bigboytoyz.com/products/3004/gallery/873b865c-fadb-4788-a7f4-e392b41ac44d.jpeg',
      'https://cdn.bigboytoyz.com/products/3004/gallery/f72f441c-e41b-42d3-869c-fff894b08f97.jpeg',
      'https://cdn.bigboytoyz.com/products/3004/gallery/111004a4-27c0-4f5d-87a1-3b21b1610c64.jpeg',
      '/images/unsplash/listing_mercedes.jpg',
      '/images/unsplash/cat_luxury.jpg',
    ],
    keySpecs: {
      engine: '1,332 cc Turbocharged Inline-4',
      power: '161 BHP @ 5,500 RPM',
      torque: '250 Nm @ 1,620 - 4,000 RPM',
      acceleration: '8.7 sec (0-100 km/h)',
      topSpeed: '210 km/h',
      drivetrain: 'Front-Wheel Drive (FWD)',
      seating: '5 Seater',
      groundClearance: '213 mm',
    },
    specifications: [
      {
        title: 'Overview',
        iconName: 'overview',
        detailList: [
          { title: 'Vehicle Type', description: 'Luxury SUV / Crossover' },
          { title: 'Fuel Type', description: 'Petrol' },
          { title: 'Engine', description: '1.3L Turbocharged M282' },
          { title: 'Transmission', description: '7-Speed Dual Clutch (7G-DCT)' },
          { title: 'KM Driven', description: '16,200 km' },
          { title: 'Body Type', description: '5-Door SUV' },
          { title: 'Power Figure', description: '161 BHP @ 5500 RPM' },
          { title: 'Torque Figure', description: '250 Nm @ 1620 RPM' },
          { title: 'Drivetrain', description: 'Front-Wheel Drive' },
        ],
      },
      {
        title: 'Engine & Transmission',
        iconName: 'engine',
        detailList: [
          { title: 'Engine Displacement', description: '1332 cc' },
          { title: 'No. of Cylinders', description: '4 Cylinder Turbocharged' },
          { title: 'Valves per Cylinder', description: '4 Valves (DOHC)' },
          { title: 'Power Figure', description: '161 BHP @ 5500 RPM' },
          { title: 'Torque Figure', description: '250 Nm @ 1620-4000 RPM' },
          { title: 'Transmission', description: '7G-DCT Dual Clutch' },
          { title: 'Paddle Shifters', description: 'Yes, Steering Mounted' },
          { title: 'Drivetrain', description: 'Front-Wheel Drive' },
        ],
      },
      {
        title: 'Performance & Efficiency',
        iconName: 'performance',
        detailList: [
          { title: 'Acceleration 0-100 km/h', description: '8.7 seconds' },
          { title: 'Top Speed', description: '210 km/h' },
          { title: 'Driving Modes', description: 'DYNAMIC SELECT (Eco, Comfort, Sport, Individual)' },
          { title: 'Eco Start/Stop System', description: 'Yes, with Regenerative Braking' },
          { title: 'Fuel Tank Capacity', description: '43 Litres' },
          { title: 'Emission Standard', description: 'BS6 Phase 2 Compliant' },
        ],
      },
      {
        title: 'Exterior Equipment',
        iconName: 'exterior',
        detailList: [
          { title: 'Headlamps', description: 'High-Performance LED with Adaptive Highbeam Assist' },
          { title: 'DRLs', description: 'Integrated Signature LED Eyebrow DRLs' },
          { title: 'Glass Sunroof', description: 'Panoramic Sliding Sunroof with Electric Blind' },
          { title: 'Wheels & Tyres', description: '18-inch 5-Spoke Light Alloy Wheels' },
          { title: 'ORVM', description: 'Electric Folding, Heated & Auto-Dimming' },
          { title: 'Power Bootlid', description: 'EASY-PACK Tailgate with Foot Sensor Access' },
          { title: 'Roof Rails', description: 'Polished Aluminium Integrated Rails' },
          { title: 'Exhaust Tips', description: 'Twin Chrome Exhaust Trim Finishers' },
        ],
      },
      {
        title: 'Interior Equipment',
        iconName: 'interior',
        detailList: [
          { title: 'Instrument Cluster', description: '10.25-inch All-Digital Virtual Cockpit' },
          { title: 'Infotainment Display', description: '10.25-inch High-Resolution Touchscreen' },
          { title: 'Ambient Lighting', description: '64-Color Premium Ambient Cabin Lighting' },
          { title: 'Climate Control', description: 'THERMOTRONIC 2-Zone Automatic Climate Control' },
          { title: 'Keyless Start/Stop', description: 'KEYLESS-GO Comfort Package' },
          { title: 'Wireless Charging', description: 'Qi Wireless Fast Charger in Front Console' },
          { title: 'Steering Wheel', description: 'Multifunction Nappa Leather Sports Steering' },
          { title: 'Autodimming IRVM', description: 'Frameless Electrochromic Rear-View Mirror' },
        ],
      },
      {
        title: 'Seats & Upholstery',
        iconName: 'seats',
        detailList: [
          { title: 'Upholstery', description: 'ARTICO Man-Made Leather & DINAMICA Microfibre' },
          { title: 'Driver Seat', description: '12-Way Power Adjustable with 3 Memory Presets' },
          { title: 'Co-Driver Seat', description: 'Power Adjustable with Memory Function' },
          { title: 'Lumbar Support', description: '4-Way Electropneumatic Lumbar Support' },
          { title: 'Underthigh Extension', description: 'Manual Mechanical Cushion Extension' },
          { title: 'Rear Seats', description: '40:20:40 Split-Folding with Center Armrest & Cup Holders' },
        ],
      },
      {
        title: 'Entertainment & Connectivity',
        iconName: 'entertainment',
        detailList: [
          { title: 'Infotainment System', description: 'MBUX Gen 2 with "Hey Mercedes" AI Voice Assistant' },
          { title: 'Smartphone Integration', description: 'Wireless Apple CarPlay & Android Auto' },
          { title: 'Audio System', description: 'Mercedes-Benz Advanced Sound System (225W)' },
          { title: 'Navigation', description: '3D Hard-Disk Navigation with Live Traffic' },
          { title: 'USB Ports', description: '4 x Type-C Fast Charging Ports' },
          { title: 'Connected Car Tech', description: 'Mercedes me connect with Remote Geofencing & Pre-Cool' },
        ],
      },
      {
        title: 'Safety Equipments',
        iconName: 'safety',
        detailList: [
          { title: 'Airbags', description: '7 Airbags (Front, Side, Curtain & Driver Knee)' },
          { title: 'Braking System', description: 'ABS, EBD, Emergency Brake Assist (BA)' },
          { title: 'Active Safety', description: 'Active Brake Assist with Pedestrian Recognition' },
          { title: 'Driver Alertness', description: 'ATTENTION ASSIST Fatigue Detection' },
          { title: 'Parking Aid', description: 'Active Parking Assist with PARKTRONIC & Reversing Camera' },
          { title: 'Stability Control', description: 'Electronic Stability Program (ESP) & Traction Control' },
          { title: 'Tyre Pressure', description: 'Active TPMS with Individual Wheel PSI readout' },
          { title: 'Child Safety', description: 'ISOFIX Child Seat Mounts on Outer Rear Seats' },
        ],
      },
      {
        title: 'Dimensions & Capacities',
        iconName: 'dimensions',
        detailList: [
          { title: 'Overall Length', description: '4,410 mm' },
          { title: 'Overall Width', description: '1,834 mm' },
          { title: 'Overall Height', description: '1,611 mm' },
          { title: 'Wheelbase', description: '2,729 mm' },
          { title: 'Boot Space', description: '425 Litres (expandable to 1,420 L)' },
          { title: 'Kerb Weight', description: '1,490 kg' },
        ],
      },
      {
        title: 'Warranty & Inspection Package',
        iconName: 'warranty',
        detailList: [
          { title: 'Voiture Quality Inspection', description: '200-Point Comprehensive Inspection: PASSED' },
          { title: 'Manufacturer Warranty', description: 'Valid up to 3 Years Unlimited Kilometers' },
          { title: 'Engine & Gearbox Warranty', description: '1 Year Voiture Platinum Powertrain Warranty Included' },
          { title: 'Roadside Assistance', description: '24x7 Pan-India Complimentary RSA' },
          { title: 'Clean Paperwork', description: '100% Verified RTO NOC & Single Owner History' },
        ],
      },
    ],
    similarCarIds: ['mercedes-s-class', 'bmw-m4', 'range-rover-sport'],
  },

  // 2. Mercedes-Benz S-Class
  'mercedes-s-class': {
    id: 'mercedes-s-class',
    slug: 'mercedes-benz-s-class-s450',
    name: 'Mercedes-Benz S-Class S 450',
    brand: 'Mercedes-Benz',
    variant: 'S 450 4MATIC Luxury Limousine',
    category: 'cars',
    bodyType: 'Flagship Luxury Sedan',
    price: '₹ 1.45 Cr',
    priceNumeric: 14500000,
    emiPerMonth: '₹ 2,42,000',
    regYear: '2023',
    kmDriven: '12,000 km',
    fuelType: 'Petrol',
    transmission: '9G-TRONIC Automatic',
    regState: 'KL',
    ownership: '1st Owner',
    exteriorColor: 'Onyx Black Metallic',
    interiorColor: 'Exclusive Nappa Sienna Brown Leather',
    location: 'Kochi Showroom',
    featured: true,
    inStock: true,
    verified: true,
    heroImage: '/images/hires/mercedes_s_class.jpg',
    gallery: [
      '/images/hires/mercedes_s_class.jpg',
      '/images/hires/cat_luxury.jpg',
      '/images/hires/exp_taillight.jpg',
      '/images/hires/trust_grille.jpg',
      '/images/unsplash/listing_mercedes.jpg',
    ],
    keySpecs: {
      engine: '3.0L Turbocharged Inline-6 with EQ Boost',
      power: '367 BHP @ 5,500 - 6,100 RPM',
      torque: '500 Nm @ 1,600 - 4,500 RPM',
      acceleration: '5.1 sec (0-100 km/h)',
      topSpeed: '250 km/h (Electronically Limited)',
      drivetrain: '4MATIC All-Wheel Drive',
      seating: '5 Seater (Executive Rear Package)',
      groundClearance: '130 mm (AIRMATIC Adjustable)',
    },
    specifications: [
      {
        title: 'Overview',
        iconName: 'overview',
        detailList: [
          { title: 'Vehicle Type', description: 'Flagship Luxury Sedan' },
          { title: 'Engine', description: '3.0L Twin-Scroll Turbo Inline-6 Mild Hybrid' },
          { title: 'Transmission', description: '9G-TRONIC 9-Speed Automatic' },
          { title: 'KM Driven', description: '12,000 km' },
          { title: 'Drivetrain', description: '4MATIC Permanent All-Wheel Drive' },
        ],
      },
      {
        title: 'Interior & Executive Comfort',
        iconName: 'interior',
        detailList: [
          { title: 'OLED Display', description: '12.8-inch Central OLED Touchscreen with Haptic Feedback' },
          { title: 'Sound System', description: 'Burmester® 3D Surround Sound with 15 Speakers' },
          { title: 'Rear Seating', description: 'Chauffeur Package with Reclining Footrest & Hot Stone Massage' },
          { title: 'Sunroof', description: 'Panoramic Dual-Pane Sliding Glass Sunroof' },
        ],
      },
      {
        title: 'Chassis & Suspension',
        iconName: 'performance',
        detailList: [
          { title: 'Suspension', description: 'AIRMATIC Air Suspension with Continuously Adaptive Damping' },
          { title: 'Rear Axle Steering', description: 'Up to 10° Counter-Steering for 10.5m Turning Circle' },
        ],
      },
    ],
    similarCarIds: ['3004', 'bmw-m4', 'range-rover-sport'],
  },

  // 3. BMW M4
  'bmw-m4': {
    id: 'bmw-m4',
    slug: 'bmw-m4-competition',
    name: 'BMW M4 Competition',
    brand: 'BMW',
    variant: 'M xDrive Coupe',
    category: 'cars',
    bodyType: 'High-Performance Sports Coupe',
    price: '₹ 1.25 Cr',
    priceNumeric: 12500000,
    emiPerMonth: '₹ 2,08,000',
    regYear: '2022',
    kmDriven: '8,000 km',
    fuelType: 'Petrol',
    transmission: '8-Speed M Steptronic with Drivelogic',
    regState: 'KA',
    ownership: '1st Owner',
    exteriorColor: 'Isle of Man Green / Toronto Red',
    interiorColor: 'Kyalami Orange / Black Full Merino Leather',
    location: 'Bangalore Showroom',
    featured: true,
    inStock: true,
    verified: true,
    heroImage: '/images/hires/bmw_m4.jpg',
    gallery: [
      '/images/hires/bmw_m4.jpg',
      '/images/hires/cat_sports.jpg',
      '/images/hires/sell_porsche.jpg',
      '/images/unsplash/listing_bmw_m4.jpg',
    ],
    keySpecs: {
      engine: '3.0L BMW M TwinPower Turbo Inline-6 (S58)',
      power: '503 BHP @ 6,250 RPM',
      torque: '650 Nm @ 2,750 - 5,500 RPM',
      acceleration: '3.5 sec (0-100 km/h)',
      topSpeed: '290 km/h (M Driver Package)',
      drivetrain: 'M xDrive AWD with 2WD Drift Mode',
      seating: '4 Seater (Carbon Bucket Seats)',
    },
    specifications: [
      {
        title: 'Engine & Performance',
        iconName: 'engine',
        detailList: [
          { title: 'Engine Code', description: 'S58 Twin-Turbocharged 3.0L' },
          { title: 'Power', description: '503 HP / 510 PS' },
          { title: 'Transmission', description: '8-Speed M Steptronic with Drivelogic' },
          { title: '0-100 km/h', description: '3.5 seconds' },
        ],
      },
      {
        title: 'M Performance Equipment',
        iconName: 'performance',
        detailList: [
          { title: 'Carbon Package', description: 'Carbon Fibre Reinforced Plastic (CFRP) Roof & Mirrors' },
          { title: 'Brakes', description: 'M Compound Brakes with Red High-Gloss Calipers' },
          { title: 'Differential', description: 'Active M Differential with Multi-Plate Clutch' },
        ],
      },
    ],
    similarCarIds: ['3004', 'mercedes-s-class', 'range-rover-sport'],
  },

  // 4. Range Rover Sport
  'range-rover-sport': {
    id: 'range-rover-sport',
    slug: 'range-rover-sport-dynamic-hse',
    name: 'Range Rover Sport',
    brand: 'Land Rover',
    variant: 'Dynamic HSE D350 AWD',
    category: 'cars',
    bodyType: 'Flagship Luxury All-Terrain SUV',
    price: '₹ 1.35 Cr',
    priceNumeric: 13500000,
    emiPerMonth: '₹ 2,25,000',
    regYear: '2023',
    kmDriven: '15,000 km',
    fuelType: 'Diesel',
    transmission: '8-Speed Automatic with Terrain Response 2',
    regState: 'DL',
    ownership: '1st Owner',
    exteriorColor: 'Carpathian Grey Metallic',
    interiorColor: 'Ebony / Deep Garnet Semi-Aniline Leather',
    location: 'Delhi NCR Showroom',
    featured: true,
    inStock: true,
    verified: true,
    heroImage: '/images/hires/range_rover_sport.jpg',
    gallery: [
      '/images/hires/range_rover_sport.jpg',
      '/images/hires/cat_suv.jpg',
      '/images/hires/cand1.jpg',
      '/images/unsplash/listing_range_rover.jpg',
    ],
    keySpecs: {
      engine: '3.0L 6-Cylinder Twin-Turbocharged Ingenium Diesel',
      power: '346 BHP @ 4,000 RPM',
      torque: '700 Nm @ 1,500 - 3,000 RPM',
      acceleration: '5.9 sec (0-100 km/h)',
      topSpeed: '234 km/h',
      drivetrain: 'Intelligent All-Wheel Drive (iAWD)',
      seating: '5 Seater',
      groundClearance: '281 mm (Off-Road Air Height)',
    },
    specifications: [
      {
        title: 'Terrain & Off-Road Capability',
        iconName: 'performance',
        detailList: [
          { title: 'Terrain Response', description: 'Terrain Response 2 with Dynamic Program' },
          { title: 'Wading Depth', description: '900 mm with Wade Sensing Ultrasound' },
          { title: 'Suspension', description: 'Dynamic Air Suspension with Switchable Volume Springs' },
        ],
      },
    ],
    similarCarIds: ['3004', 'mercedes-s-class', 'bmw-m4'],
  },

  // 5. Ducati Panigale V4
  'ducati-panigale-v4': {
    id: 'ducati-panigale-v4',
    slug: 'ducati-panigale-v4-s',
    name: 'Ducati Panigale V4 S',
    brand: 'Ducati',
    variant: 'V4 S Corse Racing Trim',
    category: 'bikes',
    bodyType: 'Superbike / Track Monster',
    price: '₹ 28.5 L',
    priceNumeric: 2850000,
    emiPerMonth: '₹ 47,500',
    regYear: '2022',
    kmDriven: '4,200 km',
    fuelType: 'Petrol',
    transmission: '6-Speed with Ducati Quick Shift (DQS) EVO 2',
    regState: 'MH',
    ownership: '1st Owner',
    exteriorColor: 'Ducati Red with Racing Graphics',
    interiorColor: 'Alcantara Racing Monoposto Saddle',
    location: 'Mumbai Showroom',
    featured: true,
    inStock: true,
    verified: true,
    heroImage: '/images/hires/ducati_panigale.jpg',
    gallery: [
      '/images/hires/ducati_panigale.jpg',
      '/images/hires/cat_motorcycle.jpg',
      '/images/unsplash/listing_ducati.jpg',
    ],
    keySpecs: {
      engine: '1,103 cc Desmosedici Stradale 90° V4',
      power: '215.5 BHP @ 13,000 RPM',
      torque: '123.6 Nm @ 9,500 RPM',
      acceleration: '2.9 sec (0-100 km/h)',
      topSpeed: '305+ km/h',
      drivetrain: 'Chain Final Drive',
      seating: 'Single Seat Monoposto',
    },
    specifications: [
      {
        title: 'Electronics & Suspension',
        iconName: 'performance',
        detailList: [
          { title: 'Suspension', description: 'Öhlins NPX 25/30 Pressurized Fork with Smart EC 2.0' },
          { title: 'Electronics', description: 'Bosch 6-Axis IMU with Cornering ABS EVO, DTC EVO 3' },
          { title: 'Wings', description: 'Aerodynamic Double-Profile Carbon Winglets (37kg downforce @ 300km/h)' },
        ],
      },
    ],
    similarCarIds: ['bmw-m4', '3004'],
  },
};

export function getVehicleById(id: string): VehicleItem {
  return VEHICLES_DATA[id] || VEHICLES_DATA['3004'];
}

export function getAllVehicleIds(): string[] {
  return Object.keys(VEHICLES_DATA);
}
