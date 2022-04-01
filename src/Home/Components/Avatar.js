import logo from '../../Assets/profil.jpeg'

export const Avatar = (props) => {

    const { user, width } = props

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {width > 920 ? <img className="profil" src={logo} style={{objectPosition: '0 -1.5rem'}} /> : null}

            <div style={{margin: width > 920 ? '-2.5rem auto 0 auto' : '0 auto'}}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0' }}>
                    <span>📍</span>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1em' }}>
                        <span>{user.adresse.rue}</span>
                        <span>{user.adresse.ville} - {user.adresse.cp}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0'  }}>
                    <span>☎️</span>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1em' }}>
                        <span>{user.telephone}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0'  }}>
                    <span>📫</span>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1em' }}>
                        <span>{user.email}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}