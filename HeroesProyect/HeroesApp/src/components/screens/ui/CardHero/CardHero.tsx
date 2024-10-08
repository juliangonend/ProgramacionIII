import { Button, Card } from "react-bootstrap";
import { IHeroes } from "../../../../types/IHeroes";
import { useNavigate } from "react-router-dom";
import styles from "./CardHero.module.css"

interface ICardHero{
    hero: IHeroes;
}
import { FC } from 'react'

export const CardHero :FC<ICardHero>  = ({hero}) => {
    const navigate = useNavigate()
    const handleNavigateHero=()=>{
        navigate(`/hero/${hero.id}`)
    }

  return (
   <div className={styles.card}>
     <Card 
     onClick={handleNavigateHero}
      style={{ width: '100%' }}>
        <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
        <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
            <p>
                <b>Alter Ego :</b> {hero.alter_ego}
            </p>
            <p>
                <b>Publicado :</b> {hero.publisher}
            </p>
            <p>
                <b>Primera Apariencia:</b> {hero.first_appearance}
            </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
  </Card>
   </div>
  )
}
