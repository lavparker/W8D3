/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;


    // darkPiece = new Piece("black"); 
    // lightPiece = new Piece("white");
};

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {

    if (this.color === "black"){
        this.color = "white";
    }else {
        this.color = "black";
    }
};

   
//     if (this.color = "black"){
//         return "white"; 
//     } else {
//         return "black";
//     }
// };

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    return this.oppColor()
    // darkPiece.flip();
    // expect(darkPiece.color).toEqual("white");
    // lightPiece.flip();
    // expect(lightPiece.color).toEqual("black");


};

/**
 * Returns a string representation of the piece
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === "white"){
        return "W";
    } else {
        return "B";
    }
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE