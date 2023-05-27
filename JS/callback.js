function SayMyName (name){
    console.log(name)
}
SayMyName(
    () => {
        console.log('Leticia')
    }
)