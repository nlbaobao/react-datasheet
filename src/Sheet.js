import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Sheet extends PureComponent {
  render () {
    console.log(2222)

    return (
      <table className={this.props.className}>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    )
  }
}
console.log(1111)
Sheet.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired
}

export default Sheet
