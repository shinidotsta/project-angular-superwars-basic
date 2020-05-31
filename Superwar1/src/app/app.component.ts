import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Superwar1';

PLAYERS=[
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer'
];

ngOnInit() {
  //viewplayer is a function which calls BuildPlayer function.but before this we should pass the player details.
  //hence viewplayer which takes a function that is InitPlayers act as the input and set the playerDetails.

  this.viewPlayers(this.InitPlayers(this.PLAYERS));
}

i: number = 0;
getRandomStrength=()=>
{
  return Math.ceil(Math.random() * 100);
} 
// initialize players with image and strength
InitPlayers=(players)=>{
  
  let DetailedPlayers=[];

  DetailedPlayers=players.map((player:any,i:any)=>{
    return {
      name:player,
      image :'../../assets/super-'+(i+1)+'.png',
      strength:this.getRandomStrength(),
      type :(i%2==0?'hero':'villain')
    }
    })
    return DetailedPlayers;
}

 // Build player template
 buildPlayers = (players:any, type:any) => {
  let fragment = '';

  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join

  fragment = players .filter(player => player.type == type) .map(  player =>
  `<div class="player"><img src="${player.image}" alt=" "> <div class="name">${player.name}</div><div class="strength">${player.strength}</div></div>`).join('');
  return fragment;
};
  // Display players in HTML
  viewPlayers = players => {
    document.getElementById('heroes').innerHTML = this.buildPlayers( players, 'hero' );
    document.getElementById('villains').innerHTML = this.buildPlayers(players,'villain');
  };


}
