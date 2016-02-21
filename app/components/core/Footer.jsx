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
            		<Col xs={12} md={6} sm={6} lg={6}>Made with <span className="heart">&hearts;</span> by team <a className="team" href="http://tech-dojo.org" target="_blank">t e c h d o j o</a></Col>
            	</Row>
            </Grid>
            </div>
		)
	}

}

export default Footer;
