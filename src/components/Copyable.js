import React from "react"
import copyableStyles from "./Copyable.module.css"
class Copyable extends React.Component {
  handleDidCopy() {
    console.log("Copied content")
    this.setState({
      pop: "clip-pop",
    })
  }
  handleMouseOut() {
    if (this.state && this.state.pop) {
      this.setState({
        pop: null,
      })
    }
  }
  handleCopy() {
    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNode(this.sample)
    selection.empty()
    selection.addRange(range)

    if (document.execCommand("copy")) {
      this.handleDidCopy()
    } else {
      console.log("Copy failed")
    }
  }
  render() {
    try {
      const { pop } = this.state || {},
        classNames = `${copyableStyles.codeSample} ${pop || ""}`

      return (
        <div
          className={classNames}
          onClick={() => this.handleCopy()}
          onMouseOut={() => this.handleMouseOut()}
        >
          <Pre setRef={r => (this.sample = r)} text={this.props.text} />
          <FakeButton text="Copy" />
        </div>
      )
    } catch (e) {
      debugger
    }
  }
}

const FakeButton = ({ text, onMouseOut }) => (
  <div className={copyableStyles.clipButton} onMouseOut={onMouseOut}>
    {text}
  </div>
)
const Pre = ({ setRef, text }) => (
  <pre ref={setRef} dangerouslySetInnerHTML={{ __html: text }} />
)

export default Copyable
