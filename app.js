var quoteArray = [
    {
        quote: 'Not how long, but how well you have lived is the main thing.',
        name: 'Seneca'
    },
    {
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        name: 'Eleanor Roosevelt'
    },
    {
        quote: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
        name: 'Marilyn Monroe'
    },
    {
        quote: 'Be yourself; everyone else is already taken',
        name: 'Oscar Wilde'
    },
    {
        quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        name: 'Albert Einshtein'
    },
    {
        quote: 'So many books, so little time.',
        name: 'Frank Zappa'
    },
    {
        quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
        name: 'Bernard M. Baruch'   
    },
    {
        quote: 'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing lik there\'s nobody listening, And live like it\'s heaven on earth.',
        name: 'William W. Purkey'
    },
    {
        quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        name: 'Dr. Seuss'
    },
    {
        quote: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
        name: 'J.K. Rowling'
    },
    {
        quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
        name: 'C.S. Lewis'
    },
    {
        quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
        name: 'Thomas A. Edison'
    },
    {
        quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        name: 'Albert Einstein'
    },
    {
        quote: 'Never let the fear of striking out keep you from playing the game.',
        name: 'Babe Ruth'
    },
    {
        quote: 'If you tell the truth, you don\'t have to remember anything.',
        name: 'Mark Twain'
    },
    {
        quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
        name: 'Maya Angelou'
    },
    {
        quote: 'A friend is someone who knows all about you and still loves you.',
        name: 'Elbert Hubbard'
    },
    {
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
        name: 'Oscar Wilde'
    },
    {
        quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        name: 'Mahatma Gandhi'
    },
    {
        quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that',
        name: 'Martin Luther King Jr.'
    },
    {
        quote: 'Insanity is doing the same thing, over and over again, but expecting different results.',
        name: 'Narcotics Anonymous'
    },
    {
        quote: 'The unexamined life is not worth living. ',
        name: 'Socrates'
    },
    {
        quote: 'Turn your wounds into wisdom.',
        name: 'Oprah Winfrey'
    },
    {
        quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain.',
        name: 'Dolly Parton'
    },
    {
        quote: 'Do all the good you can, for all the people you can, in all the ways you can, as long as you can.',
        name: 'Hillary Clinton'
    },
    {
        quote: 'Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.',
        name: 'Kevin Hart'
    },
    {
        quote: 'Everything negative – pressure, challenges – is all an opportunity for me to rise.',
        name: 'Kobe Bryant'
    },
    {
        quote: 'I like criticism. It makes you strong.',
        name: 'LeBron James'
    },
    {
        quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
        name: 'Albert Einstein'
    },
    {
        quote: 'Keep smiling, because life is a beautiful thing and there’s so much to smile about. ',
        name: 'Marilyn Monroe'
    },

];

var btn = document.querySelector('.btn');
var quote = document.querySelector('.quote');
var author = document.querySelector('.author');

btn.addEventListener('click', generate)
function generate(){
    var randomNum = Math.floor(Math.random() * quoteArray.length);

    quote.innerText = quoteArray[randomNum].quote;
    author.innerText = quoteArray[randomNum].name;
}

// copy function
function copy(){
    var copyText = document.getElementById(".quote");
    copyText = String(quote.textContent);
    navigator.clipboard.writeText(copyText);
    alert("copy this text")
}

