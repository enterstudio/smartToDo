import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class Footer extends React.Component {
    constructor(){
        super();

    }

	render(){
		return (
            <div className="footer">
            <Grid>
            	<Row>
            		<Col xs={12} md={6} sm={6} lg={6}>Awesome Footer</Col>
            	</Row>
            </Grid>
            </div>
		)
	}

}

export default Footer;
