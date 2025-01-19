
     function numberToWords(n) {

        if (typeof n !== 'number' || !Number.isInteger(n)) {
            return "Please enter a whole number.";
        }
        if (n < 0 || n > 1000000) {
            return "Number must be between 0 and 1,000,000.";
        }

 
        const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        const places = ["", "thousand", "million"];


        function convertBelowThousand(num) {
            let words = "";

            if (num >= 100) {
                words += units[Math.floor(num / 100)] + " hundred ";
                num %= 100;
            }

            if (num >= 10 && num < 20) {
                words += teens[num - 10] + " ";
            } else {
                if (num >= 20) {
                    words += tens[Math.floor(num / 10)] + " ";
                    num %= 10;
                }
                if (num > 0) {
                    words += units[num] + " ";
                }
            }

            return words.trim();
        }


        if (n === 0) return "zero";
        if (n === 1000000) return "one million";

        let parts = [];
        let placeIndex = 0;

        while (n > 0) {
            let part = n % 1000;
            if (part > 0) {
                let partWords = convertBelowThousand(part);
                if (placeIndex > 0) {
                    partWords += " " + places[placeIndex];
                }
                parts.unshift(partWords);
            }
            n = Math.floor(n / 1000);
            placeIndex++;
        }

        return parts.join(" ").trim();
    }


    function convertNumber() {
        const input = document.getElementById("numberInput").value;
        const number = parseInt(input, 10);
        const result = numberToWords(number);
        document.getElementById("result").innerText = result;
    }