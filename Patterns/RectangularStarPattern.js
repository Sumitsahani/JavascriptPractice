function drawRectangularStarPattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let pattern = '';
        for (let j = 0; j < columns; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

drawRectangularStarPattern(5, 7);
