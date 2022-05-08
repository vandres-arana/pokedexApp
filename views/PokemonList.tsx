import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PokemonCell from './PokemonCell'

const PokemonList = () => {
  return (
    <ScrollView style={styles.container}>
        <PokemonCell pokemonNumber={5} pokemonName={"Bulbasaur"} pokemonTypes={["Grass"]}></PokemonCell>
        <PokemonCell pokemonNumber={7} pokemonName={"Ivysaur"} pokemonTypes={["Fire"]}></PokemonCell>
        <PokemonCell pokemonNumber={8} pokemonName={"Venasaur"} pokemonTypes={["Thunder"]}></PokemonCell>
        <PokemonCell pokemonNumber={12} pokemonName={"Charmander"} pokemonTypes={["Grass", "Fire"]}></PokemonCell>
        <PokemonCell pokemonNumber={108} pokemonName={"Charmeleon"} pokemonTypes={["Grass", "Poison"]}></PokemonCell>
        <PokemonCell pokemonNumber={890} pokemonName={"Charizard"} pokemonTypes={["Grass", "Water"]}></PokemonCell>
    </ScrollView>
  )
}

export default PokemonList

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        paddingHorizontal: 40,
    }
})