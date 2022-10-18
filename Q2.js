const string1 = "foo(bar)";
const string2 = "(bar)";
const string3 = "foo(bar)blim";
const string4 = "foo(foo(bar))blim";

const reverse = (A, l, h) => {
  if (l < h) {
    let ch = A[l];
    A[l] = A[h];
    A[h] = ch;
    reverse(A, l + 1, h - 1);
  }
};

const reverseParentheses = (str) => {
  const len = str.length;
  let stack = [];
  for (let i = 0; i < len; i++) {
    // Push the index of the current
    // opening bracket
    if (str[i] == "(") {
      stack.push(i);
    }

    // Reverse the substring starting
    // after the last encountered opening
    // bracket till the current character
    else if (str[i] == ")") {
      let A = [...str];
      reverse(A, stack[stack.length - 1] + 1, i);
      str = [...A];
      stack.pop();
    }
  }

  // To store the modified string
  let res = "";
  for (let i = 0; i < len; i++) {
    if (str[i] != ")" && str[i] != "(") {
      res += str[i];
    }
  }
  return res;
};

console.log(reverseParentheses(string1));
console.log(reverseParentheses(string2));
console.log(reverseParentheses(string3));
console.log(reverseParentheses(string4));
