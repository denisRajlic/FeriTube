import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Jumbotron = (props) => {
  return (
    <div>
      <Card style={{ backgroundColor: "#faf9f9" }}>
        <CardActionArea>
          <CardMedia
            style={{
              height: 300,
              width: 350,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: -90,
              marginTop: -90,
            }}
            image={require("../../Assets/logo4.png")}
          />
          <CardContent>
            <Typography align="justify" variant="subtitle1">
              FeriTube is an online platform for learning new technologies and languages (like Python, C++, Assembly...) in your programming journey. It's free to use for students as well as professors.              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Jumbotron;
