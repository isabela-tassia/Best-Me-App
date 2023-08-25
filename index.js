//process.stdout.write("alguma coisa \n") 

//stdout significa standard; o console log usa esse process por debaixo dos panos; \n significa new line, o console log coloca essa new line ja

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0) => {
    return process.stdout.write("\n\n" + questions[index] +
    " > ")
}

ask()

const answers = []
process.stdin.on('data', data => {
   answers.push(data.toString().trim())
   if(answers.length < questions.length) {
    ask(answers.length)
   } else {
    console.log(answers)
    process.exit()

   }
    }) 


process.on('exit', () => {
    console.log(`
    Legal Isa!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te deixou aborrecido e você poderia foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje!!!

    Volte amanhã para novas reflexões
    
    `)
})


//process.stdin.on('data', data => {
    //process.stdout.write( data.toString().trim() + "\n")
    
//    process.exit()
//}) 
//o processo fica interminavel sem o exit, mas pra finalizar clico ctrl+ c ou adiciono o process.exit()

