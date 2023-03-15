import { Component } from 'react'
import styled from 'styled-components'

const MyComponentWrapper = styled.div`
  background-color: red,
  height: 30px,
  margin-bottom: 20px,
  text-align: center,
`

export default class MyComponent extends Component {
  componentDidMount() {
    // s'effectue le code juste après que le composant ai été monter dans le DOM
    console.log('==== 🛠️componentDidMount🛠️ ====')
    this.setState({ test: '' })
  }

  componentDidUpdate(prevProps, prevState) {
    // s'effectue après une mise à jour du state ou des props
    console.log('==== componentDidUpdate ====')
  }

  componentWillUnmount() {
    // s'effectue juste avec la mort du composant, quand il va être retiré du DOM
    console.log('==== 💀componentWillUnmount💀 ====')
  }

  render() {
    // Le code placé içi sera effectué à chaque fois que le composant est à nouveau render
    console.log('==== ✨render✨ ====')
    return <MyComponentWrapper>Mon composant 🤖</MyComponentWrapper>
  }
}
