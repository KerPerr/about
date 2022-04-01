export const Experience = (props) => {

    const { title, experiences } = props

    return (
        <div>
            <div className="title">{title}</div>
            <div style={{ margin: '1em' }}>
                {experiences.map((e, i) => {
                    return (
                        e instanceof Object ?
                            <div key={i}>
                                <h3 style={{ fontWeight: 'bold' }}>{e.title}</h3>
                                <div style={{ display: "flex", justifyContent: "space-between", textDecoration: 'underline' }}>
                                    <div>{e.contrat}</div>
                                    <div><span>{e.start_date} - {e.end_date}</span></div>
                                </div>
                                <div style={{ color: '#5448C8', fontWeight: 'bold', textTransform: 'uppercase' }}>{e.societe}</div>
                                <div>{e.description.split('.').map((line, i) => <div key={i}>{line}{line === "" ? "" : "."}</div>)}</div>
                                <div className={i != experiences.length - 1 ? "divider" : ""} />
                            </div>
                            :
                            <div key={i}>{e}</div>
                    )
                }
                )}
            </div>
        </div>
    )
}