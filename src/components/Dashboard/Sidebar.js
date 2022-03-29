import { faBell, faGavel, faGraduationCap, faHandSparkles, faHome, faKey, faPersonChalkboard, faThumbsDown, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="container-fluid">
                <p> <FontAwesomeIcon icon={faHome}/> <Link to='/accueil-admin'>Accueil</Link> </p>
                <p><FontAwesomeIcon icon={faUser}/> Personl </p>
                <p> <FontAwesomeIcon icon={faToolbox}/> Comptabilite</p>
                <p> <FontAwesomeIcon icon={faGraduationCap}/> Eleves</p>
                <p><FontAwesomeIcon icon={faPersonChalkboard}/> Professuer</p>
                <p> <FontAwesomeIcon icon={faKey}/> Authentification</p>
                <p> <FontAwesomeIcon icon={faGavel}/> Droits</p>
                <p> <FontAwesomeIcon icon={faHandSparkles}/> Roles</p>
                <p> <FontAwesomeIcon icon={faBell}/> Scolarite</p>
                <p> <FontAwesomeIcon icon={faThumbsDown}/> Pointage</p>
        
    </div>
  )
}

export default Sidebar