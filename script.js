$(document).ready(function(){
    let oldWordItem;
    const vowelItems = [
        "ɑ:", "aɪ", "aʊ", "ɔ:", "ɔɪ", "oʊ",
        "e", "eɪ", "æ", "ɪ", "i:", "i",
        "ʊ", "u:", "u", "ʌ", "ɜ:", "ə"
    ];

    const consonantItems = [
        "p", "b", "f", "v", "k", "g", "θ", "ð", 
        "s", "z", "ʃ", "ʒ", "t", "d", "j", "tʃ", 
        "dʒ", "m", "n", "ŋ", "w", "r", "l", "h"
    ];

    vowelItems.forEach((v, idx) =>{
        $("#filter-buttons .col-12").append(`<button class="btn mb-2 mx-1" data-filter="${v}">${v}</button>`);
    });
    
    const wordBank = [
        {vowel: 'ɑ:', word: "not", phonetic: "nɑ:t", end: "t"},
        {vowel: 'ɑ:', word: "hot", phonetic: "hɑ:t", end: "t"},
        {vowel: 'ɑ:', word: "lot", phonetic: "lɑ:t", end: "t"},
        {vowel: 'ɑ:', word: "dot", phonetic: "dɑ:t", end: "t"},
        {vowel: 'ɑ:', word: "lock", phonetic: "lɑ:k", end: "ck"},
        {vowel: 'ɑ:', word: "talk", phonetic: "tɑ:k", end: "lk"},
        {vowel: 'ɑ:', word: "taught", phonetic: "tɑ:t", end: "ght"},
        {vowel: 'ɑ:', word: "tall", phonetic: "tɑ:l", end: "ll"},
        {vowel: 'ɑ:', word: "cause", phonetic: "kɑ:z", end: "se"},
        {vowel: 'ɑ:', word: "fought", phonetic: "fɑ:t", end: "ght"},
        {vowel: 'ɑ:', word: "bought", phonetic: "bɑ:t", end: "ght"},
        {vowel: 'ɑ:', word: "what", phonetic: "wɑ:t", end: "t"},
        {vowel: 'ɑ:', word: "wall", phonetic: "wɑ:l", end: "ll"},
        {vowel: 'ɑ:', word: "car", phonetic: "kɑ:r", end: "r"},
        {vowel: 'ɑ:', word: "guard", phonetic: "gɑ:rd", end: "rd"},
        {vowel: 'ɑ:', word: "fault", phonetic: "fɑ:lt", end: "lt"},
        {vowel: 'ɑ:', word: "card", phonetic: "cɑ:rd", end: "rd"},
        {vowel: 'ɑ:', word: "carve", phonetic: "kɑ:rv", end: "rve"},
        {vowel: 'ɑ:', word: "dark", phonetic: "dɑ:rk", end: "rk"},
        {vowel: 'ɑ:', word: "dart", phonetic: "dɑ:rt", end: "rt"},
        {vowel: 'ɑ:', word: "part", phonetic: "pɑ:rt", end: "rt"},
        {vowel: 'ɑ:', word: "park", phonetic: "pɑ:rk", end: "rk"},
        {vowel: 'ɑ:', word: "bark", phonetic: "bɑ:rk", end: "rk"},
        {vowel: 'ɑ:', word: "heart", phonetic: "hɑ:rt", end: "rt"},
        {vowel: 'ɑ:', word: "hard", phonetic: "hɑ:rd", end: "rd"},
        {vowel: 'ɑ:', word: "harm", phonetic: "hɑ:rm", end: "rm"},
        {vowel: 'ɑ:', word: "mart", phonetic: "mɑ:rt", end: "rt"},
        {vowel: 'ɑ:', word: "farm", phonetic: "fɑ:rm", end: "rm"},
        {vowel: 'ɑ:', word: "stop", phonetic: "stɑ:p", end: "p"},
        {vowel: 'ɑ:', word: "star", phonetic: "stɑ:r", end: "r"},
        {vowel: 'ɑ:', word: "start", phonetic: "stɑ:rt", end: "rt"},
        {vowel: 'ɑ:', word: "block", phonetic: "blɑ:k", end: "ck"},
        {vowel: 'ɑ:', word: "brought", phonetic: "brɑ:t", end: "ght"},
        {vowel: 'ɑ:', word: "drop", phonetic: "drɑ:p", end: "p"},
        {vowel: 'ɑ:', word: "small", phonetic: "smɑ:l", end: "ll"},
        {vowel: 'ɑ:', word: "stock", phonetic: "stɑ:k", end: "ck"},
        {vowel: 'ɑ:', word: "spot", phonetic: "spɑ:t", end: "t"},
        {vowel: 'ɑ:', word: "clock", phonetic: "klɑ:k", end: "ck"},
        {vowel: 'ɑ:', word: "floss", phonetic: "flɑ:s", end: "ss"},
        {vowel: 'ɑ:', word: "blonde", phonetic: "blɑ:nd", end: "nde"},
        {vowel: 'ɑ:', word: "strong", phonetic: "strɑ:ŋ", end: "ng"},

        {vowel: 'aɪ', word: "tie", phonetic: "taɪ", end: ""},
        {vowel: 'aɪ', word: "die", phonetic: "daɪ", end: ""},
        {vowel: 'aɪ', word: "sigh", phonetic: "saɪ", end: ""},
        {vowel: 'aɪ', word: "why", phonetic: "waɪ", end: ""},
        {vowel: 'aɪ', word: "dive", phonetic: "daɪv", end: "ve"},
        {vowel: 'aɪ', word: "time", phonetic: "taɪm", end: "me"},
        {vowel: 'aɪ', word: "size", phonetic: "saɪz", end: "ze"},
        {vowel: 'aɪ', word: "sign", phonetic: "saɪn", end: "gn"},
        {vowel: 'aɪ', word: "night", phonetic: "naɪt", end: "ght"},
        {vowel: 'aɪ', word: "hide", phonetic: "haɪd", end: "de"},
        {vowel: 'aɪ', word: "height", phonetic: "haɪt", end: "ght"},
        {vowel: 'aɪ', word: "kite", phonetic: "kaɪt", end: "te"},
        {vowel: 'aɪ', word: "nice", phonetic: "naɪs", end: "ce"},
        {vowel: 'aɪ', word: "wife", phonetic: "waɪf", end: "fe"},
        {vowel: 'aɪ', word: "wise", phonetic: "waɪz", end: "se"},
        {vowel: 'aɪ', word: "white", phonetic: "waɪt", end: "te"},
        {vowel: 'aɪ', word: "write", phonetic: "raɪt", end: "te"},
        {vowel: 'aɪ', word: "rise", phonetic: "raɪz", end: "se"},
        {vowel: 'aɪ', word: "rice", phonetic: "raɪs", end: "ce"},
        {vowel: 'aɪ', word: "mice", phonetic: "maɪs", end: "ce"},
        {vowel: 'aɪ', word: "mine", phonetic: "maɪn", end: "ne"},
        {vowel: 'aɪ', word: "might", phonetic: "maɪt", end: "ght"},
        {vowel: 'aɪ', word: "like", phonetic: "laɪk", end: "ke"},
        {vowel: 'aɪ', word: "life", phonetic: "laɪf", end: "fe"},
        {vowel: 'aɪ', word: "fight", phonetic: "faɪt", end: "ght"},
        {vowel: 'aɪ', word: "five", phonetic: "faɪv", end: "ve"},
        {vowel: 'aɪ', word: "vice", phonetic: "vaɪs", end: "ce"},
        {vowel: 'aɪ', word: "wine", phonetic: "waɪn", end: "ne"},
        {vowel: 'aɪ', word: "wire", phonetic: "waɪər", end: "re"},
        {vowel: 'aɪ', word: "while", phonetic: "waɪəl", end: "le"},
        {vowel: 'aɪ', word: "wild", phonetic: "waɪəld", end: "ld"},
        {vowel: 'aɪ', word: "find", phonetic: "faɪnd", end: "nd"},
        {vowel: 'aɪ', word: "kind", phonetic: "kaɪnd", end: "nd"},
        {vowel: 'aɪ', word: "mind", phonetic: "maɪnd", end: "nd"},
        {vowel: 'aɪ', word: "wind", phonetic: "waɪnd", end: "nd"},
        {vowel: 'aɪ', word: "dry", phonetic: "draɪ", end: ""},
        {vowel: 'aɪ', word: "drive", phonetic: "draɪv", end: "ve"},
        {vowel: 'aɪ', word: "price", phonetic: "praɪs", end: "ce"},
        {vowel: 'aɪ', word: "prize", phonetic: "praɪz", end: "ze"},
        {vowel: 'aɪ', word: "crime", phonetic: "kraɪm", end: "me"},
        {vowel: 'aɪ', word: "climb", phonetic: "klaɪm", end: "mb"},
        {vowel: 'aɪ', word: "blind", phonetic: "blaɪnd", end: "nd"},

        {vowel: 'aʊ', word: "out", phonetic: "aʊt", end: "t"},
        {vowel: 'aʊ', word: "owl", phonetic: "aʊəl", end: "wl"},
        {vowel: 'aʊ', word: "hour", phonetic: "aʊər", end: "r"},
        {vowel: 'aʊ', word: "ounce", phonetic: "aʊns", end: "nce"},
        {vowel: 'aʊ', word: "cow", phonetic: "kaʊ", end: "w"},
        {vowel: 'aʊ', word: "bow", phonetic: "baʊ", end: "w"},
        {vowel: 'aʊ', word: "vow", phonetic: "vaʊ", end: "w"},
        {vowel: 'aʊ', word: "how", phonetic: "haʊ", end: "w"},
        {vowel: 'aʊ', word: "house", phonetic: "haʊs", end: "se"},
        {vowel: 'aʊ', word: "loud", phonetic: "laʊd", end: "d"},
        {vowel: 'aʊ', word: "doubt", phonetic: "daʊt", end: "bt"},
        {vowel: 'aʊ', word: "foul", phonetic: "faʊəl", end: "l"},
        {vowel: 'aʊ', word: "sour", phonetic: "saʊər", end: "r"},
        {vowel: 'aʊ', word: "noun", phonetic: "naʊn", end: "n"},
        {vowel: 'aʊ', word: "mouse", phonetic: "maʊs", end: "se"},
        {vowel: 'aʊ', word: "mouth", phonetic: "maʊθ", end: "th"},
        {vowel: 'aʊ', word: "shout", phonetic: "ʃaʊt", end: "t"},
        {vowel: 'aʊ', word: "south", phonetic: "saʊθ", end: "th"},
        {vowel: 'aʊ', word: "route", phonetic: "raʊt", end: "te"},
        {vowel: 'aʊ', word: "souse", phonetic: "saʊs", end: "se"},
        {vowel: 'aʊ', word: "count", phonetic: "kaʊnt", end: "nt"},
        {vowel: 'aʊ', word: "sound", phonetic: "saʊnd", end: "nd"},
        {vowel: 'aʊ', word: "round", phonetic: "raʊnd", end: "nd"},
        {vowel: 'aʊ', word: "found", phonetic: "faʊnd", end: "nd"},
        {vowel: 'aʊ', word: "bound", phonetic: "baʊnd", end: "nd"},
        {vowel: 'aʊ', word: "pound", phonetic: "paʊnd", end: "nd"},
        {vowel: 'aʊ', word: "bounce", phonetic: "baʊns", end: "nce"},
        {vowel: 'aʊ', word: "crowd", phonetic: "kraʊd", end: "wd"},
        {vowel: 'aʊ', word: "crown", phonetic: "kraʊn", end: "wn"},
        {vowel: 'aʊ', word: "brown", phonetic: "braʊn", end: "wn"},
        {vowel: 'aʊ', word: "blouse", phonetic: "blaʊs", end: "se"},
        {vowel: 'aʊ', word: "proud", phonetic: "praʊd", end: "d"},
        {vowel: 'aʊ', word: "drown", phonetic: "draʊn", end: "wn"},
        {vowel: 'aʊ', word: "frown", phonetic: "fraʊn", end: "wn"},
        {vowel: 'aʊ', word: "spouse", phonetic: "spaʊs", end: "se"},
        {vowel: 'aʊ', word: "clown", phonetic: "klaʊn", end: "wn"},
        {vowel: 'aʊ', word: "cloud", phonetic: "klaʊd", end: "d"},
        {vowel: 'aʊ', word: "trout", phonetic: "traʊt", end: "t"},
        {vowel: 'aʊ', word: "browse", phonetic: "braʊz", end: "wse"},
        {vowel: 'aʊ', word: "flower", phonetic: "ˈflaʊər", end: "r"},
        {vowel: 'aʊ', word: "flour", phonetic: "flaʊər", end: "r"},

        {vowel: 'ɔ:', word: "sore", phonetic: "sɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "core", phonetic: "kɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "more", phonetic: "mɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "for", phonetic: "fɔ:r", end: "r"},
        {vowel: 'ɔ:', word: "four", phonetic: "fɔ:r", end: "r"},
        {vowel: 'ɔ:', word: "door", phonetic: "dɔ:r", end: "r"},
        {vowel: 'ɔ:', word: "bore", phonetic: "bɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "tore", phonetic: "tɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "wore", phonetic: "wɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "war", phonetic: "wɔ:r", end: "r"},
        {vowel: 'ɔ:', word: "horse", phonetic: "hɔ:rs", end: "rse"},
        {vowel: 'ɔ:', word: "torn", phonetic: "tɔ:rn", end: "rn"},
        {vowel: 'ɔ:', word: "port", phonetic: "pɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "worn", phonetic: "wɔ:rn", end: "rn"},
        {vowel: 'ɔ:', word: "court", phonetic: "kɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "corn", phonetic: "kɔ:rn", end: "rn"},
        {vowel: 'ɔ:', word: "force", phonetic: "fɔ:rs", end: "rce"},
        {vowel: 'ɔ:', word: "north", phonetic: "nɔ:rθ", end: "rth"},
        {vowel: 'ɔ:', word: "lord", phonetic: "lɔ:rd", end: "rd"},
        {vowel: 'ɔ:', word: "form", phonetic: "fɔ:rm", end: "rm"},
        {vowel: 'ɔ:', word: "sort", phonetic: "sɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "short", phonetic: "ʃɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "fork", phonetic: "fɔ:rk", end: "rk"},
        {vowel: 'ɔ:', word: "morgue", phonetic: "mɔ:rg", end: "rgue"},
        {vowel: 'ɔ:', word: "horn", phonetic: "hɔ:rn", end: "rn"},
        {vowel: 'ɔ:', word: "born", phonetic: "bɔ:rn", end: "rn"},
        {vowel: 'ɔ:', word: "dorm", phonetic: "dɔ:rm", end: "rm"},
        {vowel: 'ɔ:', word: "snore", phonetic: "snɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "store", phonetic: "stɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "floor", phonetic: "flɔ:r", end: "r"},
        {vowel: 'ɔ:', word: "sport", phonetic: "spɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "ashore", phonetic: "ə.ˈʃɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "accord", phonetic: "ə.ˈkɔ:rd", end: "rd"},
        {vowel: 'ɔ:', word: "afford", phonetic: "ə.ˈfɔ:rd", end: "rd"},
        {vowel: 'ɔ:', word: "abort", phonetic: "ə.ˈbɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "support", phonetic: "sə.ˈpɔ:rt", end: "rt"},
        {vowel: 'ɔ:', word: "adore", phonetic: "ə.ˈdɔ:r", end: "re"},
        {vowel: 'ɔ:', word: "order", phonetic: "ˈɔ:r.dər", end: "r"},
        {vowel: 'ɔ:', word: "chorus", phonetic: "ˈkɔ:.rəs", end: "s"},
        {vowel: 'ɔ:', word: "border", phonetic: "ˈbɔ:r.dər", end: "r"},
        {vowel: 'ɔ:', word: "boredom", phonetic: "ˈbɔ:r.dəm", end: "m"},

        {vowel: 'ɔɪ', word: "oil", phonetic: "ɔɪəl", end: "l"},
        {vowel: 'ɔɪ', word: "boy", phonetic: "bɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "coy", phonetic: "kɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "toy", phonetic: "tɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "soy", phonetic: "sɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "soil", phonetic: "sɔɪəl", end: "l"},
        {vowel: 'ɔɪ', word: "boil", phonetic: "bɔɪəl", end: "l"},
        {vowel: 'ɔɪ', word: "coin", phonetic: "kɔɪn", end: "n"},
        {vowel: 'ɔɪ', word: "loin", phonetic: "lɔɪn", end: "n"},
        {vowel: 'ɔɪ', word: "voice", phonetic: "vɔɪs", end: "ce"},
        {vowel: 'ɔɪ', word: "void", phonetic: "vɔɪd", end: "d"},
        {vowel: 'ɔɪ', word: "voile", phonetic: "vɔɪəl", end: "le"},
        {vowel: 'ɔɪ', word: "noise", phonetic: "nɔɪz", end: "se"},
        {vowel: 'ɔɪ', word: "foil", phonetic: "fɔɪəl", end: "l"},
        {vowel: 'ɔɪ', word: "toil", phonetic: "tɔɪəl", end: "l"},
        {vowel: 'ɔɪ', word: "poise", phonetic: "pɔɪz", end: "se"},
        {vowel: 'ɔɪ', word: "oink", phonetic: "ɔɪŋk", end: "nk"},
        {vowel: 'ɔɪ', word: "foist", phonetic: "fɔɪst", end: "st"},
        {vowel: 'ɔɪ', word: "moist", phonetic: "mɔɪst", end: "st"},
        {vowel: 'ɔɪ', word: "voiced", phonetic: "vɔɪst", end: "ced"},
        {vowel: 'ɔɪ', word: "hoist", phonetic: "hɔɪst", end: "st"},
        {vowel: 'ɔɪ', word: "point", phonetic: "pɔɪnt", end: "nt"},
        {vowel: 'ɔɪ', word: "cloy", phonetic: "klɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "ploy", phonetic: "plɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "troy", phonetic: "trɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "spoil", phonetic: "spɔɪəl", end: "l"},
        {vowel: 'ɔɪ', word: "spoilt", phonetic: "spɔɪəlt", end: "lt"},
        {vowel: 'ɔɪ', word: "quoits", phonetic: "kwɔɪts", end: "ts"},
        {vowel: 'ɔɪ', word: "oyster", phonetic: "ˈɔɪs.tər", end: "r"},
        {vowel: 'ɔɪ', word: "soya", phonetic: "ˈsɔɪ.ə", end: ""},
        {vowel: 'ɔɪ', word: "loiter", phonetic: "ˈlɔɪ.tər", end: "r"},
        {vowel: 'ɔɪ', word: "royal", phonetic: "ˈrɔɪ.əl", end: "l"},
        {vowel: 'ɔɪ', word: "loyal", phonetic: "ˈlɔɪ.əl", end: "l"},
        {vowel: 'ɔɪ', word: "buoyant", phonetic: "ˈbɔɪ.ənt", end: "nt"},
        {vowel: 'ɔɪ', word: "foyer", phonetic: "ˈfɔɪ.ər", end: "r"},
        {vowel: 'ɔɪ', word: "poison", phonetic: "ˈpɔɪ.zən", end: "n"},
        {vowel: 'ɔɪ', word: "alloy", phonetic: "ə.ˈlɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "annoy", phonetic: "ə.ˈnɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "appoint", phonetic: "ə.ˈpɔɪnt", end: "nt"},
        {vowel: 'ɔɪ', word: "avoid", phonetic: "ə.ˈvɔɪd", end: "d"},
        {vowel: 'ɔɪ', word: "annoyance", phonetic: "ə.ˈnɔɪ.əns", end: "nce"},
        {vowel: 'ɔɪ', word: "avoidable", phonetic: "ə.ˈvɔɪ.də.bəl", end: "le"},

        {vowel: 'oʊ', word: "owe", phonetic: "oʊ", end: "we"},
        {vowel: 'oʊ', word: "own", phonetic: "oʊn", end: "wn"},
        {vowel: 'oʊ', word: "know", phonetic: "noʊ", end: "w"},
        {vowel: 'oʊ', word: "low", phonetic: "loʊ", end: "w"},
        {vowel: 'oʊ', word: "show", phonetic: "ʃoʊ", end: "w"},
        {vowel: 'oʊ', word: "go", phonetic: "goʊ", end: ""},
        {vowel: 'oʊ', word: "note", phonetic: "noʊt", end: "te"},
        {vowel: 'oʊ', word: "nose", phonetic: "noʊz", end: "se"},
        {vowel: 'oʊ', word: "phone", phonetic: "foʊn", end: "ne"},
        {vowel: 'oʊ', word: "soak", phonetic: "soʊk", end: "k"},
        {vowel: 'oʊ', word: "shown", phonetic: "ʃoʊn", end: "wn"},
        {vowel: 'oʊ', word: "hope", phonetic: "hoʊp", end: "pe"},
        {vowel: 'oʊ', word: "home", phonetic: "hoʊm", end: "me"},
        {vowel: 'oʊ', word: "goat", phonetic: "goʊt", end: "t"},
        {vowel: 'oʊ', word: "coat", phonetic: "koʊt", end: "t"},
        {vowel: 'oʊ', word: "bowl", phonetic: "boʊl", end: "wl"},
        {vowel: 'oʊ', word: "boat", phonetic: "boʊt", end: "t"},
        {vowel: 'oʊ', word: "woke", phonetic: "woʊk", end: "ke"},
        {vowel: 'oʊ', word: "road", phonetic: "roʊd", end: "d"},
        {vowel: 'oʊ', word: "coke", phonetic: "koʊk", end: "ke"},
        {vowel: 'oʊ', word: "comb", phonetic: "koʊm", end: "mb"},
        {vowel: 'oʊ', word: "goal", phonetic: "goʊl", end: "l"},
        {vowel: 'oʊ', word: "gold", phonetic: "goʊld", end: "ld"},
        {vowel: 'oʊ', word: "cold", phonetic: "koʊld", end: "ld"},
        {vowel: 'oʊ', word: "ghost", phonetic: "goʊst", end: "st"},
        {vowel: 'oʊ', word: "most", phonetic: "moʊst", end: "st"},
        {vowel: 'oʊ', word: "post", phonetic: "poʊst", end: "st"},
        {vowel: 'oʊ', word: "don't", phonetic: "doʊnt", end: "n't"},
        {vowel: 'oʊ', word: "blow", phonetic: "bloʊ", end: "w"},
        {vowel: 'oʊ', word: "glow", phonetic: "gloʊ", end: "w"},
        {vowel: 'oʊ', word: "slow", phonetic: "sloʊ", end: "w"},
        {vowel: 'oʊ', word: "snow", phonetic: "snoʊ", end: "w"},
        {vowel: 'oʊ', word: "grow", phonetic: "groʊ", end: "w"},
        {vowel: 'oʊ', word: "throw", phonetic: "θroʊ", end: "w"},
        {vowel: 'oʊ', word: "thrown", phonetic: "θroʊn", end: "wn"},
        {vowel: 'oʊ', word: "flown", phonetic: "floʊn", end: "wn"},
        {vowel: 'oʊ', word: "blown", phonetic: "bloʊn", end: "wn"},
        {vowel: 'oʊ', word: "growth", phonetic: "groʊθ", end: "wth"},
        {vowel: 'oʊ', word: "broke", phonetic: "broʊk", end: "ke"},
        {vowel: 'oʊ', word: "yoke", phonetic: "joʊk", end: "ke"},
        {vowel: 'oʊ', word: "choke", phonetic: "tjoʊk", end: "ke"},
        {vowel: 'oʊ', word: "joke", phonetic: "djoʊk", end: "ke"},

        {vowel: 'e', word: "air", phonetic: "er", end: "r"},
        {vowel: 'e', word: "heir", phonetic: "er", end: "r"},
        {vowel: 'e', word: "hair", phonetic: "her", end: "r"},
        {vowel: 'e', word: "fair", phonetic: "fer", end: "r"},
        {vowel: 'e', word: "pair", phonetic: "per", end: "r"},
        {vowel: 'e', word: "bear", phonetic: "ber", end: "r"},
        {vowel: 'e', word: "care", phonetic: "ker", end: "re"},
        {vowel: 'e', word: "where", phonetic: "wer", end: "re"},
        {vowel: 'e', word: "share", phonetic: "ʃer", end: "re"},
        {vowel: 'e', word: "let", phonetic: "let", end: "t"},
        {vowel: 'e', word: "less", phonetic: "les", end: "s"},
        {vowel: 'e', word: "dead", phonetic: "ded", end: "d"},
        {vowel: 'e', word: "death", phonetic: "deθ", end: "th"},
        {vowel: 'e', word: "deaf", phonetic: "def", end: "f"},
        {vowel: 'e', word: "get", phonetic: "get", end: "t"},
        {vowel: 'e', word: "guess", phonetic: "ges", end: "ss"},
        {vowel: 'e', word: "pen", phonetic: "pen", end: "n"},
        {vowel: 'e', word: "bell", phonetic: "bel", end: "ll"},
        {vowel: 'e', word: "sell", phonetic: "sel", end: "ll"},
        {vowel: 'e', word: "shell", phonetic: "ʃel", end: "ll"},
        {vowel: 'e', word: "debt", phonetic: "det", end: "bt"},
        {vowel: 'e', word: "lend", phonetic: "lend", end: "nd"},
        {vowel: 'e', word: "lent", phonetic: "lent", end: "nt"},
        {vowel: 'e', word: "send", phonetic: "send", end: "nd"},
        {vowel: 'e', word: "sense", phonetic: "sens", end: "nse"},
        {vowel: 'e', word: "guest", phonetic: "gest", end: "st"},
        {vowel: 'e', word: "self", phonetic: "self", end: "lf"},
        {vowel: 'e', word: "shelf", phonetic: "ʃelf", end: "lf"},
        {vowel: 'e', word: "held", phonetic: "held", end: "ld"},
        {vowel: 'e', word: "best", phonetic: "best", end: "st"},
        {vowel: 'e', word: "test", phonetic: "test", end: "st"},
        {vowel: 'e', word: "desk", phonetic: "desk", end: "sk"},
        {vowel: 'e', word: "dealt", phonetic: "delt", end: "lt"},
        {vowel: 'e', word: "dent", phonetic: "dent", end: "nt"},
        {vowel: 'e', word: "bench", phonetic: "bentj", end: "nch"},
        {vowel: 'e', word: "shelves", phonetic: "ʃelvz", end: "lves"},
        {vowel: 'e', word: "stair", phonetic: "ster", end: "r"},
        {vowel: 'e', word: "chair", phonetic: "tjer", end: "r"},
        {vowel: 'e', word: "prayer", phonetic: "prer", end: "r"}        
    ]; 

    function getWordsByvowel(vowelNumbers) {
        return wordBank.filter(item => vowelNumbers.includes(item.vowel));
    }

    function formatPhoneticText(text) {
        let formattedText = '';

        // Remove slashes for processing
        text = text.replace(/\//g, '');

        let i = 0;
        while (i < text.length) {
            let matched = false;

            // Check for vowels first
            for (let vowel of vowelItems) {
                if (text.substr(i, vowel.length) === vowel) {
                    formattedText += `<span class="vowel">${vowel} </span>`;
                    i += vowel.length;
                    matched = true;
                    break;
                }
            }

            // Check for consonants if no vowel matched
            if (!matched) {
                for (let consonant of consonantItems) {
                    if (text.substr(i, consonant.length) === consonant) {
                        formattedText += `<span class="consonant">${consonant} </span>`;
                        i += consonant.length;
                        matched = true;
                        break;
                    }
                }
            }

            // If no match, just add the character
            if (!matched) {
                formattedText += `<span class="consonant">${text[i]}</span>`;
                i++;
            }
        }

        return formattedText;
    }

    function pickNextWord(isNext, arr, isRandom) {
        if(isRandom){
            const randomIndex = Math.floor(Math.random() * arr.length);
            const selectedItem = arr[randomIndex];
            return selectedItem;
        }
        else{
            if(isNext){
                if (oldWordItem == null || typeof oldWordItem == 'undefined'){
                    return arr[0];
                }
                else{
                    if (arr.indexOf(oldWordItem) + 1 == arr.length){
                        return arr[0];
                    }
                    else{
                        return arr[arr.indexOf(oldWordItem) + 1];
                    }                
                }
            }
            else{
                var index = arr.indexOf(oldWordItem) - 1;
                if (index == -1)
                {
                    index = arr.length - 1;
                }

                return arr[index];
            }
        }
    }

    function boldWordEnd(data) {
        if (data == null || typeof data == 'undefined')
            return;

        const { word, end } = data;
        const endIndex = word.lastIndexOf(end);
        
        if (endIndex === -1) {
          return word; // Return the original word if the end pattern is not found
        }
        
        const boldPart = word.slice(endIndex);
        const regularPart = word.slice(0, endIndex);
        
        return `${regularPart}<b>${boldPart}</b>`;
    }
    
    function updateInterface(isNext){
        
        let selectedVowels = $("#filter-buttons button.active").map(function() {
            return $(this).text();
        }).get();

        var selectedWordBank = [];
        if (selectedVowels != null && typeof selectedVowels != 'undefined' && selectedVowels.length > 0){
            selectedWordBank = getWordsByvowel(selectedVowels);
        }
        else{            
            selectedWordBank = wordBank;
        }

        if (selectedWordBank == null || typeof selectedWordBank == 'undefined' || selectedWordBank.length == 0){
            $("#filterable-cards").html("");
            return;
        }

        // let item = pickNextWord(isNext, selectedWordBank, true);
        // while (oldWordItem?.word == item?.word){
        //     item = pickNextWord(isNext, selectedWordBank, true);
        // }

        //oldWordItem = item;

        $("#filterable-cards").html("");

        selectedWordBank.forEach((item, idx)=>{
            let wordEntryElement = $(`
            <div class="card p-0 show" data-name="${item.vowel}">
                <div class="card-body">
                    <h2 class="card-title">${boldWordEnd(item)}</h2>
                    <h4 class="card-text">/ ${formatPhoneticText(item.phonetic)}/</h4>
                </div>
            </div>`);

            $("#filterable-cards").append(wordEntryElement);
        });
    }

    updateInterface(true);

    $("#filter-buttons button").click(e =>{
        $(e.target).toggleClass("active");
        updateInterface(true);
    });

    // $(document).on('click', function(e) {
    //     var screenWidth = $(window).width();
    //     var clickPosition = e.clientX; // Get the horizontal position of the click
        
    //     if (clickPosition < screenWidth / 2) {
    //         // Click was on the left half of the screen
    //         updateInterface(false);
    //     } else {
    //         // Click was on the right half of the screen
    //         updateInterface(true);
    //     }
    // });
});