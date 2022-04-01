import data from '../Assets/data.json'

import { Sidebar } from './Components/Sidebar'
import { Profil } from './Components/Profil'
import { Experience } from './Components/Experience'
import { Formations } from './Components/Formation'

import './Home.css'

export const Home = (props) => {

    const { width } = props;

    return (
        <div className="columns" style={{ flexFlow: width > 920 ? 'row' : 'column' }}>

            {width > 920 ? null : <Profil user={data.profil} />}

            <div className="column" style={{ flexGrow: width > 920 ? 0 : 1 }}>
                <Sidebar
                    width={width}
                    user={data.profil}
                    qualites={data.qualites}
                    competences={data.competences}
                    langues={data.langues}
                />
            </div>

            <div className="column">

                {width > 920 ? <Profil user={data.profil} /> : null}

                <Experience title={'EXPERIENCES PROFESSIONNELLES'} experiences={data.experiences.pro} />

                <Experience title={'EXPERIENCES PERSONELLES'} experiences={data.experiences.perso} />

                <div className="title">FORMATIONS</div>
                <div style={{ margin: '1em' }}>
                    {data.formations.map((f, i) => <Formations key={i} formation={f} />)}
                </div>

                <div className="title">LOISIRS</div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {data.loisirs.map((l, i) => <span key={i} style={{
                        width: '100%',
                        margin: '.25rem 0',
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        textTransform: 'uppercase'
                    }} className="chip">{l}</span>)}
                </div>

            </div>
        </div>
    )
}