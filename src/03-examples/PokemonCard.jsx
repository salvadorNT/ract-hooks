
export const PokemonCard = ({ id, name, sprites }) => {
    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize">#{id} - {name}</h2>

            <div>
                {sprites.map(image => (
                    <img key={ image } src={image} alt={name} />
                ))}
            </div>

        </section>
    )
}
