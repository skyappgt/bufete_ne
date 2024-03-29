import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/Norma Esquivel Mendoza-logo-white.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import wasap from '../img/iconwasap.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Norma Esquivel"
            style={{ width: 'auto', height: '8em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/acerca">
                        Somos
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/servicios">
                        Servicios
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Administrador
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Publicaciones Recientes
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contacto">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Whatsapp" href="https://wa.me/50253351693?text=Hola%20me%20puedes%20enviar%20mas%20información!">
                  <img
                    src={wasap}
                    alt="Wasap"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dev">
          💻<a href="https://facebook.com/itskyapps" className="navbar-item">Sky_Apps GT</a>Guatemala ©️ 2019
          
        </div>

      </footer>
    )
  }
}

export default Footer
