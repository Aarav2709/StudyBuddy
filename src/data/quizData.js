export const quizData = {
  mathematics: {
    "Real Numbers": [
      {
        question: "Which of the following is an irrational number?",
        options: ["1.5", "√2", "3/4", "0.333..."],
        correct: "√2",
        explanation: "√2 cannot be expressed as a ratio of two integers, making it irrational."
      },
      {
        question: "What is the HCF of 18 and 24?",
        options: ["6", "12", "18", "24"],
        correct: "6",
        explanation: "The highest common factor of 18 and 24 is 6."
      },
      {
        question: "The decimal expansion of 7/8 is:",
        options: ["Terminating", "Non-terminating recurring", "Non-terminating non-recurring", "None"],
        correct: "Terminating",
        explanation: "7/8 = 0.875, which is a terminating decimal."
      },
      {
        question: "Every composite number can be expressed as a product of:",
        options: ["Even numbers", "Odd numbers", "Prime numbers", "Rational numbers"],
        correct: "Prime numbers",
        explanation: "This is the Fundamental Theorem of Arithmetic."
      }
    ],
    "Polynomials": [
      {
        question: "What is the degree of the polynomial 3x⁴ + 2x² - 5?",
        options: ["2", "3", "4", "5"],
        correct: "4",
        explanation: "The degree is the highest power of the variable, which is 4."
      },
      {
        question: "If p(x) = x² - 3x + 2, then p(1) = ?",
        options: ["0", "1", "2", "3"],
        correct: "0",
        explanation: "p(1) = 1² - 3(1) + 2 = 1 - 3 + 2 = 0"
      },
      {
        question: "The zeros of the polynomial x² - 5x + 6 are:",
        options: ["2, 3", "1, 6", "-2, -3", "5, 6"],
        correct: "2, 3",
        explanation: "x² - 5x + 6 = (x-2)(x-3), so zeros are 2 and 3."
      }
    ],
    "Pair of Linear Equations in Two Variables": [
      {
        question: "The solution of 2x + 3 = 7 is:",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correct: "x = 2",
        explanation: "2x + 3 = 7 → 2x = 4 → x = 2"
      },
      {
        question: "Which of the following represents a linear equation in two variables?",
        options: ["x² + y = 5", "2x + 3y = 6", "xy = 10", "x³ - y = 2"],
        correct: "2x + 3y = 6",
        explanation: "A linear equation in two variables has degree 1 for both variables."
      },
      {
        question: "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, then the system has:",
        options: ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        correct: "No solution",
        explanation: "This condition represents inconsistent equations."
      }
    ],
    "Quadratic Equations": [
      {
        question: "The discriminant of ax² + bx + c = 0 is:",
        options: ["b² - 4ac", "b² + 4ac", "4ac - b²", "-b² + 4ac"],
        correct: "b² - 4ac",
        explanation: "The discriminant Δ = b² - 4ac determines the nature of roots."
      },
      {
        question: "If discriminant = 0, the quadratic equation has:",
        options: ["Two distinct real roots", "Two equal real roots", "No real roots", "Infinite roots"],
        correct: "Two equal real roots",
        explanation: "When discriminant = 0, both roots are equal and real."
      }
    ],
    "Arithmetic Progressions": [
      {
        question: "The nth term of an AP is given by:",
        options: ["a + (n-1)d", "a + nd", "a - (n-1)d", "a + (n+1)d"],
        correct: "a + (n-1)d",
        explanation: "The formula for nth term of AP is aₙ = a + (n-1)d."
      },
      {
        question: "The sum of first n terms of an AP is:",
        options: ["n/2[2a + (n-1)d]", "n[2a + (n-1)d]", "2n[a + (n-1)d]", "n/2[a + (n-1)d]"],
        correct: "n/2[2a + (n-1)d]",
        explanation: "Sum formula: Sₙ = n/2[2a + (n-1)d]."
      }
    ],
    "Triangles": [
      {
        question: "In similar triangles, corresponding sides are:",
        options: ["Equal", "Proportional", "Parallel", "Perpendicular"],
        correct: "Proportional",
        explanation: "Similar triangles have proportional corresponding sides."
      },
      {
        question: "If two triangles are similar, then their areas are in the ratio:",
        options: ["Corresponding sides", "Square of corresponding sides", "Cube of corresponding sides", "Half of corresponding sides"],
        correct: "Square of corresponding sides",
        explanation: "Areas of similar triangles are in the ratio of squares of corresponding sides."
      }
    ],
    "Coordinate Geometry": [
      {
        question: "The distance between points (x₁,y₁) and (x₂,y₂) is:",
        options: ["√[(x₂-x₁)² + (y₂-y₁)²]", "(x₂-x₁)² + (y₂-y₁)²", "√[(x₂+x₁)² + (y₂+y₁)²]", "(x₂-x₁) + (y₂-y₁)"],
        correct: "√[(x₂-x₁)² + (y₂-y₁)²]",
        explanation: "This is the distance formula derived from Pythagorean theorem."
      },
      {
        question: "The midpoint of line segment joining (x₁,y₁) and (x₂,y₂) is:",
        options: ["((x₁+x₂)/2, (y₁+y₂)/2)", "(x₁+x₂, y₁+y₂)", "((x₁-x₂)/2, (y₁-y₂)/2)", "(2x₁+x₂, 2y₁+y₂)"],
        correct: "((x₁+x₂)/2, (y₁+y₂)/2)",
        explanation: "Midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2)."
      }
    ],
    "Introduction to Trigonometry": [
      {
        question: "sin²θ + cos²θ = ?",
        options: ["0", "1", "2", "θ"],
        correct: "1",
        explanation: "This is the fundamental trigonometric identity."
      },
      {
        question: "tan θ = ?",
        options: ["sin θ / cos θ", "cos θ / sin θ", "sin θ × cos θ", "1 / sin θ"],
        correct: "sin θ / cos θ",
        explanation: "tan θ is defined as the ratio of sin θ to cos θ."
      }
    ],
    "Some Applications of Trigonometry": [
      {
        question: "The angle of elevation is measured from:",
        options: ["Vertical upward", "Horizontal upward", "Vertical downward", "Horizontal downward"],
        correct: "Horizontal upward",
        explanation: "Angle of elevation is measured from horizontal line upward to the object."
      },
      {
        question: "If height of tower is h and angle of elevation is θ, then distance from base is:",
        options: ["h tan θ", "h / tan θ", "h sin θ", "h cos θ"],
        correct: "h / tan θ",
        explanation: "From trigonometry: tan θ = height/distance, so distance = height/tan θ."
      }
    ],
    "Circles": [
      {
        question: "A tangent to a circle intersects it at:",
        options: ["Two points", "One point", "Three points", "No point"],
        correct: "One point",
        explanation: "A tangent touches the circle at exactly one point."
      },
      {
        question: "The angle in a semicircle is:",
        options: ["45°", "60°", "90°", "180°"],
        correct: "90°",
        explanation: "Angle inscribed in a semicircle is always 90°."
      }
    ],
    "Areas Related to Circles": [
      {
        question: "Area of a circle with radius r is:",
        options: ["πr", "2πr", "πr²", "2πr²"],
        correct: "πr²",
        explanation: "The area of circle = π × radius²."
      },
      {
        question: "Area of sector with central angle θ (in degrees) is:",
        options: ["(θ/360°) × πr²", "(θ/180°) × πr²", "(θ/90°) × πr²", "θ × πr²"],
        correct: "(θ/360°) × πr²",
        explanation: "Sector area = (central angle/360°) × total area."
      }
    ],
    "Surface Areas and Volumes": [
      {
        question: "Volume of a sphere with radius r is:",
        options: ["(4/3)πr³", "(4/3)πr²", "4πr³", "4πr²"],
        correct: "(4/3)πr³",
        explanation: "Volume of sphere = (4/3)π × radius³."
      },
      {
        question: "Total surface area of cylinder with radius r and height h is:",
        options: ["2πr(r + h)", "πr(r + h)", "2πr² + 2πrh", "2πr² + πrh"],
        correct: "2πr(r + h)",
        explanation: "TSA of cylinder = 2πr² + 2πrh = 2πr(r + h)."
      }
    ],
    "Statistics": [
      {
        question: "The mean of first n natural numbers is:",
        options: ["(n+1)/2", "n/2", "(n-1)/2", "n+1"],
        correct: "(n+1)/2",
        explanation: "Mean = (1+2+...+n)/n = n(n+1)/2n = (n+1)/2."
      },
      {
        question: "Mode is the value that appears:",
        options: ["Once", "Twice", "Most frequently", "Least frequently"],
        correct: "Most frequently",
        explanation: "Mode is the most frequently occurring value in a dataset."
      }
    ],
    "Probability": [
      {
        question: "The probability of an impossible event is:",
        options: ["0", "1", "0.5", "Cannot be determined"],
        correct: "0",
        explanation: "Impossible events have probability 0."
      },
      {
        question: "The sum of probabilities of all possible outcomes is:",
        options: ["0", "0.5", "1", "Infinity"],
        correct: "1",
        explanation: "Total probability of all possible outcomes equals 1."
      }
    ]
  },
  physics: {
    "Light - Reflection and Refraction": [
      {
        question: "The SI unit of power of a lens is:",
        options: ["Meter", "Dioptre", "Candela", "Lux"],
        correct: "Dioptre",
        explanation: "Power of lens = 1/focal length (in meters). Unit is dioptre (D)."
      },
      {
        question: "Which lens is used to correct myopia?",
        options: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
        correct: "Concave lens",
        explanation: "Concave lenses diverge light rays, helping myopic eyes focus on distant objects."
      },
      {
        question: "The phenomenon of bending of light when it passes from one medium to another is called:",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        correct: "Refraction",
        explanation: "Refraction occurs when light changes speed as it moves between different media."
      }
    ],
    "The Human Eye and the Colourful World": [
      {
        question: "The part of eye that controls the amount of light entering is:",
        options: ["Cornea", "Lens", "Iris", "Retina"],
        correct: "Iris",
        explanation: "The iris controls the size of pupil, thus regulating light entry."
      },
      {
        question: "Myopia can be corrected using:",
        options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
        correct: "Concave lens",
        explanation: "Concave lenses help diverge light for near-sighted correction."
      }
    ],
    "Electricity": [
      {
        question: "According to Ohm's law, V = ?",
        options: ["I/R", "IR", "I + R", "I - R"],
        correct: "IR",
        explanation: "Ohm's law states that V = IR, where V is voltage, I is current, and R is resistance."
      },
      {
        question: "The unit of electric current is:",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: "Ampere",
        explanation: "The SI unit of electric current is ampere (A)."
      },
      {
        question: "What happens to the total resistance when resistors are connected in parallel?",
        options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
        correct: "Decreases",
        explanation: "In parallel connection, 1/R_total = 1/R₁ + 1/R₂ + ..., so total resistance decreases."
      }
    ],
    "Magnetic Effects of Electric Current": [
      {
        question: "The direction of magnetic field around a current-carrying conductor is given by:",
        options: ["Left hand rule", "Right hand rule", "Fleming's rule", "Cork screw rule"],
        correct: "Right hand rule",
        explanation: "Right hand rule determines magnetic field direction around current-carrying conductor."
      },
      {
        question: "An electric motor works on the principle of:",
        options: ["Electromagnetic induction", "Magnetic effect of current", "Heating effect of current", "Chemical effect of current"],
        correct: "Magnetic effect of current",
        explanation: "Electric motors use magnetic force on current-carrying conductors."
      }
    ]
  },
  chemistry: {
    "Acids, Bases and Salts": [
      {
        question: "The pH of pure water is:",
        options: ["0", "7", "14", "1"],
        correct: "7",
        explanation: "Pure water is neutral with a pH of 7 at 25°C."
      },
      {
        question: "Which indicator turns red in acidic solution?",
        options: ["Litmus", "Phenolphthalein", "Methyl orange", "Universal indicator"],
        correct: "Litmus",
        explanation: "Blue litmus paper turns red in acidic solutions."
      },
      {
        question: "Sodium hydroxide is a:",
        options: ["Weak acid", "Strong acid", "Weak base", "Strong base"],
        correct: "Strong base",
        explanation: "NaOH completely ionizes in water, making it a strong base."
      }
    ],
    "Metals and Non-metals": [
      {
        question: "Most reactive metal is:",
        options: ["Iron", "Copper", "Potassium", "Silver"],
        correct: "Potassium",
        explanation: "Potassium is highly reactive and placed at top of reactivity series."
      },
      {
        question: "The process of coating iron with zinc is called:",
        options: ["Galvanizing", "Anodizing", "Electroplating", "Rusting"],
        correct: "Galvanizing",
        explanation: "Galvanizing protects iron from rusting by coating with zinc."
      }
    ],
    "Carbon and its Compounds": [
      {
        question: "The simplest hydrocarbon is:",
        options: ["Ethane", "Methane", "Propane", "Butane"],
        correct: "Methane",
        explanation: "Methane (CH₄) is the simplest hydrocarbon with one carbon atom."
      },
      {
        question: "Saturated hydrocarbons are also called:",
        options: ["Alkenes", "Alkynes", "Alkanes", "Aromatics"],
        correct: "Alkanes",
        explanation: "Alkanes are saturated hydrocarbons with single bonds only."
      }
    ],
    "Periodic Classification of Elements": [
      {
        question: "Elements in the same group have the same:",
        options: ["Atomic mass", "Atomic number", "Number of valence electrons", "Number of neutrons"],
        correct: "Number of valence electrons",
        explanation: "Elements in same group have same number of valence electrons."
      },
      {
        question: "The modern periodic table is based on:",
        options: ["Atomic mass", "Atomic number", "Valency", "Density"],
        correct: "Atomic number",
        explanation: "Modern periodic table arranges elements by increasing atomic number."
      }
    ]
  },
  biology: {
    "Life Processes": [
      {
        question: "The basic unit of life is:",
        options: ["Tissue", "Organ", "Cell", "Organism"],
        correct: "Cell",
        explanation: "Cell is the fundamental structural and functional unit of life."
      },
      {
        question: "Photosynthesis occurs in:",
        options: ["Mitochondria", "Chloroplasts", "Nucleus", "Ribosomes"],
        correct: "Chloroplasts",
        explanation: "Chloroplasts contain chlorophyll and are sites of photosynthesis."
      }
    ],
    "Control and Coordination": [
      {
        question: "The basic unit of nervous system is:",
        options: ["Brain", "Nerve", "Neuron", "Spinal cord"],
        correct: "Neuron",
        explanation: "Neuron is the structural and functional unit of nervous system."
      },
      {
        question: "Which hormone regulates blood glucose level?",
        options: ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"],
        correct: "Insulin",
        explanation: "Insulin regulates blood glucose by promoting glucose uptake."
      }
    ],
    "How do Organisms Reproduce?": [
      {
        question: "Asexual reproduction involves:",
        options: ["Two parents", "One parent", "No parents", "Multiple parents"],
        correct: "One parent",
        explanation: "Asexual reproduction requires only one parent organism."
      },
      {
        question: "Binary fission is seen in:",
        options: ["Amoeba", "Hydra", "Yeast", "Planaria"],
        correct: "Amoeba",
        explanation: "Amoeba reproduces by binary fission, splitting into two."
      }
    ],
    "Heredity and Evolution": [
      {
        question: "The passing of traits from parents to offspring is called:",
        options: ["Variation", "Heredity", "Evolution", "Adaptation"],
        correct: "Heredity",
        explanation: "Heredity is the transmission of characteristics from parents to offspring."
      },
      {
        question: "Mendel worked with:",
        options: ["Roses", "Pea plants", "Wheat", "Rice"],
        correct: "Pea plants",
        explanation: "Gregor Mendel conducted his heredity experiments with pea plants."
      }
    ],
    "Light - Life Processes": [
      {
        question: "The green pigment in plants is:",
        options: ["Carotene", "Chlorophyll", "Xanthophyll", "Anthocyanin"],
        correct: "Chlorophyll",
        explanation: "Chlorophyll is the green pigment essential for photosynthesis."
      },
      {
        question: "Respiration in plants occurs:",
        options: ["Only during day", "Only during night", "All the time", "Only in flowers"],
        correct: "All the time",
        explanation: "Plants respire continuously, both day and night."
      }
    ],
    "Our Environment": [
      {
        question: "Decomposers in ecosystem are:",
        options: ["Producers", "Primary consumers", "Secondary consumers", "Bacteria and fungi"],
        correct: "Bacteria and fungi",
        explanation: "Bacteria and fungi break down dead organic matter as decomposers."
      },
      {
        question: "Ozone layer protects us from:",
        options: ["Infrared rays", "Ultraviolet rays", "X-rays", "Gamma rays"],
        correct: "Ultraviolet rays",
        explanation: "Ozone layer absorbs harmful UV radiation from the sun."
      }
    ]
  },
  english: {
    "First Flight - Prose": [
      {
        question: "Who is the author of 'A Letter to God'?",
        options: ["R.K. Narayan", "G.L. Fuentes", "Jerome K. Jerome", "James Herriot"],
        correct: "G.L. Fuentes",
        explanation: "'A Letter to God' is written by G.L. Fuentes."
      },
      {
        question: "In 'Nelson Mandela: Long Walk to Freedom', what does Mandela say about courage?",
        options: ["Absence of fear", "Triumph over fear", "Running from fear", "Ignoring fear"],
        correct: "Triumph over fear",
        explanation: "Mandela defines courage as the triumph over fear, not the absence of it."
      },
      {
        question: "In 'Two Stories about Flying', the young seagull was afraid of:",
        options: ["Heights", "Flying", "Water", "Other birds"],
        correct: "Flying",
        explanation: "The young seagull was afraid to take his first flight."
      }
    ],
    "First Flight - Poetry": [
      {
        question: "The poem 'Dust of Snow' is written by:",
        options: ["Robert Frost", "William Blake", "John Keats", "William Wordsworth"],
        correct: "Robert Frost",
        explanation: "Robert Frost wrote the poem 'Dust of Snow'."
      },
      {
        question: "In 'Fire and Ice', what does fire represent?",
        options: ["Love", "Desire", "Anger", "Passion"],
        correct: "Desire",
        explanation: "In Frost's poem, fire symbolizes desire and passion."
      }
    ],
    "Footprints without Feet": [
      {
        question: "The story 'A Triumph of Surgery' is about:",
        options: ["A doctor", "A patient", "A dog", "A hospital"],
        correct: "A dog",
        explanation: "The story is about Tricki, a dog who becomes overweight."
      },
      {
        question: "Who wrote 'The Thief's Story'?",
        options: ["Ruskin Bond", "R.K. Narayan", "Victor Canning", "Roald Dahl"],
        correct: "Ruskin Bond",
        explanation: "'The Thief's Story' is written by Ruskin Bond."
      }
    ]
  },
  hindiSparsh: {
    "काव्य खंड": [
      {
        question: "सूरदास किस भाषा में काव्य रचना करते थे?",
        options: ["खड़ी बोली", "ब्रजभाषा", "अवधी", "मैथिली"],
        correct: "ब्रजभाषा",
        explanation: "सूरदास ब्रजभाषा में कविता लिखते थे।"
      },
      {
        question: "'रहीम' के दोहे किस विषय पर आधारित हैं?",
        options: ["प्रेम", "नीति", "प्रकृति", "सभी"],
        correct: "नीति",
        explanation: "रहीम के दोहे मुख्यतः नीति और जीवन मूल्यों पर आधारित हैं।"
      },
      {
        question: "कबीर की भाषा कहलाती है:",
        options: ["खड़ी बोली", "सधुक्कड़ी", "ब्रजभाषा", "अवधी"],
        correct: "सधुक्कड़ी",
        explanation: "कबीर की मिश्रित भाषा को सधुक्कड़ी कहते हैं।"
      }
    ],
    "गद्य खंड": [
      {
        question: "'नेताजी का चश्मा' कहानी में मुख्य संदेश क्या है?",
        options: ["देशभक्ति", "शिक्षा", "गरीबी", "अहिंसा"],
        correct: "देशभक्ति",
        explanation: "यह कहानी सच्ची देशभक्ति और राष्ट्रीय भावना को दर्शाती है।"
      },
      {
        question: "'बालगोबिन भगत' के लेखक कौन हैं?",
        options: ["रामवृक्ष बेनीपुरी", "यशपाल", "फणीश्वरनाथ रेणु", "हरिशंकर परसाई"],
        correct: "रामवृक्ष बेनीपुरी",
        explanation: "'बालगोबिन भगत' रामवृक्ष बेनीपुरी की रचना है।"
      }
    ]
  },
  hindiSanchayan: {
    "हरिहर काका": [
      {
        question: "'हरिहर काका' कहानी के लेखक कौन हैं?",
        options: ["मिथिलेश्वर", "हरिशंकर परसाई", "रामवृक्ष बेनीपुरी", "यशपाल"],
        correct: "मिथिलेश्वर",
        explanation: "'हरिहर काका' मिथिलेश्वर की प्रसिद्ध कहानी है।"
      }
    ],
    "सपनों के-से दिन": [
      {
        question: "'सपनों के-से दिन' किस विधा की रचना है?",
        options: ["कहानी", "संस्मरण", "निबंध", "नाटक"],
        correct: "संस्मरण",
        explanation: "यह गुरुदयाल सिंह का संस्मरण है।"
      }
    ],
    "टोपी शुक्ला": [
      {
        question: "'टोपी शुक्ला' के लेखक कौन हैं?",
        options: ["राही मासूम रज़ा", "कृष्णा सोबती", "भीष्म साहनी", "अमरकांत"],
        correct: "राही मासूम रज़ा",
        explanation: "'टोपी शुक्ला' राही मासूम रज़ा की रचना है।"
      }
    ]
  },
  history: {
    "The Rise of Nationalism in Europe": [
      {
        question: "The French Revolution began in:",
        options: ["1789", "1799", "1804", "1815"],
        correct: "1789",
        explanation: "The French Revolution started in 1789 with the fall of Bastille."
      },
      {
        question: "Who was known as the 'Iron Chancellor' of Germany?",
        options: ["Kaiser Wilhelm", "Otto von Bismarck", "Adolf Hitler", "Frederick the Great"],
        correct: "Otto von Bismarck",
        explanation: "Otto von Bismarck was called the Iron Chancellor for unifying Germany."
      }
    ],
    "Nationalism in India": [
      {
        question: "The Indian National Congress was founded in which year?",
        options: ["1885", "1905", "1915", "1920"],
        correct: "1885",
        explanation: "The Indian National Congress was founded by A.O. Hume in 1885."
      },
      {
        question: "Who led the Salt March in 1930?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bal Gangadhar Tilak"],
        correct: "Mahatma Gandhi",
        explanation: "Mahatma Gandhi led the famous Salt March (Dandi March) in 1930."
      }
    ],
    "The Making of a Global World": [
      {
        question: "The Great Depression began in:",
        options: ["1929", "1930", "1931", "1932"],
        correct: "1929",
        explanation: "The Great Depression started with the Wall Street Crash in 1929."
      }
    ],
    "The Age of Industrialisation": [
      {
        question: "The Industrial Revolution first began in:",
        options: ["France", "Germany", "Britain", "USA"],
        correct: "Britain",
        explanation: "The Industrial Revolution started in Britain in the 18th century."
      }
    ],
    "Print Culture and the Modern World": [
      {
        question: "Gutenberg developed the printing press in:",
        options: ["1440s", "1450s", "1460s", "1470s"],
        correct: "1440s",
        explanation: "Johannes Gutenberg developed the printing press around 1440."
      }
    ]
  },
  geography: {
    "Resources and Development": [
      {
        question: "Which of the following is a renewable resource?",
        options: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
        correct: "Solar energy",
        explanation: "Solar energy is renewable as it can be replenished naturally."
      },
      {
        question: "Black soil is also known as:",
        options: ["Alluvial soil", "Red soil", "Regur soil", "Laterite soil"],
        correct: "Regur soil",
        explanation: "Black soil is locally known as regur soil, ideal for cotton cultivation."
      }
    ],
    "Forest and Wildlife Resources": [
      {
        question: "What percentage of land area should be under forest cover according to National Forest Policy?",
        options: ["25%", "33%", "40%", "50%"],
        correct: "33%",
        explanation: "India's National Forest Policy recommends 33% forest cover."
      }
    ],
    "Water Resources": [
      {
        question: "The Tropic of Cancer passes through how many Indian states?",
        options: ["6", "7", "8", "9"],
        correct: "8",
        explanation: "The Tropic of Cancer passes through 8 Indian states."
      }
    ],
    "Agriculture": [
      {
        question: "Green Revolution in India was started in:",
        options: ["1960s", "1970s", "1980s", "1990s"],
        correct: "1960s",
        explanation: "The Green Revolution began in India during the mid-1960s."
      }
    ],
    "Minerals and Energy Resources": [
      {
        question: "Which state is the largest producer of iron ore in India?",
        options: ["Jharkhand", "Odisha", "Chhattisgarh", "Karnataka"],
        correct: "Odisha",
        explanation: "Odisha is the largest producer of iron ore in India."
      }
    ],
    "Manufacturing Industries": [
      {
        question: "The textile industry in India is concentrated in:",
        options: ["Northern India", "Western India", "Eastern India", "Southern India"],
        correct: "Western India",
        explanation: "Maharashtra and Gujarat are major textile manufacturing states."
      }
    ],
    "Lifelines of National Economy": [
      {
        question: "The longest National Highway in India is:",
        options: ["NH-1", "NH-2", "NH-7", "NH-44"],
        correct: "NH-44",
        explanation: "NH-44 (formerly NH-7) is the longest National Highway in India."
      }
    ]
  },
  civics: {
    "Power-sharing": [
      {
        question: "What is the minimum age to vote in India?",
        options: ["16", "18", "21", "25"],
        correct: "18",
        explanation: "The minimum voting age in India is 18 years."
      },
      {
        question: "Belgium follows which type of power-sharing?",
        options: ["Horizontal", "Vertical", "Communal", "All of these"],
        correct: "All of these",
        explanation: "Belgium practices horizontal, vertical, and communal power-sharing."
      }
    ],
    "Federalism": [
      {
        question: "How many levels of government are there in Indian federalism?",
        options: ["Two", "Three", "Four", "Five"],
        correct: "Three",
        explanation: "India has three levels of government: Central, State, and Local."
      },
      {
        question: "The Constitution of India came into effect on:",
        options: ["15 August 1947", "26 January 1950", "2 October 1950", "26 November 1949"],
        correct: "26 January 1950",
        explanation: "The Indian Constitution came into effect on 26 January 1950."
      }
    ],
    "Democracy and Diversity": [
      {
        question: "Social differences lead to social division when:",
        options: ["They overlap", "They are cross-cutting", "They are parallel", "They are separate"],
        correct: "They overlap",
        explanation: "Overlapping social differences can lead to deep social divisions."
      }
    ],
    "Gender, Religion and Caste": [
      {
        question: "The literacy rate among women in India is:",
        options: ["Higher than men", "Lower than men", "Equal to men", "Not measured"],
        correct: "Lower than men",
        explanation: "Female literacy rate in India is lower than male literacy rate."
      }
    ],
    "Popular Struggles and Movements": [
      {
        question: "The Chipko movement was related to:",
        options: ["Water conservation", "Forest conservation", "Women's rights", "Education"],
        correct: "Forest conservation",
        explanation: "Chipko movement was an environmental movement to protect forests."
      }
    ],
    "Political Parties": [
      {
        question: "A political party is considered national if it secures at least:",
        options: ["4% votes", "6% votes", "8% votes", "10% votes"],
        correct: "6% votes",
        explanation: "A party needs 6% votes in Lok Sabha elections to be recognized as national."
      }
    ],
    "Outcomes of Democracy": [
      {
        question: "Democracy is better than other forms of government because:",
        options: ["It is more efficient", "It ensures equality", "It promotes dignity", "All of these"],
        correct: "It promotes dignity",
        explanation: "Democracy promotes dignity and freedom of individuals."
      }
    ],
    "Challenges to Democracy": [
      {
        question: "The major challenge to Indian democracy is:",
        options: ["Corruption", "Inequality", "Communalism", "All of these"],
        correct: "All of these",
        explanation: "Indian democracy faces challenges from corruption, inequality, and communalism."
      }
    ]
  },
  economics: {
    "Development": [
      {
        question: "What does GDP stand for?",
        options: ["Gross Domestic Product", "General Development Program", "Global Development Policy", "Government Development Plan"],
        correct: "Gross Domestic Product",
        explanation: "GDP stands for Gross Domestic Product, measuring total economic output."
      },
      {
        question: "Per capita income is calculated by:",
        options: ["Total income / Total population", "Total population / Total income", "GDP / GNP", "National income × Population"],
        correct: "Total income / Total population",
        explanation: "Per capita income = Total national income ÷ Total population."
      }
    ],
    "Sectors of the Indian Economy": [
      {
        question: "Which sector is known as the service sector?",
        options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
        correct: "Tertiary",
        explanation: "The tertiary sector is also known as the service sector."
      },
      {
        question: "Agriculture belongs to which sector?",
        options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
        correct: "Primary",
        explanation: "Agriculture is part of the primary sector dealing with natural resources."
      }
    ],
    "Money and Credit": [
      {
        question: "The Reserve Bank of India was established in:",
        options: ["1935", "1947", "1950", "1955"],
        correct: "1935",
        explanation: "RBI was established on 1 April 1935 during British rule."
      },
      {
        question: "What is the main source of credit for rural households?",
        options: ["Banks", "Cooperatives", "Moneylenders", "Self-help groups"],
        correct: "Moneylenders",
        explanation: "Despite banking growth, moneylenders remain a major credit source in rural areas."
      }
    ],
    "Globalisation and the Indian Economy": [
      {
        question: "WTO stands for:",
        options: ["World Trade Organization", "World Tourism Organization", "World Transport Organization", "World Technology Organization"],
        correct: "World Trade Organization",
        explanation: "WTO stands for World Trade Organization, regulating international trade."
      },
      {
        question: "Liberalisation means:",
        options: ["More government control", "Less government control", "No government", "Private government"],
        correct: "Less government control",
        explanation: "Liberalisation involves reducing government restrictions on economic activities."
      }
    ],
    "Consumer Rights": [
      {
        question: "World Consumer Rights Day is observed on:",
        options: ["15 March", "24 December", "1 May", "5 June"],
        correct: "15 March",
        explanation: "World Consumer Rights Day is celebrated on 15 March every year."
      },
      {
        question: "The right to be heard is a:",
        options: ["Legal right", "Consumer right", "Fundamental right", "Constitutional right"],
        correct: "Consumer right",
        explanation: "The right to be heard is one of the basic consumer rights."
      }
    ]
  }
};
