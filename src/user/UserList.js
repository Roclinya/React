import React from 'react';
import { connect } from 'react-redux';
import actionCreators from './userActions'
//將actionCreators和Dispatch綁在一起
import { bindActionCreators } from 'redux'

class UserList extends React.Component {
     //actionCreators和Dispatch剛剛已綁在一起
     fetchData =()=> ({
        this.props.fetchUserList();
    })
    render() {
        const {isloading,userList}=this.props.user
  
        return (
               //  {isloading &&<div>Loading...</div>} 判斷isloading是正確才會執行
               //寫按下button才觸發抓loading狀態資料
            <div>
                <h1>userList</h1>
         
               {isloading &&<div>Loading...</div>}
               <button onclick={this.fetchData}>Fetch User Data</button>
               <div className="row">
               {userList.map(user => (
                   <div key={user.id} className="col-md-2">
                   <img alt={user.name} src = {user.avatar} />
                   {user.name}
                   <br />
                   {user.createAt}
                   </div>
               ))}
               </div>
            </div>
        )
    }
}

//回傳訂閱的內容object
const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    //將actionCreators和Dispatch綁在一起回傳
    ...bindActionCreators(actionCreators, dispatch),
    dispatch
})


export default connect(mapStateToProps, mapDispatchToProps)(UserList)
