import { Card, Col, Divider, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} alt="foodimage" height={60} />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>
            {" "}
            Total Calories: {food.calories} * {food.servings}
          </b>
        </p>
        <Button onClick={() => deleteFood(food.name)} type="primary">
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
