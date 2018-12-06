import React, { Component } from 'react'
import './App.css'
import { Button } from 'antd';


class App extends Component {
    state = {
        src: '',
        width: 500,
        height: 550
    }
    componentDidMount() {
        this.getImg()
    }
    getImg = () => {
        const {width,height} = this.state
        this.setState({
            src: `https://picsum.photos/${width}/${height}`
        })
    }

    setWidth = (e) => {
        this.setState({width: e.target.value})
    }
    setHeight = (e) => {
        this.setState({height: e.target.value})
    }
	render() {
		const { src,width,height } = this.state
		return (
			<div className="App">
            Width(1~2000): <input type="number"  defaultValue={width} onChange={this.setWidth} /> <br/><br/>
            Height(1~2000): <input type="number"   defaultValue={height} onChange={this.setHeight} /> <br/><br/>
				
                <Button type="danger" onClick={this.getImg} >get</Button> 
                
                <br/><br/>

                <img src={src} alt="" />
			</div>
		)
	}
}

export default App
