//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "Belief in oneself and knowing who you are, I mean, that's the foundation for everything great.";
authors[0] = "Jay-Z";
quotes[1] = "You have to think anyway, so why not think big";
authors[1] = "Donald Trump";
quotes[2] = "Silence is a source of great strength.";
authors[2] = "Lao Tzu";
quotes[3] = "Live as if you were to die tomorrow. Learn as if you were to live forever.";
authors[3] = "Mahatma Gandhi";
quotes[4] = "You never need an argument against the use of vilence, you need an argument for it.";
authors[4] = "Noam Chomsky";
quotes[5] = "My one regret in life is that I am not someone else.";
authors[5] = "Woody Allen";
quotes[6] = "I myself eschew all stimulants. I also practically abstain from meat";
authors[6] = "Nikola Tesla";
quotes[7] = "I came, I saw, I conquered.";
authors[7] = "Julius Caesar";
quotes[8] = "History proves that the white man is a devil.";
authors[8] = "Malcolm X";
quotes[9] = "Where there is no struggle, there is no strength.";
authors[9] = "Oprah Winfrey";
quotes[10] = "Life is hard. After all, it kills you.";
authors[10] = "Katharine Hepburn";

window.onload = function start(){
	index = Math.floor(Math.random() * quotes.length);
	var quoteNew = quotes[index];
	var authorNew = authors[index];
	el1 = document.getElementById('quote');
	el1.textContent = quoteNew;
	el2 = document.getElementById('author');
	el2.textContent = '~~' + authorNew;
}
