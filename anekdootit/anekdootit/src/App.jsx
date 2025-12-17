import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'Jos se sattuu, tee se useammin.',
    'Työvoiman lisääminen myöhässä olevaan ohjelmistoprojektiin tekee siitä entistä enemmän myöhässä olevan!',
    'Ensimmäiset 90 prosenttia koodista vaativat 10 prosenttia kehitysajasta... Jäljellä oleva 10 prosenttia koodista vaatii loput 90 prosenttia.',
    'Jokainen pöljä osaa kirjoittaa koodia, jonka tietokone ymmärtää. Hyvät ohjelmoijat kirjoittavat koodia, jonka ihmiset ymmärtävät.',
    'Ennenaikainen optimointi on kaiken pahan juuri.',
    'Virheenetsintä on kaksi kertaa vaikeampaa kuin koodin kirjoittaminen alun perin. Siksi, jos kirjoitat koodin mahdollisimman nokkelasti, et ole määritelmän mukaan tarpeeksi älykäs virheenetsinnän tekemiseen.'
  ]

  // Määritetään tilamuuttujat
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // Käsittelijä äänestämiselle
  const handleVote = () => {
    const copy = [...votes] // luodaan kopio äänistä
    copy[selected] += 1 // lisätään ääni valitulle anekdootille
    setVotes(copy)
  }

  const getMaxVotedAnecdoteIndex = () => {
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]} ääntä</p>
      <Button onClick={handleVote} text="äänestä" />
      <Button
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * anecdotes.length)
          setSelected(randomIndex)
        }}
        text="seuraava anekdootti"
      />

      <h1>Eniten ääniä saanut anekdootti</h1>
      <p>{anecdotes[getMaxVotedAnecdoteIndex()]}</p>
      <p>{votes[getMaxVotedAnecdoteIndex()]} ääntä</p>
    </div>
  )
}

export default App