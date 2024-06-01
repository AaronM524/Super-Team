const teamMembers = [
    {
      name:  'Peter Czech',
      img: 'czech.jpg',
      activelyPlaying: true,
      position: 'Goalkeeper',
      skills: ['Reflexes', 'Collecting On The Ball', 'Footwork'],
      strengths: 'Hand-Eye Coordination',
      weaknesses: 'Heading Ability',
      biography:
        'Peter Czech is considered one of the greatest goalkeepers of all time...'
    },
    {
      name: 'John Terry',
      img: 'jtchampionsleague.jpg',
      position: 'Defender',
      skills: ['Speed', 'Tackling', 'Aerial Defending'],
      strengths: 'Positioning',
      weaknesses: 'Penalties',
      biography:
        'John Terry was voted best defender in the UEFA Champions League in 2005.'
    },
    {
        name: 'Marcel Desailly',
        img: 'md.jpg',
        position: 'Defender',
        skills: ['Versatility', 'Strength', 'Leadership'],
        strengths: 'Experience',
        weaknesses: 'Injury Prone',
        biography:
          'Desailly was an important part of the French team which won the 1998 FIFA World Cup, albeit being sent off in the final match.'
      },
      {
        name: 'Thiago Silva',
        img: 'ts.jpg',
        position: 'Defender',
        skills: ['Positioning', 'Leadership', 'Positioning'],
        strengths: 'Experience',
        weaknesses: 'Age',
        biography:
          'Thiago Emiliano da Silva is a Brazilian professional footballer who plays as a centre-back for Premier League club Chelsea and the Brazil national team. '
      },
      {
        name: 'Cesar Azpilicueta',
        img: 'ca.jpg',
        position: 'Defender',
        skills: ['Crossing', 'Team Player', 'Work Rate'],
        strengths: 'Consistency',
        weaknesses: 'Stamina',
        biography:
          ' Azpilicueta is one of just six players to have won the Premier League, FA Cup, League Cup, Champions League, Super Cup and Club World Cup.'
      },
      {
        name: 'Ngolo Kante',
        img: 'nk.jpg',
        position: 'Midfielder',
        skills: ['Tackling', 'Ball Recovery', 'Passing'],
        strengths: 'Stamina',
        weaknesses: 'Goal Scoring',
        biography:
          'Kante is known for his work rate and defensive acumen.'
      },
      {
        name: 'Michael Essien',
        img: 'me.jpg',
        position: 'Midfielder',
        skills: ['Shooting', 'Tackling', 'Dribbling '],
        strengths: 'Positioning',
        weaknesses: 'Discipline',
        biography:
          'At Chelsea, Essien helped the club win the Premier League in 2006 and 2010, as well as three FA Cups and one League Cup.'
      },
      {
        name: 'Frank Lampard',
        img: 'fl.jpg',
        position: 'Midfielder',
        skills: ['Vision', 'Shooting', 'Passing'],
        strengths: 'Mentality',
        weaknesses: 'Defense',
        biography:
          'Lampard joined the club in 2001 and went on to become their all-time leading goal scorer with a staggering 211 goals in 648 appearances.'
      },
      {
        name: 'Eden Hazard',
        img: 'eh.jpg',
        position: 'Forward',
        skills: ['Dribbling', 'Pace', 'Shooting'],
        strengths: 'Finishing',
        weaknesses: 'Defense',
        biography:
          'The Belgian forward won the UEFA Europa League and the Premier League twice with Chelsea, before winning the UEFA Champions League with Real Madrid in 2022.'
      },
      {
        name: 'Didier Drogba',
        img: 'dd.jpg',
        position: 'Forward',
        skills: ['Aerial', 'Leadership', 'Set Piece Specialist'],
        strengths: 'Menatlity',
        weaknesses: 'Discipline',
        biography:
          'He has been named African Footballer of the Year twice and is the all-time leading goal scorer for the Ivory Coast national team.'
      },
      {
        name: 'Samuel Eto',
        img: 'se.jpg',
        position: 'Forward',
        skills: ['Inteligence', 'Goal Scorer', 'Versatility'],
        strengths: 'Experience',
        weaknesses: 'Consistency',
        biography:
          'Is he the best player to play for Cameroon?'
      },
  ]
  
  function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
  
    teamMembers.forEach(member => {
      const card = document.createElement('div')
      card.classList.add('col-md-4.5',)
  
      //styling card based on position:
      let backgroundColor
  
      switch (member.position.toLowerCase()) {
        case 'forward':
          backgroundColor = '#ffc107' // Yellow for forwards
          break
        case 'midfielder':
          backgroundColor = '#28a745' // Green for midfielders
          break
        case 'defender':
          backgroundColor = '#007bff' // Blue for defenders
          break
        case 'goalkeeper':
          backgroundColor = '#dc3545' // Red for goalkeepers
          break
        default:
          backgroundColor = '#6c757d' // Gray for other positions
      }
      card.style.backgroundColor = backgroundColor
  
      //Create a list of Skills with <li> tags
      const skillsList = member.skills
        .map(skill => `<li> ${skill} </li>`).join('')
  
      card.innerHTML = `
              <div class = "card">
                  <div class = "card-header"> ${member.name}</div>
                  <div class = "card-body">
                  <img style="width: 200px" src=${member.img}>
                      <p><strong>Position:</strong> ${member.position}</p>
                      <p><strong>Skills:</strong> 
                          <ul>
                              ${skillsList}
                          </ul>
                      </p>
                      <p><strong>Strengths:</strong> ${member.strengths}</p>
                      <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                      <p><strong>Biography:</strong> ${member.biography}</p>
                  </div>
              </div>
          `
  
      teamCardsContainer.appendChild(card)
    })
  }
  
  window.onload = generateTeamCards()