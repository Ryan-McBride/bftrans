var bf = function(code){
  var tape = [];
  var curr = 0;
  var ret = 0;
  code = code.split('');
  code.forEach(function(val, ind, arr){
    switch(val){
      case '.': // Prints ASCII value at pointer
        console.log(String.fromCharCode(tape[curr]));
        break;
      case ',': // Reads single character to pointer
        break;
      case '+': // increment pointer value
        if(tape[curr] === undefined){
          tape[curr] = 1;
        } else {
          tape[curr]++;
        }
        break; 
      case '-': // decrement pointer value
        if(tape[curr] > 0){
          tape[curr]--;
        }
        break;
      case '[': // if value at current pointer is 0, skip to ], otherwise execute instruction
        ret = ind;
        if(tape[curr] === 0){
          throw loopExit;
        }
        break; 
      case ']': // if value at current pointer is 0, move to next instruction, otherwise go back to [
        break;
      case '>': // move data pointer to the left
        curr++;
        break; 
      case '<': // move data pointer to the right
        if(curr > 0){
          curr--;
        }
        break;
    }
  });
};

bf('++++++++++++++++++++++++++++++++++.>.<++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.');
