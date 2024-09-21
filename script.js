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
        $(".vowel-menu").append(`<span class="vowel">${v}</span>`);
    });
    
    const wordBank = [
        {vowelNbr: 'ɑ:', word: "not", phonetic: "nɑ:t", end: "t"},
        {vowelNbr: 'ɑ:', word: "hot", phonetic: "hɑ:t", end: "t"},
        {vowelNbr: 'ɑ:', word: "lot", phonetic: "lɑ:t", end: "t"},
        {vowelNbr: 'ɑ:', word: "dot", phonetic: "dɑ:t", end: "t"},
        {vowelNbr: 'ɑ:', word: "lock", phonetic: "lɑ:k", end: "ck"},
        {vowelNbr: 'ɑ:', word: "talk", phonetic: "tɑ:k", end: "lk"},
        {vowelNbr: 'ɑ:', word: "taught", phonetic: "tɑ:t", end: "ght"},
        {vowelNbr: 'ɑ:', word: "tall", phonetic: "tɑ:l", end: "ll"},
        {vowelNbr: 'ɑ:', word: "cause", phonetic: "kɑ:z", end: "se"},
        {vowelNbr: 'ɑ:', word: "fought", phonetic: "fɑ:t", end: "ght"},
        {vowelNbr: 'ɑ:', word: "bought", phonetic: "bɑ:t", end: "ght"},
        {vowelNbr: 'ɑ:', word: "what", phonetic: "wɑ:t", end: "t"},
        {vowelNbr: 'ɑ:', word: "wall", phonetic: "wɑ:l", end: "ll"},
        {vowelNbr: 'ɑ:', word: "car", phonetic: "kɑ:r", end: "r"},
        {vowelNbr: 'ɑ:', word: "guard", phonetic: "gɑ:rd", end: "rd"},
        {vowelNbr: 'ɑ:', word: "fault", phonetic: "fɑ:lt", end: "lt"},
        {vowelNbr: 'ɑ:', word: "card", phonetic: "cɑ:rd", end: "rd"},
        {vowelNbr: 'ɑ:', word: "carve", phonetic: "kɑ:rv", end: "rve"},
        {vowelNbr: 'ɑ:', word: "dark", phonetic: "dɑ:rk", end: "rk"},
        {vowelNbr: 'ɑ:', word: "dart", phonetic: "dɑ:rt", end: "rt"},
        {vowelNbr: 'ɑ:', word: "part", phonetic: "pɑ:rt", end: "rt"},
        {vowelNbr: 'ɑ:', word: "park", phonetic: "pɑ:rk", end: "rk"},
        {vowelNbr: 'ɑ:', word: "bark", phonetic: "bɑ:rk", end: "rk"},
        {vowelNbr: 'ɑ:', word: "heart", phonetic: "hɑ:rt", end: "rt"},
        {vowelNbr: 'ɑ:', word: "hard", phonetic: "hɑ:rd", end: "rd"},
        {vowelNbr: 'ɑ:', word: "harm", phonetic: "hɑ:rm", end: "rm"},
        {vowelNbr: 'ɑ:', word: "mart", phonetic: "mɑ:rt", end: "rt"},
        {vowelNbr: 'ɑ:', word: "farm", phonetic: "fɑ:rm", end: "rm"},
        {vowelNbr: 'ɑ:', word: "stop", phonetic: "stɑ:p", end: "p"},
        {vowelNbr: 'ɑ:', word: "star", phonetic: "stɑ:r", end: "r"},
        {vowelNbr: 'ɑ:', word: "start", phonetic: "stɑ:rt", end: "rt"},
        {vowelNbr: 'ɑ:', word: "block", phonetic: "blɑ:k", end: "ck"},
        {vowelNbr: 'ɑ:', word: "brought", phonetic: "brɑ:t", end: "ght"},
        {vowelNbr: 'ɑ:', word: "drop", phonetic: "drɑ:p", end: "p"},
        {vowelNbr: 'ɑ:', word: "small", phonetic: "smɑ:l", end: "ll"},
        {vowelNbr: 'ɑ:', word: "stock", phonetic: "stɑ:k", end: "ck"},
        {vowelNbr: 'ɑ:', word: "spot", phonetic: "spɑ:t", end: "t"},
        {vowelNbr: 'ɑ:', word: "clock", phonetic: "klɑ:k", end: "ck"},
        {vowelNbr: 'ɑ:', word: "floss", phonetic: "flɑ:s", end: "ss"},
        {vowelNbr: 'ɑ:', word: "blonde", phonetic: "blɑ:nd", end: "nde"},
        {vowelNbr: 'ɑ:', word: "strong", phonetic: "strɑ:ŋ", end: "ng"},

        {vowelNbr: 'e', word: "air", phonetic: "er", end: "r"},
        {vowelNbr: 'e', word: "heir", phonetic: "er", end: "r"},
        {vowelNbr: 'e', word: "hair", phonetic: "her", end: "r"},
        {vowelNbr: 'e', word: "fair", phonetic: "fer", end: "r"},
        {vowelNbr: 'e', word: "pair", phonetic: "per", end: "r"},
        {vowelNbr: 'e', word: "bear", phonetic: "ber", end: "r"},
        {vowelNbr: 'e', word: "care", phonetic: "ker", end: "re"},
        {vowelNbr: 'e', word: "where", phonetic: "wer", end: "re"},
        {vowelNbr: 'e', word: "share", phonetic: "ʃer", end: "re"},
        {vowelNbr: 'e', word: "let", phonetic: "let", end: "t"},
        {vowelNbr: 'e', word: "less", phonetic: "les", end: "s"},
        {vowelNbr: 'e', word: "dead", phonetic: "ded", end: "d"},
        {vowelNbr: 'e', word: "death", phonetic: "deθ", end: "th"},
        {vowelNbr: 'e', word: "deaf", phonetic: "def", end: "f"},
        {vowelNbr: 'e', word: "get", phonetic: "get", end: "t"},
        {vowelNbr: 'e', word: "guess", phonetic: "ges", end: "ss"},
        {vowelNbr: 'e', word: "pen", phonetic: "pen", end: "n"},
        {vowelNbr: 'e', word: "bell", phonetic: "bel", end: "ll"},
        {vowelNbr: 'e', word: "sell", phonetic: "sel", end: "ll"},
        {vowelNbr: 'e', word: "shell", phonetic: "ʃel", end: "ll"},
        {vowelNbr: 'e', word: "debt", phonetic: "det", end: "bt"},
        {vowelNbr: 'e', word: "lend", phonetic: "lend", end: "nd"},
        {vowelNbr: 'e', word: "lent", phonetic: "lent", end: "nt"},
        {vowelNbr: 'e', word: "send", phonetic: "send", end: "nd"},
        {vowelNbr: 'e', word: "sense", phonetic: "sens", end: "nse"},
        {vowelNbr: 'e', word: "guest", phonetic: "gest", end: "st"},
        {vowelNbr: 'e', word: "self", phonetic: "self", end: "lf"},
        {vowelNbr: 'e', word: "shelf", phonetic: "ʃelf", end: "lf"},
        {vowelNbr: 'e', word: "held", phonetic: "held", end: "ld"},
        {vowelNbr: 'e', word: "best", phonetic: "best", end: "st"},
        {vowelNbr: 'e', word: "test", phonetic: "test", end: "st"},
        {vowelNbr: 'e', word: "desk", phonetic: "desk", end: "sk"},
        {vowelNbr: 'e', word: "dealt", phonetic: "delt", end: "lt"},
        {vowelNbr: 'e', word: "dent", phonetic: "dent", end: "nt"},
        {vowelNbr: 'e', word: "bench", phonetic: "bentj", end: "nch"},
        {vowelNbr: 'e', word: "shelves", phonetic: "ʃelvz", end: "lves"},
        {vowelNbr: 'e', word: "stair", phonetic: "ster", end: "r"},
        {vowelNbr: 'e', word: "chair", phonetic: "tjer", end: "r"},
        {vowelNbr: 'e', word: "prayer", phonetic: "prer", end: "r"}        
    ]; 

    function getWordsByVowelNbr(vowelNumbers) {
        return wordBank.filter(item => vowelNumbers.includes(item.vowelNbr));
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
        document.getElementsByClassName("word-container")[0].innerHTML = "";
        $(".word-container").removeClass("all");

        let selectedVowels = $(".vowel-menu .vowel.active").map(function() {
            return $(this).text();
        }).get();

        var selectedWordBank = [];
        if (selectedVowels != null && typeof selectedVowels != 'undefined' && selectedVowels.length > 0){
            selectedWordBank = getWordsByVowelNbr(selectedVowels);
        }
        else{
            showAllWords();
            return;
        }

        if (selectedWordBank == null || typeof selectedWordBank == 'undefined' || selectedWordBank.length == 0){
            return;
        }

        let item = pickNextWord(isNext, selectedWordBank, true);
        while (oldWordItem?.word == item?.word){
            item = pickNextWord(isNext, selectedWordBank, true);
        }

        oldWordItem = item;

        const wordEntryElement = document.createElement(`div`); //document.createElement(`<div class="word-entry"></div>`);
        wordEntryElement.classList.add("word-entry");
            
        wordEntryElement.innerHTML = `
            <div class="word no_selection">
                <h3>${boldWordEnd(item)}</h3>
            </div>
            <div class="details no_selection">
                <p class="phonetic"></p>
            </div>`;

        wordEntryElement.getElementsByClassName('phonetic')[0].innerHTML = `/ ${formatPhoneticText(item.phonetic)}/`;

        document.getElementsByClassName("word-container")[0].appendChild(wordEntryElement);
    }

    function showAllWords(){
        document.getElementsByClassName("word-container")[0].innerHTML = "";
        $(".word-container").addClass("all");
        
        wordBank.forEach((item, idx)=>{
            const wordEntryElement = document.createElement(`div`); //document.createElement(`<div class="word-entry"></div>`);
            wordEntryElement.classList.add("word-entry");
            wordEntryElement.classList.add("all");
                
            wordEntryElement.innerHTML = `
                <div class="word no_selection">
                    <h3>${boldWordEnd(item)}</h3>
                </div>
                <div class="details no_selection">
                    <p class="phonetic"></p>
                </div>`;

            wordEntryElement.getElementsByClassName('phonetic')[0].innerHTML = `/ ${formatPhoneticText(item.phonetic)}/`;

            document.getElementsByClassName("word-container")[0].appendChild(wordEntryElement);
        });
    }

    updateInterface(true);

    $(".vowel-menu .vowel").click(e =>{
        $(e.target).toggleClass("active");
        updateInterface(true);
    });

    $(document).on('click', function(e) {
        var screenWidth = $(window).width();
        var clickPosition = e.clientX; // Get the horizontal position of the click
        
        if (clickPosition < screenWidth / 2) {
            // Click was on the left half of the screen
            updateInterface(false);
        } else {
            // Click was on the right half of the screen
            updateInterface(true);
        }
    });
});