export const Profil = (props) => {

    const { user } = props

    return (
        <div className="text-center">
            <h1 className="name">{user.nom.toUpperCase()} {user.prenom}</h1>
            <h2 className="poste">{user.poste.toUpperCase()}</h2>
        </div>
    )
}