import { Competence } from './Competence'
import { Avatar } from './Avatar'

export const Sidebar = (props) => {

    const { user, qualites, competences, langues, width } = props
    
    return (
        <>
            <Avatar user={user} width={width} />

            <div>
                <div className="title">QUALITES</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {qualites.map((q, i) => <span key={i} style={{
                        width: '100%',
                        margin: '.25rem 0',
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        textTransform: 'uppercase'
                    }} className="chip">{q}</span>)}
                </div>
            </div>

            <div>
                <div className="title">COMPETENCES</div>
                <div>
                    {competences.map((c, i) => <Competence key={i} data={c} />)}
                </div>
            </div>

            <div>
                <div className="title">LANGUES VIVANTES</div>
                <div>
                    {langues.map((l, i) => <Competence key={i} data={l} />)}
                </div>
            </div>
        </>
    )
}