
import { FC } from "react";
import { Layouts } from "../components/layouts"
import { Button, Card, Grid, Row, Text } from "@nextui-org/react"
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";


interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons}) => {  
  console.log(pokemons);
  
 return (
  <>
    <Layouts title="Pokemin Api">

        <Grid.Container gap={2} justify="flex-start" >
          {
            pokemons.map(({id, name, img}) => (
             <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card isHoverable isPressable >
                <Card.Body>
                  <Card.Image
                    src={img}
                    width={'100%'}
                    height={ 140}
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{name}</Text>
                    <Text >#{id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
             </Grid>
            ))
          }
        </Grid.Container>
    </Layouts>
  </>
 )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((item, i) => ({
    ...item,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
