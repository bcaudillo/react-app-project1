(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(71)},57:function(e,t,a){},59:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),i=(a(57),a(9)),s=(a(59),a(11));var c=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/tarotcards"},"All Tarot Cards"),r.a.createElement(s.b,{to:"/about"},"About"),r.a.createElement(s.b,{to:"/spread"},"Spread"),r.a.createElement(s.b,{to:"/clickme"},"ClickMe"))};var u=function(e){var t=e.card,a=e.handleRemoveSpread;return r.a.createElement("div",null,r.a.createElement("h1",null,"Spread"),r.a.createElement("h3",null,"Name:"),t.name,r.a.createElement("h3",null,"Number of Cards:"),t.number_of_cards,r.a.createElement("h3",null,"Spread Meaning:"),t.spread_meaning,r.a.createElement("button",{onClick:function(){fetch("http://localhost:3000/spread/".concat(t.id),{method:"DELETE"}),a(t.id)}},"\ud83d\uddd1"))};var d=function(e){var t=e.card;return r.a.createElement("div",null,r.a.createElement("h1",{key:t.id},t.name),r.a.createElement("h3",null,"Description:"),t.desc,r.a.createElement("h3",null,"Meaning Up: "),t.meaning_up,r.a.createElement("h3",null,"Meaning Reversed:"),t.meaning_rev,r.a.createElement("h3",null,"Type: "),t.type)};var h=function(e){var t=e.cards,a=e.handleRemoveSpread,n=e.isTarotCard;return t.map(function(e){return n?r.a.createElement(d,{key:e.id,card:e}):r.a.createElement(u,{card:e,key:e.id,handleRemoveSpread:a})})};var m=function(e){var t=e.cards,a=e.setSpread,o=e.isTarotCard,l=Object(n.useState)(""),s=Object(i.a)(l,2),c=s[0],u=s[1];console.log(t);var d=t.filter(function(e){return e.name.toLowerCase().includes(c.toLowerCase())});function m(e){u(e.target.value)}return r.a.createElement("div",null,r.a.createElement("form",{className:"searchbar",onChange:m},r.a.createElement("input",{type:"text",id:"search",placeholder:"search for card",value:c,onChange:function(e){m(e)}})),r.a.createElement(h,{cards:d,handleRemoveSpread:function(e){var n=t.filter(function(t){return t.id!==e});a(n)},isTarotCard:o}))},f=a(4),p=a(33),E=a(17),b=a(30),g=a(82);var v=function(e){var t=e.handleAddCard,a={id:"",name:"",number_of_cards:"",spread_meaning:""},o=Object(n.useState)(a),l=Object(i.a)(o,2),s=l[0],c=l[1];function u(e){c(Object(b.a)({},s,Object(E.a)({},e.target.name,e.target.value)))}return r.a.createElement("div",null,r.a.createElement("h3",null,"Add a tarot spread"),r.a.createElement(g.a,{onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};fetch("http://localhost:3000/spread",n).then(function(e){return e.json()}).then(function(e){return t(e)}),c(a)}},r.a.createElement(g.a.Group,{widths:"equal"},r.a.createElement(g.a.Input,{fluid:!0,label:"name",placeholder:"name",name:"name",value:s.name,onChange:u}),r.a.createElement(g.a.Input,{fluid:!0,label:"spread meaning",placeholder:"spread meaning",name:"spread_meaning",value:s.spread_meaning,onChange:u}),r.a.createElement(g.a.Input,{fluid:!0,label:"Number of Cards",placeholder:"number of cards",name:"number_of_cards",value:s.number_of_cards,onChange:u})),r.a.createElement(g.a.Button,null,"Submit")))};var y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Tarot 101: The Basics"),r.a.createElement("p",null,"A beginner's guide to Tarot cards and how to use them So you want to explore Tarot, but you don't know where to begin? You're not alone. Many Tarot newbies find they are confused and intimidated when first learning the art of Tarot cards. With so many cards featuring such complex illustrations and mysterious interpretations, it's not uncommon for beginners to feel a little frustrated. How does it work, and what the heck does it all mean? We're here to help..."),r.a.createElement("h4",null,"What is Tarot?"),r.a.createElement("p",null,"Like many forms of divination, Tarot cards are a tool to help you tap into your own intuition and the wisdom of the universal energy that guides your life. Tarot, which has origins in 14th century Europe, is not a form of fortune-telling. It's more like a mirror that reflects what is happening in your life at the moment. Tarot is able to tap into hidden thoughts, feelings, and truths and bring them to the surface so you can use that information to make decisions about life, love, emotions, health, career, and more."),r.a.createElement("h4",null,"About Tarot card decks"),r.a.createElement("p",null,'Most Tarot card decks consist of 78 Tarot cards broken into a Major Arcana (22 cards) and a Minor Arcana (56 cards). The Major Arcana cards typically represent significant life events on a large scale, while the Minor Arcana cards deal with day-to-day life. The Minor Arcana includes four "suits" that each has a theme. Each suit is numbered one through 10, with four additional Court cards (Page, Knight, Queen and King).'),r.a.createElement("h4",null,"Pentacles"),r.a.createElement("p",null,'Also referred to as "Disks" or "Coins," cards in the Pentacles suit pertain to things in the material and physical world. Pentacles cards often indicate money matters, career and success, but they also can indicate levels of emotional and spiritual prosperity, too.'),r.a.createElement("h4",null,"Wands"),r.a.createElement("p",null,'Sometimes called "Staffs," the suit of Wands is more spiritual and is used to illustrate the energy of movement, growth and new beginnings. Wands represent ideas and innovation. They are often related to your career or your sense of purpose in the world, but they can deliver strong love messages, too.'),r.a.createElement("h4",null,"Cups"),r.a.createElement("p",null,"The suit of Cups is connected to our emotions and to our relationships, and to matters of the soul. Cups cards can reveal how we truly feel -- and how others truly feel about us. They also speak of our emotional well-being."),r.a.createElement("h4",null,"Swords"),r.a.createElement("p",null,"The Swords cards are most associated with conflict and strife, which can refer to internal conflict, as well. Swords cut to the heart of a matter, revealing our greatest challenges. They can tell of illness, heartbreak, war, loss and death, but they can also reveal truths we need to face in order to move forward, which ultimately is a positive thing."),r.a.createElement("h4",null,"About Tarot spreads"),r.a.createElement("p",null,"Tarot cards are shuffled and laid out in any number of Tarot spreads. The best known spread is the Celtic Cross, but there are countless other Tarot spreads you can choose depending on what type of question you want to ask and how many cards you wish to draw.  If you want to start out very simply, you can draw just one card about a specific person or situation. In fact, your question doesn't even need to be a question! It's called an \"open reading\" when you simply think about a person or situation instead of asking a direct question -- the cards will still provide insight."),r.a.createElement("p",null,'Each position in a Tarot spread has its own significant meaning, just as every card has its own meaning. For example, your spread may feature positions for "past," "present" and "future," or for "possible outcome," so it\'s important to pay attention to the position in which each card turns up. A card speaking of heartbreak would surely mean something different if it turned up in the past instead of the future, right?'))};var w=function(e){var t=e.setSpread;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(v,{handleAddCard:function(e){t(function(t){return[].concat(Object(p.a)(t),[e])})}}))};var T=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),c=s[0],u=s[1];return r.a.createElement("div",null,r.a.createElement(g.a,{onSubmit:function(e){return e.preventDefault(),o(a+c.length)}},r.a.createElement(g.a.Input,{fluid:!0,label:"text",placeholder:"text",text:"text",value:c,onChange:function(e){return u(e.target.value)}}),r.a.createElement(g.a.Button,null,"Click Me")),",",r.a.createElement("h1",null,a))};var C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),u=s[0],d=s[1];return Object(n.useEffect)(function(){fetch("http://localhost:3000/cards").then(function(e){return e.json()}).then(function(e){o(e)}),fetch("http://localhost:3000/spread").then(function(e){return e.json()}).then(function(e){d(e)})},[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Tarot Encyclopedia"),r.a.createElement(c,null),r.a.createElement(T,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(w,{setSpread:d})),r.a.createElement(f.a,{path:"/tarotcards"},r.a.createElement(m,{cards:a,setSpread:d,isTarotCard:!0})),r.a.createElement(f.a,{path:"/about"},r.a.createElement(y,null)),r.a.createElement(f.a,{path:"/spread"},r.a.createElement(m,{cards:u,setSpread:d,isTarotCard:!1}))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(s.a,null,r.a.createElement(C,null)))}},[[49,2,1]]]);
//# sourceMappingURL=main.ca1bd0f6.chunk.js.map