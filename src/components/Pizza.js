import React, { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';

const Pizza = (props) => {
	const { name, prices, image, description } = props.pizza;

	const [variants, setVariants] = useState('small');
	const [quantity, setQuantity] = useState(1);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const variantHandler = (e) => {
		setVariants(e.target.value);
	};

	const quantityHandler = (e) => {
		setQuantity(e.target.value);
	};

	return (
		<>
			<Card style={{ width: '18rem', marginBottom: 20 }}>
				<Card.Img
					variant="top"
					src={image}
					style={{ height: 200, cursor: 'pointer' }}
					onClick={handleShow}
				/>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<hr className="bg-dark" />
					<Card.Text>
						<Row>
							<Col md={6}>
								<h6>Variants</h6>
								<select value={variants} onChange={variantHandler}>
									{props.pizza.variants.map((variant) => (
										<option>{variant}</option>
									))}
								</select>
							</Col>
							<Col md={6}>
								<h6>Quantity</h6>
								<select value={quantity} onChange={quantityHandler}>
									{[...Array(5).keys()].map((v, i) => (
										<option value={i + 1}>{i + 1}</option>
									))}
								</select>
							</Col>
						</Row>
					</Card.Text>
					<Row>
						<Col md={6}>Price: ${prices[0][variants] * quantity}</Col>
						<Col md={6}>
							<Button className="bg-dark text-white">Add to Cart</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Card.Img variant="top" src={image} style={{ height: 200 }} />
					</div>
					<div className="mt-2 d-flex">
						<h6 className="lead">{description}</h6>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Pizza;
