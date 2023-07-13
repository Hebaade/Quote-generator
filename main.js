let btn=document.getElementById("btn")
btn.onclick=function(){
    var quotes={
        "Frank Zappa":'"So many books, so little time"',
        "Marcus Tullius Cicero":'"A room without books is like a body without a soul."',
        "Bernard M. Baruch":'"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind"',
        "Mae West":'"You only live once, but if you do it right, once is enough."',
        "Mahatma Gandhi":'"Be the change that you wish to see in the world."',
        "Robert Frost":'"In three words I can sum up everything I have learned about life: it goes on"',
        "Mark Twain":'"If you tell the truth, you don nt have to remember anything."',
        "Maya Angelou":'"I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
        "Oscar Wilde":'"To live is the rarest thing in the world. Most people exist, that is all"',
        "Oscar Wilde":'"Always forgive your enemies; nothing annoys them so much."',
        "Martin Luther King Jr":'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        " Mahatma Gandhi":'"Live as if you were to die tomorrow. Learn as if you were to live forever"',
        "Stephen Chbosky":'"We accept the love we think we deserve."',
        "Friedrich Nietzsche":'"Without music, life would be a mistake."',
    }
    var authors=Object.keys(quotes)
    var author= authors[Math.floor(Math.random()*authors.length)]
    var quote=quotes[author]
    document.getElementById("quote").innerHTML=quote
    document.getElementById("author").innerHTML=author
}