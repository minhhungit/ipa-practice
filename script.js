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

    const vowelMenuItems = [
        "ɑ:", 
        "aɪ", 
        "aʊ", 
        "ɔ:", 
        "ɔɪ", 
        "oʊ",
        "e",
        "eɪ",
        "æ",
        "ɪ",
        "i:",
        "ʊ",
        "u:",
        "ʌ",
        "ɜ:"
    ];

    const vowelVersusMenuItems = [
        ["ɑ:", "ɔ:"],
        ["ɑ:", "oʊ"],
        ["e", "eɪ", "æ"],
    ]


    vowelMenuItems.forEach((v, idx) =>{
        $("#filter-buttons .vowels").append(`<button type="button" class="btn mb-2 mx-1" data-filter="${v}">${v}</button>`);
    });

    vowelVersusMenuItems.forEach((v, idx) =>{
        $("#filter-buttons .vowels-versus").append(`<button type="button" class="btn mb-2 mx-1" data-filter="${v.join(' vs. ')}">${v.join(" <span class='versus-menu-text'>vs.</span> ")}</button>`);
    });
    
    const wordBank = [
        {vowel: 'ɑ:', word: "not", phonetic: "n ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "hot", phonetic: "h ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "lot", phonetic: "l ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "dot", phonetic: "d ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "lock", phonetic: "l ɑ: k", end: "ck"},
        {vowel: 'ɑ:', word: "talk", phonetic: "t ɑ: k", end: "lk"},
        {vowel: 'ɑ:', word: "taught", phonetic: "t ɑ: t", end: "ght"},
        {vowel: 'ɑ:', word: "tall", phonetic: "t ɑ: l", end: "ll"},
        {vowel: 'ɑ:', word: "cause", phonetic: "k ɑ: z", end: "se"},
        {vowel: 'ɑ:', word: "fought", phonetic: "f ɑ: t", end: "ght"},
        {vowel: 'ɑ:', word: "bought", phonetic: "b ɑ: t", end: "ght"},
        {vowel: 'ɑ:', word: "what", phonetic: "w ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "wall", phonetic: "w ɑ: l", end: "ll"},
        {vowel: 'ɑ:', word: "car", phonetic: "k ɑ: r", end: "r"},
        {vowel: 'ɑ:', word: "guard", phonetic: "g ɑ: r d", end: "rd"},
        {vowel: 'ɑ:', word: "fault", phonetic: "f ɑ: l t", end: "lt"},
        {vowel: 'ɑ:', word: "card", phonetic: "k ɑ: r d", end: "rd"},
        {vowel: 'ɑ:', word: "carve", phonetic: "k ɑ: r v", end: "rve"},
        {vowel: 'ɑ:', word: "dark", phonetic: "d ɑ: r k", end: "rk"},
        {vowel: 'ɑ:', word: "dart", phonetic: "d ɑ: r t", end: "rt"},
        {vowel: 'ɑ:', word: "part", phonetic: "p ɑ: r t", end: "rt"},
        {vowel: 'ɑ:', word: "park", phonetic: "p ɑ: r k", end: "rk"},
        {vowel: 'ɑ:', word: "bark", phonetic: "b ɑ: r k", end: "rk"},
        {vowel: 'ɑ:', word: "heart", phonetic: "h ɑ: r t", end: "rt"},
        {vowel: 'ɑ:', word: "hard", phonetic: "h ɑ: r d", end: "rd"},
        {vowel: 'ɑ:', word: "harm", phonetic: "h ɑ: r m", end: "rm"},
        {vowel: 'ɑ:', word: "mart", phonetic: "m ɑ: r t", end: "rt"},
        {vowel: 'ɑ:', word: "farm", phonetic: "f ɑ: r m", end: "rm"},
        {vowel: 'ɑ:', word: "stop", phonetic: "s t ɑ: p", end: "p"},
        {vowel: 'ɑ:', word: "star", phonetic: "s t ɑ: r", end: "r"},
        {vowel: 'ɑ:', word: "start", phonetic: "s t ɑ: r t", end: "rt"},
        {vowel: 'ɑ:', word: "block", phonetic: "b l ɑ: k", end: "ck"},
        {vowel: 'ɑ:', word: "brought", phonetic: "b r ɑ: t", end: "ght"},
        {vowel: 'ɑ:', word: "drop", phonetic: "d r ɑ: p", end: "p"},
        {vowel: 'ɑ:', word: "small", phonetic: "s m ɑ: l", end: "ll"},
        {vowel: 'ɑ:', word: "stock", phonetic: "s t ɑ: k", end: "ck"},
        {vowel: 'ɑ:', word: "spot", phonetic: "s p ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "plot", phonetic: "p l ɑ: t", end: "t"},
        {vowel: 'ɑ:', word: "clock", phonetic: "k l ɑ: k", end: "ck"},
        {vowel: 'ɑ:', word: "floss", phonetic: "f l ɑ: s", end: "ss"},
        {vowel: 'ɑ:', word: "blonde", phonetic: "b l ɑ: n d", end: "nde"},
        {vowel: 'ɑ:', word: "strong", phonetic: "s t r ɑ: ŋ", end: "ng"},

        {vowel: 'aɪ', word: "tie", phonetic: "t aɪ", end: ""},
        {vowel: 'aɪ', word: "die", phonetic: "d aɪ", end: ""},
        {vowel: 'aɪ', word: "sigh", phonetic: "s aɪ", end: ""},
        {vowel: 'aɪ', word: "why", phonetic: "w aɪ", end: ""},
        {vowel: 'aɪ', word: "dive", phonetic: "d aɪ v", end: "ve"},
        {vowel: 'aɪ', word: "time", phonetic: "t aɪ m", end: "me"},
        {vowel: 'aɪ', word: "size", phonetic: "s aɪ z", end: "ze"},
        {vowel: 'aɪ', word: "sign", phonetic: "s aɪ n", end: "gn"},
        {vowel: 'aɪ', word: "night", phonetic: "n aɪ t", end: "ght"},
        {vowel: 'aɪ', word: "hide", phonetic: "h aɪ d", end: "de"},
        {vowel: 'aɪ', word: "height", phonetic: "h aɪ t", end: "ght"},
        {vowel: 'aɪ', word: "kite", phonetic: "k aɪ t", end: "te"},
        {vowel: 'aɪ', word: "nice", phonetic: "n aɪ s", end: "ce"},
        {vowel: 'aɪ', word: "wife", phonetic: "w aɪ f", end: "fe"},
        {vowel: 'aɪ', word: "wise", phonetic: "w aɪ z", end: "se"},
        {vowel: 'aɪ', word: "white", phonetic: "w aɪ t", end: "te"},
        {vowel: 'aɪ', word: "write", phonetic: "r aɪ t", end: "te"},
        {vowel: 'aɪ', word: "rise", phonetic: "r aɪ z", end: "se"},
        {vowel: 'aɪ', word: "rice", phonetic: "r aɪ s", end: "ce"},
        {vowel: 'aɪ', word: "mice", phonetic: "m aɪ s", end: "ce"},
        {vowel: 'aɪ', word: "mine", phonetic: "m aɪ n", end: "ne"},
        {vowel: 'aɪ', word: "might", phonetic: "m aɪ t", end: "ght"},
        {vowel: 'aɪ', word: "like", phonetic: "l aɪ k", end: "ke"},
        {vowel: 'aɪ', word: "life", phonetic: "l aɪ f", end: "fe"},
        {vowel: 'aɪ', word: "fight", phonetic: "f aɪ t", end: "ght"},
        {vowel: 'aɪ', word: "five", phonetic: "f aɪ v", end: "ve"},
        {vowel: 'aɪ', word: "vice", phonetic: "v aɪ s", end: "ce"},
        {vowel: 'aɪ', word: "wine", phonetic: "w aɪ n", end: "ne"},
        {vowel: 'aɪ', word: "wire", phonetic: "w aɪ ər", end: "re"},
        {vowel: 'aɪ', word: "while", phonetic: "w aɪ əl", end: "le"},
        {vowel: 'aɪ', word: "wild", phonetic: "w aɪ əl d", end: "ld"},
        {vowel: 'aɪ', word: "find", phonetic: "f aɪ n d", end: "nd"},
        {vowel: 'aɪ', word: "kind", phonetic: "k aɪ n d", end: "nd"},
        {vowel: 'aɪ', word: "mind", phonetic: "m aɪ n d", end: "nd"},
        {vowel: 'aɪ', word: "wind", phonetic: "w aɪ n d", end: "nd"},
        {vowel: 'aɪ', word: "dry", phonetic: "d r aɪ", end: ""},
        {vowel: 'aɪ', word: "drive", phonetic: "d r aɪ v", end: "ve"},
        {vowel: 'aɪ', word: "price", phonetic: "p r aɪ s", end: "ce"},
        {vowel: 'aɪ', word: "prize", phonetic: "p r aɪ z", end: "ze"},
        {vowel: 'aɪ', word: "crime", phonetic: "k r aɪ m", end: "me"},
        {vowel: 'aɪ', word: "climb", phonetic: "k l aɪ m", end: "mb"},
        {vowel: 'aɪ', word: "blind", phonetic: "b l aɪ n d", end: "nd"},

        {vowel: 'aʊ', word: "out", phonetic: "aʊ t", end: "t"},
        {vowel: 'aʊ', word: "owl", phonetic: "aʊ əl", end: "wl"},
        {vowel: 'aʊ', word: "hour", phonetic: "aʊ ər", end: "r"},
        {vowel: 'aʊ', word: "ounce", phonetic: "aʊ n s", end: "nce"},
        {vowel: 'aʊ', word: "cow", phonetic: "k aʊ", end: "w"},
        {vowel: 'aʊ', word: "now", phonetic: "n aʊ", end: "w"},
        {vowel: 'aʊ', word: "bow", phonetic: "b aʊ", end: "w"},
        {vowel: 'aʊ', word: "vow", phonetic: "v aʊ", end: "w"},
        {vowel: 'aʊ', word: "how", phonetic: "h aʊ", end: "w"},
        {vowel: 'aʊ', word: "house", phonetic: "h aʊ s", end: "se"},
        {vowel: 'aʊ', word: "loud", phonetic: "l aʊ d", end: "d"},
        {vowel: 'aʊ', word: "doubt", phonetic: "d aʊ t", end: "bt"},
        {vowel: 'aʊ', word: "foul", phonetic: "f aʊ əl", end: "l"},
        {vowel: 'aʊ', word: "sour", phonetic: "s aʊ ər", end: "r"},
        {vowel: 'aʊ', word: "noun", phonetic: "n aʊ n", end: "n"},
        {vowel: 'aʊ', word: "mouse", phonetic: "m aʊ s", end: "se"},
        {vowel: 'aʊ', word: "mouth", phonetic: "m aʊ θ", end: "th"},
        {vowel: 'aʊ', word: "shout", phonetic: "ʃ aʊ t", end: "t"},
        {vowel: 'aʊ', word: "south", phonetic: "s aʊ θ", end: "th"},
        {vowel: 'aʊ', word: "route", phonetic: "r aʊ t", end: "te"},
        {vowel: 'aʊ', word: "souse", phonetic: "s aʊ s", end: "se"},
        {vowel: 'aʊ', word: "count", phonetic: "k aʊ n t", end: "nt"},
        {vowel: 'aʊ', word: "sound", phonetic: "s aʊ n d", end: "nd"},
        {vowel: 'aʊ', word: "round", phonetic: "r aʊ n d", end: "nd"},
        {vowel: 'aʊ', word: "found", phonetic: "f aʊ n d", end: "nd"},
        {vowel: 'aʊ', word: "bound", phonetic: "b aʊ n d", end: "nd"},
        {vowel: 'aʊ', word: "pound", phonetic: "p aʊ n d", end: "nd"},
        {vowel: 'aʊ', word: "bounce", phonetic: "b aʊ n s", end: "nce"},
        {vowel: 'aʊ', word: "crowd", phonetic: "k r aʊ d", end: "wd"},
        {vowel: 'aʊ', word: "crown", phonetic: "k r aʊ n", end: "wn"},
        {vowel: 'aʊ', word: "brown", phonetic: "b r aʊ n", end: "wn"},
        {vowel: 'aʊ', word: "blouse", phonetic: "b l aʊ s", end: "se"},
        {vowel: 'aʊ', word: "proud", phonetic: "p r aʊ d", end: "d"},
        {vowel: 'aʊ', word: "drown", phonetic: "d r aʊ n", end: "wn"},
        {vowel: 'aʊ', word: "frown", phonetic: "f r aʊ n", end: "wn"},
        {vowel: 'aʊ', word: "spouse", phonetic: "s p aʊ s", end: "se"},
        {vowel: 'aʊ', word: "clown", phonetic: "k l aʊ n", end: "wn"},
        {vowel: 'aʊ', word: "cloud", phonetic: "k l aʊ d", end: "d"},
        {vowel: 'aʊ', word: "trout", phonetic: "t r aʊ t", end: "t"},
        {vowel: 'aʊ', word: "browse", phonetic: "b r aʊ z", end: "wse"},
        {vowel: 'aʊ', word: "flower", phonetic: "ˈf l aʊ ər", end: "r"},
        {vowel: 'aʊ', word: "flour", phonetic: "f l aʊ ər", end: "r"},

        {vowel: 'ɔ:', word: "sore", phonetic: "s ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "core", phonetic: "k ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "more", phonetic: "m ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "for", phonetic: "f ɔ: r", end: "r"},
        {vowel: 'ɔ:', word: "four", phonetic: "f ɔ: r", end: "r"},
        {vowel: 'ɔ:', word: "door", phonetic: "d ɔ: r", end: "r"},
        {vowel: 'ɔ:', word: "bore", phonetic: "b ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "tore", phonetic: "t ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "wore", phonetic: "w ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "war", phonetic: "w ɔ: r", end: "r"},
        {vowel: 'ɔ:', word: "horse", phonetic: "h ɔ: r s", end: "rse"},
        {vowel: 'ɔ:', word: "course", phonetic: "k ɔ: r s", end: "rse"},
        {vowel: 'ɔ:', word: "torn", phonetic: "t ɔ: r n", end: "rn"},
        {vowel: 'ɔ:', word: "port", phonetic: "p ɔ: r t", end: "rt"},
        {vowel: 'ɔ:', word: "worn", phonetic: "w ɔ: r n", end: "rn"},
        {vowel: 'ɔ:', word: "court", phonetic: "k ɔ: r t", end: "rt"},
        {vowel: 'ɔ:', word: "corn", phonetic: "k ɔ: r n", end: "rn"},
        {vowel: 'ɔ:', word: "force", phonetic: "f ɔ: r s", end: "rce"},
        {vowel: 'ɔ:', word: "north", phonetic: "n ɔ: r θ", end: "rth"},
        {vowel: 'ɔ:', word: "lord", phonetic: "l ɔ: r d", end: "rd"},
        {vowel: 'ɔ:', word: "form", phonetic: "f ɔ: r m", end: "rm"},
        {vowel: 'ɔ:', word: "sort", phonetic: "s ɔ: r t", end: "rt"},
        {vowel: 'ɔ:', word: "short", phonetic: "ʃ ɔ: r t", end: "rt"},
        {vowel: 'ɔ:', word: "fork", phonetic: "f ɔ: r k", end: "rk"},
        {vowel: 'ɔ:', word: "morgue", phonetic: "m ɔ: r g", end: "rgue"},
        {vowel: 'ɔ:', word: "horn", phonetic: "h ɔ: r n", end: "rn"},
        {vowel: 'ɔ:', word: "born", phonetic: "b ɔ: r n", end: "rn"},
        {vowel: 'ɔ:', word: "dorm", phonetic: "d ɔ: r m", end: "rm"},
        {vowel: 'ɔ:', word: "snore", phonetic: "s n ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "store", phonetic: "s t ɔ: r", end: "re"},
        {vowel: 'ɔ:', word: "floor", phonetic: "f l ɔ: r", end: "r"},
        {vowel: 'ɔ:', word: "sport", phonetic: "s p ɔ: r t", end: "rt"},
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

        {vowel: 'ɔɪ', word: "oil", phonetic: "ɔɪ əl", end: "l"},
        {vowel: 'ɔɪ', word: "boy", phonetic: "b ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "coy", phonetic: "k ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "toy", phonetic: "t ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "soy", phonetic: "s ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "soil", phonetic: "s ɔɪ əl", end: "l"},
        {vowel: 'ɔɪ', word: "boil", phonetic: "b ɔɪ əl", end: "l"},
        {vowel: 'ɔɪ', word: "coin", phonetic: "k ɔɪ n", end: "n"},
        {vowel: 'ɔɪ', word: "loin", phonetic: "l ɔɪ n", end: "n"},
        {vowel: 'ɔɪ', word: "voice", phonetic: "v ɔɪ s", end: "ce"},
        {vowel: 'ɔɪ', word: "void", phonetic: "v ɔɪ d", end: "d"},
        {vowel: 'ɔɪ', word: "voile", phonetic: "v ɔɪ əl", end: "le"},
        {vowel: 'ɔɪ', word: "noise", phonetic: "n ɔɪ z", end: "se"},
        {vowel: 'ɔɪ', word: "foil", phonetic: "f ɔɪ əl", end: "l"},
        {vowel: 'ɔɪ', word: "toil", phonetic: "t ɔɪ əl", end: "l"},
        {vowel: 'ɔɪ', word: "poise", phonetic: "p ɔɪ z", end: "se"},
        {vowel: 'ɔɪ', word: "oink", phonetic: "ɔɪ ŋ k", end: "nk"},
        {vowel: 'ɔɪ', word: "foist", phonetic: "f ɔɪ s t", end: "st"},
        {vowel: 'ɔɪ', word: "moist", phonetic: "m ɔɪ s t", end: "st"},
        {vowel: 'ɔɪ', word: "voiced", phonetic: "v ɔɪ s t", end: "ced"},
        {vowel: 'ɔɪ', word: "hoist", phonetic: "h ɔɪ s t", end: "st"},
        {vowel: 'ɔɪ', word: "point", phonetic: "p ɔɪ n t", end: "nt"},
        {vowel: 'ɔɪ', word: "cloy", phonetic: "k l ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "ploy", phonetic: "p l ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "troy", phonetic: "t r ɔɪ", end: ""},
        {vowel: 'ɔɪ', word: "spoil", phonetic: "s p ɔɪ əl", end: "l"},
        {vowel: 'ɔɪ', word: "spoilt", phonetic: "s p ɔɪ əl t", end: "lt"},
        {vowel: 'ɔɪ', word: "quoits", phonetic: "k w ɔɪ t s", end: "ts"},
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
        {vowel: 'oʊ', word: "own", phonetic: "oʊ n", end: "wn"},
        {vowel: 'oʊ', word: "know", phonetic: "n oʊ", end: "w"},
        {vowel: 'oʊ', word: "low", phonetic: "l oʊ", end: "w"},
        {vowel: 'oʊ', word: "show", phonetic: "ʃ oʊ", end: "w"},
        {vowel: 'oʊ', word: "go", phonetic: "g oʊ", end: ""},
        {vowel: 'oʊ', word: "note", phonetic: "n oʊ t", end: "te"},
        {vowel: 'oʊ', word: "nose", phonetic: "n oʊ z", end: "se"},
        {vowel: 'oʊ', word: "phone", phonetic: "f oʊ n", end: "ne"},
        {vowel: 'oʊ', word: "soak", phonetic: "soʊk", end: "k"},
        {vowel: 'oʊ', word: "shown", phonetic: "ʃ oʊ n", end: "wn"},
        {vowel: 'oʊ', word: "hope", phonetic: "h oʊ p", end: "pe"},
        {vowel: 'oʊ', word: "home", phonetic: "hoʊm", end: "me"},
        {vowel: 'oʊ', word: "goat", phonetic: "g oʊ t", end: "t"},
        {vowel: 'oʊ', word: "coat", phonetic: "k oʊ t", end: "t"},
        {vowel: 'oʊ', word: "bowl", phonetic: "b oʊ l", end: "wl"},
        {vowel: 'oʊ', word: "boat", phonetic: "b oʊ t", end: "t"},
        {vowel: 'oʊ', word: "woke", phonetic: "w oʊ k", end: "ke"},
        {vowel: 'oʊ', word: "road", phonetic: "r oʊ d", end: "d"},
        {vowel: 'oʊ', word: "coke", phonetic: "k oʊ k", end: "ke"},
        {vowel: 'oʊ', word: "comb", phonetic: "k oʊ m", end: "mb"},
        {vowel: 'oʊ', word: "goal", phonetic: "g oʊ l", end: "l"},
        {vowel: 'oʊ', word: "gold", phonetic: "g oʊ l d", end: "ld"},
        {vowel: 'oʊ', word: "cold", phonetic: "k oʊ l d", end: "ld"},
        {vowel: 'oʊ', word: "ghost", phonetic: "g oʊ s t", end: "st"},
        {vowel: 'oʊ', word: "most", phonetic: "m oʊ s t", end: "st"},
        {vowel: 'oʊ', word: "post", phonetic: "p oʊ s t", end: "st"},
        {vowel: 'oʊ', word: "don't", phonetic: "d oʊ n t", end: "n't"},
        {vowel: 'oʊ', word: "blow", phonetic: "b l oʊ", end: "w"},
        {vowel: 'oʊ', word: "glow", phonetic: "g l oʊ", end: "w"},
        {vowel: 'oʊ', word: "slow", phonetic: "s l oʊ", end: "w"},
        {vowel: 'oʊ', word: "snow", phonetic: "s n oʊ", end: "w"},
        {vowel: 'oʊ', word: "grow", phonetic: "g r oʊ", end: "w"},
        {vowel: 'oʊ', word: "throw", phonetic: "θ r oʊ", end: "w"},
        {vowel: 'oʊ', word: "thrown", phonetic: "θ r oʊ n", end: "wn"},
        {vowel: 'oʊ', word: "flown", phonetic: "f l oʊ n", end: "wn"},
        {vowel: 'oʊ', word: "blown", phonetic: "b l oʊ n", end: "wn"},
        {vowel: 'oʊ', word: "growth", phonetic: "g r oʊ θ", end: "wth"},
        {vowel: 'oʊ', word: "broke", phonetic: "b r oʊ k", end: "ke"},
        {vowel: 'oʊ', word: "yoke", phonetic: "j oʊ k", end: "ke"},
        {vowel: 'oʊ', word: "choke", phonetic: "t j oʊ k", end: "ke"},
        {vowel: 'oʊ', word: "joke", phonetic: "d j oʊ k", end: "ke"},

        {vowel: 'e', word: "air", phonetic: "e r", end: "r"},
        {vowel: 'e', word: "heir", phonetic: "e r", end: "r"},
        {vowel: 'e', word: "hair", phonetic: "h e r", end: "r"},
        {vowel: 'e', word: "fair", phonetic: "f e r", end: "r"},
        {vowel: 'e', word: "pair", phonetic: "p e r", end: "r"},
        {vowel: 'e', word: "bear", phonetic: "b e r", end: "r"},
        {vowel: 'e', word: "care", phonetic: "k e r", end: "re"},
        {vowel: 'e', word: "where", phonetic: "w e r", end: "re"},
        {vowel: 'e', word: "share", phonetic: "ʃ e r", end: "re"},
        {vowel: 'e', word: "let", phonetic: "l e t", end: "t"},
        {vowel: 'e', word: "less", phonetic: "l e s", end: "s"},
        {vowel: 'e', word: "dead", phonetic: "d e d", end: "d"},
        {vowel: 'e', word: "death", phonetic: "d e θ", end: "th"},
        {vowel: 'e', word: "deaf", phonetic: "d e f", end: "f"},
        {vowel: 'e', word: "deck", phonetic: "d e k", end: "ck"},
        {vowel: 'e', word: "get", phonetic: "g e t", end: "t"},
        {vowel: 'e', word: "set", phonetic: "s e t", end: "t"},
        {vowel: 'e', word: "guess", phonetic: "g e s", end: "ss"},
        {vowel: 'e', word: "pen", phonetic: "p e n", end: "n"},
        {vowel: 'e', word: "bed", phonetic: "b e d", end: "d"},
        {vowel: 'e', word: "bell", phonetic: "b e l", end: "ll"},
        {vowel: 'e', word: "sell", phonetic: "s e l", end: "ll"},
        {vowel: 'e', word: "shell", phonetic: "ʃ e l", end: "ll"},
        {vowel: 'e', word: "debt", phonetic: "d e t", end: "bt"},
        {vowel: 'e', word: "lend", phonetic: "l e n d", end: "nd"},
        {vowel: 'e', word: "lent", phonetic: "l e n t", end: "nt"},
        {vowel: 'e', word: "send", phonetic: "s e n d", end: "nd"},
        {vowel: 'e', word: "sense", phonetic: "s e n s", end: "nse"},
        {vowel: 'e', word: "guest", phonetic: "g e s t", end: "st"},
        {vowel: 'e', word: "self", phonetic: "s e l f", end: "lf"},
        {vowel: 'e', word: "shelf", phonetic: "ʃ e l f", end: "lf"},
        {vowel: 'e', word: "held", phonetic: "h e l d", end: "ld"},
        {vowel: 'e', word: "best", phonetic: "b e s t", end: "st"},
        {vowel: 'e', word: "test", phonetic: "t e s t", end: "st"},
        {vowel: 'e', word: "desk", phonetic: "d e s k", end: "sk"},
        {vowel: 'e', word: "dealt", phonetic: "delt", end: "lt"},
        {vowel: 'e', word: "dent", phonetic: "d e n t", end: "nt"},
        {vowel: 'e', word: "bench", phonetic: "b e n t j", end: "nch"},
        {vowel: 'e', word: "shelves", phonetic: "ʃ e l v z", end: "lves"},
        {vowel: 'e', word: "stair", phonetic: "s t e r", end: "r"},
        {vowel: 'e', word: "chair", phonetic: "t j e r", end: "r"},
        {vowel: 'e', word: "prayer", phonetic: "p r e r", end: "r"},

        {vowel: 'eɪ', word: "day", phonetic: "d eɪ", end: ""},
        {vowel: 'eɪ', word: "gay", phonetic: "g eɪ", end: ""},
        {vowel: 'eɪ', word: "say", phonetic: "s eɪ", end: ""},
        {vowel: 'eɪ', word: "pay", phonetic: "p eɪ", end: ""},
        {vowel: 'eɪ', word: "may", phonetic: "m eɪ", end: ""},
        {vowel: 'eɪ', word: "mate", phonetic: "m eɪ t", end: "te"},
        {vowel: 'eɪ', word: "make", phonetic: "m eɪ k", end: "ke"},
        {vowel: 'eɪ', word: "made", phonetic: "m eɪ d", end: "de"},
        {vowel: 'eɪ', word: "mail", phonetic: "m eɪ l", end: "l"},
        {vowel: 'eɪ', word: "maze", phonetic: "m eɪ z", end: "ze"},
        {vowel: 'eɪ', word: "main", phonetic: "m eɪ n", end: "n"},
        {vowel: 'eɪ', word: "bake", phonetic: "b eɪ k", end: "ke"},
        {vowel: 'eɪ', word: "cake", phonetic: "k eɪ k", end: "ke"},
        {vowel: 'eɪ', word: "case", phonetic: "k eɪ s", end: "se"},
        {vowel: 'eɪ', word: "face", phonetic: "f eɪ s", end: "ce"},
        {vowel: 'eɪ', word: "fate", phonetic: "f eɪ t", end: "te"},
        {vowel: 'eɪ', word: "faith", phonetic: "f eɪ θ", end: "th"},
        {vowel: 'eɪ', word: "fade", phonetic: "f eɪ d", end: "de"},
        {vowel: 'eɪ', word: "fake", phonetic: "f eɪ k", end: "ke"},
        {vowel: 'eɪ', word: "fail", phonetic: "f eɪ l", end: "l"},
        {vowel: 'eɪ', word: "date", phonetic: "d eɪ t", end: "te"},
        {vowel: 'eɪ', word: "late", phonetic: "l eɪ t", end: "te"},
        {vowel: 'eɪ', word: "lane", phonetic: "l eɪ n", end: "ne"},
        {vowel: 'eɪ', word: "gaze", phonetic: "g eɪ z", end: "ze"},
        {vowel: 'eɪ', word: "game", phonetic: "g eɪ m", end: "me"},
        {vowel: 'eɪ', word: "name", phonetic: "n eɪ m", end: "me"},
        {vowel: 'eɪ', word: "paid", phonetic: "p eɪ d", end: "d"},
        {vowel: 'eɪ', word: "wait", phonetic: "w eɪ t", end: "t"},
        {vowel: 'eɪ', word: "wave", phonetic: "w eɪ v", end: "ve"},
        {vowel: 'eɪ', word: "safe", phonetic: "s eɪ f", end: "fe"},
        {vowel: 'eɪ', word: "save", phonetic: "s eɪ v", end: "ve"},
        {vowel: 'eɪ', word: "saint", phonetic: "s eɪ n t", end: "nt"},
        {vowel: 'eɪ', word: "faint", phonetic: "f eɪ n t", end: "nt"},
        {vowel: 'eɪ', word: "paste", phonetic: "p eɪ s t", end: "ste"},
        {vowel: 'eɪ', word: "play", phonetic: "p l eɪ", end: ""},
        {vowel: 'eɪ', word: "place", phonetic: "p l eɪ s", end: "ce"},
        {vowel: 'eɪ', word: "plate", phonetic: "p l eɪ t", end: "te"},
        {vowel: 'eɪ', word: "plane", phonetic: "p l eɪ n", end: "ne"},
        {vowel: 'eɪ', word: "break", phonetic: "b r eɪ k", end: "k"},
        {vowel: 'eɪ', word: "great", phonetic: "g r eɪ t", end: "t"},
        {vowel: 'eɪ', word: "brain", phonetic: "b r eɪ n", end: "n"},
        {vowel: 'eɪ', word: "chase", phonetic: "t j eɪ s", end: "se"},

        {vowel: 'æ', word: "add", phonetic: "æ d", end: "dd"},
        {vowel: 'æ', word: "as", phonetic: "æ z", end: "s"},
        {vowel: 'æ', word: "bad", phonetic: "b æ d", end: "d"},
        {vowel: 'æ', word: "sad", phonetic: "s æ d", end: "d"},
        {vowel: 'æ', word: "dad", phonetic: "d æ d", end: "d"},
        {vowel: 'æ', word: "pan", phonetic: "p æ n", end: "n"},
        {vowel: 'æ', word: "can", phonetic: "k æ n", end: "n"},
        {vowel: 'æ', word: "man", phonetic: "m æ n", end: "n"},
        {vowel: 'æ', word: "fat", phonetic: "f æ t", end: "t"},
        {vowel: 'æ', word: "cat", phonetic: "k æ t", end: "t"},
        {vowel: 'æ', word: "rat", phonetic: "r æ t", end: "t"},
        {vowel: 'æ', word: "rash", phonetic: "r æ ʃ", end: "sh"},
        {vowel: 'æ', word: "tan", phonetic: "t æ n", end: "n"},
        {vowel: 'æ', word: "task", phonetic: "t æ s k", end: "sk"},
        {vowel: 'æ', word: "fact", phonetic: "f æ k t", end: "ct"},
        {vowel: 'æ', word: "fast", phonetic: "f æ s t", end: "st"},
        {vowel: 'æ', word: "land", phonetic: "l æ n d", end: "nd"},
        {vowel: 'æ', word: "sand", phonetic: "s æ n d", end: "nd"},
        {vowel: 'æ', word: "dance", phonetic: "d æ n s", end: "nce"},
        {vowel: 'æ', word: "pant", phonetic: "p æ n t", end: "nt"},
        {vowel: 'æ', word: "band", phonetic: "b æ n d", end: "nd"},
        {vowel: 'æ', word: "catch", phonetic: "k æ t j", end: "tch"},
        {vowel: 'æ', word: "rank", phonetic: "r æ ŋ k", end: "nk"},
        {vowel: 'æ', word: "ranch", phonetic: "r æ n t j", end: "nch"},
        {vowel: 'æ', word: "graph", phonetic: "ɡ r æ f", end: "ph"},
        {vowel: 'æ', word: "grass", phonetic: "ɡ r æ s", end: "ss"},
        {vowel: 'æ', word: "glad", phonetic: "ɡ l æ d", end: "d"},
        {vowel: 'æ', word: "glass", phonetic: "ɡ l æ s", end: "ss"},
        {vowel: 'æ', word: "crab", phonetic: "k r æ b", end: "b"},
        {vowel: 'æ', word: "drag", phonetic: "d r æ ɡ", end: "g"},
        {vowel: 'æ', word: "crack", phonetic: "k r æ k", end: "ck"},
        {vowel: 'æ', word: "track", phonetic: "t r æ k", end: "ck"},
        {vowel: 'æ', word: "trash", phonetic: "t r æ ʃ", end: "sh"},
        {vowel: 'æ', word: "scan", phonetic: "s k æ n", end: "n"},
        {vowel: 'æ', word: "plan", phonetic: "p l æ n", end: "n"},
        {vowel: 'æ', word: "black", phonetic: "b l æ k", end: "ck"},
        {vowel: 'æ', word: "brand", phonetic: "b r æ n d", end: "nd"},
        {vowel: 'æ', word: "grand", phonetic: "ɡ r æ n d", end: "nd"},
        {vowel: 'æ', word: "prank", phonetic: "p r æ ŋ k", end: "nk"},
        {vowel: 'æ', word: "draft", phonetic: "d r æ f t", end: "ft"},
        {vowel: 'æ', word: "branch", phonetic: "b r æ n t j", end: "ntj"},
        {vowel: 'æ', word: "scratch", phonetic: "s k r æ t j", end: "tch"},

        {vowel: 'ɪ', word: "ear", phonetic: "ɪ r", end: "r"},
        {vowel: 'ɪ', word: "in", phonetic: "ɪ n", end: "n"},
        {vowel: 'ɪ', word: "it", phonetic: "ɪ t", end: "t"},
        {vowel: 'ɪ', word: "is", phonetic: "ɪ z", end: "s"},
        {vowel: 'ɪ', word: "ink", phonetic: "ɪ ŋ k", end: "nk"},
        {vowel: 'ɪ', word: "itch", phonetic: "ɪ t j", end: "tch"},
        {vowel: 'ɪ', word: "inch", phonetic: "ɪ n t j", end: "nch"},
        {vowel: 'ɪ', word: "beer", phonetic: "b ɪ r", end: "r"},
        {vowel: 'ɪ', word: "bit", phonetic: "b ɪ t", end: "t"},
        {vowel: 'ɪ', word: "bill", phonetic: "b ɪ l", end: "ll"},
        {vowel: 'ɪ', word: "big", phonetic: "b ɪ ɡ", end: "g"},
        {vowel: 'ɪ', word: "give", phonetic: "ɡ ɪ v", end: "ve"},
        {vowel: 'ɪ', word: "live", phonetic: "l ɪ v", end: "ve"},
        {vowel: 'ɪ', word: "kiss", phonetic: "k ɪ s", end: "ss"},
        {vowel: 'ɪ', word: "miss", phonetic: "m ɪ s", end: "ss"},
        {vowel: 'ɪ', word: "his", phonetic: "h ɪ z", end: "s"},
        {vowel: 'ɪ', word: "hiss", phonetic: "h ɪ s", end: "ss"},
        {vowel: 'ɪ', word: "hit", phonetic: "h ɪ t", end: "t"},
        {vowel: 'ɪ', word: "hill", phonetic: "h ɪ l", end: "ll"},
        {vowel: 'ɪ', word: "will", phonetic: "w ɪ l", end: "ll"},
        {vowel: 'ɪ', word: "sin", phonetic: "s ɪ n", end: "n"},
        {vowel: 'ɪ', word: "sing", phonetic: "s ɪ ŋ", end: "ng"},
        {vowel: 'ɪ', word: "sick", phonetic: "s ɪ k", end: "ck"},
        {vowel: 'ɪ', word: "sit", phonetic: "s ɪ t", end: "t"},
        {vowel: 'ɪ', word: "build", phonetic: "b ɪ l d", end: "ld"},
        {vowel: 'ɪ', word: "built", phonetic: "b ɪ l t", end: "lt"},
        {vowel: 'ɪ', word: "silk", phonetic: "s ɪ l k", end: "lk"},
        {vowel: 'ɪ', word: "six", phonetic: "s ɪ k s", end: "x"},
        {vowel: 'ɪ', word: "list", phonetic: "l ɪ s t", end: "st"},
        {vowel: 'ɪ', word: "fix", phonetic: "f ɪ k s", end: "x"},
        {vowel: 'ɪ', word: "gift", phonetic: "ɡ ɪ f t", end: "ft"},
        {vowel: 'ɪ', word: "thin", phonetic: "θ ɪ n", end: "n"},
        {vowel: 'ɪ', word: "thing", phonetic: "θ ɪ ŋ", end: "ng"},
        {vowel: 'ɪ', word: "think", phonetic: "θ ɪ ŋ k", end: "nk"},
        {vowel: 'ɪ', word: "since", phonetic: "s ɪ n s", end: "nce"},
        {vowel: 'ɪ', word: "hint", phonetic: "h ɪ n t", end: "nt"},
        {vowel: 'ɪ', word: "mix", phonetic: "m ɪ k s", end: "x"},
        {vowel: 'ɪ', word: "milk", phonetic: "m ɪ l k", end: "lk"},
        {vowel: 'ɪ', word: "mint", phonetic: "m ɪ n t", end: "nt"},
        {vowel: 'ɪ', word: "mist", phonetic: "m ɪ s t", end: "st"},
        {vowel: 'ɪ', word: "minute", phonetic: "mɪ nɪt", end: "te"},
        {vowel: 'ɪ', word: "limit", phonetic: "lɪ mɪt", end: "t"},

        {vowel: 'i:', word: "eat", phonetic: "i: t", end: "t"},
        {vowel: 'i:', word: "ease", phonetic: "i: z", end: "se"},
        {vowel: 'i:', word: "see", phonetic: "s i:", end: ""},
        {vowel: 'i:', word: "seat", phonetic: "s i: t", end: "t"},
        {vowel: 'i:', word: "seed", phonetic: "s i: d", end: "d"},
        {vowel: 'i:', word: "seem", phonetic: "s i: m", end: "m"},
        {vowel: 'i:', word: "seal", phonetic: "s i: l", end: "l"},
        {vowel: 'i:', word: "niece", phonetic: "n i: s", end: "ce"},
        {vowel: 'i:', word: "neat", phonetic: "n i: t", end: "t"},
        {vowel: 'i:', word: "need", phonetic: "n i: d", end: "d"},
        {vowel: 'i:', word: "read", phonetic: "r i: d", end: "d"},
        {vowel: 'i:', word: "reach", phonetic: "r i: t j", end: "ch"},
        {vowel: 'i:', word: "lead", phonetic: "l i: d", end: "d"},
        {vowel: 'i:', word: "leave", phonetic: "l i: v", end: "ve"},
        {vowel: 'i:', word: "key", phonetic: "k i:", end: ""},
        {vowel: 'i:', word: "keep", phonetic: "k i: p", end: "p"},
        {vowel: 'i:', word: "lease", phonetic: "l i: s", end: "se"},
        {vowel: 'i:', word: "please", phonetic: "p l i: z", end: "se"},
        {vowel: 'i:', word: "feet", phonetic: "f i: t", end: "t"},
        {vowel: 'i:', word: "feed", phonetic: "f i: d", end: "d"},
        {vowel: 'i:', word: "feel", phonetic: "f i: l", end: "l"},
        {vowel: 'i:', word: "be", phonetic: "b i:", end: ""},
        {vowel: 'i:', word: "beef", phonetic: "b i: f", end: "f"},
        {vowel: 'i:', word: "beast", phonetic: "b i: s t", end: "st"},
        {vowel: 'i:', word: "heat", phonetic: "h i: t", end: "t"},
        {vowel: 'i:', word: "heal", phonetic: "h i: l", end: "l"},
        {vowel: 'i:', word: "beat", phonetic: "b i: t", end: "t"},
        {vowel: 'i:', word: "beach", phonetic: "b i: t j", end: "ch"},
        {vowel: 'i:', word: "dean", phonetic: "d i: n", end: "n"},
        {vowel: 'i:', word: "deep", phonetic: "d i: p", end: "p"},
        {vowel: 'i:', word: "peace", phonetic: "p i: s", end: "ce"},
        {vowel: 'i:', word: "peak", phonetic: "p i: k", end: "k"},
        {vowel: 'i:', word: "peel", phonetic: "p i: l", end: "l"},
        {vowel: 'i:', word: "sheep", phonetic: "ʃ i: p", end: "p"},
        {vowel: 'i:', word: "sheet", phonetic: "ʃ i: t", end: "t"},
        {vowel: 'i:', word: "week", phonetic: "w i: k", end: "k"},
        {vowel: 'i:', word: "weep", phonetic: "w i: p", end: "p"},
        {vowel: 'i:', word: "sweep", phonetic: "s w i: p", end: "p"},
        {vowel: 'i:', word: "breathe", phonetic: "b r i: ð", end: "the"},
        {vowel: 'i:', word: "cheese", phonetic: "t j i: z", end: "se"},
        {vowel: 'i:', word: "cheek", phonetic: "t j i: k", end: "k"},
        {vowel: 'i:', word: "G", phonetic: "d j i:", end: ""},

        {vowel: 'ʊ', word: "tour", phonetic: "t ʊ r", end: "r"},
        {vowel: 'ʊ', word: "took", phonetic: "t ʊ k", end: "k"},
        {vowel: 'ʊ', word: "look", phonetic: "l ʊ k", end: "k"},
        {vowel: 'ʊ', word: "book", phonetic: "b ʊ k", end: "k"},
        {vowel: 'ʊ', word: "cook", phonetic: "k ʊ k", end: "k"},
        {vowel: 'ʊ', word: "hook", phonetic: "h ʊ k", end: "k"},
        {vowel: 'ʊ', word: "sook", phonetic: "s ʊ k", end: "k"},
        {vowel: 'ʊ', word: "shook", phonetic: "ʃ ʊ k", end: "k"},
        {vowel: 'ʊ', word: "foot", phonetic: "f ʊ t", end: "t"},
        {vowel: 'ʊ', word: "put", phonetic: "p ʊ t", end: "t"},
        {vowel: 'ʊ', word: "soot", phonetic: "s ʊ t", end: "t"},
        {vowel: 'ʊ', word: "hood", phonetic: "h ʊ d", end: "d"},
        {vowel: 'ʊ', word: "wood", phonetic: "w ʊ d", end: "d"},
        {vowel: 'ʊ', word: "could", phonetic: "k ʊ d", end: "ld"},
        {vowel: 'ʊ', word: "should", phonetic: "ʃ ʊ d", end: "ld"},
        {vowel: 'ʊ', word: "push", phonetic: "p ʊ ʃ", end: "sh"},
        {vowel: 'ʊ', word: "lure", phonetic: "l ʊ r", end: "re"},
        {vowel: 'ʊ', word: "sure", phonetic: "ʃ ʊ r", end: "re"},
        {vowel: 'ʊ', word: "full", phonetic: "f ʊ l", end: "ll"},
        {vowel: 'ʊ', word: "bull", phonetic: "b ʊ l", end: "ll"},
        {vowel: 'ʊ', word: "pull", phonetic: "p ʊ l", end: "ll"},
        {vowel: 'ʊ', word: "good", phonetic: "ɡ ʊ d", end: "d"},
        {vowel: 'ʊ', word: "goods", phonetic: "ɡ ʊ d z", end: "ds"},
        {vowel: 'ʊ', word: "poor", phonetic: "p ʊ r", end: "r"},
        {vowel: 'ʊ', word: "pure", phonetic: "p j ʊ r", end: "re"},
        {vowel: 'ʊ', word: "cure", phonetic: "k j ʊ r", end: "re"},
        {vowel: 'ʊ', word: "brook", phonetic: "b r ʊ k", end: "k"},
        {vowel: 'ʊ', word: "spoor", phonetic: "s p ʊ r", end: "r"},
        {vowel: 'ʊ', word: "amour", phonetic: "ə ˈmʊr", end: "r"},
        {vowel: 'ʊ', word: "allure", phonetic: "ə ˈlʊr", end: "re"},
        {vowel: 'ʊ', word: "assure", phonetic: "ə ˈʃʊr", end: "re"},
        {vowel: 'ʊ', word: "ensure", phonetic: "ɪn ˈʃʊr", end: "re"},
        {vowel: 'ʊ', word: "mature", phonetic: "mə ˈtʊr", end: "re"},
        {vowel: 'ʊ', word: "rookie", phonetic: "ˈrʊ ki", end: ""},
        {vowel: 'ʊ', word: "cookie", phonetic: "ˈkʊ ki", end: ""},
        {vowel: 'ʊ', word: "cooker", phonetic: "ˈkʊ kər", end: "r"},
        {vowel: 'ʊ', word: "detour", phonetic: "ˈdi: tʊr", end: "r"},
        {vowel: 'ʊ', word: "parkour", phonetic: "pɑ:r ˈkʊr", end: "r"},
        {vowel: 'ʊ', word: "adjure", phonetic: "ə ˈdjʊr", end: "re"},
        {vowel: 'ʊ', word: "secure", phonetic: "sɪ ˈkjʊr", end: "re"},
        {vowel: 'ʊ', word: "brochure", phonetic: "broʊ ˈʃʊr", end: "re"},
        {vowel: 'ʊ', word: "checkbook", phonetic: "ˈtjek bʊk", end: "k"},

        {vowel: 'u:', word: "who", phonetic: "h u:", end: ""},
        {vowel: 'u:', word: "two", phonetic: "t u:", end: ""},
        {vowel: 'u:', word: "shoe", phonetic: "ʃ u:", end: ""},
        {vowel: 'u:', word: "boot", phonetic: "b u: t", end: "t"},
        {vowel: 'u:', word: "booth", phonetic: "b u: θ", end: "th"},
        {vowel: 'u:', word: "booze", phonetic: "b u: z", end: "ze"},
        {vowel: 'u:', word: "news", phonetic: "n u: z", end: "ws"},
        {vowel: 'u:', word: "food", phonetic: "f u: d", end: "d"},
        {vowel: 'u:', word: "fool", phonetic: "f u: l", end: "l"},
        {vowel: 'u:', word: "goose", phonetic: "ɡ u: s", end: "se"},
        {vowel: 'u:', word: "cool", phonetic: "k u: l", end: "l"},
        {vowel: 'u:', word: "whose", phonetic: "h u: z", end: "se"},
        {vowel: 'u:', word: "whom", phonetic: "h u: m", end: "m"},
        {vowel: 'u:', word: "hoop", phonetic: "h u: p", end: "p"},
        {vowel: 'u:', word: "loop", phonetic: "l u: p", end: "p"},
        {vowel: 'u:', word: "loose", phonetic: "l u: s", end: "se"},
        {vowel: 'u:', word: "lose", phonetic: "l u: z", end: "se"},
        {vowel: 'u:', word: "mood", phonetic: "m u: d", end: "d"},
        {vowel: 'u:', word: "moon", phonetic: "m u: n", end: "n"},
        {vowel: 'u:', word: "moose", phonetic: "m u: s", end: "se"},
        {vowel: 'u:', word: "noon", phonetic: "n u: n", end: "n"},
        {vowel: 'u:', word: "room", phonetic: "r u: m", end: "m"},
        {vowel: 'u:', word: "tooth", phonetic: "t u: θ", end: "θ"},
        {vowel: 'u:', word: "root", phonetic: "r u: t", end: "t"},
        {vowel: 'u:', word: "shoot", phonetic: "ʃ u: t", end: "t"},
        {vowel: 'u:', word: "tool", phonetic: "t u: l", end: "l"},
        {vowel: 'u:', word: "roof", phonetic: "r u: f", end: "f"},
        {vowel: 'u:', word: "boost", phonetic: "b u: s t", end: "st"},
        {vowel: 'u:', word: "flew", phonetic: "f l u:", end: ""},
        {vowel: 'u:', word: "few", phonetic: "f j u:", end: ""},
        {vowel: 'u:', word: "view", phonetic: "v j u:", end: ""},
        {vowel: 'u:', word: "brew", phonetic: "b r u:", end: ""},
        {vowel: 'u:', word: "drew", phonetic: "d r u:", end: ""},
        {vowel: 'u:', word: "crew", phonetic: "k r u:", end: ""},
        {vowel: 'u:', word: "grew", phonetic: "ɡ r u:", end: ""},
        {vowel: 'u:', word: "groom", phonetic: "ɡ r u: m", end: "m"},
        {vowel: 'u:', word: "proof", phonetic: "p r u: f", end: "f"},
        {vowel: 'u:', word: "bloom", phonetic: "b l u: m", end: "m"},
        {vowel: 'u:', word: "school", phonetic: "s k u: l", end: "l"},
        {vowel: 'u:', word: "spoon", phonetic: "s p u: n", end: "n"},
        {vowel: 'u:', word: "choose", phonetic: "t j u: z", end: "se"},
        {vowel: 'u:', word: "screw", phonetic: "s k r u:", end: ""},

        {vowel: 'ʌ', word: "but", phonetic: "b ʌt", end: "t"},
        {vowel: 'ʌ', word: "cut", phonetic: "c ʌt", end: "t"},
        {vowel: 'ʌ', word: "cup", phonetic: "c ʌp", end: "p"},
        {vowel: 'ʌ', word: "come", phonetic: "k ʌm", end: "me"},
        {vowel: 'ʌ', word: "dumb", phonetic: "d ʌm", end: "mb"},
        {vowel: 'ʌ', word: "lung", phonetic: "l ʌŋ", end: "ng"},
        {vowel: 'ʌ', word: "buck", phonetic: "b ʌk", end: "ck"},
        {vowel: 'ʌ', word: "buzz", phonetic: "b ʌz", end: "zz"},
        {vowel: 'ʌ', word: "some", phonetic: "s ʌm", end: "me"},
        {vowel: 'ʌ', word: "run", phonetic: "r ʌn", end: "n"},
        {vowel: 'ʌ', word: "bus", phonetic: "b ʌs", end: "s"},
        {vowel: 'ʌ', word: "bug", phonetic: "b ʌg", end: "g"},
        {vowel: 'ʌ', word: "duck", phonetic: "d ʌk", end: "ck"},
        {vowel: 'ʌ', word: "dug", phonetic: "d ʌɡ", end: "g"},
        {vowel: 'ʌ', word: "putt", phonetic: "p ʌt", end: "tt"},
        {vowel: 'ʌ', word: "shut", phonetic: "ʃ ʌt", end: "t"},
        {vowel: 'ʌ', word: "one", phonetic: "w ʌn", end: "ne"},
        {vowel: 'ʌ', word: "rush", phonetic: "r ʌʃ", end: "sh"},
        {vowel: 'ʌ', word: "dust", phonetic: "d ʌs t", end: "st"},
        {vowel: 'ʌ', word: "duct", phonetic: "d ʌk t", end: "ct"},
        {vowel: 'ʌ', word: "dump", phonetic: "d ʌm p", end: "mp"},
        {vowel: 'ʌ', word: "punk", phonetic: "p ʌŋ k", end: "nk"},
        {vowel: 'ʌ', word: "touch", phonetic: "t ʌt j", end: "ch"},
        {vowel: 'ʌ', word: "such", phonetic: "s ʌt j", end: "ch"},
        {vowel: 'ʌ', word: "much", phonetic: "m ʌt j", end: "ch"},
        {vowel: 'ʌ', word: "lunch", phonetic: "l ʌn t j", end: "ch"},
        {vowel: 'ʌ', word: "bunch", phonetic: "b ʌn t j", end: "ch"},
        {vowel: 'ʌ', word: "punch", phonetic: "p ʌn t j", end: "ch"},
        {vowel: 'ʌ', word: "pluck", phonetic: "p l ʌk", end: "ck"},
        {vowel: 'ʌ', word: "flush", phonetic: "f l ʌʃ", end: "sh"},
        {vowel: 'ʌ', word: "blush", phonetic: "b l ʌʃ", end: "sh"},
        {vowel: 'ʌ', word: "plug", phonetic: "p l ʌɡ", end: "g"},
        {vowel: 'ʌ', word: "thrush", phonetic: "θ r ʌʃ", end: "sh"},
        {vowel: 'ʌ', word: "crush", phonetic: "k r ʌʃ", end: "sh"},
        {vowel: 'ʌ', word: "brush", phonetic: "b r ʌʃ", end: "sh"},
        {vowel: 'ʌ', word: "truck", phonetic: "t r ʌk", end: "ck"},
        {vowel: 'ʌ', word: "trust", phonetic: "t r ʌs t", end: "st"},
        {vowel: 'ʌ', word: "trunk", phonetic: "t r ʌŋ k", end: "nk"},
        {vowel: 'ʌ', word: "drunk", phonetic: "d r ʌŋ k", end: "nk"},
        {vowel: 'ʌ', word: "flunk", phonetic: "f l ʌŋ k", end: "nk"},
        {vowel: 'ʌ', word: "brunch", phonetic: "b r ʌn t j", end: "nch"},
        {vowel: 'ʌ', word: "crunch", phonetic: "k r ʌn t j", end: "nch"},

        {vowel: 'ɜ:', word: "sir", phonetic: "s ɜ: r", end: "r"},
        {vowel: 'ɜ:', word: "serve", phonetic: "s ɜ: r v", end: "rve"},
        {vowel: 'ɜ:', word: "heard", phonetic: "h ɜ: r d", end: "rd"},
        {vowel: 'ɜ:', word: "hurt", phonetic: "h ɜ: r t", end: "rt"},
        {vowel: 'ɜ:', word: "worse", phonetic: "w ɜ: r s", end: "rse"},
        {vowel: 'ɜ:', word: "work", phonetic: "w ɜ: r k", end: "rk"},
        {vowel: 'ɜ:', word: "word", phonetic: "w ɜ: r d", end: "rd"},
        {vowel: 'ɜ:', word: "whirl", phonetic: "w ɜ: r l", end: "rl"},
        {vowel: 'ɜ:', word: "worth", phonetic: "w ɜ: r θ", end: "rth"},
        {vowel: 'ɜ:', word: "worm", phonetic: "w ɜ: r m", end: "rm"},
        {vowel: 'ɜ:', word: "bird", phonetic: "b ɜ: r d", end: "rd"},
        {vowel: 'ɜ:', word: "birth", phonetic: "b ɜ: r θ", end: "rth"},
        {vowel: 'ɜ:', word: "dirt", phonetic: "d ɜ: r t", end: "rt"},
        {vowel: 'ɜ:', word: "shirt", phonetic: "ʃ ɜ: r t", end: "rt"},
        {vowel: 'ɜ:', word: "verb", phonetic: "v ɜ: r b", end: "rb"},
        {vowel: 'ɜ:', word: "hurl", phonetic: "h ɜ: r l", end: "rl"},
        {vowel: 'ɜ:', word: "purse", phonetic: "p ɜ: r s", end: "rse"},
        {vowel: 'ɜ:', word: "curve", phonetic: "k ɜ: r v", end: "rve"},
        {vowel: 'ɜ:', word: "turn", phonetic: "t ɜ: r n", end: "rn"},
        {vowel: 'ɜ:', word: "learn", phonetic: "l ɜ: r n", end: "rn"},
        {vowel: 'ɜ:', word: "nurse", phonetic: "n ɜ: r s", end: "rse"},
        {vowel: 'ɜ:', word: "nerve", phonetic: "n ɜ: r v", end: "rve"},
        {vowel: 'ɜ:', word: "third", phonetic: "θ ɜ: r d", end: "rd"},
        {vowel: 'ɜ:', word: "thirst", phonetic: "θ ɜ: r s t", end: "rst"},
        {vowel: 'ɜ:', word: "worst", phonetic: "w ɜ: r s t", end: "rst"},
        {vowel: 'ɜ:', word: "first", phonetic: "f ɜ: r s t", end: "rst"},
        {vowel: 'ɜ:', word: "world", phonetic: "w ɜ: r l d", end: "rld"},
        {vowel: 'ɜ:', word: "skirt", phonetic: "s k ɜ: r t", end: "rt"},
        {vowel: 'ɜ:', word: "clerk", phonetic: "k l ɜ: r k", end: "rk"},
        {vowel: 'ɜ:', word: "church", phonetic: "t j ɜ: r t j", end: "rch"},
        {vowel: 'ɜ:', word: "observe", phonetic: "əb ˈzɜ:rv", end: "rve"},
        {vowel: 'ɜ:', word: "curtain", phonetic: "ˈkɜ:r tən", end: "n"},
        {vowel: 'ɜ:', word: "curdle", phonetic: "ˈkɜ:r dəl", end: "le"},
        {vowel: 'ɜ:', word: "worsen", phonetic: "ˈwɜ:r sən", end: "n"},
        {vowel: 'ɜ:', word: "worker", phonetic: "ˈwɜ:r kər", end: "r"},
        {vowel: 'ɜ:', word: "purpose", phonetic: "ˈpɜ:r pəs", end: "se"},
        {vowel: 'ɜ:', word: "purple", phonetic: "ˈpɜ:r pəl", end: "le"},
        {vowel: 'ɜ:', word: "purchase", phonetic: "ˈpɜ:r tjəs", end: "se"},
        {vowel: 'ɜ:', word: "further", phonetic: "ˈfɜ:r ðər", end: "r"},
        {vowel: 'ɜ:', word: "circus", phonetic: "ˈsɜ:r kəs", end: "s"},
        {vowel: 'ɜ:', word: "circle", phonetic: "ˈsɜ:r kəl", end: "le"},
        {vowel: 'ɜ:', word: "confirm", phonetic: "kən ˈfɜ:rm", end: "rm"},
    ];
    
    const wordVersusBank = [
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "awe", phonetic: "ɑ:", end: ""}, 
            {word: "or", phonetic: "ɔ: r", end: "r"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "paw", phonetic: "p ɑ:", end: ""}, 
            {word: "pore", phonetic: "p ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "saw", phonetic: "s ɑ:", end: ""}, 
            {word: "sore", phonetic: "s ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "maw", phonetic: "m ɑ:", end: ""}, 
            {word: "more", phonetic: "m ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "law", phonetic: "l ɑ:", end: ""}, 
            {word: "lord", phonetic: "l ɔ: r d", end: "rd"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "bar", phonetic: "b ɑ: r", end: "r"}, 
            {word: "bore", phonetic: "b ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "car", phonetic: "k ɑ: r", end: "r"}, 
            {word: "core", phonetic: "k ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "far", phonetic: "f ɑ: r", end: "r"}, 
            {word: "for", phonetic: "f ɔ: r", end: "r"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "heart", phonetic: "h ɑ: r t", end: "rt"}, 
            {word: "hoard", phonetic: "h ɔ: r d", end: "rd"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "part", phonetic: "p ɑ: r t", end: "rt"}, 
            {word: "port", phonetic: "p ɔ: r t", end: "rt"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "dark", phonetic: "d ɑ: r k", end: "rk"}, 
            {word: "dork", phonetic: "d ɔ: r k", end: "rk"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "harsh", phonetic: "h ɑ: r ʃ", end: "rsh"}, 
            {word: "horse", phonetic: "h ɔ: r s", end: "rse"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "guard", phonetic: "ɡ ɑ: r d", end: "rd"}, 
            {word: "gore", phonetic: "ɡ ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "flaw", phonetic: "f l ɑ:", end: "w"}, 
            {word: "floor", phonetic: "f l ɔ: r", end: "r"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "scar", phonetic: "s k ɑ: r", end: "r"}, 
            {word: "score", phonetic: "s k ɔ: r", end: "re"}]
        },
        {vowel: 'ɑ: vs. ɔ:', words: [
            {word: "star", phonetic: "s t ɑ: r", end: "r"}, 
            {word: "store", phonetic: "s t ɔ: r", end: "re"}]
        },


        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "cod", phonetic: "k ɑ: d", end: "d"}, 
            {word: "code", phonetic: "k oʊ d", end: "de"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "not", phonetic: "n ɑ: t", end: "t"}, 
            {word: "note", phonetic: "n oʊ t", end: "te"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "bought", phonetic: "b ɑ: t", end: "ght"}, 
            {word: "boat", phonetic: "b oʊ t", end: "t"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "lot", phonetic: "l ɑ: t", end: "t"}, 
            {word: "load", phonetic: "l oʊ d", end: "d"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "hop", phonetic: "h ɑ: p", end: "p"}, 
            {word: "hope", phonetic: "h oʊ p", end: "pe"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "mod", phonetic: "m ɑ: d", end: "d"}, 
            {word: "mode", phonetic: "m oʊ d", end: "de"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "shop", phonetic: "ʃ ɑ: p", end: "p"}, 
            {word: "soap", phonetic: "s oʊ p", end: "p"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "lost", phonetic: "l ɑ: s t", end: "st"}, 
            {word: "most", phonetic: "m oʊ s t", end: "st"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "cost", phonetic: "k ɑ: s t", end: "st"}, 
            {word: "coast", phonetic: "k oʊ s t", end: "st"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "font", phonetic: "f ɑ: n t", end: "nt"}, 
            {word: "phone", phonetic: "f oʊ n", end: "ne"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "got", phonetic: "g ɑ: t", end: "t"}, 
            {word: "goat", phonetic: "g oʊ t", end: "t"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "gone", phonetic: "g ɑ: n", end: "ne"}, 
            {word: "goal", phonetic: "g oʊ l", end: "l"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "rod", phonetic: "r ɑ: d", end: "d"}, 
            {word: "road", phonetic: "r oʊ d", end: "d"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "bond", phonetic: "b ɑ: n d", end: "nd"}, 
            {word: "bone", phonetic: "b oʊ n", end: "ne"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "broad", phonetic: "b r ɑ: d", end: "d"}, 
            {word: "broke", phonetic: "b r oʊ k", end: "ke"}]
        },
        {vowel: 'ɑ: vs. oʊ', words: [
            {word: "jog", phonetic: "d j ɑ: ɡ", end: "g"}, 
            {word: "joke", phonetic: "d j oʊ k", end: "ke"}]
        },

        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "bed", phonetic: "b e d", end: "d"}, 
            {word: "bade", phonetic: "b eɪ d", end: "de"},
            {word: "bad", phonetic: "b æ d", end: "d"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "bet", phonetic: "b e t", end: "t"}, 
            {word: "bathe", phonetic: "b eɪ ð", end: "the"},
            {word: "bat", phonetic: "b æ t", end: "t"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "pen", phonetic: "p e n", end: "n"}, 
            {word: "pain", phonetic: "p eɪ n", end: "n"},
            {word: "pan", phonetic: "p æ n", end: "n"}]
        },//-------------------
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "men", phonetic: "m e n", end: "n"}, 
            {word: "main", phonetic: "m eɪ n", end: "n"},
            {word: "man", phonetic: "m æ n", end: "n"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "med", phonetic: "m e d", end: "d"}, 
            {word: "made", phonetic: "m eɪ d", end: "de"},
            {word: "mad", phonetic: "m æ d", end: "d"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "beg", phonetic: "b e ɡ", end: "g"},
            {word: "bake", phonetic: "b eɪ k", end: "ke"}, 
            {word: "bag", phonetic: "b æ ɡ", end: "g"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "het", phonetic: "h e t", end: "t"}, 
            {word: "hate", phonetic: "h eɪ t", end: "te"},
            {word: "hat", phonetic: "h æ t", end: "t"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "fed", phonetic: "f e d", end: "d"}, 
            {word: "fade", phonetic: "f eɪ d", end: "de"},
            {word: "fad", phonetic: "f æ d", end: "d"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "said", phonetic: "s e d", end: "d"}, 
            {word: "sate", phonetic: "s eɪ t", end: "te"},
            {word: "sad", phonetic: "s æ d", end: "d"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "pet", phonetic: "p e t", end: "t"}, 
            {word: "pate", phonetic: "p eɪ t", end: "te"},
            {word: "pat", phonetic: "p æ t", end: "t"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "debt", phonetic: "d e t", end: "bt"}, 
            {word: "date", phonetic: "d eɪ t", end: "te"},
            {word: "DAT", phonetic: "d æ t", end: "T"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "rent", phonetic: "r e n t", end: "nt"}, 
            {word: "rain", phonetic: "r eɪ n", end: "n"},
            {word: "ran", phonetic: "r æ n", end: "n"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "lend", phonetic: "l e n d", end: "nd"}, 
            {word: "lane", phonetic: "l eɪ n", end: "ne"},
            {word: "land", phonetic: "l æ n d", end: "nd"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "lest", phonetic: "l e s t", end: "st"}, 
            {word: "lace", phonetic: "l eɪ s", end: "ce"},
            {word: "last", phonetic: "l æ s t", end: "st"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "vest", phonetic: "v e s t", end: "st"}, 
            {word: "vase", phonetic: "v eɪ s", end: "se"},
            {word: "vast", phonetic: "v æ s t", end: "st"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "pest", phonetic: "p e s t", end: "st"}, 
            {word: "paste", phonetic: "p eɪ s t", end: "ste"},
            {word: "past", phonetic: "p æ s t", end: "st"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "send", phonetic: "s e n d", end: "nd"}, 
            {word: "saint", phonetic: "s eɪ n t", end: "nt"},
            {word: "sand", phonetic: "s æ n d", end: "nd"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "chef", phonetic: "ʃ e f", end: "f"}, 
            {word: "shape", phonetic: "ʃ eɪ p", end: "pe"},
            {word: "shaft", phonetic: "ʃ æ f t", end: "ft"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "test", phonetic: "t e s t", end: "st"}, 
            {word: "taste", phonetic: "t eɪ s t", end: "ste"},
            {word: "task", phonetic: "t æ s k", end: "sk"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "ketch", phonetic: "k e tʃ", end: "tch"}, 
            {word: "cage", phonetic: "k eɪ dʒ", end: "ge"},
            {word: "catch", phonetic: "k æ tʃ", end: "tch"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "cress", phonetic: "k r e s", end: "ss"}, 
            {word: "craze", phonetic: "k r eɪ z", end: "ze"},
            {word: "crass", phonetic: "k r æ s", end: "ss"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "bread", phonetic: "b r e d", end: "d"}, 
            {word: "break", phonetic: "b r eɪ k", end: "k"},
            {word: "brag", phonetic: "b r æ ɡ", end: "g"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "dreck", phonetic: "d r e k", end: "ck"}, 
            {word: "drake", phonetic: "d r eɪ k", end: "ke"},
            {word: "drag", phonetic: "d r æ ɡ", end: "g"}]
        },
        {vowel: 'e vs. eɪ vs. æ', words: [
            {word: "trek", phonetic: "t r e k", end: "k"}, 
            {word: "trade", phonetic: "t r eɪ d", end: "de"},
            {word: "track", phonetic: "t r æ k", end: "ck"}]
        },
    ];

    function getWordsByVowel(keys) {
        return wordBank.filter(item => keys.includes(item.vowel));
    }

    function getWordsByVowelVersus(keys) {
        return wordVersusBank.filter(item => keys.includes(item.vowel));
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
                    formattedText += `<span class="vowel">${vowel}</span>`;
                    i += vowel.length;
                    matched = true;
                    break;
                }
            }

            // Check for consonants if no vowel matched
            if (!matched) {
                for (let consonant of consonantItems) {
                    if (text.substr(i, consonant.length) === consonant) {
                        formattedText += `<span class="consonant">${consonant}</span>`;
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

    function boldWordEnd(word, end) {
        if (word == null || typeof word == 'undefined')
            return;

        const endIndex = word.lastIndexOf(end);
        
        if (endIndex === -1) {
          return word; // Return the original word if the end pattern is not found
        }
        
        const boldPart = word.slice(endIndex);
        const regularPart = word.slice(0, endIndex);
        
        return `${regularPart}<b>${boldPart}</b>`;
    }
    
    function updateInterface(isNext, isVersusMode){
        let selectedVowelKeys = [];
        if (isVersusMode){
            selectedVowelKeys = $("#filter-buttons .vowels-versus button.active").map(function() {
                return $(this).text();
            }).get();
        }
        else{
            selectedVowelKeys = $("#filter-buttons .vowels button.active").map(function() {
                return $(this).text();
            }).get();
        }        

        var selectedWordBank = [];

        if (selectedVowelKeys != null && typeof selectedVowelKeys != 'undefined' && selectedVowelKeys.length > 0){
            if (isVersusMode){
                selectedWordBank = getWordsByVowelVersus(selectedVowelKeys);
            }
            else{
                selectedWordBank = getWordsByVowel(selectedVowelKeys);
            }            
        }
        else{      
            if(isVersusMode){
                selectedWordBank = wordVersusBank;
            }
            else{
                selectedWordBank = wordBank;
            }            
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
            if (item != null && typeof item != "undefined"){
                if (isVersusMode){
                    let wordEntryElement = $(`
                        <div class="card p-0 show" data-name="${item.vowel}">
                            <div class="word-number">${idx+1}</div>
                            <ul class="list-group list-group-flush">${
                                item?.words?.map(x=>{
                                    return `<li class="list-group-item versus-word" style="border: none; background: unset;">
                                    <h4 class="card-title">/ ${formatPhoneticText(x.phonetic)} /</h4>
                                    <h5 class="card-text">${boldWordEnd(x.word, x.end)}</h5>
                                </li>`;
                                }).join(`<li class="list-group-item versus-card-text"><span>vs.<span></li>`)
                            }
                            </ul>
                        </div>`);
            
                        $("#filterable-cards").append(wordEntryElement);
                }
                else{
                    let wordEntryElement = $(`
                        <div class="card p-0 show" data-name="${item.vowel}">
                            <div class="card-body">
                                <h4 class="card-title">/ ${formatPhoneticText(item.phonetic)} /</h4>
                                <h5 class="card-text">${boldWordEnd(item.word, item.end)}</h5>
                                <div class="word-number">${idx+1}</div>
                            </div>
                        </div>`);
            
                        $("#filterable-cards").append(wordEntryElement);
                } 
            }
        });
    }

    updateInterface(true, false);

    $("#filter-buttons .vowels button").click(e =>{
        $("#filter-buttons button").not(e.target).removeClass("active");
        $(e.target).toggleClass("active");
        updateInterface(true, false);
    });

    // Versus mode
    $("#filter-buttons .vowels-versus button").click(e =>{
        $("#filter-buttons button").not(e.target).removeClass("active");
        $(e.target).toggleClass("active");
        updateInterface(true, true);
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