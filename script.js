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
        "eɪ"
    ];

    const vowelVersusMenuItems = [
        ["ɑ:", "ɔ:"],
        ["ɑ:", "oʊ"],
    ]


    vowelMenuItems.forEach((v, idx) =>{
        $("#filter-buttons .vowels").append(`<button class="btn mb-2 mx-1" data-filter="${v}">${v}</button>`);
    });

    vowelVersusMenuItems.forEach((v, idx) =>{
        $("#filter-buttons .vowels-versus").append(`<button class="btn mb-2 mx-1" data-filter="${v[0]} vs. ${v[1]}">${v[0]} <span style="color: #333; font-size: .8rem; font-style: italic; pointer-events: none;">vs.</span> ${v[1]}</button>`);
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
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item versus-word" style="border: none; background: unset;">
                                    <h4 class="card-title">/ ${formatPhoneticText(item?.words[0]?.phonetic)} /</h4>
                                    <h5 class="card-text">${boldWordEnd(item?.words[0]?.word, item?.words[0]?.end)}</h5>
                                </li>
                                <li class="list-group-item versus-vstext" style="border: none; background: unset;"><span>vs.<span></li>
                                <li class="list-group-item versus-word" style="border: none; background: unset;">
                                    <h4 class="card-title">/ ${formatPhoneticText(item?.words[1]?.phonetic)} /</h4>
                                    <h5 class="card-text">${boldWordEnd(item?.words[1]?.word, item?.words[1]?.end)}</h5>
                                </li>
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
                            </div>
                        </div>`);
            
                        $("#filterable-cards").append(wordEntryElement);
                } 
            }
        });
    }

    updateInterface(true, false);

    $("#filter-buttons .vowels button").click(e =>{
        $("#filter-buttons .vowels-versus button").removeClass("active");
        $(e.target).toggleClass("active");
        updateInterface(true, false);
    });

    // Versus mode
    $("#filter-buttons .vowels-versus button").click(e =>{
        $("#filter-buttons .vowels button").removeClass("active");
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