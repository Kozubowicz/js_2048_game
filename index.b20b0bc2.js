var t={};class e{static defaultInitialState=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];static GameStatus={idle:"idle",playing:"playing",win:"win",lose:"lose"};constructor(t=e.defaultInitialState){this.board=t.map(t=>[...t]),this.score=0,this.status=e.GameStatus.idle,this.initialState=t.map(t=>[...t])}getState(){return this.board}getScore(){return this.score}getStatus(){return this.status}start(){this.status=e.GameStatus.playing,this.newCell(),this.newCell()}restart(){this.status=e.GameStatus.idle,this.score=0,this.board=this.initialState.map(t=>[...t])}newCell(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)this.board[e][s]||t.push({y:e,x:s});if(t.length>0){let e=Math.floor(Math.random()*t.length);this.board[t[e].y][t[e].x]=.9>Math.random()?2:4}}checkGameState(){this.board.find(t=>t.find(t=>2048===t))?this.status=e.GameStatus.win:this.checkIfLose()&&(this.status=e.GameStatus.lose)}checkIfLose(){if(this.board.find(t=>t.includes(0)))return!1;for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(t<3&&this.board[t][e]===this.board[t+1][e]||e<3&&this.board[t][e]===this.board[t][e+1])return!1;return!0}move(t){if("playing"!==this.status)return!1;let e=!1,s=Array.from({length:4},()=>[!1,!1,!1,!1]),r=(t,r,i,a,o)=>{if(0!==this.board[t][r]){let o=t,l=r;for(;o+i>=0&&o+i<4&&l+a>=0&&l+a<4&&0===this.board[o+i][l+a];)o+=i,l+=a;o+i>=0&&o+i<4&&l+a>=0&&l+a<4&&this.board[o+i][l+a]===this.board[t][r]&&!s[o+i][l+a]?(this.board[o+i][l+a]*=2,this.score+=this.board[o+i][l+a],this.board[t][r]=0,s[o+i][l+a]=!0,e=!0):(o!==t||l!==r)&&(this.board[o][l]=this.board[t][r],this.board[t][r]=0,e=!0)}};if("up"===t)for(let t=0;t<4;t++)for(let e=1;e<4;e++)r(e,t,-1,0,"move-up");else if("down"===t)for(let t=0;t<4;t++)for(let e=2;e>=0;e--)r(e,t,1,0,"move-down");else if("left"===t)for(let t=0;t<4;t++)for(let e=1;e<4;e++)r(t,e,0,-1,"move-left");else if("right"===t)for(let t=0;t<4;t++)for(let e=2;e>=0;e--)r(t,e,0,1,"move-right");return e&&(this.newCell(),this.checkGameState()),e}moveUp(){return this.move("up")}moveDown(){return this.move("down")}moveLeft(){return this.move("left")}moveRight(){return this.move("right")}}const s=new(t=e),r=document.querySelector(".button"),i=document.querySelector(".game-score"),a=document.querySelectorAll("tr"),o=document.querySelector(".message-start"),l=document.querySelector(".message-lose"),n=document.querySelector(".message-win");function d(){i.textContent=s.getScore();let t=s.getState();for(let e=0;e<4;e++)for(let s=0;s<4;s++){let r=a[e].cells[s];if(0===t[e][s])r.firstChild&&r.removeChild(r.firstChild);else if(!r.firstChild||r.firstChild.textContent!==t[e][s]){r.innerHTML="";let i=document.createElement("div");i.className=`field-cell-num field-cell--${t[e][s]}`,i.textContent=t[e][s],r.appendChild(i)}}}r.addEventListener("click",()=>{s.getStatus()===t.GameStatus.idle?(r.textContent="Restart",r.classList.add("restart"),r.classList.remove("start"),o.classList.add("hidden"),s.start()):(r.textContent="Start",r.classList.add("start"),r.classList.remove("restart"),n.classList.add("hidden"),l.classList.add("hidden"),o.classList.remove("hidden"),s.restart()),d()}),document.addEventListener("keydown",e=>{let r=!1;if("playing"===s.getStatus()){switch(e.key){case"ArrowUp":r=s.moveUp();break;case"ArrowDown":r=s.moveDown();break;case"ArrowLeft":r=s.moveLeft();break;case"ArrowRight":r=s.moveRight()}r&&setTimeout(()=>{d(),function(){let e=s.getStatus();e===t.GameStatus.win?n.classList.remove("hidden"):e===t.GameStatus.lose&&l.classList.remove("hidden")}()},300)}});
//# sourceMappingURL=index.b20b0bc2.js.map
