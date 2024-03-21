const aeroportos = [
    {
        "cidade": "Porto",
        "sigla": "OPO",
        "pais": "Portugal"
    },
    {
        "cidade": "Faro",
        "sigla": "FAO",
        "pais": "Portugal"
    },
    {
        "cidade": "Funchal - Madeira",
        "sigla": "FNC",
        "pais": "Portugal"
    },
    {
        "cidade": "Porto Santo",
        "sigla": "PXO",
        "pais": "Portugal"
    },
    {
        "cidade": "Horta - Faial",
        "sigla": "HOR",
        "pais": "Portugal"
    },
    {
        "cidade": "Flores",
        "sigla": "FLW",
        "pais": "Portugal"
    },
    {
        "cidade": "Frankfurt",
        "sigla": "FRA",
        "pais": "Alemanha"
    },
    {
        "cidade": "Munique",
        "sigla": "MUC",
        "pais": "Alemanha"
    },
    {
        "cidade": "Hamburgo - F\u00fchlsb\u00fcttel",
        "sigla": "HAM",
        "pais": "Alemanha"
    },
    {
        "cidade": "Dusseldorf - Weeze",
        "sigla": "DUS",
        "pais": "Alemanha"
    },
    {
        "cidade": "Estugarda - Stuttgart",
        "sigla": "STR",
        "pais": "Alemanha"
    },
    {
        "cidade": "Berlim-Brandemburgo",
        "sigla": "BER",
        "pais": "Alemanha"
    },
    {
        "cidade": "Banguecoque - Suvarnabhumi",
        "sigla": "BKK",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Zurique - Kloten",
        "sigla": "ZRH",
        "pais": "Su\u00ed\u00e7a"
    },
    {
        "cidade": "Col\u00f3nia - Bona",
        "sigla": "CGN",
        "pais": "Alemanha"
    },
    {
        "cidade": "Han\u00f4ver",
        "sigla": "HAJ",
        "pais": "Alemanha"
    },
    {
        "cidade": "Viena",
        "sigla": "VIE",
        "pais": "\u00c1ustria"
    },
    {
        "cidade": "Londres - Heathrow",
        "sigla": "LHR",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Londres, todos aeroportos",
        "sigla": "LCY",
        "pais": "LGW"
    },
    {
        "cidade": "Palma de Maiorca - Sont Sant Joan",
        "sigla": "PMI",
        "pais": "Espanha"
    },
    {
        "cidade": "Nova Iorque / Nova York - John F. Kennedy",
        "sigla": "JFK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Barcelona",
        "sigla": "BCN",
        "pais": "Espanha"
    },
    {
        "cidade": "Amesterd\u00e3o - Schiphol",
        "sigla": "AMS",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Nova Iorque, todos aeroportos",
        "sigla": "JFK",
        "pais": "EWR"
    },
    {
        "cidade": "Tel Aviv - Ben Gurion",
        "sigla": "TLV",
        "pais": "Israel"
    },
    {
        "cidade": "Izmir - Adnan Menderes",
        "sigla": "ADB",
        "pais": "Turquia"
    },
    {
        "cidade": "Atenas",
        "sigla": "ATH",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Miami",
        "sigla": "MIA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tessal\u00f3nica - Sal\u00f3nica",
        "sigla": "SKG",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Londres - Gatwick",
        "sigla": "LGW",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Madrid - Barajas",
        "sigla": "MAD",
        "pais": "Espanha"
    },
    {
        "cidade": "Los Angeles",
        "sigla": "LAX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Basileia - Euroairport",
        "sigla": "BSL",
        "pais": "Su\u00ed\u00e7a"
    },
    {
        "cidade": "Dresda",
        "sigla": "DRS",
        "pais": "Alemanha"
    },
    {
        "cidade": "Bremen",
        "sigla": "BRE",
        "pais": "Alemanha"
    },
    {
        "cidade": "Dempassar - Bali",
        "sigla": "DPS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Antalya",
        "sigla": "AYT",
        "pais": "Turquia"
    },
    {
        "cidade": "Dubai",
        "sigla": "DXB",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Kiev",
        "sigla": "KBP",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "M\u00e1laga",
        "sigla": "AGP",
        "pais": "Espanha"
    },
    {
        "cidade": "Sydney - Kingsford Smith",
        "sigla": "SYD",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Paris - Charles de Gaulle",
        "sigla": "CDG",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Leipzig",
        "sigla": "LEJ",
        "pais": "Alemanha"
    },
    {
        "cidade": "Manchester",
        "sigla": "MAN",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Dortmund",
        "sigla": "DTM",
        "pais": "Alemanha"
    },
    {
        "cidade": "Hong Kong - Chep Lak Kok",
        "sigla": "HKG",
        "pais": "Hong Kong"
    },
    {
        "cidade": "S\u00e3o Francisco",
        "sigla": "SFO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Belgrado - Nikola Tesla",
        "sigla": "BEG",
        "pais": "S\u00e9rvia"
    },
    {
        "cidade": "Singapura - Changi",
        "sigla": "SIN",
        "pais": "Singapura"
    },
    {
        "cidade": "Phuket",
        "sigla": "HKT",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Budapeste - Ferihegy",
        "sigla": "BUD",
        "pais": "Hungria"
    },
    {
        "cidade": "Copenhaga",
        "sigla": "CPH",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Frankfurt - Hahn",
        "sigla": "HHN",
        "pais": "Alemanha"
    },
    {
        "cidade": "Manila - Ninoy Aquino",
        "sigla": "MNL",
        "pais": "Filipinas"
    },
    {
        "cidade": "Bruxelas - Zaventem",
        "sigla": "BRU",
        "pais": "B\u00e9lgica"
    },
    {
        "cidade": "Dublin",
        "sigla": "DUB",
        "pais": "Irlanda"
    },
    {
        "cidade": "Roma - Fiumicino",
        "sigla": "FCO",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Londres - Stansted",
        "sigla": "STN",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Cidade do Cabo",
        "sigla": "CPT",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Xangai - Pudong",
        "sigla": "PVG",
        "pais": "China"
    },
    {
        "cidade": "Koh Samui",
        "sigla": "USM",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Nice - Costa Azul",
        "sigla": "NCE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Sofia",
        "sigla": "SOF",
        "pais": "Bulg\u00e1ria"
    },
    {
        "cidade": "Kuala Lumpur",
        "sigla": "KUL",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Casablanca - Mohammed V",
        "sigla": "CMN",
        "pais": "Morrocos"
    },
    {
        "cidade": "Santiago do Chile - Arturo Merino Benitez - Pudahuel",
        "sigla": "SCL",
        "pais": "Chile"
    },
    {
        "cidade": "Mumbai - Chhatrapati Shivaji - Agoda",
        "sigla": "BOM",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Pristina",
        "sigla": "PRN",
        "pais": "Kosovo"
    },
    {
        "cidade": "Joanesburgo - Oliver Tambo",
        "sigla": "JNB",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Ancara - Esenboga",
        "sigla": "ESB",
        "pais": "Turquia"
    },
    {
        "cidade": "Cat\u00e2nia - Fontanarossa - Vicenzo Bellini",
        "sigla": "CTA",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Lima - Jorge Ch\u00e1vez",
        "sigla": "LIM",
        "pais": "Peru"
    },
    {
        "cidade": "Las Vegas - McCarran",
        "sigla": "LAS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Orlando",
        "sigla": "MCO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Auckland",
        "sigla": "AKL",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Alicante - Elche",
        "sigla": "ALC",
        "pais": "Espanha"
    },
    {
        "cidade": "Cairo",
        "sigla": "CAI",
        "pais": "Egipto"
    },
    {
        "cidade": "Edimburgo",
        "sigla": "EDI",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Estocolmo - Arlanda",
        "sigla": "ARN",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Birmingham",
        "sigla": "BHX",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Toronto - Pearson",
        "sigla": "YYZ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cidade do M\u00e9xico - Benito Juarez",
        "sigla": "MEX",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Muenster - Osnabrueck",
        "sigla": "FMO",
        "pais": "Alemanha"
    },
    {
        "cidade": "Beirute",
        "sigla": "BEY",
        "pais": "L\u00edbano"
    },
    {
        "cidade": "Pequim - Beijing Internacional",
        "sigla": "PEK",
        "pais": "China"
    },
    {
        "cidade": "Praga - Ruzyne",
        "sigla": "PRG",
        "pais": "Rep\u00fablica Checa"
    },
    {
        "cidade": "Memmingen",
        "sigla": "FMM",
        "pais": "Alemanha"
    },
    {
        "cidade": "Hels\u00ednquia - Vantaa",
        "sigla": "HEL",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Veneza - Marco Polo - Tessera",
        "sigla": "VCE",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Ho Chi Minh - Tan Son Nhat",
        "sigla": "SGN",
        "pais": "Vietname"
    },
    {
        "cidade": "Istanbul - Sabiha G\u00f6kcen",
        "sigla": "SAW",
        "pais": "Turquia"
    },
    {
        "cidade": "Buenos Aires - Ezeiza",
        "sigla": "EZE",
        "pais": "Argentina"
    },
    {
        "cidade": "Chicago O'Hare",
        "sigla": "ORD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "T\u00f3quio - Narita",
        "sigla": "NRT",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Heraklion",
        "sigla": "HER",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Vancouver",
        "sigla": "YVR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Boston Logan",
        "sigla": "BOS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Paris, todos aeroportos",
        "sigla": "CDG",
        "pais": "ORY"
    },
    {
        "cidade": "Tunes - Carthage",
        "sigla": "TUN",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Bord\u00e9us - M\u00e9rignac",
        "sigla": "BOD",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Graz",
        "sigla": "GRZ",
        "pais": "\u00c1ustria"
    },
    {
        "cidade": "Goa",
        "sigla": "GOI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Skopje",
        "sigla": "SKP",
        "pais": "Rep\u00fablica da Maced\u00f3nia"
    },
    {
        "cidade": "Bucareste - Otopeni",
        "sigla": "OTP",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Glasgow",
        "sigla": "GLA",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Londres - Luton",
        "sigla": "LTN",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Jacarta - Soekarno - Hatta",
        "sigla": "CGK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Oslo - Gardermoen",
        "sigla": "OSL",
        "pais": "Noruega"
    },
    {
        "cidade": "S\u00e3o Paulo - Guarulhos",
        "sigla": "GRU",
        "pais": "Brasil"
    },
    {
        "cidade": "Cancum",
        "sigla": "CUN",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Salzburgo - W.A. Mozart",
        "sigla": "SZG",
        "pais": "\u00c1ustria"
    },
    {
        "cidade": "Vars\u00f3via",
        "sigla": "WAW",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Larnaca",
        "sigla": "LCA",
        "pais": "Chipre"
    },
    {
        "cidade": "Zagrebe - Pleso",
        "sigla": "ZAG",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Mil\u00e3o - Malpensa",
        "sigla": "MXP",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Karlsruhe - Baden",
        "sigla": "FKB",
        "pais": "Alemanha"
    },
    {
        "cidade": "Moscovo - Sheremetyevo",
        "sigla": "SVO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Podgorica",
        "sigla": "TGD",
        "pais": "Montenegro"
    },
    {
        "cidade": "Nova Iorque - Newark Liberty",
        "sigla": "EWR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Simferopol",
        "sigla": "SIP",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Londres - City",
        "sigla": "LCY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Luxemburgo",
        "sigla": "LUX",
        "pais": "Luxemburgo"
    },
    {
        "cidade": "San Jos\u00e9, Costa Rica",
        "sigla": "SJO",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Ibiza",
        "sigla": "IBZ",
        "pais": "Espanha"
    },
    {
        "cidade": "Moscovo - Domodedovo",
        "sigla": "DME",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Saarbr\u00fccken",
        "sigla": "SCN",
        "pais": "Alemanha"
    },
    {
        "cidade": "Sarajevo",
        "sigla": "SJJ",
        "pais": "B\u00f3snia e Herzegovina"
    },
    {
        "cidade": "Sibiu",
        "sigla": "SBZ",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Kayseri Erkilet",
        "sigla": "ASR",
        "pais": "Turquia"
    },
    {
        "cidade": "Riga",
        "sigla": "RIX",
        "pais": "Let\u00f3nia"
    },
    {
        "cidade": "Nador",
        "sigla": "NDR",
        "pais": "Morrocos"
    },
    {
        "cidade": "Damasco",
        "sigla": "DAM",
        "pais": "S\u00edria"
    },
    {
        "cidade": "Han\u00f3i - Noibai",
        "sigla": "HAN",
        "pais": "Vietname"
    },
    {
        "cidade": "Tenerife Sul - Rainha Sofia",
        "sigla": "TFS",
        "pais": "Espanha"
    },
    {
        "cidade": "Roma, todos os aeroportos -",
        "sigla": "FCO",
        "pais": "CIA"
    },
    {
        "cidade": "Melbourne - Tullamarine",
        "sigla": "MEL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Katowice",
        "sigla": "KTW",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Argel",
        "sigla": "ALG",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Atlanta",
        "sigla": "ATL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "N\u00e1poles",
        "sigla": "NAP",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Newcastle",
        "sigla": "NCL",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Friedrichshafen",
        "sigla": "FDH",
        "pais": "Alemanha"
    },
    {
        "cidade": "Colombo",
        "sigla": "CMB",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Malta",
        "sigla": "MLA",
        "pais": "Malta"
    },
    {
        "cidade": "Teer\u00e3o - Imam Khomeini",
        "sigla": "IKA",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Lyon - Saint-Exup\u00e9ry - Satolas",
        "sigla": "LYS",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Las Palmas - Gr\u00e3 Can\u00e1ria",
        "sigla": "LPA",
        "pais": "Espanha"
    },
    {
        "cidade": "Aberdeen",
        "sigla": "ABZ",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Timisoara",
        "sigla": "TSR",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Rostock - Laage",
        "sigla": "RLG",
        "pais": "Alemanha"
    },
    {
        "cidade": "Palermo - Punta Raisi",
        "sigla": "PMO",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Quito - Mariscal Sucre",
        "sigla": "UIO",
        "pais": "Equador"
    },
    {
        "cidade": "Paderborn - Lippstadt",
        "sigla": "PAD",
        "pais": "Alemanha"
    },
    {
        "cidade": "Innsbruck - Kranebitten",
        "sigla": "INN",
        "pais": "\u00c1ustria"
    },
    {
        "cidade": "Tirana - N\u00ebn\u00eb Tereza",
        "sigla": "TIA",
        "pais": "Alb\u00e2nia"
    },
    {
        "cidade": "Gdansk - Lech Walesa",
        "sigla": "GDN",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Havana - Jos\u00e9 Marti",
        "sigla": "HAV",
        "pais": "Cuba"
    },
    {
        "cidade": "Split",
        "sigla": "SPU",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Seul - Incheon",
        "sigla": "ICN",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Tampa",
        "sigla": "TPA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Seattle - Tacoma",
        "sigla": "SEA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Odessa",
        "sigla": "ODS",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Talim - Ulemiste",
        "sigla": "TLL",
        "pais": "Est\u00f3nia"
    },
    {
        "cidade": "Gotemburgo - Landvetter",
        "sigla": "GOT",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "L\u00fcbeck - Blankensee",
        "sigla": "LBC",
        "pais": "Alemanha"
    },
    {
        "cidade": "Leeds - Bradford",
        "sigla": "LBA",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Nairobi Kenyatta International",
        "sigla": "NBO",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Perth",
        "sigla": "PER",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Estrasburgo - Entzheim",
        "sigla": "SXB",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Val\u00eancia - Manises",
        "sigla": "VLC",
        "pais": "Espanha"
    },
    {
        "cidade": "Lamezia Terme",
        "sigla": "SUF",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Marseille",
        "sigla": "MRS",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Acra",
        "sigla": "ACC",
        "pais": "Gana"
    },
    {
        "cidade": "Bangalore",
        "sigla": "BLR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Lagos - Murtala Muhammed",
        "sigla": "LOS",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Catmandu - Tribhuvan",
        "sigla": "KTM",
        "pais": "Nepal"
    },
    {
        "cidade": "Southampton - Eastleigh",
        "sigla": "SOU",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Baku",
        "sigla": "GYD",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "Honolulu",
        "sigla": "HNL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dallas - Fort Worth",
        "sigla": "DFW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Floren\u00e7a",
        "sigla": "FLR",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Crac\u00f3via",
        "sigla": "KRK",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Fort Lauderdale - Hollywood, FL",
        "sigla": "FLL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Buenos Aires - todos os aeroportos",
        "sigla": "EZE",
        "pais": "AEP"
    },
    {
        "cidade": "Erevan",
        "sigla": "EVN",
        "pais": "Arm\u00e9nia"
    },
    {
        "cidade": "Paris - Orly",
        "sigla": "ORY",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Linz - Hoersching",
        "sigla": "LNZ",
        "pais": "\u00c1ustria"
    },
    {
        "cidade": "Samsun-Carsamba",
        "sigla": "SZF",
        "pais": "Turquia"
    },
    {
        "cidade": "Corfu",
        "sigla": "CFU",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Bergen - Flesland",
        "sigla": "BGO",
        "pais": "Noruega"
    },
    {
        "cidade": "Daca",
        "sigla": "DAC",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Tbilisi - Novo Alexeyevka",
        "sigla": "TBS",
        "pais": "Ge\u00f3rgia"
    },
    {
        "cidade": "Belfast City",
        "sigla": "BHD",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Fort Myers - Southwest Florida",
        "sigla": "RSW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mil\u00e3o, todos os aeroportos",
        "sigla": "MXP",
        "pais": "LIN"
    },
    {
        "cidade": "Detroit Wayne County",
        "sigla": "DTW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Punta Cana",
        "sigla": "PUJ",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Burgas",
        "sigla": "BOJ",
        "pais": "Bulg\u00e1ria"
    },
    {
        "cidade": "Darwin",
        "sigla": "DRW",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Belfast - International",
        "sigla": "BFS",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Dalaman",
        "sigla": "DLM",
        "pais": "Turquia"
    },
    {
        "cidade": "Westerland / Sylt",
        "sigla": "GWT",
        "pais": "Alemanha"
    },
    {
        "cidade": "Verona - Villafranca",
        "sigla": "VRN",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Pisa - Galileu Galilei",
        "sigla": "PSA",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Thiruvananthapuram",
        "sigla": "TRV",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Estocolmo, todos aeroportos",
        "sigla": "ARN",
        "pais": "BMA"
    },
    {
        "cidade": "Varna",
        "sigla": "VAR",
        "pais": "Bulg\u00e1ria"
    },
    {
        "cidade": "Windhoek - Hosea Kutako",
        "sigla": "WDH",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Cochim",
        "sigla": "COK",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Fuerteventura",
        "sigla": "FUE",
        "pais": "Espanha"
    },
    {
        "cidade": "Liubliana - Brnik",
        "sigla": "LJU",
        "pais": "Eslov\u00e9nia"
    },
    {
        "cidade": "Bolonha",
        "sigla": "BLQ",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Klagenfurt",
        "sigla": "KLU",
        "pais": "\u00c1ustria"
    },
    {
        "cidade": "Novosibirsk - Tolmachevo",
        "sigla": "OVB",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "San Diego - Lindberg Field",
        "sigla": "SAN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gerunda - Costa Brava",
        "sigla": "GRO",
        "pais": "Espanha"
    },
    {
        "cidade": "Marrakech - Menara",
        "sigla": "RAK",
        "pais": "Morrocos"
    },
    {
        "cidade": "Rio de Janeiro, todos aeroportos",
        "sigla": "GIG",
        "pais": "SDU"
    },
    {
        "cidade": "Toulouse - Blagnac",
        "sigla": "TLS",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Santiago de Compostela",
        "sigla": "SCQ",
        "pais": "Espanha"
    },
    {
        "cidade": "Tivat",
        "sigla": "TIV",
        "pais": "Montenegro"
    },
    {
        "cidade": "Cebu",
        "sigla": "CEB",
        "pais": "Filipinas"
    },
    {
        "cidade": "Rio de Janeiro - Gale\u00e3o",
        "sigla": "GIG",
        "pais": "Brasil"
    },
    {
        "cidade": "Tenerife, todos aeroportos",
        "sigla": "TFS",
        "pais": "TFN"
    },
    {
        "cidade": "Mauritius - Sir Seewoosagur Ram",
        "sigla": "MRU",
        "pais": "Maur\u00edcia"
    },
    {
        "cidade": "Cairns",
        "sigla": "CNS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Guangzhou Baiyun - Cant\u00e3o",
        "sigla": "CAN",
        "pais": "China"
    },
    {
        "cidade": "Bristol",
        "sigla": "BRS",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Phoenix - Sky Harbor",
        "sigla": "PHX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "La Palma",
        "sigla": "SPC",
        "pais": "Espanha"
    },
    {
        "cidade": "Vilnius",
        "sigla": "VNO",
        "pais": "Litu\u00e2nia"
    },
    {
        "cidade": "Zadar",
        "sigla": "ZAD",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Entebbe",
        "sigla": "EBB",
        "pais": "Uganda"
    },
    {
        "cidade": "Liverpool",
        "sigla": "LPL",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Mineralnye Vody",
        "sigla": "MRV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Astana",
        "sigla": "NQZ",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Alepo",
        "sigla": "ALP",
        "pais": "S\u00edria"
    },
    {
        "cidade": "San Juan - Luis Mu\u00f1oz Marin",
        "sigla": "SJU",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Trabzon",
        "sigla": "TZX",
        "pais": "Turquia"
    },
    {
        "cidade": "Doha",
        "sigla": "DOH",
        "pais": "Qatar"
    },
    {
        "cidade": "Filad\u00e9lfia",
        "sigla": "PHL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bilbau",
        "sigla": "BIO",
        "pais": "Espanha"
    },
    {
        "cidade": "Portland International Airport, Oregon",
        "sigla": "PDX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hurghada",
        "sigla": "HRG",
        "pais": "Egipto"
    },
    {
        "cidade": "Jerez de la Frontera",
        "sigla": "XRY",
        "pais": "Espanha"
    },
    {
        "cidade": "Omsk",
        "sigla": "OMS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Bari",
        "sigla": "BRI",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Trondheim",
        "sigla": "TRD",
        "pais": "Noruega"
    },
    {
        "cidade": "Krasnodar",
        "sigla": "KRR",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Abu Dhabi",
        "sigla": "AUH",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Halifax International",
        "sigla": "YHZ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Billund",
        "sigla": "BLL",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Christchurch",
        "sigla": "CHC",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Tashkent",
        "sigla": "TAS",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Calgary - Banff",
        "sigla": "YYC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Minneapolis - St. Paul",
        "sigla": "MSP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Adis Abeba",
        "sigla": "ADD",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Rostov",
        "sigla": "ROV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Aeroporto Internacional de Osaka-Kansai",
        "sigla": "KIX",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Houston - Aeroporto Intercontinental George Bush, TX",
        "sigla": "IAH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sevilha - San Pablo",
        "sigla": "SVQ",
        "pais": "Espanha"
    },
    {
        "cidade": "Brindisi",
        "sigla": "BDS",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Cagliari",
        "sigla": "CAG",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Sharm el - Sheikh",
        "sigla": "SSH",
        "pais": "Egipto"
    },
    {
        "cidade": "Tokyo, todos os aeroportos",
        "sigla": "HND",
        "pais": "NRT"
    },
    {
        "cidade": "Krabi",
        "sigla": "KBV",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Charlotte Douglas",
        "sigla": "CLT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "La Paz - El Alto",
        "sigla": "LPB",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Moscovo - Vnukovo",
        "sigla": "VKO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Preveza - Lefkas",
        "sigla": "PVK",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Rimini - Frederico Fellini",
        "sigla": "RMI",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Lviv - Le\u00f3polis",
        "sigla": "LWO",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Agadir - Al Massira",
        "sigla": "AGA",
        "pais": "Morrocos"
    },
    {
        "cidade": "Douala",
        "sigla": "DLA",
        "pais": "Camar\u00f5es"
    },
    {
        "cidade": "Kuwait - Kuwait International",
        "sigla": "KWI",
        "pais": "Kuwait"
    },
    {
        "cidade": "Montreal - Pierre Elliott Trudeau Internacional",
        "sigla": "YUL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Santa Cruz Viru Viru",
        "sigla": "VVI",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Dubrovnik",
        "sigla": "DBV",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Hyderabad",
        "sigla": "HYD",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jeddah-King Abdulaziz",
        "sigla": "JED",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Tangier-Boukhalef",
        "sigla": "TNG",
        "pais": "Morrocos"
    },
    {
        "cidade": "Diyarbakir",
        "sigla": "DIY",
        "pais": "Turquia"
    },
    {
        "cidade": "Gaziantep",
        "sigla": "GZT",
        "pais": "Turquia"
    },
    {
        "cidade": "Cardiff",
        "sigla": "CWL",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Muscat - Seeb",
        "sigla": "MCT",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Reiquiavique - Keflavique",
        "sigla": "KEF",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Minsk",
        "sigla": "MSQ",
        "pais": "Bielor\u00fassia"
    },
    {
        "cidade": "Vigo",
        "sigla": "VGO",
        "pais": "Espanha"
    },
    {
        "cidade": "Malatya",
        "sigla": "MLX",
        "pais": "Turquia"
    },
    {
        "cidade": "Bahrain",
        "sigla": "BAH",
        "pais": "Bahrein"
    },
    {
        "cidade": "Momba\u00e7a - Moi International",
        "sigla": "MBA",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Papeete - Faaa",
        "sigla": "PPT",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Stavanger, Sola",
        "sigla": "SVG",
        "pais": "Noruega"
    },
    {
        "cidade": "Volgograd",
        "sigla": "VOG",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Erbil",
        "sigla": "EBL",
        "pais": "Iraque"
    },
    {
        "cidade": "Calcut\u00e1 - Kolkata",
        "sigla": "CCU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ilha de Man",
        "sigla": "IOM",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Pula",
        "sigla": "PUY",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Antananarivo",
        "sigla": "TNR",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Inverness",
        "sigla": "INV",
        "pais": "Reino Unido"
    },
    {
        "cidade": "C\u00f3s",
        "sigla": "KGS",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Panama City - Tocumen",
        "sigla": "PTY",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Krasnoyarsk Yemelyanovo",
        "sigla": "KJA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Mahe - Seychelles",
        "sigla": "SEZ",
        "pais": "Seicheles"
    },
    {
        "cidade": "Cluj - Napoca",
        "sigla": "CLJ",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Kaliningrado",
        "sigla": "KGD",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Bishkek",
        "sigla": "FRU",
        "pais": "Quirguist\u00e3o"
    },
    {
        "cidade": "Cidade da Guatemala",
        "sigla": "GUA",
        "pais": "Guatemala"
    },
    {
        "cidade": "Bodrum - Milas",
        "sigla": "BJV",
        "pais": "Turquia"
    },
    {
        "cidade": "Almaty",
        "sigla": "ALA",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Islamabad International",
        "sigla": "ISB",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "J\u00e9rsei",
        "sigla": "JER",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Karachi - Jinnah - Quaid-E-Azam",
        "sigla": "KHI",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Bridgetown - Grantley Adams Airport",
        "sigla": "BGI",
        "pais": "Barbados"
    },
    {
        "cidade": "Caracas - Maiquetia",
        "sigla": "CCS",
        "pais": "Venezuela"
    },
    {
        "cidade": "Nova Iorque - Nova York - LaGuardia",
        "sigla": "LGA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Phnom Penh - Pochentong",
        "sigla": "PNH",
        "pais": "Camboja"
    },
    {
        "cidade": "Samara",
        "sigla": "KUF",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ecaterimburgo",
        "sigla": "SVX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Arrecife - Lan\u00e7arote",
        "sigla": "ACE",
        "pais": "Espanha"
    },
    {
        "cidade": "Assun\u00e7\u00e3o",
        "sigla": "ASU",
        "pais": "Paraguai"
    },
    {
        "cidade": "Riade - King Khaled",
        "sigla": "RUH",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Kristiansand",
        "sigla": "KRS",
        "pais": "Noruega"
    },
    {
        "cidade": "Rijeka",
        "sigla": "RJK",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Santo Domingo - Las Am\u00e9ricas",
        "sigla": "SDQ",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Taip\u00e9-Taoyuan",
        "sigla": "TPE",
        "pais": "Taiwan"
    },
    {
        "cidade": "Trieste",
        "sigla": "TRS",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Cleveland - Hopkins",
        "sigla": "CLE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mil\u00e3o - Linate",
        "sigla": "LIN",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Poznan",
        "sigla": "POZ",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Chiang Mai",
        "sigla": "CNX",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Lahore",
        "sigla": "LHE",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Nassau",
        "sigla": "NAS",
        "pais": "Bahamas"
    },
    {
        "cidade": "Pittsburgh",
        "sigla": "PIT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cura\u00e7ao",
        "sigla": "CUR",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "El Paso, Texas",
        "sigla": "ELP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Or\u00e3-Es Senia",
        "sigla": "ORN",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Samos",
        "sigla": "SMI",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Turim",
        "sigla": "TRN",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Adelaide",
        "sigla": "ADL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "S\u00f3chi R\u00fassia",
        "sigla": "AER",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Durban",
        "sigla": "DUR",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Amritsar",
        "sigla": "ATQ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Bastia",
        "sigla": "BIA",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "C\u00f3rdoba",
        "sigla": "COR",
        "pais": "Argentina"
    },
    {
        "cidade": "Fortaleza",
        "sigla": "FOR",
        "pais": "Brasil"
    },
    {
        "cidade": "Donetsk",
        "sigla": "DOK",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Kaunas",
        "sigla": "KUN",
        "pais": "Litu\u00e2nia"
    },
    {
        "cidade": "Newquay Cornwall",
        "sigla": "NQY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Albuquerque",
        "sigla": "ABQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cali",
        "sigla": "CLO",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Nadi",
        "sigla": "NAN",
        "pais": "Fiji"
    },
    {
        "cidade": "Toronto, todos aeroportos",
        "sigla": "YYZ",
        "pais": "YTZ"
    },
    {
        "cidade": "Nova Orle\u00e3s",
        "sigla": "MSY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Port Elizabeth",
        "sigla": "PLZ",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Tenerife - Norte Los Rodeos",
        "sigla": "TFN",
        "pais": "Espanha"
    },
    {
        "cidade": "Tripoli International",
        "sigla": "TIP",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Cartum",
        "sigla": "KRT",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Port of Spain - Trindade e Tobago",
        "sigla": "POS",
        "pais": "Trindade e Tobago"
    },
    {
        "cidade": "Veneza - Treviso-Sant'Angelo",
        "sigla": "TSF",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Siem Reap",
        "sigla": "REP",
        "pais": "Camboja"
    },
    {
        "cidade": "Buffalo - Niagara",
        "sigla": "BUF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kilimanjaro",
        "sigla": "JRO",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Montpellier - M\u00e9diterran\u00e9e",
        "sigla": "MPL",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Cheliabinsk",
        "sigla": "CEK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "G\u00e9nova - Crist\u00f3v\u00e3o Colombo",
        "sigla": "GOA",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Kansas City",
        "sigla": "MCI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mil\u00e3o - B\u00e9rgamo - \u00d3rio al S\u00e9rio",
        "sigla": "BGY",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Yangon - Rangum - Mingaladon",
        "sigla": "RGN",
        "pais": "Myanmar"
    },
    {
        "cidade": "Washington-DC, todos aeroportos",
        "sigla": "IAD",
        "pais": "DCA"
    },
    {
        "cidade": "Mannheim - Neuostheim",
        "sigla": "MHG",
        "pais": "Alemanha"
    },
    {
        "cidade": "Bora Bora",
        "sigla": "BOB",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Bratislava",
        "sigla": "BTS",
        "pais": "Eslov\u00e1quia"
    },
    {
        "cidade": "Cavala",
        "sigla": "KVA",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Langkawi",
        "sigla": "LGK",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Barnaul",
        "sigla": "BAX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Palanga",
        "sigla": "PLQ",
        "pais": "Litu\u00e2nia"
    },
    {
        "cidade": "Managua - Augusto C Sandino",
        "sigla": "MGA",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Medellin",
        "sigla": "MDE",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Pafos",
        "sigla": "PFO",
        "pais": "Chipre"
    },
    {
        "cidade": "Oremburgo",
        "sigla": "REN",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Mardin",
        "sigla": "MQM",
        "pais": "Turquia"
    },
    {
        "cidade": "Guadalajara",
        "sigla": "GDL",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Norfolk, Virginia",
        "sigla": "ORF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bolzano",
        "sigla": "BZO",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Melilha",
        "sigla": "MLN",
        "pais": "Espanha"
    },
    {
        "cidade": "Djerba - Zarzis",
        "sigla": "DJE",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Edmonton",
        "sigla": "YEG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kuala Lumpur",
        "sigla": "SZB",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Monterrey",
        "sigla": "MTY",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Karaganda",
        "sigla": "KGF",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Ufa",
        "sigla": "UFA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Almeria",
        "sigla": "LEI",
        "pais": "Espanha"
    },
    {
        "cidade": "Calicute - Kozhikode",
        "sigla": "CCJ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Nantes",
        "sigla": "NTE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Roma - Ciampino",
        "sigla": "CIA",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Cusco",
        "sigla": "CUZ",
        "pais": "Peru"
    },
    {
        "cidade": "Fakarava",
        "sigla": "FAV",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Alesund",
        "sigla": "AES",
        "pais": "Noruega"
    },
    {
        "cidade": "Anchorage - Ted Stevens",
        "sigla": "ANC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Euroairport Mulhouse",
        "sigla": "MLH",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Belo Horizonte",
        "sigla": "CNF",
        "pais": "Brasil"
    },
    {
        "cidade": "Fez",
        "sigla": "FEZ",
        "pais": "Morrocos"
    },
    {
        "cidade": "Jacksonville, Florida",
        "sigla": "JAX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Porlamar - Ilha de Margarita",
        "sigla": "PMV",
        "pais": "Venezuela"
    },
    {
        "cidade": "Santorini",
        "sigla": "JTR",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Winnipeg International",
        "sigla": "YWG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Dnepropetrovsk",
        "sigla": "DNK",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Dundee",
        "sigla": "DND",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Baltimore - Washington - Marshall Thurgood, MD",
        "sigla": "BWI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Erfurt - Weimar",
        "sigla": "ERF",
        "pais": "Alemanha"
    },
    {
        "cidade": "Puerto Plata - Gregorio Luper\u00f3n",
        "sigla": "POP",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Teer\u00e3o / Teer\u00e3 - Mehrabad",
        "sigla": "THR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Tyumen",
        "sigla": "TJM",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Chicago, IL - todos os aeroportos,",
        "sigla": "ORD",
        "pais": "MDW"
    },
    {
        "cidade": "Dayton",
        "sigla": "DAY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Indian\u00e1polis",
        "sigla": "IND",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lom\u00e9",
        "sigla": "LFW",
        "pais": "Togo"
    },
    {
        "cidade": "Mitilene",
        "sigla": "MJT",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Nashville",
        "sigla": "BNA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tromso",
        "sigla": "TOS",
        "pais": "Noruega"
    },
    {
        "cidade": "Bucareste - Baneasa",
        "sigla": "BBU",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Kostanay",
        "sigla": "KSN",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Voronezh",
        "sigla": "VOZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Alghero - Fertilia",
        "sigla": "AHO",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Austin - Bergstrom",
        "sigla": "AUS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cincinnati / Northern Kentucky International Airport, OH",
        "sigla": "CVG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Constanta",
        "sigla": "CND",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Minorca - Ma\u00f3",
        "sigla": "MAH",
        "pais": "Espanha"
    },
    {
        "cidade": "Richmond",
        "sigla": "RIC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Saint Denis de la Reunion",
        "sigla": "RUN",
        "pais": "Reuni\u00e3o"
    },
    {
        "cidade": "Tobago",
        "sigla": "TAB",
        "pais": "Trindade e Tobago"
    },
    {
        "cidade": "Iasi",
        "sigla": "IAS",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Abidjan",
        "sigla": "ABJ",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "Guaiaquil",
        "sigla": "GYE",
        "pais": "Equador"
    },
    {
        "cidade": "Abuja",
        "sigla": "ABV",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "S\u00e3o Paulo, todos aeroportos",
        "sigla": "CGH",
        "pais": "GRU"
    },
    {
        "cidade": "Barranquilla",
        "sigla": "BAQ",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Curitiba",
        "sigla": "CWB",
        "pais": "Brasil"
    },
    {
        "cidade": "Granada",
        "sigla": "GRX",
        "pais": "Espanha"
    },
    {
        "cidade": "Grand Cayman",
        "sigla": "GCM",
        "pais": "Ilhas Caim\u00e3o"
    },
    {
        "cidade": "Busan - Gimhae",
        "sigla": "PUS",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Salvador",
        "sigla": "SSA",
        "pais": "Brasil"
    },
    {
        "cidade": "Ushuaia",
        "sigla": "USH",
        "pais": "Argentina"
    },
    {
        "cidade": "Montevid\u00e9u - Carrasco",
        "sigla": "MVD",
        "pais": "Uruguai"
    },
    {
        "cidade": "Pune",
        "sigla": "PNQ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "San Antonio",
        "sigla": "SAT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Banja Luka",
        "sigla": "BNX",
        "pais": "B\u00f3snia e Herzegovina"
    },
    {
        "cidade": "Da Nang",
        "sigla": "DAD",
        "pais": "Vietname"
    },
    {
        "cidade": "Pavlodar",
        "sigla": "PWQ",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Bagdade",
        "sigla": "BGW",
        "pais": "Iraque"
    },
    {
        "cidade": "Montego Bay",
        "sigla": "MBJ",
        "pais": "Jamaica"
    },
    {
        "cidade": "Ohrid",
        "sigla": "OHD",
        "pais": "Rep\u00fablica da Maced\u00f3nia"
    },
    {
        "cidade": "Raleigh - Durham",
        "sigla": "RDU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Victoria Falls",
        "sigla": "VFA",
        "pais": "Zimbabwe"
    },
    {
        "cidade": "Forli",
        "sigla": "FRL",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Heringsdorf",
        "sigla": "HDF",
        "pais": "Alemanha"
    },
    {
        "cidade": "Araxos",
        "sigla": "GPA",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Brest",
        "sigla": "BES",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Conacri",
        "sigla": "CKY",
        "pais": "Guin\u00e9 - Conacri"
    },
    {
        "cidade": "Kiev - Zhulhany",
        "sigla": "IEV",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Lexington-KY",
        "sigla": "LEX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Whitehorse",
        "sigla": "YXY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Ostrava",
        "sigla": "OSR",
        "pais": "Rep\u00fablica Checa"
    },
    {
        "cidade": "Ust-Kamenogorsk",
        "sigla": "UKK",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "El Calafate",
        "sigla": "FTE",
        "pais": "Argentina"
    },
    {
        "cidade": "Biarritz",
        "sigla": "BIQ",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Birmingham-Alabama",
        "sigla": "BHM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fukuoka",
        "sigla": "FUK",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Glasgow - Prestwick",
        "sigla": "PIK",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Holgu\u00edn",
        "sigla": "HOG",
        "pais": "Cuba"
    },
    {
        "cidade": "Kabul Internacional - Hamid Karzai",
        "sigla": "KBL",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Nag\u00f3ia - Centrair",
        "sigla": "NGO",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Shanghai - Hongqiao",
        "sigla": "SHA",
        "pais": "China"
    },
    {
        "cidade": "Tioman",
        "sigla": "TOD",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Asmara Yohanes IV",
        "sigla": "ASM",
        "pais": "Eritreia"
    },
    {
        "cidade": "Shymkent",
        "sigla": "CIT",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Meshed",
        "sigla": "MHD",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Koror",
        "sigla": "ROR",
        "pais": "Palau"
    },
    {
        "cidade": "Alexandria",
        "sigla": "ALY",
        "pais": "Egipto"
    },
    {
        "cidade": "Banjul Yundum",
        "sigla": "BJL",
        "pais": "G\u00e2mbia"
    },
    {
        "cidade": "Guernsey",
        "sigla": "GCI",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Kingston-Norman Manley",
        "sigla": "KIN",
        "pais": "Jamaica"
    },
    {
        "cidade": "Louisville",
        "sigla": "SDF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Montreal, todos aeroportos",
        "sigla": "YUL",
        "pais": "YMX"
    },
    {
        "cidade": "Oviedo - Ast\u00farias",
        "sigla": "OVD",
        "pais": "Espanha"
    },
    {
        "cidade": "Penang",
        "sigla": "PEN",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Bornholm",
        "sigla": "RNN",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Sal International Airport",
        "sigla": "SID",
        "pais": "Cabo Verde"
    },
    {
        "cidade": "Salt Lake City",
        "sigla": "SLC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Exeter",
        "sigla": "EXT",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Marsa Alam",
        "sigla": "RMF",
        "pais": "Egipto"
    },
    {
        "cidade": "Hatay",
        "sigla": "HTY",
        "pais": "Turquia"
    },
    {
        "cidade": "Dushanbe",
        "sigla": "DYU",
        "pais": "Tajiquist\u00e3o"
    },
    {
        "cidade": "Fort Myers - Page Field",
        "sigla": "FMY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Li\u00e8ge",
        "sigla": "LGG",
        "pais": "B\u00e9lgica"
    },
    {
        "cidade": "Mendoza",
        "sigla": "MDZ",
        "pais": "Argentina"
    },
    {
        "cidade": "Milwaukee - General Mitchell",
        "sigla": "MKE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Porto Alegre",
        "sigla": "POA",
        "pais": "Brasil"
    },
    {
        "cidade": "Punta Arenas",
        "sigla": "PUQ",
        "pais": "Chile"
    },
    {
        "cidade": "Ulaanbaatar - Buyant Uhaa",
        "sigla": "ULN",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Wellington",
        "sigla": "WLG",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Kosice",
        "sigla": "KSC",
        "pais": "Eslov\u00e1quia"
    },
    {
        "cidade": "Owerri",
        "sigla": "QOW",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Tuzla",
        "sigla": "TZL",
        "pais": "B\u00f3snia e Herzegovina"
    },
    {
        "cidade": "Aruba",
        "sigla": "AUA",
        "pais": "Aruba"
    },
    {
        "cidade": "Chengdu",
        "sigla": "CTU",
        "pais": "China"
    },
    {
        "cidade": "Chittagong",
        "sigla": "CGP",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Fort-de-France, Martinica",
        "sigla": "FDF",
        "pais": "Martinica"
    },
    {
        "cidade": "Kerry",
        "sigla": "KIR",
        "pais": "Irlanda"
    },
    {
        "cidade": "Los Cabos",
        "sigla": "SJD",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Omaha - Eppley Airfield",
        "sigla": "OMA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Oulu",
        "sigla": "OUL",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Sharjah",
        "sigla": "SHJ",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Srinagar",
        "sigla": "SXR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Varanasi",
        "sigla": "VNS",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "West Palm Beach International, FL",
        "sigla": "PBI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wuhan",
        "sigla": "WUH",
        "pais": "China"
    },
    {
        "cidade": "Yogyakarta Adisutjipt",
        "sigla": "JOG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Khon Kaen",
        "sigla": "KKC",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Konya",
        "sigla": "KYA",
        "pais": "Turquia"
    },
    {
        "cidade": "Livingstone",
        "sigla": "LVI",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "Vladivostok",
        "sigla": "VVO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Iguazu",
        "sigla": "IGR",
        "pais": "Argentina"
    },
    {
        "cidade": "Gibraltar",
        "sigla": "GIB",
        "pais": "Gibraltar"
    },
    {
        "cidade": "Kinshasa - Ndjili",
        "sigla": "FIH",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Osijek",
        "sigla": "OSI",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Oujda",
        "sigla": "OUD",
        "pais": "Morrocos"
    },
    {
        "cidade": "Pau - Pirin\u00e9us",
        "sigla": "PUF",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Queenstown",
        "sigla": "ZQN",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Qingdao",
        "sigla": "TAO",
        "pais": "China"
    },
    {
        "cidade": "San Pedro Sula",
        "sigla": "SAP",
        "pais": "Honduras"
    },
    {
        "cidade": "Seul, todos os aeroportos",
        "sigla": "ICN",
        "pais": "GMP"
    },
    {
        "cidade": "Turku",
        "sigla": "TKU",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Washington - Ronald Reagan",
        "sigla": "DCA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bournemouth",
        "sigla": "BOH",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Jeju",
        "sigla": "CJU",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Kunming Wujiaba",
        "sigla": "KMG",
        "pais": "China"
    },
    {
        "cidade": "Luang Prabang",
        "sigla": "LPQ",
        "pais": "Laos"
    },
    {
        "cidade": "Ningbo Lishe",
        "sigla": "NGB",
        "pais": "China"
    },
    {
        "cidade": "Toulon - Hyeres",
        "sigla": "TLN",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Arusha",
        "sigla": "ARK",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Belize - Phillip Goldson International Airport",
        "sigla": "BZE",
        "pais": "Belize"
    },
    {
        "cidade": "Freetown - Lungi",
        "sigla": "FNA",
        "pais": "Serra Leoa"
    },
    {
        "cidade": "Puebla",
        "sigla": "PBC",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Rabat - Sale",
        "sigla": "RBA",
        "pais": "Morrocos"
    },
    {
        "cidade": "Rio de Janeiro - Santos Dumont",
        "sigla": "SDU",
        "pais": "Brasil"
    },
    {
        "cidade": "Macau",
        "sigla": "MFM",
        "pais": "Macau"
    },
    {
        "cidade": "Berlevag",
        "sigla": "BVG",
        "pais": "Noruega"
    },
    {
        "cidade": "Dammam",
        "sigla": "DMM",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Pequim, todos aeroportos",
        "sigla": "PEK",
        "pais": "PKX"
    },
    {
        "cidade": "Ahmedabad",
        "sigla": "AMD",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ajaccio - Napol\u00e9on Bonaparte",
        "sigla": "AJA",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Ilhas Faro\u00e9s - V\u00e1gar",
        "sigla": "FAE",
        "pais": "Ilhas Fero\u00e9"
    },
    {
        "cidade": "Kigali",
        "sigla": "KGL",
        "pais": "Ruanda"
    },
    {
        "cidade": "Luxor",
        "sigla": "LXR",
        "pais": "Egipto"
    },
    {
        "cidade": "Nis",
        "sigla": "INI",
        "pais": "S\u00e9rvia"
    },
    {
        "cidade": "Pescara",
        "sigla": "PSR",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Santander",
        "sigla": "SDR",
        "pais": "Espanha"
    },
    {
        "cidade": "Tampere - Pirkkala",
        "sigla": "TMP",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Varadero",
        "sigla": "VRA",
        "pais": "Cuba"
    },
    {
        "cidade": "Tagbilaran",
        "sigla": "TAG",
        "pais": "Filipinas"
    },
    {
        "cidade": "Ilha de Elba Marina de Campo",
        "sigla": "EBA",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Tomsk",
        "sigla": "TOF",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Trat",
        "sigla": "TDX",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Aarhus",
        "sigla": "AAR",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Altenrhein - St.Gallen",
        "sigla": "ACH",
        "pais": "Su\u00ed\u00e7a"
    },
    {
        "cidade": "Ancona",
        "sigla": "AOI",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Bermudas",
        "sigla": "BDA",
        "pais": "Bermudas"
    },
    {
        "cidade": "Calvi",
        "sigla": "CLY",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Cartagena",
        "sigla": "CTG",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Chongqing",
        "sigla": "CKG",
        "pais": "China"
    },
    {
        "cidade": "Coimbatore",
        "sigla": "CJB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Cotonou",
        "sigla": "COO",
        "pais": "Benim"
    },
    {
        "cidade": "Harare",
        "sigla": "HRE",
        "pais": "Zimbabwe"
    },
    {
        "cidade": "Kirkenes",
        "sigla": "KKN",
        "pais": "Noruega"
    },
    {
        "cidade": "Luanda - 4 de Fevereiro",
        "sigla": "LAD",
        "pais": "Angola"
    },
    {
        "cidade": "Ouagadougou",
        "sigla": "OUA",
        "pais": "Burkina Faso"
    },
    {
        "cidade": "Ilha de Rarotonga",
        "sigla": "RAR",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "St. Lucia Hewanorra",
        "sigla": "UVF",
        "pais": "Santa L\u00facia"
    },
    {
        "cidade": "Surgut",
        "sigla": "SGC",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Gaggal - Dharamsala",
        "sigla": "DHM",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Gal\u00e1pagos - Baltra - Seymour",
        "sigla": "GPS",
        "pais": "Equador"
    },
    {
        "cidade": "Pangkor",
        "sigla": "PKG",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Trelew",
        "sigla": "REL",
        "pais": "Argentina"
    },
    {
        "cidade": "Alice Springs",
        "sigla": "ASP",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bucaramanga",
        "sigla": "BGA",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Kahului",
        "sigla": "OGG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Manado",
        "sigla": "MDC",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Ottawa Macdonald-Cartier",
        "sigla": "YOW",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Quimper - Cornouaille",
        "sigla": "UIP",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "N\u00edjni Novgorod",
        "sigla": "GOJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Brno Turany",
        "sigla": "BRQ",
        "pais": "Rep\u00fablica Checa"
    },
    {
        "cidade": "Daxian",
        "sigla": "DAX",
        "pais": "China"
    },
    {
        "cidade": "Bras\u00edlia",
        "sigla": "BSB",
        "pais": "Brasil"
    },
    {
        "cidade": "Bulawayo",
        "sigla": "BUQ",
        "pais": "Zimbabwe"
    },
    {
        "cidade": "Calamata",
        "sigla": "KLX",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Kiruna",
        "sigla": "KRN",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Memphis",
        "sigla": "MEM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Oakland",
        "sigla": "OAK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Guadeloupe-Pointe-\u00e0-Pitre",
        "sigla": "PTP",
        "pais": "Guadalupe"
    },
    {
        "cidade": "S\u00e3o Sebasti\u00e3o",
        "sigla": "EAS",
        "pais": "Espanha"
    },
    {
        "cidade": "Sarasota - Bradenton",
        "sigla": "SRQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Savannah - Hilton Head",
        "sigla": "SAV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "St. Croix",
        "sigla": "STX",
        "pais": "Ilhas V\u00edrgens Americanas"
    },
    {
        "cidade": "Estocolmo - Bromma",
        "sigla": "BMA",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Stornoway",
        "sigla": "SYY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Tucson",
        "sigla": "TUS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Abakan",
        "sigla": "ABA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Perm",
        "sigla": "PEE",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Santiago de Cuba",
        "sigla": "SCU",
        "pais": "Cuba"
    },
    {
        "cidade": "Navegantes",
        "sigla": "NVT",
        "pais": "Brasil"
    },
    {
        "cidade": "Alta",
        "sigla": "ALF",
        "pais": "Noruega"
    },
    {
        "cidade": "Benghazi",
        "sigla": "BEN",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Changchun",
        "sigla": "CGQ",
        "pais": "China"
    },
    {
        "cidade": "Des Moines",
        "sigla": "DSM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Grenada - Point Salines",
        "sigla": "GND",
        "pais": "Granada"
    },
    {
        "cidade": "Houston - Aeroporto de Hobby, TX",
        "sigla": "HOU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kona",
        "sigla": "KOA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kuching",
        "sigla": "KCH",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Lugano - Agno",
        "sigla": "LUG",
        "pais": "Su\u00ed\u00e7a"
    },
    {
        "cidade": "Manaus",
        "sigla": "MAO",
        "pais": "Brasil"
    },
    {
        "cidade": "Ontario",
        "sigla": "ONT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Orlando Executive Airport - FL",
        "sigla": "ORL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Reggio di Calabria",
        "sigla": "REG",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Reiquiavique, todos aeroportos",
        "sigla": "KEF",
        "pais": "RVK"
    },
    {
        "cidade": "Vientiane - Wattay",
        "sigla": "VTE",
        "pais": "Laos"
    },
    {
        "cidade": "Wilmington",
        "sigla": "ILM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Arkhangelsk - Arcangel",
        "sigla": "ARH",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Foz do Igua\u00e7u",
        "sigla": "IGU",
        "pais": "Brasil"
    },
    {
        "cidade": "Syktyvkar",
        "sigla": "SCW",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Shiraz",
        "sigla": "SYZ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Bangor - Dow Air Force Base",
        "sigla": "BGR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hartford, CT - Springfield, MA",
        "sigla": "BDL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lihue, HI",
        "sigla": "LIH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Longyearbyen - Svalbard",
        "sigla": "LYR",
        "pais": "Noruega"
    },
    {
        "cidade": "Lulea",
        "sigla": "LLA",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Reus",
        "sigla": "REU",
        "pais": "Espanha"
    },
    {
        "cidade": "Rochester, MN",
        "sigla": "RST",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Jose",
        "sigla": "SJC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Suva - Nausori",
        "sigla": "SUV",
        "pais": "Fiji"
    },
    {
        "cidade": "Victoria",
        "sigla": "YYJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Lhasa Gonggar",
        "sigla": "LXA",
        "pais": "China"
    },
    {
        "cidade": "Puerto Montt - El Tepual",
        "sigla": "PMC",
        "pais": "Chile"
    },
    {
        "cidade": "Sandakan",
        "sigla": "SDK",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Cheboksary",
        "sigla": "CSY",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Bagdogra, Siliguri",
        "sigla": "IXB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Tortola, todos aeroportos",
        "sigla": "EIS",
        "pais": "VIJ"
    },
    {
        "cidade": "Antu\u00e9rpia",
        "sigla": "ANR",
        "pais": "B\u00e9lgica"
    },
    {
        "cidade": "Bamako",
        "sigla": "BKO",
        "pais": "Mali"
    },
    {
        "cidade": "Burlington, VT",
        "sigla": "BTV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chandigarh",
        "sigla": "IXC",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Port Columbus",
        "sigla": "CMH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Huatulco",
        "sigla": "HUX",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Karlstad",
        "sigla": "KSD",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "C\u00e1rpatos",
        "sigla": "AOK",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Corunha",
        "sigla": "LCG",
        "pais": "Espanha"
    },
    {
        "cidade": "Maputo",
        "sigla": "MPM",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Monrovia - Roberts Field",
        "sigla": "ROB",
        "pais": "Lib\u00e9ria"
    },
    {
        "cidade": "Nanning",
        "sigla": "NNG",
        "pais": "China"
    },
    {
        "cidade": "Nelspruit-Kruger Mpumalanga",
        "sigla": "MQP",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Niamey",
        "sigla": "NIM",
        "pais": "N\u00edger"
    },
    {
        "cidade": "Oklahoma City - Will Rogers World",
        "sigla": "OKC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pori",
        "sigla": "POR",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "St. Louis - Lambert",
        "sigla": "STL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Zaquintos",
        "sigla": "ZTH",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Anapa",
        "sigla": "AAQ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Porto Seguro",
        "sigla": "BPS",
        "pais": "Brasil"
    },
    {
        "cidade": "Batumi",
        "sigla": "BUS",
        "pais": "Ge\u00f3rgia"
    },
    {
        "cidade": "Cefal\u00f3nia",
        "sigla": "EFL",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Iquique",
        "sigla": "IQQ",
        "pais": "Chile"
    },
    {
        "cidade": "Semarang Yani",
        "sigla": "SRG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Erzincan",
        "sigla": "ERC",
        "pais": "Turquia"
    },
    {
        "cidade": "Khajuraho",
        "sigla": "HJR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Nosy Be - Fascene",
        "sigla": "NOS",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "North Las Vegas",
        "sigla": "VGT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "La Gomera",
        "sigla": "GMZ",
        "pais": "Espanha"
    },
    {
        "cidade": "Aden",
        "sigla": "ADE",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Aqaba",
        "sigla": "AQJ",
        "pais": "Jord\u00e2nia"
    },
    {
        "cidade": "Bonaire",
        "sigla": "BON",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Fairbanks",
        "sigla": "FAI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fayetteville - Ft. Bragg, NC",
        "sigla": "FAY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Irkutsk",
        "sigla": "IKT",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Jo\u00e3o Pessoa - Castro Pinto",
        "sigla": "JPA",
        "pais": "Brasil"
    },
    {
        "cidade": "Kristiansund - Kvenberget",
        "sigla": "KSU",
        "pais": "Noruega"
    },
    {
        "cidade": "Lae",
        "sigla": "LAE",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Medford",
        "sigla": "MFR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pensacola",
        "sigla": "PNS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Perpignan - Rivesaltes",
        "sigla": "PGF",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Pietermaritzburg",
        "sigla": "PZB",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Santa B\u00e1rbara",
        "sigla": "SBA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Shenyang",
        "sigla": "SHE",
        "pais": "China"
    },
    {
        "cidade": "Tegucigalpa",
        "sigla": "TGU",
        "pais": "Honduras"
    },
    {
        "cidade": "V\u00e4xj\u00f6",
        "sigla": "VXO",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Calama El Loa",
        "sigla": "CJC",
        "pais": "Chile"
    },
    {
        "cidade": "Changsha",
        "sigla": "CSX",
        "pais": "China"
    },
    {
        "cidade": "Pamplona",
        "sigla": "PNA",
        "pais": "Espanha"
    },
    {
        "cidade": "Sivas",
        "sigla": "VAS",
        "pais": "Turquia"
    },
    {
        "cidade": "Mangalore",
        "sigla": "IXE",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Novokuznetsk",
        "sigla": "NOZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Setif",
        "sigla": "QSF",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Acapulco",
        "sigla": "ACA",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Albany - NY",
        "sigla": "ALB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ayers Rock",
        "sigla": "AYQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bel\u00e9m",
        "sigla": "BEL",
        "pais": "Brasil"
    },
    {
        "cidade": "Chicago Midway",
        "sigla": "MDW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mataveri - Ilha de P\u00e1scoa",
        "sigla": "IPC",
        "pais": "Chile"
    },
    {
        "cidade": "Eindhoven",
        "sigla": "EIN",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Florian\u00f3polis",
        "sigla": "FLN",
        "pais": "Brasil"
    },
    {
        "cidade": "Grand Forks",
        "sigla": "GFK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Greenville - Spartanburg",
        "sigla": "GSP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hobart",
        "sigla": "HBA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Jackson Hole",
        "sigla": "JAC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Key West",
        "sigla": "EYW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kuopio",
        "sigla": "KUO",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "La Rochelle - Ilha de R\u00e9",
        "sigla": "LRH",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Little Rock",
        "sigla": "LIT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Okinawa-Ryukyo Island-Naha",
        "sigla": "OKA",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kirkwall",
        "sigla": "KOI",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Roterd\u00e3o",
        "sigla": "RTM",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "S\u00e3o Lu\u00eds",
        "sigla": "SLZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Tianjin",
        "sigla": "TSN",
        "pais": "China"
    },
    {
        "cidade": "Urumqi",
        "sigla": "URC",
        "pais": "China"
    },
    {
        "cidade": "Vaasa",
        "sigla": "VAA",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Valdosta, GA",
        "sigla": "VLD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vit\u00f3ria",
        "sigla": "VIX",
        "pais": "Brasil"
    },
    {
        "cidade": "Concepcion",
        "sigla": "CCP",
        "pais": "Chile"
    },
    {
        "cidade": "Denizli Cardak",
        "sigla": "DNZ",
        "pais": "Turquia"
    },
    {
        "cidade": "Hoedspruit - Eastgate",
        "sigla": "HDS",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Kota Bharu",
        "sigla": "KBR",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Linkoping Saab",
        "sigla": "LPI",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Lemnos",
        "sigla": "LXS",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Paros",
        "sigla": "PAS",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Phu Quoc Duong - Dong",
        "sigla": "PQC",
        "pais": "Vietname"
    },
    {
        "cidade": "Orlando Sanford",
        "sigla": "SFB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Surat Thani",
        "sigla": "URT",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Williams Lake",
        "sigla": "YWL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Aktobe",
        "sigla": "AKX",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Namsos",
        "sigla": "OSY",
        "pais": "Noruega"
    },
    {
        "cidade": "Heviz - Balaton",
        "sigla": "SOB",
        "pais": "Hungria"
    },
    {
        "cidade": "Poprad - Tatry",
        "sigla": "TAT",
        "pais": "Eslov\u00e1quia"
    },
    {
        "cidade": "Targu Mures",
        "sigla": "TGM",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Pulau Redang",
        "sigla": "RDN",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Beef Island",
        "sigla": "EIS",
        "pais": "Ilhas V\u00edrgens Brit\u00e2nicas"
    },
    {
        "cidade": "Brazzaville",
        "sigla": "BZV",
        "pais": "Rep\u00fablica do Congo"
    },
    {
        "cidade": "Charleston",
        "sigla": "CHS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Coffs Harbour",
        "sigla": "CFS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Dalian",
        "sigla": "DLC",
        "pais": "China"
    },
    {
        "cidade": "Daytona Beach",
        "sigla": "DAB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dinard - S\u00e3o Malo",
        "sigla": "DNR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Guam",
        "sigla": "GUM",
        "pais": "Guam"
    },
    {
        "cidade": "Guwahati",
        "sigla": "GAU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Hamilton",
        "sigla": "HTI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Iquitos",
        "sigla": "IQT",
        "pais": "Peru"
    },
    {
        "cidade": "Jackson, MS",
        "sigla": "JAN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Jyvaeskylae",
        "sigla": "JYV",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Kota Kinabalu",
        "sigla": "BKI",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Lorient - Bretanha do Sul",
        "sigla": "LRT",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Macei\u00f3",
        "sigla": "MCZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Melbourne",
        "sigla": "MLB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Monrovia",
        "sigla": "MLW",
        "pais": "Lib\u00e9ria"
    },
    {
        "cidade": "Myrtle Beach",
        "sigla": "MYR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Norrkoping",
        "sigla": "NRK",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Port Hedland",
        "sigla": "PHE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Praia, Ilha de Santiago",
        "sigla": "RAI",
        "pais": "Cabo Verde"
    },
    {
        "cidade": "Quebec-Jean Lesage International",
        "sigla": "YQB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Rennes",
        "sigla": "RNS",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Roatan",
        "sigla": "RTB",
        "pais": "Honduras"
    },
    {
        "cidade": "Sacramento",
        "sigla": "SMF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bariloche",
        "sigla": "BRC",
        "pais": "Argentina"
    },
    {
        "cidade": "Sidney Richland, MT",
        "sigla": "SDY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sylhet",
        "sigla": "ZYL",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Durham Tees Valley",
        "sigla": "MME",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Visby",
        "sigla": "VBY",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Walvis Bay",
        "sigla": "WVB",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Astrakhan",
        "sigla": "ASF",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Avignon Caumont",
        "sigla": "AVN",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Caen Carpiquet",
        "sigla": "CFR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Chernivtsi",
        "sigla": "CWC",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Guilin",
        "sigla": "KWL",
        "pais": "China"
    },
    {
        "cidade": "Legazpi",
        "sigla": "LGP",
        "pais": "Filipinas"
    },
    {
        "cidade": "Liberia, Costa Rica",
        "sigla": "LIR",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Nanjing",
        "sigla": "NKG",
        "pais": "China"
    },
    {
        "cidade": "Praslin Island",
        "sigla": "PRI",
        "pais": "Seicheles"
    },
    {
        "cidade": "Tabriz",
        "sigla": "TBZ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Huangshan Tunxi",
        "sigla": "TXN",
        "pais": "China"
    },
    {
        "cidade": "Sao Vicente San Pedro",
        "sigla": "VXE",
        "pais": "Cabo Verde"
    },
    {
        "cidade": "Arequipa",
        "sigla": "AQP",
        "pais": "Peru"
    },
    {
        "cidade": "Bacau",
        "sigla": "BCM",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Madurai",
        "sigla": "IXM",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Suceava - Salcea",
        "sigla": "SCV",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Sanliurfa",
        "sigla": "GNY",
        "pais": "Turquia"
    },
    {
        "cidade": "San Juan - Isla Grand - Fernando Luis Ribas Dominicci",
        "sigla": "SIG",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Volos - Nea Aghialos",
        "sigla": "VOL",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Yap",
        "sigla": "YAP",
        "pais": "Estados Federados da Micron\u00e9sia"
    },
    {
        "cidade": "San Jose - Pavas",
        "sigla": "SYQ",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Fayetteville - Northwest Arkansas Regional Airport",
        "sigla": "XNA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Belo Horizonte, todos aeroportos",
        "sigla": "CNF",
        "pais": "PLU"
    },
    {
        "cidade": "Akron - Canton",
        "sigla": "CAK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Asheville",
        "sigla": "AVL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vadodara",
        "sigla": "BDQ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Baton Rouge, LA",
        "sigla": "BTR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bloemfontein",
        "sigla": "BFN",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Cedar Rapids",
        "sigla": "CID",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chattanooga",
        "sigla": "CHA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chihuahua - General Fierro Villalobos",
        "sigla": "CUU",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Chios - Omiros",
        "sigla": "JKH",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Colorado Springs",
        "sigla": "COS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Valparaiso",
        "sigla": "VPS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fredericton",
        "sigla": "YFC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Grenoble",
        "sigla": "GNB",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Ivalo",
        "sigla": "IVL",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Jonkoping",
        "sigla": "JKG",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Libreville",
        "sigla": "LBV",
        "pais": "Gab\u00e3o"
    },
    {
        "cidade": "Tarbes - Lourdes - Pirin\u00e9us",
        "sigla": "LDE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Lusaka",
        "sigla": "LUN",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "Maastricht - Aachen",
        "sigla": "MST",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Maun",
        "sigla": "MUB",
        "pais": "Botsuana"
    },
    {
        "cidade": "Montreal - Mirabel International",
        "sigla": "YMX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Moron i- Prince Said Ibrahim",
        "sigla": "HAH",
        "pais": "Comores"
    },
    {
        "cidade": "Newcastle - Williamtown",
        "sigla": "NTL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Oaxaca",
        "sigla": "OAX",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Paramaribo - Zanderij",
        "sigla": "PBM",
        "pais": "Suriname"
    },
    {
        "cidade": "Porto Pr\u00edncipe",
        "sigla": "PAP",
        "pais": "Haiti"
    },
    {
        "cidade": "Ronneby",
        "sigla": "RNB",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Saint John",
        "sigla": "YSJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "S\u00e3o Tom\u00e9",
        "sigla": "TMS",
        "pais": "S\u00e3o Tom\u00e9 e Pr\u00edncipe"
    },
    {
        "cidade": "State College - Belefonte",
        "sigla": "SCE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tampico",
        "sigla": "TAM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Tulsa",
        "sigla": "TUL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mac\u00e1\u00e7ar - Sult\u00e3o Hasanuddin",
        "sigla": "UPG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Xiamen",
        "sigla": "XMN",
        "pais": "China"
    },
    {
        "cidade": "Luzon - Clark",
        "sigla": "CRK",
        "pais": "Filipinas"
    },
    {
        "cidade": "Hefei",
        "sigla": "HFE",
        "pais": "China"
    },
    {
        "cidade": "Ioannina",
        "sigla": "IOA",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Kemerovo",
        "sigla": "KEJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Norwich",
        "sigla": "NWI",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Salta",
        "sigla": "SLA",
        "pais": "Argentina"
    },
    {
        "cidade": "Solo City",
        "sigla": "SOC",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Umea",
        "sigla": "UME",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Valdivia - Pichoy",
        "sigla": "ZAL",
        "pais": "Chile"
    },
    {
        "cidade": "Orsta - Volda",
        "sigla": "HOV",
        "pais": "Noruega"
    },
    {
        "cidade": "Port Blair",
        "sigla": "IXZ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Kullu Bhuntar",
        "sigla": "KUU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Nizhnekamsk",
        "sigla": "NBC",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "St. Barthelemy",
        "sigla": "SBH",
        "pais": "Guadalupe"
    },
    {
        "cidade": "Aktau",
        "sigla": "SCO",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Tarawa Bonriki",
        "sigla": "TRW",
        "pais": "Kiribati"
    },
    {
        "cidade": "Singapore Seletar",
        "sigla": "XSP",
        "pais": "Singapura"
    },
    {
        "cidade": "Yiwu",
        "sigla": "YIW",
        "pais": "China"
    },
    {
        "cidade": "Kahramanmaras",
        "sigla": "KCM",
        "pais": "Turquia"
    },
    {
        "cidade": "Suleimania",
        "sigla": "ISU",
        "pais": "Iraque"
    },
    {
        "cidade": "Badajoz",
        "sigla": "BJZ",
        "pais": "Espanha"
    },
    {
        "cidade": "Bandar Seri Begawan",
        "sigla": "BWN",
        "pais": "Brunei"
    },
    {
        "cidade": "Bhubaneswar",
        "sigla": "BBI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Bujumbura",
        "sigla": "BJM",
        "pais": "Burundi"
    },
    {
        "cidade": "Casper, WY",
        "sigla": "CPR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cody - Powell - Yellowstone",
        "sigla": "COD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Constantina",
        "sigla": "CZL",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "East London",
        "sigla": "ELS",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Eugene",
        "sigla": "EUG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Harstad - Narvik",
        "sigla": "EVE",
        "pais": "Noruega"
    },
    {
        "cidade": "Fort Wayne",
        "sigla": "FWA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gainesville",
        "sigla": "GNV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gulfport - Biloxi",
        "sigla": "GPT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Humberside",
        "sigla": "HUY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Jinan",
        "sigla": "TNA",
        "pais": "China"
    },
    {
        "cidade": "Kajaani",
        "sigla": "KAJ",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Kelowna-BC",
        "sigla": "YLW",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Knoxville",
        "sigla": "TYS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lakselv",
        "sigla": "LKL",
        "pais": "Noruega"
    },
    {
        "cidade": "Lille - Lesquin",
        "sigla": "LIL",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Merida",
        "sigla": "MID",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Missoula - MT",
        "sigla": "MSO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "North Eleuthera",
        "sigla": "ELH",
        "pais": "Bahamas"
    },
    {
        "cidade": "Pago Pago",
        "sigla": "PPG",
        "pais": "Samoa Americana"
    },
    {
        "cidade": "Peshawar",
        "sigla": "PEW",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Phalaborwa",
        "sigla": "PHW",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Port Vila",
        "sigla": "VLI",
        "pais": "Vanuatu"
    },
    {
        "cidade": "San Andres",
        "sigla": "ADZ",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "S\u00e3o Paulo - Congonhas",
        "sigla": "CGH",
        "pais": "Brasil"
    },
    {
        "cidade": "Saint Martin - Princesa Juliana",
        "sigla": "SXM",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Syracuse Hancock",
        "sigla": "SYR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tallahassee",
        "sigla": "TLH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "T\u00f3quio - Haneda",
        "sigla": "HND",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Ulan-Ude",
        "sigla": "UUD",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Vasteras",
        "sigla": "VST",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Bydgoszcz",
        "sigla": "BZG",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Chiang Rai",
        "sigla": "CEI",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Erzurum",
        "sigla": "ERZ",
        "pais": "Turquia"
    },
    {
        "cidade": "Nanchang",
        "sigla": "KHN",
        "pais": "China"
    },
    {
        "cidade": "Milos",
        "sigla": "MLO",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Yaounde Nsimalen",
        "sigla": "NSI",
        "pais": "Camar\u00f5es"
    },
    {
        "cidade": "Zaporozhye",
        "sigla": "OZH",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Pemba",
        "sigla": "POL",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Puerto Princesa",
        "sigla": "PPS",
        "pais": "Filipinas"
    },
    {
        "cidade": "Udon Thani Udorn",
        "sigla": "UTH",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Vilanculos",
        "sigla": "VNX",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Doncaster - Sheffield",
        "sigla": "DSA",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Ciudad del Este",
        "sigla": "AGT",
        "pais": "Paraguai"
    },
    {
        "cidade": "Bahar Dar",
        "sigla": "BJR",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Benin City Benin",
        "sigla": "BNI",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Eskisehir Anadolu",
        "sigla": "AOE",
        "pais": "Turquia"
    },
    {
        "cidade": "Cast\u00f3ria",
        "sigla": "KSO",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Manta",
        "sigla": "MEC",
        "pais": "Equador"
    },
    {
        "cidade": "Rio Grande",
        "sigla": "RGA",
        "pais": "Argentina"
    },
    {
        "cidade": "Colombo Ratmalana",
        "sigla": "RML",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Saba Yrausquin",
        "sigla": "SAB",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Toluca",
        "sigla": "TLC",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Trujillo",
        "sigla": "TRU",
        "pais": "Peru"
    },
    {
        "cidade": "Cheongju",
        "sigla": "CJJ",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Kzyl-Orda",
        "sigla": "KZO",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Calimnos",
        "sigla": "JKL",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Aguadilla - Rafael Hernandez",
        "sigla": "BQN",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Ant\u00edgua",
        "sigla": "ANU",
        "pais": "Ant\u00edgua e Barbuda"
    },
    {
        "cidade": "Aspen - Pitkin County",
        "sigla": "ASE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Barcelona, Venezuela",
        "sigla": "BLA",
        "pais": "Venezuela"
    },
    {
        "cidade": "Beira",
        "sigla": "BEW",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Bloomington - Normal - Central Illinois",
        "sigla": "BMI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Boise - ID",
        "sigla": "BOI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cochabamba",
        "sigla": "CBB",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Detroit, todos aeroportos",
        "sigla": "DTW",
        "pais": "YIP"
    },
    {
        "cidade": "Devonport",
        "sigla": "DPO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Goi\u00e2nia",
        "sigla": "GYN",
        "pais": "Brasil"
    },
    {
        "cidade": "Gold Coast",
        "sigla": "OOL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Great Falls, MT",
        "sigla": "GTF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Green Bay, WI",
        "sigla": "GRB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Helena",
        "sigla": "HLN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hue - Phu Bai",
        "sigla": "HUI",
        "pais": "Vietname"
    },
    {
        "cidade": "Jaipur - Sanganer",
        "sigla": "JAI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Joensuu",
        "sigla": "JOE",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Johor Bahru",
        "sigla": "JHB",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Knock",
        "sigla": "NOC",
        "pais": "Irlanda"
    },
    {
        "cidade": "Kokkola - Pietarsaari",
        "sigla": "KOK",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Lampedusa",
        "sigla": "LMP",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Lansing, MI",
        "sigla": "LAN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Leon-Bajio",
        "sigla": "BJX",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Lucknow",
        "sigla": "LKO",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Manchester - Boston",
        "sigla": "MHT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mfuwe",
        "sigla": "MFU",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "Mogad\u00edscio",
        "sigla": "MGQ",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Mount Isa",
        "sigla": "ISA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Mus",
        "sigla": "MSR",
        "pais": "Turquia"
    },
    {
        "cidade": "Murmansk",
        "sigla": "MMK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "N'Djamena",
        "sigla": "NDJ",
        "pais": "Chade"
    },
    {
        "cidade": "Nagpur",
        "sigla": "NAG",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Nelson",
        "sigla": "NSN",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "New Haven - CT",
        "sigla": "HVN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Port Harcourt",
        "sigla": "PHC",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Regina",
        "sigla": "YQR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Reno - Tahoe",
        "sigla": "RNO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rochester - NY",
        "sigla": "ROC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rodez",
        "sigla": "RDZ",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Salalah",
        "sigla": "SLL",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "San Luis Potos\u00ed",
        "sigla": "SLP",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Campinas - Viracopos",
        "sigla": "VCP",
        "pais": "Brasil"
    },
    {
        "cidade": "Sfax - Thyna",
        "sigla": "SFA",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Sogndal",
        "sigla": "SOG",
        "pais": "Noruega"
    },
    {
        "cidade": "South Bend, IN",
        "sigla": "SBN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "St. Lucia Castries",
        "sigla": "SLU",
        "pais": "Santa L\u00facia"
    },
    {
        "cidade": "Sunshine Coast",
        "sigla": "MCY",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Surabaia - Juanda",
        "sigla": "SUB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Thunder Bay",
        "sigla": "YQT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Townsville",
        "sigla": "TSV",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Trapani - Birgi",
        "sigla": "TPS",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Sarago\u00e7a",
        "sigla": "ZAZ",
        "pais": "Espanha"
    },
    {
        "cidade": "Ashgabat - Ashkhabad",
        "sigla": "ASB",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Brownsville,TX",
        "sigla": "BRO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Donegal",
        "sigla": "CFN",
        "pais": "Irlanda"
    },
    {
        "cidade": "Zhengzhou",
        "sigla": "CGO",
        "pais": "China"
    },
    {
        "cidade": "Crotone - Sant'Anna",
        "sigla": "CRV",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Dumaguete",
        "sigla": "DGT",
        "pais": "Filipinas"
    },
    {
        "cidade": "Davao City",
        "sigla": "DVO",
        "pais": "Filipinas"
    },
    {
        "cidade": "General Santos Buayan",
        "sigla": "GES",
        "pais": "Filipinas"
    },
    {
        "cidade": "Ivano-Frankivsk",
        "sigla": "IFO",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Aurangabad",
        "sigla": "IXU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Kisumu",
        "sigla": "KIS",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Mwanza",
        "sigla": "MWZ",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Napier Hawkes Bay",
        "sigla": "NPE",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Plymouth",
        "sigla": "PLH",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Riyan-Mukalla",
        "sigla": "RIY",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Rzeszow",
        "sigla": "RZE",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Santiago de los Caballeros",
        "sigla": "STI",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Torreon",
        "sigla": "TRC",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Ubon Ratchathani",
        "sigla": "UBP",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Zhuhai",
        "sigla": "ZUH",
        "pais": "China"
    },
    {
        "cidade": "Akureyri",
        "sigla": "AEY",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Ahwaz",
        "sigla": "AWZ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Bhuj",
        "sigla": "BHJ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Fernando de Noronha",
        "sigla": "FEN",
        "pais": "Brasil"
    },
    {
        "cidade": "Gafsa - Ksar",
        "sigla": "GAF",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Herat",
        "sigla": "HEA",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Honningsvag Valan",
        "sigla": "HVG",
        "pais": "Noruega"
    },
    {
        "cidade": "Isfahan",
        "sigla": "IFN",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Jodhpur",
        "sigla": "JDH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Sihanoukville",
        "sigla": "KOS",
        "pais": "Camboja"
    },
    {
        "cidade": "Kars",
        "sigla": "KSY",
        "pais": "Turquia"
    },
    {
        "cidade": "Osh",
        "sigla": "OSS",
        "pais": "Quirguist\u00e3o"
    },
    {
        "cidade": "Puerto Maldonado",
        "sigla": "PEM",
        "pais": "Peru"
    },
    {
        "cidade": "Piura",
        "sigla": "PIU",
        "pais": "Peru"
    },
    {
        "cidade": "Petropavlovsk",
        "sigla": "PPK",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Riohacha",
        "sigla": "RCH",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Copenhaga - Roskilde",
        "sigla": "RKE",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Sinop",
        "sigla": "NOP",
        "pais": "Turquia"
    },
    {
        "cidade": "Kigoma",
        "sigla": "TKQ",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "El Vigia International",
        "sigla": "VIG",
        "pais": "Venezuela"
    },
    {
        "cidade": "Bursa - Yenisehir",
        "sigla": "YEI",
        "pais": "Turquia"
    },
    {
        "cidade": "Lethbridge",
        "sigla": "YQL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Adiyaman",
        "sigla": "ADF",
        "pais": "Turquia"
    },
    {
        "cidade": "Lodz",
        "sigla": "LCJ",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Taichung",
        "sigla": "RMQ",
        "pais": "Taiwan"
    },
    {
        "cidade": "Nevsehir",
        "sigla": "NAV",
        "pais": "Turquia"
    },
    {
        "cidade": "Samana - El Catey",
        "sigla": "AZS",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Amarillo - Rick Husband",
        "sigla": "AMA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Annaba",
        "sigla": "AAE",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Athens - Ben Epps",
        "sigla": "AHN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Augusta State",
        "sigla": "AUG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Blantyre",
        "sigla": "BLZ",
        "pais": "Malawi"
    },
    {
        "cidade": "Bodo",
        "sigla": "BOO",
        "pais": "Noruega"
    },
    {
        "cidade": "Bozeman - Gallatin",
        "sigla": "BZN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Canberra",
        "sigla": "CBR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "La Romana",
        "sigla": "LRM",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Caiena",
        "sigla": "CAY",
        "pais": "Guiana Francesa"
    },
    {
        "cidade": "Charleston - Yeager",
        "sigla": "CRW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Charlottesville, VA",
        "sigla": "CHO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "College Station-Bryan, TX",
        "sigla": "CLL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cuiab\u00e1",
        "sigla": "CGB",
        "pais": "Brasil"
    },
    {
        "cidade": "Dallas - Love Field, TX",
        "sigla": "DAL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Devils Lake, ND",
        "sigla": "DVL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Djibuti",
        "sigla": "JIB",
        "pais": "Djibuti"
    },
    {
        "cidade": "Dunedin",
        "sigla": "DUD",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Durango - La Plata County, CO",
        "sigla": "DRO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Egilsstadir",
        "sigla": "EGS",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Erie",
        "sigla": "ERI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fort St. John",
        "sigla": "YXJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gaborone",
        "sigla": "GBE",
        "pais": "Botsuana"
    },
    {
        "cidade": "George",
        "sigla": "GRJ",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Gladstone",
        "sigla": "GLT",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Grand Rapids",
        "sigla": "GRR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hamilton",
        "sigla": "YHM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Harrisburg",
        "sigla": "MDT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Haugesund",
        "sigla": "HAU",
        "pais": "Noruega"
    },
    {
        "cidade": "Hermosillo",
        "sigla": "HMO",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Hilo, HI",
        "sigla": "ITO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Idaho Falls",
        "sigla": "IDA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Invercargill",
        "sigla": "IVC",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Ithaca - Tompkins - Cortland",
        "sigla": "ITH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Juneau International, AK",
        "sigla": "JNU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Abha",
        "sigla": "AHB",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Kittila",
        "sigla": "KTT",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Kuantan",
        "sigla": "KUA",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Lilongwe",
        "sigla": "LLW",
        "pais": "Malawi"
    },
    {
        "cidade": "Mackay",
        "sigla": "MKY",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Macon, GA",
        "sigla": "MCN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Madison",
        "sigla": "MSN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Marquette",
        "sigla": "MQT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mazatlan",
        "sigla": "MZT",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "McAllen",
        "sigla": "MFE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Medina",
        "sigla": "MED",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Minot - ND",
        "sigla": "MOT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Miri",
        "sigla": "MYY",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Mobile - AL",
        "sigla": "MOB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Moline - Quad Cities, IL",
        "sigla": "MLI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Moorea Temae",
        "sigla": "MOZ",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "New Bern - Coastal Carolina - NC",
        "sigla": "EWN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nouadhibou",
        "sigla": "NDB",
        "pais": "Maurit\u00e2nia"
    },
    {
        "cidade": "Nouakchott",
        "sigla": "NKC",
        "pais": "Maurit\u00e2nia"
    },
    {
        "cidade": "Orebro",
        "sigla": "ORB",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Oita",
        "sigla": "OIT",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Santa Ana - Orange, CA",
        "sigla": "SNA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pakersburg, WV",
        "sigla": "PKB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pantelleria",
        "sigla": "PNL",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Pellston - MI",
        "sigla": "PLN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Perugia",
        "sigla": "PEG",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Pointe Noire",
        "sigla": "PNR",
        "pais": "Rep\u00fablica do Congo"
    },
    {
        "cidade": "Portland",
        "sigla": "PWM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Port Moresby - Jackson Field",
        "sigla": "POM",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Prince Rupert",
        "sigla": "YPR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Providence, RI",
        "sigla": "PVD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Puerto Escondido",
        "sigla": "PXM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Richards Bay",
        "sigla": "RCB",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Rodrigues Island",
        "sigla": "RRG",
        "pais": "Maur\u00edcia"
    },
    {
        "cidade": "Rovaniemi",
        "sigla": "RVN",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Saipan",
        "sigla": "SPN",
        "pais": "Ilhas Marianas do Norte"
    },
    {
        "cidade": "Samarcanda",
        "sigla": "SKD",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Santa Maria, CA",
        "sigla": "SMX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Saskatoon",
        "sigla": "YXE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sendai",
        "sigla": "SDJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Sioux City",
        "sigla": "SUX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sitka, AK",
        "sigla": "SIT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sonderborg",
        "sigla": "SGD",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Springfield, IL",
        "sigla": "SPI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "St. John's",
        "sigla": "YYT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "St. Vincent",
        "sigla": "SVD",
        "pais": "S\u00e3o Vicente e Granadinas"
    },
    {
        "cidade": "Estetino",
        "sigla": "SZZ",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Sundsvall",
        "sigla": "SDL",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Tijuana-Rodriguez",
        "sigla": "TIJ",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Toledo",
        "sigla": "TOL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Traverse City - Cherry Capital City",
        "sigla": "TVC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Uberl\u00e2ndia",
        "sigla": "UDI",
        "pais": "Brasil"
    },
    {
        "cidade": "Valencia, Venezuela",
        "sigla": "VLN",
        "pais": "Venezuela"
    },
    {
        "cidade": "Veracruz",
        "sigla": "VER",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Villahermosa",
        "sigla": "VSA",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Wagga Wagga",
        "sigla": "WGA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wichita Falls, TX",
        "sigla": "SPS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wichita",
        "sigla": "ICT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wick",
        "sigla": "WIC",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Windhoek-Eros",
        "sigla": "ERS",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Yellowknife",
        "sigla": "YZF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Antofagasta",
        "sigla": "ANF",
        "pais": "Chile"
    },
    {
        "cidade": "Alor Setar",
        "sigla": "AOR",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Avalon",
        "sigla": "AVV",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bar Harbor",
        "sigla": "BHB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Beihai",
        "sigla": "BHY",
        "pais": "China"
    },
    {
        "cidade": "Balikpapan Sepinggan",
        "sigla": "BPN",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Paris Beauvais - Till\u00e9",
        "sigla": "BVA",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Campina Grande",
        "sigla": "CPV",
        "pais": "Brasil"
    },
    {
        "cidade": "Chetumal",
        "sigla": "CTM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Jayapura - Sentani",
        "sigla": "DJJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Dunhuang",
        "sigla": "DNH",
        "pais": "China"
    },
    {
        "cidade": "Metz - Nancy Lorraine",
        "sigla": "ETZ",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Guantanamo",
        "sigla": "GAO",
        "pais": "Cuba"
    },
    {
        "cidade": "Halmstad",
        "sigla": "HAD",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Oued Irara-Krim Belkacem",
        "sigla": "HME",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Sitia",
        "sigla": "JSH",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Kalibo",
        "sigla": "KLO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Nakhon Phanom",
        "sigla": "KOP",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Lampang",
        "sigla": "LPT",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Nizhnevartovsk",
        "sigla": "NJC",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ornskoldsvik",
        "sigla": "OER",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "St.Petersburg - Clearwater",
        "sigla": "PIE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pekanbaru Simpang Tiga",
        "sigla": "PKU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Providenciales International",
        "sigla": "PLS",
        "pais": "Ilhas Turks e Caicos"
    },
    {
        "cidade": "Parma",
        "sigla": "PMF",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Queretaro",
        "sigla": "QRO",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Skelleftea",
        "sigla": "SFT",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Tapachula",
        "sigla": "TAP",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Trollhattan",
        "sigla": "THN",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Bandar Lampung Branti - Radin Inten II",
        "sigla": "TKG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Udaipur",
        "sigla": "UDR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Wanganui",
        "sigla": "WAG",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Wanxian",
        "sigla": "WXN",
        "pais": "China"
    },
    {
        "cidade": "Kamloops",
        "sigla": "YKA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kitchener / Waterloo",
        "sigla": "YKF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yantai Laishan",
        "sigla": "YNT",
        "pais": "China"
    },
    {
        "cidade": "Quesnel",
        "sigla": "YQZ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Ilha de Agatti",
        "sigla": "AGX",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Benbecula",
        "sigla": "BEB",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Bimini International",
        "sigla": "BIM",
        "pais": "Bahamas"
    },
    {
        "cidade": "Bocas Del Toro",
        "sigla": "BOC",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Sucre",
        "sigla": "SRE",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Ca Mau",
        "sigla": "CAH",
        "pais": "Vietname"
    },
    {
        "cidade": "Calabar",
        "sigla": "CBQ",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Dehradun",
        "sigla": "DED",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Belgorod",
        "sigla": "EGO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Enugu Emene",
        "sigla": "ENU",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Medellin Herrera",
        "sigla": "EOH",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Errachidia",
        "sigla": "ERH",
        "pais": "Morrocos"
    },
    {
        "cidade": "Fergana",
        "sigla": "FEG",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Gondar",
        "sigla": "GDQ",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Nuuk",
        "sigla": "GOH",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Golmud",
        "sigla": "GOQ",
        "pais": "China"
    },
    {
        "cidade": "Killeen - Fort Hood",
        "sigla": "GRK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Governador Valadares",
        "sigla": "GVR",
        "pais": "Brasil"
    },
    {
        "cidade": "Ilh\u00e9us - Jorge Amado",
        "sigla": "IOS",
        "pais": "Brasil"
    },
    {
        "cidade": "Ipatinga - Usiminas",
        "sigla": "IPN",
        "pais": "Brasil"
    },
    {
        "cidade": "Nasik",
        "sigla": "ISK",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Juliaca",
        "sigla": "JUL",
        "pais": "Peru"
    },
    {
        "cidade": "Kameshli",
        "sigla": "KAC",
        "pais": "S\u00edria"
    },
    {
        "cidade": "Kupang Eltari",
        "sigla": "KOE",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Kassel",
        "sigla": "KSF",
        "pais": "Alemanha"
    },
    {
        "cidade": "Ganja",
        "sigla": "GNJ",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "La Ceiba - Golos\u00f3n",
        "sigla": "LCE",
        "pais": "Honduras"
    },
    {
        "cidade": "Lycksele - Hedlunda",
        "sigla": "LYC",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Liuzhou Bailian",
        "sigla": "LZH",
        "pais": "China"
    },
    {
        "cidade": "Makhachkala",
        "sigla": "MCX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Maring\u00e1",
        "sigla": "MGF",
        "pais": "Brasil"
    },
    {
        "cidade": "Manhattan Regional Airport, KS",
        "sigla": "MHK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Malang",
        "sigla": "MLG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Mulu",
        "sigla": "MZV",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Narathiwat",
        "sigla": "NAW",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Nukus",
        "sigla": "NCU",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Prescott",
        "sigla": "PRC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rio Gallegos",
        "sigla": "RGL",
        "pais": "Argentina"
    },
    {
        "cidade": "Arua",
        "sigla": "RUA",
        "pais": "Uganda"
    },
    {
        "cidade": "Socotra",
        "sigla": "SCT",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Santiago del Estero",
        "sigla": "SDE",
        "pais": "Argentina"
    },
    {
        "cidade": "Salamanca Matacan",
        "sigla": "SLM",
        "pais": "Espanha"
    },
    {
        "cidade": "Santo Domingo, Venezuela",
        "sigla": "STD",
        "pais": "Venezuela"
    },
    {
        "cidade": "Satu Mare",
        "sigla": "SUJ",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Svolv\u00e6r",
        "sigla": "SVJ",
        "pais": "Noruega"
    },
    {
        "cidade": "Savusavu",
        "sigla": "SVU",
        "pais": "Fiji"
    },
    {
        "cidade": "Tumaco",
        "sigla": "TCO",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Chuuk",
        "sigla": "TKK",
        "pais": "Estados Federados da Micron\u00e9sia"
    },
    {
        "cidade": "Toamasina",
        "sigla": "TMM",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Tucum\u00e3",
        "sigla": "TUC",
        "pais": "Argentina"
    },
    {
        "cidade": "Belize City Municipal",
        "sigla": "TZA",
        "pais": "Belize"
    },
    {
        "cidade": "Urgench",
        "sigla": "UGC",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Chapec\u00f3",
        "sigla": "XAP",
        "pais": "Brasil"
    },
    {
        "cidade": "Grande Prairie",
        "sigla": "YQU",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Brac",
        "sigla": "BWK",
        "pais": "Cro\u00e1cia"
    },
    {
        "cidade": "Essaouira Mogador",
        "sigla": "ESU",
        "pais": "Morrocos"
    },
    {
        "cidade": "Osaka - Itami",
        "sigla": "ITM",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Le\u00e3o",
        "sigla": "LEN",
        "pais": "Espanha"
    },
    {
        "cidade": "Nag\u00f3ia - Komaki",
        "sigla": "NKM",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Bissau",
        "sigla": "OXB",
        "pais": "Guin\u00e9-Bissau"
    },
    {
        "cidade": "Warri",
        "sigla": "QRW",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Reykjavik - Aeroporto Dom\u00e9stico",
        "sigla": "RKV",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Terme",
        "sigla": "TMJ",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Abadan",
        "sigla": "ABD",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Abeche",
        "sigla": "AEH",
        "pais": "Chade"
    },
    {
        "cidade": "Aberdeen",
        "sigla": "ABR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Abu Simbel",
        "sigla": "ABS",
        "pais": "Egipto"
    },
    {
        "cidade": "Agades",
        "sigla": "AJY",
        "pais": "N\u00edger"
    },
    {
        "cidade": "Aguascalientes",
        "sigla": "AGU",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Al Hoceima",
        "sigla": "AHU",
        "pais": "Morrocos"
    },
    {
        "cidade": "Albany - Southwest Georgia",
        "sigla": "ABY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Albury",
        "sigla": "ABX",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Fujairah - Al Fujairah",
        "sigla": "FJR",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Altoona - Blair County",
        "sigla": "AOO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Amami",
        "sigla": "ASJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Anguila",
        "sigla": "AXA",
        "pais": "Anguilla"
    },
    {
        "cidade": "Appelton - Neenah - Menasha - Outagamie County",
        "sigla": "ATW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Aracaju",
        "sigla": "AJU",
        "pais": "Brasil"
    },
    {
        "cidade": "Assiut",
        "sigla": "ATZ",
        "pais": "Egipto"
    },
    {
        "cidade": "Assu\u00e3o",
        "sigla": "ASW",
        "pais": "Egipto"
    },
    {
        "cidade": "Atlantic City",
        "sigla": "ACY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Attawapiskat, ON",
        "sigla": "YAT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Aurillac",
        "sigla": "AUR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Bahawalpur",
        "sigla": "BHV",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Ballina",
        "sigla": "BNK",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bamaga",
        "sigla": "ABM",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bangui",
        "sigla": "BGF",
        "pais": "Rep\u00fablica Centro-Africana"
    },
    {
        "cidade": "Bardufoss",
        "sigla": "BDU",
        "pais": "Noruega"
    },
    {
        "cidade": "Barisal",
        "sigla": "BZL",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Beaumont - Port Arthur",
        "sigla": "BPT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Beijing / Pequim - Nanyuan",
        "sigla": "NAY",
        "pais": "China"
    },
    {
        "cidade": "Belgau",
        "sigla": "IXG",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Bellingham",
        "sigla": "BLI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bemidji - Beltrami County",
        "sigla": "BJI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bethel",
        "sigla": "BET",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bhopal",
        "sigla": "BHO",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Billings",
        "sigla": "BIL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bintulu",
        "sigla": "BTU",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Bismarck",
        "sigla": "BIS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Blenheim",
        "sigla": "BHE",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Bloomington - IN",
        "sigla": "BMG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Boa Vista",
        "sigla": "BVB",
        "pais": "Brasil"
    },
    {
        "cidade": "Bobo - Dioulasso",
        "sigla": "BOY",
        "pais": "Burkina Faso"
    },
    {
        "cidade": "Bonaventure",
        "sigla": "YVB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Bouake",
        "sigla": "BYK",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "Bradford - Warren - Olean",
        "sigla": "BFD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Brainerd Lakes",
        "sigla": "BRD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Belmopan",
        "sigla": "BCV",
        "pais": "Belize"
    },
    {
        "cidade": "Bridgeport - CT",
        "sigla": "BDR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Broken Hill",
        "sigla": "BHQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Broome",
        "sigla": "BME",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Brunswick - Glynco Jetport",
        "sigla": "BQK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bundaberg",
        "sigla": "BDB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Burbank - Bob Hope",
        "sigla": "BUR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Burlington",
        "sigla": "BRL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Butte - Bert Mooney",
        "sigla": "BTM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cabinda",
        "sigla": "CAB",
        "pais": "Angola"
    },
    {
        "cidade": "Cambridge Bay",
        "sigla": "YCB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cambridge",
        "sigla": "CBG",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Campo Grande",
        "sigla": "CGR",
        "pais": "Brasil"
    },
    {
        "cidade": "Carlsbad - McClellan - Palomar",
        "sigla": "CLD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Carnarvon",
        "sigla": "CVQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Cedar City, UT",
        "sigla": "CDC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ceduna",
        "sigla": "CED",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Khabarovsk",
        "sigla": "KHV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Urbana - Champaign, IL",
        "sigla": "CMI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kiritimati",
        "sigla": "CXI",
        "pais": "Kiribati"
    },
    {
        "cidade": "Chub Cay",
        "sigla": "CCZ",
        "pais": "Bahamas"
    },
    {
        "cidade": "Churchill",
        "sigla": "YYQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cienfuegos",
        "sigla": "CFG",
        "pais": "Cuba"
    },
    {
        "cidade": "Ciudad del Carmen",
        "sigla": "CME",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Ciudad Juarez",
        "sigla": "CJS",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Ciudad Obregon",
        "sigla": "CEN",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Ciudad Victoria",
        "sigla": "CVM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Clarksburg - West Virginia",
        "sigla": "CKB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Clermont Ferrand Auvergne",
        "sigla": "CFE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Cleveland - Burke Lakefront, OH",
        "sigla": "BKL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Coffmann Cove, AK",
        "sigla": "KCC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Colima",
        "sigla": "CLQ",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Columbia",
        "sigla": "CAE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Columbus, GA",
        "sigla": "CSG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Concord - CA",
        "sigla": "CCR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Coober Pedy",
        "sigla": "CPD",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Cooktown",
        "sigla": "CTN",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Cooma",
        "sigla": "OOM",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Corpus Christi, TX",
        "sigla": "CRP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cozumel",
        "sigla": "CZM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Craig, AK",
        "sigla": "CGA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Crescent City, CA",
        "sigla": "CEC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Culiacan",
        "sigla": "CUL",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Decatur, IL",
        "sigla": "DEC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Derby",
        "sigla": "DRB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Dillingham, AK",
        "sigla": "DLG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dubbo",
        "sigla": "DBO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Dubois, PA",
        "sigla": "DUJ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dubuque, IA",
        "sigla": "DBQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Duluth International, MN",
        "sigla": "DLH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dutch Harbor - Unalaska, AK",
        "sigla": "DUT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dzaoudzi",
        "sigla": "DZA",
        "pais": "Maiote"
    },
    {
        "cidade": "Eau Claire, WI",
        "sigla": "EAU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Elko, NV",
        "sigla": "EKO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Elmira, NY",
        "sigla": "ELM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Edward River",
        "sigla": "EDR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Esbjerg",
        "sigla": "EBJ",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Escanaba, MI",
        "sigla": "ESC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Esperance",
        "sigla": "EPR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Eureka, CA",
        "sigla": "ACV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Evansville, IN",
        "sigla": "EVV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Faisalabad",
        "sigla": "LYP",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Fayetteville-AR",
        "sigla": "FYV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Figari",
        "sigla": "FSC",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Flagstaff",
        "sigla": "FLG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Flin Flon",
        "sigla": "YFO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Flint - Bishop",
        "sigla": "FNT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Florence, SC",
        "sigla": "FLO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Floro",
        "sigla": "FRO",
        "pais": "Noruega"
    },
    {
        "cidade": "Fort Albany",
        "sigla": "YFA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fort Dodge, IA",
        "sigla": "FOD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fort McMurray",
        "sigla": "YMM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fort Smith, AR",
        "sigla": "FSM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Francistown",
        "sigla": "FRW",
        "pais": "Botsuana"
    },
    {
        "cidade": "Franklin, PA",
        "sigla": "FKL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gander",
        "sigla": "YQX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Garoua",
        "sigla": "GOU",
        "pais": "Camar\u00f5es"
    },
    {
        "cidade": "Geraldton",
        "sigla": "GET",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Gillette, WY",
        "sigla": "GCC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gilgit",
        "sigla": "GIL",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Gillam",
        "sigla": "YGX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Glasgow, MT",
        "sigla": "GGW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Glendive, MT",
        "sigla": "GDV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Goose Bay",
        "sigla": "YYR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Governor's Harbour",
        "sigla": "GHB",
        "pais": "Bahamas"
    },
    {
        "cidade": "Kalaburagi",
        "sigla": "GBI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Grand Canyon",
        "sigla": "GCN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Grand Junction, CO",
        "sigla": "GJT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lewisburg, WV",
        "sigla": "LWB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Greensboro - Piedmond Triad",
        "sigla": "GSO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Greenville - Mid Delta, MS",
        "sigla": "GLH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Greenville, NC",
        "sigla": "PGV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Griffith",
        "sigla": "GFF",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Gulu",
        "sigla": "ULU",
        "pais": "Uganda"
    },
    {
        "cidade": "Gunnison - Crested Butte, CO",
        "sigla": "GUC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gwadar",
        "sigla": "GWD",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Hachijo Jima",
        "sigla": "HAC",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Haifa",
        "sigla": "HFA",
        "pais": "Israel"
    },
    {
        "cidade": "Haines, AK",
        "sigla": "HNS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hakodate",
        "sigla": "HKD",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Hall Beach",
        "sigla": "YUX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Hammerfest",
        "sigla": "HFT",
        "pais": "Noruega"
    },
    {
        "cidade": "Hancock Airport",
        "sigla": "CMX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Harlingen - Valley",
        "sigla": "HRL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chevery",
        "sigla": "YHR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Havre, MT",
        "sigla": "HVR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hayman",
        "sigla": "HIS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Hervey Bay",
        "sigla": "HVB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Hibbing, MN",
        "sigla": "HIB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hilton Head Island, SC",
        "sigla": "HHH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Homer, AK",
        "sigla": "HOM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Honiara",
        "sigla": "HIR",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Huahine - Fare",
        "sigla": "HUH",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Huntington, OH",
        "sigla": "HTS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Huron, SD",
        "sigla": "HON",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hyannis, MA",
        "sigla": "HYA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hydaburg, AK",
        "sigla": "HYG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Iliamna, AK",
        "sigla": "ILI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Imperial, CA",
        "sigla": "IPL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "International Falls, MN",
        "sigla": "INL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Inuvik",
        "sigla": "YEV",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Inverell",
        "sigla": "IVR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Inyokern",
        "sigla": "IYK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ixtapa - Zihuatanejo",
        "sigla": "ZIH",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Jackson, TN",
        "sigla": "MKL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Jacksonville, NC",
        "sigla": "OAJ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Jakarta-Halim Perdanakusma",
        "sigla": "HLP",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Jabalpur",
        "sigla": "JLR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jamestown, ND",
        "sigla": "JMS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Jamshedpur",
        "sigla": "IXW",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Joplin, MO",
        "sigla": "JLN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kagoshima",
        "sigla": "KOJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kalamazoo - Battle Creek, MI",
        "sigla": "AZO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kalgoorlie",
        "sigla": "KGI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kalispell - Glacier Park",
        "sigla": "FCA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kano",
        "sigla": "KAN",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Kapalua, HI",
        "sigla": "JHM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Karratha",
        "sigla": "KTA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Karumba",
        "sigla": "KRB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Karup",
        "sigla": "KRP",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Kashechewan",
        "sigla": "ZKE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kassala",
        "sigla": "KSL",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Katherine",
        "sigla": "KTR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Katima Mulilo-Mpacha",
        "sigla": "MPA",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Molokai,HI",
        "sigla": "MKK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kenai - AK",
        "sigla": "ENA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ketchikan, AK",
        "sigla": "KTN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kimberley",
        "sigla": "KIM",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "King Island",
        "sigla": "KNS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kingscote",
        "sigla": "KGC",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kisangani - Bangoka",
        "sigla": "FKI",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Klamath Falls",
        "sigla": "LMT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Klawock, AK",
        "sigla": "KLW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kobe",
        "sigla": "UKB",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kochi",
        "sigla": "KCZ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kodiak",
        "sigla": "ADQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Korhogo",
        "sigla": "HGO",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "Kotzbue Ralph Wien",
        "sigla": "OTZ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kowanyama",
        "sigla": "KWM",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kristianstad",
        "sigla": "KID",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Kumamoto",
        "sigla": "KMJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kununurra",
        "sigla": "KNX",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kushiro",
        "sigla": "KUH",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kuujjuarapik",
        "sigla": "YGW",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kuusamo",
        "sigla": "KAO",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Labuan",
        "sigla": "LBU",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Lac Brochet, MB",
        "sigla": "XLB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Lafayette",
        "sigla": "LFT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "La Grande",
        "sigla": "YGL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Lake Charles, LA",
        "sigla": "LCH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lanai City, HI",
        "sigla": "LNY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lancaster, PA",
        "sigla": "LNS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lanseri",
        "sigla": "HLA",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Lappeenranta",
        "sigla": "LPP",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Laramie, WY",
        "sigla": "LAR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Laredo, TX",
        "sigla": "LRD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Latrobe, PA",
        "sigla": "LBE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Launceston",
        "sigla": "LST",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Hattiesburg - Laurel",
        "sigla": "PIB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Laverton",
        "sigla": "LVO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Lawton, OK",
        "sigla": "LAW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lazaro Cardenas",
        "sigla": "LZC",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Learmonth",
        "sigla": "LEA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Lebanon, NH",
        "sigla": "LEB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Leinster",
        "sigla": "LER",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Leonora",
        "sigla": "LNO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Lifou",
        "sigla": "LIF",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Limoges",
        "sigla": "LIG",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Lincoln, NE",
        "sigla": "LNK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lismore",
        "sigla": "LSY",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Lizard Island",
        "sigla": "LZR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Lockhart River",
        "sigla": "IRG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Long Beach",
        "sigla": "LGB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Islip - Long Island MacArthur - NY",
        "sigla": "ISP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Longreach",
        "sigla": "LRE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Longview, TX",
        "sigla": "GGG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Loreto",
        "sigla": "LTO",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Los Mochis",
        "sigla": "LMM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Lubbock",
        "sigla": "LBB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Luderitz",
        "sigla": "LUD",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Lubumbashi",
        "sigla": "FBM",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Lynchburg, VA",
        "sigla": "LYH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Majunga",
        "sigla": "MJN",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Makung",
        "sigla": "MZG",
        "pais": "Taiwan"
    },
    {
        "cidade": "Malindi",
        "sigla": "MYD",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Man",
        "sigla": "MJC",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "Manihi",
        "sigla": "XMH",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Manzanillo",
        "sigla": "ZLO",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Mar del Plata",
        "sigla": "MDQ",
        "pais": "Argentina"
    },
    {
        "cidade": "Maracaibo - La Chinita",
        "sigla": "MAR",
        "pais": "Venezuela"
    },
    {
        "cidade": "Mare",
        "sigla": "MEE",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Margate",
        "sigla": "MGH",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Mariehamn",
        "sigla": "MHQ",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Maroua",
        "sigla": "MVR",
        "pais": "Camar\u00f5es"
    },
    {
        "cidade": "Marsa Matruh",
        "sigla": "MUH",
        "pais": "Egipto"
    },
    {
        "cidade": "Marsh Harbour",
        "sigla": "MHH",
        "pais": "Bahamas"
    },
    {
        "cidade": "Martha's Vineyard, MA",
        "sigla": "MVY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Maseru - Moshoeshoe",
        "sigla": "MSU",
        "pais": "Lesoto"
    },
    {
        "cidade": "Mason City, IA",
        "sigla": "MCW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Matsuyama",
        "sigla": "MYJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Maupiti",
        "sigla": "MAU",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Mayaguez",
        "sigla": "MAZ",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Merced, CA",
        "sigla": "MCE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Meridian, MS",
        "sigla": "MEI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Merimbula",
        "sigla": "MIM",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Metlakatla, AK",
        "sigla": "MTM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mexicali",
        "sigla": "MXL",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Midland - Odessa, TX",
        "sigla": "MAF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mildura",
        "sigla": "MQL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Minatitlan",
        "sigla": "MTT",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Moenjodaro",
        "sigla": "MJD",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Monroe",
        "sigla": "MLU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Monterey, CA",
        "sigla": "MRY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Montrose Regional, CO",
        "sigla": "MTJ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Moranbah",
        "sigla": "MOV",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Moree",
        "sigla": "MRZ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Morelia",
        "sigla": "MLM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Morgantown, WV",
        "sigla": "MGW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mostar",
        "sigla": "OMO",
        "pais": "B\u00f3snia e Herzegovina"
    },
    {
        "cidade": "Moundou",
        "sigla": "MQQ",
        "pais": "Chade"
    },
    {
        "cidade": "Mount Magnet",
        "sigla": "MMG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Multan",
        "sigla": "MUX",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Muscle Shoals, AL",
        "sigla": "MSL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Muskegon, MI",
        "sigla": "MKG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Franceville, Mvengue",
        "sigla": "MVB",
        "pais": "Gab\u00e3o"
    },
    {
        "cidade": "N'Dola",
        "sigla": "NLA",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "N'Gaoundere",
        "sigla": "NGE",
        "pais": "Camar\u00f5es"
    },
    {
        "cidade": "Nagasaki",
        "sigla": "NGS",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Nantucket - MA",
        "sigla": "ACK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Narrabri",
        "sigla": "NAA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Narrandera",
        "sigla": "NRA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Narsarsuaq",
        "sigla": "UAK",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Nevis",
        "sigla": "NEV",
        "pais": "S\u00e3o Crist\u00f3v\u00e3o e Nevis"
    },
    {
        "cidade": "New Valley - Kharga",
        "sigla": "UVL",
        "pais": "Egipto"
    },
    {
        "cidade": "Stewart International Airport",
        "sigla": "SWF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Newman",
        "sigla": "ZNE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Newport News - Williamsburg",
        "sigla": "PHF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Niigata",
        "sigla": "KIJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Nimes - Arles - Camargue",
        "sigla": "FNI",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Norfolk Island",
        "sigla": "NLK",
        "pais": "Ilha Norfolk"
    },
    {
        "cidade": "Norman Wells",
        "sigla": "YVQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "North Bend, OR",
        "sigla": "OTH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nuevo Laredo",
        "sigla": "NLD",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Nuku'alofa - Fua'amotu",
        "sigla": "TBU",
        "pais": "Tonga"
    },
    {
        "cidade": "Odense",
        "sigla": "ODE",
        "pais": "Dinamarca"
    },
    {
        "cidade": "Olympic Dam",
        "sigla": "OLP",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Ondangwa",
        "sigla": "OND",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Orange",
        "sigla": "OAG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Oranjemund",
        "sigla": "OMD",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Ouarzazate",
        "sigla": "OZZ",
        "pais": "Morrocos"
    },
    {
        "cidade": "Owensboro, KY",
        "sigla": "OWB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ouv\u00e9a",
        "sigla": "UVE",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Paducah, KY",
        "sigla": "PAH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Page - Lake Powell, AZ",
        "sigla": "PGA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Palm Springs, CA",
        "sigla": "PSP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Panjgur",
        "sigla": "PJG",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Paraburdoo",
        "sigla": "PBO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Paris-Le Bourget",
        "sigla": "LBG",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Patna",
        "sigla": "PAT",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Pendleton, OR",
        "sigla": "PDT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Peoria - Bloomington, IL",
        "sigla": "PIA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Petersburg, AK",
        "sigla": "PSG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pierre",
        "sigla": "PIR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Polokwane",
        "sigla": "PTG",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Plettenberg Bay",
        "sigla": "PBZ",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Pocatello, ID",
        "sigla": "PIH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pohnpei",
        "sigla": "PNI",
        "pais": "Estados Federados da Micron\u00e9sia"
    },
    {
        "cidade": "Ponce - Mercedita",
        "sigla": "PSE",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Port Augusta",
        "sigla": "PUG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Port Gentil",
        "sigla": "POG",
        "pais": "Gab\u00e3o"
    },
    {
        "cidade": "Portland",
        "sigla": "PTJ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Port Lincoln",
        "sigla": "PLO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Port Macquarie",
        "sigla": "PQQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Port Menier",
        "sigla": "YPN",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Porto Velho",
        "sigla": "PVH",
        "pais": "Brasil"
    },
    {
        "cidade": "Presque Isle",
        "sigla": "PQI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Prudhoe Bay / Deadhorse, AK",
        "sigla": "SCC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pueblo, CO",
        "sigla": "PUB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Puerto Ordaz",
        "sigla": "PZO",
        "pais": "Venezuela"
    },
    {
        "cidade": "Pullman, WA",
        "sigla": "PUW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pyongyang-Sunan",
        "sigla": "FNJ",
        "pais": "Coreia do Norte"
    },
    {
        "cidade": "Quetta",
        "sigla": "UET",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Quincy, IL",
        "sigla": "UIN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rahim Yar Khan",
        "sigla": "RYK",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Raiatea",
        "sigla": "RFP",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Ranchi",
        "sigla": "IXR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Rangiroa",
        "sigla": "RGI",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Rapid City",
        "sigla": "RAP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Redding, CA",
        "sigla": "RDD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Redmond, OR",
        "sigla": "RDM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Resolute Bay",
        "sigla": "YRB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Rhinelander, WI",
        "sigla": "RHI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rio Branco",
        "sigla": "RBR",
        "pais": "Brasil"
    },
    {
        "cidade": "Rock Sound",
        "sigla": "RSD",
        "pais": "Bahamas"
    },
    {
        "cidade": "Rock Springs, WY",
        "sigla": "RKS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chicago Rockford, IL",
        "sigla": "RFD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rockhampton",
        "sigla": "ROK",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Rockland, ME",
        "sigla": "RKD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rosario",
        "sigla": "ROS",
        "pais": "Argentina"
    },
    {
        "cidade": "Rotorua",
        "sigla": "ROT",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Rundu",
        "sigla": "NDU",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Saginaw - MBS",
        "sigla": "MBS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Saidu Sharif",
        "sigla": "SDT",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Salem, OR",
        "sigla": "SLE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Salinas",
        "sigla": "SNC",
        "pais": "Equador"
    },
    {
        "cidade": "Salisbury, MD",
        "sigla": "SBY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Angelo, TX",
        "sigla": "SJT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Luis Obispo",
        "sigla": "SBP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Pedro",
        "sigla": "SPY",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "San Salvador - Bahamas",
        "sigla": "ZSA",
        "pais": "Bahamas"
    },
    {
        "cidade": "Sanaa - Sana'a",
        "sigla": "SAH",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Sandspit",
        "sigla": "YZP",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Santa Rosa - Sonoma County",
        "sigla": "STS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sapporo-Okadama",
        "sigla": "OKD",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Sapporo-Shin-Chitose",
        "sigla": "CTS",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Savonlinna",
        "sigla": "SVL",
        "pais": "Finl\u00e2ndia"
    },
    {
        "cidade": "Sabha",
        "sigla": "SEB",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Shamattawa, MB",
        "sigla": "ZTM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Staunton - Shenandoah Valley, VA",
        "sigla": "SHD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sheridan, WY",
        "sigla": "SHR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Shreveport",
        "sigla": "SHV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sibu",
        "sigla": "SBW",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Sibolga",
        "sigla": "FLZ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Sioux Falls",
        "sigla": "FSD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sishen",
        "sigla": "SIS",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Siwa",
        "sigla": "SEW",
        "pais": "Egipto"
    },
    {
        "cidade": "Skagway, AK",
        "sigla": "SGY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Skardu",
        "sigla": "KDU",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Skukuza",
        "sigla": "SZK",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Smithers",
        "sigla": "YYD",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "South Indian Lake, MB",
        "sigla": "XSI",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Londres - Southend",
        "sigla": "SEN",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Spokane - WA",
        "sigla": "GEG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Springfield - Branson",
        "sigla": "SGF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Saint-Augustin",
        "sigla": "YIF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "St. George",
        "sigla": "SGU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "St. Kitts",
        "sigla": "SKB",
        "pais": "S\u00e3o Crist\u00f3v\u00e3o e Nevis"
    },
    {
        "cidade": "St. Martin - Grand Case",
        "sigla": "SFG",
        "pais": "Guadalupe"
    },
    {
        "cidade": "St. Pierre, NF",
        "sigla": "FSP",
        "pais": "St. Pierre e Miquelon"
    },
    {
        "cidade": "Hayden - Steamboat Springs, CO",
        "sigla": "HDN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Stockton Metropolitan",
        "sigla": "SCK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sukkur",
        "sigla": "SKZ",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Sun Valley, ID",
        "sigla": "SUN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Surat",
        "sigla": "STV",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Swakopmund",
        "sigla": "SWP",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Tabuk",
        "sigla": "TUU",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Taif",
        "sigla": "TIF",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Tartu - \u00dclenurme",
        "sigla": "TAY",
        "pais": "Est\u00f3nia"
    },
    {
        "cidade": "Taiyuan",
        "sigla": "TYN",
        "pais": "China"
    },
    {
        "cidade": "Tamworth",
        "sigla": "TMW",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Taree",
        "sigla": "TRO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Tawau",
        "sigla": "TWU",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Telluride, CO",
        "sigla": "TEX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tennant Creek",
        "sigla": "TCA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Terceira",
        "sigla": "TER",
        "pais": "Portugal"
    },
    {
        "cidade": "Teresina",
        "sigla": "THE",
        "pais": "Brasil"
    },
    {
        "cidade": "Terrace",
        "sigla": "YXT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Texarkana, AR",
        "sigla": "TXK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "The Pas",
        "sigla": "YQD",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Thief River Falls, MN",
        "sigla": "TVF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Thompson",
        "sigla": "YTH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Thorne Bay, AK",
        "sigla": "KTB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tiruchirapally",
        "sigla": "TRZ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Tokushima",
        "sigla": "TKS",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Toronto - City Centre",
        "sigla": "YTZ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Touho",
        "sigla": "TOU",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Treasure Cay",
        "sigla": "TCB",
        "pais": "Bahamas"
    },
    {
        "cidade": "Trenton - Mercer",
        "sigla": "TTN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tupelo",
        "sigla": "TUP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Turbat",
        "sigla": "TUK",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Tuscaloosa - AL",
        "sigla": "TCL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tuxtla Gutierrez",
        "sigla": "TGZ",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Twin Falls, ID",
        "sigla": "TWF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tyler Pounds Regional",
        "sigla": "TYR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Umtata",
        "sigla": "UTT",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Upington",
        "sigla": "UTN",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Eagle County Regional Airport",
        "sigla": "EGE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Val d'Or",
        "sigla": "YVO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Valhadolid",
        "sigla": "VLL",
        "pais": "Espanha"
    },
    {
        "cidade": "El Hierro - Valverde",
        "sigla": "VDE",
        "pais": "Espanha"
    },
    {
        "cidade": "Vernal, UT",
        "sigla": "VEL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vero Beach-Ft. Pierce - FL",
        "sigla": "VRB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Virgin Gorda",
        "sigla": "VIJ",
        "pais": "Ilhas V\u00edrgens Brit\u00e2nicas"
    },
    {
        "cidade": "Visalia, CA",
        "sigla": "VIS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vit\u00f3ria - Gasteiz",
        "sigla": "VIT",
        "pais": "Espanha"
    },
    {
        "cidade": "Wabush",
        "sigla": "YWK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Waco, TX",
        "sigla": "ACT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wallis",
        "sigla": "WLS",
        "pais": "Ilhas Wallis e Futuna"
    },
    {
        "cidade": "Waterloo Regional, IA",
        "sigla": "ALO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Watertown, SD",
        "sigla": "ATY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wausau - Central Wisconsin Airport, WI",
        "sigla": "CWA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Weipa",
        "sigla": "WEI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wenatchee, WA",
        "sigla": "EAT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "West Yellowstone - MT",
        "sigla": "WYS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Whakatane",
        "sigla": "WHK",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Whale Cove-NT",
        "sigla": "YXN",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Whangarei",
        "sigla": "WRE",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "White Plains, NY",
        "sigla": "HPN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Whyalla",
        "sigla": "WYA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wilkes Barre - Scranton, PA",
        "sigla": "AVP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Williamsport",
        "sigla": "IPT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wiluna",
        "sigla": "WUN",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wolf Point, MT",
        "sigla": "OLF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Worcester, MA",
        "sigla": "ORH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Worland, WY",
        "sigla": "WRL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yakima - WA",
        "sigla": "YKM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yakutat, AK",
        "sigla": "YAK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yamoussoukro",
        "sigla": "ASK",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "Yanbu",
        "sigla": "YNB",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Yuma",
        "sigla": "YUM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Zacatecas",
        "sigla": "ZCL",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Zhob",
        "sigla": "PZH",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Zinder",
        "sigla": "ZND",
        "pais": "N\u00edger"
    },
    {
        "cidade": "Zouerate",
        "sigla": "OUZ",
        "pais": "Maurit\u00e2nia"
    },
    {
        "cidade": "Al Ain",
        "sigla": "AAN",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Atambua - Haliwen",
        "sigla": "ABU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Alderney",
        "sigla": "ACI",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Adak Island",
        "sigla": "ADK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Allakaket",
        "sigla": "AET",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Helsingborg Angelholm",
        "sigla": "AGH",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Anaktuvuk Pass",
        "sigla": "AKP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Aniak",
        "sigla": "ANI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nampula",
        "sigla": "APL",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Arctic Village",
        "sigla": "ARC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Arauca",
        "sigla": "AUC",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Alexandroupolis - Dem\u00f3crito",
        "sigla": "AXD",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Baguio Loakan",
        "sigla": "BAG",
        "pais": "Filipinas"
    },
    {
        "cidade": "Baotou",
        "sigla": "BAV",
        "pais": "China"
    },
    {
        "cidade": "Balmaceda Vidal",
        "sigla": "BBA",
        "pais": "Chile"
    },
    {
        "cidade": "Kasane",
        "sigla": "BBK",
        "pais": "Botsuana"
    },
    {
        "cidade": "Bacolod",
        "sigla": "BCD",
        "pais": "Filipinas"
    },
    {
        "cidade": "Banjarmasin",
        "sigla": "BDJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Bandung",
        "sigla": "BDO",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Binghamton - Broome County Airport",
        "sigla": "BGM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bathurst Raglan",
        "sigla": "BHS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bejaia",
        "sigla": "BJA",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Bengkulu",
        "sigla": "BKS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Borlange",
        "sigla": "BLE",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Batna",
        "sigla": "BLJ",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Bandar Abbas",
        "sigla": "BND",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Barrow",
        "sigla": "BRW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Biskra",
        "sigla": "BSK",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Basco",
        "sigla": "BSO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Banda Ach\u00e9m",
        "sigla": "BTJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Bratsk",
        "sigla": "BTK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Brive - Vall\u00e9e de la Dordogne",
        "sigla": "BVE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Beziers Vias Cap d'Agde",
        "sigla": "BZR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Cotabato Awang",
        "sigla": "CBO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Carcassonne - Salvaza",
        "sigla": "CCF",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Cold Bay",
        "sigla": "CDB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cagayan De Oro Lumbia",
        "sigla": "CGY",
        "pais": "Filipinas"
    },
    {
        "cidade": "Chatham Islands Tuuta",
        "sigla": "CHT",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Changzhi",
        "sigla": "CIH",
        "pais": "China"
    },
    {
        "cidade": "Sault Ste. Marie",
        "sigla": "CIU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Canouan Island",
        "sigla": "CIW",
        "pais": "S\u00e3o Vicente e Granadinas"
    },
    {
        "cidade": "Corumb\u00e1",
        "sigla": "CMG",
        "pais": "Brasil"
    },
    {
        "cidade": "Campeche International",
        "sigla": "CPE",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Copiapo",
        "sigla": "CPO",
        "pais": "Chile"
    },
    {
        "cidade": "Catarman National",
        "sigla": "CRM",
        "pais": "Filipinas"
    },
    {
        "cidade": "Cap Skirring",
        "sigla": "CSK",
        "pais": "Senegal"
    },
    {
        "cidade": "Cuni",
        "sigla": "CUF",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Coventry - Baginton",
        "sigla": "CVT",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Caim\u00e3o Brac",
        "sigla": "CYB",
        "pais": "Ilhas Caim\u00e3o"
    },
    {
        "cidade": "Cayo Largo Del Sur",
        "sigla": "CYO",
        "pais": "Cuba"
    },
    {
        "cidade": "Calbayog",
        "sigla": "CYP",
        "pais": "Filipinas"
    },
    {
        "cidade": "Changzhou",
        "sigla": "CZX",
        "pais": "China"
    },
    {
        "cidade": "Dominica Cane - Canefield",
        "sigla": "DCF",
        "pais": "Dominica"
    },
    {
        "cidade": "Castres - Mazamet",
        "sigla": "DCM",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Mudgee",
        "sigla": "DGE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Durango",
        "sigla": "DGO",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Dibrugarh",
        "sigla": "DIB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jambi - Sult\u00e3o Thaha",
        "sigla": "DJB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Djanet",
        "sigla": "DJG",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Da Lat",
        "sigla": "DLI",
        "pais": "Vietname"
    },
    {
        "cidade": "Dominica - Melville Hall",
        "sigla": "DOM",
        "pais": "Dominica"
    },
    {
        "cidade": "Dipolog",
        "sigla": "DPL",
        "pais": "Filipinas"
    },
    {
        "cidade": "Zhangjiajie",
        "sigla": "DYG",
        "pais": "China"
    },
    {
        "cidade": "Eagle",
        "sigla": "EAA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bergerac - Roumaniere",
        "sigla": "EGC",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Emmonak",
        "sigla": "EMK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sveg",
        "sigla": "EVG",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Fort Collins - Loveland",
        "sigla": "FNL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fuzhou",
        "sigla": "FOC",
        "pais": "China"
    },
    {
        "cidade": "Fuyang",
        "sigla": "FUG",
        "pais": "China"
    },
    {
        "cidade": "Ft. Yukon",
        "sigla": "FYU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Galena",
        "sigla": "GAL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gaya",
        "sigla": "GAY",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "G\u00e4llivare",
        "sigla": "GEV",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "George Town",
        "sigla": "GGT",
        "pais": "Bahamas"
    },
    {
        "cidade": "Gisborne",
        "sigla": "GIS",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Atyrau",
        "sigla": "GUW",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Argyle",
        "sigla": "GYL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Haikou",
        "sigla": "HAK",
        "pais": "China"
    },
    {
        "cidade": "Hohhot Baita",
        "sigla": "HET",
        "pais": "China"
    },
    {
        "cidade": "Hargeisa Egal",
        "sigla": "HGA",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Hiroshima",
        "sigla": "HIJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Healy Lake",
        "sigla": "HKB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hailar",
        "sigla": "HLD",
        "pais": "China"
    },
    {
        "cidade": "Ulanhot",
        "sigla": "HLH",
        "pais": "China"
    },
    {
        "cidade": "Huslia",
        "sigla": "HSL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hughes",
        "sigla": "HUS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Taizhou - Huangyan",
        "sigla": "HYN",
        "pais": "China"
    },
    {
        "cidade": "Inagua",
        "sigla": "IGA",
        "pais": "Bahamas"
    },
    {
        "cidade": "Iloilo",
        "sigla": "ILO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Imphal",
        "sigla": "IMF",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Yinchuan",
        "sigla": "INC",
        "pais": "China"
    },
    {
        "cidade": "Nauru International",
        "sigla": "INU",
        "pais": "Nauru"
    },
    {
        "cidade": "Ipoh",
        "sigla": "IPH",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Jammu",
        "sigla": "IXJ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jacmel",
        "sigla": "JAK",
        "pais": "Haiti"
    },
    {
        "cidade": "Jingdezhen",
        "sigla": "JDZ",
        "pais": "China"
    },
    {
        "cidade": "Jiayuguan",
        "sigla": "JGN",
        "pais": "China"
    },
    {
        "cidade": "Jinghong - Gasa",
        "sigla": "JHG",
        "pais": "China"
    },
    {
        "cidade": "Jinja",
        "sigla": "JIN",
        "pais": "Uganda"
    },
    {
        "cidade": "Jinjiang",
        "sigla": "JJN",
        "pais": "China"
    },
    {
        "cidade": "Jiamusi",
        "sigla": "JMU",
        "pais": "China"
    },
    {
        "cidade": "Siros",
        "sigla": "JSY",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Kaltag",
        "sigla": "KAL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kerikeri",
        "sigla": "KKE",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Carlsbad",
        "sigla": "KLV",
        "pais": "Rep\u00fablica Checa"
    },
    {
        "cidade": "Komatsu",
        "sigla": "KMQ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kotlik",
        "sigla": "KOT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ganzhou",
        "sigla": "KOW",
        "pais": "China"
    },
    {
        "cidade": "Kramfors",
        "sigla": "KRF",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Casos",
        "sigla": "KSJ",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "St. Mary's",
        "sigla": "KSM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kuria",
        "sigla": "KUC",
        "pais": "Kiribati"
    },
    {
        "cidade": "Guiyang",
        "sigla": "KWE",
        "pais": "China"
    },
    {
        "cidade": "Kozani Philippos",
        "sigla": "KZI",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Castelorizo",
        "sigla": "KZS",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Laoag",
        "sigla": "LAO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Lamu",
        "sigla": "LAU",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Londrina",
        "sigla": "LDB",
        "pais": "Brasil"
    },
    {
        "cidade": "Lord Howe",
        "sigla": "LDH",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Le Havre - Octeville",
        "sigla": "LEH",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Lanzhou",
        "sigla": "LHW",
        "pais": "China"
    },
    {
        "cidade": "Lake Minchumina",
        "sigla": "LMA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Leros - Partheni",
        "sigla": "LRS",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "La Serena",
        "sigla": "LSC",
        "pais": "Chile"
    },
    {
        "cidade": "Lianyungang",
        "sigla": "LYG",
        "pais": "China"
    },
    {
        "cidade": "Matamoros",
        "sigla": "MAM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Mae Sot",
        "sigla": "MAQ",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Masbate",
        "sigla": "MBT",
        "pais": "Filipinas"
    },
    {
        "cidade": "Mc Grath",
        "sigla": "MCG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "M\u00f3naco, Heliporto",
        "sigla": "MCM",
        "pais": "M\u00f3naco"
    },
    {
        "cidade": "Mudanjiang",
        "sigla": "MDG",
        "pais": "China"
    },
    {
        "cidade": "Merauke - Mopah",
        "sigla": "MKQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Caticlan Malay",
        "sigla": "MPH",
        "pais": "Filipinas"
    },
    {
        "cidade": "Mount Pleasant",
        "sigla": "MPN",
        "pais": "Ilhas Malvinas"
    },
    {
        "cidade": "Marinduque",
        "sigla": "MRQ",
        "pais": "Filipinas"
    },
    {
        "cidade": "Maturin",
        "sigla": "MUN",
        "pais": "Venezuela"
    },
    {
        "cidade": "Mora",
        "sigla": "MXX",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Qiqihar",
        "sigla": "NDG",
        "pais": "China"
    },
    {
        "cidade": "Naryan-Mar",
        "sigla": "NNM",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nan",
        "sigla": "NNT",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "New Plymouth",
        "sigla": "NPL",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Norilsk",
        "sigla": "NSK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nakhon Si Thammarat",
        "sigla": "NST",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Nulato",
        "sigla": "NUL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Novy Urengoy",
        "sigla": "NUX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nadym",
        "sigla": "NYM",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nyaung-U",
        "sigla": "NYU",
        "pais": "Myanmar"
    },
    {
        "cidade": "Ostersund Froesoe",
        "sigla": "OSD",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Poza Rica",
        "sigla": "PAZ",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Paro",
        "sigla": "PBH",
        "pais": "But\u00e3o"
    },
    {
        "cidade": "Punta Del Este - Laguna del Sauce",
        "sigla": "PDP",
        "pais": "Uruguai"
    },
    {
        "cidade": "Petrozavodsk",
        "sigla": "PES",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Phitsanulok",
        "sigla": "PHS",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Poitiers - Biard",
        "sigla": "PIS",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Petropavlovsk - Kamchatsky",
        "sigla": "PKC",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Parkes",
        "sigla": "PKE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Palangkaraya",
        "sigla": "PKY",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Palembang - Sult\u00e3o Mahmud Badaruddin II",
        "sigla": "PLM",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Palmas",
        "sigla": "PMW",
        "pais": "Brasil"
    },
    {
        "cidade": "Pontianak",
        "sigla": "PNK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Portsmouth Pease Afb",
        "sigla": "PSM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Port Heiden",
        "sigla": "PTH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Provincetown",
        "sigla": "PVC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ruby",
        "sigla": "RBY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Reynosa",
        "sigla": "REX",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Rampart",
        "sigla": "RMP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Roxas City",
        "sigla": "RXS",
        "pais": "Filipinas"
    },
    {
        "cidade": "Seronera",
        "sigla": "SEU",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Sion",
        "sigla": "SIR",
        "pais": "Su\u00ed\u00e7a"
    },
    {
        "cidade": "San Jose Mcguire",
        "sigla": "SJI",
        "pais": "Filipinas"
    },
    {
        "cidade": "Shijiazhuang",
        "sigla": "SJW",
        "pais": "China"
    },
    {
        "cidade": "Skyros",
        "sigla": "SKU",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Saltillo",
        "sigla": "SLW",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Salekhard",
        "sigla": "SLY",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Sao Nicolau Preguica",
        "sigla": "SNE",
        "pais": "Cabo Verde"
    },
    {
        "cidade": "Sakon Nakhon",
        "sigla": "SNO",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "St. George Island",
        "sigla": "STG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Surigao",
        "sigla": "SUG",
        "pais": "Filipinas"
    },
    {
        "cidade": "Stevens Village",
        "sigla": "SVS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tacloban",
        "sigla": "TAC",
        "pais": "Filipinas"
    },
    {
        "cidade": "Daegu",
        "sigla": "TAE",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Tanana",
        "sigla": "TAL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tuy Hoa",
        "sigla": "TBB",
        "pais": "Vietname"
    },
    {
        "cidade": "The Bight",
        "sigla": "TBI",
        "pais": "Bahamas"
    },
    {
        "cidade": "Kuala Terengganu",
        "sigla": "TGG",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Tongliao",
        "sigla": "TGO",
        "pais": "China"
    },
    {
        "cidade": "Thule",
        "sigla": "THU",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Tok",
        "sigla": "TKJ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tlemcen",
        "sigla": "TLM",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Tozeur - Nefta",
        "sigla": "TOE",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Tepic",
        "sigla": "TPQ",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Tauranga",
        "sigla": "TRG",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Trang",
        "sigla": "TST",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Tours - Vale do Loire",
        "sigla": "TUF",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Tuguegarao",
        "sigla": "TUG",
        "pais": "Filipinas"
    },
    {
        "cidade": "Taupo",
        "sigla": "TUO",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Torsby - Fryklanda",
        "sigla": "TYF",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Ukhta",
        "sigla": "UCT",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Unalakleet, AK",
        "sigla": "UNK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ranong",
        "sigla": "UNN",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Uruapan",
        "sigla": "UPN",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Ru\u00e3o - Boos",
        "sigla": "URO",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Usinsk",
        "sigla": "USK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Busuanga",
        "sigla": "USU",
        "pais": "Filipinas"
    },
    {
        "cidade": "Van - Ferit Melen",
        "sigla": "VAN",
        "pais": "Turquia"
    },
    {
        "cidade": "Vilhelmina - Sagadal",
        "sigla": "VHM",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Rach Gia",
        "sigla": "VKG",
        "pais": "Vietname"
    },
    {
        "cidade": "Vieques - Antonio Rivera Rodriguez",
        "sigla": "VQS",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Virac",
        "sigla": "VRC",
        "pais": "Filipinas"
    },
    {
        "cidade": "Nairobi Wilson",
        "sigla": "WIL",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Naga",
        "sigla": "WNP",
        "pais": "Filipinas"
    },
    {
        "cidade": "Wenzhou",
        "sigla": "WNZ",
        "pais": "China"
    },
    {
        "cidade": "Xiangfan",
        "sigla": "XFN",
        "pais": "China"
    },
    {
        "cidade": "Xilinhot",
        "sigla": "XIL",
        "pais": "China"
    },
    {
        "cidade": "Xining",
        "sigla": "XNN",
        "pais": "China"
    },
    {
        "cidade": "Xuzhou",
        "sigla": "XUZ",
        "pais": "China"
    },
    {
        "cidade": "Anahim Lake",
        "sigla": "YAA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Tofino",
        "sigla": "YAZ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Campbell River",
        "sigla": "YBL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Nanaimo",
        "sigla": "YCD",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Castlegar",
        "sigla": "YCG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Dawson Creek",
        "sigla": "YDQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yichang",
        "sigla": "YIH",
        "pais": "China"
    },
    {
        "cidade": "Old Crow",
        "sigla": "YOC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Powell River",
        "sigla": "YPW",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Moncton",
        "sigla": "YQM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Comox",
        "sigla": "YQQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sudbury",
        "sigla": "YSB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Timmins",
        "sigla": "YTS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Victoria Inner Harbour Airport",
        "sigla": "YWH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Whistler - Green Lake Water Aerodrome",
        "sigla": "YWS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cranbrook",
        "sigla": "YXC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "North Bay",
        "sigla": "YYB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Penticton",
        "sigla": "YYF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Port Hardy",
        "sigla": "YZT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Zamboanga",
        "sigla": "ZAM",
        "pais": "Filipinas"
    },
    {
        "cidade": "Bella Bella",
        "sigla": "ZEL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Zhanjiang",
        "sigla": "ZHA",
        "pais": "China"
    },
    {
        "cidade": "Ziguinchor",
        "sigla": "ZIG",
        "pais": "Senegal"
    },
    {
        "cidade": "Osorno",
        "sigla": "ZOS",
        "pais": "Chile"
    },
    {
        "cidade": "Saint-Pierre de La R\u00e9union",
        "sigla": "ZSE",
        "pais": "Reuni\u00e3o"
    },
    {
        "cidade": "Anaa",
        "sigla": "AAA",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Arrabury",
        "sigla": "AAB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Aranuka",
        "sigla": "AAK",
        "pais": "Kiribati"
    },
    {
        "cidade": "Samarinda",
        "sigla": "AAP",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Altay",
        "sigla": "AAT",
        "pais": "China"
    },
    {
        "cidade": "Arax\u00e1",
        "sigla": "AAX",
        "pais": "Brasil"
    },
    {
        "cidade": "Al Ghaydah",
        "sigla": "AAY",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Abaiang",
        "sigla": "ABF",
        "pais": "Kiribati"
    },
    {
        "cidade": "Kabri Dar",
        "sigla": "ABK",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Ambler",
        "sigla": "ABL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Al-Baha-Al Aqiq",
        "sigla": "ABT",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Araracuara",
        "sigla": "ACR",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Achutupo",
        "sigla": "ACU",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Aldan",
        "sigla": "ADH",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Padang Sidempuan",
        "sigla": "AEG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Alexandria International , LA",
        "sigla": "AEX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Alta Floresta",
        "sigla": "AFL",
        "pais": "Brasil"
    },
    {
        "cidade": "Pittsburgh Allegheny",
        "sigla": "AGC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Agen - La Garenne",
        "sigla": "AGF",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Angoon",
        "sigla": "AGN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Agra",
        "sigla": "AGR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Acarigua",
        "sigla": "AGV",
        "pais": "Venezuela"
    },
    {
        "cidade": "Alliance",
        "sigla": "AIA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wainwright",
        "sigla": "AIN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ailinglapalap",
        "sigla": "AIP",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Aripuan\u00e3",
        "sigla": "AIR",
        "pais": "Brasil"
    },
    {
        "cidade": "Arorae",
        "sigla": "AIS",
        "pais": "Kiribati"
    },
    {
        "cidade": "Aitutaki",
        "sigla": "AIT",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Atiu",
        "sigla": "AIU",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Jouf",
        "sigla": "AJF",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Aizawl",
        "sigla": "AJL",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ankang",
        "sigla": "AKA",
        "pais": "China"
    },
    {
        "cidade": "Atka",
        "sigla": "AKB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Akiak",
        "sigla": "AKI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Asahikawa",
        "sigla": "AKJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Akhiok",
        "sigla": "AKK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Akure",
        "sigla": "AKR",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Auki Gwaunaru'U",
        "sigla": "AKS",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Aksu",
        "sigla": "AKU",
        "pais": "China"
    },
    {
        "cidade": "Sittwe",
        "sigla": "AKY",
        "pais": "Myanmar"
    },
    {
        "cidade": "Alegrete Federal",
        "sigla": "ALQ",
        "pais": "Brasil"
    },
    {
        "cidade": "Alamosa",
        "sigla": "ALS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Alitak Spb",
        "sigla": "ALZ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Arba Mintch",
        "sigla": "AMH",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Ambon",
        "sigla": "AMQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Amderma",
        "sigla": "AMV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Antalaha Antsrabato",
        "sigla": "ANM",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Andahuaylas",
        "sigla": "ANS",
        "pais": "Peru"
    },
    {
        "cidade": "Anvik",
        "sigla": "ANV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Andenes",
        "sigla": "ANX",
        "pais": "Noruega"
    },
    {
        "cidade": "Aomori",
        "sigla": "AOJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Amook",
        "sigla": "AOS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Alpena County",
        "sigla": "APN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Apartado",
        "sigla": "APO",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Apucarana",
        "sigla": "APU",
        "pais": "Brasil"
    },
    {
        "cidade": "Arapongas",
        "sigla": "APX",
        "pais": "Brasil"
    },
    {
        "cidade": "Araraquara",
        "sigla": "AQA",
        "pais": "Brasil"
    },
    {
        "cidade": "Anqing",
        "sigla": "AQG",
        "pais": "China"
    },
    {
        "cidade": "Qaisumah",
        "sigla": "AQI",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Ariquemes",
        "sigla": "AQM",
        "pais": "Brasil"
    },
    {
        "cidade": "Alor",
        "sigla": "ARD",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Watertown",
        "sigla": "ART",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ara\u00e7atuba",
        "sigla": "ARU",
        "pais": "Brasil"
    },
    {
        "cidade": "Arad",
        "sigla": "ARW",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Aracati",
        "sigla": "ARX",
        "pais": "Brasil"
    },
    {
        "cidade": "Potosi",
        "sigla": "POI",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Andros Town",
        "sigla": "ASD",
        "pais": "Bahamas"
    },
    {
        "cidade": "Georgetown Wideawake",
        "sigla": "ASI",
        "pais": "Santa Helena"
    },
    {
        "cidade": "Asosa",
        "sigla": "ASO",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Amboseli",
        "sigla": "ASV",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Huaraz",
        "sigla": "ATA",
        "pais": "Peru"
    },
    {
        "cidade": "Atoifi",
        "sigla": "ATD",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Atqasuk",
        "sigla": "ATK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Altamira",
        "sigla": "ATM",
        "pais": "Brasil"
    },
    {
        "cidade": "Atar Mouakchott",
        "sigla": "ATR",
        "pais": "Maurit\u00e2nia"
    },
    {
        "cidade": "Atmautluak",
        "sigla": "ATT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Alakanuk",
        "sigla": "AUK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Atuona",
        "sigla": "AUQ",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Aurukun",
        "sigla": "AUU",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Aragua\u00edna",
        "sigla": "AUX",
        "pais": "Brasil"
    },
    {
        "cidade": "Awassa",
        "sigla": "AWA",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Aniwa",
        "sigla": "AWD",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Arutua",
        "sigla": "AXR",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Akita",
        "sigla": "AXT",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Axum",
        "sigla": "AXU",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Ayacucho",
        "sigla": "AYP",
        "pais": "Peru"
    },
    {
        "cidade": "Yazd",
        "sigla": "AZD",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Andizhan",
        "sigla": "AZN",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Batman",
        "sigla": "BAL",
        "pais": "Turquia"
    },
    {
        "cidade": "Balalae",
        "sigla": "BAS",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Baia Mare",
        "sigla": "BAY",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Barcelos",
        "sigla": "BAZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Butaritari Antakana",
        "sigla": "BBG",
        "pais": "Kiribati"
    },
    {
        "cidade": "Bario",
        "sigla": "BBN",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Berbera",
        "sigla": "BBO",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Blue Bell Wings Field",
        "sigla": "BBX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Baracoa",
        "sigla": "BCA",
        "pais": "Cuba"
    },
    {
        "cidade": "Barcaldine",
        "sigla": "BCI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Jinka",
        "sigla": "BCO",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Bauchi",
        "sigla": "BCU",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Bandar Lengeh",
        "sigla": "BDH",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Bhadrapur Chandragri",
        "sigla": "BDP",
        "pais": "Nepal"
    },
    {
        "cidade": "Bedford - Hanscom Field",
        "sigla": "BED",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Berau",
        "sigla": "BEJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Rae Bareli",
        "sigla": "BEK",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Beni Mellal",
        "sigla": "BEM",
        "pais": "Morrocos"
    },
    {
        "cidade": "Bedourie",
        "sigla": "BEU",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Scottsbluff",
        "sigla": "BFF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Seattle - Boeing Field",
        "sigla": "BFI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bijie",
        "sigla": "BFJ",
        "pais": "China"
    },
    {
        "cidade": "Mobile",
        "sigla": "BFM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bafoussam",
        "sigla": "BFX",
        "pais": "Camar\u00f5es"
    },
    {
        "cidade": "Bing\u00f6l",
        "sigla": "BGG",
        "pais": "Turquia"
    },
    {
        "cidade": "Bag\u00e9 Comandante Kraemer",
        "sigla": "BGX",
        "pais": "Brasil"
    },
    {
        "cidade": "Bisha",
        "sigla": "BHH",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Bahia Blanca",
        "sigla": "BHI",
        "pais": "Argentina"
    },
    {
        "cidade": "Bukhara",
        "sigla": "BHK",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Bharatpur",
        "sigla": "BHR",
        "pais": "Nepal"
    },
    {
        "cidade": "Bhavnagar",
        "sigla": "BHU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Baidoa",
        "sigla": "BIB",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Block Island",
        "sigla": "BID",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "El Paso Biggs Aaf",
        "sigla": "BIF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bishop",
        "sigla": "BIH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Biak",
        "sigla": "BIK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Biratnagar",
        "sigla": "BIR",
        "pais": "Nepal"
    },
    {
        "cidade": "Bildudalur",
        "sigla": "BIU",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Oruro",
        "sigla": "ORU",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Bajawa",
        "sigla": "BJW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Bikaner",
        "sigla": "BKB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Buckland",
        "sigla": "BKC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bakalalan",
        "sigla": "BKM",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Blackall",
        "sigla": "BKQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kavumu - Bukavu - Kamenbe",
        "sigla": "BKY",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Bukoba",
        "sigla": "BKZ",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Balboa",
        "sigla": "BLB",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Bumba",
        "sigla": "BMB",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Bhamo",
        "sigla": "BMO",
        "pais": "Myanmar"
    },
    {
        "cidade": "Beaumont Municipal",
        "sigla": "BMT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bima",
        "sigla": "BMU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Buon Ma Thuot",
        "sigla": "BMV",
        "pais": "Vietname"
    },
    {
        "cidade": "Bordj Badji Mokhtar",
        "sigla": "BMW",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Belep",
        "sigla": "BMY",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Beni",
        "sigla": "BNC",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Boston Harbor Seaplane base",
        "sigla": "BNH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Barinas",
        "sigla": "BNS",
        "pais": "Venezuela"
    },
    {
        "cidade": "Barra do Gar\u00e7as",
        "sigla": "BPG",
        "pais": "Brasil"
    },
    {
        "cidade": "Boulia",
        "sigla": "BQL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Blagoveschensk",
        "sigla": "BQS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Balgo Hills",
        "sigla": "BQW",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Barreiras",
        "sigla": "BRA",
        "pais": "Brasil"
    },
    {
        "cidade": "Barreirinhas",
        "sigla": "BRB",
        "pais": "Brasil"
    },
    {
        "cidade": "Bourke",
        "sigla": "BRK",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Barquisimeto",
        "sigla": "BRM",
        "pais": "Venezuela"
    },
    {
        "cidade": "Barra North Bay",
        "sigla": "BRR",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Bosaso",
        "sigla": "BSA",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Bahia Solano",
        "sigla": "BSC",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Baoshan",
        "sigla": "BSD",
        "pais": "China"
    },
    {
        "cidade": "Bata",
        "sigla": "BSG",
        "pais": "Guin\u00e9 Equatorial"
    },
    {
        "cidade": "Basra",
        "sigla": "BSR",
        "pais": "Iraque"
    },
    {
        "cidade": "Bost",
        "sigla": "BST",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Bassein",
        "sigla": "BSX",
        "pais": "Myanmar"
    },
    {
        "cidade": "Batticaloa",
        "sigla": "BTC",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Barter Island",
        "sigla": "BTI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bettles",
        "sigla": "BTT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Buka",
        "sigla": "BUA",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Burketown",
        "sigla": "BUC",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Buenaventura, Colombia",
        "sigla": "BUN",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Bhatinda",
        "sigla": "BUP",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jakar",
        "sigla": "BUT",
        "pais": "But\u00e3o"
    },
    {
        "cidade": "Babau",
        "sigla": "BUW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Bunia",
        "sigla": "BUX",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Bushehr",
        "sigla": "BUZ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Vilhena",
        "sigla": "BVH",
        "pais": "Brasil"
    },
    {
        "cidade": "Birdsville",
        "sigla": "BVI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Breves",
        "sigla": "BVS",
        "pais": "Brasil"
    },
    {
        "cidade": "Bhairawa",
        "sigla": "BWA",
        "pais": "Nepal"
    },
    {
        "cidade": "Barrow Island",
        "sigla": "BWB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Babo",
        "sigla": "BXB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tarija",
        "sigla": "TJA",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Bayamo D Cespedes",
        "sigla": "BYM",
        "pais": "Cuba"
    },
    {
        "cidade": "Bayankhongor",
        "sigla": "BYN",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Bonanza San Pedro",
        "sigla": "BZA",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Briansk",
        "sigla": "BZK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Cascavel",
        "sigla": "CAC",
        "pais": "Brasil"
    },
    {
        "cidade": "Carauari",
        "sigla": "CAF",
        "pais": "Brasil"
    },
    {
        "cidade": "Canaima",
        "sigla": "CAJ",
        "pais": "Venezuela"
    },
    {
        "cidade": "Campbeltown Mcrihanish",
        "sigla": "CAL",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Cap Haitien",
        "sigla": "CAP",
        "pais": "Haiti"
    },
    {
        "cidade": "Caruaru",
        "sigla": "CAU",
        "pais": "Brasil"
    },
    {
        "cidade": "Campos dos Goytacazes",
        "sigla": "CAW",
        "pais": "Brasil"
    },
    {
        "cidade": "Cobar",
        "sigla": "CAZ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bechar",
        "sigla": "CBH",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Ciudad Bolivar",
        "sigla": "CBL",
        "pais": "Venezuela"
    },
    {
        "cidade": "Catumbela",
        "sigla": "CBT",
        "pais": "Angola"
    },
    {
        "cidade": "Cocos - Keeling Island",
        "sigla": "CCK",
        "pais": "Ilhas Cocos"
    },
    {
        "cidade": "Craig Cove",
        "sigla": "CCV",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Cuddapah",
        "sigla": "CDP",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Chadron",
        "sigla": "CDR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Caldwell",
        "sigla": "CDW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cherepovets",
        "sigla": "CEE",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Central",
        "sigla": "CEM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yacuiba",
        "sigla": "BYC",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Confresa",
        "sigla": "CFO",
        "pais": "Brasil"
    },
    {
        "cidade": "Changde",
        "sigla": "CGD",
        "pais": "China"
    },
    {
        "cidade": "Cleveland Cuyahoga",
        "sigla": "CGF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cape Girardeau Regional",
        "sigla": "CGI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chaoyang",
        "sigla": "CHG",
        "pais": "China"
    },
    {
        "cidade": "Chachapoyas",
        "sigla": "CHH",
        "pais": "Peru"
    },
    {
        "cidade": "Chimbote",
        "sigla": "CHM",
        "pais": "Peru"
    },
    {
        "cidade": "Chateauroux",
        "sigla": "CHR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Chuathbaluk",
        "sigla": "CHU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Changuinola",
        "sigla": "CHX",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Choiseul Bay",
        "sigla": "CHY",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Chifeng",
        "sigla": "CIF",
        "pais": "China"
    },
    {
        "cidade": "Chalkyitsik",
        "sigla": "CIK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chiclayo",
        "sigla": "CIX",
        "pais": "Peru"
    },
    {
        "cidade": "Comiso",
        "sigla": "CIY",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Coari",
        "sigla": "CIZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Cajamarca",
        "sigla": "CJA",
        "pais": "Peru"
    },
    {
        "cidade": "Crooked Creek",
        "sigla": "CKD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Corn\u00e9lio Proc\u00f3pio",
        "sigla": "CKO",
        "pais": "Brasil"
    },
    {
        "cidade": "Caraj\u00e1s",
        "sigla": "CKS",
        "pais": "Brasil"
    },
    {
        "cidade": "Chicken",
        "sigla": "CKX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Canakkale",
        "sigla": "CKZ",
        "pais": "Turquia"
    },
    {
        "cidade": "Clarks Point",
        "sigla": "CLP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Caldas Novas",
        "sigla": "CLV",
        "pais": "Brasil"
    },
    {
        "cidade": "Cunnamulla",
        "sigla": "CMA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Club Makokola",
        "sigla": "CMK",
        "pais": "Malawi"
    },
    {
        "cidade": "Kundiawa",
        "sigla": "CMU",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Camaguey Agramonte",
        "sigla": "CMW",
        "pais": "Cuba"
    },
    {
        "cidade": "Ilha Coconut",
        "sigla": "CNC",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Cloncurry",
        "sigla": "CNJ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Carlsbad",
        "sigla": "CNM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nerlerit Inaat",
        "sigla": "CNP",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Corrientes",
        "sigla": "CNQ",
        "pais": "Argentina"
    },
    {
        "cidade": "Moab - Canyonlands Field, UT",
        "sigla": "CNY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cooch Behar",
        "sigla": "COH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Choibalsan",
        "sigla": "COQ",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Columbia Regional",
        "sigla": "COU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cepu",
        "sigla": "CPF",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "St. Louis Downtown",
        "sigla": "CPS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Culebra",
        "sigla": "CPX",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Cartago Santa Ana",
        "sigla": "CRC",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Comodoro Rivadavia",
        "sigla": "CRD",
        "pais": "Argentina"
    },
    {
        "cidade": "Jacksonville Craig",
        "sigla": "CRG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Crooked Island",
        "sigla": "CRI",
        "pais": "Bahamas"
    },
    {
        "cidade": "Turkmenabat",
        "sigla": "CRZ",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Solovetsky",
        "sigla": "CSH",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Catamarca Choya",
        "sigla": "CTC",
        "pais": "Argentina"
    },
    {
        "cidade": "Cuito-Cuanavale",
        "sigla": "CTI",
        "pais": "Angola"
    },
    {
        "cidade": "Charleville",
        "sigla": "CTL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Ciudad Constitucion",
        "sigla": "CUA",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Cucuta",
        "sigla": "CUC",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Cuenca - Mariscal Lamar",
        "sigla": "CUE",
        "pais": "Equador"
    },
    {
        "cidade": "Cumana",
        "sigla": "CUM",
        "pais": "Venezuela"
    },
    {
        "cidade": "Carupano",
        "sigla": "CUP",
        "pais": "Venezuela"
    },
    {
        "cidade": "Clovis",
        "sigla": "CVN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Corvo",
        "sigla": "CVU",
        "pais": "Portugal"
    },
    {
        "cidade": "Coldfoot",
        "sigla": "CXF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vancouver - Coal Harbour Seaplane Base",
        "sigla": "CXH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Caxias do Sul",
        "sigla": "CXJ",
        "pais": "Brasil"
    },
    {
        "cidade": "Cat Cay",
        "sigla": "CXY",
        "pais": "Bahamas"
    },
    {
        "cidade": "Les Cayes",
        "sigla": "CYA",
        "pais": "Haiti"
    },
    {
        "cidade": "Caye Chapel",
        "sigla": "CYC",
        "pais": "Belize"
    },
    {
        "cidade": "Chefornak",
        "sigla": "CYF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chiayi",
        "sigla": "CYI",
        "pais": "Taiwan"
    },
    {
        "cidade": "Cheyenne, WY",
        "sigla": "CYS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cherskiy",
        "sigla": "CYX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Cauayan",
        "sigla": "CYZ",
        "pais": "Filipinas"
    },
    {
        "cidade": "Chisana",
        "sigla": "CZN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Cruzeiro do Sul",
        "sigla": "CZS",
        "pais": "Brasil"
    },
    {
        "cidade": "Datong",
        "sigla": "DAT",
        "pais": "China"
    },
    {
        "cidade": "Daru",
        "sigla": "DAU",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Dalbandin",
        "sigla": "DBA",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Dandong",
        "sigla": "DDG",
        "pais": "China"
    },
    {
        "cidade": "Debrecen",
        "sigla": "DEB",
        "pais": "Hungria"
    },
    {
        "cidade": "Dembidollo",
        "sigla": "DEM",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Dangriga",
        "sigla": "DGA",
        "pais": "Belize"
    },
    {
        "cidade": "Dhangarhi",
        "sigla": "DHI",
        "pais": "Nepal"
    },
    {
        "cidade": "Antsiranana Arrachart",
        "sigla": "DIE",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Dijon Bourgogne Longvic",
        "sigla": "DIJ",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Dickinson",
        "sigla": "DIK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dili",
        "sigla": "DIL",
        "pais": "Timor-Leste"
    },
    {
        "cidade": "Dire Dawa",
        "sigla": "DIR",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Delta Junction",
        "sigla": "DJN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dikson",
        "sigla": "DKS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Dole Tavaux",
        "sigla": "DLE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Dillons Bay",
        "sigla": "DLY",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Dalanzadgad",
        "sigla": "DLZ",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Taraz",
        "sigla": "DMB",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Miss\u00e3o de Doomadgee",
        "sigla": "DMD",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Dimapur",
        "sigla": "DMU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Dobo",
        "sigla": "DOB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Deauville St. Gatien",
        "sigla": "DOL",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Dolpa",
        "sigla": "DOP",
        "pais": "Nepal"
    },
    {
        "cidade": "Dourados",
        "sigla": "DOU",
        "pais": "Brasil"
    },
    {
        "cidade": "Deering",
        "sigla": "DRG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Del Rio International",
        "sigla": "DRT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dessie Combolcha",
        "sigla": "DSE",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Destin",
        "sigla": "DSI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Dongsheng - Ordos Ejin Horo",
        "sigla": "DSN",
        "pais": "China"
    },
    {
        "cidade": "Dundo",
        "sigla": "DUE",
        "pais": "Angola"
    },
    {
        "cidade": "Dumai Pinang Kam",
        "sigla": "DUM",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Phoenix Deer Valley",
        "sigla": "DVT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Danbury",
        "sigla": "DXR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Anadyr",
        "sigla": "DYR",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Dzezkazgan",
        "sigla": "DZN",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Emae",
        "sigla": "EAE",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Nejran",
        "sigla": "EAM",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Kearney",
        "sigla": "EAR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "El Obeid",
        "sigla": "EBD",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Edna Bay",
        "sigla": "EDA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Eek",
        "sigla": "EEK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Seghe",
        "sigla": "EGM",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "El Geneina",
        "sigla": "EGN",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Egegik",
        "sigla": "EGX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Barrancabermeja",
        "sigla": "EJA",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Wedjh",
        "sigla": "EJH",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Ilha de Elcho",
        "sigla": "ELC",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "El Fasher",
        "sigla": "ELF",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "El Golea",
        "sigla": "ELG",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Elim",
        "sigla": "ELI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gassim",
        "sigla": "ELQ",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "El Oued - Guemar",
        "sigla": "ELU",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Elfin Cove",
        "sigla": "ELV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nema",
        "sigla": "EMN",
        "pais": "Maurit\u00e2nia"
    },
    {
        "cidade": "Ende",
        "sigla": "ENE",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Enshi",
        "sigla": "ENH",
        "pais": "China"
    },
    {
        "cidade": "El Nido",
        "sigla": "ENI",
        "pais": "Filipinas"
    },
    {
        "cidade": "Yan'An",
        "sigla": "ENY",
        "pais": "China"
    },
    {
        "cidade": "Esquel",
        "sigla": "EQS",
        "pais": "Argentina"
    },
    {
        "cidade": "Erechim",
        "sigla": "ERM",
        "pais": "Brasil"
    },
    {
        "cidade": "Eirunep\u00e9",
        "sigla": "ERN",
        "pais": "Brasil"
    },
    {
        "cidade": "Eastsound",
        "sigla": "ESD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Elista",
        "sigla": "ESL",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Eua Kaufana",
        "sigla": "EUA",
        "pais": "Tonga"
    },
    {
        "cidade": "St. Eustatius Rooseveld",
        "sigla": "EUX",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "New Bedford",
        "sigla": "EWB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ewer",
        "sigla": "EWE",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Excursion Inlet",
        "sigla": "EXI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yopal",
        "sigla": "EYP",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Farah",
        "sigla": "FAH",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Faizabad",
        "sigla": "FBD",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Francisco Beltr\u00e3o",
        "sigla": "FBE",
        "pais": "Brasil"
    },
    {
        "cidade": "Fresno Fresno - Chandler",
        "sigla": "FCH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Minneapolis Flying Cloud",
        "sigla": "FCM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Forde Oyrane",
        "sigla": "FDE",
        "pais": "Noruega"
    },
    {
        "cidade": "Apia Fagali I",
        "sigla": "FGI",
        "pais": "Samoa"
    },
    {
        "cidade": "Fangatau",
        "sigla": "FGU",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Fak-Fak",
        "sigla": "FKQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Fukushima",
        "sigla": "FKS",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Formosa",
        "sigla": "FMA",
        "pais": "Argentina"
    },
    {
        "cidade": "Kalemie",
        "sigla": "FMI",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Topeka Forbes",
        "sigla": "FOE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Friday Harbor",
        "sigla": "FRD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fera Island",
        "sigla": "FRE",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Futuna Island",
        "sigla": "FTA",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Fitiuta",
        "sigla": "FTI",
        "pais": "Samoa Americana"
    },
    {
        "cidade": "Tolanaro",
        "sigla": "FTU",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Atlanta Fulton County",
        "sigla": "FTY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fukue",
        "sigla": "FUJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Funafuti Atoll",
        "sigla": "FUN",
        "pais": "Tuvalu"
    },
    {
        "cidade": "Ft. Lauderdale Executive",
        "sigla": "FXE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Fuyun",
        "sigla": "FYN",
        "pais": "China"
    },
    {
        "cidade": "Faya",
        "sigla": "FYT",
        "pais": "Chade"
    },
    {
        "cidade": "Gabes",
        "sigla": "GAE",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Yamagata Junmachi",
        "sigla": "GAJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Gao",
        "sigla": "GAQ",
        "pais": "Mali"
    },
    {
        "cidade": "Garissa",
        "sigla": "GAS",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Gamba",
        "sigla": "GAX",
        "pais": "Gab\u00e3o"
    },
    {
        "cidade": "Gabala",
        "sigla": "GBB",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "Marie Galante Les Bases",
        "sigla": "GBJ",
        "pais": "Guadalupe"
    },
    {
        "cidade": "Garden City Regional",
        "sigla": "GCK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gode",
        "sigla": "GDE",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Grand Turk International",
        "sigla": "GDT",
        "pais": "Ilhas Turks e Caicos"
    },
    {
        "cidade": "Magadan",
        "sigla": "GDX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Gelendzik",
        "sigla": "GDZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Noumea Magenta",
        "sigla": "GEA",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Santo \u00c2ngelo Sep\u00e9 Tiaraju",
        "sigla": "GEL",
        "pais": "Brasil"
    },
    {
        "cidade": "Nueva Gerona",
        "sigla": "GER",
        "pais": "Cuba"
    },
    {
        "cidade": "Grafton",
        "sigla": "GFN",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Garoe",
        "sigla": "GGR",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Ghardaia-Noumerate",
        "sigla": "GHA",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Great Harbour Cay",
        "sigla": "GHC",
        "pais": "Bahamas"
    },
    {
        "cidade": "Gizan",
        "sigla": "GIZ",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Guanaja Island",
        "sigla": "GJA",
        "pais": "Honduras"
    },
    {
        "cidade": "Gjogur",
        "sigla": "GJR",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Goroka",
        "sigla": "GKA",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Golfito",
        "sigla": "GLF",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Galcaio",
        "sigla": "GLK",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Goulimime",
        "sigla": "GLN",
        "pais": "Morrocos"
    },
    {
        "cidade": "Golovin",
        "sigla": "GLV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Galela",
        "sigla": "GLX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Gemena",
        "sigla": "GMA",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Gambela",
        "sigla": "GMB",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Gomel",
        "sigla": "GME",
        "pais": "Bielor\u00fassia"
    },
    {
        "cidade": "Gambier Is.",
        "sigla": "GMR",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Hrodna",
        "sigla": "GNA",
        "pais": "Bielor\u00fassia"
    },
    {
        "cidade": "Guanambi",
        "sigla": "GNM",
        "pais": "Brasil"
    },
    {
        "cidade": "Gunungsitoli",
        "sigla": "GNS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Goodnews Bay",
        "sigla": "GNU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Goba",
        "sigla": "GOB",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Goma",
        "sigla": "GOM",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Gorakhpur",
        "sigla": "GOP",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Guarapuava Tt Faria",
        "sigla": "GPB",
        "pais": "Brasil"
    },
    {
        "cidade": "Grand Island - Nebrasca Central",
        "sigla": "GRI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Groninga - Eelde",
        "sigla": "GRQ",
        "pais": "Pa\u00edses Baixos"
    },
    {
        "cidade": "Grozny",
        "sigla": "GRV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Graciosa",
        "sigla": "GRW",
        "pais": "Portugal"
    },
    {
        "cidade": "Gustavus",
        "sigla": "GST",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gorontalo",
        "sigla": "GTO",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Columbus - Golden Triangle Regional, MS",
        "sigla": "GTR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Granites",
        "sigla": "GTS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Guerrero Negro",
        "sigla": "GUB",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Gualaco",
        "sigla": "GUO",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Gallup",
        "sigla": "GUP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Alotau Gurney",
        "sigla": "GUR",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Gwalior",
        "sigla": "GWL",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Seiyun",
        "sigla": "GXF",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Guaymas",
        "sigla": "GYM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Gary International",
        "sigla": "GYY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gizo",
        "sigla": "GZO",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Hasvik",
        "sigla": "HAA",
        "pais": "Noruega"
    },
    {
        "cidade": "Hail",
        "sigla": "HAS",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Halls Creek",
        "sigla": "HCQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Holy Cross",
        "sigla": "HCR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hamadan",
        "sigla": "HDM",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Heho",
        "sigla": "HEH",
        "pais": "Myanmar"
    },
    {
        "cidade": "Heihe",
        "sigla": "HEK",
        "pais": "China"
    },
    {
        "cidade": "Hartford - Brainard, CT",
        "sigla": "HFD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hofn Hornafjorur",
        "sigla": "HFN",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Hagfors",
        "sigla": "HFS",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Hughenden",
        "sigla": "HGD",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Mae Hong Son",
        "sigla": "HGN",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Hagerstown",
        "sigla": "HGR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mount Hagen",
        "sigla": "HGU",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Hua Hin",
        "sigla": "HHQ",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Hawthorne",
        "sigla": "HHR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hikueru",
        "sigla": "HHZ",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Horn Island",
        "sigla": "HID",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Chinju Sacheon",
        "sigla": "HIN",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Hokitika",
        "sigla": "HKK",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Hoskins",
        "sigla": "HKN",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Khanty - Mansiysk",
        "sigla": "HMA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Hami",
        "sigla": "HMI",
        "pais": "China"
    },
    {
        "cidade": "Morioka Hanamaki",
        "sigla": "HNA",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Hana",
        "sigla": "HNM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hengyang",
        "sigla": "HNY",
        "pais": "China"
    },
    {
        "cidade": "Hobbs Lea County",
        "sigla": "HOB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hodeidah",
        "sigla": "HOD",
        "pais": "I\u00e9men"
    },
    {
        "cidade": "Houeisay",
        "sigla": "HOE",
        "pais": "Laos"
    },
    {
        "cidade": "Hofuf-Al Ahsa",
        "sigla": "HOF",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Hao Island",
        "sigla": "HOI",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Hot Springs",
        "sigla": "HOT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Homalin",
        "sigla": "HOX",
        "pais": "Myanmar"
    },
    {
        "cidade": "Ha'Apai Pilolevu",
        "sigla": "HPA",
        "pais": "Tonga"
    },
    {
        "cidade": "Hooper Bay",
        "sigla": "HPB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hassi R'Mel - Tilrempt",
        "sigla": "HRM",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Harrison",
        "sigla": "HRO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Shaoguan",
        "sigla": "HSC",
        "pais": "China"
    },
    {
        "cidade": "Hot Springs",
        "sigla": "HSP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hotan",
        "sigla": "HTN",
        "pais": "China"
    },
    {
        "cidade": "East Hampton",
        "sigla": "HTO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Humera",
        "sigla": "HUE",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Hualien",
        "sigla": "HUN",
        "pais": "Taiwan"
    },
    {
        "cidade": "Huanuco",
        "sigla": "HUU",
        "pais": "Peru"
    },
    {
        "cidade": "Khovd",
        "sigla": "HVD",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Hollis",
        "sigla": "HYL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hays, KS",
        "sigla": "HYS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Hanzhong",
        "sigla": "HZG",
        "pais": "China"
    },
    {
        "cidade": "Husavik",
        "sigla": "HZK",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Igarka",
        "sigla": "IAA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "In Amenas",
        "sigla": "IAM",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Kiana",
        "sigla": "IAN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yaroslavl",
        "sigla": "IAR",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ibadan",
        "sigla": "IBA",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Ibague",
        "sigla": "IBE",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Cicia",
        "sigla": "ICI",
        "pais": "Fiji"
    },
    {
        "cidade": "Sicogon Island",
        "sigla": "ICO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Indore",
        "sigla": "IDR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Isafjordur",
        "sigla": "IFJ",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Igiugig",
        "sigla": "IGG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kingman",
        "sigla": "IGM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ijevsk",
        "sigla": "IJK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Iki",
        "sigla": "IKI",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Nikolski",
        "sigla": "IKO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tiksi",
        "sigla": "IKS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Wilmington",
        "sigla": "ILG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wilmington",
        "sigla": "ILN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ilorin",
        "sigla": "ILR",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Kilaguni",
        "sigla": "ILU",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Islay - Glenegedale",
        "sigla": "ILY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Simikot",
        "sigla": "IMK",
        "pais": "Nepal"
    },
    {
        "cidade": "Imperatriz",
        "sigla": "IMP",
        "pais": "Brasil"
    },
    {
        "cidade": "Iron Mountain",
        "sigla": "IMT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Inta",
        "sigla": "INA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Independence",
        "sigla": "INB",
        "pais": "Belize"
    },
    {
        "cidade": "In Guezzam",
        "sigla": "INF",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "In Salah",
        "sigla": "INZ",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Ipiales San Luis",
        "sigla": "IPI",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Qiemo",
        "sigla": "IQM",
        "pais": "China"
    },
    {
        "cidade": "Qingyang",
        "sigla": "IQN",
        "pais": "China"
    },
    {
        "cidade": "Kirakira",
        "sigla": "IRA",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Circle",
        "sigla": "IRC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Iringa Nduli",
        "sigla": "IRI",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "La Rioja",
        "sigla": "IRJ",
        "pais": "Argentina"
    },
    {
        "cidade": "Kirksville Regional",
        "sigla": "IRK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Isiro Matari",
        "sigla": "IRP",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Ishigaki",
        "sigla": "ISG",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Williston - Sloulin Field",
        "sigla": "ISN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Itaituba",
        "sigla": "ITB",
        "pais": "Brasil"
    },
    {
        "cidade": "Niue Island",
        "sigla": "IUE",
        "pais": "Niue"
    },
    {
        "cidade": "Ivanova",
        "sigla": "IWA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ironwood, MI",
        "sigla": "IWD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Agartala",
        "sigla": "IXA",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Allahabad",
        "sigla": "IXD",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Lilabari",
        "sigla": "IXI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Keshod",
        "sigla": "IXK",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Silchar",
        "sigla": "IXS",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Passighat",
        "sigla": "IXT",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Kandla",
        "sigla": "IXY",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Izumo",
        "sigla": "IZO",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Ixtepec",
        "sigla": "IZT",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Jaffna",
        "sigla": "JAF",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Jauja",
        "sigla": "JAU",
        "pais": "Peru"
    },
    {
        "cidade": "Ilulissat",
        "sigla": "JAV",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Jonesboro",
        "sigla": "JBR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Christianshab",
        "sigla": "JCH",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Julia Creek",
        "sigla": "JCK",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Juiz de Fora - Francisco Alvares de Assis",
        "sigla": "JDF",
        "pais": "Brasil"
    },
    {
        "cidade": "Juazeiro do Norte",
        "sigla": "JDO",
        "pais": "Brasil"
    },
    {
        "cidade": "Jeremie",
        "sigla": "JEE",
        "pais": "Haiti"
    },
    {
        "cidade": "Aasiaat",
        "sigla": "JEG",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Paamiut",
        "sigla": "JFR",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Jamnagar",
        "sigla": "JGA",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jagdalpur",
        "sigla": "JGB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Godhavn",
        "sigla": "JGO",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Ju\u00edna",
        "sigla": "JIA",
        "pais": "Brasil"
    },
    {
        "cidade": "Jimma",
        "sigla": "JIM",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Julianehab",
        "sigla": "JJU",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Janakpur",
        "sigla": "JKR",
        "pais": "Nepal"
    },
    {
        "cidade": "Jomsom",
        "sigla": "JMO",
        "pais": "Nepal"
    },
    {
        "cidade": "Nanortalik",
        "sigla": "JNN",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Narsaq Hlpt",
        "sigla": "JNS",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Joinville - Lauro Carneiro de Loyola",
        "sigla": "JOI",
        "pais": "Brasil"
    },
    {
        "cidade": "Joshkar - Ola",
        "sigla": "JOK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Jos",
        "sigla": "JOS",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Ji-Paran\u00e1",
        "sigla": "JPR",
        "pais": "Brasil"
    },
    {
        "cidade": "Jaque",
        "sigla": "JQE",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Jorhat",
        "sigla": "JRH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Arsuk Hlpt",
        "sigla": "JRK",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Jessore",
        "sigla": "JSR",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Maniitsoq",
        "sigla": "JSU",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Juba",
        "sigla": "JUB",
        "pais": "Sud\u00e3o do Sul"
    },
    {
        "cidade": "Jujuy",
        "sigla": "JUJ",
        "pais": "Argentina"
    },
    {
        "cidade": "Jumla",
        "sigla": "JUM",
        "pais": "Nepal"
    },
    {
        "cidade": "Kariba",
        "sigla": "KAB",
        "pais": "Zimbabwe"
    },
    {
        "cidade": "Kaduna",
        "sigla": "KAD",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Kake",
        "sigla": "KAE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kapanga",
        "sigla": "KAP",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Kawthaung",
        "sigla": "KAW",
        "pais": "Myanmar"
    },
    {
        "cidade": "Kalbarri",
        "sigla": "KAX",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kao",
        "sigla": "KAZ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Birch Creek",
        "sigla": "KBC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kaben",
        "sigla": "KBT",
        "pais": "Ilhas Marshall"
    },
    {
        "cidade": "Kuqa Qiuci",
        "sigla": "KCA",
        "pais": "China"
    },
    {
        "cidade": "Chignik Fisheries",
        "sigla": "KCG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kirensk",
        "sigla": "KCK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Chignik Lagoon",
        "sigla": "KCL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Chignik Chignik Lk",
        "sigla": "KCQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kolda",
        "sigla": "KDA",
        "pais": "Senegal"
    },
    {
        "cidade": "Kandahar",
        "sigla": "KDH",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Kendari",
        "sigla": "KDI",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "K\u00e4rdla",
        "sigla": "KDL",
        "pais": "Est\u00f3nia"
    },
    {
        "cidade": "Kadavu",
        "sigla": "KDV",
        "pais": "Fiji"
    },
    {
        "cidade": "Seattle / Tacoma Kenmore",
        "sigla": "KEH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ekwok",
        "sigla": "KEK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Odienne",
        "sigla": "KEO",
        "pais": "Costa do Marfim"
    },
    {
        "cidade": "Nepalganj",
        "sigla": "KEP",
        "pais": "Nepal"
    },
    {
        "cidade": "Kerman",
        "sigla": "KER",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Kengtung",
        "sigla": "KET",
        "pais": "Myanmar"
    },
    {
        "cidade": "False Pass",
        "sigla": "KFP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kananga",
        "sigla": "KGA",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Koliganek",
        "sigla": "KGK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Grayling",
        "sigla": "KGX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kherson",
        "sigla": "KHE",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Kashgar - Kashi",
        "sigla": "KHG",
        "pais": "China"
    },
    {
        "cidade": "Khark",
        "sigla": "KHK",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Khamti",
        "sigla": "KHM",
        "pais": "Myanmar"
    },
    {
        "cidade": "Khasab",
        "sigla": "KHS",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Khost",
        "sigla": "KHT",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Kieta Aropa",
        "sigla": "KIE",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Kingfisher Lake",
        "sigla": "KIF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kish Island",
        "sigla": "KIH",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Kilwa",
        "sigla": "KIY",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Koyuk",
        "sigla": "KKA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kitoi",
        "sigla": "KKB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kongiganak",
        "sigla": "KKH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Akiachak",
        "sigla": "KKI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kita Kyushu",
        "sigla": "KKJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kikaiga Shima",
        "sigla": "KKX",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kalabo",
        "sigla": "KLB",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "Kaluga",
        "sigla": "KLF",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Kalskag",
        "sigla": "KLG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kolhapur",
        "sigla": "KLH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Levelock",
        "sigla": "KLL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Larsen Bay",
        "sigla": "KLN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kamembe",
        "sigla": "KME",
        "pais": "Ruanda"
    },
    {
        "cidade": "Miyazaki",
        "sigla": "KMI",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Manokotak",
        "sigla": "KMO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kumasi",
        "sigla": "KMS",
        "pais": "Gana"
    },
    {
        "cidade": "Kismayu",
        "sigla": "KMU",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Kalemyo",
        "sigla": "KMV",
        "pais": "Myanmar"
    },
    {
        "cidade": "Kindu",
        "sigla": "KND",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Kaimana",
        "sigla": "KNG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Kinmen Shang Yi",
        "sigla": "KNH",
        "pais": "Taiwan"
    },
    {
        "cidade": "Kokhanok",
        "sigla": "KNK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Medan - Kuala Namu",
        "sigla": "KNO",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Kone",
        "sigla": "KNQ",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Kanpur",
        "sigla": "KNU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "New Stuyahok",
        "sigla": "KNW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Koumac",
        "sigla": "KOC",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Kokchetav",
        "sigla": "KOV",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Olga Bay",
        "sigla": "KOY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ouzinkie",
        "sigla": "KOZ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Point Baker",
        "sigla": "KPB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kipnuk",
        "sigla": "KPN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pohang",
        "sigla": "KPO",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Port Williams",
        "sigla": "KPR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Perryvilleo",
        "sigla": "KPV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Port Bailey",
        "sigla": "KPY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Akutan",
        "sigla": "KQA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Korla",
        "sigla": "KRL",
        "pais": "China"
    },
    {
        "cidade": "Kurgan",
        "sigla": "KRO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Turkmenbashi",
        "sigla": "KRW",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Karamay",
        "sigla": "KRY",
        "pais": "China"
    },
    {
        "cidade": "Kosrae",
        "sigla": "KSA",
        "pais": "Estados Federados da Micron\u00e9sia"
    },
    {
        "cidade": "Kasese",
        "sigla": "KSE",
        "pais": "Uganda"
    },
    {
        "cidade": "Kermanshah",
        "sigla": "KSH",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Karshi",
        "sigla": "KSQ",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Kotlas",
        "sigla": "KSZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Kita-Daito",
        "sigla": "KTD",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kerteh",
        "sigla": "KTE",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Ketapang",
        "sigla": "KTG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Kitale",
        "sigla": "KTL",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Brevig Mission",
        "sigla": "KTS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kudat",
        "sigla": "KUD",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Kubin Island",
        "sigla": "KUG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Kasigluk",
        "sigla": "KUK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yaku Shima",
        "sigla": "KUM",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kulusuk",
        "sigla": "KUS",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Kunsan",
        "sigla": "KUV",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "King Cove",
        "sigla": "KVC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kavieng",
        "sigla": "KVG",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Kirovsk",
        "sigla": "KVK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Kivalina",
        "sigla": "KVL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kirov",
        "sigla": "KVX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Kwajalein",
        "sigla": "KWA",
        "pais": "Ilhas Marshall"
    },
    {
        "cidade": "Waterfall",
        "sigla": "KWF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gwangju",
        "sigla": "KWJ",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Kwigillingok",
        "sigla": "KWK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Quinhagak Kwinhagak",
        "sigla": "KWN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "West Point",
        "sigla": "KWP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kwethluk",
        "sigla": "KWT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kolwezi",
        "sigla": "KWZ",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Kasaan",
        "sigla": "KXA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Koro",
        "sigla": "KXF",
        "pais": "Fiji"
    },
    {
        "cidade": "Komsomolsk do Amur",
        "sigla": "KXK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Karluk",
        "sigla": "KYK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kyaukpyu",
        "sigla": "KYP",
        "pais": "Myanmar"
    },
    {
        "cidade": "Koyukuk",
        "sigla": "KYU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kyzyl",
        "sigla": "KYZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Zachar Bay",
        "sigla": "KZB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Labuha",
        "sigla": "LAH",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Lages",
        "sigla": "LAJ",
        "pais": "Brasil"
    },
    {
        "cidade": "Aklavik",
        "sigla": "LAK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Beida Labraq",
        "sigla": "LAQ",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Khudzhand",
        "sigla": "LBD",
        "pais": "Tajiquist\u00e3o"
    },
    {
        "cidade": "North Platte",
        "sigla": "LBF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Labuan Bajo",
        "sigla": "LBJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Liberal",
        "sigla": "LBL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "L\u00e1brea",
        "sigla": "LBR",
        "pais": "Brasil"
    },
    {
        "cidade": "Labasa",
        "sigla": "LBS",
        "pais": "Fiji"
    },
    {
        "cidade": "Rickenbacker",
        "sigla": "LCK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lahad Datu",
        "sigla": "LDU",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Saint-Laurent du Maroni",
        "sigla": "LDX",
        "pais": "Guiana Francesa"
    },
    {
        "cidade": "Londolozi",
        "sigla": "LDZ",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Seo De Urgell",
        "sigla": "LEU",
        "pais": "Espanha"
    },
    {
        "cidade": "La Fria",
        "sigla": "LFR",
        "pais": "Venezuela"
    },
    {
        "cidade": "Long Lellang",
        "sigla": "LGL",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Lago Agrio",
        "sigla": "LGQ",
        "pais": "Equador"
    },
    {
        "cidade": "Malargue",
        "sigla": "LGS",
        "pais": "Argentina"
    },
    {
        "cidade": "Lightning Ridge",
        "sigla": "LHG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Limon",
        "sigla": "LIO",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Loikaw",
        "sigla": "LIW",
        "pais": "Myanmar"
    },
    {
        "cidade": "Lodja",
        "sigla": "LJA",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Larantuka",
        "sigla": "LKA",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Lakeba",
        "sigla": "LKB",
        "pais": "Fiji"
    },
    {
        "cidade": "Seattle - Tacoma Lake Union",
        "sigla": "LKE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Leknes",
        "sigla": "LKN",
        "pais": "Noruega"
    },
    {
        "cidade": "Lake Manyara",
        "sigla": "LKY",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Lalibela",
        "sigla": "LLI",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Long Lama",
        "sigla": "LLM",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "La Macarena",
        "sigla": "LMC",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Limbang",
        "sigla": "LMN",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Lamen Bay",
        "sigla": "LNB",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Lonorore",
        "sigla": "LNE",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Londolovit",
        "sigla": "LNV",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Loei",
        "sigla": "LOE",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Loja",
        "sigla": "LOH",
        "pais": "Equador"
    },
    {
        "cidade": "Lodwar",
        "sigla": "LOK",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Laghouat L'Mekrareg",
        "sigla": "LOO",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Loyangalani",
        "sigla": "LOY",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Lipetsk",
        "sigla": "LPK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Lamap",
        "sigla": "LPM",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Lopez Island",
        "sigla": "LPS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Liepaja",
        "sigla": "LPX",
        "pais": "Let\u00f3nia"
    },
    {
        "cidade": "Puerto Leguizam",
        "sigla": "LQM",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Las Cruces",
        "sigla": "LRU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Los Roques",
        "sigla": "LRV",
        "pais": "Venezuela"
    },
    {
        "cidade": "Losuia",
        "sigla": "LSA",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Lashio",
        "sigla": "LSH",
        "pais": "Myanmar"
    },
    {
        "cidade": "Las Piedras - Punto Fijo",
        "sigla": "LSP",
        "pais": "Venezuela"
    },
    {
        "cidade": "Lhokseumawe",
        "sigla": "LSW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Altai",
        "sigla": "LTI",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Lataquia",
        "sigla": "LTK",
        "pais": "S\u00edria"
    },
    {
        "cidade": "Lukla",
        "sigla": "LUA",
        "pais": "Nepal"
    },
    {
        "cidade": "Cincinnati Lunken Field",
        "sigla": "LUK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Luxi Mangshi",
        "sigla": "LUM",
        "pais": "China"
    },
    {
        "cidade": "Luena",
        "sigla": "LUO",
        "pais": "Angola"
    },
    {
        "cidade": "Kalaupapa",
        "sigla": "LUP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Luis",
        "sigla": "LUQ",
        "pais": "Argentina"
    },
    {
        "cidade": "Cape Lisburne",
        "sigla": "LUR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Langgur - Dumatubun",
        "sigla": "LUV",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Luwuk",
        "sigla": "LUW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Lublin",
        "sigla": "LUZ",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Lewoleba",
        "sigla": "LWE",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Gyumri",
        "sigla": "LWN",
        "pais": "Arm\u00e9nia"
    },
    {
        "cidade": "Lawas",
        "sigla": "LWY",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Luang Namtha",
        "sigla": "LXG",
        "pais": "Laos"
    },
    {
        "cidade": "Little Cayman",
        "sigla": "LYB",
        "pais": "Ilhas Caim\u00e3o"
    },
    {
        "cidade": "Luzhou",
        "sigla": "LZO",
        "pais": "China"
    },
    {
        "cidade": "Marab\u00e1",
        "sigla": "MAB",
        "pais": "Brasil"
    },
    {
        "cidade": "Madang",
        "sigla": "MAG",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Majuro",
        "sigla": "MAJ",
        "pais": "Ilhas Marshall"
    },
    {
        "cidade": "Malakal",
        "sigla": "MAK",
        "pais": "Sud\u00e3o do Sul"
    },
    {
        "cidade": "Monbetsu",
        "sigla": "MBE",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Mbeya",
        "sigla": "MBI",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Manistee",
        "sigla": "MBL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mbarara",
        "sigla": "MBQ",
        "pais": "Uganda"
    },
    {
        "cidade": "Mau\u00e9s",
        "sigla": "MBZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Mc Cook",
        "sigla": "MCK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Makurdi",
        "sigla": "MDI",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Mbandaka",
        "sigla": "MDK",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Mandalay",
        "sigla": "MDL",
        "pais": "Myanmar"
    },
    {
        "cidade": "Mendi",
        "sigla": "MDU",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Maca\u00e9",
        "sigla": "MEA",
        "pais": "Brasil"
    },
    {
        "cidade": "Melbourne Essendon",
        "sigla": "MEB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Mehamn",
        "sigla": "MEH",
        "pais": "Noruega"
    },
    {
        "cidade": "Monte Dourado",
        "sigla": "MEU",
        "pais": "Brasil"
    },
    {
        "cidade": "Mafia Island",
        "sigla": "MFA",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Mangaia",
        "sigla": "MGS",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Millingimbi",
        "sigla": "MGT",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Myeik",
        "sigla": "MGZ",
        "pais": "Myanmar"
    },
    {
        "cidade": "Manihiki",
        "sigla": "MHX",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Misima",
        "sigla": "MIS",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Maiduguri",
        "sigla": "MIU",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Mosjoen - Kjaerstad",
        "sigla": "MJF",
        "pais": "Noruega"
    },
    {
        "cidade": "Mbuji-Mayi",
        "sigla": "MJM",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Mamuju",
        "sigla": "MJU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Mirny",
        "sigla": "MJZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Kansas City Downtown",
        "sigla": "MKC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mukah",
        "sigla": "MKM",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Makemo",
        "sigla": "MKP",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Manokwari - Rendani",
        "sigla": "MKW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Malacca Berendum",
        "sigla": "MKZ",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Malad City",
        "sigla": "MLD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Marshall",
        "sigla": "MLL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Manley Hot Spgs.",
        "sigla": "MLY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Memanbetsu",
        "sigla": "MMB",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Minami Daito Jima",
        "sigla": "MMD",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Mammoth Lakes",
        "sigla": "MMH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Matsumoto",
        "sigla": "MMJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Maio",
        "sigla": "MMO",
        "pais": "Cabo Verde"
    },
    {
        "cidade": "Maimana",
        "sigla": "MMZ",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Melanguane",
        "sigla": "MNA",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Moanda",
        "sigla": "MNB",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Nacala",
        "sigla": "MNC",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Maningrida",
        "sigla": "MNG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Montserrat",
        "sigla": "MNI",
        "pais": "Montserrat"
    },
    {
        "cidade": "Maiana",
        "sigla": "MNK",
        "pais": "Kiribati"
    },
    {
        "cidade": "Minto",
        "sigla": "MNT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Maulmyine",
        "sigla": "MNU",
        "pais": "Myanmar"
    },
    {
        "cidade": "Manicor\u00e9",
        "sigla": "MNX",
        "pais": "Brasil"
    },
    {
        "cidade": "Mono Is.",
        "sigla": "MNY",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Moa Orestes A.",
        "sigla": "MOA",
        "pais": "Cuba"
    },
    {
        "cidade": "Montes Claros",
        "sigla": "MOC",
        "pais": "Brasil"
    },
    {
        "cidade": "Maumere",
        "sigla": "MOF",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Monghsat",
        "sigla": "MOG",
        "pais": "Myanmar"
    },
    {
        "cidade": "Mitiaro",
        "sigla": "MOI",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Molde Aro",
        "sigla": "MOL",
        "pais": "Noruega"
    },
    {
        "cidade": "Moomba",
        "sigla": "MOO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Morondava",
        "sigla": "MOQ",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Maripasoula",
        "sigla": "MPY",
        "pais": "Guiana Francesa"
    },
    {
        "cidade": "Mo I Rana Rossvoll",
        "sigla": "MQN",
        "pais": "Noruega"
    },
    {
        "cidade": "Makale",
        "sigla": "MQX",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Misrata",
        "sigla": "MRA",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Merida, Venezuela",
        "sigla": "MRD",
        "pais": "Venezuela"
    },
    {
        "cidade": "Mara Lodges",
        "sigla": "MRE",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Anchorage Merrill",
        "sigla": "MRI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mahshahr",
        "sigla": "MRX",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Mesa Falcon Fld",
        "sigla": "MSC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Masirah Raf Stn.",
        "sigla": "MSH",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Misawa",
        "sigla": "MSJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Massena",
        "sigla": "MSS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Namibe",
        "sigla": "MSZ",
        "pais": "Angola"
    },
    {
        "cidade": "Monte Alegre",
        "sigla": "MTE",
        "pais": "Brasil"
    },
    {
        "cidade": "Makin",
        "sigla": "MTK",
        "pais": "Kiribati"
    },
    {
        "cidade": "Montauk Point",
        "sigla": "MTP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Monteria - Los Garzones",
        "sigla": "MTR",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Mota Lava",
        "sigla": "MTV",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Munda",
        "sigla": "MUA",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Mauke",
        "sigla": "MUK",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Mascara Ghriss",
        "sigla": "MUW",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Musoma",
        "sigla": "MUZ",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Mossoro",
        "sigla": "MVF",
        "pais": "Brasil"
    },
    {
        "cidade": "Stowe Morrisvile",
        "sigla": "MVL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mataiva",
        "sigla": "MVT",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Marion",
        "sigla": "MWA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Maewo - Naone",
        "sigla": "MWF",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Matak",
        "sigla": "MWK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Magwe",
        "sigla": "MWQ",
        "pais": "Myanmar"
    },
    {
        "cidade": "Muan",
        "sigla": "MWX",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Moro",
        "sigla": "MXH",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Moron",
        "sigla": "MXV",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Meixian",
        "sigla": "MXZ",
        "pais": "China"
    },
    {
        "cidade": "Moruya",
        "sigla": "MYA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Maracay",
        "sigla": "MYC",
        "pais": "Venezuela"
    },
    {
        "cidade": "San Diego Montgomery",
        "sigla": "MYF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mayaguana",
        "sigla": "MYG",
        "pais": "Bahamas"
    },
    {
        "cidade": "Mary - Turcomenist\u00e3o",
        "sigla": "MYP",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Mysore",
        "sigla": "MYQ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Myitkyina",
        "sigla": "MYT",
        "pais": "Myanmar"
    },
    {
        "cidade": "Mekoryuk",
        "sigla": "MYU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mtwara",
        "sigla": "MYW",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Muzaffarnagar",
        "sigla": "MZA",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Merzifon",
        "sigla": "MZH",
        "pais": "Turquia"
    },
    {
        "cidade": "Mopti",
        "sigla": "MZI",
        "pais": "Mali"
    },
    {
        "cidade": "Marakei",
        "sigla": "MZK",
        "pais": "Kiribati"
    },
    {
        "cidade": "Manizales - Santaguida",
        "sigla": "MZL",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Manzanillo S. Maestra",
        "sigla": "MZO",
        "pais": "Cuba"
    },
    {
        "cidade": "Mazar-I-Sharif",
        "sigla": "MZR",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Tahuna - Naha",
        "sigla": "NAH",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Nakhon Ratchasima",
        "sigla": "NAK",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Nalchik",
        "sigla": "NAL",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Namlea",
        "sigla": "NAM",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Nanchong",
        "sigla": "NAO",
        "pais": "China"
    },
    {
        "cidade": "Ilha de Napuka",
        "sigla": "NAU",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Nabire",
        "sigla": "NBX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Nanded",
        "sigla": "NDC",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Sanday",
        "sigla": "NDY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Neryungri",
        "sigla": "NER",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Niuafo'Ou Mata'Aho",
        "sigla": "NFO",
        "pais": "Tonga"
    },
    {
        "cidade": "Anegada",
        "sigla": "NGD",
        "pais": "Ilhas V\u00edrgens Brit\u00e2nicas"
    },
    {
        "cidade": "Nuku Hiva",
        "sigla": "NHV",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Nikolai",
        "sigla": "NIB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nikunau",
        "sigla": "NIG",
        "pais": "Kiribati"
    },
    {
        "cidade": "Naukiti",
        "sigla": "NKI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Darnley Island",
        "sigla": "NLF",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Nelson Lagoon",
        "sigla": "NLG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Kinshasa N'Dolo",
        "sigla": "NLO",
        "pais": "Rep\u00fablica Democr\u00e1tica do Congo"
    },
    {
        "cidade": "Nikolaev",
        "sigla": "NLV",
        "pais": "Ucr\u00e2nia"
    },
    {
        "cidade": "Namangan",
        "sigla": "NMA",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Nightmute",
        "sigla": "NME",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Santa Ana",
        "sigla": "NNB",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Nondalton",
        "sigla": "NNL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nunukan",
        "sigla": "NNX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Nanyang - Jiangying",
        "sigla": "NNY",
        "pais": "China"
    },
    {
        "cidade": "Nonouti",
        "sigla": "NON",
        "pais": "Kiribati"
    },
    {
        "cidade": "Huambo Nova Lisboa",
        "sigla": "NOV",
        "pais": "Angola"
    },
    {
        "cidade": "Newport",
        "sigla": "NPT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Neuquen",
        "sigla": "NQN",
        "pais": "Argentina"
    },
    {
        "cidade": "Nuqui",
        "sigla": "NQU",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "North Ronaldsay",
        "sigla": "NRL",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Nowshahr",
        "sigla": "NSH",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Normanton",
        "sigla": "NTN",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Niuatoputapu Lavenia",
        "sigla": "NTT",
        "pais": "Tonga"
    },
    {
        "cidade": "Natuna-Ranai",
        "sigla": "NTX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Nuiqsut",
        "sigla": "NUI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Nukutavake",
        "sigla": "NUK",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Nunapitchuk",
        "sigla": "NUP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Norsup",
        "sigla": "NUS",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Neiva",
        "sigla": "NVA",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Moheli",
        "sigla": "NWA",
        "pais": "Comores"
    },
    {
        "cidade": "Sunyani",
        "sigla": "NYI",
        "pais": "Gana"
    },
    {
        "cidade": "Nanyuki",
        "sigla": "NYK",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "\u00d3bidos",
        "sigla": "OBI",
        "pais": "Brasil"
    },
    {
        "cidade": "Kobuk",
        "sigla": "OBU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Coca - Francisco de Orellana",
        "sigla": "OCC",
        "pais": "Equador"
    },
    {
        "cidade": "Ocean City",
        "sigla": "OCE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ocho Rios Boscobel",
        "sigla": "OCJ",
        "pais": "Jamaica"
    },
    {
        "cidade": "Long Seridan",
        "sigla": "ODN",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Oudomxay",
        "sigla": "ODY",
        "pais": "Laos"
    },
    {
        "cidade": "Ofu Island Airfield",
        "sigla": "OFU",
        "pais": "Samoa Americana"
    },
    {
        "cidade": "Ogden",
        "sigla": "OGD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ogle",
        "sigla": "OGL",
        "pais": "Guiana"
    },
    {
        "cidade": "Yonaguni - Jima",
        "sigla": "OGN",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Ogdensburg",
        "sigla": "OGS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ouargla",
        "sigla": "OGX",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Vladikavkaz",
        "sigla": "OGZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ohotsk",
        "sigla": "OHO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Okushiri",
        "sigla": "OIR",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Okino Erabu",
        "sigla": "OKE",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Oki Island",
        "sigla": "OKI",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Okayama",
        "sigla": "OKJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Yorke Islands",
        "sigla": "OKR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Old Harbor",
        "sigla": "OLH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ormoc Ormoc City",
        "sigla": "OMC",
        "pais": "Filipinas"
    },
    {
        "cidade": "Oradea",
        "sigla": "OMR",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Mornington Island",
        "sigla": "ONG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Onslow",
        "sigla": "ONS",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Toksook Bay",
        "sigla": "OOK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Onotoa",
        "sigla": "OOT",
        "pais": "Kiribati"
    },
    {
        "cidade": "Miami Opa Locka",
        "sigla": "OPF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sinop",
        "sigla": "OPS",
        "pais": "Brasil"
    },
    {
        "cidade": "Paramaribo-Zorg en Hoop",
        "sigla": "ORG",
        "pais": "Suriname"
    },
    {
        "cidade": "Port Lions",
        "sigla": "ORI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Northway",
        "sigla": "ORT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Noorvik",
        "sigla": "ORV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Oriximin\u00e1",
        "sigla": "ORX",
        "pais": "Brasil"
    },
    {
        "cidade": "Oostende",
        "sigla": "OST",
        "pais": "B\u00e9lgica"
    },
    {
        "cidade": "Ohio State University Airport",
        "sigla": "OSU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Orsk",
        "sigla": "OSW",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Morotai Island",
        "sigla": "OTI",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Ban Houei Sai",
        "sigla": "OUI",
        "pais": "Laos"
    },
    {
        "cidade": "Ozamis City Labo",
        "sigla": "OZC",
        "pais": "Filipinas"
    },
    {
        "cidade": "Bilaspur",
        "sigla": "PAB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Everett Snohomish",
        "sigla": "PAE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pakuba",
        "sigla": "PAF",
        "pais": "Uganda"
    },
    {
        "cidade": "Pagadian",
        "sigla": "PAG",
        "pais": "Filipinas"
    },
    {
        "cidade": "Paulo Afonso",
        "sigla": "PAV",
        "pais": "Brasil"
    },
    {
        "cidade": "Porbandar",
        "sigla": "PBD",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Plattsburgh",
        "sigla": "PBG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pimenta Bueno",
        "sigla": "PBQ",
        "pais": "Brasil"
    },
    {
        "cidade": "Puerto Barrios",
        "sigla": "PBR",
        "pais": "Guatemala"
    },
    {
        "cidade": "Putao",
        "sigla": "PBU",
        "pais": "Myanmar"
    },
    {
        "cidade": "Pucallpa",
        "sigla": "PCL",
        "pais": "Peru"
    },
    {
        "cidade": "Picton Koromiko",
        "sigla": "PCN",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Principe Is.",
        "sigla": "PCP",
        "pais": "S\u00e3o Tom\u00e9 e Pr\u00edncipe"
    },
    {
        "cidade": "Puerto Carreno",
        "sigla": "PCR",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Puerto Inirida",
        "sigla": "PDA",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Pedro Bay",
        "sigla": "PDB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Atlanta De Kalb / Peachtree",
        "sigla": "PDK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Plovdiv",
        "sigla": "PDV",
        "pais": "Bulg\u00e1ria"
    },
    {
        "cidade": "Pelican",
        "sigla": "PEC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pelotas",
        "sigla": "PET",
        "pais": "Brasil"
    },
    {
        "cidade": "Puerto Lempira",
        "sigla": "PEU",
        "pais": "Honduras"
    },
    {
        "cidade": "Pechora",
        "sigla": "PEX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Penza",
        "sigla": "PEZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Passo Fundo",
        "sigla": "PFB",
        "pais": "Brasil"
    },
    {
        "cidade": "Punta Gorda",
        "sigla": "PGD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pantnagar",
        "sigla": "PGH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Pangkal Pinang",
        "sigla": "PGK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Port Graham",
        "sigla": "PGM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ponta Grossa Sant'Ana",
        "sigla": "PGZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Parna\u00edba - Santos Dumont",
        "sigla": "PHB",
        "pais": "Brasil"
    },
    {
        "cidade": "Point Hope",
        "sigla": "PHO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Parintins",
        "sigla": "PIN",
        "pais": "Brasil"
    },
    {
        "cidade": "Pilot Point",
        "sigla": "PIP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pico",
        "sigla": "PIX",
        "pais": "Portugal"
    },
    {
        "cidade": "Point Lay",
        "sigla": "PIZ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pedro Juan Caballero",
        "sigla": "PJC",
        "pais": "Paraguai"
    },
    {
        "cidade": "Napaskiak",
        "sigla": "PKA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pangkalan Bun",
        "sigla": "PKN",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Puka Puka",
        "sigla": "PKP",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Pokhara",
        "sigla": "PKR",
        "pais": "Nepal"
    },
    {
        "cidade": "Pskov",
        "sigla": "PKV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Pakse",
        "sigla": "PKZ",
        "pais": "Laos"
    },
    {
        "cidade": "Palu - Mutiara",
        "sigla": "PLW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Semey",
        "sigla": "PLX",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Pemba Island Wawi",
        "sigla": "PMA",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Ponta Por\u00e3",
        "sigla": "PMG",
        "pais": "Brasil"
    },
    {
        "cidade": "Palm Island",
        "sigla": "PMK",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Port Moller",
        "sigla": "PML",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Perito Moreno",
        "sigla": "PMQ",
        "pais": "Argentina"
    },
    {
        "cidade": "Puerto Madryn",
        "sigla": "PMY",
        "pais": "Argentina"
    },
    {
        "cidade": "Palmar Sur",
        "sigla": "PMZ",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Punta Gorda",
        "sigla": "PND",
        "pais": "Belize"
    },
    {
        "cidade": "Philadelphia Pa-Wilm'Ton No. Phil.",
        "sigla": "PNE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Popondetta",
        "sigla": "PNP",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Puerto Natales",
        "sigla": "PNT",
        "pais": "Chile"
    },
    {
        "cidade": "Presidente Prudente",
        "sigla": "PPB",
        "pais": "Brasil"
    },
    {
        "cidade": "Puerto Penasco",
        "sigla": "PPE",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Phaplu",
        "sigla": "PPL",
        "pais": "Nepal"
    },
    {
        "cidade": "Popayan",
        "sigla": "PPN",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Paraparaumu",
        "sigla": "PPQ",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Port Protection Ketchikan",
        "sigla": "PPV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Papa Westray",
        "sigla": "PPW",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Palenque",
        "sigla": "PQM",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Pilot Station",
        "sigla": "PQS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Parana",
        "sigla": "PRA",
        "pais": "Argentina"
    },
    {
        "cidade": "Phrae",
        "sigla": "PRH",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Parasi",
        "sigla": "PRS",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Poso",
        "sigla": "PSJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Posadas",
        "sigla": "PSS",
        "pais": "Argentina"
    },
    {
        "cidade": "Putussibau",
        "sigla": "PSU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Port Alsworth",
        "sigla": "PTA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pontiac",
        "sigla": "PTK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pato Branco Municipal",
        "sigla": "PTO",
        "pais": "Brasil"
    },
    {
        "cidade": "Platinum",
        "sigla": "PTU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pitalito",
        "sigla": "PTX",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Pukarua",
        "sigla": "PUK",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Puerto Asis",
        "sigla": "PUU",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Paranava\u00ed",
        "sigla": "PVI",
        "pais": "Brasil"
    },
    {
        "cidade": "Provo",
        "sigla": "PVU",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pevek",
        "sigla": "PWE",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Purwokerto",
        "sigla": "PWL",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Pleiku",
        "sigla": "PXU",
        "pais": "Vietname"
    },
    {
        "cidade": "Jeypore",
        "sigla": "PYB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Playon Chico",
        "sigla": "PYC",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Penrhyn Island",
        "sigla": "PYE",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Puerto Ayacucho",
        "sigla": "PYH",
        "pais": "Venezuela"
    },
    {
        "cidade": "Udachny - Polyarnyj",
        "sigla": "PYJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Plymouth",
        "sigla": "PYM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Phinda Zulu Inyal",
        "sigla": "PZL",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Port Sudan",
        "sigla": "PZU",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Piestany",
        "sigla": "PZY",
        "pais": "Eslov\u00e1quia"
    },
    {
        "cidade": "Ubari",
        "sigla": "QUB",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Rabaul",
        "sigla": "RAB",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Arar",
        "sigla": "RAE",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Rafha",
        "sigla": "RAH",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Ribeir\u00e3o Preto - Leite Lopes",
        "sigla": "RAO",
        "pais": "Brasil"
    },
    {
        "cidade": "Raha Sugimanuru",
        "sigla": "RAQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Borba",
        "sigla": "RBB",
        "pais": "Brasil"
    },
    {
        "cidade": "Rurrenabaque",
        "sigla": "RBQ",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Richmond",
        "sigla": "RCM",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Reconquista",
        "sigla": "RCQ",
        "pais": "Argentina"
    },
    {
        "cidade": "Rio Cuarto",
        "sigla": "RCU",
        "pais": "Argentina"
    },
    {
        "cidade": "Rum Cay",
        "sigla": "RCY",
        "pais": "Bahamas"
    },
    {
        "cidade": "Red Devil",
        "sigla": "RDV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Reao",
        "sigla": "REA",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Resistencia",
        "sigla": "RES",
        "pais": "Argentina"
    },
    {
        "cidade": "Rost Stolport",
        "sigla": "RET",
        "pais": "Noruega"
    },
    {
        "cidade": "Rengat Japura",
        "sigla": "RGT",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Rio Hondo",
        "sigla": "RHD",
        "pais": "Argentina"
    },
    {
        "cidade": "Ramechap",
        "sigla": "RHP",
        "pais": "Nepal"
    },
    {
        "cidade": "Rio Grande",
        "sigla": "RIG",
        "pais": "Brasil"
    },
    {
        "cidade": "Rifle",
        "sigla": "RIL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rishiri",
        "sigla": "RIS",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Riverton",
        "sigla": "RIW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rio Alzucar",
        "sigla": "RIZ",
        "pais": "China"
    },
    {
        "cidade": "Rajahmundry",
        "sigla": "RJA",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Rajbiraj",
        "sigla": "RJB",
        "pais": "Nepal"
    },
    {
        "cidade": "Rajshahi",
        "sigla": "RJH",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Roma",
        "sigla": "RMA",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Yoron-Jima",
        "sigla": "RNJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Rennell",
        "sigla": "RNL",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Rondon",
        "sigla": "RON",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Rondon\u00f3polis",
        "sigla": "ROO",
        "pais": "Brasil"
    },
    {
        "cidade": "Rota",
        "sigla": "ROP",
        "pais": "Ilhas Marianas do Norte"
    },
    {
        "cidade": "Roswell International Air Center",
        "sigla": "ROW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Raipur",
        "sigla": "RPR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Rourkela",
        "sigla": "RRK",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Roros",
        "sigla": "RRS",
        "pais": "Noruega"
    },
    {
        "cidade": "Santa Rosa",
        "sigla": "RSA",
        "pais": "Argentina"
    },
    {
        "cidade": "Yosu",
        "sigla": "RSU",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Rotuma",
        "sigla": "RTA",
        "pais": "Fiji"
    },
    {
        "cidade": "Ruteng",
        "sigla": "RTG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Saratov",
        "sigla": "RTW",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Rupsi",
        "sigla": "RUP",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Rurutu",
        "sigla": "RUR",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Marau",
        "sigla": "RUS",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Rutland",
        "sigla": "RUT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Rio Verde",
        "sigla": "RVD",
        "pais": "Brasil"
    },
    {
        "cidade": "Saravena",
        "sigla": "RVE",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Roervik - Ryumsjoen",
        "sigla": "RVK",
        "pais": "Noruega"
    },
    {
        "cidade": "Ramsar",
        "sigla": "RZR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Santa F\u00e9",
        "sigla": "SAF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Andros Municipal",
        "sigla": "SAQ",
        "pais": "Bahamas"
    },
    {
        "cidade": "San Bernardino Norton Afb",
        "sigla": "SBD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sabang",
        "sigla": "SBG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Cobija - Capit\u00e1n An\u00edbal Arab",
        "sigla": "CIJ",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Saibai Island",
        "sigla": "SBR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Scammon Bay",
        "sigla": "SCM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lubango - S\u00e1 da Bandeira",
        "sigla": "SDD",
        "pais": "Angola"
    },
    {
        "cidade": "Sanandaj",
        "sigla": "SDG",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Sandane",
        "sigla": "SDN",
        "pais": "Noruega"
    },
    {
        "cidade": "San Fernando de Apure - Las Flecheras",
        "sigla": "SFD",
        "pais": "Venezuela"
    },
    {
        "cidade": "S\u00e3o Filipe",
        "sigla": "SFL",
        "pais": "Cabo Verde"
    },
    {
        "cidade": "Santa Fe",
        "sigla": "SFN",
        "pais": "Argentina"
    },
    {
        "cidade": "St. George",
        "sigla": "SGO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Songea",
        "sigla": "SGX",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Nakashibetsu",
        "sigla": "SHB",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Indaselassie",
        "sigla": "SHC",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Shanhaiguan",
        "sigla": "SHF",
        "pais": "China"
    },
    {
        "cidade": "Shungnak",
        "sigla": "SHG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Shishmaref",
        "sigla": "SHH",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Miyako - Shimojishima",
        "sigla": "SHI",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Shillong",
        "sigla": "SHL",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Nanki Shirahama",
        "sigla": "SHM",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Shashi",
        "sigla": "SHS",
        "pais": "China"
    },
    {
        "cidade": "Sharurah",
        "sigla": "SHW",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Shageluk",
        "sigla": "SHX",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Singkep Dabo",
        "sigla": "SIQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Siuna",
        "sigla": "SIU",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "San Jose del Guaviare",
        "sigla": "SJE",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "St. John",
        "sigla": "SJF",
        "pais": "Ilhas V\u00edrgens Americanas"
    },
    {
        "cidade": "S\u00e3o Jos\u00e9 dos Campos",
        "sigla": "SJK",
        "pais": "Brasil"
    },
    {
        "cidade": "S\u00e3o Gabriel da Cachoeira",
        "sigla": "SJL",
        "pais": "Brasil"
    },
    {
        "cidade": "S\u00e3o Jos\u00e9 do Rio Preto",
        "sigla": "SJP",
        "pais": "Brasil"
    },
    {
        "cidade": "S\u00e3o Jorge",
        "sigla": "SJZ",
        "pais": "Portugal"
    },
    {
        "cidade": "Surkhet",
        "sigla": "SKH",
        "pais": "Nepal"
    },
    {
        "cidade": "Shaktoolik",
        "sigla": "SKK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Stokmarknes",
        "sigla": "SKN",
        "pais": "Noruega"
    },
    {
        "cidade": "Sokoto",
        "sigla": "SKO",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Sialkot",
        "sigla": "SKT",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Saransk",
        "sigla": "SKX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Sola",
        "sigla": "SLH",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Solwezi",
        "sigla": "SLI",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "Saranac Lake",
        "sigla": "SLK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Salina",
        "sigla": "SLN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sleetmute",
        "sigla": "SLQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "St. Michael",
        "sigla": "SMK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sampit",
        "sigla": "SMQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Sainte-Marie",
        "sigla": "SMS",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "St. Nazaire Montoir",
        "sigla": "SNR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Santa Clara - Abel Santamar\u00eda",
        "sigla": "SNU",
        "pais": "Cuba"
    },
    {
        "cidade": "Thandwe",
        "sigla": "SNW",
        "pais": "Myanmar"
    },
    {
        "cidade": "Sorkjosen",
        "sigla": "SOJ",
        "pais": "Noruega"
    },
    {
        "cidade": "San Tome, Venezuela",
        "sigla": "SOM",
        "pais": "Venezuela"
    },
    {
        "cidade": "Sorong",
        "sigla": "SOQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Seldovia",
        "sigla": "SOV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Show Low",
        "sigla": "SOW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Stronsay",
        "sigla": "SOY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Ilha de Saint Thomas",
        "sigla": "SPB",
        "pais": "Ilhas V\u00edrgens Americanas"
    },
    {
        "cidade": "Saidpur",
        "sigla": "SPD",
        "pais": "Bangladesh"
    },
    {
        "cidade": "Menongue",
        "sigla": "SPP",
        "pais": "Angola"
    },
    {
        "cidade": "San Carlos",
        "sigla": "SQL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sanana",
        "sigla": "SQN",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Santa Rosa",
        "sigla": "SRA",
        "pais": "Brasil"
    },
    {
        "cidade": "Riberalta",
        "sigla": "RIB",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Sarh",
        "sigla": "SRH",
        "pais": "Chade"
    },
    {
        "cidade": "Samarinda - Temindung",
        "sigla": "SRI",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Stord",
        "sigla": "SRP",
        "pais": "Noruega"
    },
    {
        "cidade": "Stony River",
        "sigla": "SRV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sary Dashte Naz",
        "sigla": "SRY",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Ilha St. Croix",
        "sigla": "SSB",
        "pais": "Ilhas V\u00edrgens Americanas"
    },
    {
        "cidade": "Sandnessjoen - Stokka",
        "sigla": "SSJ",
        "pais": "Noruega"
    },
    {
        "cidade": "Sara",
        "sigla": "SSR",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Saint Cloud",
        "sigla": "STC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Santar\u00e9m",
        "sigla": "STM",
        "pais": "Brasil"
    },
    {
        "cidade": "Stavropol",
        "sigla": "STW",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Samchok",
        "sigla": "SUK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Sumenep Trunojoyo",
        "sigla": "SUP",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Sudureyri",
        "sigla": "SUY",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Savoonga",
        "sigla": "SVA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sambava",
        "sigla": "SVB",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Grant County Airport",
        "sigla": "SVC",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "San Vicente del Caguan",
        "sigla": "SVI",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "South West Bay",
        "sigla": "SWJ",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Stillwater",
        "sigla": "SWO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sumbawa",
        "sigla": "SWQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Swansea Fairwood",
        "sigla": "SWS",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Saumlaki",
        "sigla": "SXK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "S\u00e3o F\u00e9lix do Araguaia",
        "sigla": "SXO",
        "pais": "Brasil"
    },
    {
        "cidade": "Sheldon Point",
        "sigla": "SXP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Pu'er Simao",
        "sigla": "SYM",
        "pais": "China"
    },
    {
        "cidade": "Shonai",
        "sigla": "SYO",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Sue Island Warraber",
        "sigla": "SYU",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Soyo",
        "sigla": "SZA",
        "pais": "Angola"
    },
    {
        "cidade": "Tanna - White Grass",
        "sigla": "TAH",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Tashauz",
        "sigla": "TAZ",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Tabiteuea North",
        "sigla": "TBF",
        "pais": "Kiribati"
    },
    {
        "cidade": "Tabubil",
        "sigla": "TBG",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Tablas",
        "sigla": "TBH",
        "pais": "Filipinas"
    },
    {
        "cidade": "Tabarka",
        "sigla": "TBJ",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Fort Leonard Wood, MO",
        "sigla": "TBN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tabora",
        "sigla": "TBO",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Tabatinga",
        "sigla": "TBT",
        "pais": "Brasil"
    },
    {
        "cidade": "Tambov",
        "sigla": "TBW",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Tacna",
        "sigla": "TCQ",
        "pais": "Peru"
    },
    {
        "cidade": "Takotna",
        "sigla": "TCT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Guayaramerin",
        "sigla": "GYA",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Taldy-Kurgan",
        "sigla": "TDK",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Tebessa",
        "sigla": "TEE",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Telfer",
        "sigla": "TEF",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Tezu",
        "sigla": "TEI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Tatitlek",
        "sigla": "TEK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tete Matunda",
        "sigla": "TET",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Tezpur Salonibari",
        "sigla": "TEZ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Tef\u00e9",
        "sigla": "TFF",
        "pais": "Brasil"
    },
    {
        "cidade": "Tufi",
        "sigla": "TFI",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Te\u00f3filo Otoni",
        "sigla": "TFL",
        "pais": "Brasil"
    },
    {
        "cidade": "Krui",
        "sigla": "TFY",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tongoa",
        "sigla": "TGH",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Tingo Maria",
        "sigla": "TGI",
        "pais": "Peru"
    },
    {
        "cidade": "Tiga",
        "sigla": "TGJ",
        "pais": "Nova Caled\u00f3nia"
    },
    {
        "cidade": "Tanga",
        "sigla": "TGT",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Tachilek",
        "sigla": "THL",
        "pais": "Myanmar"
    },
    {
        "cidade": "Sukhothai",
        "sigla": "THS",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Tiaret Bouchekif",
        "sigla": "TID",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Tikehau Atoll",
        "sigla": "TIH",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Tirinkot",
        "sigla": "TII",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Timika - Mozes Kilangin",
        "sigla": "TIM",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tindouf",
        "sigla": "TIN",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Tinian",
        "sigla": "TIQ",
        "pais": "Ilhas Marianas do Norte"
    },
    {
        "cidade": "Tirupati",
        "sigla": "TIR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Timaru",
        "sigla": "TIU",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Tari",
        "sigla": "TIZ",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Tanjung Warukin",
        "sigla": "TJG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tanjung Pandan",
        "sigla": "TJQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tanjung Selor",
        "sigla": "TJS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Takoradi",
        "sigla": "TKD",
        "pais": "Gana"
    },
    {
        "cidade": "Truckee",
        "sigla": "TKF",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tokuno Shima",
        "sigla": "TKN",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Takapoto",
        "sigla": "TKP",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Takaroa",
        "sigla": "TKX",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Toliara",
        "sigla": "TLE",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Tolitoli",
        "sigla": "TLI",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tatalina",
        "sigla": "TLJ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tuluksak",
        "sigla": "TLT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tolu",
        "sigla": "TLU",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Tambolaka",
        "sigla": "TMC",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tame",
        "sigla": "TME",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Tumlingtar",
        "sigla": "TMI",
        "pais": "Nepal"
    },
    {
        "cidade": "Tamale",
        "sigla": "TML",
        "pais": "Gana"
    },
    {
        "cidade": "Tamana",
        "sigla": "TMN",
        "pais": "Kiribati"
    },
    {
        "cidade": "Tamanrasset",
        "sigla": "TMR",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Trombetas",
        "sigla": "TMT",
        "pais": "Brasil"
    },
    {
        "cidade": "Tambor",
        "sigla": "TMU",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Timimoun",
        "sigla": "TMX",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Tanegashima",
        "sigla": "TNE",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Tanjung Pinang",
        "sigla": "TNJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tununak",
        "sigla": "TNK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tainan",
        "sigla": "TNN",
        "pais": "Taiwan"
    },
    {
        "cidade": "Tobruk",
        "sigla": "TOB",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Togiak",
        "sigla": "TOG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Torres",
        "sigla": "TOH",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Tombuctu",
        "sigla": "TOM",
        "pais": "Mali"
    },
    {
        "cidade": "Toyama",
        "sigla": "TOY",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Tarapoto",
        "sigla": "TPP",
        "pais": "Peru"
    },
    {
        "cidade": "Taramajima Tarama",
        "sigla": "TRA",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Tiree Island",
        "sigla": "TRE",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Tarakan - Juwatta",
        "sigla": "TRK",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Trincomalee China Bay",
        "sigla": "TRR",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Taipei Songshan",
        "sigla": "TSA",
        "pais": "Taiwan"
    },
    {
        "cidade": "Tsushima",
        "sigla": "TSJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Taos",
        "sigla": "TSM",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Tabiteuea South",
        "sigla": "TSU",
        "pais": "Kiribati"
    },
    {
        "cidade": "Tasikmalaya",
        "sigla": "TSY",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tan Tan",
        "sigla": "TTA",
        "pais": "Morrocos"
    },
    {
        "cidade": "Ternate Babullah",
        "sigla": "TTE",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Tottori",
        "sigla": "TTJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Tortuguero",
        "sigla": "TTQ",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Tetouan",
        "sigla": "TTU",
        "pais": "Morrocos"
    },
    {
        "cidade": "Tubuai",
        "sigla": "TUB",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Turaif",
        "sigla": "TUI",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Tucuru\u00ed",
        "sigla": "TUR",
        "pais": "Brasil"
    },
    {
        "cidade": "Tucupita",
        "sigla": "TUV",
        "pais": "Venezuela"
    },
    {
        "cidade": "Taveuni Matei",
        "sigla": "TVU",
        "pais": "Fiji"
    },
    {
        "cidade": "Dawe",
        "sigla": "TVY",
        "pais": "Myanmar"
    },
    {
        "cidade": "Tawitawi",
        "sigla": "TWT",
        "pais": "Filipinas"
    },
    {
        "cidade": "Tynda",
        "sigla": "TYD",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Talara",
        "sigla": "TYL",
        "pais": "Peru"
    },
    {
        "cidade": "South Andros",
        "sigla": "TZN",
        "pais": "Bahamas"
    },
    {
        "cidade": "Ua Huka",
        "sigla": "UAH",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Luau",
        "sigla": "UAL",
        "pais": "Angola"
    },
    {
        "cidade": "Ua Pou",
        "sigla": "UAP",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "San Juan",
        "sigla": "UAQ",
        "pais": "Argentina"
    },
    {
        "cidade": "Samburu",
        "sigla": "UAS",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Uberaba",
        "sigla": "UBA",
        "pais": "Brasil"
    },
    {
        "cidade": "Mabuiag Island",
        "sigla": "UBB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Ube Yamaguchi",
        "sigla": "UBJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Palm Springs Bermuda",
        "sigla": "UDD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Quelimane",
        "sigla": "UEL",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Kume Jima",
        "sigla": "UEO",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Uige Carmona",
        "sigla": "UGO",
        "pais": "Angola"
    },
    {
        "cidade": "Quibdo",
        "sigla": "UIB",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Utila Island",
        "sigla": "UII",
        "pais": "Honduras"
    },
    {
        "cidade": "Ust - Kut",
        "sigla": "UKX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ulei",
        "sigla": "ULB",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Ulgii",
        "sigla": "ULG",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Ulaangom",
        "sigla": "ULO",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Quilpie",
        "sigla": "ULP",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Ulusaba",
        "sigla": "ULX",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Uliastai",
        "sigla": "ULZ",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Uummannaq",
        "sigla": "UMD",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Umuarama",
        "sigla": "UMU",
        "pais": "Brasil"
    },
    {
        "cidade": "Kunduz",
        "sigla": "UND",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Kiunga",
        "sigla": "UNG",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Uruguaiana",
        "sigla": "URG",
        "pais": "Brasil"
    },
    {
        "cidade": "Uraj",
        "sigla": "URJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Gurayat",
        "sigla": "URY",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Ulsan",
        "sigla": "USN",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "St. Augustine",
        "sigla": "UST",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bugulma",
        "sigla": "UUA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Baruun - Urt",
        "sigla": "UUN",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "Iujno - Sakhalinsk",
        "sigla": "UUS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nyala",
        "sigla": "UYL",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Yulin",
        "sigla": "UYN",
        "pais": "China"
    },
    {
        "cidade": "Varginha",
        "sigla": "VAG",
        "pais": "Brasil"
    },
    {
        "cidade": "Vanimo",
        "sigla": "VAI",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Chevak",
        "sigla": "VAK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Valen\u00e7a",
        "sigla": "VAL",
        "pais": "Brasil"
    },
    {
        "cidade": "Suavanao",
        "sigla": "VAO",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Vava'u",
        "sigla": "VAV",
        "pais": "Tonga"
    },
    {
        "cidade": "Vardoe",
        "sigla": "VAW",
        "pais": "Noruega"
    },
    {
        "cidade": "Vanuabalavu",
        "sigla": "VBV",
        "pais": "Fiji"
    },
    {
        "cidade": "Can Tho - Tra Noc",
        "sigla": "VCA",
        "pais": "Vietname"
    },
    {
        "cidade": "Victoria, TX",
        "sigla": "VCT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vit\u00f3ria da Conquista",
        "sigla": "VDC",
        "pais": "Brasil"
    },
    {
        "cidade": "Vadso",
        "sigla": "VDS",
        "pais": "Noruega"
    },
    {
        "cidade": "Venetie",
        "sigla": "VEE",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Vestmannaeyjar",
        "sigla": "VEY",
        "pais": "Isl\u00e2ndia"
    },
    {
        "cidade": "Vijayawada",
        "sigla": "VGA",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Villagarzon",
        "sigla": "VGZ",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Saurimo",
        "sigla": "VHC",
        "pais": "Angola"
    },
    {
        "cidade": "Vahitahi",
        "sigla": "VHZ",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Dakhla",
        "sigla": "VIL",
        "pais": "Morrocos"
    },
    {
        "cidade": "Xai Xai",
        "sigla": "VJB",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Vorkuta",
        "sigla": "VKT",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Valesdir",
        "sigla": "VLS",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Valera Carvajal",
        "sigla": "VLV",
        "pais": "Venezuela"
    },
    {
        "cidade": "Vannes",
        "sigla": "VNE",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Los Angeles Van Nuys",
        "sigla": "VNY",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ongiva Pereira",
        "sigla": "VPE",
        "pais": "Angola"
    },
    {
        "cidade": "Chimoio",
        "sigla": "VPY",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Valledupar",
        "sigla": "VUP",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Velikij Ustyug",
        "sigla": "VUS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Villavicencio",
        "sigla": "VVC",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Lichinga",
        "sigla": "VXC",
        "pais": "Mo\u00e7ambique"
    },
    {
        "cidade": "Wales",
        "sigla": "WAA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wadi al-Dawaser",
        "sigla": "WAE",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Ambatondrazaka",
        "sigla": "WAM",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Stebbins",
        "sigla": "WBB",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wapenamanda",
        "sigla": "WBM",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Beaver",
        "sigla": "WBQ",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Walgett",
        "sigla": "WGE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Waitangi Kerikeri",
        "sigla": "WGN",
        "pais": "China"
    },
    {
        "cidade": "Waingapu",
        "sigla": "WGP",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Wadi Halfa",
        "sigla": "WHF",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Winton",
        "sigla": "WIN",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wajir",
        "sigla": "WJR",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Wanaka",
        "sigla": "WKA",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Wakkanai",
        "sigla": "WKJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Walaha",
        "sigla": "WLH",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Selawik",
        "sigla": "WLK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Meyers Chuck",
        "sigla": "WMK",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Maroantsetra",
        "sigla": "WMN",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Mananara",
        "sigla": "WMR",
        "pais": "Madag\u00e1scar"
    },
    {
        "cidade": "Wamena",
        "sigla": "WMX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Napakiak",
        "sigla": "WNA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Windorah",
        "sigla": "WNR",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Powell Lake",
        "sigla": "WPL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Porvenir",
        "sigla": "WPR",
        "pais": "Chile"
    },
    {
        "cidade": "Puerto Williams",
        "sigla": "WPU",
        "pais": "Chile"
    },
    {
        "cidade": "Westray",
        "sigla": "WRY",
        "pais": "Reino Unido"
    },
    {
        "cidade": "South Naknek",
        "sigla": "WSN",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Waspam",
        "sigla": "WSP",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Westerly",
        "sigla": "WST",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Westport",
        "sigla": "WSZ",
        "pais": "Nova Zel\u00e2ndia"
    },
    {
        "cidade": "Tuntutuliak",
        "sigla": "WTL",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wau Waw",
        "sigla": "WUU",
        "pais": "Sud\u00e3o do Sul"
    },
    {
        "cidade": "Wuzhou Changzhoud",
        "sigla": "WUZ",
        "pais": "China"
    },
    {
        "cidade": "Woodie Woodie",
        "sigla": "WWI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wewak",
        "sigla": "WWK",
        "pais": "Papua-Nova Guin\u00e9"
    },
    {
        "cidade": "Newtok",
        "sigla": "WWT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Bearskin Lake",
        "sigla": "XBE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Birjand",
        "sigla": "XBJ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Xichang - Qingshan",
        "sigla": "XIC",
        "pais": "China"
    },
    {
        "cidade": "Xieng Khouang",
        "sigla": "XKH",
        "pais": "Laos"
    },
    {
        "cidade": "Yam Island",
        "sigla": "XMY",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Comayagua Palmerola",
        "sigla": "XPL",
        "pais": "Honduras"
    },
    {
        "cidade": "Quepos",
        "sigla": "XQP",
        "pais": "Costa Rica"
    },
    {
        "cidade": "South Caicos",
        "sigla": "XSC",
        "pais": "Ilhas Turks e Caicos"
    },
    {
        "cidade": "Thargomindah",
        "sigla": "XTG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Tadoule Lake",
        "sigla": "XTL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Taroom",
        "sigla": "XTO",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Cat Lake",
        "sigla": "YAC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fort Frances",
        "sigla": "YAG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Angling Lake",
        "sigla": "YAX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "St. Anthony",
        "sigla": "YAY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kugaaruk",
        "sigla": "YBB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Baie Comeau",
        "sigla": "YBC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Uranium City",
        "sigla": "YBE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Black Tickle",
        "sigla": "YBI",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yibin",
        "sigla": "YBP",
        "pais": "China"
    },
    {
        "cidade": "Brandon",
        "sigla": "YBR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Brochet",
        "sigla": "YBT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Blanc Sablon",
        "sigla": "YBX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Colville Lake",
        "sigla": "YCK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Charlo",
        "sigla": "YCL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "St. Catharines",
        "sigla": "YCM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kugluktuk - Coppermine",
        "sigla": "YCO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cross Lake",
        "sigla": "YCR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Chesterfield Inlet",
        "sigla": "YCS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yuncheng",
        "sigla": "YCU",
        "pais": "China"
    },
    {
        "cidade": "Clyde River",
        "sigla": "YCY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Dawson City",
        "sigla": "YDA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Nain",
        "sigla": "YDP",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fort Simpson",
        "sigla": "YFS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fox Harbour-St. Lewis",
        "sigla": "YFX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Ganges Harbour",
        "sigla": "YGG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fort Good Hope",
        "sigla": "YGH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gods Lake Narrows",
        "sigla": "YGO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gaspe",
        "sigla": "YGP",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Geraldton",
        "sigla": "YGQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Iles De La Madeleine",
        "sigla": "YGR",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Havre St. Pierre",
        "sigla": "YGV",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Port Hope Simpson",
        "sigla": "YHA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Dryden",
        "sigla": "YHD",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gjoa Haven",
        "sigla": "YHK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Hopedale",
        "sigla": "YHO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Poplar Hill",
        "sigla": "YHP",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sechelt Gibson",
        "sigla": "YHS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Montreal - St. Hubert",
        "sigla": "YHU",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Hay River",
        "sigla": "YHY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Ivujivik",
        "sigla": "YIK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yining",
        "sigla": "YIN",
        "pais": "China"
    },
    {
        "cidade": "Detroit Willow Run",
        "sigla": "YIP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Island Lake - Garden Hill",
        "sigla": "YIV",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Stephenville",
        "sigla": "YJT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Schefferville",
        "sigla": "YKL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Waskaganish",
        "sigla": "YKQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yakutsk",
        "sigla": "YKS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Chisasibi",
        "sigla": "YKU",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Whati",
        "sigla": "YLE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Lloydminster",
        "sigla": "YLL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Mayo",
        "sigla": "YMA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Mary's Harbour",
        "sigla": "YMH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Makkovik",
        "sigla": "YMN",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Moosonee",
        "sigla": "YMO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Chibougamau",
        "sigla": "YMT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Natashquan",
        "sigla": "YNA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Wemindji",
        "sigla": "YNC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gatineau - Ottawa",
        "sigla": "YND",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Norway House",
        "sigla": "YNE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Points North Landing",
        "sigla": "YNL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "North Spirit Lake",
        "sigla": "YNO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Nemiscau",
        "sigla": "YNS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Oxford House",
        "sigla": "YOH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yola",
        "sigla": "YOL",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Prince Albert",
        "sigla": "YPA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Paulatuk",
        "sigla": "YPC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Inukjuak",
        "sigla": "YPH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Aupaluk",
        "sigla": "YPJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Pickle Lake",
        "sigla": "YPL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Pikangikum",
        "sigla": "YPM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Peawanuck",
        "sigla": "YPO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Puvirnituq",
        "sigla": "YPX",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Forte Chipewyan",
        "sigla": "YPY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Muskoka",
        "sigla": "YQA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kenora",
        "sigla": "YQK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yorkton",
        "sigla": "YQV",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gameti - Rae Lakes",
        "sigla": "YRA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cartwright",
        "sigla": "YRF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Rigolet",
        "sigla": "YRG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Red Lake",
        "sigla": "YRL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Red Sucker Lake",
        "sigla": "YRS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Rankin Inlet",
        "sigla": "YRT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Lutselk'e",
        "sigla": "YSG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sanikiluaq",
        "sigla": "YSK",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Postville",
        "sigla": "YSO",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "St. Theresa Point",
        "sigla": "YST",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sachs Harbour",
        "sigla": "YSY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Cape Dorset",
        "sigla": "YTE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Big Trout Lake",
        "sigla": "YTL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Tofino Harbour",
        "sigla": "YTP",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Tasiujuaq",
        "sigla": "YTQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Umiujaq",
        "sigla": "YUD",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Repulse Bay",
        "sigla": "YUT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Rouyn - Noranda",
        "sigla": "YUY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "La Ronge",
        "sigla": "YVC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Qikiqtarjuaq",
        "sigla": "YVM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Deline",
        "sigla": "YWJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Williams Harbour",
        "sigla": "YWM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Medicine Hat",
        "sigla": "YXH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sioux Lookout",
        "sigla": "YXL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yueyang",
        "sigla": "YYA",
        "pais": "China"
    },
    {
        "cidade": "Fort Nelson",
        "sigla": "YYE",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Charlottetown",
        "sigla": "YYG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Taloyoak",
        "sigla": "YYH",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Mont Joli",
        "sigla": "YYY",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Salluit",
        "sigla": "YZG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Coral Harbour",
        "sigla": "YZS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sept-Iles",
        "sigla": "YZV",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "York Landing",
        "sigla": "ZAC",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Zahedan",
        "sigla": "ZAH",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Zaranj",
        "sigla": "ZAJ",
        "pais": "Afeganist\u00e3o"
    },
    {
        "cidade": "Zhaotong",
        "sigla": "ZAT",
        "pais": "China"
    },
    {
        "cidade": "Bathurst",
        "sigla": "ZBF",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Biloela",
        "sigla": "ZBL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Chabahar",
        "sigla": "ZBR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Sayaboury",
        "sigla": "ZBY",
        "pais": "Laos"
    },
    {
        "cidade": "Eastmain River",
        "sigla": "ZEM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Zero",
        "sigla": "ZER",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Fond Du Lac",
        "sigla": "ZFD",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gods River",
        "sigla": "ZGI",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Gaua",
        "sigla": "ZGU",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Kegaska",
        "sigla": "ZKG",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Kasompe",
        "sigla": "ZKP",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "La Tabatiere",
        "sigla": "ZLT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Masset",
        "sigla": "ZMT",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sachigo Lake",
        "sigla": "ZPB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Serui",
        "sigla": "ZRI",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Round Lake",
        "sigla": "ZRJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Sandy Lake",
        "sigla": "ZSJ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Tureira",
        "sigla": "ZTA",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Tete A La Baleine",
        "sigla": "ZTB",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Churchill Falls",
        "sigla": "ZUM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Savannakhet",
        "sigla": "ZVK",
        "pais": "Laos"
    },
    {
        "cidade": "Wollaston Lake",
        "sigla": "ZWL",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Zunyi",
        "sigla": "ZYI",
        "pais": "China"
    },
    {
        "cidade": "Abilene",
        "sigla": "ABI",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sahand",
        "sigla": "ACP",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Xingyi",
        "sigla": "ACX",
        "pais": "China"
    },
    {
        "cidade": "Ardabil",
        "sigla": "ADU",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Zarafshan",
        "sigla": "AFS",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Sabzevar",
        "sigla": "AFZ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Ahe",
        "sigla": "AHE",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Agri",
        "sigla": "AJI",
        "pais": "Turquia"
    },
    {
        "cidade": "Aosta - Corrado Gex",
        "sigla": "AOT",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Buriram",
        "sigla": "BFV",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Bojnurd",
        "sigla": "BJB",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Belleville - MidAmerica Airport",
        "sigla": "BLV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Qamdo - Bangda",
        "sigla": "BPX",
        "pais": "China"
    },
    {
        "cidade": "Bam",
        "sigla": "BXR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Cape Barren Island, TS",
        "sigla": "CBI",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Cayo Coco",
        "sigla": "CCC",
        "pais": "Cuba"
    },
    {
        "cidade": "Shahrekord",
        "sigla": "CQD",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Caye Caulker",
        "sigla": "CUK",
        "pais": "Belize"
    },
    {
        "cidade": "Dera Ghazi Khan",
        "sigla": "DEA",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Diqing - Deqen - Shangri-La",
        "sigla": "DIG",
        "pais": "China"
    },
    {
        "cidade": "Diu",
        "sigla": "DIU",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Dali",
        "sigla": "DLU",
        "pais": "China"
    },
    {
        "cidade": "Dawadmi",
        "sigla": "DWD",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Edremit - Korfez",
        "sigla": "EDO",
        "pais": "Turquia"
    },
    {
        "cidade": "Gan Airport",
        "sigla": "GAN",
        "pais": "Maldivas"
    },
    {
        "cidade": "Gorgan",
        "sigla": "GBT",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Seul-Gimpo",
        "sigla": "GMP",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Qeshm",
        "sigla": "GSM",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Hanimaadhoo",
        "sigla": "HAQ",
        "pais": "Maldivas"
    },
    {
        "cidade": "Borg El Arab",
        "sigla": "HBE",
        "pais": "Egipto"
    },
    {
        "cidade": "Hemavan",
        "sigla": "HMV",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Saga",
        "sigla": "HSG",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Zhoushan - Putuoshan",
        "sigla": "HSN",
        "pais": "China"
    },
    {
        "cidade": "Laughlin Bullhead",
        "sigla": "IFP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Iranshahr",
        "sigla": "IHR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Ilam",
        "sigla": "IIL",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Isparta",
        "sigla": "ISE",
        "pais": "Turquia"
    },
    {
        "cidade": "Iwami",
        "sigla": "IWJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Ji An / Jinggangshan",
        "sigla": "JGS",
        "pais": "China"
    },
    {
        "cidade": "Jijiga",
        "sigla": "JIJ",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Ic\u00e1ria",
        "sigla": "JIK",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Qaarsut",
        "sigla": "JQA",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Astipalaia",
        "sigla": "JTY",
        "pais": "Gr\u00e9cia"
    },
    {
        "cidade": "Juzhou",
        "sigla": "JUZ",
        "pais": "China"
    },
    {
        "cidade": "Jiuzhai Huanglong",
        "sigla": "JZH",
        "pais": "China"
    },
    {
        "cidade": "Kotabaru",
        "sigla": "KBU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Koggala",
        "sigla": "KCT",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Kaadedhdhoo",
        "sigla": "KDM",
        "pais": "Maldivas"
    },
    {
        "cidade": "Kadhdhoo",
        "sigla": "KDO",
        "pais": "Maldivas"
    },
    {
        "cidade": "Kagau",
        "sigla": "KGE",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Kogalym",
        "sigla": "KGP",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Khorramabad",
        "sigla": "KHD",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Khoy",
        "sigla": "KHY",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Lamerd",
        "sigla": "LFM",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Yongzhou - Lingling",
        "sigla": "LLF",
        "pais": "China"
    },
    {
        "cidade": "Alluitsup Paa",
        "sigla": "LLU",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Lincang",
        "sigla": "LNJ",
        "pais": "China"
    },
    {
        "cidade": "Lar",
        "sigla": "LRR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Linyi",
        "sigla": "LYI",
        "pais": "China"
    },
    {
        "cidade": "Nangan",
        "sigla": "LZN",
        "pais": "Taiwan"
    },
    {
        "cidade": "Mitiga",
        "sigla": "MJI",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Shark Bay",
        "sigla": "MJK",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Naquichev\u00e3o",
        "sigla": "NAJ",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "Qaanaaq",
        "sigla": "NAQ",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Noyabrsk",
        "sigla": "NOJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nantong",
        "sigla": "NTG",
        "pais": "China"
    },
    {
        "cidade": "Noto",
        "sigla": "NTQ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Navoi",
        "sigla": "NVI",
        "pais": "Usbequist\u00e3o"
    },
    {
        "cidade": "Manzhouli - Xijiao",
        "sigla": "NZH",
        "pais": "China"
    },
    {
        "cidade": "Odate Noshiro",
        "sigla": "ONJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "London - Oxford",
        "sigla": "OXF",
        "pais": "Reino Unido"
    },
    {
        "cidade": "Paama Island",
        "sigla": "PBJ",
        "pais": "Vanuatu"
    },
    {
        "cidade": "Pardubice",
        "sigla": "PED",
        "pais": "Rep\u00fablica Checa"
    },
    {
        "cidade": "Pajala",
        "sigla": "PJA",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Placencia",
        "sigla": "PLJ",
        "pais": "Belize"
    },
    {
        "cidade": "Panzhihua Bao'anying",
        "sigla": "PZI",
        "pais": "China"
    },
    {
        "cidade": "Heliport",
        "sigla": "QCU",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Heliport",
        "sigla": "QFI",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Heliport",
        "sigla": "QGQ",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Heliport",
        "sigla": "QJI",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Heliport",
        "sigla": "QMK",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Heliport",
        "sigla": "QPW",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Heliport",
        "sigla": "QRY",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "W\u00fcrzburg",
        "sigla": "QWU",
        "pais": "Alemanha"
    },
    {
        "cidade": "Ramata Island",
        "sigla": "RBV",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Logrono - Agoncillo",
        "sigla": "RJL",
        "pais": "Espanha"
    },
    {
        "cidade": "Rafsanjan",
        "sigla": "RJN",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Ulava",
        "sigla": "RNA",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Roi Et",
        "sigla": "ROI",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Ravensthorpe, WA",
        "sigla": "RVT",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Raivavae",
        "sigla": "RVV",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Sawan",
        "sigla": "RZS",
        "pais": "Paquist\u00e3o"
    },
    {
        "cidade": "Subic Bay",
        "sigla": "SFS",
        "pais": "Filipinas"
    },
    {
        "cidade": "Siirt",
        "sigla": "SXZ",
        "pais": "Turquia"
    },
    {
        "cidade": "Sirjan",
        "sigla": "SYJ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Tacheng",
        "sigla": "TCG",
        "pais": "China"
    },
    {
        "cidade": "Tuticorin",
        "sigla": "TCR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Tokat",
        "sigla": "TJK",
        "pais": "Turquia"
    },
    {
        "cidade": "Usak",
        "sigla": "USQ",
        "pais": "Turquia"
    },
    {
        "cidade": "Con Dao",
        "sigla": "VCS",
        "pais": "Vietname"
    },
    {
        "cidade": "Vinh City",
        "sigla": "VII",
        "pais": "Vietname"
    },
    {
        "cidade": "Weifang",
        "sigla": "WEF",
        "pais": "China"
    },
    {
        "cidade": "Weihai - Dashhuibo",
        "sigla": "WEH",
        "pais": "China"
    },
    {
        "cidade": "Wonju",
        "sigla": "WJU",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Weerawila",
        "sigla": "WRZ",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Wu Hai",
        "sigla": "WUA",
        "pais": "China"
    },
    {
        "cidade": "Fujian Province, Wuyishan, CN",
        "sigla": "WUS",
        "pais": "China"
    },
    {
        "cidade": "Wuxi",
        "sigla": "WUX",
        "pais": "China"
    },
    {
        "cidade": "Paris - Vatry - Chalons - sur - Marne",
        "sigla": "XCR",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Harbour",
        "sigla": "XIQ",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Yasouj",
        "sigla": "YES",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Natuashish",
        "sigla": "YNP",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Yangyang",
        "sigla": "YNY",
        "pais": "Coreia do Sul"
    },
    {
        "cidade": "Yancheng",
        "sigla": "YNZ",
        "pais": "China"
    },
    {
        "cidade": "Trail",
        "sigla": "YZZ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Nanaimo Harbour",
        "sigla": "ZNA",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Fushan",
        "sigla": "FUO",
        "pais": "China"
    },
    {
        "cidade": "Suzhou",
        "sigla": "SZV",
        "pais": "China"
    },
    {
        "cidade": "Deutsche Bahn - Ferrovias Alem\u00e3s",
        "sigla": "QYG",
        "pais": "Alemanha"
    },
    {
        "cidade": "S\u00e3o Paulo de Oliven\u00e7a",
        "sigla": "OLC",
        "pais": "Brasil"
    },
    {
        "cidade": "Bauru - Arealva",
        "sigla": "JTC",
        "pais": "Brasil"
    },
    {
        "cidade": "Phoenix-Mesa Gateway",
        "sigla": "AZA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Boulder City",
        "sigla": "BLD",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "P\u00e4rnu",
        "sigla": "EPU",
        "pais": "Est\u00f3nia"
    },
    {
        "cidade": "Shetland Islands",
        "sigla": "LSI",
        "pais": "LWK"
    },
    {
        "cidade": "Cabo Frio",
        "sigla": "CFB",
        "pais": "Brasil"
    },
    {
        "cidade": "Santa Isabel do Rio Negro",
        "sigla": "IRZ",
        "pais": "Brasil"
    },
    {
        "cidade": "Patos de Minas",
        "sigla": "POJ",
        "pais": "Brasil"
    },
    {
        "cidade": "Drake Bay",
        "sigla": "DRK",
        "pais": "Costa Rica"
    },
    {
        "cidade": "El Palomar",
        "sigla": "EPA",
        "pais": "Argentina"
    },
    {
        "cidade": "Antique",
        "sigla": "EUQ",
        "pais": "Filipinas"
    },
    {
        "cidade": "Chu Lai",
        "sigla": "VCL",
        "pais": "Vietname"
    },
    {
        "cidade": "Dong Hoi",
        "sigla": "VDH",
        "pais": "Vietname"
    },
    {
        "cidade": "La Isabela - Santo Domingo",
        "sigla": "JBQ",
        "pais": "Rep\u00fablica Dominicana"
    },
    {
        "cidade": "Najaf",
        "sigla": "NJF",
        "pais": "Iraque"
    },
    {
        "cidade": "Rimatara",
        "sigla": "RMT",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Burgos",
        "sigla": "RGS",
        "pais": "Espanha"
    },
    {
        "cidade": "Tekirdag - Corlu",
        "sigla": "TEQ",
        "pais": "Turquia"
    },
    {
        "cidade": "Cabo San Lucas",
        "sigla": "CSL",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Zonguldak - \u00c7aycuma",
        "sigla": "ONQ",
        "pais": "Turquia"
    },
    {
        "cidade": "Keewaywin",
        "sigla": "KEW",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Len\u00e7\u00f3is",
        "sigla": "LEC",
        "pais": "Brasil"
    },
    {
        "cidade": "Maple Bay",
        "sigla": "YAQ",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Branson",
        "sigla": "BKG",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Lleida - Alguaire",
        "sigla": "ILD",
        "pais": "Espanha"
    },
    {
        "cidade": "Enfidha - Hammamet",
        "sigla": "NBE",
        "pais": "Tun\u00edsia"
    },
    {
        "cidade": "Santa Rosalia",
        "sigla": "SRL",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Nyagan",
        "sigla": "NYA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Sovetskiy",
        "sigla": "OVS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Strezhevoy",
        "sigla": "SWT",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Kulob",
        "sigla": "TJU",
        "pais": "Tajiquist\u00e3o"
    },
    {
        "cidade": "Kangding",
        "sigla": "KGT",
        "pais": "China"
    },
    {
        "cidade": "Asalouyeh - Persian Gulf",
        "sigla": "PGU",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Parsabad - Moghan",
        "sigla": "PFQ",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Abu Musa",
        "sigla": "AEU",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Zanjan",
        "sigla": "JWN",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Sarakhs",
        "sigla": "CKT",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Dezful",
        "sigla": "DEF",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Arak",
        "sigla": "AJK",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Tabas",
        "sigla": "TCX",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Rosita, Nicaragua",
        "sigla": "RFS",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Dubai - Al Maktoum",
        "sigla": "DWC",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Sapporo - Metro - todos aeroportos",
        "sigla": "CTS",
        "pais": "OKD"
    },
    {
        "cidade": "Houston, todos aeroportos",
        "sigla": "IAH",
        "pais": "HOU"
    },
    {
        "cidade": "Chumpon",
        "sigla": "CJM",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Uyuni",
        "sigla": "UYU",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Panama City, Florida",
        "sigla": "ECP",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Mont Tremblant",
        "sigla": "YTM",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Baise",
        "sigla": "AEB",
        "pais": "China"
    },
    {
        "cidade": "Busselton",
        "sigla": "BQB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Chlef",
        "sigla": "CFK",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Katsina",
        "sigla": "DKA",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Daqing Saertu",
        "sigla": "DQA",
        "pais": "China"
    },
    {
        "cidade": "Erenhot",
        "sigla": "ERL",
        "pais": "China"
    },
    {
        "cidade": "Beloyarsky",
        "sigla": "EYK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Beryozovo",
        "sigla": "EZV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Shizuoka",
        "sigla": "FSZ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Kakamega",
        "sigla": "GGM",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Gombe Lawanti",
        "sigla": "GMO",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Guangyuan",
        "sigla": "GYS",
        "pais": "China"
    },
    {
        "cidade": "Zhijiang",
        "sigla": "HJJ",
        "pais": "China"
    },
    {
        "cidade": "Sohag",
        "sigla": "HMB",
        "pais": "Egipto"
    },
    {
        "cidade": "Liping",
        "sigla": "HZH",
        "pais": "China"
    },
    {
        "cidade": "Siargao",
        "sigla": "IAO",
        "pais": "Filipinas"
    },
    {
        "cidade": "Ibaraki",
        "sigla": "IBR",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Jiujiang",
        "sigla": "JIU",
        "pais": "China"
    },
    {
        "cidade": "Jining",
        "sigla": "JNG",
        "pais": "China"
    },
    {
        "cidade": "Jixi",
        "sigla": "JXA",
        "pais": "China"
    },
    {
        "cidade": "Kurgan Tyube",
        "sigla": "KQT",
        "pais": "Tajiquist\u00e3o"
    },
    {
        "cidade": "Longyan",
        "sigla": "LCX",
        "pais": "China"
    },
    {
        "cidade": "Yichun Shi",
        "sigla": "LDS",
        "pais": "China"
    },
    {
        "cidade": "Linzhi",
        "sigla": "LZY",
        "pais": "China"
    },
    {
        "cidade": "Ngari",
        "sigla": "NGQ",
        "pais": "China"
    },
    {
        "cidade": "Xinjiang",
        "sigla": "NLT",
        "pais": "China"
    },
    {
        "cidade": "Port Harcourt City Airport",
        "sigla": "PHG",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Tengchong",
        "sigla": "TCZ",
        "pais": "China"
    },
    {
        "cidade": "Tanjung Manis",
        "sigla": "TGC",
        "pais": "Mal\u00e1sia"
    },
    {
        "cidade": "Turukhansk",
        "sigla": "THX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Tajima",
        "sigla": "TJH",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Tangshan",
        "sigla": "TVS",
        "pais": "China"
    },
    {
        "cidade": "Ukunda",
        "sigla": "UKA",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Lensk",
        "sigla": "ULK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Wenshan",
        "sigla": "WNH",
        "pais": "China"
    },
    {
        "cidade": "Bodaybo",
        "sigla": "ODO",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Igrim",
        "sigla": "IRM",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Lankaran",
        "sigla": "LLK",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "Zaqatala",
        "sigla": "ZTU",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "Yushu Batang",
        "sigla": "YUS",
        "pais": "China"
    },
    {
        "cidade": "Zhongwei Xiangshan",
        "sigla": "ZHY",
        "pais": "China"
    },
    {
        "cidade": "Handan",
        "sigla": "HDG",
        "pais": "China"
    },
    {
        "cidade": "Libo",
        "sigla": "LLB",
        "pais": "China"
    },
    {
        "cidade": "Anshun Huangguoshu",
        "sigla": "AVA",
        "pais": "China"
    },
    {
        "cidade": "Qianjiang Zhoubai",
        "sigla": "JIQ",
        "pais": "China"
    },
    {
        "cidade": "Baishan - Changbaishan",
        "sigla": "NBS",
        "pais": "China"
    },
    {
        "cidade": "Mohe - Gulian",
        "sigla": "OHE",
        "pais": "China"
    },
    {
        "cidade": "Okha",
        "sigla": "OHH",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Uyo",
        "sigla": "QUO",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Shigatse",
        "sigla": "RKZ",
        "pais": "China"
    },
    {
        "cidade": "Shahrud",
        "sigla": "RUD",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Juiz de Fora - Zona da Mata",
        "sigla": "IZA",
        "pais": "Brasil"
    },
    {
        "cidade": "Mechria",
        "sigla": "MZW",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "El Bayadh",
        "sigla": "EBH",
        "pais": "Arg\u00e9lia"
    },
    {
        "cidade": "Kanas Lake",
        "sigla": "KJI",
        "pais": "China"
    },
    {
        "cidade": "Jinchang",
        "sigla": "JIC",
        "pais": "China"
    },
    {
        "cidade": "Kandy Polgolla - Mahaweli Reservoir",
        "sigla": "KDZ",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Kandy - Victoria Reservoir",
        "sigla": "KDW",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Krasnoselkup",
        "sigla": "KKQ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Yuzhno-Kurilsk - Mendeleevo",
        "sigla": "DEE",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Hatton - Castlereagh Reservoir",
        "sigla": "NUF",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Nha Trang - Cam Ranh",
        "sigla": "CXR",
        "pais": "Vietname"
    },
    {
        "cidade": "Zagora",
        "sigla": "OZG",
        "pais": "Morrocos"
    },
    {
        "cidade": "Fuvahmulah",
        "sigla": "FVM",
        "pais": "Maldivas"
    },
    {
        "cidade": "Lombok",
        "sigla": "LOP",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Gazipasa",
        "sigla": "GZP",
        "pais": "Turquia"
    },
    {
        "cidade": "Ulyanovsk",
        "sigla": "ULV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Vars\u00f3via - Modlin",
        "sigla": "WMI",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Pukapuka",
        "sigla": "PZK",
        "pais": "Ilhas Cook"
    },
    {
        "cidade": "Kooddoo",
        "sigla": "GKK",
        "pais": "Maldivas"
    },
    {
        "cidade": "Maamigili",
        "sigla": "VAM",
        "pais": "Maldivas"
    },
    {
        "cidade": "Dharavandhoo",
        "sigla": "DRV",
        "pais": "Maldivas"
    },
    {
        "cidade": "Igdir",
        "sigla": "IGD",
        "pais": "Turquia"
    },
    {
        "cidade": "Sigiriya",
        "sigla": "GIU",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Anshan",
        "sigla": "AOG",
        "pais": "China"
    },
    {
        "cidade": "Kutahya Zafer",
        "sigla": "KZR",
        "pais": "Turquia"
    },
    {
        "cidade": "Siborong-Borong - Silangit",
        "sigla": "DTB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Sirnak",
        "sigla": "NKT",
        "pais": "Turquia"
    },
    {
        "cidade": "Kastamonu",
        "sigla": "KFS",
        "pais": "Turquia"
    },
    {
        "cidade": "Kocaeli",
        "sigla": "KCO",
        "pais": "Turquia"
    },
    {
        "cidade": "Cacoal",
        "sigla": "OAL",
        "pais": "Brasil"
    },
    {
        "cidade": "Yongphulla",
        "sigla": "YON",
        "pais": "But\u00e3o"
    },
    {
        "cidade": "Mattala",
        "sigla": "HRI",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Sri Jayawardenapura Kotte",
        "sigla": "DWO",
        "pais": "Sri Lanka"
    },
    {
        "cidade": "Naypyidaw",
        "sigla": "NYT",
        "pais": "Myanmar"
    },
    {
        "cidade": "Erbogachen",
        "sigla": "ERG",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Thanh Hoa",
        "sigla": "THD",
        "pais": "Vietname"
    },
    {
        "cidade": "Daocheng - Yading",
        "sigla": "DCY",
        "pais": "China"
    },
    {
        "cidade": "Kaili",
        "sigla": "KJH",
        "pais": "China"
    },
    {
        "cidade": "Feira de Santana",
        "sigla": "FEC",
        "pais": "Brasil"
    },
    {
        "cidade": "Teixeira de Freitas",
        "sigla": "TXF",
        "pais": "Brasil"
    },
    {
        "cidade": "Tres Lagoas",
        "sigla": "TJL",
        "pais": "Brasil"
    },
    {
        "cidade": "Al-Ula",
        "sigla": "ULH",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Thimarafushi",
        "sigla": "TMF",
        "pais": "Maldivas"
    },
    {
        "cidade": "Castellon",
        "sigla": "CDT",
        "pais": "Espanha"
    },
    {
        "cidade": "Ordu-Giresun",
        "sigla": "OGU",
        "pais": "Turquia"
    },
    {
        "cidade": "Chizhou",
        "sigla": "JUH",
        "pais": "China"
    },
    {
        "cidade": "Zhangye",
        "sigla": "YZY",
        "pais": "China"
    },
    {
        "cidade": "Xiahe",
        "sigla": "GXH",
        "pais": "China"
    },
    {
        "cidade": "Tianshui",
        "sigla": "THQ",
        "pais": "China"
    },
    {
        "cidade": "Huizhou",
        "sigla": "HUZ",
        "pais": "China"
    },
    {
        "cidade": "Hechi",
        "sigla": "HCJ",
        "pais": "China"
    },
    {
        "cidade": "Liupanshui",
        "sigla": "LPF",
        "pais": "China"
    },
    {
        "cidade": "Zhangjiakou",
        "sigla": "ZQZ",
        "pais": "China"
    },
    {
        "cidade": "Qinhuangdao - Beidaihe",
        "sigla": "BPE",
        "pais": "China"
    },
    {
        "cidade": "Jiagedaqi",
        "sigla": "JGD",
        "pais": "China"
    },
    {
        "cidade": "Fuyuan",
        "sigla": "FYJ",
        "pais": "China"
    },
    {
        "cidade": "Shennongjia",
        "sigla": "HPG",
        "pais": "China"
    },
    {
        "cidade": "Ejin Banner",
        "sigla": "EJN",
        "pais": "China"
    },
    {
        "cidade": "Bayannur",
        "sigla": "RLK",
        "pais": "China"
    },
    {
        "cidade": "Arxan Yi'ershi",
        "sigla": "YIE",
        "pais": "China"
    },
    {
        "cidade": "Badanjilin",
        "sigla": "RHT",
        "pais": "China"
    },
    {
        "cidade": "Bayanhot",
        "sigla": "AXF",
        "pais": "China"
    },
    {
        "cidade": "Yangzhou Taizhou",
        "sigla": "YTY",
        "pais": "China"
    },
    {
        "cidade": "Yichun",
        "sigla": "YIC",
        "pais": "China"
    },
    {
        "cidade": "Tonghua",
        "sigla": "TNH",
        "pais": "China"
    },
    {
        "cidade": "Guyuan",
        "sigla": "GYU",
        "pais": "China"
    },
    {
        "cidade": "Delingha",
        "sigla": "HXD",
        "pais": "China"
    },
    {
        "cidade": "L\u00fcliang",
        "sigla": "LLV",
        "pais": "China"
    },
    {
        "cidade": "Turpan",
        "sigla": "TLQ",
        "pais": "China"
    },
    {
        "cidade": "Vidyanagar",
        "sigla": "VDY",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Blimbingsari",
        "sigla": "BWX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Likoma",
        "sigla": "LIX",
        "pais": "Malawi"
    },
    {
        "cidade": "Asaba International Airport",
        "sigla": "ABB",
        "pais": "Nig\u00e9ria"
    },
    {
        "cidade": "Concord, North Carolina",
        "sigla": "USA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Olsztyn-Mazury",
        "sigla": "SZY",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Balkanabat",
        "sigla": "BKN",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Dalcahue - Mocopulli",
        "sigla": "MHC",
        "pais": "Chile"
    },
    {
        "cidade": "St. Helena",
        "sigla": "HLE",
        "pais": "Santa Helena"
    },
    {
        "cidade": "Aappilattoq",
        "sigla": "QUV",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Ammassivik",
        "sigla": "QUW",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Narsaq Kujalleq",
        "sigla": "QFN",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Niaqornat",
        "sigla": "NIQ",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Prominent Hill",
        "sigla": "PXH",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wellcamp",
        "sigla": "WTB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Raroia",
        "sigla": "RRR",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Durgapur - Kazi Nazrul Islam",
        "sigla": "RDP",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ceiba",
        "sigla": "NRR",
        "pais": "Porto Rico"
    },
    {
        "cidade": "Sikhuphe International Airport",
        "sigla": "SHO",
        "pais": "Suazil\u00e2ndia"
    },
    {
        "cidade": "Batagay",
        "sigla": "BQJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Belaya Gora",
        "sigla": "BGN",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Magan",
        "sigla": "GYG",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Khandyga",
        "sigla": "KDY",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ust-Kuyga",
        "sigla": "UKG",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ust-Nera",
        "sigla": "USR",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ust-Maya",
        "sigla": "UMS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Verkhnevilyuysk",
        "sigla": "VHV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Vilyuysk",
        "sigla": "VYI",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Radom",
        "sigla": "RDO",
        "pais": "Pol\u00f3nia"
    },
    {
        "cidade": "Deputatsky",
        "sigla": "DPT",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Zhigansk",
        "sigla": "ZIX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Moma",
        "sigla": "MQJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Olyokminsk",
        "sigla": "OLZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Olenyok",
        "sigla": "ONK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Srednekolymsk",
        "sigla": "SEK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Nogliki",
        "sigla": "NGK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Gorno-Altaysk",
        "sigla": "RGK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Keperveyem",
        "sigla": "KPW",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Jeki",
        "sigla": "JEK",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "Mengomeyen",
        "sigla": "GEM",
        "pais": "Guin\u00e9 Equatorial"
    },
    {
        "cidade": "Annobon",
        "sigla": "NBN",
        "pais": "Guin\u00e9 Equatorial"
    },
    {
        "cidade": "Matsu Beigan",
        "sigla": "MFK",
        "pais": "Taiwan"
    },
    {
        "cidade": "Ann",
        "sigla": "VBA",
        "pais": "Myanmar"
    },
    {
        "cidade": "Bokpyin",
        "sigla": "VBP",
        "pais": "Myanmar"
    },
    {
        "cidade": "Manaung",
        "sigla": "MGU",
        "pais": "Myanmar"
    },
    {
        "cidade": "Monywa",
        "sigla": "NYW",
        "pais": "Myanmar"
    },
    {
        "cidade": "Semera",
        "sigla": "SZE",
        "pais": "Eti\u00f3pia"
    },
    {
        "cidade": "Jundiai",
        "sigla": "QDV",
        "pais": "Brasil"
    },
    {
        "cidade": "Divinopolis",
        "sigla": "DIQ",
        "pais": "Brasil"
    },
    {
        "cidade": "Sanming",
        "sigla": "SQJ",
        "pais": "China"
    },
    {
        "cidade": "Gachsaran",
        "sigla": "GCH",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Pedasi",
        "sigla": "PDM",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Isla San Jose",
        "sigla": "SIC",
        "pais": "Panam\u00e1"
    },
    {
        "cidade": "Duqm",
        "sigla": "DQM",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Sohar",
        "sigla": "OHS",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Costa Esmeralda",
        "sigla": "ECI",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Murcia",
        "sigla": "RMU",
        "pais": "Espanha"
    },
    {
        "cidade": "Moscovo - Ramenskoye",
        "sigla": "ZIA",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Bogorodskoye",
        "sigla": "BQG",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Grand-Santi",
        "sigla": "GSI",
        "pais": "Guiana Francesa"
    },
    {
        "cidade": "Amakusa",
        "sigla": "AXJ",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Gyor",
        "sigla": "QGY",
        "pais": "Hungria"
    },
    {
        "cidade": "Yahukimo",
        "sigla": "DEX",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "San Ignacio",
        "sigla": "CYD",
        "pais": "Belize"
    },
    {
        "cidade": "Retalhuleu",
        "sigla": "RER",
        "pais": "Guatemala"
    },
    {
        "cidade": "Jaguaruna",
        "sigla": "JJG",
        "pais": "Brasil"
    },
    {
        "cidade": "Sorriso",
        "sigla": "SMT",
        "pais": "Brasil"
    },
    {
        "cidade": "Chimore",
        "sigla": "CCA",
        "pais": "Bol\u00edvia"
    },
    {
        "cidade": "Timna-Ramon Airport",
        "sigla": "ETM",
        "pais": "Israel"
    },
    {
        "cidade": "Linfen Qiaoli",
        "sigla": "LFQ",
        "pais": "China"
    },
    {
        "cidade": "Ulanqab Jining",
        "sigla": "UCB",
        "pais": "China"
    },
    {
        "cidade": "Zhalantun Chengjisihan",
        "sigla": "NZL",
        "pais": "China"
    },
    {
        "cidade": "Baicheng Chang'an",
        "sigla": "DBC",
        "pais": "China"
    },
    {
        "cidade": "Shiyan Wudangshan",
        "sigla": "WDS",
        "pais": "China"
    },
    {
        "cidade": "Qionghai Bo'ao",
        "sigla": "BAR",
        "pais": "China"
    },
    {
        "cidade": "Hongyuan",
        "sigla": "AHJ",
        "pais": "China"
    },
    {
        "cidade": "Cangyuan Washan",
        "sigla": "CWJ",
        "pais": "China"
    },
    {
        "cidade": "Lancang Jingmai",
        "sigla": "JMJ",
        "pais": "China"
    },
    {
        "cidade": "Ninglang Luguhu",
        "sigla": "NLH",
        "pais": "China"
    },
    {
        "cidade": "Golog Maqin",
        "sigla": "GMQ",
        "pais": "China"
    },
    {
        "cidade": "Jericoacoara",
        "sigla": "JJD",
        "pais": "Brasil"
    },
    {
        "cidade": "Adado",
        "sigla": "AAD",
        "pais": "Som\u00e1lia"
    },
    {
        "cidade": "Kudahuvadhoo",
        "sigla": "DDD",
        "pais": "Maldivas"
    },
    {
        "cidade": "Issyk-Kul",
        "sigla": "IKU",
        "pais": "Quirguist\u00e3o"
    },
    {
        "cidade": "Nasiriyah",
        "sigla": "XNH",
        "pais": "Iraque"
    },
    {
        "cidade": "Miles",
        "sigla": "WLE",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Yingkou",
        "sigla": "YKH",
        "pais": "China"
    },
    {
        "cidade": "Shangrao",
        "sigla": "SQD",
        "pais": "China"
    },
    {
        "cidade": "Shache",
        "sigla": "QSZ",
        "pais": "China"
    },
    {
        "cidade": "Sabetta",
        "sigla": "SBT",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Simeulue",
        "sigla": "SMG",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Palopo",
        "sigla": "LLO",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Buol",
        "sigla": "UOL",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Jember",
        "sigla": "JBB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Raja Ampat",
        "sigla": "RJM",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Rembele",
        "sigla": "TXE",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Wakatobi",
        "sigla": "WNI",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Kashan",
        "sigla": "KKS",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Huolinhe",
        "sigla": "HUO",
        "pais": "China"
    },
    {
        "cidade": "Chengde",
        "sigla": "CDE",
        "pais": "China"
    },
    {
        "cidade": "Iturup",
        "sigla": "ITU",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "La Romaine",
        "sigla": "ZGS",
        "pais": "Canad\u00e1"
    },
    {
        "cidade": "Dakar - Blaise Diagne",
        "sigla": "DSS",
        "pais": "Senegal"
    },
    {
        "cidade": "Dalneretschensk",
        "sigla": "DLR",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Terney",
        "sigla": "NEI",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Dalnegorsk",
        "sigla": "DHG",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Svetlaya",
        "sigla": "ETL",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Edinka",
        "sigla": "EDN",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Barimunya",
        "sigla": "BYP",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Wudalianchi",
        "sigla": "DTU",
        "pais": "China"
    },
    {
        "cidade": "Jiansanjiang",
        "sigla": "JSJ",
        "pais": "China"
    },
    {
        "cidade": "Kalaleh",
        "sigla": "KLM",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Longnan",
        "sigla": "LNL",
        "pais": "China"
    },
    {
        "cidade": "Urdzhar",
        "sigla": "UZR",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Zunyi Maotai",
        "sigla": "WMT",
        "pais": "China"
    },
    {
        "cidade": "Songyuan",
        "sigla": "YSQ",
        "pais": "China"
    },
    {
        "cidade": "Jahrom",
        "sigla": "JAR",
        "pais": "Ir\u00e3o"
    },
    {
        "cidade": "Jaisalmer",
        "sigla": "JSA",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Shirdi",
        "sigla": "SAG",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ruoqiang",
        "sigla": "RQA",
        "pais": "China"
    },
    {
        "cidade": "Ilopango International",
        "sigla": "ILS",
        "pais": "El Salvador"
    },
    {
        "cidade": "Selayar Islands",
        "sigla": "KSR",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Kannur",
        "sigla": "CNN",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Gangtok-Pakyong Airport",
        "sigla": "PYG",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Istambul",
        "sigla": "IST",
        "pais": "Turquia"
    },
    {
        "cidade": "Kishangarh",
        "sigla": "KQH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Jharsuguda",
        "sigla": "JRG",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Coondewanna",
        "sigla": "CJF",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Grand Canyon Bar 10 Airport",
        "sigla": "GCT",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Grand Canyon West",
        "sigla": "GCW",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Gelephu",
        "sigla": "GLU",
        "pais": "But\u00e3o"
    },
    {
        "cidade": "Grumeti",
        "sigla": "GTZ",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Qilian",
        "sigla": "HBQ",
        "pais": "China"
    },
    {
        "cidade": "Huatugou",
        "sigla": "HTT",
        "pais": "China"
    },
    {
        "cidade": "Iwakuni",
        "sigla": "IWK",
        "pais": "Jap\u00e3o"
    },
    {
        "cidade": "Jaen",
        "sigla": "JAE",
        "pais": "Peru"
    },
    {
        "cidade": "Letung",
        "sigla": "LMU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Morowali",
        "sigla": "MOH",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Ngala",
        "sigla": "NGL",
        "pais": "\u00c1frica do Sul"
    },
    {
        "cidade": "Phosphate Hill",
        "sigla": "PHQ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Manaoba",
        "sigla": "MHM",
        "pais": "Ilhas Salom\u00e3o"
    },
    {
        "cidade": "Puerto Cabezas",
        "sigla": "PUZ",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Pagar Alam",
        "sigla": "PXA",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Karimun Jawa",
        "sigla": "KWB",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Miangas",
        "sigla": "MKF",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Corn Island",
        "sigla": "RNI",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Damazin",
        "sigla": "RSS",
        "pais": "Sud\u00e3o"
    },
    {
        "cidade": "Lower Zambezi National Park, Royal Airstrip",
        "sigla": "RYL",
        "pais": "Z\u00e2mbia"
    },
    {
        "cidade": "San Vicente",
        "sigla": "SWL",
        "pais": "Filipinas"
    },
    {
        "cidade": "Evensk",
        "sigla": "SWV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Saskylakh",
        "sigla": "SYS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Podkamennaya Tunguska",
        "sigla": "TGP",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Talakan",
        "sigla": "TLK",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Trepell",
        "sigla": "TQP",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "San Domino - Heliport",
        "sigla": "TQR",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Vieste Heliport",
        "sigla": "VIF",
        "pais": "It\u00e1lia"
    },
    {
        "cidade": "Mount Keith",
        "sigla": "WME",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Xinyang",
        "sigla": "XAI",
        "pais": "China"
    },
    {
        "cidade": "Zintan",
        "sigla": "ZIS",
        "pais": "L\u00edbia"
    },
    {
        "cidade": "Malinau",
        "sigla": "LNU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Pangandaran",
        "sigla": "CJN",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Bluefields",
        "sigla": "BEF",
        "pais": "Nicar\u00e1gua"
    },
    {
        "cidade": "Zaysan",
        "sigla": "SZI",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Mara-Musiara",
        "sigla": "MDR",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Van Don",
        "sigla": "VDO",
        "pais": "Vietname"
    },
    {
        "cidade": "Giza-Sphinx International Airport",
        "sigla": "SPX",
        "pais": "Egipto"
    },
    {
        "cidade": "Santa Monica",
        "sigla": "SMO",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Yogyakarta International",
        "sigla": "YIA",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Beijing Daxing",
        "sigla": "PKX",
        "pais": "China"
    },
    {
        "cidade": "Salen/Trysil - Scandinavian Mountains Airport",
        "sigla": "SCR",
        "pais": "Su\u00e9cia"
    },
    {
        "cidade": "Williston Basin International",
        "sigla": "XWA",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Ballera",
        "sigla": "BBL",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Angama - Maasai Mara Airport",
        "sigla": "ANA",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Bovanenkovo Airport",
        "sigla": "BVJ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Bendigo",
        "sigla": "BXG",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Bazhong Enyang",
        "sigla": "BZX",
        "pais": "China"
    },
    {
        "cidade": "Christmas Creek mine",
        "sigla": "CKW",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Melak - Melalan",
        "sigla": "GHS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Saratov - Gagarin",
        "sigla": "GSV",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Ganzi - Gesar",
        "sigla": "GZG",
        "pais": "China"
    },
    {
        "cidade": "Ilo",
        "sigla": "ILQ",
        "pais": "Peru"
    },
    {
        "cidade": "Majalengka - Kertajati",
        "sigla": "KJT",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Lubuk Linggau - Silampari",
        "sigla": "LLJ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "New York Skyports Seaplane Base",
        "sigla": "NYS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Wushan",
        "sigla": "WSK",
        "pais": "China"
    },
    {
        "cidade": "Bouarfa",
        "sigla": "UAR",
        "pais": "Morrocos"
    },
    {
        "cidade": "Tumushuke",
        "sigla": "TWC",
        "pais": "China"
    },
    {
        "cidade": "Campo Mourao",
        "sigla": "CBW",
        "pais": "Brasil"
    },
    {
        "cidade": "Cianorte",
        "sigla": "GGH",
        "pais": "Brasil"
    },
    {
        "cidade": "Telemaco",
        "sigla": "TEC",
        "pais": "Brasil"
    },
    {
        "cidade": "Rio de Janeiro - Jacarepagu\u00e1",
        "sigla": "RRJ",
        "pais": "Brasil"
    },
    {
        "cidade": "Usharal",
        "sigla": "USJ",
        "pais": "Cazaquist\u00e3o"
    },
    {
        "cidade": "Mara North Airstrip",
        "sigla": "HKR",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Olkiombo Airstrip",
        "sigla": "OLX",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Olare Orok Airstrip",
        "sigla": "OLG",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Keekorok Airstrip",
        "sigla": "KEU",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Kichwa Tembo Airstrip",
        "sigla": "KTJ",
        "pais": "Qu\u00e9nia"
    },
    {
        "cidade": "Kulhudhuffushi",
        "sigla": "HDK",
        "pais": "Maldivas"
    },
    {
        "cidade": "Ampana",
        "sigla": "OJU",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Agua Boa",
        "sigla": "GGB",
        "pais": "Brasil"
    },
    {
        "cidade": "San Isidro",
        "sigla": "IPZ",
        "pais": "Costa Rica"
    },
    {
        "cidade": "Pithoragarh",
        "sigla": "NNS",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Maafaru",
        "sigla": "NMF",
        "pais": "Maldivas"
    },
    {
        "cidade": "Funadhoo",
        "sigla": "FND",
        "pais": "Maldivas"
    },
    {
        "cidade": "Mpanda",
        "sigla": "NPY",
        "pais": "Tanz\u00e2nia"
    },
    {
        "cidade": "Atalaya",
        "sigla": "AYX",
        "pais": "Peru"
    },
    {
        "cidade": "Almeirim",
        "sigla": "GGF",
        "pais": "Brasil"
    },
    {
        "cidade": "Kauehi",
        "sigla": "KHZ",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Wa",
        "sigla": "WZA",
        "pais": "Gana"
    },
    {
        "cidade": "Katiu",
        "sigla": "KXU",
        "pais": "Polin\u00e9sia Francesa"
    },
    {
        "cidade": "Deqing Moganshan",
        "sigla": "DEQ",
        "pais": "China"
    },
    {
        "cidade": "Bidar",
        "sigla": "IXX",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Juruti",
        "sigla": "JRT",
        "pais": "Brasil"
    },
    {
        "cidade": "Nenjiang",
        "sigla": "NJJ",
        "pais": "China"
    },
    {
        "cidade": "Marmul",
        "sigla": "OMM",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Qarn Alam",
        "sigla": "RNM",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Latrobe Valley",
        "sigla": "TJN",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Serra Talhada",
        "sigla": "SET",
        "pais": "Brasil"
    },
    {
        "cidade": "Yulin - Fumian",
        "sigla": "YLX",
        "pais": "China"
    },
    {
        "cidade": "Angra dos Reis",
        "sigla": "GDR",
        "pais": "Brasil"
    },
    {
        "cidade": "Kurnool",
        "sigla": "KJB",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "New Ulaanbaatar International Airport",
        "sigla": "UBN",
        "pais": "Mong\u00f3lia"
    },
    {
        "cidade": "WAEM",
        "sigla": "PGQ",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Longchuan",
        "sigla": "LCS",
        "pais": "China"
    },
    {
        "cidade": "Zhengzhou Shangjie",
        "sigla": "HSJ",
        "pais": "China"
    },
    {
        "cidade": "Wuhu Xuanzhou",
        "sigla": "WHA",
        "pais": "China"
    },
    {
        "cidade": "Kukes",
        "sigla": "KFZ",
        "pais": "Alb\u00e2nia"
    },
    {
        "cidade": "Santa Cruz do Sul",
        "sigla": "CSU",
        "pais": "Brasil"
    },
    {
        "cidade": "Darbhanga",
        "sigla": "DBR",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Patos",
        "sigla": "JPO",
        "pais": "Brasil"
    },
    {
        "cidade": "Chenzhou",
        "sigla": "HCZ",
        "pais": "China"
    },
    {
        "cidade": "Sovetskaya Gavan",
        "sigla": "GVN",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Eliwana Airport",
        "sigla": "WHB",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Tobolsk",
        "sigla": "RMZ",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Punta Sal",
        "sigla": "PTL",
        "pais": "Peru"
    },
    {
        "cidade": "Solomon",
        "sigla": "SLJ",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Tana Toraja",
        "sigla": "TRT",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Vacaria",
        "sigla": "VCC",
        "pais": "Brasil"
    },
    {
        "cidade": "Fuzuli",
        "sigla": "FZL",
        "pais": "Azerbeij\u00e3o"
    },
    {
        "cidade": "Fahud",
        "sigla": "FAU",
        "pais": "Om\u00e3"
    },
    {
        "cidade": "Mungalalu Truscott Airbase",
        "sigla": "TTX",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Aguachica",
        "sigla": "HAY",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Trinsing",
        "sigla": "HMS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Paragominas",
        "sigla": "JPE",
        "pais": "Brasil"
    },
    {
        "cidade": "Sindhudurg",
        "sigla": "SDW",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Bukarest Metro Code",
        "sigla": "OTP",
        "pais": "BBU"
    },
    {
        "cidade": "Moscovo - Ostafjewo",
        "sigla": "OSF",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Green River Municipal Airport",
        "sigla": "RVR",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Felipe Angeles - Mexico City",
        "sigla": "NLU",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Albert \u2013 Picardie",
        "sigla": "BYF",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Dazhou - Jinya",
        "sigla": "DZH",
        "pais": "China"
    },
    {
        "cidade": "Correia Pinto",
        "sigla": "EEA",
        "pais": "Brasil"
    },
    {
        "cidade": "Madivaru",
        "sigla": "LMV",
        "pais": "Maldivas"
    },
    {
        "cidade": "Puerto Gaitan",
        "sigla": "MSK",
        "pais": "Col\u00f4mbia"
    },
    {
        "cidade": "Salinopolis",
        "sigla": "OPP",
        "pais": "Brasil"
    },
    {
        "cidade": "Ugashik Airport",
        "sigla": "UGS",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Sao Borja",
        "sigla": "JBS",
        "pais": "Brasil"
    },
    {
        "cidade": "Kushinagar",
        "sigla": "KBK",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Kerki",
        "sigla": "KEA",
        "pais": "Turquemenist\u00e3o"
    },
    {
        "cidade": "Uniao da Vitoria",
        "sigla": "UVI",
        "pais": "Brasil"
    },
    {
        "cidade": "Belle Ile",
        "sigla": "BIC",
        "pais": "Fran\u00e7a"
    },
    {
        "cidade": "Alexandrowsk-Sachalinski",
        "sigla": "UHS",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Boolgeeda",
        "sigla": "OCM",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Koodaideri Mine",
        "sigla": "OOD",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Aral Talim",
        "sigla": "ACF",
        "pais": "China"
    },
    {
        "cidade": "Kihihi Airstrip",
        "sigla": "KHX",
        "pais": "Uganda"
    },
    {
        "cidade": "Rize\u2013Artvin",
        "sigla": "RZV",
        "pais": "Turquia"
    },
    {
        "cidade": "Chengdu Tianfu",
        "sigla": "TFU",
        "pais": "China"
    },
    {
        "cidade": "Tobolsk",
        "sigla": "TOX",
        "pais": "R\u00fassia"
    },
    {
        "cidade": "Betong",
        "sigla": "BTZ",
        "pais": "Tail\u00e2ndia"
    },
    {
        "cidade": "Sossusvlei",
        "sigla": "SZM",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Liwonde Mvuu Camp",
        "sigla": "VUU",
        "pais": "Malawi"
    },
    {
        "cidade": "West Angelas Airport",
        "sigla": "WLP",
        "pais": "Austr\u00e1lia"
    },
    {
        "cidade": "Zhaosu",
        "sigla": "ZFL",
        "pais": "China"
    },
    {
        "cidade": "Etosha",
        "sigla": "OGV",
        "pais": "Nam\u00edbia"
    },
    {
        "cidade": "Ezhou Huahu",
        "sigla": "EHU",
        "pais": "China"
    },
    {
        "cidade": "El Alamein",
        "sigla": "DBB",
        "pais": "Egipto"
    },
    {
        "cidade": "Sobral",
        "sigla": "JSO",
        "pais": "Brasil"
    },
    {
        "cidade": "Sarfannguit",
        "sigla": "SZC",
        "pais": "Gronel\u00e2ndia"
    },
    {
        "cidade": "Thoise",
        "sigla": "TEV",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Muara Bungo - Morowali",
        "sigla": "MWS",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Garanhuns",
        "sigla": "QGP",
        "pais": "Brasil"
    },
    {
        "cidade": "Iguatu",
        "sigla": "QIG",
        "pais": "Brasil"
    },
    {
        "cidade": "Merlo",
        "sigla": "RLO",
        "pais": "Argentina"
    },
    {
        "cidade": "Canela",
        "sigla": "CEL",
        "pais": "Brasil"
    },
    {
        "cidade": "Ceske Budejovice",
        "sigla": "JCL",
        "pais": "Rep\u00fablica Checa"
    },
    {
        "cidade": "EK Bus Station",
        "sigla": "ZVJ",
        "pais": "Emirados \u00c1rabes Unidos"
    },
    {
        "cidade": "Deoghar",
        "sigla": "DGH",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Bicol International",
        "sigla": "DRP",
        "pais": "Filipinas"
    },
    {
        "cidade": "New Goa International Airport",
        "sigla": "GOX",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Itanagar",
        "sigla": "HGI",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Victorville",
        "sigla": "VCV",
        "pais": "Estados Unidos"
    },
    {
        "cidade": "Borongan",
        "sigla": "BPA",
        "pais": "Filipinas"
    },
    {
        "cidade": "Shannan",
        "sigla": "LGZ",
        "pais": "China"
    },
    {
        "cidade": "Shigatse Tingri",
        "sigla": "DDR",
        "pais": "China"
    },
    {
        "cidade": "Araripina",
        "sigla": "JAW",
        "pais": "Brasil"
    },
    {
        "cidade": "Cairu",
        "sigla": "MXQ",
        "pais": "Brasil"
    },
    {
        "cidade": "Tashkurgan",
        "sigla": "HQL",
        "pais": "China"
    },
    {
        "cidade": "Cagayan North International Airport",
        "sigla": "LLC",
        "pais": "Filipinas"
    },
    {
        "cidade": "Siem Reap\u2013Angkor International Airport",
        "sigla": "SAI",
        "pais": "Camboja"
    },
    {
        "cidade": "Tulum",
        "sigla": "TQO",
        "pais": "M\u00e9xico"
    },
    {
        "cidade": "Brasov-Ghimbav",
        "sigla": "GHV",
        "pais": "Rom\u00e9nia"
    },
    {
        "cidade": "Chisinau",
        "sigla": "RMO",
        "pais": "Mold\u00e1via"
    },
    {
        "cidade": "Maavarulu",
        "sigla": "RUL",
        "pais": "Maldivas"
    },
    {
        "cidade": "Utkela",
        "sigla": "UKE",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Sao Benedito",
        "sigla": "JSB",
        "pais": "Brasil"
    },
    {
        "cidade": "Yutian",
        "sigla": "YTW",
        "pais": "China"
    },
    {
        "cidade": "Bawean",
        "sigla": "BXW",
        "pais": "Indon\u00e9sia"
    },
    {
        "cidade": "Shivamogga",
        "sigla": "RQY",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ghaziabad",
        "sigla": "HDO",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Ayodhya",
        "sigla": "AYJ",
        "pais": "\u00cdndia"
    },
    {
        "cidade": "Shuozhou",
        "sigla": "SZH",
        "pais": "China"
    },
    {
        "cidade": "Red Sea International",
        "sigla": "RSI",
        "pais": "Ar\u00e1bia Saudita"
    },
    {
        "cidade": "Rajkot",
        "sigla": "HSR",
        "pais": "\u00cdndia"
    }
]


export {aeroportos}