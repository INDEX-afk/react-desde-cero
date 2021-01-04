import React from 'react';
import PropTypes from 'prop-types'

const Curso = ({tittle, image, price, profesor}) => (
	<article className="card">
		<div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
			<img src={image} alt={tittle} />
		</div>
		<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
				<h3 className="center">{tittle}</h3>
			<div className="s-main-center">
				{  profesor }
			</div>
			<div className="s-main-center">
				<a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ 	${price} USD`}</a>
			</div>
		</div>
	</article>
)

Curso.propTypes = {
	tittle: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	profesor: PropTypes.string
}

Curso.defaultProps = {
	tittle: "No se encontro titulo",
	image: "https://www.askc.us/wp-content/uploads/2017/04/default-image.jpg",
	price: "--",
	profesor: "NN"
}

export default Curso