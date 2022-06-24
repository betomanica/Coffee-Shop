import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {

        return (<nav className="nav">
            <ul className='nav-links'>
              <li><Link to="/Inicio">Início</Link></li>
              <li><a href="https://drive.google.com/file/d/1qVG38TWRHlwLkb37_Rn97GUXeMdY6dhF/view" target="blank">Cardápio</a></li>
              <li><Link to="/Contato">Contato</Link></li>
          </ul>
        </nav>
        )
} 