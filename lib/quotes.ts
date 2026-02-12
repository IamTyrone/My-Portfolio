export interface Quote {
  text: string;
  source: string;
  category: "rick-and-morty" | "voldemort" | "mr-robot";
}

export const QUOTES: Quote[] = [
  // ── Rick and Morty ──────────────────────────────────────────────
  {
    text: "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come look at my code.",
    source: "Morty Smith (adapted)",
    category: "rick-and-morty",
  },
  {
    text: "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "I'm sorry, but your opinion means very little to me. I've seen what makes you cheer.",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "Wubba lubba dub dub! ...which loosely translates to 'I am in great pain, please help me debug this.'",
    source: "Rick Sanchez (adapted)",
    category: "rick-and-morty",
  },
  {
    text: "The universe is basically an animal. It grazes on the ordinary. Create something extraordinary and it will leave you alone.",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "I turned myself into a pickle, Morty! I'M PICKLE RIIIICK! ...anyway, back to refactoring this monolith.",
    source: "Rick Sanchez (adapted)",
    category: "rick-and-morty",
  },
  {
    text: "Listen, I'm not the nicest guy in the universe because I'm the smartest. And being nice is something stupid people do to hedge their bets.",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "What, so everyone's supposed to sleep every single night now? You realize that nighttime makes up half of all time?",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "Sometimes science is more art than science. A lot of people don't get that.",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "Get schwifty! ...which in developer terms means 'ship it and iterate.'",
    source: "Rick Sanchez (adapted)",
    category: "rick-and-morty",
  },
  {
    text: "School is not a place for smart people, Morty. Stack Overflow and raw source code — that's where the real learning happens.",
    source: "Rick Sanchez (adapted)",
    category: "rick-and-morty",
  },
  {
    text: "That's planning for failure, Morty. Even dumber than regular planning.",
    source: "Rick Sanchez",
    category: "rick-and-morty",
  },
  {
    text: "Every breath I take without your permission raises my self-esteem. Every deploy I push raises it further.",
    source: "Rick Sanchez (adapted)",
    category: "rick-and-morty",
  },
  {
    text: "I have no doubt that you would be bored senseless by my explanation of how this code works, so... you're welcome.",
    source: "Rick Sanchez (adapted)",
    category: "rick-and-morty",
  },

  // ── Voldemort / Dark Lord ───────────────────────────────────────
  {
    text: "There is no good and evil. There is only code, and those too weak to compile it.",
    source: "Lord Voldemort (adapted)",
    category: "voldemort",
  },
  {
    text: "I can make things move without touching them. I can make bad code disappear. I can make people's bugs hurt.",
    source: "Tom Riddle (adapted)",
    category: "voldemort",
  },
  {
    text: "Greatness inspires envy, envy engenders spite, spite spawns lies. Ship anyway.",
    source: "Lord Voldemort (adapted)",
    category: "voldemort",
  },
  {
    text: "I, who have gone further than anybody along the path that leads to immortal code.",
    source: "Lord Voldemort (adapted)",
    category: "voldemort",
  },
  {
    text: "There is nothing worse than death, Dumbledore! ...except maybe a production outage on a Friday night.",
    source: "Lord Voldemort (adapted)",
    category: "voldemort",
  },
  {
    text: "Surely you didn't think I was going to keep my filthy Muggle father's name? No. I fashioned myself a new name, a name I knew developers everywhere would one day fear to speak.",
    source: "Tom Riddle (adapted)",
    category: "voldemort",
  },
  {
    text: "I invent, transform, create, and destroy for a living. And when I don't like something about the world, I change it.",
    source: "Voldermort",
    category: "voldemort",
  },
  {
    text: "Only I can live forever. My code, however, will outlast even me.",
    source: "Lord Voldemort (adapted)",
    category: "voldemort",
  },
  {
    text: "You dare use my own spells against me, Potter? I am the Half-Blood Prince of this codebase.",
    source: "Lord Voldemort (adapted)",
    category: "voldemort",
  },
  {
    text: "The Elder Wand, the Resurrection Stone, and the Cloak of Invisibility — or as I call them: Vim, Git, and SSH.",
    source: "Voldermort",
    category: "voldemort",
  },

  // ── Mr. Robot ───────────────────────────────────────────────────
  {
    text: "Is it that we collectively thought Steve Jobs was a great guy? He made billions off the backs of children. Oh wait, I'm sorry, I know this is a 'coded' portfolio.",
    source: "Elliot Alderson (adapted)",
    category: "mr-robot",
  },
  {
    text: "Control is an illusion. But in code, control is very much real.",
    source: "Mr. Robot (adapted)",
    category: "mr-robot",
  },
  {
    text: "People always told me growing up that it's never about the destination, it's about the journey. But what if the destination is a perfectly deployed microservice?",
    source: "Elliot Alderson (adapted)",
    category: "mr-robot",
  },
  {
    text: "Give a man a gun and he can rob a bank. Give a man a bank and he can rob the world. Give a man a keyboard and he can rebuild it.",
    source: "Mr. Robot (adapted)",
    category: "mr-robot",
  },
  {
    text: "I wanted to save the world. Instead, I just kept writing better code.",
    source: "Elliot Alderson (adapted)",
    category: "mr-robot",
  },
  {
    text: "The world is a dangerous place, not because of those who do evil, but because of those who look at legacy code and do nothing.",
    source: "Mr. Robot (adapted)",
    category: "mr-robot",
  },
  {
    text: "Hello, friend. That's lame. Maybe I should give you a name. But that's a slippery slope — you'll want a REST API next.",
    source: "Elliot Alderson (adapted)",
    category: "mr-robot",
  },
  {
    text: "I don't want your money. I don't want your power. I just want your codebase to not be a dumpster fire.",
    source: "Elliot Alderson (adapted)",
    category: "mr-robot",
  },
  {
    text: "We are fsociety. We are finally free. We are finally awake. Our pull request has been merged.",
    source: "fsociety (adapted)",
    category: "mr-robot",
  },
  {
    text: "The top one percent of the top one percent — the ones who play God without permission. They don't write their own code though.",
    source: "Elliot Alderson (adapted)",
    category: "mr-robot",
  },
];

export function getRandomQuote(): Quote {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

export function getRandomQuoteByCategory(category: Quote["category"]): Quote {
  const filtered = QUOTES.filter((q) => q.category === category);
  return filtered[Math.floor(Math.random() * filtered.length)];
}
