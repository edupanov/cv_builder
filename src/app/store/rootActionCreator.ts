import * as cvActionCreators from '../../app/components/pages/createCV/store/actionCreators/cvActionCreators'
import * as signUpActionCreators from '../components/auth/store/actionCreators/signUpActionCreators'


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
   ...cvActionCreators,
   ...signUpActionCreators
}