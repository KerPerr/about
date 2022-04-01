export const Formations = (props) => {

    const { formation } = props

    return (
        <>
            <div style={{ textAlign: "end", textDecoration: 'underline' }}>
                <span>{formation.start_date} - {formation.end_date}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: "bold" }}>
                    {formation.title}
                </span>
                <span style={{ color: '#5448C8', fontStyle: 'italic' }}>
                    ({formation.lieu})
                </span>
            </div>
        </>
    )
}