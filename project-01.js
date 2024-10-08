// Varaibles

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person:`Mahatma Gandhi`
},{
    quote:`"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `"Albert Einstein"`
},{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person:`"Nelson Mandela"`
},{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts." `,
    person: `"Winston Churchill"`

},{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts." `,
    person:`"Steve Jobs"`
},{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts." `,
    person: `"Martin Luther King Jr."`
},{
    quote:`"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."`,
    person: `"Albert Einstein"`
},{
    quote:`"Ask not what your country can do for you, ask what you can do for your country."`,
    person:`"John F.Kennedy"`
},{
    quote:`"The only thing we have to fear is fear itself." `,
    person:`"Franklin D. Roosevelt"`
},{
    quote:`"Be the change that you wish to see in the world." `,
    person: `"Mahatma Gandhi"`
},
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})