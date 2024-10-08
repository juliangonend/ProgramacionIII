import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForms"
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../ui/CardHero/CardHero";
import styles from "./Search.module.css"


export const Search = () => {

  const {values, handleChange}= useForm({
    search: "",
  });
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const {search} = values;

  useEffect(()=>{
    const result = heroesData.filter((h)=> h.superhero.toLowerCase().trim().includes(search))
    setHeroes(result)
  }, [search])
  return (
      <div className={styles.containerSearch}>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text>Ingrese heroe</InputGroup.Text>
            <Form.Control onChange={handleChange} type="text" name="search"  />
          </InputGroup>
        </div>
        <div className={styles.containerListHero}>
      {heroes.length>0 ?(
      <div >
         { heroes.map((hero)=>(
         <div  key={hero.id} style={{width: "90%"}}>
          <CardHero hero={hero}/>
         </div>
        ))}
      </div>
      )
        : (<div>
          <h2>No coincide la busqueda</h2>
        </div>)}
    </div>
      </div>
  )
}
