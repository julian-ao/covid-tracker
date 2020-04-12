// 20200409185332
// https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag;altSpellings;

let countries = [
    {
      "flag": "https://restcountries.eu/data/afg.svg",
      "name": "Afghanistan",
      "alpha2Code": "AF",
      "altSpellings": [
        "AF",
        "Afġānistān"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/alb.svg",
      "name": "Albania",
      "alpha2Code": "AL",
      "altSpellings": [
        "AL",
        "Shqipëri",
        "Shqipëria",
        "Shqipnia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/dza.svg",
      "name": "Algeria",
      "alpha2Code": "DZ",
      "altSpellings": [
        "DZ",
        "Dzayer",
        "Algérie"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ago.svg",
      "name": "Angola",
      "alpha2Code": "AO",
      "altSpellings": [
        "AO",
        "República de Angola",
        "ʁɛpublika de an'ɡɔla"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/arg.svg",
      "name": "Argentina",
      "alpha2Code": "AR",
      "altSpellings": [
        "AR",
        "Argentine Republic",
        "República Argentina"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/arm.svg",
      "name": "Armenia",
      "alpha2Code": "AM",
      "altSpellings": [
        "AM",
        "Hayastan",
        "Republic of Armenia",
        "Հայաստանի Հանրապետություն"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/aus.svg",
      "name": "Australia",
      "alpha2Code": "AU",
      "altSpellings": [
        "AU"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/aut.svg",
      "name": "Austria",
      "alpha2Code": "AT",
      "altSpellings": [
        "AT",
        "Österreich",
        "Osterreich",
        "Oesterreich"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/aze.svg",
      "name": "Azerbaijan",
      "alpha2Code": "AZ",
      "altSpellings": [
        "AZ",
        "Republic of Azerbaijan",
        "Azərbaycan Respublikası"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bhs.svg",
      "name": "Bahamas",
      "alpha2Code": "BS",
      "altSpellings": [
        "BS",
        "Commonwealth of the Bahamas"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bgd.svg",
      "name": "Bangladesh",
      "alpha2Code": "BD",
      "altSpellings": [
        "BD",
        "People's Republic of Bangladesh",
        "Gônôprôjatôntri Bangladesh"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/blr.svg",
      "name": "Belarus",
      "alpha2Code": "BY",
      "altSpellings": [
        "BY",
        "Bielaruś",
        "Republic of Belarus",
        "Белоруссия",
        "Республика Беларусь",
        "Belorussiya",
        "Respublika Belarus’"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bel.svg",
      "name": "Belgium",
      "alpha2Code": "BE",
      "altSpellings": [
        "BE",
        "België",
        "Belgie",
        "Belgien",
        "Belgique",
        "Kingdom of Belgium",
        "Koninkrijk België",
        "Royaume de Belgique",
        "Königreich Belgien"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/blz.svg",
      "name": "Belize",
      "alpha2Code": "BZ",
      "altSpellings": [
        "BZ"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ben.svg",
      "name": "Benin",
      "alpha2Code": "BJ",
      "altSpellings": [
        "BJ",
        "Republic of Benin",
        "République du Bénin"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/btn.svg",
      "name": "Bhutan",
      "alpha2Code": "BT",
      "altSpellings": [
        "BT",
        "Kingdom of Bhutan"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bol.svg",
      "name": "Bolivia", //"Bolivia (Plurinational State of)"
      "alpha2Code": "BO",
      "altSpellings": [
        "BO",
        "Buliwya",
        "Wuliwya",
        "Plurinational State of Bolivia",
        "Estado Plurinacional de Bolivia",
        "Buliwya Mamallaqta",
        "Wuliwya Suyu",
        "Tetã Volívia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bih.svg",
      "name": "Bosnia and Herzegovina",
      "alpha2Code": "BA",
      "altSpellings": [
        "BA",
        "Bosnia-Herzegovina",
        "Босна и Херцеговина"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bwa.svg",
      "name": "Botswana",
      "alpha2Code": "BW",
      "altSpellings": [
        "BW",
        "Republic of Botswana",
        "Lefatshe la Botswana"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bra.svg",
      "name": "Brazil",
      "alpha2Code": "BR",
      "altSpellings": [
        "BR",
        "Brasil",
        "Federative Republic of Brazil",
        "República Federativa do Brasil"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/brn.svg",
      "name": "Brunei Darussalam",
      "alpha2Code": "BN",
      "altSpellings": [
        "BN",
        "Nation of Brunei",
        " the Abode of Peace"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bgr.svg",
      "name": "Bulgaria",
      "alpha2Code": "BG",
      "altSpellings": [
        "BG",
        "Republic of Bulgaria",
        "Република България"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bfa.svg",
      "name": "Burkina Faso",
      "alpha2Code": "BF",
      "altSpellings": [
        "BF"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/bdi.svg",
      "name": "Burundi",
      "alpha2Code": "BI",
      "altSpellings": [
        "BI",
        "Republic of Burundi",
        "Republika y'Uburundi",
        "République du Burundi"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/khm.svg",
      "name": "Cambodia",
      "alpha2Code": "KH",
      "altSpellings": [
        "KH",
        "Kingdom of Cambodia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cmr.svg",
      "name": "Cameroon",
      "alpha2Code": "CM",
      "altSpellings": [
        "CM",
        "Republic of Cameroon",
        "République du Cameroun"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/can.svg",
      "name": "Canada",
      "alpha2Code": "CA",
      "altSpellings": [
        "CA"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/caf.svg",
      "name": "Central African Republic",
      "alpha2Code": "CF",
      "altSpellings": [
        "CF",
        "Central African Republic",
        "République centrafricaine"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tcd.svg",
      "name": "Chad",
      "alpha2Code": "TD",
      "altSpellings": [
        "TD",
        "Tchad",
        "Republic of Chad",
        "République du Tchad"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/chl.svg",
      "name": "Chile",
      "alpha2Code": "CL",
      "altSpellings": [
        "CL",
        "Republic of Chile",
        "República de Chile"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/chn.svg",
      "name": "China",
      "alpha2Code": "CN",
      "altSpellings": [
        "CN",
        "Zhōngguó",
        "Zhongguo",
        "Zhonghua",
        "People's Republic of China",
        "中华人民共和国",
        "Zhōnghuá Rénmín Gònghéguó"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/col.svg",
      "name": "Colombia",
      "alpha2Code": "CO",
      "altSpellings": [
        "CO",
        "Republic of Colombia",
        "República de Colombia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cog.svg",
      "name": "Congo",
      "alpha2Code": "CG",
      "altSpellings": [
        "CG",
        "Congo-Brazzaville"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cod.svg",
      "name": "Democratic Republic of Congo", //"Congo (Democratic Republic of the)"
      "alpha2Code": "CD",
      "altSpellings": [
        "CD",
        "DR Congo",
        "Congo-Kinshasa",
        "DRC"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cri.svg",
      "name": "Costa Rica",
      "alpha2Code": "CR",
      "altSpellings": [
        "CR",
        "Republic of Costa Rica",
        "República de Costa Rica"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/hrv.svg",
      "name": "Croatia",
      "alpha2Code": "HR",
      "altSpellings": [
        "HR",
        "Hrvatska",
        "Republic of Croatia",
        "Republika Hrvatska"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cub.svg",
      "name": "Cuba",
      "alpha2Code": "CU",
      "altSpellings": [
        "CU",
        "Republic of Cuba",
        "República de Cuba"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cyp.svg",
      "name": "Cyprus",
      "alpha2Code": "CY",
      "altSpellings": [
        "CY",
        "Kýpros",
        "Kıbrıs",
        "Republic of Cyprus",
        "Κυπριακή Δημοκρατία",
        "Kıbrıs Cumhuriyeti"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/cze.svg",
      "name": "Czech Republic",
      "alpha2Code": "CZ",
      "altSpellings": [
        "CZ",
        "Česká republika",
        "Česko"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/dnk.svg",
      "name": "Denmark",
      "alpha2Code": "DK",
      "altSpellings": [
        "DK",
        "Danmark",
        "Kingdom of Denmark",
        "Kongeriget Danmark"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/dji.svg",
      "name": "Djibouti",
      "alpha2Code": "DJ",
      "altSpellings": [
        "DJ",
        "Jabuuti",
        "Gabuuti",
        "Republic of Djibouti",
        "République de Djibouti",
        "Gabuutih Ummuuno",
        "Jamhuuriyadda Jabuuti"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/dom.svg",
      "name": "Dominican Republic",
      "alpha2Code": "DO",
      "altSpellings": [
        "DO"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ecu.svg",
      "name": "Ecuador",
      "alpha2Code": "EC",
      "altSpellings": [
        "EC",
        "Republic of Ecuador",
        "República del Ecuador"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/egy.svg",
      "name": "Egypt",
      "alpha2Code": "EG",
      "altSpellings": [
        "EG",
        "Arab Republic of Egypt"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/slv.svg",
      "name": "El Salvador",
      "alpha2Code": "SV",
      "altSpellings": [
        "SV",
        "Republic of El Salvador",
        "República de El Salvador"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/gnq.svg",
      "name": "Equatorial Guinea",
      "alpha2Code": "GQ",
      "altSpellings": [
        "GQ",
        "Republic of Equatorial Guinea",
        "República de Guinea Ecuatorial",
        "République de Guinée équatoriale",
        "República da Guiné Equatorial"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/eri.svg",
      "name": "Eritrea",
      "alpha2Code": "ER",
      "altSpellings": [
        "ER",
        "State of Eritrea",
        "ሃገረ ኤርትራ",
        "Dawlat Iritriyá",
        "ʾErtrā",
        "Iritriyā",
        ""
      ]
    },
    {
      "flag": "https://restcountries.eu/data/est.svg",
      "name": "Estonia",
      "alpha2Code": "EE",
      "altSpellings": [
        "EE",
        "Eesti",
        "Republic of Estonia",
        "Eesti Vabariik"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/eth.svg",
      "name": "Ethiopia",
      "alpha2Code": "ET",
      "altSpellings": [
        "ET",
        "ʾĪtyōṗṗyā",
        "Federal Democratic Republic of Ethiopia",
        "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/flk.svg",
      "name": "Falkland Islands (Malvinas)",
      "alpha2Code": "FK",
      "altSpellings": [
        "FK",
        "Islas Malvinas"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/fji.svg",
      "name": "Fiji",
      "alpha2Code": "FJ",
      "altSpellings": [
        "FJ",
        "Viti",
        "Republic of Fiji",
        "Matanitu ko Viti",
        "Fijī Gaṇarājya"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/fin.svg",
      "name": "Finland",
      "alpha2Code": "FI",
      "altSpellings": [
        "FI",
        "Suomi",
        "Republic of Finland",
        "Suomen tasavalta",
        "Republiken Finland"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/fra.svg",
      "name": "France",
      "alpha2Code": "FR",
      "altSpellings": [
        "FR",
        "French Republic",
        "République française"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/guf.svg",
      "name": "French Guiana",
      "alpha2Code": "GF",
      "altSpellings": [
        "GF",
        "Guiana",
        "Guyane"
      ]
    },*/
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/atf.svg",
      "name": "French Southern Territories",
      "alpha2Code": "TF",
      "altSpellings": [
        "TF"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/gab.svg",
      "name": "Gabon",
      "alpha2Code": "GA",
      "altSpellings": [
        "GA",
        "Gabonese Republic",
        "République Gabonaise"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/gmb.svg",
      "name": "Gambia",
      "alpha2Code": "GM",
      "altSpellings": [
        "GM",
        "Republic of the Gambia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/geo.svg",
      "name": "Georgia",
      "alpha2Code": "GE",
      "altSpellings": [
        "GE",
        "Sakartvelo"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/deu.svg",
      "name": "Germany",
      "alpha2Code": "DE",
      "altSpellings": [
        "DE",
        "Federal Republic of Germany",
        "Bundesrepublik Deutschland"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/gha.svg",
      "name": "Ghana",
      "alpha2Code": "GH",
      "altSpellings": [
        "GH"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/gib.svg",
      "name": "Gibraltar",
      "alpha2Code": "GI",
      "altSpellings": [
        "GI"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/grc.svg",
      "name": "Greece",
      "alpha2Code": "GR",
      "altSpellings": [
        "GR",
        "Elláda",
        "Hellenic Republic",
        "Ελληνική Δημοκρατία"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/grl.svg",
      "name": "Greenland",
      "alpha2Code": "GL",
      "altSpellings": [
        "GL",
        "Grønland"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/gtm.svg",
      "name": "Guatemala",
      "alpha2Code": "GT",
      "altSpellings": [
        "GT"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/gin.svg",
      "name": "Guinea",
      "alpha2Code": "GN",
      "altSpellings": [
        "GN",
        "Republic of Guinea",
        "République de Guinée"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/gnb.svg",
      "name": "Guinea-Bissau",
      "alpha2Code": "GW",
      "altSpellings": [
        "GW",
        "Republic of Guinea-Bissau",
        "República da Guiné-Bissau"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/guy.svg",
      "name": "Guyana",
      "alpha2Code": "GY",
      "altSpellings": [
        "GY",
        "Co-operative Republic of Guyana"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/hti.svg",
      "name": "Haiti",
      "alpha2Code": "HT",
      "altSpellings": [
        "HT",
        "Republic of Haiti",
        "République d'Haïti",
        "Repiblik Ayiti"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/hnd.svg",
      "name": "Honduras",
      "alpha2Code": "HN",
      "altSpellings": [
        "HN",
        "Republic of Honduras",
        "República de Honduras"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/hkg.svg",
      "name": "Hong Kong",
      "alpha2Code": "HK",
      "altSpellings": [
        "HK",
        "香港"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/hun.svg",
      "name": "Hungary",
      "alpha2Code": "HU",
      "altSpellings": [
        "HU"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/isl.svg",
      "name": "Iceland",
      "alpha2Code": "IS",
      "altSpellings": [
        "IS",
        "Island",
        "Republic of Iceland",
        "Lýðveldið Ísland"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ind.svg",
      "name": "India",
      "alpha2Code": "IN",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/idn.svg",
      "name": "Indonesia",
      "alpha2Code": "ID",
      "altSpellings": [
        "ID",
        "Republic of Indonesia",
        "Republik Indonesia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/civ.svg",
      "name": "Ivory Coast", //"Côte d'Ivoire"
      "alpha2Code": "CI",
      "altSpellings": [
        "CI",
        "Ivory Coast",
        "Republic of Côte d'Ivoire",
        "République de Côte d'Ivoire"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/irn.svg",
      "name": "Iran", //"Iran (Islamic Republic of)"
      "alpha2Code": "IR",
      "altSpellings": [
        "IR",
        "Islamic Republic of Iran",
        "Jomhuri-ye Eslāmi-ye Irān"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/irq.svg",
      "name": "Iraq",
      "alpha2Code": "IQ",
      "altSpellings": [
        "IQ",
        "Republic of Iraq",
        "Jumhūriyyat al-‘Irāq"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/irl.svg",
      "name": "Ireland",
      "alpha2Code": "IE",
      "altSpellings": [
        "IE",
        "Éire",
        "Republic of Ireland",
        "Poblacht na hÉireann"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/isr.svg",
      "name": "Israel",
      "alpha2Code": "IL",
      "altSpellings": [
        "IL",
        "State of Israel",
        "Medīnat Yisrā'el"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ita.svg",
      "name": "Italy",
      "alpha2Code": "IT",
      "altSpellings": [
        "IT",
        "Italian Republic",
        "Repubblica italiana"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/jam.svg",
      "name": "Jamaica",
      "alpha2Code": "JM",
      "altSpellings": [
        "JM"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/jpn.svg",
      "name": "Japan",
      "alpha2Code": "JP",
      "altSpellings": [
        "JP",
        "Nippon",
        "Nihon"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/jor.svg",
      "name": "Jordan",
      "alpha2Code": "JO",
      "altSpellings": [
        "JO",
        "Hashemite Kingdom of Jordan",
        "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/kaz.svg",
      "name": "Kazakhstan",
      "alpha2Code": "KZ",
      "altSpellings": [
        "KZ",
        "Qazaqstan",
        "Казахстан",
        "Republic of Kazakhstan",
        "Қазақстан Республикасы",
        "Qazaqstan Respublïkası",
        "Республика Казахстан",
        "Respublika Kazakhstan"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ken.svg",
      "name": "Kenya",
      "alpha2Code": "KE",
      "altSpellings": [
        "KE",
        "Republic of Kenya",
        "Jamhuri ya Kenya"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/kwt.svg",
      "name": "Kuwait",
      "alpha2Code": "KW",
      "altSpellings": [
        "KW",
        "State of Kuwait",
        "Dawlat al-Kuwait"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/kgz.svg",
      "name": "Kyrgyzstan",
      "alpha2Code": "KG",
      "altSpellings": [
        "KG",
        "Киргизия",
        "Kyrgyz Republic",
        "Кыргыз Республикасы",
        "Kyrgyz Respublikasy"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/lao.svg",
      "name": "Lao", //"Lao People's Democratic Republic"
      "alpha2Code": "LA",
      "altSpellings": [
        "LA",
        "Lao",
        "Laos",
        "Lao People's Democratic Republic",
        "Sathalanalat Paxathipatai Paxaxon Lao"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/lva.svg",
      "name": "Latvia",
      "alpha2Code": "LV",
      "altSpellings": [
        "LV",
        "Republic of Latvia",
        "Latvijas Republika"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/lbn.svg",
      "name": "Lebanon",
      "alpha2Code": "LB",
      "altSpellings": [
        "LB",
        "Lebanese Republic",
        "Al-Jumhūrīyah Al-Libnānīyah"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/lso.svg",
      "name": "Lesotho",
      "alpha2Code": "LS",
      "altSpellings": [
        "LS",
        "Kingdom of Lesotho",
        "Muso oa Lesotho"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/lbr.svg",
      "name": "Liberia",
      "alpha2Code": "LR",
      "altSpellings": [
        "LR",
        "Republic of Liberia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/lby.svg",
      "name": "Libya",
      "alpha2Code": "LY",
      "altSpellings": [
        "LY",
        "State of Libya",
        "Dawlat Libya"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ltu.svg",
      "name": "Lithuania",
      "alpha2Code": "LT",
      "altSpellings": [
        "LT",
        "Republic of Lithuania",
        "Lietuvos Respublika"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/lux.svg",
      "name": "Luxembourg",
      "alpha2Code": "LU",
      "altSpellings": [
        "LU",
        "Grand Duchy of Luxembourg",
        "Grand-Duché de Luxembourg",
        "Großherzogtum Luxemburg",
        "Groussherzogtum Lëtzebuerg"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mkd.svg",
      "name": "Macedonia", //"Macedonia (the former Yugoslav Republic of)"
      "alpha2Code": "MK",
      "altSpellings": [
        "MK",
        "Republic of Macedonia",
        "Република Македонија"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mdg.svg",
      "name": "Madagascar",
      "alpha2Code": "MG",
      "altSpellings": [
        "MG",
        "Republic of Madagascar",
        "Repoblikan'i Madagasikara",
        "République de Madagascar"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mwi.svg",
      "name": "Malawi",
      "alpha2Code": "MW",
      "altSpellings": [
        "MW",
        "Republic of Malawi"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mys.svg",
      "name": "Malaysia",
      "alpha2Code": "MY",
      "altSpellings": [
        "MY"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mli.svg",
      "name": "Mali",
      "alpha2Code": "ML",
      "altSpellings": [
        "ML",
        "Republic of Mali",
        "République du Mali"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mrt.svg",
      "name": "Mauritania",
      "alpha2Code": "MR",
      "altSpellings": [
        "MR",
        "Islamic Republic of Mauritania",
        "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mex.svg",
      "name": "Mexico",
      "alpha2Code": "MX",
      "altSpellings": [
        "MX",
        "Mexicanos",
        "United Mexican States",
        "Estados Unidos Mexicanos"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mda.svg",
      "name": "Moldova", //"Moldova (Republic of)"
      "alpha2Code": "MD",
      "altSpellings": [
        "MD",
        "Republic of Moldova",
        "Republica Moldova"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mng.svg",
      "name": "Mongolia",
      "alpha2Code": "MN",
      "altSpellings": [
        "MN"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mne.svg",
      "name": "Montenegro",
      "alpha2Code": "ME",
      "altSpellings": [
        "ME",
        "Crna Gora"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/mar.svg",
      "name": "Morocco",
      "alpha2Code": "MA",
      "altSpellings": [
        "MA",
        "Kingdom of Morocco",
        "Al-Mamlakah al-Maġribiyah"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/moz.svg",
      "name": "Mozambique",
      "alpha2Code": "MZ",
      "altSpellings": [
        "MZ",
        "Republic of Mozambique",
        "República de Moçambique"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/mmr.svg",
      "name": "Myanmar",
      "alpha2Code": "MM",
      "altSpellings": [
        "MM",
        "Burma",
        "Republic of the Union of Myanmar",
        "Pyidaunzu Thanmăda Myăma Nainngandaw"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/nam.svg",
      "name": "Namibia",
      "alpha2Code": "NA",
      "altSpellings": [
        "NA",
        "Namibië",
        "Republic of Namibia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/npl.svg",
      "name": "Nepal",
      "alpha2Code": "NP",
      "altSpellings": [
        "NP",
        "Federal Democratic Republic of Nepal",
        "Loktāntrik Ganatantra Nepāl"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/nld.svg",
      "name": "Netherlands",
      "alpha2Code": "NL",
      "altSpellings": [
        "NL",
        "Holland",
        "Nederland"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/ncl.svg",
      "name": "New Caledonia",
      "alpha2Code": "NC",
      "altSpellings": [
        "NC"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/nzl.svg",
      "name": "New Zealand",
      "alpha2Code": "NZ",
      "altSpellings": [
        "NZ",
        "Aotearoa"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/nic.svg",
      "name": "Nicaragua",
      "alpha2Code": "NI",
      "altSpellings": [
        "NI",
        "Republic of Nicaragua",
        "República de Nicaragua"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ner.svg",
      "name": "Niger",
      "alpha2Code": "NE",
      "altSpellings": [
        "NE",
        "Nijar",
        "Republic of Niger",
        "République du Niger"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/nga.svg",
      "name": "Nigeria",
      "alpha2Code": "NG",
      "altSpellings": [
        "NG",
        "Nijeriya",
        "Naíjíríà",
        "Federal Republic of Nigeria"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/prk.svg",
      "name": "Korea (Democratic People's Republic of)",
      "alpha2Code": "KP",
      "altSpellings": [
        "KP",
        "Democratic People's Republic of Korea",
        "조선민주주의인민공화국",
        "Chosŏn Minjujuŭi Inmin Konghwaguk"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/nor.svg",
      "name": "Norway",
      "alpha2Code": "NO",
      "altSpellings": [
        "NO",
        "Norge",
        "Noreg",
        "Kingdom of Norway",
        "Kongeriket Norge",
        "Kongeriket Noreg"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/omn.svg",
      "name": "Oman",
      "alpha2Code": "OM",
      "altSpellings": [
        "OM",
        "Sultanate of Oman",
        "Salṭanat ʻUmān"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/pak.svg",
      "name": "Pakistan",
      "alpha2Code": "PK",
      "altSpellings": [
        "PK",
        "Pākistān",
        "Islamic Republic of Pakistan",
        "Islāmī Jumhūriya'eh Pākistān"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/pse.svg",
      "name": "Palestine", //"Palestine, State of"
      "alpha2Code": "PS",
      "altSpellings": [
        "PS",
        "State of Palestine",
        "Dawlat Filasṭin"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/pan.svg",
      "name": "Panama",
      "alpha2Code": "PA",
      "altSpellings": [
        "PA",
        "Republic of Panama",
        "República de Panamá"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/png.svg",
      "name": "Papua New Guinea",
      "alpha2Code": "PG",
      "altSpellings": [
        "PG",
        "Independent State of Papua New Guinea",
        "Independen Stet bilong Papua Niugini"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/pry.svg",
      "name": "Paraguay",
      "alpha2Code": "PY",
      "altSpellings": [
        "PY",
        "Republic of Paraguay",
        "República del Paraguay",
        "Tetã Paraguái"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/per.svg",
      "name": "Peru",
      "alpha2Code": "PE",
      "altSpellings": [
        "PE",
        "Republic of Peru",
        " República del Perú"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/phl.svg",
      "name": "Philippines",
      "alpha2Code": "PH",
      "altSpellings": [
        "PH",
        "Republic of the Philippines",
        "Repúblika ng Pilipinas"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/pol.svg",
      "name": "Poland",
      "alpha2Code": "PL",
      "altSpellings": [
        "PL",
        "Republic of Poland",
        "Rzeczpospolita Polska"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/prt.svg",
      "name": "Portugal",
      "alpha2Code": "PT",
      "altSpellings": [
        "PT",
        "Portuguesa",
        "Portuguese Republic",
        "República Portuguesa"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/pri.svg",
      "name": "Puerto Rico",
      "alpha2Code": "PR",
      "altSpellings": [
        "PR",
        "Commonwealth of Puerto Rico",
        "Estado Libre Asociado de Puerto Rico"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/qat.svg",
      "name": "Qatar",
      "alpha2Code": "QA",
      "altSpellings": [
        "QA",
        "State of Qatar",
        "Dawlat Qaṭar"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/kos.svg",
      "name": "Republic of Kosovo",
      "alpha2Code": "XK",
      "altSpellings": [
        "XK",
        "Република Косово"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/rou.svg",
      "name": "Romania",
      "alpha2Code": "RO",
      "altSpellings": [
        "RO",
        "Rumania",
        "Roumania",
        "România"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/rus.svg",
      "name": "Russia", //"Russian Federation"
      "alpha2Code": "RU",
      "altSpellings": [
        "RU",
        "Rossiya",
        "Russian Federation",
        "Российская Федерация",
        "Rossiyskaya Federatsiya"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/rwa.svg",
      "name": "Rwanda",
      "alpha2Code": "RW",
      "altSpellings": [
        "RW",
        "Republic of Rwanda",
        "Repubulika y'u Rwanda",
        "République du Rwanda"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/sau.svg",
      "name": "Saudi Arabia",
      "alpha2Code": "SA",
      "altSpellings": [
        "SA",
        "Kingdom of Saudi Arabia",
        "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/sen.svg",
      "name": "Senegal",
      "alpha2Code": "SN",
      "altSpellings": [
        "SN",
        "Republic of Senegal",
        "République du Sénégal"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/srb.svg",
      "name": "Serbia",
      "alpha2Code": "RS",
      "altSpellings": [
        "RS",
        "Srbija",
        "Republic of Serbia",
        "Република Србија",
        "Republika Srbija"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/sle.svg",
      "name": "Sierra Leone",
      "alpha2Code": "SL",
      "altSpellings": [
        "SL",
        "Republic of Sierra Leone"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/sgp.svg",
      "name": "Singapore",
      "alpha2Code": "SG",
      "altSpellings": [
        "SG",
        "Singapura",
        "Republik Singapura",
        "新加坡共和国"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/svk.svg",
      "name": "Slovakia",
      "alpha2Code": "SK",
      "altSpellings": [
        "SK",
        "Slovak Republic",
        "Slovenská republika"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/svn.svg",
      "name": "Slovenia",
      "alpha2Code": "SI",
      "altSpellings": [
        "SI",
        "Republic of Slovenia",
        "Republika Slovenija"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/slb.svg",
      "name": "Solomon Islands",
      "alpha2Code": "SB",
      "altSpellings": [
        "SB"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/som.svg",
      "name": "Somalia",
      "alpha2Code": "SO",
      "altSpellings": [
        "SO",
        "aṣ-Ṣūmāl",
        "Federal Republic of Somalia",
        "Jamhuuriyadda Federaalka Soomaaliya",
        "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/zaf.svg",
      "name": "South Africa",
      "alpha2Code": "ZA",
      "altSpellings": [
        "ZA",
        "RSA",
        "Suid-Afrika",
        "Republic of South Africa"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/kor.svg",
      "name": "South Korea", //"Korea (Republic of)"
      "alpha2Code": "KR",
      "altSpellings": [
        "KR",
        "Republic of Korea"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ssd.svg",
      "name": "South Sudan",
      "alpha2Code": "SS",
      "altSpellings": [
        "SS"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/esp.svg",
      "name": "Spain",
      "alpha2Code": "ES",
      "altSpellings": [
        "ES",
        "Kingdom of Spain",
        "Reino de España"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/lka.svg",
      "name": "Sri Lanka",
      "alpha2Code": "LK",
      "altSpellings": [
        "LK",
        "ilaṅkai",
        "Democratic Socialist Republic of Sri Lanka"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/sdn.svg",
      "name": "Sudan",
      "alpha2Code": "SD",
      "altSpellings": [
        "SD",
        "Republic of the Sudan",
        "Jumhūrīyat as-Sūdān"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/sur.svg",
      "name": "Suriname",
      "alpha2Code": "SR",
      "altSpellings": [
        "SR",
        "Sarnam",
        "Sranangron",
        "Republic of Suriname",
        "Republiek Suriname"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/sjm.svg",
      "name": "Svalbard and Jan Mayen",
      "alpha2Code": "SJ",
      "altSpellings": [
        "SJ",
        "Svalbard and Jan Mayen Islands"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/swz.svg",
      "name": "Swaziland",
      "alpha2Code": "SZ",
      "altSpellings": [
        "SZ",
        "weSwatini",
        "Swatini",
        "Ngwane",
        "Kingdom of Swaziland",
        "Umbuso waseSwatini"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/swe.svg",
      "name": "Sweden",
      "alpha2Code": "SE",
      "altSpellings": [
        "SE",
        "Kingdom of Sweden",
        "Konungariket Sverige"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/che.svg",
      "name": "Switzerland",
      "alpha2Code": "CH",
      "altSpellings": [
        "CH",
        "Swiss Confederation",
        "Schweiz",
        "Suisse",
        "Svizzera",
        "Svizra"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/syr.svg",
      "name": "Syrian Arab Republic",
      "alpha2Code": "SY",
      "altSpellings": [
        "SY",
        "Syrian Arab Republic",
        "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/twn.svg",
      "name": "Taiwan",
      "alpha2Code": "TW",
      "altSpellings": [
        "TW",
        "Táiwān",
        "Republic of China",
        "中華民國",
        "Zhōnghuá Mínguó"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/tjk.svg",
      "name": "Tajikistan",
      "alpha2Code": "TJ",
      "altSpellings": [
        "TJ",
        "Toçikiston",
        "Republic of Tajikistan",
        "Ҷумҳурии Тоҷикистон",
        "Çumhuriyi Toçikiston"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/tza.svg",
      "name": "Tanzania", //Tanzania, United Republic of"
      "alpha2Code": "TZ",
      "altSpellings": [
        "TZ",
        "United Republic of Tanzania",
        "Jamhuri ya Muungano wa Tanzania"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tha.svg",
      "name": "Thailand",
      "alpha2Code": "TH",
      "altSpellings": [
        "TH",
        "Prathet",
        "Thai",
        "Kingdom of Thailand",
        "ราชอาณาจักรไทย",
        "Ratcha Anachak Thai"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tls.svg",
      "name": "Timor-Leste",
      "alpha2Code": "TL",
      "altSpellings": [
        "TL",
        "East Timor",
        "Democratic Republic of Timor-Leste",
        "República Democrática de Timor-Leste",
        "Repúblika Demokrátika Timór-Leste"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tgo.svg",
      "name": "Togo",
      "alpha2Code": "TG",
      "altSpellings": [
        "TG",
        "Togolese",
        "Togolese Republic",
        "République Togolaise"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tto.svg",
      "name": "Trinidad and Tobago",
      "alpha2Code": "TT",
      "altSpellings": [
        "TT",
        "Republic of Trinidad and Tobago"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tun.svg",
      "name": "Tunisia",
      "alpha2Code": "TN",
      "altSpellings": [
        "TN",
        "Republic of Tunisia",
        "al-Jumhūriyyah at-Tūnisiyyah"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/tur.svg",
      "name": "Turkey",
      "alpha2Code": "TR",
      "altSpellings": [
        "TR",
        "Turkiye",
        "Republic of Turkey",
        "Türkiye Cumhuriyeti"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/tkm.svg",
      "name": "Turkmenistan",
      "alpha2Code": "TM",
      "altSpellings": [
        "TM"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/uga.svg",
      "name": "Uganda",
      "alpha2Code": "UG",
      "altSpellings": [
        "UG",
        "Republic of Uganda",
        "Jamhuri ya Uganda"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ukr.svg",
      "name": "Ukraine",
      "alpha2Code": "UA",
      "altSpellings": [
        "UA",
        "Ukrayina"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/are.svg",
      "name": "United Arab Emirates",
      "alpha2Code": "AE",
      "altSpellings": [
        "AE",
        "UAE"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/gbr.svg",
      "name": "UK", //"United Kingdom of Great Britain and Northern Ireland"
      "alpha2Code": "GB",
      "altSpellings": [
        "GB",
        "UK",
        "Great Britain"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/usa.svg",
      "name": "USA", //"United States of America"
      "alpha2Code": "US",
      "altSpellings": [
        "US",
        "USA",
        "United States of America"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/ury.svg",
      "name": "Uruguay",
      "alpha2Code": "UY",
      "altSpellings": [
        "UY",
        "Oriental Republic of Uruguay",
        "República Oriental del Uruguay"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/uzb.svg",
      "name": "Uzbekistan",
      "alpha2Code": "UZ",
      "altSpellings": [
        "UZ",
        "Republic of Uzbekistan",
        "O‘zbekiston Respublikasi",
        "Ўзбекистон Республикаси"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/vut.svg",
      "name": "Vanuatu",
      "alpha2Code": "VU",
      "altSpellings": [
        "VU",
        "Republic of Vanuatu",
        "Ripablik blong Vanuatu",
        "République de Vanuatu"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/ven.svg",
      "name": "Venezuela", //"Venezuela (Bolivarian Republic of)"
      "alpha2Code": "VE",
      "altSpellings": [
        "VE",
        "Bolivarian Republic of Venezuela",
        "República Bolivariana de Venezuela"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/vnm.svg",
      "name": "Vietnam", //"Viet Nam"
      "alpha2Code": "VN",
      "altSpellings": [
        "VN",
        "Socialist Republic of Vietnam",
        "Cộng hòa Xã hội chủ nghĩa Việt Nam"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/esh.svg",
      "name": "Western Sahara",
      "alpha2Code": "EH",
      "altSpellings": [
        "EH",
        "Taneẓroft Tutrimt"
      ]
    },
    /*{ NO DATA, BUT EXIST IN API
      "flag": "https://restcountries.eu/data/yem.svg",
      "name": "Yemen",
      "alpha2Code": "YE",
      "altSpellings": [
        "YE",
        "Yemeni Republic",
        "al-Jumhūriyyah al-Yamaniyyah"
      ]
    },*/
    {
      "flag": "https://restcountries.eu/data/zmb.svg",
      "name": "Zambia",
      "alpha2Code": "ZM",
      "altSpellings": [
        "ZM",
        "Republic of Zambia"
      ]
    },
    {
      "flag": "https://restcountries.eu/data/zwe.svg",
      "name": "Zimbabwe",
      "alpha2Code": "ZW",
      "altSpellings": [
        "ZW",
        "Republic of Zimbabwe"
      ]
    }
  ]