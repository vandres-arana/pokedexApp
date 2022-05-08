import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type PokemonCellProps = {
    pokemonNumber: number,
    pokemonName: string,
    pokemonTypes: string[],
}

const PokemonCell: React.FC<PokemonCellProps> = ({
    pokemonNumber,
    pokemonName,
    pokemonTypes
}) => {
    const getPokemonNumberLabel = (pokemonNumber: number) => {
        var prefix = "#"
        if (pokemonNumber < 100) {
            prefix += "0"
        }
        if (pokemonNumber < 10) {
            prefix += "0"
        }
        return prefix + pokemonNumber
    }

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{getPokemonNumberLabel(pokemonNumber)}</Text>
            <Text style={styles.name}>{pokemonName}</Text>
            <View style={styles.pokemonTypeList}>
            {
                pokemonTypes.map((pokemonType, index) => (
                    <View style={styles.pokemonType}>
                        <Text style={styles.pokemonTypeLabel}>{pokemonType}</Text>
                    </View>
                ))
            }
            </View>
        </View>
    )
}

export default PokemonCell

const styles = StyleSheet.create({
    number: {
        fontSize: 12,
        fontWeight: "bold",
    },
    name: {
        color: "#FFFFFFFF",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 5,
    },
    container: {
        padding: 20,
        marginTop: 20,
        backgroundColor: "#88888855",
        borderRadius: 10,
    },
    pokemonTypeList: {
        flex: 1,
        flexDirection: "row",
        marginTop: 5,
    },
    pokemonType: {
        padding: 5,
        backgroundColor: "#FF000033",
        marginRight: 5,
        borderRadius: 5,
    },
    pokemonTypeLabel: {
        color: "#FFFFFFFF",
        fontSize: 12,
        fontWeight: "500",
    },
})