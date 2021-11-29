import './styles.css'

export default function Search({handleSearch, search}) {
    return (
        <input
            className="search"
            type="search"
            id="search"
            placeholder="Buscar por post"
            style={{
                marginBottom: '20px'
            }}
            onChange={handleSearch}
            value={search}
        />
    )
}