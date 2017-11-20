import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Surface } from "gl-react-native";
import { Shaders, GLSL, Node } from "gl-react";
import Box from './Box';

const shaders = Shaders.create({
  helloGL: {
// This is our first fragment shader in GLSL language (OpenGL Shading Language)
// (GLSL code gets compiled and run on the GPU)
    frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
}
`
}
});

export default class App extends React.Component {

  render() {



    return (
      <View style={styles.container}>
        <Text style={styles.exptitle}>Experiment Name</Text>
        <View style={styles.imageholder}>
          <Surface style={styles.annotationSize}>
            <Node shader={shaders.helloGL} />
          </Surface>
        </View>
        <TouchableOpacity style={styles.buttonstyle}>
          <Text style={styles.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };



}

var styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#263238',
  },
  exptitle: {
    fontSize: 30,
    marginTop: '3%',
    color: 'white',
  },
  imageholder: {
    marginTop: '3%',
    height: '70%',
    width: '90%',
    backgroundColor: 'grey',
  },
  buttonstyle: {
    marginTop: '6%',
    padding: 10,
    backgroundColor: '#0091EA',
    width: '80%',
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
  annotationSize: {
    height: 40,
    width: 40,
    alignItems: 'center',
  },


})
