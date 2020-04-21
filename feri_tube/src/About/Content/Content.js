import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Content = (props) => {
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
                        <Typography align="justify" variant="h3">
                            O Feritubu
                        </Typography>
                        <Typography align="justify" variant="subtitle1">
                            Feritube je projekt, ki smo ga v okviru predmeta Sociološki in poklicni vidiki ustvarili
                            študentje 3. letnika programa Računalništvo in informacijske tehnologije (UN) Fakultete za
                            elektrotehniko, računalništvo in informatiko Univerze v Mariboru.
                            Namenjen je medštudentski pomoči, saj so na njem dostopni posnetki, ki študentom računalništva
                            olajšajo učenje različnih programskih jezikov. Platforma omogoča tudi prijavo ter nalaganje
                            novih videoposnetkov vsem študentom, ki si želijo svoje znanje deliti z ostalimi študenti.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Content;
