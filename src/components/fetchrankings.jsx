import React from 'react';
import { Container, Card, CardTitle, CardText, Row, Col, CardHeader } from 'reactstrap';

const RankingsList = (props) => {

    const { ranklists } = props;
    if (!ranklists || ranklists.length === 0) return <p></p>;

    return (
            <Row>
                {ranklists.map((ranklist) => {
                    
                    return (
                        <Col sm="6 my-2">
                            <Card className="text-light" color="transparent" text-dark body inverse>
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