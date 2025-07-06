export const curatedNotes = {
  mathematics: {
    "Real Numbers": [
      {
        id: "math_real_1",
        title: "Properties of Real Numbers",
        content: "Real numbers include rational and irrational numbers. Key properties include closure, commutativity, associativity, and distributivity. The decimal expansion of rational numbers is either terminating or non-terminating repeating.",
        source: "Khan Academy",
        sourceUrl: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:rational-exponents-radicals",
        difficulty: "Basic",
        tags: ["properties", "rational", "irrational"]
      },
      {
        id: "math_real_2",
        title: "Euclid's Division Algorithm",
        content: "For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b. This is fundamental for finding HCF using the division method.",
        source: "Byju's",
        sourceUrl: "https://byjus.com/maths/euclids-division-algorithm/",
        difficulty: "Intermediate",
        tags: ["algorithm", "division", "hcf"]
      },
      {
        id: "math_real_3",
        title: "Fundamental Theorem of Arithmetic",
        content: "Every composite number can be expressed as a product of primes, and this factorization is unique (except for the order of factors). This theorem is the basis for finding LCM and HCF.",
        source: "NCERT",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jemh101.pdf",
        difficulty: "Intermediate",
        tags: ["primes", "factorization", "unique"]
      }
    ],
    "Polynomials": [
      {
        id: "math_poly_1",
        title: "Degree and Types of Polynomials",
        content: "Polynomials are classified by degree: linear (degree 1), quadratic (degree 2), cubic (degree 3). The degree is the highest power of the variable. Zero polynomial has no degree defined.",
        source: "Vedantu",
        sourceUrl: "https://www.vedantu.com/maths/polynomials",
        difficulty: "Basic",
        tags: ["degree", "classification", "types"]
      },
      {
        id: "math_poly_2",
        title: "Factor Theorem and Remainder Theorem",
        content: "If p(x) is divided by (x-a), remainder is p(a). If p(a) = 0, then (x-a) is a factor of p(x). These theorems help in factorization and finding roots.",
        source: "Toppr",
        sourceUrl: "https://www.toppr.com/guides/maths/polynomials/",
        difficulty: "Intermediate",
        tags: ["factor", "remainder", "theorem"]
      },
      {
        id: "math_poly_3",
        title: "Relationship between Zeros and Coefficients",
        content: "For a quadratic polynomial ax² + bx + c, if α and β are zeros, then: Sum of zeros = -b/a, Product of zeros = c/a. This helps in forming polynomials when zeros are given.",
        source: "Unacademy",
        sourceUrl: "https://unacademy.com/content/cbse-class-10/maths/polynomials/",
        difficulty: "Advanced",
        tags: ["zeros", "coefficients", "relationship"]
      }
    ],
    "Pair of Linear Equations in Two Variables": [
      {
        id: "math_linear_1",
        title: "Graphical Method",
        content: "Two linear equations can be solved graphically by plotting both lines. If lines intersect at one point (consistent), coincide (infinitely many solutions), or are parallel (inconsistent).",
        source: "Khan Academy",
        sourceUrl: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations",
        difficulty: "Basic",
        tags: ["graphical", "consistent", "inconsistent"]
      },
      {
        id: "math_linear_2", 
        title: "Substitution and Elimination Methods",
        content: "Substitution: solve one equation for a variable, substitute in the other. Elimination: multiply equations to make coefficients equal, then add/subtract to eliminate a variable.",
        source: "Byju's",
        sourceUrl: "https://byjus.com/maths/pair-of-linear-equations-in-two-variables/",
        difficulty: "Intermediate",
        tags: ["substitution", "elimination", "methods"]
      }
    ],
    "Quadratic Equations": [
      {
        id: "math_quad_1",
        title: "Standard Form and Solutions",
        content: "A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0. Solutions can be found using factorization, completing the square, or the quadratic formula: x = (-b ± √(b²-4ac))/2a",
        source: "Khan Academy",
        sourceUrl: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics-multiplying-factoring",
        difficulty: "Intermediate",
        tags: ["standard form", "quadratic formula", "solutions"]
      },
      {
        id: "math_quad_2",
        title: "Nature of Roots (Discriminant)",
        content: "The discriminant Δ = b² - 4ac determines nature of roots: Δ > 0 (two distinct real roots), Δ = 0 (one repeated real root), Δ < 0 (no real roots).",
        source: "Vedantu",
        sourceUrl: "https://www.vedantu.com/maths/quadratic-equations",
        difficulty: "Advanced",
        tags: ["discriminant", "roots", "nature"]
      }
    ],
    "Arithmetic Progressions": [
      {
        id: "math_ap_1",
        title: "General Term and Sum Formula",
        content: "In an AP with first term 'a' and common difference 'd': nth term = a + (n-1)d, Sum of n terms = n/2[2a + (n-1)d] = n/2[first term + last term]",
        source: "NCERT",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jemh105.pdf",
        difficulty: "Basic",
        tags: ["general term", "sum formula", "AP"]
      },
      {
        id: "math_ap_2",
        title: "Properties of Arithmetic Progression",
        content: "If a, b, c are in AP, then b = (a+c)/2 (b is arithmetic mean). The sum of terms equidistant from beginning and end is constant in an AP.",
        source: "Toppr",
        sourceUrl: "https://www.toppr.com/guides/maths/arithmetic-progressions/",
        difficulty: "Intermediate",
        tags: ["properties", "arithmetic mean", "equidistant"]
      }
    ],
    "Triangles": [
      {
        id: "math_tri_1",
        title: "Similarity Criteria",
        content: "Two triangles are similar if: (1) AAA - all angles equal, (2) SSS - all sides proportional, (3) SAS - two sides proportional and included angle equal. Similar triangles have proportional corresponding sides.",
        source: "Unacademy",
        sourceUrl: "https://unacademy.com/content/cbse-class-10/maths/triangles/",
        difficulty: "Intermediate",
        tags: ["similarity", "criteria", "proportional"]
      },
      {
        id: "math_tri_2",
        title: "Pythagoras Theorem and Its Converse",
        content: "In a right triangle, c² = a² + b² where c is hypotenuse. Converse: If c² = a² + b² in a triangle, then it's a right triangle. Used to check if a triangle is right-angled.",
        source: "Khan Academy",
        sourceUrl: "https://www.khanacademy.org/math/geometry/hs-geo-trig",
        difficulty: "Basic",
        tags: ["pythagoras", "right triangle", "converse"]
      }
    ],
    "Coordinate Geometry": [
      {
        id: "math_coord_1",
        title: "Distance and Section Formula",
        content: "Distance between (x₁,y₁) and (x₂,y₂) = √[(x₂-x₁)² + (y₂-y₁)²]. Section formula for point dividing line segment in ratio m:n internally: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
        source: "Vedantu",
        sourceUrl: "https://www.vedantu.com/maths/coordinate-geometry",
        difficulty: "Intermediate",
        tags: ["distance", "section formula", "coordinates"]
      },
      {
        id: "math_coord_2",
        title: "Area of Triangle",
        content: "Area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃) = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|. If area = 0, points are collinear.",
        source: "Byju's",
        sourceUrl: "https://byjus.com/maths/coordinate-geometry/",
        difficulty: "Advanced",
        tags: ["area", "triangle", "collinear"]
      }
    ],
    "Introduction to Trigonometry": [
      {
        id: "math_trig_1",
        title: "Trigonometric Ratios",
        content: "For angle θ in right triangle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. Also: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ",
        source: "Khan Academy",
        sourceUrl: "https://www.khanacademy.org/math/trigonometry",
        difficulty: "Basic",
        tags: ["ratios", "sine", "cosine", "tangent"]
      },
      {
        id: "math_trig_2",
        title: "Trigonometric Identities",
        content: "Fundamental identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ. These are used to simplify trigonometric expressions.",
        source: "NCERT",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jemh108.pdf",
        difficulty: "Intermediate",
        tags: ["identities", "fundamental", "simplification"]
      }
    ],
    "Circles": [
      {
        id: "math_circle_1",
        title: "Tangent Properties",
        content: "A tangent to a circle is perpendicular to the radius at point of contact. Two tangents from external point are equal in length. Angle between tangent and chord equals angle in alternate segment.",
        source: "Unacademy",
        sourceUrl: "https://unacademy.com/content/cbse-class-10/maths/circles/",
        difficulty: "Intermediate",
        tags: ["tangent", "perpendicular", "equal lengths"]
      }
    ],
    "Areas Related to Circles": [
      {
        id: "math_area_1",
        title: "Area and Circumference Formulas",
        content: "Circle: Area = πr², Circumference = 2πr. Sector: Area = (θ/360°) × πr², Arc length = (θ/360°) × 2πr. Segment area = Sector area - Triangle area",
        source: "Byju's",
        sourceUrl: "https://byjus.com/maths/areas-related-to-circles/",
        difficulty: "Basic",
        tags: ["area", "circumference", "sector", "segment"]
      }
    ],
    "Surface Areas and Volumes": [
      {
        id: "math_vol_1",
        title: "Formulas for 3D Shapes",
        content: "Cube: Volume = a³, Surface Area = 6a². Cuboid: Volume = lbh, Surface Area = 2(lb+bh+hl). Cylinder: Volume = πr²h, Surface Area = 2πr(r+h). Sphere: Volume = (4/3)πr³, Surface Area = 4πr²",
        source: "Vedantu",
        sourceUrl: "https://www.vedantu.com/maths/surface-areas-and-volumes",
        difficulty: "Basic",
        tags: ["volume", "surface area", "3D shapes"]
      }
    ],
    "Statistics": [
      {
        id: "math_stat_1",
        title: "Measures of Central Tendency",
        content: "Mean = Sum of observations/Number of observations. For grouped data: Mean = Σfixi/Σfi. Median is middle value when arranged in order. Mode is most frequently occurring value.",
        source: "Khan Academy",
        sourceUrl: "https://www.khanacademy.org/math/statistics-probability",
        difficulty: "Basic",
        tags: ["mean", "median", "mode", "central tendency"]
      }
    ],
    "Probability": [
      {
        id: "math_prob_1",
        title: "Basic Probability Concepts",
        content: "Probability = Number of favorable outcomes/Total number of outcomes. Range: 0 ≤ P(E) ≤ 1. P(sure event) = 1, P(impossible event) = 0. P(not E) = 1 - P(E)",
        source: "NCERT",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jemh115.pdf",
        difficulty: "Basic",
        tags: ["probability", "favorable outcomes", "range"]
      }
    ]
  },
  science: {
    physics: {
      "Light - Reflection and Refraction": [
        {
          id: "phy_light_1",
          title: "Laws of Reflection",
          content: "1. The incident ray, reflected ray, and normal at the point of incidence all lie in the same plane. 2. The angle of incidence equals the angle of reflection. These laws apply to all reflecting surfaces.",
          source: "Physics Classroom",
          sourceUrl: "https://www.physicsclassroom.com/class/refln",
          difficulty: "Basic",
          tags: ["reflection", "laws", "mirrors"]
        },
        {
          id: "phy_light_2",
          title: "Snell's Law of Refraction",
          content: "When light passes from one medium to another, n₁sin θ₁ = n₂sin θ₂, where n is refractive index and θ is angle with normal. Light bends towards normal when entering denser medium.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/physics/geometric-optics",
          difficulty: "Intermediate",
          tags: ["refraction", "snells law", "refractive index"]
        },
        {
          id: "phy_light_3",
          title: "Spherical Mirrors and Lens Formula",
          content: "Mirror formula: 1/f = 1/v + 1/u, where f=focal length, v=image distance, u=object distance. Magnification m = -v/u = height of image/height of object. Same formula applies to lenses.",
          source: "Vedantu",
          sourceUrl: "https://www.vedantu.com/physics/light-reflection-and-refraction",
          difficulty: "Advanced",
          tags: ["mirrors", "lenses", "formula", "magnification"]
        }
      ],
      "The Human Eye and the Colourful World": [
        {
          id: "phy_eye_1",
          title: "Structure and Function of Human Eye",
          content: "Eye parts: Cornea (refraction), Pupil (controls light entry), Lens (accommodation), Retina (image formation). Near point = 25cm, Far point = infinity for normal eye.",
          source: "Biology Online",
          sourceUrl: "https://www.biologyonline.com/dictionary/human-eye",
          difficulty: "Basic",
          tags: ["eye structure", "accommodation", "near point", "far point"]
        },
        {
          id: "phy_eye_2",
          title: "Defects of Vision and Correction",
          content: "Myopia (short-sightedness): corrected by concave lens. Hypermetropia (long-sightedness): corrected by convex lens. Presbyopia (old age): corrected by bifocal lens.",
          source: "NCERT",
          sourceUrl: "https://ncert.nic.in/textbook/pdf/jesc102.pdf",
          difficulty: "Intermediate",
          tags: ["myopia", "hypermetropia", "presbyopia", "correction"]
        },
        {
          id: "phy_eye_3",
          title: "Dispersion and Scattering of Light",
          content: "White light splits into 7 colors (VIBGYOR) when passed through prism - called dispersion. Blue light scatters more than red (Rayleigh scattering) - why sky appears blue and sun appears red at sunset.",
          source: "Physics Classroom",
          sourceUrl: "https://www.physicsclassroom.com/class/light",
          difficulty: "Intermediate",
          tags: ["dispersion", "VIBGYOR", "scattering", "blue sky"]
        }
      ],
      "Electricity": [
        {
          id: "phy_elec_1",
          title: "Ohm's Law and Resistance",
          content: "Ohm's Law: V = IR, where V is voltage, I is current, and R is resistance. Resistance depends on material, length, cross-sectional area, and temperature. R = ρL/A where ρ is resistivity.",
          source: "All About Circuits",
          sourceUrl: "https://www.allaboutcircuits.com/textbook/direct-current/",
          difficulty: "Basic",
          tags: ["ohms law", "resistance", "current"]
        },
        {
          id: "phy_elec_2",
          title: "Series and Parallel Circuits",
          content: "Series: Same current, voltages add up, R_total = R₁ + R₂ + R₃. Parallel: Same voltage, currents add up, 1/R_total = 1/R₁ + 1/R₂ + 1/R₃. Most household appliances use parallel connection.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/physics/circuits-topic",
          difficulty: "Intermediate",
          tags: ["series", "parallel", "circuits", "household"]
        },
        {
          id: "phy_elec_3",
          title: "Electric Power and Energy",
          content: "Power P = VI = I²R = V²/R (in watts). Electrical energy = P × t (in watt-hours or kWh). 1 kWh = 1 unit of electricity = 3.6 × 10⁶ J",
          source: "Byju's",
          sourceUrl: "https://byjus.com/physics/electric-power/",
          difficulty: "Intermediate",
          tags: ["power", "energy", "kWh", "electricity bill"]
        }
      ],
      "Magnetic Effects of Electric Current": [
        {
          id: "phy_mag_1",
          title: "Magnetic Field and Field Lines",
          content: "Magnetic field lines emerge from North pole and merge at South pole. They never intersect. Strength indicated by closeness of field lines. Earth acts like a huge magnet with magnetic north and south poles.",
          source: "Physics Classroom",
          sourceUrl: "https://www.physicsclassroom.com/class/estatics",
          difficulty: "Basic",
          tags: ["magnetic field", "field lines", "north pole", "south pole"]
        },
        {
          id: "phy_mag_2",
          title: "Electromagnetic Induction",
          content: "When magnetic field through a coil changes, EMF is induced (Faraday's law). Direction given by Lenz's law. Basis of generators (mechanical to electrical energy) and motors (electrical to mechanical energy).",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields",
          difficulty: "Advanced",
          tags: ["electromagnetic induction", "faraday", "lenz", "generator", "motor"]
        }
      ]
    },
    chemistry: {
      "Acids, Bases and Salts": [
        {
          id: "chem_acid_1",
          title: "pH Scale and Indicators",
          content: "pH scale ranges from 0-14. Acids have pH < 7, bases have pH > 7, neutral solutions have pH = 7. Natural indicators like litmus, turmeric, and red cabbage change color in acidic/basic solutions.",
          source: "Chemguide",
          sourceUrl: "https://www.chemguide.co.uk/physical/acidbaseeqia/",
          difficulty: "Basic",
          tags: ["pH", "indicators", "acids", "bases"]
        },
        {
          id: "chem_acid_2",
          title: "Reactions of Acids and Bases",
          content: "Acid + Base → Salt + Water (neutralization). Acid + Metal → Salt + Hydrogen gas. Acid + Metal carbonate → Salt + Water + CO₂. Base + Non-metal oxide → Salt + Water",
          source: "NCERT",
          sourceUrl: "https://ncert.nic.in/textbook/pdf/jesc111.pdf",
          difficulty: "Intermediate",
          tags: ["neutralization", "reactions", "salt formation"]
        },
        {
          id: "chem_acid_3",
          title: "Important Acids, Bases and Salts",
          content: "Common acids: HCl (stomach acid), H₂SO₄ (battery acid), HNO₃ (fertilizers). Common bases: NaOH (soap making), Ca(OH)₂ (whitewashing). Important salts: NaCl (common salt), NaHCO₃ (baking soda), CaSO₄.2H₂O (plaster of paris)",
          source: "Byju's",
          sourceUrl: "https://byjus.com/chemistry/acids-bases-salts/",
          difficulty: "Intermediate",
          tags: ["common acids", "common bases", "important salts", "uses"]
        }
      ],
      "Metals and Non-metals": [
        {
          id: "chem_metal_1",
          title: "Properties and Reactivity Series",
          content: "Metals are malleable, ductile, good conductors. Non-metals are brittle, poor conductors. Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au",
          source: "BBC Bitesize",
          sourceUrl: "https://www.bbc.co.uk/bitesize/topics/zstp34j",
          difficulty: "Basic",
          tags: ["properties", "reactivity", "metals"]
        },
        {
          id: "chem_metal_2",
          title: "Extraction of Metals",
          content: "Metal extraction depends on reactivity. Highly reactive metals (K, Na, Ca, Mg, Al): electrolytic reduction. Moderately reactive (Zn, Fe, Pb): reduction with carbon. Less reactive (Hg, Cu): roasting. Least reactive (Ag, Au): found free in nature.",
          source: "Vedantu",
          sourceUrl: "https://www.vedantu.com/chemistry/metals-and-non-metals",
          difficulty: "Advanced",
          tags: ["extraction", "electrolytic", "reduction", "roasting"]
        },
        {
          id: "chem_metal_3",
          title: "Corrosion and Prevention",
          content: "Corrosion is oxidation of metals (rusting of iron: 4Fe + 3O₂ + 2H₂O → 2Fe₂O₃.H₂O). Prevention methods: painting, oiling, galvanizing (zinc coating), alloying (stainless steel), electroplating.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/chemistry",
          difficulty: "Intermediate",
          tags: ["corrosion", "rusting", "prevention", "galvanizing"]
        }
      ],
      "Carbon and its Compounds": [
        {
          id: "chem_carbon_1",
          title: "Bonding in Carbon Compounds",
          content: "Carbon has 4 valence electrons, forms 4 covalent bonds. Can form single, double, triple bonds. Shows catenation (self-linking) and tetravalency. Forms chains, rings, and branched structures.",
          source: "NCERT",
          sourceUrl: "https://ncert.nic.in/textbook/pdf/jesc113.pdf",
          difficulty: "Basic",
          tags: ["covalent", "tetravalency", "catenation", "bonding"]
        },
        {
          id: "chem_carbon_2",
          title: "Hydrocarbons and Functional Groups",
          content: "Saturated hydrocarbons (alkanes): C-C single bonds, general formula CₙH₂ₙ₊₂. Unsaturated hydrocarbons: alkenes (C=C), alkynes (C≡C). Functional groups: -OH (alcohol), -COOH (carboxylic acid), -CHO (aldehyde), -CO- (ketone)",
          source: "Byju's",
          sourceUrl: "https://byjus.com/chemistry/carbon-and-its-compounds/",
          difficulty: "Intermediate",
          tags: ["hydrocarbons", "functional groups", "alkanes", "alkenes"]
        },
        {
          id: "chem_carbon_3",
          title: "Soaps and Detergents",
          content: "Soaps are sodium/potassium salts of long-chain carboxylic acids. Have hydrophilic (water-loving) head and hydrophobic (water-hating) tail. Form micelles in water. Detergents work better in hard water than soaps.",
          source: "Toppr",
          sourceUrl: "https://www.toppr.com/guides/chemistry/carbon-and-its-compounds/",
          difficulty: "Intermediate",
          tags: ["soaps", "detergents", "micelles", "hard water"]
        }
      ],
      "Periodic Classification of Elements": [
        {
          id: "chem_periodic_1",
          title: "Modern Periodic Table",
          content: "Elements arranged by increasing atomic number. 18 groups (vertical columns) and 7 periods (horizontal rows). Group number = number of valence electrons. Period number = number of electron shells.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/chemistry/periodic-table",
          difficulty: "Basic",
          tags: ["periodic table", "groups", "periods", "atomic number"]
        },
        {
          id: "chem_periodic_2",
          title: "Periodic Trends",
          content: "Atomic size decreases across period (left to right), increases down group. Metallic character decreases across period, increases down group. Ionization energy increases across period, decreases down group.",
          source: "Vedantu",
          sourceUrl: "https://www.vedantu.com/chemistry/periodic-classification-of-elements",
          difficulty: "Advanced",
          tags: ["periodic trends", "atomic size", "metallic character", "ionization"]
        }
      ]
    },
    biology: {
      "Life Processes": [
        {
          id: "bio_life_1",
          title: "Nutrition in Plants and Animals",
          content: "Autotrophic nutrition: organisms make their own food (photosynthesis in plants). Heterotrophic nutrition: organisms depend on others for food. Types include holozoic, saprophytic, and parasitic nutrition.",
          source: "Biology Online",
          sourceUrl: "https://www.biologyonline.com/dictionary/nutrition",
          difficulty: "Basic",
          tags: ["nutrition", "autotrophic", "heterotrophic"]
        },
        {
          id: "bio_life_2",
          title: "Respiration Process",
          content: "Cellular respiration breaks down glucose to release energy. Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Anaerobic respiration occurs without oxygen, producing less energy.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation",
          difficulty: "Intermediate",
          tags: ["respiration", "aerobic", "anaerobic", "ATP"]
        },
        {
          id: "bio_life_3",
          title: "Transportation in Plants and Animals",
          content: "Plants: Water and minerals transported through xylem (transpiration pull). Food transported through phloem (translocation). Animals: Blood transports nutrients, oxygen, waste products through circulatory system.",
          source: "NCERT",
          sourceUrl: "https://ncert.nic.in/textbook/pdf/jesc106.pdf",
          difficulty: "Intermediate",
          tags: ["transportation", "xylem", "phloem", "blood circulation"]
        },
        {
          id: "bio_life_4",
          title: "Excretion",
          content: "Removal of metabolic waste products. Plants: Excrete through stomata, root pressure, and leaf fall. Animals: Kidneys filter blood to form urine. Nephron is functional unit of kidney.",
          source: "Byju's",
          sourceUrl: "https://byjus.com/biology/excretion/",
          difficulty: "Basic",
          tags: ["excretion", "waste removal", "kidneys", "nephron"]
        }
      ],
      "Control and Coordination": [
        {
          id: "bio_control_1",
          title: "Nervous System",
          content: "Neurons transmit electrical impulses. CNS (brain and spinal cord) controls body functions. PNS connects CNS to body parts. Reflex actions are automatic responses that protect the body.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/biology/human-biology",
          difficulty: "Basic",
          tags: ["nervous system", "neurons", "CNS", "PNS", "reflex"]
        },
        {
          id: "bio_control_2",
          title: "Hormones and Endocrine System",
          content: "Chemical messengers that control body functions. Important hormones: Insulin (blood sugar), Adrenaline (fight/flight), Growth hormone (growth), Thyroxine (metabolism). Feedback mechanisms maintain balance.",
          source: "Vedantu",
          sourceUrl: "https://www.vedantu.com/biology/control-and-coordination",
          difficulty: "Intermediate",
          tags: ["hormones", "endocrine", "insulin", "adrenaline", "feedback"]
        },
        {
          id: "bio_control_3",
          title: "Plant Movements",
          content: "Tropisms: growth movements in response to stimuli. Phototropism (light), Geotropism (gravity), Hydrotropism (water), Thigmotropism (touch). Controlled by plant hormones like auxins.",
          source: "Biology Online",
          sourceUrl: "https://www.biologyonline.com/dictionary/tropism",
          difficulty: "Intermediate",
          tags: ["tropisms", "phototropism", "geotropism", "auxins"]
        }
      ],
      "How do Organisms Reproduce?": [
        {
          id: "bio_repro_1",
          title: "Asexual and Sexual Reproduction",
          content: "Asexual: Single parent, offspring genetically identical (binary fission, budding, fragmentation, spore formation). Sexual: Two parents, genetic variation, involves gamete fusion.",
          source: "NCERT",
          sourceUrl: "https://ncert.nic.in/textbook/pdf/jesc108.pdf",
          difficulty: "Basic",
          tags: ["asexual", "sexual", "reproduction", "gametes"]
        },
        {
          id: "bio_repro_2",
          title: "Human Reproductive System",
          content: "Male: Testes produce sperm and testosterone. Female: Ovaries produce eggs and estrogen/progesterone. Menstrual cycle prepares body for pregnancy. Fertilization occurs in fallopian tubes.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/biology/human-biology/human-reproduction",
          difficulty: "Intermediate",
          tags: ["human reproduction", "testes", "ovaries", "menstrual cycle"]
        }
      ],
      "Heredity and Evolution": [
        {
          id: "bio_heredity_1",
          title: "Mendel's Laws of Inheritance",
          content: "Law of Dominance: Dominant traits mask recessive. Law of Segregation: Alleles separate during gamete formation. Law of Independent Assortment: Different traits inherited independently.",
          source: "Khan Academy", 
          sourceUrl: "https://www.khanacademy.org/science/biology/classical-genetics",
          difficulty: "Intermediate",
          tags: ["mendel", "dominance", "segregation", "independent assortment"]
        },
        {
          id: "bio_heredity_2",
          title: "Evolution and Natural Selection",
          content: "Evolution is change in species over time. Natural selection: Survival of the fittest. Evidences: Fossils, homologous organs, analogous organs, embryological similarities. Speciation leads to new species formation.",
          source: "Biology Online",
          sourceUrl: "https://www.biologyonline.com/dictionary/evolution",
          difficulty: "Advanced",
          tags: ["evolution", "natural selection", "fossils", "speciation"]
        }
      ],
      "Our Environment": [
        {
          id: "bio_env_1",
          title: "Food Chains and Food Webs",
          content: "Energy flow: Producers → Primary consumers → Secondary consumers → Tertiary consumers. Only 10% energy transfers to next level. Food webs show interconnected food chains in an ecosystem.",
          source: "Khan Academy",
          sourceUrl: "https://www.khanacademy.org/science/biology/ecology",
          difficulty: "Basic",
          tags: ["food chains", "energy flow", "food webs", "10% rule"]
        },
        {
          id: "bio_env_2",
          title: "Environmental Issues",
          content: "Ozone depletion caused by CFCs, leads to increased UV radiation. Waste management: 3 R's - Reduce, Reuse, Recycle. Biodegradable wastes decompose naturally, non-biodegradable accumulate and cause pollution.",
          source: "NCERT",
          sourceUrl: "https://ncert.nic.in/textbook/pdf/jesc105.pdf",
          difficulty: "Intermediate",
          tags: ["ozone depletion", "waste management", "3 Rs", "biodegradable"]
        }
      ],
      "Natural Resource Management": [
        {
          id: "bio_resource_1",
          title: "Conservation of Natural Resources",
          content: "Sustainable development meets present needs without compromising future generations. Forest conservation: Prevents soil erosion, maintains biodiversity, regulates water cycle. Wildlife conservation: Protects endangered species.",
          source: "Byju's",
          sourceUrl: "https://byjus.com/biology/natural-resources/",
          difficulty: "Intermediate",
          tags: ["sustainable development", "forest conservation", "wildlife conservation"]
        }
      ]
    }
  },
  english: [
    {
      id: "eng_lit_1",
      title: "Poetry Analysis Techniques",
      content: "When analyzing poetry, look for: theme (central message), tone (author's attitude), mood (reader's feeling), literary devices (metaphor, simile, alliteration), rhyme scheme, and meter. Consider historical and cultural context.",
      source: "Poetry Foundation",
      sourceUrl: "https://www.poetryfoundation.org/learn/glossary-terms",
      difficulty: "Intermediate",
      tags: ["poetry", "analysis", "literary devices"]
    },
    {
      id: "eng_lit_2",
      title: "Character Development in Literature",
      content: "Characters can be flat (simple, unchanging) or round (complex, evolving). Analyze character through actions, dialogue, thoughts, and others' reactions. Consider character arc and motivation throughout the story.",
      source: "Purdue OWL",
      sourceUrl: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/",
      difficulty: "Basic",
      tags: ["character", "development", "literature"]
    },
    {
      id: "eng_lit_3",
      title: "Understanding Prose and Drama",
      content: "Prose: Written in ordinary language, includes stories, novels, essays. Focus on plot, setting, characters, theme. Drama: Written for performance, includes dialogue, stage directions. Analyze through acts, scenes, soliloquy, aside.",
      source: "Literary Devices",
      sourceUrl: "https://literarydevices.net",
      difficulty: "Basic",
      tags: ["prose", "drama", "plot", "dialogue"]
    },
    {
      id: "eng_lit_4", 
      title: "Writing Skills - Letters and Essays",
      content: "Formal letters: Address, date, subject, salutation, body, complimentary close, signature. Informal letters: More personal tone. Essays: Introduction (thesis), body paragraphs (evidence), conclusion (summary).",
      source: "Writing Center",
      sourceUrl: "https://writingcenter.unc.edu",
      difficulty: "Intermediate",
      tags: ["writing", "letters", "essays", "format"]
    },
    {
      id: "eng_lit_5",
      title: "Grammar and Language",
      content: "Parts of speech: Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection. Tenses: Present, past, future with their forms. Voice: Active (subject does action) vs Passive (action done to subject).",
      source: "Grammarly",
      sourceUrl: "https://www.grammarly.com/blog/parts-of-speech/",
      difficulty: "Basic",
      tags: ["grammar", "parts of speech", "tenses", "voice"]
    },
    {
      id: "eng_lit_6",
      title: "Reading Comprehension Strategies",
      content: "Pre-reading: Preview text, predict content. During reading: Question, visualize, connect to prior knowledge. Post-reading: Summarize, analyze, evaluate. Look for main idea, supporting details, author's purpose, tone.",
      source: "Reading Rockets",
      sourceUrl: "https://www.readingrockets.org",
      difficulty: "Intermediate",
      tags: ["comprehension", "reading strategies", "main idea", "purpose"]
    }
  ],
  hindiSparsh: [
    {
      id: "hin_spr_1",
      title: "कबीर की भक्ति परंपरा",
      content: "कबीर निर्गुण भक्ति धारा के प्रमुख कवि थे। उन्होंने समाज की कुरीतियों का विरोध किया और सच्ची भक्ति पर जोर दिया। उनकी भाषा सधुक्कड़ी थी जिसमें हिंदी, उर्दू, पंजाबी के शब्द मिलते हैं।",
      source: "हिंदी साहित्य का इतिहास",
      sourceUrl: "https://www.hindisamay.com",
      difficulty: "Intermediate",
      tags: ["कबीर", "भक्ति", "निर्गुण"]
    },
    {
      id: "hin_spr_2",
      title: "मीरा की भक्ति भावना",
      content: "मीराबाई कृष्ण भक्ति की दीवानी थीं। उनके पदों में प्रेम, विरह, और समर्पण की भावना मिलती है। उन्होंने सामाजिक बंधनों को तोड़कर भक्ति के मार्ग को अपनाया।",
      source: "भक्ति काव्य संग्रह",
      sourceUrl: "https://www.hindisamay.com",
      difficulty: "Basic",
      tags: ["मीरा", "कृष्ण भक्ति", "प्रेम"]
    },
    {
      id: "hin_spr_3",
      title: "प्रेमचंद की कहानी कला",
      content: "प्रेमचंद को कहानी सम्राट कहा जाता है। उनकी कहानियों में ग्रामीण जीवन, सामाजिक समस्याएं, और मानवीय संवेदनाओं का चित्रण मिलता है। उन्होंने आदर्शोन्मुख यथार्थवाद की परंपरा स्थापित की।",
      source: "आधुनिक हिंदी साहित्य",
      sourceUrl: "https://www.hindisamay.com",
      difficulty: "Intermediate",
      tags: ["प्रेमचंद", "कहानी", "यथार्थवाद"]
    },
    {
      id: "hin_spr_4",
      title: "हिंदी व्याकरण - संधि और समास",
      content: "संधि: दो वर्णों के मेल से होने वाला विकार। तीन प्रकार: स्वर संधि, व्यंजन संधि, विसर्ग संधि। समास: दो या अधिक पदों का मेल। छह प्रकार: तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि, अव्ययीभाव।",
      source: "हिंदी व्याकरण",
      sourceUrl: "https://www.hindikunj.com",
      difficulty: "Advanced",
      tags: ["संधि", "समास", "व्याकरण"]
    },
    {
      id: "hin_spr_5",
      title: "छंद और अलंकार",
      content: "छंद: मात्रा या वर्ण की गिनती के आधार पर काव्य की लयबद्ध रचना। मुख्य छंद: दोहा, चौपाई, सोरठा। अलंकार: काव्य की शोभा बढ़ाने वाले तत्व। दो प्रकार: शब्दालंकार (अनुप्रास, यमक) और अर्थालंकार (उपमा, रूपक)।",
      source: "काव्यशास्त्र",
      sourceUrl: "https://www.kavitakosh.org",
      difficulty: "Advanced",
      tags: ["छंद", "अलंकार", "काव्य"]
    }
  ],
  socialScience: {
    history: [
      {
        id: "hist_1",
        title: "Rise of Nationalism in Europe",
        content: "Nationalism emerged in 19th century Europe through common language, culture, and history. Key events: French Revolution (1789), German unification under Bismarck, Italian unification led by Cavour, Garibaldi, and Mazzini.",
        source: "History.com",
        sourceUrl: "https://www.history.com/topics/european-history",
        difficulty: "Intermediate",
        tags: ["nationalism", "europe", "unification"]
      },
      {
        id: "hist_2",
        title: "The Making of a Global World",
        content: "Silk routes connected Asia, Europe, Africa for trade. Colonialism led to forced labor migration. Two World Wars reshaped global economy. Bretton Woods system established post-war economic order.",
        source: "NCERT",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jess104.pdf",
        difficulty: "Advanced",
        tags: ["globalization", "silk routes", "world wars", "bretton woods"]
      },
      {
        id: "hist_3",
        title: "The Age of Industrialisation",
        content: "Industrial Revolution began in England (textile industry). Factory system replaced domestic production. Workers faced poor conditions, led to labor movements. Colonialism provided raw materials and markets.",
        source: "BBC History",
        sourceUrl: "https://www.bbc.co.uk/history/british/modern/",
        difficulty: "Intermediate",
        tags: ["industrial revolution", "factory system", "labor movements"]
      },
      {
        id: "hist_4",
        title: "Print Culture and the Modern World",
        content: "Gutenberg's printing press (1448) revolutionized knowledge spread. Print enabled Reformation, Scientific Revolution, French Revolution. In India, printed books helped social reform movements and nationalism.",
        source: "History Today",
        sourceUrl: "https://www.historytoday.com",
        difficulty: "Basic",
        tags: ["printing press", "gutenberg", "reformation", "nationalism"]
      }
    ],
    civics: [
      {
        id: "civ_1",
        title: "Power Sharing",
        content: "Democracy requires power sharing among different groups. Forms: Horizontal (legislature, executive, judiciary), Vertical (central, state, local), Social (different social groups), Coalition governments.",
        source: "Civics Online",
        sourceUrl: "https://www.civicsonline.org",
        difficulty: "Basic",
        tags: ["power sharing", "horizontal", "vertical", "coalition"]
      },
      {
        id: "civ_2",
        title: "Federalism",
        content: "Federal government has two levels: Central and State. India has three-tier federalism: Union, State, Local. Features: written constitution, division of powers, independent judiciary, dual citizenship.",
        source: "Constitution of India",
        sourceUrl: "https://www.india.gov.in/my-government/constitution-india",
        difficulty: "Intermediate",
        tags: ["federalism", "three-tier", "division of powers"]
      },
      {
        id: "civ_3",
        title: "Democracy and Diversity",
        content: "Social divisions exist in all societies (religion, language, caste, gender). Democracy must accommodate diversity. Cross-cutting identities reduce conflict. Overlapping identities can create deeper divisions.",
        source: "Political Science Textbook",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jess202.pdf",
        difficulty: "Intermediate",
        tags: ["diversity", "social divisions", "cross-cutting", "overlapping"]
      },
      {
        id: "civ_4",
        title: "Gender, Religion and Caste",
        content: "Gender inequality exists worldwide. Feminist movement fights for equal rights. Communalism uses religion for political gains. Caste system creates inequality. Reservation provides opportunities to disadvantaged groups.",
        source: "NCERT",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jess204.pdf",
        difficulty: "Advanced",
        tags: ["gender equality", "communalism", "caste", "reservation"]
      },
      {
        id: "civ_5",
        title: "Popular Struggles and Movements",
        content: "Democracy evolves through popular struggles. Nepal's movement for democracy, Bolivia's water war. Pressure groups influence government decisions. Movements broaden democracy and representation.",
        source: "Democratic Politics",
        sourceUrl: "https://ncert.nic.in/textbook/pdf/jess205.pdf",
        difficulty: "Intermediate",
        tags: ["popular struggles", "nepal", "bolivia", "pressure groups"]
      },
      {
        id: "civ_6",
        title: "Political Parties",
        content: "Political parties are essential for democracy. Functions: contest elections, form policies, make laws, represent opinions. India has multi-party system. Challenges: lack of internal democracy, dynastic succession, money power.",
        source: "Election Commission of India",
        sourceUrl: "https://eci.gov.in",
        difficulty: "Basic",
        tags: ["political parties", "multi-party", "internal democracy"]
      },
      {
        id: "civ_7",
        title: "Outcomes of Democracy",
        content: "Democracy promotes equality, protects rights, allows peaceful change of government, improves decision-making quality. However, it can be slower than dictatorship in decision-making.",
        source: "Freedom House",
        sourceUrl: "https://freedomhouse.org",
        difficulty: "Basic",
        tags: ["democratic outcomes", "equality", "rights", "decision-making"]
      }
    ],
    geography: [
      {
        id: "geo_1",
        title: "Resources and Development",
        content: "Resources are materials that satisfy human needs. Classification: by origin (biotic/abiotic), by exhaustibility (renewable/non-renewable), by ownership (individual/community/national/international). Sustainable development is key.",
        source: "National Geographic",
        sourceUrl: "https://education.nationalgeographic.org",
        difficulty: "Basic",
        tags: ["resources", "classification", "sustainable development"]
      },
      {
        id: "geo_2",
        title: "Forest and Wildlife Resources",
        content: "Forests cover 23% of India's land. Types: Reserved (54%), Protected (29%), Unclassed (17%). Biodiversity hotspots: Western Ghats, Eastern Himalayas. Conservation: Project Tiger, Project Elephant.",
        source: "Forest Survey of India",
        sourceUrl: "https://fsi.nic.in",
        difficulty: "Intermediate",
        tags: ["forests", "biodiversity", "conservation", "project tiger"]
      },
      {
        id: "geo_3",
        title: "Water Resources", 
        content: "India receives 4% of world's water but has 16% population. Monsoon provides 80% of annual rainfall. Water scarcity due to uneven distribution, pollution, over-exploitation. Rainwater harvesting is solution.",
        source: "Central Water Commission",
        sourceUrl: "https://cwc.gov.in",
        difficulty: "Intermediate",
        tags: ["water resources", "monsoon", "water scarcity", "rainwater harvesting"]
      },
      {
        id: "geo_4",
        title: "Agriculture",
        content: "70% of Indians depend on agriculture. Types: Subsistence (for own consumption), Commercial (for market). Seasons: Kharif (monsoon), Rabi (winter), Zaid (summer). Green Revolution increased food production.",
        source: "Ministry of Agriculture",
        sourceUrl: "https://agricoop.nic.in",
        difficulty: "Basic",
        tags: ["agriculture", "subsistence", "commercial", "green revolution"]
      },
      {
        id: "geo_5",
        title: "Minerals and Energy Resources",
        content: "India has rich mineral resources. Iron ore (Jharkhand, Odisha), Coal (Jharkhand, Odisha, Chhattisgarh), Petroleum (Mumbai High, Assam). Renewable energy: Solar, wind, hydro gaining importance.",
        source: "Ministry of Coal",
        sourceUrl: "https://coal.nic.in",
        difficulty: "Intermediate",
        tags: ["minerals", "iron ore", "coal", "renewable energy"]
      },
      {
        id: "geo_6",
        title: "Manufacturing Industries",
        content: "Industries transform raw materials into finished goods. Types: Basic (iron & steel), Consumer (textiles, food processing). Industrial regions: Mumbai-Pune, Bangalore-Chennai, Delhi-Gurgaon. Challenges: pollution, labor issues.",
        source: "Ministry of Industry",
        sourceUrl: "https://dipp.gov.in",
        difficulty: "Intermediate",
        tags: ["manufacturing", "basic industries", "consumer industries", "industrial regions"]
      },
      {
        id: "geo_7",
        title: "Lifelines of National Economy",
        content: "Transport connects people and places. Types: Land (roadways, railways), Water (inland, oceanic), Air. Communication: Personal (telephone, internet), Mass (radio, TV, newspapers, cinema).",
        source: "Ministry of Transport",
        sourceUrl: "https://morth.nic.in",
        difficulty: "Basic",
        tags: ["transport", "communication", "roadways", "railways"]
      }
    ],
    economics: [
      {
        id: "eco_1",
        title: "Development",
        content: "Development involves economic growth with social progress. Indicators: Per capita income, literacy rate, life expectancy, infant mortality rate. HDI (Human Development Index) combines health, education, income indicators.",
        source: "UNDP",
        sourceUrl: "https://hdr.undp.org",
        difficulty: "Basic",
        tags: ["development", "per capita income", "HDI", "indicators"]
      },
      {
        id: "eco_2",
        title: "Sectors of Indian Economy",
        content: "Primary sector: agriculture, mining (23% of GDP). Secondary sector: manufacturing, construction (31% of GDP). Tertiary sector: services like banking, transport, communication (46% of GDP). Employment highest in primary sector.",
        source: "Economic Survey",
        sourceUrl: "https://www.indiabudget.gov.in",
        difficulty: "Basic",
        tags: ["sectors", "primary", "secondary", "tertiary", "GDP"]
      },
      {
        id: "eco_3",
        title: "Money and Credit",
        content: "Money serves as medium of exchange, store of value, unit of account. Credit (loan) helps production and trade. Formal sector: Banks, cooperatives (RBI regulated). Informal sector: Moneylenders (higher interest rates).",
        source: "Reserve Bank of India",
        sourceUrl: "https://rbi.org.in",
        difficulty: "Intermediate",
        tags: ["money", "credit", "formal sector", "informal sector", "RBI"]
      },
      {
        id: "eco_4",
        title: "Globalisation and Indian Economy",
        content: "Globalization means integration of countries through trade, technology, capital flows. Benefits: Competition, efficiency, choice. Drawbacks: Job losses in some sectors, small producers face competition. MNCs play major role.",
        source: "WTO",
        sourceUrl: "https://www.wto.org",
        difficulty: "Advanced",
        tags: ["globalization", "integration", "MNCs", "competition"]
      },
      {
        id: "eco_5",
        title: "Consumer Rights",
        content: "Consumer rights: Right to safety, information, choice, representation, redressal, education. Consumer Protection Act protects from unfair practices. Three-tier judiciary: District, State, National Consumer Forums.",
        source: "Consumer Affairs Ministry",
        sourceUrl: "https://consumeraffairs.nic.in",
        difficulty: "Basic",
        tags: ["consumer rights", "protection act", "consumer forums"]
      }
    ]
  }
};

export const getCuratedNotes = (subject, chapter = null, subpart = null) => {
  try {
    let notes = [];
    
    if (subject === 'science') {
      if (subpart) {
        const subpartData = curatedNotes.science[subpart];
        if (subpartData && chapter) {
          notes = subpartData[chapter] || [];
        } else if (subpartData) {
          notes = Object.values(subpartData).flat();
        }
      } else {
        Object.keys(curatedNotes.science).forEach(subpartKey => {
          const subpartData = curatedNotes.science[subpartKey];
          const subpartNotes = Object.values(subpartData).flat();
          subpartNotes.forEach(note => {
            notes.push({ ...note, subpart: subpartKey });
          });
        });
      }
    } else if (subject === 'socialScience') {
      if (subpart) {
        const subpartData = curatedNotes.socialScience[subpart];
        if (subpartData && chapter) {
          notes = subpartData.filter(note => note.tags.some(tag => 
            chapter.toLowerCase().includes(tag.toLowerCase())
          ));
        } else if (subpartData) {
          notes = subpartData;
        }
      } else {
        Object.keys(curatedNotes.socialScience).forEach(subpartKey => {
          const subpartData = curatedNotes.socialScience[subpartKey];
          subpartData.forEach(note => {
            notes.push({ ...note, subpart: subpartKey });
          });
        });
      }
    } else {
      const subjectData = curatedNotes[subject];
      if (Array.isArray(subjectData)) {
        if (chapter) {
          notes = subjectData.filter(note => note.tags.some(tag => 
            chapter.toLowerCase().includes(tag.toLowerCase())
          ));
        } else {
          notes = subjectData;
        }
      } else if (subjectData && chapter) {
        notes = subjectData[chapter] || [];
      } else if (subjectData) {
        notes = Object.values(subjectData).flat();
      }
    }
    
    return notes;
  } catch (error) {
    console.error('Error getting curated notes:', error);
    return [];
  }
};

export const searchCuratedNotes = (searchTerm) => {
  const allNotes = [];
  const term = searchTerm.toLowerCase();
  
  const addNotes = (notes, subject, subpart = null) => {
    notes.forEach(note => {
      if (
        note.title.toLowerCase().includes(term) ||
        note.content.toLowerCase().includes(term) ||
        note.tags.some(tag => tag.toLowerCase().includes(term))
      ) {
        allNotes.push({
          ...note,
          subject,
          subpart
        });
      }
    });
  };
  
  Object.keys(curatedNotes).forEach(subject => {
    const subjectData = curatedNotes[subject];
    
    if (Array.isArray(subjectData)) {
      addNotes(subjectData, subject);
    } else if (subject === 'science' || subject === 'socialScience') {
      Object.keys(subjectData).forEach(subpart => {
        const subpartData = subjectData[subpart];
        if (Array.isArray(subpartData)) {
          addNotes(subpartData, subject, subpart);
        } else {
          Object.values(subpartData).flat().forEach(notesList => {
            if (Array.isArray(notesList)) {
              addNotes(notesList, subject, subpart);
            }
          });
        }
      });
    } else {
      Object.values(subjectData).flat().forEach(notesList => {
        if (Array.isArray(notesList)) {
          addNotes(notesList, subject);
        }
      });
    }
  });
  
  return allNotes;
};
