//1.字串反轉

function reverseString(str) {
    let result = "";
    if (str !== "") {
        result = reverseString(str.substr(1)) + str[0];
    }

    return result;
}

console.log(reverseString("Hello")); // 預期輸出: "olleH"

//2.陣列過濾

function filterNumbersGreaterThanFive(numbers) {

    let result = numbers.filter((num) => num > 5);

    return result;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

//3.重構

function formatName(firstName, lastName) {
    let formattedName = '';

    formattedName = `${firstName} ${lastName}`;

    return formattedName;
}
//若只是要判斷姓和名是否存在，且存在的話放進formattedName中，
//用樣板字面值即可達到同樣功能









