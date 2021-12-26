import React from 'react';
import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
	return (
		<>
			<Container style={{ marginTop: '40px' }}>
				<Row>
					<Col md={6}>
						<h1>Milano-Express</h1>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
							dolore modi facere exercitationem deleniti dignissimos suscipit
							voluptatum beatae eum sapiente pariatur nulla aut mollitia, ex
							quae? Nam molestiae laborum corrupti, distinctio eligendi fugiat
							consequatur aliquid, reprehenderit debitis hic quod amet pariatur
							impedit culpa repellat id ipsum nesciunt, veniam aperiam ut quae
							iusto ab! Ab cupiditate accusamus vero quo itaque accusantium,
							aliquam quas? Minima veniam earum doloribus fuga cupiditate
							corrupti necessitatibus odit possimus recusandae! Modi,
							repellendus eius? Voluptatum quod exercitationem doloribus nam
							illo rerum libero deleniti. Unde facere, dicta atque blanditiis
							repellat, accusantium eligendi esse veritatis libero maxime
							ducimus, sed eaque!
						</p>
						<Table striped bordered hover className="text-center">
							<thead>
								<tr>
									<th className="bg-warning text-center" colSpan={3}>
										--- Contact Details ---
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<FaPhone />
									</td>
									<td>Phone</td>
									<td>123456789</td>
								</tr>
								<tr>
									<td>
										<FiPhoneCall />
									</td>
									<td>Call</td>
									<td>123456789</td>
								</tr>
								<tr>
									<td>
										<AiOutlineMail />
									</td>
									<td>Email</td>
									<td>me@gmail.com</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col
						md={6}
						className="d-flex align-items-center justify-content-center"
					>
						<Image
							src="images/farmhouse.jpg"
							rounded
							style={{ width: 500, height: 400 }}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Contact;
