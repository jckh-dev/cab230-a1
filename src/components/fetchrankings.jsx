import React from 'react';
import { Card, CardTitle, CardText, Row, Col, CardHeader } from 'reactstrap';

const RankingsList = (props) => {


    const { ranklists } = props;
    // error handling for empty return
    if (!ranklists || ranklists.length === 0) return <p></p>;

    return (
        <Row>
            {/* maps the data stored from the API request into formatted cards */}
            {ranklists.map((ranklist) => {

                return (
                    <Col sm="6 my-2">
                        <Card className="text-light" color="transparent" body inverse>
                            <CardHeader className="display-6">{ranklist.year}</CardHeader>
                            <CardTitle className="lead px-3 pt-3">Global Rank: {ranklist.rank}</CardTitle>
                            <CardText className="lead px-3">
                                Score: {ranklist.score}</CardText>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};
export default RankingsList;