import Card from "react-bootstrap/Card";
import React from "react";



const ItemDetailContainer = ({ product }) => {
    
    
    return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100vw",
            justifyContent: "space-around",
          }}
        >
            
              <Card key={product.id} style={{ width: "18rem", margin: 20, height: "500px"}}>
                  <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            
        </div>
      );
    };
export default ItemDetailContainer;