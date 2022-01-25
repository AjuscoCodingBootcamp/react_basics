
const UserLogged = (props) => {
      return (
            <div>
                  <h2>Welcome user logged!</h2>
            </div>
      )
}

const UserNotRegistered = (props) => {
      return (
            <div>
                  <h2>Please Login to continue</h2>
            </div>
      )
}

const Login = (props) => {
      const isLogged = props.userLogin
      console.log(isLogged)

      if (isLogged) {
          return  <UserLogged/>
      } else {
           return <UserNotRegistered/>
      }
}

export {Login}