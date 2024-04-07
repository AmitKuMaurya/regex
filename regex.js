1.// Match Literal Strings.

const sentence = "The dog chased the cat";

// this is case sensitive it is finding the substring which is in small case.
// const regex = /the/ 

// let result = regex.test(sentence);
// console.log('result: ', result);



2.// Match a literal string with different possibilities.
// using { or } operater in regex;

let petString = "James has a pet cat.";
// let regex = /dog|cat|bird|fish/

// let result = regex.test(petString);
// console.log("result", result);


3. //Ignore case while matching.

const myStr = "freeCodeCamp";

// const regex = /freecodecamp/i

// const result = regex.test(myStr);
// console.log("result",result);


4. // Extract Matches.

// let extractStr = "Extract the word 'coding' from this string.";

// let regex = /coding/
// let result = extractStr.match(regex);

// console.log("result", result);

5. //find more than the first match.
// using g flag we can get all occurance of matched sub-string.

const twinkleStr = 'twinkle Twinkle little, star';
// const regex = /twinkle/ig
// const result = twinkleStr.match(regex);
// console.log("result :",result);

6. //match anything with -> {wildcard period}.
// . --> is the notation which we use as wildcard.

let humStr = "I'll hum a song";
let hugStr = "Bear Hug";

// let huRegex = /hu./i;

// const res1 = humStr.match(huRegex);
// console.log('res1: ', res1);

// const res2 = hugStr.match(huRegex);
// console.log('res2: ', res2);

const unStr = "Ram run for fun to done some punk";

// it will match all the words ending with {un} words.
// const regex = /.un/ig;

// console.log(regex.test(unStr));
// const result = unStr.match(regex);
// console.log("result", result);

7. //match single character with multiple possibilities;

// let bhRegex = /b[aeiou]/g;

let quoteSample = "Beware of bugs in the above code; I have only proved it correct";
// let vowelRegex = /[aeiou]/g

// const result = quoteSample.match(bhRegex);
// const result = quoteSample.match(vowelRegex);

// console.log('result: ', result);

8. // Match letter of the Alphabet.

const quoteSample1 = "The quick brown fox jumps over the lazy dog";
// let alphabetRegex = /[a-z]/ig;

// let regex = alphabetRegex;

// const result = quoteSample1.match(regex);
// console.log("result",result);

10. // Match numbers and letters of the aLphabets.

const quoteSample2 = "Blueberry 3.141592653s are delicious.";

// let regex = /[2-6b-e]/ig;
// let result = quoteSample2.match(regex);
// console.log("result", result);

11. // Match single characters not specified !
// negative character sets.

// const quoteSample3 = " 3 blind mice. ";
// const regex = /[^0-9aeiou]/ig;

// const result = quoteSample3.match(regex);
// console.log("result",result);

12. // Match Characters that occurs one or more times.

const difficultSpelling = "Mississippsi";

// const regex = /s+/ig;
// const result = difficultSpelling.match(regex);

// console.log("result :", result)

13. // Match character that occur zero or more times.

const chewieQuote = "Aaaaaaaaaaaarrrrgh!";
// * --> will match al the same forwarded word and return
// let regex = /Aa*/ig;

// const result = chewieQuote.match(regex);
// console.log("result :", result);

14. // find character with lazy matching.

const string = "titanic";
//    greedy match 
// what this does is it will start with t in string and go with any letter from a to z till it will end with i and then it's gonna return it as a result.

// let regex = /t[a-z]*i/;
// console.log("result",string.match(regex));

// if we add ? after * then then it will be a lazy load 
// which means it as soon as it will find first i it return the string
// let regex = /t[a-z]*?i/;
// console.log("result",string.match(regex));

let text = "<h1>Winter is coming</h1>";
// use ? after * for lazy;
// remove ? after * for greedy;
// let regex = /<.*>/;
// console.log("result :",text.match(regex));

15. //find one or more criminal in a hunt.

let croud = "P1P2P3P4P5P6CCCP7P8P9";

// let regex = /[^0-9a-bd-z]/ig;
// another way

// let regex = /c+/i;

// console.log("result",croud.match(regex));



16. // Match Beginning String Patterns.

let rickeyAndCal = "Cal and Ricky both are racing";

// this will return true only of Cal is in the beginnig does not matter otherwise where it is.
// this should be in the beginning.

// let regex = /^Cal/;
// let result = rickeyAndCal.match(regex);
// console.log("result ",result);

17. // Match ending string patterns.

let caboose = "The last car on a train is the caboose";
// let regex = /caboose$/;
// console.log("result", regex.test(caboose));

18. // Match all Letters and Numbers.

let quoteSample3 = "The five boxing wizards jump quickly.";
// let regex = /\w/;
// let result = quoteSample3.match(regex).length;
// console.log("result :",result);

19. // Match everything but not letter and number.

let quoteSample5 = "The five boxing wizards jump quickly.";
// let regex = /\W/g;
// // let result = quoteSample3.match(regex).length;
// let result = quoteSample3.match(regex);
// console.log("result :",result);

20. // Match all numbers.

const numStr = "Your Sandwich will be $5.00";
// const regex = /\d/g;
// console.log("result :", numStr.match(regex).length);
// console.log("result :", numStr.match(regex));

21. // Match all non-number 

// const numStr = "Your Sandwich will be $5.00";
// const regex = /\D/g;
// console.log("result :", numStr.match(regex).length);
// console.log("result :", numStr.match(regex));


22. // restrict possible usernames.

/**
 * if there are numbers, they must be in the end.
 * letter can we lowercase and uppercase
 * at least three character long. Two-letter names can't have numbers.
 */
const userCheck = "amit06";
// const regex = /^[A-Za-z]{3,}\d*$/;
// let result = userCheck.match(regex);
// console.log('result: ', result);

23.// Match whitespaces.

// we can match it using \s character.

// const regex = /\s/g;

24. //Match non-whitespaces characters.
// we can match it using \S character.

// const regex = /\S/g;

25. //Specify upper and lower number of matches. 

let ohStr = "Ohhh no";
// let regex = /Oh{2,6} no/i;
// console.log("result ;",ohStr.match(regex));

26. // specify only the lower number of matches.
let hzStr = "Hazzzzah";
// let regex = /z{4,}/;
// console.log("result :", regex.test(hzStr));
// console.log("result :", hzStr.match(regex));

27. //specify exact number of matches.
let timStr = "Timmmmber";
// let regex = /Tim{4,}ber/
// console.log("result :", regex.test(timStr));
// console.log("result :", timStr.match(regex));

28. // Check for all or none.

const favStr = "Favourite" && "Favorite";

// const regex = /favou?rite/i;

// console.log("result :", regex.test(favStr));

29. // Positive and Negative lookhead.

let quit = 'qu';
let noquit = 'qt';
//  to check wether we have u after q in string.
// let quRegex = /q(?=u)/;
//  to check taht, we should not have u after q in string.
// let noRegex = /q(?!u)/;

// console.log("result :", quit.match(quRegex));
// console.log("result :", noquit.match(noRegex));

// but the practical use of lookahead is to check two or more patterns in a string.
// we are going to check two or more consecutive string and length of at least 5 characters.

let sampleWord = 'ass12';
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/;

// console.log("result :", pwRegex.test(sampleWord));


30. // Pause Pattern Using Capture Groups.

const repeatStr = "regex regex";

// let regex = /(\w+)\s\1/;

// console.log("result :",repeatStr.match(regex));
// console.log("result :",regex.test(repeatStr));

const repeatNum = "42 42 42 42";

// const regex = /^(\d+)\s\1\s\1$/;

// console.log("result :",repeatNum.match(regex));
// console.log("result :",regex.test(repeatNum));

31. // use capture group to search and replace;

let replaceStr = 'The sky is silver';
console.log('replaceStr: ', replaceStr);

const replaceregex = /silver/;

console.log("result :",replaceStr.replace(replaceregex,"blue"));

const codecampStr = 'Code Camp';
const regecx = /(\w+)\s(\w+)/
console.log("result :", codecampStr.replace(regecx,"$2 $1"));

 





































