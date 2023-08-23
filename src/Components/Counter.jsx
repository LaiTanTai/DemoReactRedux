// "engines": {
  //   "npm":"6.14.9",
  //   "node":"14.15.2"
  // },
  // "homepage": "http://localhost:8080/DemoReact",

import { useContext } from 'react';
import { connect } from 'react-redux'
function Counter({count,increase,decrease}) {

    return (
        <div>
            <p>value : {count}</p>

            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      count: state.value
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      increase: () => dispatch({ type: 'counter/increase' }),
      decrease: () => dispatch({ type: 'counter/decrease' })
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Counter)