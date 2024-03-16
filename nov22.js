// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (str) => {
    let alphabetArray = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
    console.log(newArray)
    wordArray = str.split(' ')
    console.log(wordArray)
    for (let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i]
        for (let k = 0; k < word.length; k++) {
            let letter = ''
            letter = word[k]
            console.log(letter)
            const isLetter = (alphabetLetter) => alphabetLetter === word[k]
            // const findLetter = (letter) => letter === 
            console.log('Index is: ' + alphabetArray.findIndex(isLetter))
        }
    }

}

high("man i need a taxi up to ubud")