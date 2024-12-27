import React from 'react';

function Li3() {
  const learnedThings = [
    "what microsoft windows looked and acted like in the year 1996.",
    "what each next operating system looked like over the years. (NOTE: this year is May of 2020).",
    "what dialup internet was like.",
    "what dsl internet was like.",
    "what the old video games were like.",
    "what it was like before smartphones came.",
    "what tv looked like in black and white only.",
    "a computer mouse and keyboard before they became wireless.",
    "how to build a city in a video game and still not being able to beat it.",
    "how to golf on tv from home. (in a video game)",
    "good music from the older days.",
    "how to fish.",
    "how to play tennis.",
    "how to play basketball.",
    "how to cut the grass.",
    "how to make this website. its mine. i ought to know.",
    "how to use a textpad document. and a wordpad document.",
    "how to play games on my computer.",
    "how to surf the web for stuff.",
    "what it was like to be a member of 'a m e r i c a o n l i n e'. and enjoy watching it grow.",
    "how good coffee tastes. also iced and hot tea.",
    "how many times faster today's computers are compared to the ones in the year 1996. and this year, now, is 2020.",
    "its now possible to glue something under water.",
    "paying to use the web anywhere in the world is quite an expensive bill. please don't ever try it.",
    "hot cocoa.",
    "the web is so huge that even if you enlisted every person in the world to help with the download, it would still take 81 days.",
    "there is now 'wind power' and 'solar power' to get electricity from.",
    "there's always going to be farms. how else would we get our food?",
    "how fun my favorite games are.",
    "the pop machines never used an electronic box thing or a credit card to buy pop in my day.",
    "there wasn't any backup CD or backup usb storage stick. if you wanted to back up stuff that was important, chances were that you needed more than about 3 3.25 inch floppy disks, minimum.",
    "you can now send stuff to your printer over the wifi from away from home.",
    "comedy-style tv shows from the 50s were great.",
    "the roku and fire tv stick are 2 awesome devices. I have 1 of each.",
    "on the computers today there's a microsoft store.",
    "you can play tons and tons and tons of games online that are free.",
    "not only do laptops have a carry case, but the desktop computer does also.",
    "I'm sorry if it's an insult to 'N i n t e n d o' but the switch console does look like a toaster. the people gave it the name 'nintoaster'. I think it's awesome!!!",
    "since we're in the year 2020 there's no need to own a built-in car phone.",
    "'windows' is a great name for the Operating System's software program. I wonder how the name 'Uncrashable' would go. would that make it in the industry?",
    "the sink can connect to the web now. also, the windows, window shades, lights, doorbells, the tv, the tv's cable box, and grocery stores. there might be more, but I don't know the rest yet.",
    "a baseball and football has been in every American's lives.",
    "I'd like my meals every day to come with McDonald's fries. every time.",
    "I believe that glasses can be fitted for EVERYONE."
  ];

  return (
    <div>
      <h1>Stuff I Learned</h1>
      <h5>Here's a list of things I know:</h5>
      <ul>
        {learnedThings.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Li3;
