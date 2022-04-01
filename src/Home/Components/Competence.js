export const Competence = (props) => {

    const { data } = props

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between", padding: '0 1rem'}}>
                <span style={{textTransform: "uppercase"}}>{data.title}</span>
                <div style={{display: "flex"}}>
                    {[...Array(5)].map((i, index) =>
                        <div key={index} className="s-rounded"
                        style={{
                            width: '2em',
                            margin: '.05em',
                            border: '1px solid black',
                            backgroundColor: index < data.level ? '#5448C8' : 'white' 
                        }} />
                    )}
                </div>
            </div>
        </>
    )
}