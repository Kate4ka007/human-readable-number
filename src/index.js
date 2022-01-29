module.exports = function toReadable (number) {

    unit = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    ten = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    let string = number.toString();
    
    if (parseInt(string) === 0) {
      return 'zero';
    }     
  
    stringLen = string.length;
    pieces = [];
    while (stringLen > 0) {
        pieces.push( string.slice(( stringLen = Math.max( 0, stringLen - 3))));
    }    
   
    piecesLen = pieces.length;  
    words = [];

    for (let i = 0; i < piecesLen; i++) {
        
        piece = parseInt( pieces[i]);
        
        if (piece) {             
            ints = pieces[i].split( '' ).reverse().map( parseFloat );        
        
            if (ints[1] === 1) {
                ints[0] += 10;
            }
                   
            if (( word = unit[ ints[0]])) {
                words.push( word );
            }            
      
            if (( word = ten[ ints[1]])) {
                words.push( word );
            }            
      
            if (( word = unit[ ints[2]])) {
                words.push( word + ' hundred' );
            }
        }
     }
    return words.reverse().join( ' ' );
 }


