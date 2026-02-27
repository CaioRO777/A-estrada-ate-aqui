let pessoas = [
    ["João", 30],
    ["Maria", 45],
    ["Pedro", 20],
    ["Beatriz", 55],
]

for (let i in pessoas){
    if (i < pessoas.length){
        console.log (pessoas[i][0] + " tem " + pessoas[i][1] + " anos")
    }
}