function isAnagram(str1, str2) {
   
    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();
    
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  

    return sortedStr1 === sortedStr2;
  }
  const word1 = 'listen';
  const word2 = 'silent';
  console.log(isAnagram(word1, word2)); // Output: true
  
  const phrase1 = 'Hello world';
  const phrase2 = 'world hello';
  console.log(isAnagram(phrase1, phrase2)); // Output: true
  
  const notAnagram1 = 'hello';
  const notAnagram2 = 'help';
  console.log(isAnagram(notAnagram1, notAnagram2)); // Output: false
  