import React from "react";
import {Text, View, StyleSheet, Button, ImageBackground} from "react-native";

export default class AppWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consumido: 0,
      status: "Ruim",
      porcentagem: 0
    }

    this.addML = this.addML.bind(this);
  }

  addML() {
    let s = this.state;

    if (s.consumido < 800) {
      s.status = "Ruim";
    } else if (s.consumido < 1200) {
      s.status = "Beba mais";
    } else if (s.consumido < 1600) {
      s.status = "Quase";
    } else if (s.consumido < 2000) {
      s.status = "Bom";
    } else if (s.consumido < 3000) {
      s.status = "Perfeito!";
    } else {
      s.status = "Cacildes!";
    }

    s.consumido += 200;

    s.porcentagem = Math.floor(s.consumido / 2000 * 100);
    this.setState(s);
  }

  

  render() {
    return(
      <View styles = {styles.body} >
        <ImageBackground source = {require("./assets/images/deletar.jpg")} style = {styles.imgFundo} >
          <View style = {styles.areaMetade} >
            <View style = {styles.areaTitulos}>
              <View>
                <Text style = {styles.titulos}>Meta</Text>
              </View>

              <View>
                <Text style = {styles.titulos}>Bebido</Text>
              </View>

              <View>
                <Text style = {styles.titulos}>Status</Text>
              </View>
            </View>

            <View style = {styles.areaDados} >
              <View>
                <Text style = {styles.dados} >2000ml</Text>
              </View>

              <View>
                <Text style = {styles.dados} >{this.state.consumido}ml</Text>
              </View>

              <View>
                <Text style = {styles.dados} >{this.state.status}</Text>
              </View>
            </View>

            <View style = {styles.areaBotao}>
              <Button title = "Adicionar 200ml" style = {styles.botaoAdd} onPress = {this.addML} />
            </View>
          </View>

          <View style = {styles.areaMetade} >
            <Text style = {styles.porcentagem} >{this.state.porcentagem}%</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },

  imgFundo: {
    height: "100%"
  },

  areaMetade: {
    flex: 1
  },

  areaTitulos: {
    flexDirection: "row",
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between"
  },

  titulos: {
    fontSize: 20,
    color: "rgb(32, 146, 216)",
    textAlign: "center"
  },

  areaDados: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },

  dados: {
    color: "rgb(30, 83, 216)",
    fontSize: 15,
    textAlign: "center"
  },

  areaBotao: {
    paddingTop: 50
  },

  porcentagem: {
    fontSize: 100,
    textAlign: "center",
    marginTop: 30,
    color: "white"
  }
});