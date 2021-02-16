import React from 'react'
import Card from './Card'

const IdeasContainer = ({ ideas, removeIdea, archiveIdea }) => {

  const activeCards = ideas.filter(idea => (!idea.archived))
    .map(idea => (<Card {...idea} key={idea.id} removeIdea={removeIdea} archiveIdea={archiveIdea} status={idea.archived} />))

  const archivedCards = ideas.filter(idea => (idea.archived))
    .map(idea => (<Card {...idea} key={idea.id} removeIdea={removeIdea} archiveIdea={archiveIdea} status={idea.archived} />))

 return(
    <main>
      <section className="active-cards">
        { activeCards }
      </section>
      <section className="archived-cards">
        { archivedCards }
      </section>
    </main>
 )
}

export default IdeasContainer