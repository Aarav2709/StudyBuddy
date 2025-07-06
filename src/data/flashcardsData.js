export const flashcardsData = {
  mathematics: {
    "Real Numbers": [
      {
        question: "What is the Fundamental Theorem of Arithmetic?",
        answer: "Every composite number can be expressed as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.",
        difficulty: "medium"
      },
      {
        question: "What is an irrational number?",
        answer: "A number that cannot be expressed in the form p/q where p and q are integers and q ≠ 0.",
        difficulty: "easy"
      },
      {
        question: "If HCF(a,b) = 1, what can you say about a and b?",
        answer: "a and b are co-prime numbers (they have no common factors other than 1).",
        difficulty: "medium"
      },
      {
        question: "What is the decimal expansion of a rational number?",
        answer: "The decimal expansion of a rational number is either terminating or non-terminating repeating.",
        difficulty: "hard"
      },
      {
        question: "What is Euclid's Division Lemma?",
        answer: "Given positive integers a and b, there exist unique integers q and r satisfying a = bq + r, where 0 ≤ r < b.",
        difficulty: "medium"
      },
      {
        question: "Which numbers are called twin primes?",
        answer: "Two prime numbers that differ by 2 are called twin primes. Example: (3,5), (5,7), (11,13).",
        difficulty: "easy"
      }
    ],
    "Polynomials": [
      {
        question: "What is the degree of a polynomial?",
        answer: "The highest power of the variable in the polynomial.",
        difficulty: "easy"
      },
      {
        question: "State the Division Algorithm for polynomials.",
        answer: "If p(x) and g(x) are polynomials with g(x) ≠ 0, then we can find polynomials q(x) and r(x) such that p(x) = g(x) × q(x) + r(x), where r(x) = 0 or degree of r(x) < degree of g(x).",
        difficulty: "hard"
      },
      {
        question: "What is a zero of a polynomial?",
        answer: "A zero of a polynomial p(x) is a value of x for which p(x) = 0.",
        difficulty: "medium"
      },
      {
        question: "What is the relationship between zeros and coefficients of a quadratic polynomial?",
        answer: "For ax² + bx + c = 0, sum of zeros = -b/a and product of zeros = c/a.",
        difficulty: "hard"
      },
      {
        question: "What is a linear polynomial?",
        answer: "A polynomial of degree 1 is called a linear polynomial. General form: ax + b, where a ≠ 0.",
        difficulty: "easy"
      }
    ],
    "Linear Equations": [
      {
        question: "What is a linear equation in two variables?",
        answer: "An equation of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero.",
        difficulty: "easy"
      },
      {
        question: "How many solutions does a pair of linear equations have if they are consistent and independent?",
        answer: "Exactly one solution (unique solution).",
        difficulty: "medium"
      },
      {
        question: "What are the conditions for inconsistent equations?",
        answer: "For equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, they are inconsistent if a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
        difficulty: "hard"
      },
      {
        question: "What is the substitution method?",
        answer: "A method to solve linear equations by expressing one variable in terms of another and substituting it in the second equation.",
        difficulty: "medium"
      }
    ],
    "Quadratic Equations": [
      {
        question: "What is the standard form of a quadratic equation?",
        answer: "ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0.",
        difficulty: "easy"
      },
      {
        question: "What is the quadratic formula?",
        answer: "x = (-b ± √(b² - 4ac)) / 2a",
        difficulty: "medium"
      },
      {
        question: "What is the discriminant of a quadratic equation?",
        answer: "The discriminant is b² - 4ac. It determines the nature of roots.",
        difficulty: "medium"
      },
      {
        question: "When does a quadratic equation have equal roots?",
        answer: "When the discriminant (b² - 4ac) = 0.",
        difficulty: "hard"
      }
    ],
    "Arithmetic Progressions": [
      {
        question: "What is an Arithmetic Progression?",
        answer: "A sequence of numbers where the difference between consecutive terms is constant.",
        difficulty: "easy"
      },
      {
        question: "What is the formula for the nth term of an AP?",
        answer: "aₙ = a + (n-1)d, where a is the first term and d is the common difference.",
        difficulty: "medium"
      },
      {
        question: "What is the sum of first n terms of an AP?",
        answer: "Sₙ = n/2[2a + (n-1)d] or Sₙ = n/2(a + l), where l is the last term.",
        difficulty: "hard"
      }
    ],
    "Coordinate Geometry": [
      {
        question: "What is the distance formula between two points?",
        answer: "Distance = √[(x₂-x₁)² + (y₂-y₁)²]",
        difficulty: "medium"
      },
      {
        question: "What is the section formula?",
        answer: "Point dividing line segment joining (x₁,y₁) and (x₂,y₂) in ratio m:n is ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)).",
        difficulty: "hard"
      },
      {
        question: "What is the midpoint formula?",
        answer: "Midpoint of line segment joining (x₁,y₁) and (x₂,y₂) is ((x₁+x₂)/2, (y₁+y₂)/2).",
        difficulty: "easy"
      }
    ],
    "Triangles": [
      {
        question: "State the Basic Proportionality Theorem (Thales' Theorem).",
        answer: "If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.",
        difficulty: "medium"
      },
      {
        question: "What are the conditions for similarity of triangles?",
        answer: "AA (Angle-Angle), SSS (Side-Side-Side), SAS (Side-Angle-Side) similarity criteria.",
        difficulty: "hard"
      },
      {
        question: "State the Pythagorean theorem.",
        answer: "In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides.",
        difficulty: "easy"
      }
    ],
    "Circles": [
      {
        question: "What is a tangent to a circle?",
        answer: "A line that touches the circle at exactly one point.",
        difficulty: "easy"
      },
      {
        question: "What is the relationship between tangent and radius at point of contact?",
        answer: "The tangent to a circle is perpendicular to the radius at the point of contact.",
        difficulty: "medium"
      },
      {
        question: "What is the length of tangent from external point?",
        answer: "The lengths of tangents drawn from an external point to a circle are equal.",
        difficulty: "hard"
      }
    ],
    "Areas and Perimeters": [
      {
        question: "What is the area of a circle?",
        answer: "Area = πr², where r is the radius.",
        difficulty: "easy"
      },
      {
        question: "What is the area of a sector?",
        answer: "Area of sector = (θ/360°) × πr², where θ is the central angle in degrees.",
        difficulty: "medium"
      },
      {
        question: "What is the formula for the area of a triangle using Heron's formula?",
        answer: "Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semi-perimeter.",
        difficulty: "hard"
      }
    ],
    "Surface Areas and Volumes": [
      {
        question: "What is the volume of a cylinder?",
        answer: "Volume = πr²h, where r is the radius and h is the height.",
        difficulty: "easy"
      },
      {
        question: "What is the total surface area of a cone?",
        answer: "Total Surface Area = πr(r + l), where r is radius and l is slant height.",
        difficulty: "medium"
      },
      {
        question: "What is the volume of a sphere?",
        answer: "Volume = (4/3)πr³, where r is the radius.",
        difficulty: "medium"
      }
    ],
    "Statistics": [
      {
        question: "What is the formula for mean of grouped data?",
        answer: "Mean = Σ(fᵢxᵢ)/Σfᵢ, where fᵢ is frequency and xᵢ is class mark.",
        difficulty: "medium"
      },
      {
        question: "What is the median of grouped data?",
        answer: "Median = l + [(n/2 - cf)/f] × h, where l is lower boundary of median class.",
        difficulty: "hard"
      },
      {
        question: "What is the mode of grouped data?",
        answer: "Mode = l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h, where l is lower boundary of modal class.",
        difficulty: "hard"
      }
    ],
    "Probability": [
      {
        question: "What is the probability of an event?",
        answer: "Probability = Number of favorable outcomes / Total number of possible outcomes.",
        difficulty: "easy"
      },
      {
        question: "What is the range of probability?",
        answer: "Probability always lies between 0 and 1, inclusive.",
        difficulty: "easy"
      },
      {
        question: "What is the probability of a certain event?",
        answer: "The probability of a certain event is 1.",
        difficulty: "medium"
      },
      {
        question: "What is the sum of probabilities of all elementary events?",
        answer: "The sum of probabilities of all elementary events of an experiment is 1.",
        difficulty: "medium"
      }
    ]
  },
  science: {
    "Light - Reflection and Refraction": [
      {
        question: "What is the SI unit of power of a lens?",
        answer: "Dioptre (D).",
        difficulty: "easy"
      },
      {
        question: "State Snell's law of refraction.",
        answer: "The ratio of sine of angle of incidence to the sine of angle of refraction is constant for a given pair of media.",
        difficulty: "medium"
      },
      {
        question: "What causes myopia and how is it corrected?",
        answer: "Myopia is caused by the eye lens being too curved or the eyeball being too long. It is corrected using a concave lens.",
        difficulty: "hard"
      },
      {
        question: "What is the focal length of a plane mirror?",
        answer: "The focal length of a plane mirror is infinity.",
        difficulty: "medium"
      },
      {
        question: "What type of lens is used in a magnifying glass?",
        answer: "A convex lens is used in a magnifying glass.",
        difficulty: "easy"
      },
      {
        question: "What is hypermetropia?",
        answer: "Hypermetropia (far-sightedness) is a defect where distant objects are seen clearly but near objects appear blurred.",
        difficulty: "medium"
      }
    ],
    "Electricity": [
      {
        question: "State Ohm's law.",
        answer: "The potential difference across a conductor is directly proportional to the current flowing through it, provided the temperature remains constant. V = IR.",
        difficulty: "medium"
      },
      {
        question: "What is the SI unit of electric current?",
        answer: "Ampere (A).",
        difficulty: "easy"
      },
      {
        question: "What is the difference between AC and DC?",
        answer: "AC (Alternating Current) changes direction periodically, while DC (Direct Current) flows in one direction only.",
        difficulty: "medium"
      },
      {
        question: "What is electric power?",
        answer: "Electric power is the rate of consumption of electric energy. P = VI = I²R = V²/R.",
        difficulty: "hard"
      },
      {
        question: "What happens to resistance when resistors are connected in series?",
        answer: "In series connection, total resistance increases: R = R₁ + R₂ + R₃ + ...",
        difficulty: "medium"
      }
    ],
    "Magnetic Effects of Electric Current": [
      {
        question: "What is a magnetic field?",
        answer: "A magnetic field is the region around a magnet where its magnetic force can be detected.",
        difficulty: "easy"
      },
      {
        question: "State Fleming's left-hand rule.",
        answer: "If the thumb, forefinger, and middle finger are held mutually perpendicular, with forefinger pointing in direction of magnetic field and middle finger in direction of current, then thumb points in direction of force.",
        difficulty: "hard"
      },
      {
        question: "What is electromagnetic induction?",
        answer: "The phenomenon of generating electric current in a conductor by changing the magnetic field around it.",
        difficulty: "medium"
      }
    ],
    "Acids, Bases and Salts": [
      {
        question: "What is the pH range of acids?",
        answer: "Less than 7 (0 to 7).",
        difficulty: "easy"
      },
      {
        question: "What happens when an acid reacts with a metal?",
        answer: "Acid + Metal → Salt + Hydrogen gas.",
        difficulty: "medium"
      },
      {
        question: "What is a neutralization reaction?",
        answer: "The reaction between an acid and a base to form salt and water.",
        difficulty: "medium"
      },
      {
        question: "What is the common name of sodium bicarbonate?",
        answer: "Baking soda.",
        difficulty: "easy"
      },
      {
        question: "What causes tooth decay?",
        answer: "Bacteria in mouth produce acids by degrading sugar and food particles, lowering pH in mouth below 5.5.",
        difficulty: "hard"
      }
    ],
    "Metals and Non-metals": [
      {
        question: "What is malleability?",
        answer: "The property of metals that allows them to be beaten into thin sheets.",
        difficulty: "easy"
      },
      {
        question: "What is an alloy?",
        answer: "A homogeneous mixture of two or more metals, or a metal and a non-metal.",
        difficulty: "medium"
      },
      {
        question: "What is the process of obtaining metals from their ores called?",
        answer: "Metallurgy.",
        difficulty: "medium"
      },
      {
        question: "Why do ionic compounds conduct electricity in molten state?",
        answer: "In molten state, ionic compounds dissociate into ions which are free to move and conduct electricity.",
        difficulty: "hard"
      }
    ],
    "Carbon and its Compounds": [
      {
        question: "What is catenation?",
        answer: "The ability of carbon atoms to form bonds with other carbon atoms to form long chains.",
        difficulty: "medium"
      },
      {
        question: "What is the molecular formula of methane?",
        answer: "CH₄.",
        difficulty: "easy"
      },
      {
        question: "What is saponification?",
        answer: "The process of making soap by treating vegetable oils or animal fats with sodium hydroxide.",
        difficulty: "hard"
      },
      {
        question: "What are hydrocarbons?",
        answer: "Organic compounds containing only carbon and hydrogen atoms.",
        difficulty: "easy"
      }
    ],
    "Life Processes": [
      {
        question: "What is photosynthesis?",
        answer: "The process by which green plants make their own food using sunlight, carbon dioxide, and water.",
        difficulty: "easy"
      },
      {
        question: "What is the main function of stomata?",
        answer: "Stomata help in gas exchange and transpiration in plants.",
        difficulty: "medium"
      },
      {
        question: "What is the role of HCl in stomach?",
        answer: "HCl creates acidic medium for pepsin to work, kills bacteria, and breaks down food.",
        difficulty: "medium"
      },
      {
        question: "What is double circulation?",
        answer: "The blood flows through the heart twice in one complete cycle - pulmonary and systemic circulation.",
        difficulty: "hard"
      }
    ],
    "Control and Coordination": [
      {
        question: "What is a reflex action?",
        answer: "An automatic response to a stimulus that doesn't involve conscious thought.",
        difficulty: "easy"
      },
      {
        question: "What are hormones?",
        answer: "Chemical messengers produced by endocrine glands that regulate various body functions.",
        difficulty: "medium"
      },
      {
        question: "What is the function of insulin?",
        answer: "Insulin regulates blood sugar levels by promoting glucose uptake by cells.",
        difficulty: "medium"
      },
      {
        question: "What is tropism?",
        answer: "The directional growth movement of plants in response to external stimuli.",
        difficulty: "hard"
      }
    ],
    "How do Organisms Reproduce": [
      {
        question: "What is binary fission?",
        answer: "A type of asexual reproduction where a single organism divides into two identical organisms.",
        difficulty: "easy"
      },
      {
        question: "What is the male reproductive part of a flower?",
        answer: "Stamen (consisting of anther and filament).",
        difficulty: "medium"
      },
      {
        question: "What is menstruation?",
        answer: "The monthly discharge of blood and tissues from the uterus when fertilization doesn't occur.",
        difficulty: "medium"
      },
      {
        question: "What is the advantage of sexual reproduction?",
        answer: "Sexual reproduction creates genetic variation, which helps in evolution and adaptation.",
        difficulty: "hard"
      }
    ],
    "Heredity and Evolution": [
      {
        question: "What are genes?",
        answer: "Units of heredity that carry information from parents to offspring.",
        difficulty: "easy"
      },
      {
        question: "What is a dominant trait?",
        answer: "A trait that is expressed even when only one copy of the gene is present.",
        difficulty: "medium"
      },
      {
        question: "What is natural selection?",
        answer: "The process by which organisms with favorable traits survive and reproduce more successfully.",
        difficulty: "hard"
      },
      {
        question: "What are fossils?",
        answer: "Preserved remains or traces of organisms that lived in the past.",
        difficulty: "easy"
      }
    ],
    "Our Environment": [
      {
        question: "What are decomposers?",
        answer: "Organisms that break down dead organic matter and recycle nutrients back to the ecosystem.",
        difficulty: "easy"
      },
      {
        question: "What is an ecosystem?",
        answer: "A system formed by the interaction of living organisms with their physical environment.",
        difficulty: "medium"
      },
      {
        question: "What is ozone depletion?",
        answer: "The reduction in the amount of ozone in the Earth's stratosphere, caused by pollutants like CFCs.",
        difficulty: "hard"
      },
      {
        question: "What is biodegradable waste?",
        answer: "Waste materials that can be broken down by natural biological processes.",
        difficulty: "medium"
      }
    ],
    "Natural Resource Management": [
      {
        question: "What is sustainable development?",
        answer: "Development that meets present needs without compromising the ability of future generations to meet their needs.",
        difficulty: "medium"
      },
      {
        question: "What is water harvesting?",
        answer: "The collection and storage of rainwater for future use.",
        difficulty: "easy"
      },
      {
        question: "What are fossil fuels?",
        answer: "Non-renewable energy sources formed from the remains of ancient organisms (coal, petroleum, natural gas).",
        difficulty: "medium"
      },
      {
        question: "What is the greenhouse effect?",
        answer: "The warming of Earth's atmosphere due to the trapping of heat by greenhouse gases.",
        difficulty: "hard"
      }
    ]
  },
  english: {
    "First Flight - Prose": [
      {
        question: "Who wrote 'A Letter to God'?",
        answer: "G.L. Fuentes.",
        difficulty: "easy"
      },
      {
        question: "What is the main theme of 'Nelson Mandela: Long Walk to Freedom'?",
        answer: "The struggle against apartheid and the importance of freedom and equality.",
        difficulty: "medium"
      },
      {
        question: "In 'Two Stories about Flying', what does the young seagull learn?",
        answer: "The young seagull learns to overcome fear and trust in his abilities to fly.",
        difficulty: "medium"
      },
      {
        question: "What is the central message of 'From the Diary of Anne Frank'?",
        answer: "The story highlights the innocence and optimism of a young girl during the Holocaust.",
        difficulty: "hard"
      },
      {
        question: "Who is the author of 'The Hundred Dresses'?",
        answer: "El Bsor Ester.",
        difficulty: "easy"
      },
      {
        question: "What lesson does 'Glimpses of India' teach us?",
        answer: "It teaches about India's rich cultural diversity and traditional food practices.",
        difficulty: "medium"
      }
    ],
    "First Flight - Poetry": [
      {
        question: "Who wrote the poem 'Dust of Snow'?",
        answer: "Robert Frost.",
        difficulty: "easy"
      },
      {
        question: "What is the central theme of 'Fire and Ice'?",
        answer: "The poem discusses how the world might end - through fire (desire) or ice (hatred).",
        difficulty: "medium"
      },
      {
        question: "What does the tiger symbolize in 'A Tiger in the Zoo'?",
        answer: "The tiger symbolizes freedom and the natural world being confined by human civilization.",
        difficulty: "hard"
      },
      {
        question: "Who is the poet of 'How to Tell Wild Animals'?",
        answer: "Carolyn Wells.",
        difficulty: "easy"
      },
      {
        question: "What is the message of 'The Ball Poem'?",
        answer: "The poem teaches about loss, growing up, and learning to cope with life's disappointments.",
        difficulty: "medium"
      }
    ],
    "Footprints Without Feet": [
      {
        question: "Who wrote 'A Triumph of Surgery'?",
        answer: "James Herriot.",
        difficulty: "easy"
      },
      {
        question: "What is the main theme of 'The Thief's Story'?",
        answer: "The story explores themes of trust, friendship, and moral transformation.",
        difficulty: "medium"
      },
      {
        question: "Who is the author of 'Footprints without Feet'?",
        answer: "H.G. Wells.",
        difficulty: "easy"
      },
      {
        question: "What lesson does 'The Midnight Visitor' teach?",
        answer: "The story shows that intelligence and presence of mind can overcome physical strength.",
        difficulty: "hard"
      },
      {
        question: "What is the central idea of 'Bholi'?",
        answer: "The story emphasizes the importance of education in transforming lives and building confidence.",
        difficulty: "medium"
      }
    ],
    "Grammar and Writing": [
      {
        question: "What is a reported speech?",
        answer: "Reported speech is when we tell someone what another person said without using their exact words.",
        difficulty: "medium"
      },
      {
        question: "What are the types of conditionals?",
        answer: "Zero, First, Second, and Third conditionals, each expressing different degrees of possibility.",
        difficulty: "hard"
      },
      {
        question: "What is a modal verb?",
        answer: "A modal verb is a helping verb that expresses necessity, possibility, permission, or ability (can, could, may, might, must, shall, should, will, would).",
        difficulty: "medium"
      },
      {
        question: "What is the active voice?",
        answer: "In active voice, the subject performs the action expressed by the verb.",
        difficulty: "easy"
      },
      {
        question: "What is a relative clause?",
        answer: "A relative clause is a type of subordinate clause that modifies a noun or pronoun.",
        difficulty: "hard"
      }
    ]
  },
  hindi: {
    "स्पर्श - काव्य खंड": [
      {
        question: "सूरदास किस काल के कवि थे?",
        answer: "भक्तिकाल के कृष्ण भक्ति शाखा के कवि थे।",
        difficulty: "easy"
      },
      {
        question: "तुलसीदास की प्रसिद्ध रचना कौन सी है?",
        answer: "रामचरितमानस।",
        difficulty: "easy"
      },
      {
        question: "कबीर के दोहों की मुख्य विशेषता क्या है?",
        answer: "कबीर के दोहों में सामाजिक कुरीतियों पर प्रहार और आध्यात्मिक संदेश है।",
        difficulty: "medium"
      },
      {
        question: "रहीम किसके दरबारी कवि थे?",
        answer: "सम्राट अकबर के दरबारी कवि थे।",
        difficulty: "medium"
      },
      {
        question: "बिहारी किस काल के कवि हैं?",
        answer: "रीतिकाल के कवि हैं।",
        difficulty: "hard"
      }
    ],
    "स्पर्श - गद्य खंड": [
      {
        question: "'नेताजी का चश्मा' कहानी के लेखक कौन हैं?",
        answer: "स्वयं प्रकाश।",
        difficulty: "medium"
      },
      {
        question: "बालगोबिन भगत किस तरह के व्यक्ति थे?",
        answer: "वे एक सच्चे साधु, निष्ठावान भक्त और समाज सुधारक थे।",
        difficulty: "medium"
      },
      {
        question: "'लखनवी अंदाज़' किसकी रचना है?",
        answer: "यशपाल की रचना है।",
        difficulty: "easy"
      },
      {
        question: "'मानवीय करुणा की दिव्य चमक' पाठ किस पर आधारित है?",
        answer: "फादर कामिल बुल्के के जीवन पर आधारित है।",
        difficulty: "hard"
      }
    ],
    "संचयन": [
      {
        question: "'हरिहर काका' कहानी का मुख्य संदेश क्या है?",
        answer: "पारिवारिक स्वार्थ और बुजुर्गों के साथ दुर्व्यवहार की समस्या को दिखाना।",
        difficulty: "medium"
      },
      {
        question: "'सपनों के-से दिन' किसकी आत्मकथा है?",
        answer: "गुरुदेव की आत्मकथा है।",
        difficulty: "easy"
      },
      {
        question: "'टोपी शुक्ला' कहानी का केंद्रीय विषय क्या है?",
        answer: "बचपन की मित्रता और सामाजिक भेदभाव।",
        difficulty: "hard"
      }
    ],
    "व्याकरण": [
      {
        question: "उपसर्ग किसे कहते हैं?",
        answer: "जो शब्दांश किसी शब्द के आरंभ में जुड़कर उसके अर्थ में विशेषता लाते हैं।",
        difficulty: "medium"
      },
      {
        question: "प्रत्यय की परिभाषा दें।",
        answer: "जो शब्दांश किसी शब्द के अंत में जुड़कर नया शब्द बनाते हैं।",
        difficulty: "medium"
      },
      {
        question: "समास कितने प्रकार के होते हैं?",
        answer: "छह प्रकार के होते हैं - अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि।",
        difficulty: "hard"
      },
      {
        question: "अलंकार का अर्थ क्या है?",
        answer: "काव्य की शोभा बढ़ाने वाले तत्व को अलंकार कहते हैं।",
        difficulty: "easy"
      }
    ]
  },
  socialscience: {
    "History - India and the Contemporary World II": [
      {
        question: "What was the main cause of the First World War?",
        answer: "Imperialism, alliance system, nationalism, and the immediate trigger was the assassination of Archduke Franz Ferdinand.",
        difficulty: "hard"
      },
      {
        question: "Who founded the Indian National Congress?",
        answer: "A.O. Hume in 1885.",
        difficulty: "easy"
      },
      {
        question: "What was the Rowlatt Act?",
        answer: "A law passed in 1919 that gave the British government enormous power to repress political activities and allowed detention without trial.",
        difficulty: "medium"
      },
      {
        question: "When did the Salt March take place?",
        answer: "The Salt March took place in 1930, led by Mahatma Gandhi.",
        difficulty: "medium"
      },
      {
        question: "What was the Simon Commission?",
        answer: "A commission appointed in 1927 to suggest constitutional reforms, boycotted because it had no Indian members.",
        difficulty: "hard"
      },
      {
        question: "Who coined the term 'Satyagraha'?",
        answer: "Mahatma Gandhi coined the term 'Satyagraha'.",
        difficulty: "easy"
      }
    ],
    "Geography - Contemporary India II": [
      {
        question: "What are renewable resources?",
        answer: "Resources that can be renewed or replenished naturally, like solar energy, wind energy, water, etc.",
        difficulty: "easy"
      },
      {
        question: "What is sustainable development?",
        answer: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
        difficulty: "medium"
      },
      {
        question: "What is soil erosion?",
        answer: "The removal of fertile top layer of soil by wind, water, or human activities.",
        difficulty: "medium"
      },
      {
        question: "What are the major types of forests in India?",
        answer: "Tropical evergreen, tropical deciduous, thorny bushes, mangrove, and montane forests.",
        difficulty: "hard"
      },
      {
        question: "What is water harvesting?",
        answer: "The collection and storage of rainwater for future use instead of allowing it to run off.",
        difficulty: "easy"
      }
    ],
    "Political Science - Democratic Politics II": [
      {
        question: "What is democracy?",
        answer: "A form of government in which the rulers are elected by the people.",
        difficulty: "easy"
      },
      {
        question: "What are the features of federalism?",
        answer: "Two or more levels of government, division of powers, written constitution, and independent judiciary.",
        difficulty: "medium"
      },
      {
        question: "What is a political party?",
        answer: "A group of people who come together to contest elections and hold power in the government.",
        difficulty: "easy"
      },
      {
        question: "What are pressure groups?",
        answer: "Organizations that attempt to influence government policies without seeking to form government themselves.",
        difficulty: "hard"
      },
      {
        question: "What is the role of opposition in democracy?",
        answer: "To question government decisions, present alternative policies, and keep the government accountable.",
        difficulty: "medium"
      }
    ],
    "Economics - Understanding Economic Development": [
      {
        question: "What is GDP?",
        answer: "Gross Domestic Product - the total value of all goods and services produced within a country in a year.",
        difficulty: "medium"
      },
      {
        question: "What is the difference between primary, secondary, and tertiary sectors?",
        answer: "Primary: agriculture, mining; Secondary: manufacturing; Tertiary: services like banking, transport, etc.",
        difficulty: "medium"
      },
      {
        question: "What is Human Development Index (HDI)?",
        answer: "A measure of human development based on life expectancy, education, and per capita income.",
        difficulty: "hard"
      },
      {
        question: "What is globalization?",
        answer: "The process of rapid integration of countries through greater foreign trade and foreign investment.",
        difficulty: "medium"
      },
      {
        question: "What is the poverty line?",
        answer: "An imaginary line used by economists to define poor people - those below this line are considered poor.",
        difficulty: "easy"
      },
      {
        question: "What are the goals of development?",
        answer: "Better income, quality education, good health, respect from others, job security, and peaceful environment.",
        difficulty: "hard"
      }
    ]
  }
};
