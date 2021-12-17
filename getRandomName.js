function randomFunc(names) {
    for (let i = 0; i < 2; i++) {
        const random = names[Math.floor(Math.random() * names.length)];
        return random
    }
}
const names = ["Abir", "Arham", "Sadi", "Labi", "Mahdi"]
console.log(randomFunc(names));