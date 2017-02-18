import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Form from '../components/Form'
import {addVideo} from '../store/actions'

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: bindActionCreators(addVideo, dispatch)
  }
}

export default connect(undefined, mapDispatchToProps)(Form)
