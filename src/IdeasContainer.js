import React from 'react'
import Card from './Card'

const IdeasContainer = ({ ideas, removeIdea }) => {

 const ideaCards = ideas.map(idea => (
  <Card {...idea} key={idea.id} removeIdea={removeIdea} />
 ))

 return(
   <section>
     {ideaCards}
   </section>
 )
}

export default IdeasContainer