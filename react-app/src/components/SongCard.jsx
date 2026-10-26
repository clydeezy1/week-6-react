function SongCard({ title, artist, year }){
    return (
        <div>
            <h2>{title}</h2>
            <p>Artist: {artist}</p>
            <p>Year: {year}</p>
        </div>
    );

    }

    export default SongCard;