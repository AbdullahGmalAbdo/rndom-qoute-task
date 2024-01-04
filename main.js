const generateQuote = function() {
  const quotes = [
  {
      quote: " “Be yourself; everyone else is already taken.” ",
      author: "― Oscar Wilde"
  },
  {
      quote: "“So many books, so little time.”",
      author: "― Frank Zappa"
  },
  {
      quote: "“A room without books is like a body without a soul.”",
      author: "― Marcus Tullius Cicero"
  },
  {
      quote: "“You only live once, but if you do it right, once is enough.”",
      author: "― Mae West"
  },
  {
      quote: "“Be the change that you wish to see in the world.”",
      author: "― Mahatma Gandhi"
  },
  {
      quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
      author: "― Robert Frost,"
  },
  {
      quote: "Have a biscuit, Potter.",
      author: "Minerva McGonagall"
  },
  {
      quote: "“If you tell the truth, you don't have to remember anything.”      ",
      author: "― Mark Twain"
  },
  {
      quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
      author: "Dobby"
  }
];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
  generateQuote();
  document.getElementById("generate").addEventListener('click', generateQuote);
}