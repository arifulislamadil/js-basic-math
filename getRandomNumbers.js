const selected = [];
for (let i = 0; i < 5; i++) {
    var random = Math.random() * 10;
    var round = Math.round(random);
    if (selected.indexOf(round) == -1) {
        selected.push(round)
    } else {
        console.log((selected, round))
    }
}
console.log(selected)