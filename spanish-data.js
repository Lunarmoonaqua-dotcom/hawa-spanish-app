export const TEACHER_SVG = `
<svg class="teacher-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="#FFDBDF"/>
  <path d="M22 45C22 25 32 14 50 14C68 14 78 25 78 45C78 60 75 70 70 72C65 74 65 60 50 60C35 60 35 74 30 72C25 70 22 60 22 45Z" fill="#1C131D"/>
  <path d="M24 100C24 82 35 76 50 76C65 76 76 82 76 100H24Z" fill="#FFE797"/>
  <path d="M42 76L50 90L58 76H42Z" fill="#F791A9"/>
  <path d="M44 64H56V78H44V64Z" fill="#6B3E26"/>
  <ellipse cx="50" cy="46" rx="19" ry="22" fill="#824C30"/>
  <circle cx="32" cy="30" r="10" fill="#1C131D"/>
  <circle cx="43" cy="22" r="10" fill="#1C131D"/>
  <circle cx="57" cy="22" r="10" fill="#1C131D"/>
  <circle cx="68" cy="30" r="10" fill="#1C131D"/>
  <circle cx="72" cy="42" r="8" fill="#1C131D"/>
  <circle cx="28" cy="42" r="8" fill="#1C131D"/>
  <rect x="35" y="40" width="12" height="9" rx="3" stroke="#F791A9" stroke-width="2.5" fill="none"/>
  <rect x="53" y="40" width="12" height="9" rx="3" stroke="#F791A9" stroke-width="2.5" fill="none"/>
  <line x1="47" y1="44" x2="53" y2="44" stroke="#F791A9" stroke-width="2.5"/>
  <circle cx="41" cy="44.5" r="2" fill="#1C131D"/>
  <circle cx="59" cy="44.5" r="2" fill="#1C131D"/>
  <path d="M44 57C46 60 54 60 56 57" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="30" cy="50" r="2.5" fill="#FFE797"/>
  <circle cx="70" cy="50" r="2.5" fill="#FFE797"/>
</svg>
`;

export const HAWA_CURRICULUM = {
  easy: [
    {
      id: "ez1",
      num: 1,
      title: "Nouns, Articles & Adjectives",
      category: "nouns_adjectives",
      estTime: "45 min",
      desc: "Gender patterns, definite/indefinite articles, plurals, and adjective agreement.",
      overview: {
        concept: "Every Spanish noun is masculine or feminine. Definite articles (el, la, los, las) and adjectives must agree with the noun in gender and number.",
        rules: [
          "Nouns ending in -o are mostly masculine; nouns ending in -a, -ción, -dad are feminine.",
          "Add -s to vowels and -es to consonants for plural forms.",
          "Descriptive adjectives follow the noun."
        ],
        examples: [
          { es: "El libro rojo / Los libros rojos", en: "The red book / The red books" },
          { es: "La ciudad grande / Las ciudades grandes", en: "The big city / The big cities" }
        ],
        watchOut: "Exceptions: 'el mapa', 'el día', 'el planeta' end in -a but are masculine.",
        mascotTip: "Keep descriptive adjectives behind the noun like loyal shadow companions!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Select the correct article for 'canción' (song):",
          options: ["El", "La", "Los", "Las"],
          correct: 1,
          explanation: "Nouns ending in -ción are feminine and take 'la'."
        },
        {
          type: "fill",
          prompt: "Translate 'the white houses': 'Las casas ______.'",
          correct: "blancas",
          explanation: "'Casas' is feminine plural, so the adjective must be 'blancas'."
        }
      ],
      game: [
        {
          prompt: "Which noun is masculine?",
          options: ["El mapa", "La libertad", "La lección", "La flor"],
          correct: 0,
          explanation: "'El mapa' is an established masculine exception."
        },
        {
          prompt: "Plural form of 'la mujer feliz':",
          options: ["las mujeres felices", "las mujer felices", "los mujeres feliz", "las mujeres felizas"],
          correct: 0,
          explanation: "'Mujer' adds -es ('mujeres'), and 'feliz' changes z -> c + es ('felices')."
        }
      ],
      exam: [
        {
          prompt: "Which is the correct translation of 'an easy lesson'?",
          options: ["una lección fácil", "un lección fácil", "una lección fâcila", "un lección fâcilo"],
          correct: 0,
          explanation: "'Lección' is feminine ('una lección') and 'fácil' has one gender form."
        }
      ]
    },
    {
      id: "ez2",
      num: 2,
      title: "Estar, Ser & Subject Pronouns",
      category: "present_verbs",
      estTime: "60 min",
      desc: "Permanent identity (Ser) vs. temporary state/location (Estar) and subject pronouns.",
      overview: {
        concept: "Ser expresses identity, profession, origin, and characteristics. Estar expresses location, physical condition, and emotions.",
        rules: [
          "SER: Description, Profession, Origin, Time, Relationship, Possession.",
          "ESTAR: Position, Location, Action, Condition, Emotion."
        ],
        examples: [
          { es: "Soy de México, pero estoy en Madrid.", en: "I am from Mexico (origin), but I am in Madrid (location)." },
          { es: "La sopa está caliente.", en: "The soup is hot (condition)." }
        ],
        watchOut: "Do not use 'un/una' with unmodified professions: 'Ella es abogada'.",
        mascotTip: "How you feel and where you are, always use the verb ESTAR!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose the correct verb: 'Nosotros ______ en la biblioteca.'",
          options: ["somos", "estamos", "es", "está"],
          correct: 1,
          explanation: "Physical location always uses 'estar'."
        },
        {
          type: "fill",
          prompt: "Complete: 'Eduardo ______ (is) ingeniero.'",
          correct: "es",
          explanation: "Professions express permanent identity/training and use 'ser' (es)."
        }
      ],
      game: [
        {
          prompt: "Select the sentence expressing a temporary condition:",
          options: ["El café está frío.", "El café es de Colombia.", "El café es negro.", "El café es bueno."],
          correct: 0,
          explanation: "'Está frío' describes current state/temperature."
        }
      ],
      exam: [
        {
          prompt: "Choose the correct verb: '¿Dónde ______ (are) ustedes ahora?'",
          options: ["están", "son", "estamos", "somos"],
          correct: 0,
          explanation: "Location uses 'estar' -> 'están'."
        }
      ]
    },
    {
      id: "ez3",
      num: 3,
      title: "Hay, Interrogatives, Days & Months",
      category: "foundations",
      estTime: "50 min",
      desc: "Using 'hay' (there is/are), essential question words, calendar terms, and time expressions.",
      overview: {
        concept: "'Hay' expresses existence (there is / there are). Interrogatives always carry written accents.",
        rules: [
          "Never place definite articles (el/la) directly after 'hay'.",
          "Days of the week use 'el' or 'los' to indicate 'on Monday' (el lunes)."
        ],
        examples: [
          { es: "¿Qué hay en la mesa? Hay tres libros.", en: "What is on the table? There are three books." }
        ],
        watchOut: "Days of the week and months are not capitalized in Spanish.",
        mascotTip: "'Hay' never changes to a plural form when describing multiple items!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Translate: 'There are many flowers in the garden.'",
          options: ["Hay muchas flores en el jardín", "Están muchas flores en el jardín", "Hay las flores en el jardín", "Son muchas flores"],
          correct: 0,
          explanation: "'Hay' expresses the presence or existence of items."
        }
      ],
      game: [
        {
          prompt: "Which question asks 'Whose idea is it?'",
          options: ["¿De quién es la idea?", "¿Quién es la idea?", "¿Cuál es la idea?", "¿Por qué es la idea?"],
          correct: 0,
          explanation: "'¿De quién...?' expresses possession / 'whose'."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'Is there a doctor here?'",
          options: ["¿Hay un doctor aquí?", "¿Está un doctor aquí?", "¿Es un doctor aquí?", "¿Tiene un doctor aquí?"],
          correct: 0,
          explanation: "Existence query uses 'hay'."
        }
      ]
    },
    {
      id: "ez4",
      num: 4,
      title: "Numbers, Dates & Telling Time",
      category: "foundations",
      estTime: "55 min",
      desc: "Cardinal/ordinal numbers, calendar dates, and telling exact/approximate time.",
      overview: {
        concept: "Use 'Es la una' for 1:00 and 'Son las...' for all other hours.",
        rules: [
          "Use 'el primero' only for the first day of the month; use cardinal numbers for all other dates.",
          "Add minutes with 'y' and subtract minutes with 'menos'."
        ],
        examples: [
          { es: "Son las cuatro y media de la tarde.", en: "It is 4:30 in the afternoon." }
        ],
        watchOut: "'Cien' becomes 'ciento' before numbers lower than itself (ciento diez).",
        mascotTip: "'Es la una' is singular because one hour is singular!"
      },
      practice: [
        {
          type: "mc",
          prompt: "How do you express 8:45 P.M.?",
          options: ["Son las nueve menos quince de la noche", "Son las ocho menos quince", "Es las nueve y quince", "Son las ocho y cuarenta y cinco"],
          correct: 0,
          explanation: "Use the next hour (nueve) minus a quarter (menos quince)."
        }
      ],
      game: [
        {
          prompt: "Translate: '1:30'",
          options: ["Es la una y media", "Son las una y media", "Es la una y treinta minutos", "Son las dos menos media"],
          correct: 0,
          explanation: "'Es la una y media'."
        }
      ],
      exam: [
        {
          prompt: "How do you say 'May 1st'?",
          options: ["el primero de mayo", "el uno de mayo", "el primer de mayo", "uno mayo"],
          correct: 0,
          explanation: "Only the 1st uses ordinal 'primero'."
        }
      ]
    },
    {
      id: "ez5",
      num: 5,
      title: "Regular Verbs in the Present",
      category: "present_verbs",
      estTime: "60 min",
      desc: "Conjugating regular -AR, -ER, and -IR verbs in present indicative.",
      overview: {
        concept: "Drop the infinitive suffix (-ar, -er, -ir) and attach the person-specific ending.",
        rules: [
          "-AR: -o, -as, -a, -amos, -áis, -an",
          "-ER: -o, -es, -e, -emos, -éis, -en",
          "-IR: -o, -es, -e, -imos, -ís, -en"
        ],
        examples: [
          { es: "Yo hablo español.", en: "I speak Spanish." },
          { es: "Nosotros escribimos cartas.", en: "We write letters." }
        ],
        watchOut: "Nosotros for -IR verbs is '-imos', while for -ER it is '-emos'.",
        mascotTip: "The Yo form always ends in -o for regular verbs across all 3 families!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Tú (comer)' in the present:",
          options: ["comes", "comas", "come", "como"],
          correct: 0,
          explanation: "-ER verbs take '-es' for Tú in the present indicative."
        }
      ],
      game: [
        {
          prompt: "Conjugate 'Ellos (hablar)':",
          options: ["hablan", "hablen", "hablamos", "hablas"],
          correct: 0,
          explanation: "-AR verbs take '-an' for Ellos."
        }
      ],
      exam: [
        {
          prompt: "Conjugate: 'Nosotros (vivir)'",
          options: ["vivimos", "vivemos", "vivamos", "viven"],
          correct: 0,
          explanation: "-IR regular verbs take '-imos' for Nosotros."
        }
      ]
    },
    {
      id: "ez6",
      num: 6,
      title: "Stem-Changing & Irregular Present Verbs",
      category: "present_verbs",
      estTime: "75 min",
      desc: "Boot verbs (e->ie, o->ue, e->i) and 'Yo-Go' irregulars (tener, poner, salir, hacer).",
      overview: {
        concept: "Boot verbs change their stem vowel in all forms except Nosotros and Vosotros.",
        rules: [
          "e -> ie: querer (quiero, quieres, quiere, queremos, quieren)",
          "o -> ue: poder (puedo, puedes, puede, podemos, pueden)",
          "Yo-Go verbs: tengo, pongo, salgo, hago, traigo, vengo"
        ],
        examples: [
          { es: "Yo tengo una pregunta.", en: "I have a question." }
        ],
        watchOut: "Never stem-change the Nosotros form: 'queremos', 'podemos'!",
        mascotTip: "Only forms inside the boot receive the vowel upgrade!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Yo (salir)' in the present:",
          options: ["salgo", "salo", "sales", "saligo"],
          correct: 0,
          explanation: "Salir is an irregular Yo-Go verb: Yo salgo."
        }
      ],
      game: [
        {
          prompt: "Conjugate: 'Él (poder)' in the present:",
          options: ["puede", "pode", "puedo", "pueden"],
          correct: 0,
          explanation: "Stem-changer o -> ue: Él puede."
        }
      ],
      exam: [
        {
          prompt: "Conjugate: 'Ellos (querer)' in the present:",
          options: ["quieren", "queren", "quieran", "quiere"],
          correct: 0,
          explanation: "Querer changes e -> ie in 3rd person plural: quieren."
        }
      ]
    },
    {
      id: "ez7",
      num: 7,
      title: "The Verb Ir, Future 'Ir a', and Idioms",
      category: "future",
      estTime: "50 min",
      desc: "Expressing near future with 'ir + a + infinitive' and common 'tener' idioms.",
      overview: {
        concept: "Use 'ir + a + infinitive' for near future. Idioms with 'tener' express states like hunger, thirst, age, and fear.",
        rules: [
          "Near Future = [Conjugated Ir] + a + [Infinitive Verb].",
          "Tener idioms: tener hambre (hungry), tener sed (thirsty), tener prisa (in a hurry)."
        ],
        examples: [
          { es: "Vamos a estudiar mañana.", en: "We are going to study tomorrow." }
        ],
        watchOut: "Do not say 'estoy hambre'; say 'tengo hambre'!",
        mascotTip: "In Spanish, you possess hunger!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Translate: 'She is in a hurry.'",
          options: ["Ella tiene prisa", "Ella está prisa", "Ella es prisa", "Ella tiene hambre"],
          correct: 0,
          explanation: "Idiomatic expression is 'tener prisa'."
        }
      ],
      game: [
        {
          prompt: "Translate: 'We are going to travel'",
          options: ["Vamos a viajar", "Vamos viajar", "Ir a viajar", "Viajamos a ir"],
          correct: 0,
          explanation: "Formula is 'Vamos' + 'a' + infinitive."
        }
      ],
      exam: [
        {
          prompt: "How old are you? '¿Cuántos años ______?'",
          options: ["tienes", "estás", "eres", "haces"],
          correct: 0,
          explanation: "Age uses 'tener'."
        }
      ]
    },
    {
      id: "ez8",
      num: 8,
      title: "Adjectives, Comparisons & Adverbs",
      category: "nouns_adjectives",
      estTime: "60 min",
      desc: "Comparatives (más/menos que, tan como), superlatives, and adverbs ending in -mente.",
      overview: {
        concept: "Form adverbs by adding '-mente' to the feminine singular adjective. Use 'más que' and 'tan como' for comparisons.",
        rules: [
          "Superiority: más + [adjective] + que.",
          "Equality: tan + [adjective] + como.",
          "Adverb suffix: clara -> claramente."
        ],
        examples: [
          { es: "Este carro es más rápido que ese.", en: "This car is faster than that one." }
        ],
        watchOut: "Irregulars: bueno -> mejor (better); malo -> peor (worse); viejo -> mayor (older).",
        mascotTip: "When using two adverbs in a row, only attach -mente to the final one!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Form the adverb for 'rápido':",
          options: ["rápidamente", "rápidomente", "rápido", "rápidamente"],
          correct: 0,
          explanation: "Take the feminine 'rápida' and append '-mente'."
        }
      ],
      game: [
        {
          prompt: "Translate: 'as tall as'",
          options: ["tan alto como", "más alto que", "tanto alto como", "menos alto que"],
          correct: 0,
          explanation: "Comparison of equality with adjective uses 'tan... como'."
        }
      ],
      exam: [
        {
          prompt: "What is the comparative form of 'bueno'?",
          options: ["mejor", "más bueno", "buenísimo", "bien"],
          correct: 0,
          explanation: "'Bueno' has the irregular comparative 'mejor'."
        }
      ]
    },
    {
      id: "ez9",
      num: 9,
      title: "Negatives & Prepositions (Por vs. Para)",
      category: "foundations",
      estTime: "65 min",
      desc: "Double negatives (nadie, nunca, nada) and mastering the por vs. para distinction.",
      overview: {
        concept: "Spanish allows multiple negatives in a single clause. 'Para' expresses destination/deadline; 'Por' expresses cause/duration/exchange.",
        rules: [
          "Double negatives: 'No tengo nada' (I don't have anything).",
          "PARA: Purpose, Recipient, Destination, Deadline.",
          "POR: Reason, Duration, Exchange, By/Through."
        ],
        examples: [
          { es: "Estudio para aprender.", en: "I study in order to learn." }
        ],
        watchOut: "Never say 'de nada' to mean 'for nothing'; it means 'you're welcome'!",
        mascotTip: "Para is about the goal ahead; Por is about the reason behind!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose the correct preposition: 'El regalo es ______ ti.'",
          options: ["para", "por", "de", "en"],
          correct: 0,
          explanation: "Recipients always use 'para'."
        }
      ],
      game: [
        {
          prompt: "Translate: 'I don't know anyone.'",
          options: ["No conozco a nadie.", "No conozco nadie.", "Conozco no nadie.", "No sé nadie."],
          correct: 0,
          explanation: "Double negative with personal 'a' before 'nadie'."
        }
      ],
      exam: [
        {
          prompt: "Select the sentence expressing duration of time:",
          options: ["Trabajé por ocho horas.", "Trabajé para ocho horas.", "Trabajé en ocho horas.", "Trabajé de ocho horas."],
          correct: 0,
          explanation: "Duration of time requires 'por'."
        }
      ]
    },
    {
      id: "ez10",
      num: 10,
      title: "The Indirect Object & Gustar",
      category: "pronouns",
      estTime: "70 min",
      desc: "Indirect objects (me, te, le, nos, les) and how 'gustar' literally means 'to be pleasing to'.",
      overview: {
        concept: "With 'gustar', the liked item is the subject and the person liking it is the indirect object.",
        rules: [
          "Use 'gusta' for singular nouns and verbs: 'Me gusta el café'.",
          "Use 'gustan' for plural nouns: 'Me gustan los libros'.",
          "Pronouns: me, te, le, nos, os, les."
        ],
        examples: [
          { es: "A ella le gusta la música.", en: "She likes music." }
        ],
        watchOut: "Never say 'Yo gusto los libros'!",
        mascotTip: "In Spanish, the book pleases you—you don't do the liking!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose the correct verb: 'A nosotros nos ______ las flores.'",
          options: ["gustan", "gusta", "gustamos", "gusto"],
          correct: 0,
          explanation: "'Las flores' is plural, requiring 'gustan'."
        }
      ],
      game: [
        {
          prompt: "Translate: 'Do you like to dance?'",
          options: ["¿Te gusta bailar?", "¿Te gustan bailar?", "¿Gustas bailar?", "¿Te gusto bailar?"],
          correct: 0,
          explanation: "Verbs following 'gustar' always use singular 'gusta'."
        }
      ],
      exam: [
        {
          prompt: "Choose the pronoun: 'A Carlos ______ duele la cabeza.'",
          options: ["le", "se", "lo", "la"],
          correct: 0,
          explanation: "Carlos is indirect object 3rd person singular -> 'le'."
        }
      ]
    },
    {
      id: "ez11",
      num: 11,
      title: "Direct Object Pronouns & Personal 'A'",
      category: "pronouns",
      estTime: "60 min",
      desc: "Direct object replacement (lo, la, los, las) and the personal 'a' preceding humans.",
      overview: {
        concept: "Direct object pronouns replace nouns receiving the action directly.",
        rules: [
          "Pronouns: lo (him/it), la (her/it), los (them m.), las (them f.).",
          "Personal 'a': Add 'a' when a specific human/pet is the direct object: 'Veo a María'."
        ],
        examples: [
          { es: "Compro el libro. -> Lo compro.", en: "I buy the book. -> I buy it." }
        ],
        watchOut: "The personal 'a' is not used after 'tener': 'Tengo dos hermanos'.",
        mascotTip: "Personal 'a' is tipped whenever a human is the direct object!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Replace 'la comida': 'Nosotros preparamos la comida.'",
          options: ["La preparamos", "Lo preparamos", "Las preparamos", "Le preparamos"],
          correct: 0,
          explanation: "'La comida' is feminine singular -> 'la'."
        }
      ],
      game: [
        {
          prompt: "Identify the sentence requiring personal 'a':",
          options: ["Llamo a mi hermano.", "Llamo el taxi.", "Llamo la policía.", "Llamo un hotel."],
          correct: 0,
          explanation: "Specific person ('mi hermano') requires personal 'a'."
        }
      ],
      exam: [
        {
          prompt: "Replace 'los zapatos': 'Juan compra los zapatos.'",
          options: ["Juan los compra.", "Juan les compra.", "Juan las compra.", "Juan lo compra."],
          correct: 0,
          explanation: "'Los zapatos' is masculine plural -> 'los'."
        }
      ]
    },
    {
      id: "ez12",
      num: 12,
      title: "Reflexive Verbs & Daily Routines",
      category: "verbs",
      estTime: "65 min",
      desc: "Actions performed upon oneself (lavarse, despertarse, acostarse).",
      overview: {
        concept: "A verb is reflexive when the subject and object are the same entity.",
        rules: [
          "Reflexive pronouns: me, te, se, nos, os, se.",
          "Do not use possessive adjectives with body parts: 'Me lavo las manos'."
        ],
        examples: [
          { es: "Yo me despierto temprano.", en: "I wake up early." }
        ],
        watchOut: "'Dormir' means to sleep, but 'dormirse' means to fall asleep!",
        mascotTip: "If you perform the routine on your own body, use the reflexive pronoun!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Translate: 'She washes her face.'",
          options: ["Ella se lava la cara", "Ella lava su cara", "Ella me lava la cara", "Ella se lava cara"],
          correct: 0,
          explanation: "Reflexive pronoun 'se' with the definite article 'la cara'."
        }
      ],
      game: [
        {
          prompt: "Conjugate: 'Nosotros (acostarse - o->ue)'",
          options: ["nos acostamos", "nos acuestamos", "se acuestan", "me acuesto"],
          correct: 0,
          explanation: "Nosotros does NOT stem change: nos acostamos."
        }
      ],
      exam: [
        {
          prompt: "Conjugate: 'Yo (vestirse - e->i)'",
          options: ["me visto", "me vesto", "visto", "se viste"],
          correct: 0,
          explanation: "Reflexive Yo form with e->i stem change: me visto."
        }
      ]
    },
    {
      id: "ez13",
      num: 13,
      title: "Present Subjunctive Foundations",
      category: "subjunctive",
      estTime: "90 min",
      desc: "Formulaic expression of wishes, doubts, emotions, and necessity.",
      overview: {
        concept: "The Subjunctive expresses subjectivity, desires, doubt, and uncertainty.",
        rules: [
          "Step 1: Start with present 'Yo' form.",
          "Step 2: Drop the '-o'.",
          "Step 3: Add OPPOSITE vowel endings (-AR takes -e; -ER/-IR takes -a)."
        ],
        examples: [
          { es: "Quiero que tú hables.", en: "I want you to speak." }
        ],
        watchOut: "WEIRDO triggers in the main clause mandate the subjunctive in the dependent clause.",
        mascotTip: "Flip the vowel script: -AR takes the 'e' train and -ER takes the 'a' train!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Es necesario que tú (hacer) la tarea.'",
          options: ["hagas", "haces", "haga", "hacas"],
          correct: 0,
          explanation: "Yo hago -> stem 'hag-' + opposite ending '-as' -> hagas."
        }
      ],
      game: [
        {
          prompt: "Subjunctive of 'tener' for 'nosotros':",
          options: ["tengamos", "tenemos", "tengemos", "tengáis"],
          correct: 0,
          explanation: "Yo tengo -> stem 'teng-' + '-amos' -> tengamos."
        }
      ],
      exam: [
        {
          prompt: "Conjugate: 'Dudo que él (venir)'",
          options: ["venga", "viene", "vengo", "vengan"],
          correct: 0,
          explanation: "Doubt triggers subjunctive: venga."
        }
      ]
    },
    {
      id: "ez14",
      num: 14,
      title: "The Preterite Past Tense",
      category: "past_verbs",
      estTime: "85 min",
      desc: "Completed past actions, single events, and irregular preterite stems.",
      overview: {
        concept: "Use the Preterite for actions viewed as completed units with distinct start and end points.",
        rules: [
          "-AR: -é, -aste, -ó, -amos, -asteis, -aron",
          "-ER / -IR: -í, -iste, -ió, -imos, -isteis, -ieron",
          "Ir & Ser have identical preterite forms: fui, fuiste, fue, fuimos, fuisteis, fueron."
        ],
        examples: [
          { es: "Ayer comí en el restaurante.", en: "Yesterday I ate at the restaurant." }
        ],
        watchOut: "The Yo form of -AR takes '-é', while Él/Ella takes '-ó'.",
        mascotTip: "The Preterite is a snapshot of a finished past event!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Yo (comer)' in the preterite:",
          options: ["comí", "comé", "comió", "comía"],
          correct: 0,
          explanation: "-ER verbs take '-í' in 1st person singular preterite."
        }
      ],
      game: [
        {
          prompt: "Conjugate 'Ellos (ir)' in the preterite:",
          options: ["fueron", "iban", "van", "fuimos"],
          correct: 0,
          explanation: "Ir in preterite for Ellos is 'fueron'."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'She spoke with the doctor yesterday.'",
          options: ["Ella habló con el doctor ayer.", "Ella habla con el doctor ayer.", "Ella hablaba con el doctor.", "Ella hablé con el doctor."],
          correct: 0,
          explanation: "Preterite 3rd person singular is 'habló'."
        }
      ]
    },
    {
      id: "ez15",
      num: 15,
      title: "The Imperfect & Double Object Pronouns",
      category: "past_verbs",
      estTime: "90 min",
      desc: "Habitual past descriptions and combining indirect + direct object pronouns (se lo).",
      overview: {
        concept: "Use the Imperfect for ongoing past actions, habits, age, and background descriptions. When direct and indirect pronouns meet, 'le/les' turns into 'se'.",
        rules: [
          "-AR imperfect: -aba, -abas, -aba, -ábamos, -abais, -aban",
          "-ER / -IR imperfect: -ía, -ías, -ía, -íamos, -íais, -ían",
          "Double objects: Indirect comes before Direct (No 'le lo'; use 'se lo')."
        ],
        examples: [
          { es: "Cuando era niño, jugaba en el parque.", en: "When I was a child, I used to play in the park." },
          { es: "Yo se lo doy a María.", en: "I give it to her." }
        ],
        watchOut: "Every single -ER/-IR imperfect ending carries a written accent on the 'í'!",
        mascotTip: "You can't 'le lo' in Spanish—it turns into 'se lo' for smooth pronunciation!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Nosotros (vivir)' in the imperfect:",
          options: ["vivíamos", "vivimos", "vivabamos", "vivían"],
          correct: 0,
          explanation: "-IR verbs take '-íamos' in the imperfect."
        }
      ],
      game: [
        {
          prompt: "Replace both pronouns: 'Doy el libro a Juan.'",
          options: ["Se lo doy.", "Le lo doy.", "Lo le doy.", "Se los doy."],
          correct: 0,
          explanation: "'Le lo' converts phonetically to 'se lo'."
        }
      ],
      exam: [
        {
          prompt: "How many irregular verbs are in the imperfect tense?",
          options: ["Only 3 (ser, ir, ver)", "All boot verbs", "10 verbs", "None"],
          correct: 0,
          explanation: "Only ser (era), ir (iba), and ver (veía) are irregular in the imperfect."
        }
      ]
    }
  ],

  advanced: [
    {
      id: "adv1",
      num: 1,
      title: "Ser vs. Estar in Accelerated Contexts",
      category: "advanced_foundations",
      estTime: "60 min",
      desc: "Nuanced semantic shifts (ser aburrido vs. estar aburrido) and complex predicate structures[cite: 3].",
      overview: {
        concept: "Adjectives change meaning entirely depending on Ser vs. Estar (ser listo = clever vs. estar listo = ready)[cite: 3].",
        rules: [
          "Ser bueno (good/kind) vs. Estar bueno (tasty/attractive)[cite: 3].",
          "Ser rico (wealthy) vs. Estar rico (delicious)[cite: 3]."
        ],
        examples: [
          { es: "El profesor es muy listo.", en: "The professor is very clever." },
          { es: "Ya estoy listo para salir.", en: "I am ready to leave now." }
        ],
        watchOut: "Watch out for 'estar de acuerdo' (to agree) which always uses estar[cite: 3]!",
        mascotTip: "Adjectives transform their soul with Ser and their mood with Estar[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "'Pedro es aburrido' means:",
          options: ["Pedro is boring as a person", "Pedro is bored right now", "Pedro is annoyed", "Pedro is tired"],
          correct: 0,
          explanation: "Ser + aburrido = boring personality[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Translate: 'The apples taste delicious today.'",
          options: ["Las manzanas están ricas hoy.", "Las manzanas son ricas.", "Las manzanas tienen ricas.", "Las manzanas están listas."],
          correct: 0,
          explanation: "Food taste condition uses 'estar rico'[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Which means 'She is clever'?",
          options: ["Ella es lista.", "Ella está lista.", "Ella tiene lista.", "Ella hace lista."],
          correct: 0,
          explanation: "Ser listo = clever; Estar listo = ready[cite: 3]."
        }
      ]
    },
    {
      id: "adv2",
      num: 2,
      title: "Ser & Estar in Preterite vs. Imperfect",
      category: "past_verbs",
      estTime: "75 min",
      desc: "Analyzing 'fue' vs. 'era' and 'estuvo' vs. 'estaba' in historical narration[cite: 3].",
      overview: {
        concept: "Preterite of Ser/Estar (fue/estuvo) views the state as a concluded episode; Imperfect (era/estaba) describes an open-ended backdrop[cite: 3].",
        rules: [
          "La fiesta fue maravillosa (The party was great - whole event ended)[cite: 3].",
          "La casa era grande (The house was big - background description)[cite: 3]."
        ],
        examples: [
          { es: "Estuve enfermo por tres días.", en: "I was sick for three days (definite period)[cite: 3]." }
        ],
        watchOut: "Time limits (por 3 días) force the preterite 'estuvo' even for conditions[cite: 3]!",
        mascotTip: "If the window of time is closed and framed, choose preterite[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose: 'El concierto ______ (was) espectacular anoche.'",
          options: ["fue", "era", "estaba", "estuve"],
          correct: 0,
          explanation: "Event concluded last night -> 'fue'[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Why is 'Estuve en París dos semanas' preterite?",
          options: ["Because the time duration is specified and concluded", "Because it is location", "Because it is an emotion", "Because París is singular"],
          correct: 0,
          explanation: "Specific time limits in the past trigger preterite 'estuve'[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'She was sick all week.'",
          options: ["Ella estuvo enferma toda la semana.", "Ella estaba enferma.", "Ella fue enferma.", "Ella era enferma."],
          correct: 0,
          explanation: "Completed time duration uses 'estuvo'[cite: 3]."
        }
      ]
    },
    {
      id: "adv3",
      num: 3,
      title: "The Present Progressive & Gerunds",
      category: "progressive",
      estTime: "60 min",
      desc: "Forming gerunds (-ando, -iendo), irregulars (yendo, durmiendo), and verbs of motion with gerunds[cite: 3].",
      overview: {
        concept: "Estar + Gerund expresses an action actively occurring right at the moment of speech[cite: 3].",
        rules: [
          "-AR -> -ando; -ER/-IR -> -iendo[cite: 3].",
          "Stem-changers in -IR: dormir -> durmiendo, pedir -> pidiendo, decir -> diciendo[cite: 3].",
          "Double vowels: leer -> leyendo, oír -> oyendo, traer -> trayendo[cite: 3]."
        ],
        examples: [
          { es: "Estoy leyendo un libro fascinante.", en: "I am reading a fascinating book." }
        ],
        watchOut: "Do not use present progressive for future plans; use 'ir a + infinitive'[cite: 3]!",
        mascotTip: "Gerunds are the action snapshots of right now[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "What is the gerund of 'dormir'?",
          options: ["durmiendo", "dormiendo", "dormando", "durmando"],
          correct: 0,
          explanation: "-IR stem changer o -> u in the gerund: durmiendo[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Form gerund for 'leer':",
          options: ["leyendo", "leiendo", "leendo", "layendo"],
          correct: 0,
          explanation: "Triple vowel rule changes unaccented i to y: leyendo[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "What is the gerund of 'traer'?",
          options: ["trayendo", "traiendo", "traendo", "tuyendo"],
          correct: 0,
          explanation: "Traer -> trayendo[cite: 3]."
        }
      ]
    },
    {
      id: "adv4",
      num: 4,
      title: "The Past Progressive Tenses",
      category: "progressive",
      estTime: "70 min",
      desc: "Imperfect progressive (estaba hablando) vs. Preterite progressive (estuve hablando)[cite: 3].",
      overview: {
        concept: "Imperfect progressive emphasizes an action interrupted in the past; Preterite progressive emphasizes an action sustained continuously until completion[cite: 3].",
        rules: [
          "Estaba + gerund: 'Estaba durmiendo cuando llamaste' (was sleeping when you called)[cite: 3].",
          "Estuve + gerund: 'Estuve estudiando hasta las 11' (was studying until 11)[cite: 3]."
        ],
        examples: [
          { es: "Estábamos cenando cuando se fue la luz.", en: "We were dining when the power went out[cite: 3]." }
        ],
        watchOut: "Verbs like ser, tener, and saber rarely take the progressive form[cite: 3].",
        mascotTip: "Past progressive gives your stories dramatic cinematic movement[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose: 'Yo ______ (was crossing) la calle cuando vi el accidente.'",
          options: ["estaba atravesando", "estuve atravesando", "atravesé", "estuve cruzado"],
          correct: 0,
          explanation: "Action in progress interrupted by another past action uses imperfect progressive[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Which tense is 'Estuvimos bailando hasta la medianoche'?",
          options: ["Preterite Progressive", "Imperfect Progressive", "Present Progressive", "Future Progressive"],
          correct: 0,
          explanation: "Preterite of estar (estuvimos) + gerund = Preterite Progressive[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'They were sleeping.'",
          options: ["Ellos estaban durmiendo.", "Ellos fueron durmiendo.", "Ellos estuvieron dormido.", "Ellos eran durmiendo."],
          correct: 0,
          explanation: "Imperfect of estar + irregular gerund: estaban durmiendo[cite: 3]."
        }
      ]
    },
    {
      id: "adv5",
      num: 5,
      title: "Advanced Present Subjunctive",
      category: "subjunctive",
      estTime: "90 min",
      desc: "Subjunctive in adjective clauses, expressions of doubt, emotion, and conjunctions (para que, antes de que)[cite: 3].",
      overview: {
        concept: "Use subjunctive when the antecedent is unknown or nonexistent, and after adverbial conjunctions of purpose and contingency[cite: 3].",
        rules: [
          "Nonexistent antecedent: 'Busco un libro que tenga fotos' (Seeking a book that has photos - don't know if it exists)[cite: 3].",
          "Conjunctions: para que, a menos que, antes de que, con tal de que, en caso de que[cite: 3]."
        ],
        examples: [
          { es: "No conozco a nadie que hable ruso.", en: "I do not know anyone who speaks Russian[cite: 3]." }
        ],
        watchOut: "'Antes de que' ALWAYS takes the subjunctive, even if the action happened[cite: 3]!",
        mascotTip: "If you're hunting for a unicorn that might not exist, use subjunctive[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose: 'Te llamo para que tú ______ (saber) la noticia.'",
          options: ["sepas", "sabes", "supiste", "sabrás"],
          correct: 0,
          explanation: "'Para que' always requires the subjunctive: sepas[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "'Busco un hotel que ______ (tener) piscina.'",
          options: ["tenga", "tiene", "tenía", "tendrá"],
          correct: 0,
          explanation: "Unknown specific hotel -> subjunctive 'tenga'[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Which conjunction ALWAYS requires the subjunctive?",
          options: ["a menos que", "porque", "desde que", "ya que"],
          correct: 0,
          explanation: "'A menos que' (unless) always requires the subjunctive[cite: 3]."
        }
      ]
    },
    {
      id: "adv6",
      num: 6,
      title: "Formal & Informal Commands (Imperative)",
      category: "commands",
      estTime: "80 min",
      desc: "Affirmative/negative Tú commands, Ud./Uds. commands, and pronoun attachments[cite: 3].",
      overview: {
        concept: "Affirmative tú commands use the 3rd person singular indicative[cite: 3]; negative tú and all formal commands use the subjunctive[cite: 3].",
        rules: [
          "8 Irregular affirmative tú: di, haz, ve, pon, sal, sé, ten, ven[cite: 3].",
          "Attach pronouns to affirmative commands (¡Dímelo!)[cite: 3]; place pronouns before negative commands (¡No me lo digas!)[cite: 3]."
        ],
        examples: [
          { es: "¡Haz la tarea ahora!", en: "Do the homework now![cite: 3]" },
          { es: "¡No hables tan rápido!", en: "Don't speak so fast![cite: 3]" }
        ],
        watchOut: "Adding pronouns to affirmative commands requires an accent mark to preserve natural stress (Cómpralo)[cite: 3]!",
        mascotTip: "Affirmative attaches at the back; Negative keeps pronouns in front[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "What is the affirmative tú command for 'hacer'?",
          options: ["haz", "hace", "haga", "hagas"],
          correct: 0,
          explanation: "Irregular command: haz[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Negative tú command for 'fumar':",
          options: ["No fumes", "No fuma", "No fumas", "No fume"],
          correct: 0,
          explanation: "Negative tú uses opposite subjunctive ending: No fumes[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'Tell it to me' (informal command):",
          options: ["Dímelo", "Dime", "Me lo di", "Dasmelo"],
          correct: 0,
          explanation: "Command 'di' + indirect 'me' + direct 'lo' with stress accent: Dímelo[cite: 3]."
        }
      ]
    },
    {
      id: "adv7",
      num: 7,
      title: "Possessive & Relative Pronouns, Neuter 'Lo'",
      category: "pronouns",
      estTime: "75 min",
      desc: "Possessive pronouns (el mío, la suya), relative pronouns (el que, el cual, cuyo), and neuter 'lo'[cite: 3].",
      overview: {
        concept: "Neuter 'lo + adjective' turns abstract concepts into nouns ('lo importante' = the important thing)[cite: 3].",
        rules: [
          "Possessive pronouns: el mío, el tuyo, el suyo, el nuestro[cite: 3].",
          "Relative pronouns: que (who/that), quien (whom), cuyo (whose)[cite: 3]."
        ],
        examples: [
          { es: "Lo bueno de viajar es aprender.", en: "The good thing about traveling is learning[cite: 3]." }
        ],
        watchOut: "'Cuyo' is an adjective and agrees with the noun that follows it, not the owner[cite: 3]!",
        mascotTip: "Neuter 'lo' is your magic wand to turn any descriptive adjective into a broad concept[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Translate: 'The difficult thing is to decide.'",
          options: ["Lo difícil es decidir.", "El difícil es decidir.", "La difícil es decidir.", "Eso difícil es decidir."],
          correct: 0,
          explanation: "Neuter lo + adjective expresses the abstract concept: Lo difícil[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Translate: 'Mine' (referring to 'la casa'):",
          options: ["la mía", "el mío", "las mías", "lo mío"],
          correct: 0,
          explanation: "Matches feminine singular 'casa' -> la mía[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Which relative pronoun means 'whose'?",
          options: ["cuyo / cuya", "quien", "el cual", "donde"],
          correct: 0,
          explanation: "'Cuyo' expresses possession: whose[cite: 3]."
        }
      ]
    },
    {
      id: "adv8",
      num: 8,
      title: "The Present Perfect Tense (Pretérito Perfecto)",
      category: "compound_tenses",
      estTime: "70 min",
      desc: "Haber in the present (he, has, ha, hemos, han) + regular/irregular past participles (-ado, -ido)[cite: 3].",
      overview: {
        concept: "Present Perfect expresses actions that have happened in the past and remain connected to the present[cite: 3].",
        rules: [
          "Haber: he, has, ha, hemos, habéis, han[cite: 3].",
          "Participles: -AR -> -ado; -ER/-IR -> -ido[cite: 3].",
          "Irregular participles: escrito, dicho, hecho, visto, puesto, abierto, muerto, roto, vuelto[cite: 3]."
        ],
        examples: [
          { es: "He vivido en España por dos años.", en: "I have lived in Spain for two years[cite: 3]." }
        ],
        watchOut: "Never place any word or pronoun between haber and the past participle[cite: 3]!",
        mascotTip: "Haber and its participle are inseparable partners—nothing comes between them[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "What is the past participle of 'escribir'?",
          options: ["escrito", "escribido", "escripto", "escribado"],
          correct: 0,
          explanation: "Irregular past participle: escrito[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Conjugate: 'Nosotros (hacer)' in the present perfect:",
          options: ["hemos hecho", "hemos hacido", "han hecho", "habemos hecho"],
          correct: 0,
          explanation: "Haber (hemos) + irregular participle (hecho)[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'They have opened the door.'",
          options: ["Ellos han abierto la puerta.", "Ellos han abrido la puerta.", "Ellos tienen abierto la puerta.", "Ellos están abierto la puerta."],
          correct: 0,
          explanation: "Haber (han) + irregular participle (abierto)[cite: 3]."
        }
      ]
    },
    {
      id: "adv9",
      num: 9,
      title: "The Past Perfect Tense & Passive Voice",
      category: "compound_tenses",
      estTime: "80 min",
      desc: "Pluscuamperfecto (había + participle), participles as adjectives, and passive voice with ser[cite: 3].",
      overview: {
        concept: "Past Perfect expresses an action that had already occurred prior to another past event[cite: 3].",
        rules: [
          "Había, habías, había, habíamos, habíais, habían + participle[cite: 3].",
          "Passive voice: Ser + Past Participle (agrees in gender/number) + por[cite: 3]."
        ],
        examples: [
          { es: "Cuando llegué, el tren ya había salido.", en: "When I arrived, the train had already left[cite: 3]." }
        ],
        watchOut: "When the participle is an adjective or in the passive voice, it MUST agree in gender and number[cite: 3]!",
        mascotTip: "The Past Perfect is the past of the past[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Yo ya ______ (had eaten) cuando viniste.'",
          options: ["había comido", "he comido", "hube comido", "habría comido"],
          correct: 0,
          explanation: "Past perfect: había comido[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Passive voice: 'Las cartas fueron ______ (write) por Ana.'",
          options: ["escritas", "escrito", "escribidas", "escritos"],
          correct: 0,
          explanation: "Participle agrees with feminine plural 'las cartas': escritas[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'The doors were closed.'",
          options: ["Las puertas estaban cerradas.", "Las puertas estaban cerrado.", "Las puertas habían cerrado.", "Las puertas fueron cerrar."],
          correct: 0,
          explanation: "Condition resulting from action uses estar + agreeing participle[cite: 3]."
        }
      ]
    },
    {
      id: "adv10",
      num: 10,
      title: "The Future Tense & Future Perfect",
      category: "future",
      estTime: "75 min",
      desc: "Simple future endings (-é, -ás, -á, -emos, -éis, -án), irregular stems, probability, and future perfect[cite: 3].",
      overview: {
        concept: "Attach endings directly to the infinitive for all 3 verb families[cite: 3]. The future also expresses probability in the present[cite: 3].",
        rules: [
          "Endings: -é, -ás, -á, -emos, -éis, -án[cite: 3].",
          "Irregular stems: tendr-, pondr-, saldr-, vendr-, podr-, sabr-, har-, dir-[cite: 3].",
          "Probability: '¿Qué hora será?' (I wonder what time it is)[cite: 3]."
        ],
        examples: [
          { es: "Mañana hablaremos con el director.", en: "Tomorrow we will speak with the director[cite: 3]." }
        ],
        watchOut: "All future endings have written accents except the 'nosotros' form (-emos)[cite: 3]!",
        mascotTip: "Don't chop off the -ar/-er/-ir ending; bolt future endings right onto the full verb[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Future tense of 'Yo (tener)':",
          options: ["tendré", "teneré", "tenré", "tengo"],
          correct: 0,
          explanation: "Irregular future stem tendr- + é -> tendré[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Future tense: 'Ellos (hacer)'",
          options: ["harán", "hacerán", "hadrán", "hacieron"],
          correct: 0,
          explanation: "Stem har- + án -> harán[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: '¿Dónde estará Juan?'",
          options: ["I wonder where Juan is right now.", "Where will Juan go tomorrow?", "Where was Juan?", "Where has Juan been?"],
          correct: 0,
          explanation: "Future of probability expresses conjecture in the present[cite: 3]."
        }
      ]
    },
    {
      id: "adv11",
      num: 11,
      title: "The Conditional Tense & Conditional Perfect",
      category: "conditional",
      estTime: "80 min",
      desc: "Hypothetical actions (-ía, -ías, -ía, -íamos, -íais, -ían), politeness, and 'habría + participle'[cite: 3].",
      overview: {
        concept: "The Conditional expresses what would happen under certain conditions and softens polite requests[cite: 3].",
        rules: [
          "Endings: -ía, -ías, -ía, -íamos, -íais, -ían added to the future stem[cite: 3].",
          "Conditional Perfect: habría, habrías, habría... + past participle[cite: 3]."
        ],
        examples: [
          { es: "¿Podría usted ayudarme?", en: "Could you help me?[cite: 3]" }
        ],
        watchOut: "Every conditional ending carries an accent mark on the 'í'[cite: 3]!",
        mascotTip: "Conditional is the polite diplomat of the Spanish language[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Nosotros (viajar)' in the conditional:",
          options: ["viajaríamos", "viajaremos", "viajarían", "viajábamos"],
          correct: 0,
          explanation: "Infinitive + -íamos: viajaríamos[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Conditional of 'Yo (decir)':",
          options: ["diría", "deciría", "dijera", "diré"],
          correct: 0,
          explanation: "Irregular stem dir- + ía -> diría[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'We would have bought the house.'",
          options: ["Habríamos comprado la casa.", "Habríamos compramos la casa.", "Habíamos comprado la casa.", "Compraríamos la casa."],
          correct: 0,
          explanation: "Conditional perfect: Habríamos comprado[cite: 3]."
        }
      ]
    },
    {
      id: "adv12",
      num: 12,
      title: "The Present Perfect Subjunctive",
      category: "subjunctive",
      estTime: "75 min",
      desc: "Expressing recent completed actions under subjunctive triggers (haya, hayas, haya...)[cite: 3].",
      overview: {
        concept: "Use the Present Perfect Subjunctive when a present-tense main clause causes a subjunctive action in the recent past[cite: 3].",
        rules: [
          "Haber in subjunctive: haya, hayas, haya, hayamos, hayáis, hayan[cite: 3].",
          "Followed by the invariant past participle[cite: 3]."
        ],
        examples: [
          { es: "Me alegro de que hayas venido.", en: "I am glad that you have come[cite: 3]." }
        ],
        watchOut: "Do not confuse 'ha hablado' (indicative) with 'haya hablado' (subjunctive)[cite: 3]!",
        mascotTip: "When you hope or doubt something that just happened, call on 'haya'[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Conjugate: 'Espero que ellos ______ (have arrived).'",
          options: ["hayan llegado", "han llegado", "hubieran llegado", "hayan llegando"],
          correct: 0,
          explanation: "Present trigger (espero) + past action -> hayan llegado[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Subjunctive of haber for 'Tú':",
          options: ["hayas", "has", "hubieras", "hayais"],
          correct: 0,
          explanation: "Tú hayas[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'I am glad that you have had success.'",
          options: ["Me alegro de que hayas tenido éxito.", "Me alegro de que has tenido éxito.", "Me alegro de que tengas éxito.", "Me alegro de que hubieras tenido éxito."],
          correct: 0,
          explanation: "Emotion trigger in present + past participle -> hayas tenido[cite: 3]."
        }
      ]
    },
    {
      id: "adv13",
      num: 13,
      title: "The Imperfect Subjunctive (Past Subjunctive)",
      category: "subjunctive",
      estTime: "95 min",
      desc: "Formation from the 3rd person plural preterite (-ra, -ras, -ra...) and hypothetical si-clauses[cite: 3].",
      overview: {
        concept: "The Imperfect Subjunctive is required when the governing verb in the main clause is in the past or conditional[cite: 3].",
        rules: [
          "Step 1: Take 3rd person plural preterite (ellos hablaron, ellos fueron, ellos tuvieron)[cite: 3].",
          "Step 2: Drop '-ron'[cite: 3].",
          "Step 3: Add endings: -ra, -ras, -ra, -ramos, -rais, -ran[cite: 3].",
          "The nosotros form always adds an accent to the preceding vowel (habláramos)[cite: 3]."
        ],
        examples: [
          { es: "Quería que vinieras a mi fiesta.", en: "I wanted you to come to my party[cite: 3]." }
        ],
        watchOut: "Always base your stem on the preterite 'ellos' form to capture all irregulars[cite: 3]!",
        mascotTip: "Drop the '-ron' and step into the past subjunctive world[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Imperfect subjunctive of 'tener' for 'Yo':",
          options: ["tuviera", "teniera", "tuviese", "tuvier"],
          correct: 0,
          explanation: "Ellos tuvieron -> stem 'tuvie-' + '-ra' -> tuviera[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Identify the correct si-clause construction:",
          options: ["Si yo fuera rico, compraría un barco.", "Si yo soy rico, compraría un barco.", "Si yo sería rico, fuera un barco.", "Si yo fuera rico, compré un barco."],
          correct: 0,
          explanation: "Si + Imperfect Subjunctive (fuera) + Conditional (compraría)[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "What is the imperfect subjunctive of 'hablar' for 'nosotros'?",
          options: ["habláramos", "hablaramos", "hablemos", "hablasemos"],
          correct: 0,
          explanation: "Nosotros form requires written accent: habláramos[cite: 3]."
        }
      ]
    },
    {
      id: "adv14",
      num: 14,
      title: "The Past Perfect Subjunctive & Contrary-to-Fact",
      category: "subjunctive",
      estTime: "90 min",
      desc: "Pluscuamperfecto de subjuntivo (hubiera + participle) and past contrary-to-fact conditional sentences[cite: 3].",
      overview: {
        concept: "Expresses actions that would have occurred if a past condition had been met[cite: 3].",
        rules: [
          "Hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran + past participle[cite: 3].",
          "Past Contrary-to-Fact formula: Si + [Past Perfect Subjunctive], [Conditional Perfect][cite: 3]."
        ],
        examples: [
          { es: "Si hubieras estudiado, habrías aprobado el examen.", en: "If you had studied, you would have passed the exam[cite: 3]." }
        ],
        watchOut: "Never use the conditional tense directly inside the clause with 'si'[cite: 3]!",
        mascotTip: "For regrets and parallel past realities, pair 'hubiera' with 'habría'[cite: 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Complete: 'Si yo ______ (had known), habría ido.'",
          options: ["hubiera sabido", "habría sabido", "haya sabido", "sabía"],
          correct: 0,
          explanation: "Si-clause in the past takes past perfect subjunctive: hubiera sabido[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Translate: 'I wish that they had stayed.'",
          options: ["Ojalá que se hubieran quedado.", "Ojalá que se habrían quedado.", "Ojalá que se hayan quedado.", "Ojalá que se quedaban."],
          correct: 0,
          explanation: "Contrary-to-fact past wish with ojalá uses 'hubieran quedado'[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "Translate: 'If we had arrived on time, we would have seen the show.'",
          options: ["Si hubiéramos llegado a tiempo, habríamos visto la función.", "Si habríamos llegado a tiempo, hubiéramos visto la función.", "Si hayamos llegado a tiempo, habríamos visto la función.", "Si llegábamos a tiempo, veríamos la función."],
          correct: 0,
          explanation: "Si + hubiéramos llegado... habríamos visto[cite: 3]."
        }
      ]
    },
    {
      id: "adv15",
      num: 15,
      title: "Comprehensive Synthesis & Master Idioms",
      category: "advanced_foundations",
      estTime: "100 min",
      desc: "Complex sentence weaving, subjunctive vs. indicative master decision matrix, and advanced idiomatic expressions[cite: 3].",
      overview: {
        concept: "Synthesize all indicative, subjunctive, compound, and imperative moods into fluid natural communication[cite: 3].",
        rules: [
          "Verbs of influence, emotion, doubt, and unknown existence govern the subjunctive[cite: 3].",
          "Certainty, facts, and habit govern the indicative[cite: 3]."
        ],
        examples: [
          { es: "Aunque llueva mañana, iremos a la montaña.", en: "Even if it rains tomorrow (hypothetical), we will go to the mountain[cite: 3]." }
        ],
        watchOut: "'Aunque' takes subjunctive when expressing 'even if' (hypothetical), but indicative for 'even though' (fact)[cite: 3]!",
        mascotTip: "¡Felicidades! You've navigated from the roots of nouns to the master peaks of the subjunctive[cite: 2, 3]!"
      },
      practice: [
        {
          type: "mc",
          prompt: "Choose: 'No cabe duda de que ella ______ (is) honesta.'",
          options: ["es", "sea", "fuera", "haya sido"],
          correct: 0,
          explanation: "'No cabe duda' expresses certainty and therefore requires indicative: es[cite: 3]."
        }
      ],
      game: [
        {
          prompt: "Select the sentence with correct mood choice:",
          options: ["Creo que ellos vienen hoy.", "Creo que ellos vengan hoy.", "Dudo que ellos vienen hoy.", "No dudo que ellos vengan hoy."],
          correct: 0,
          explanation: "Belief / certainty (creo que) takes the indicative[cite: 3]."
        }
      ],
      exam: [
        {
          prompt: "When does 'aunque' take the subjunctive mood?",
          options: ["When the speaker treats the action as hypothetical or unknown ('even if')", "Always", "Never", "Only in the past"],
          correct: 0,
          explanation: "Subjunctive with aunque indicates hypothetical condition ('even if it may happen')[cite: 3]."
        }
      ]
    }
  ]
};

export const HAWA_CHARTS = {
  present: [
    { pronoun: "Yo", ar: "-o", er: "-o", ir: "-o" },
    { pronoun: "Tú", ar: "-as", er: "-es", ir: "-es" },
    { pronoun: "Él/Ella/Ud.", ar: "-a", er: "-e", ir: "-e" },
    { pronoun: "Nosotros", ar: "-amos", er: "-emos", ir: "-imos" },
    { pronoun: "Vosotros", ar: "-áis", er: "-éis", ir: "-ís" },
    { pronoun: "Ellos/Ellas/Uds.", ar: "-an", er: "-en", ir: "-en" }
  ],
  preterite: [
    { pronoun: "Yo", ar: "-é", er_ir: "-í" },
    { pronoun: "Tú", ar: "-aste", er_ir: "-iste" },
    { pronoun: "Él/Ella/Ud.", ar: "-ó", er_ir: "-ió" },
    { pronoun: "Nosotros", ar: "-amos", er_ir: "-imos" },
    { pronoun: "Vosotros", ar: "-asteis", er_ir: "-isteis" },
    { pronoun: "Ellos/Ellas/Uds.", ar: "-aron", er_ir: "-ieron" }
  ],
  imperfect: [
    { pronoun: "Yo", ar: "-aba", er_ir: "-ía" },
    { pronoun: "Tú", ar: "-abas", er_ir: "-ías" },
    { pronoun: "Él/Ella/Ud.", ar: "-aba", er_ir: "-ía" },
    { pronoun: "Nosotros", ar: "-ábamos", er_ir: "-íamos" },
    { pronoun: "Vosotros", ar: "-abais", er_ir: "-íais" },
    { pronoun: "Ellos/Ellas/Uds.", ar: "-aban", er_ir: "-ían" }
  ],
  subjunctive: [
    { pronoun: "Yo", ar: "-e", er_ir: "-a" },
    { pronoun: "Tú", ar: "-es", er_ir: "-as" },
    { pronoun: "Él/Ella/Ud.", ar: "-e", er_ir: "-a" },
    { pronoun: "Nosotros", ar: "-emos", er_ir: "-amos" },
    { pronoun: "Vosotros", ar: "-éis", er_ir: "-áis" },
    { pronoun: "Ellos/Ellas/Uds.", ar: "-en", er_ir: "-an" }
  ]
};

export const HAWA_VERB_LIBRARY = [
  { infinitive: "Hablar", translation: "To speak", type: "Regular -AR", pres: "hablo, hablas, habla, hablamos, habláis, hablan", pret: "hablé, hablaste, habló, hablamos, hablasteis, hablaron", imp: "hablaba, hablabas, habla, hablábamos, hablaban" },
  { infinitive: "Comer", translation: "To eat", type: "Regular -ER", pres: "como, comes, come, comemos, coméis, comen", pret: "comí, comiste, comió, comimos, comisteis, comieron", imp: "comía, comías, comía, comíamos, comían" },
  { infinitive: "Vivir", translation: "To live", type: "Regular -IR", pres: "vivo, vives, vive, vivimos, vivís, viven", pret: "viví, viviste, vivió, vivimos, vivisteis, vivieron", imp: "vivía, vivías, vivía, vivíamos, vivían" },
  { infinitive: "Tener", translation: "To have", type: "Go-Verb / Boot", pres: "tengo, tienes, tiene, tenemos, tenéis, tienen", pret: "tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron", imp: "tenía, tenías, tenía, teníamos, tenían" },
  { infinitive: "Ser", translation: "To be (permanent)", type: "Irregular", pres: "soy, eres, es, somos, sois, son", pret: "fui, fuiste, fue, fuimos, fuisteis, fueron", imp: "era, eras, era, éramos, erais, eran" },
  { infinitive: "Estar", translation: "To be (location/state)", type: "Irregular", pres: "estoy, estás, está, estamos, estáis, están", pret: "estuve, estuviste, estuvo, estuvimos, estuvieron", imp: "estaba, estabas, estaba, estábamos, estaban" },
  { infinitive: "Hacer", translation: "To do / make", type: "Yo-Go / Irregular", pres: "hago, haces, hace, hacemos, hacéis, hacen", pret: "hice, hiciste, hizo, hicimos, hicisteis, hicieron", imp: "hacía, hacías, hacía, hacíamos, hacían" },
  { infinitive: "Ir", translation: "To go", type: "Irregular", pres: "voy, vas, va, vamos, vais, van", pret: "fui, fuiste, fue, fuimos, fuisteis, fueron", imp: "iba, ibas, iba, íbamos, ibais, iban" }
];

export const CONJUGATION_GAME_BANK = [
  { verb: "Hablar", tense: "Presente", pronoun: "Nosotros", options: ["hablamos", "hablan", "hablo", "habláis"], correct: 0 },
  { verb: "Comer", tense: "Pretérito", pronoun: "Yo", options: ["comí", "comé", "comió", "comía"], correct: 0 },
  { verb: "Vivir", tense: "Imperfecto", pronoun: "Tú", options: ["vivías", "vivabas", "viviste", "vives"], correct: 0 },
  { verb: "Tener", tense: "Presente", pronoun: "Yo", options: ["tengo", "teno", "tienes", "tenga"], correct: 0 },
  { verb: "Hacer", tense: "Subjuntivo", pronoun: "Él", options: ["haga", "hace", "hago", "hagas"], correct: 0 },
  { verb: "Ser", tense: "Pretérito", pronoun: "Ellos", options: ["fueron", "eran", "son", "fuimos"], correct: 0 },
  { verb: "Estar", tense: "Presente", pronoun: "Tú", options: ["estás", "eres", "estoy", "está"], correct: 0 },
  { verb: "Ir", tense: "Imperfecto", pronoun: "Nosotros", options: ["íbamos", "fuimos", "vamos", "ibais"], correct: 0 },
  { verb: "Tener", tense: "Futuro", pronoun: "Nosotros", options: ["tendremos", "teneremos", "tendríamos", "tendrán"], correct: 0 },
  { verb: "Poder", tense: "Condicional", pronoun: "Yo", options: ["podría", "podré", "pudiera", "podería"], correct: 0 },
  { verb: "Decir", tense: "Pretérito", pronoun: "Tú", options: ["dijiste", "deciste", "dijaste", "dijistes"], correct: 0 },
  { verb: "Saber", tense: "Subjuntivo", pronoun: "Yo", options: ["sepa", "saba", "supiera", "sé"], correct: 0 }
];