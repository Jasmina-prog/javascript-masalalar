// 💡 juft sonni qaytaradigan funksiya

// function numbIdentifier(number){

//     let condition = number % 2
//     if( condition == 0){
//         console.log('juft');
//     } else if(typeof number !== Number){
//         console.log('Not a number');
//     } else{
//         console.log('toq');
//     }

  
// }
// numbIdentifier('120')



// -------------------------------------------------------

// 💡 teskari so'z

// function reverseWord (words) {
//     // let stringToArr = words.split('');
//     // let arrToString = stringToArr.join(' ') 
//     // let newArr = [];
//     // newArr.unshift(arrToString);
//     // console.log(newArr);

//     const arr = Array.from(words, char => [char]);
//     console.log(arr);
//      let newArr = [];
//     newArr.unshift(arr);
//     console.log(newArr);

// }

// reverseWord('jas')



// -------------------------------------------------------



// function reverseWord(word){
//     let toArr = word.split('')
//     let reverse = toArr.reverse('');
//     console.log(reverse.join(''));
// }
// reverseWord('jas')



// -------------------------------------------------------


//  💡 arr ichida eng katta raqam topadi

// function findLargeNumb (numbers){
//     let maxNumberSeen = numbers[0]
//     numbers.forEach(element => {
//         if(maxNumberSeen < element){
//             maxNumberSeen = element
//         }
//     });
//     console.log(maxNumberSeen);
// }

// findLargeNumb([2, 4, 10, 34, 1, 50, 20])



// -------------------------------------------------------



// 💡 musbat son qaytaradi

// function positiveNumb (numbers){
//     let musbat = []
//     numbers.forEach(element => {
//         if(element > 0){
//             musbat.push(element)
//         }
//     });
//     console.log(musbat);
// }

// positiveNumb([2, -12, 8, -4, 7, 3, -10])



// // -------------------------------------------------------



//  💡 array el yigindisini hisoblang

// function findTotal (numbers){
//     let init = 0 
//     numbers.forEach(element => {
//         init += element
//     });

//     console.log(init);
// }

// findTotal([10, 5, 8, 7, 6, 4])

// function findTotal (numbers){
//     let init = 0 
//     let total = numbers.reduce((accumulator, currentValue) => accumulator += currentValue, init);
//     console.log(total);
// }

// findTotal([10, 5, 8, 7, 6, 4])



// -------------------------------------------------------


//  arraydan unique el qaytarsin

// function unique(numbers){
//     let filtArr = []
//     numbers.forEach(element => {
//         if(!filtArr.includes(element)){
//             filtArr.push(element)
//         }
//     });
//     console.log(filtArr);
// }
// unique([2, 8, 2, 10, 25, 2, 1, 10, 8])



// -------------------------------------------------------



// so'zdagi unlilar sonini topadigan f-ya

// function findUnli(word){
//     let unlilar = ['a', 'o', 'u', 'i', 'e']
//     let vowels = []
//     unlilar.forEach(element => {
//         if(word.includes(element)){
//             vowels.push(element)
//         }
//     });
//     let numbOfVowels = vowels.length
//     console.log(vowels);
//     console.log(numbOfVowels);
// }

// findUnli('jasmina')


// function findUnli(word){
//     let unlilar = ['a', 'o', 'u', 'i', 'e']
//     let vowels = []
//     let splitted = word.split('');
//     splitted.forEach(element => {
//         if(unlilar.includes(element)){
//             vowels.push(element)
//         }
//     });
//     console.log(vowels);
//     let numbOfVowels = vowels.length
//     console.log( 'unlilar soni:', numbOfVowels);
    
// }

// findUnli('jasmina islomova')


// -------------------------------------------------------

// palindrome so'zni tekshiring

// function palindrome(word){

//     console.log(word);
//     let rev = ''
//     for (let i = 0; i < word.length ; i++) {
//         const element = word[i];
//         console.log(element);
//         rev = rev + word[word.length - 1 - i]
//     }
//     console.log(word.length - 1 );
//     console.log(rev);
// }
// palindrome('jasi')



// -------------------------------------------------------


// arraydagi barcha elementlarning kvadratini hisobla va yangi arr return

// function kvadrat(array){
//     let newar = array.map((element) => element **2);
    
//     console.log(array);
//     console.log(newar);
// }

// kvadrat([2, 10, 7, 3, 46, 5])



// -------------------------------------------------------


// stringdagi har bir so'zni birinchi harfini katta qilsin

// function uppercaseFunc() {
//     let fewWords = "sun moon star"
//     let splitted = fewWords.split(" ")
//     let newArrayOfWords = []
//     splitted.forEach((el)=> {
//         let mutated = el.slice(1)
//         let newlyChanged = el.charAt(0).toUpperCase() + mutated
//         newArrayOfWords.push(newlyChanged)
//     })
//     console.log(newArrayOfWords.join(' '));

// }

// uppercaseFunc()




// -------------------------------------------------------




// check reverse 


// function checkReverse(){
//     let word = 'konfet'
//     let reversed = word.split('').reverse().join('')

//     if(word == reversed){
//         console.log('Palindrome✅');
//     } else{
//         console.log('Not Palindrome❌');
//     }
// }

// checkReverse()





// -------------------------------------------------------

// stringni camel case ga o'zgartir

// function camelCase(){
//     let word = 'camelcase'
//     let changedLetter = word.charAt(5).toUpperCase()
//     let beforeLetter = word.slice(0, 5)
//     let afterLetter = word.slice(6)
//     let finalWord = beforeLetter + changedLetter + afterLetter
//     console.log(finalWord);
// }

// camelCase()

// function camelCase(params) {
//     const words = "sun moon star" 
//     console.log(words);
//     let changed1 = words.split(" ")
//     let overall = []
//     changed1.forEach((el)=> {
//         let changed2 = el.slice(1)
//          el = el.charAt(0).toUpperCase() + changed2
//         overall.push(el)
//     })
//     console.log(overall.join(''));
// }

// camelCase()




// -------------------------------------------------------

// berilgan stringdagi raqamlar sonini aniqlang

// function defineNumber(string){
//     console.log(string);
//     let changeToArr = string.split("")
//     let mixed = [];
//     changeToArr.forEach(element => {
//         let numberConverted = Number(element)

//         if(Boolean(numberConverted) === true){
//             mixed.push(numberConverted)
//         }
//     });
//     console.log("stringda " + mixed.length +"ta raqam bor");
// }
// defineNumber("ja8vasc2r15i7pt36")




// -------------------------------------------------------


// 2ta son, birinchisi kichik, oraliqdagi 5 raqamidan boshqa hammasini nechtaligini topish

// function hardMasala(initialValue, lastValue) {
//     let counter = 0
//     for (let i = initialValue; i < lastValue; i++) {
//         let number = String(i)
//         console.log(number);
//         if(!number.includes(5)){
//             counter += 1
//         }
//     }

//     console.log("the result is " + counter);
    
// }

// hardMasala(2, 17)