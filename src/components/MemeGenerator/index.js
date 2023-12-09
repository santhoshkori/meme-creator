import {Component} from 'react'
import {
  Heading,
  Inputcontainers,
  Maincontainer,
  Inputele,
  Label,
  Options,
  Select,
  Normalcnt,
  Button,
  Normalcnt1,
  Heading1,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontsize: 8,
    imgurl: '',
    topheading: '',
    bottomheading: '',
    genrate: false,
  }

  changeboolean = () => {
    this.setState({genrate: true})
  }

  getimgurl = event => {
    this.setState({imgurl: event.target.value})
  }

  changetopheading = event => {
    this.setState({topheading: event.target.value})
  }

  changebottomheading = event => {
    this.setState({bottomheading: event.target.value})
  }

  changeFontsize = event => {
    this.setState({fontsize: event.target.value})
  }

  render() {
    const {imgurl, topheading, bottomheading, genrate, fontsize} = this.state
    return (
      <Maincontainer>
        <Normalcnt>
          <Heading>Meme Generator</Heading>
          <Inputcontainers>
            <Label htmlFor="image">image URL</Label>
            <br />
            <Inputele
              id="image"
              type="text"
              value={imgurl}
              onChange={this.getimgurl}
            />
          </Inputcontainers>
          <Inputcontainers>
            <Label htmlFor="toptext">Top Text</Label>
            <br />
            <Inputele
              id="toptext"
              type="text"
              value={topheading}
              onChange={this.changetopheading}
            />
          </Inputcontainers>
          <Inputcontainers>
            <Label htmlFor="bottomtext">Bottom Text</Label>
            <br />
            <Inputele
              id="bottomtext"
              type="text"
              value={bottomheading}
              onChange={this.changebottomheading}
            />
          </Inputcontainers>
          <Inputcontainers>
            <Label htmlFor="options">Font Size</Label>
            <br />
            <Select onChange={this.changeFontsize}>
              {fontSizesOptionsList.map(eachfontsize => (
                <Options
                  value={eachfontsize.optionId}
                  key={eachfontsize.optionId}
                >
                  {eachfontsize.displayText}
                </Options>
              ))}
            </Select>
          </Inputcontainers>
          <Button type="button" onClick={this.changeboolean}>
            Generate
          </Button>
        </Normalcnt>
        {genrate ? (
          <Normalcnt1 image={imgurl}>
            <Heading1 size={fontsize}>{topheading}</Heading1>
            <Heading1 size={fontsize}>{bottomheading}</Heading1>
          </Normalcnt1>
        ) : (
          ''
        )}
      </Maincontainer>
    )
  }
}

export default MemeGenerator
