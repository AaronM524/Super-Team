const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'Foward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the greatest football players of all time.'
    },

    {
    name: 'Lionel Messi Jr',
    position: 'Midfielder',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball Control',
    weaknesses: 'Heading Ability',
    biography: 'Lionel Messi is considered one of the greatest football players of all time.'
    },

]

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //styling card based on position
        let backgroundColor: 






    
        //Create a list of skills for my <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')


        card.innerHTML = `
            <div class = "card"> 
            <div class = "card-header"> ${member.name}</div> 
            <div class = "card-body">
            <p><strong>Position:</strong> ${member.position}</p>
            <p><strong>Position:</strong> 
            <ul> 
            ${skillsList}
            </ul>
            
            
            </p>
            <p><strong>Strengths:</strong> ${member.skills}</p>
            <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
            <p><strong>Biography:</strong> ${member.biography}</p>


            </div>
            </div>
        `

    





        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()


