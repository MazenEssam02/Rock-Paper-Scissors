let score=JSON.parse(localStorage.getItem('score')) ||{
  win:0,
  lose:0,
  tie:0
};

updateScoreElement();
function play(playerMove){
  const move=Math.random();
  let computerMove='';
  let result='';
  if(move<=1/3){
    computerMove='Rock'
  }
  else if(move<=2/3){
    computerMove='Paper'
  }
  else{
    computerMove='Scissor'
  }
  if(playerMove==='Rock'){
    if(computerMove==='Rock'){
      result='Tie'
  
      score.tie++;
    }
    else if(computerMove==='Paper'){
      result='You Lose'

      score.lose++;
    }
    else if(computerMove==='Scissor'){
      result='You Win'

      score.win++;
    }
  }
  else if(playerMove==='Paper'){
    if(computerMove==='Paper'){
      result='Tie'
 
      score.tie++;
    }
    else if(computerMove==='Scissor'){
      result='You Lose'

      score.lose++;
    }
    else if(computerMove==='Rock'){
      result='You Win'

      score.win++;
    }
  }
  else if(playerMove==='Scissor'){
    if(computerMove==='Scissor'){
      result='Tie';

      score.tie++;
    }
    else if(computerMove==='Rock'){
      result='You Lose'
      
      score.lose++;
    }
    else if(computerMove==='Paper'){
      result='You Win'
     
      score.win++;
    }
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML=result
  document.querySelector('.js-play').innerHTML=`You <img src="imgs/${playerMove}-emoji.png" class="move-icon">  <img src="imgs/${computerMove}-emoji.png" class="move-icon"> Computer  `;
}
function  updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`;
}
function hide(){
  document.querySelector('.js-result').innerHTML=''
  document.querySelector('.js-play').innerHTML='';
}