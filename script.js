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