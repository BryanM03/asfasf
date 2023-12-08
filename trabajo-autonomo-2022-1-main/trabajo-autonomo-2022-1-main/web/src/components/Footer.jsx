import React from 'react'

import logoImage from '../img/logo.svg'

import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

export const Footer = () => {
  return (
		<footer className="py-3 border-top bg-secondary bg-opacity-10">
			<Container>
				<Row>
					<Col lg='4' className="mb-3">
						<h5>Desarrolladores</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">Intriago Bermudez Johan</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">Macias Loor Kevin</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">Mejia Landa Bryan</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">Tucker Macias Roonye</a>
							</li>
						</ul>
					</Col>
					<Col lg='4' className="mb-3">
						<h5>Enlaces</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">API</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">Docker</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">Código fuente</a>
							</li>
						</ul>
					</Col>
					<Col lg='4' className="mb-3 d-flex flex-column align-items-center">
						<Image src={logoImage} alt="LOGO" height="32" width="40"></Image>
            <p>© 2023 Proyecto parcial</p>
					</Col>
				</Row>
			</Container>
    </footer>
  )
}
