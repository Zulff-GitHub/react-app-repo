import React from 'react'

interface inTextProps {
    inText: string;
}

interface wordObj {
    word: string;
    occurance: number;
}

/**
 * Countword function
 *
 * Function to generate an array of wordObjs from a string
 *
 * Parameters:
 *   inTextProps
 *
 * Return:
 *   array of wordObj
 */
export function Countword(param: inTextProps) {
    let sText: string = param.inText.toLowerCase().replace(/[^\w\s]/gi, ''); //Clean up text by lowercase and removing special characters except for space
    let aWord = sText.split(" ");
    let aWordObj: wordObj[] = [];

    //Loop each wordObj
    for(var index in aWord)
    { 
        let wordExists: boolean = aWordObj.some(check => check.word === aWord[index]);
        if(!wordExists){
            let newWord:wordObj = {
                word:aWord[index].toString(),
                occurance:1
            };
            if(newWord.word.trim() !== '') aWordObj.push(newWord);
        } else{
            let index2 = aWordObj.findIndex(check => check.word === aWord[index]);
            aWordObj[index2].occurance++;
        }
        
    }

    aWordObj.sort((a, b) => b.occurance - a.occurance || a.word.localeCompare(b.word)); //Sort wordObjs by occurance and word
    return (aWordObj);
}
