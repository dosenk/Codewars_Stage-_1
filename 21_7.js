String.prototype.isLetter = function() {
  if (this.length === 1 && this.match(/[a-z]/i) != null)  {
     return true;
    } 
     return false;
  }

"".isLetter();
"a".isLetter();
"X".isLetter();
"7".isLetter();
"*".isLetter();
"ab".isLetter();
"a\n".isLetter();