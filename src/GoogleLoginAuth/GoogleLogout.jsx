import { GoogleLogout } from "react-google-login"

const clientId = "309154112174-vifct4d5770e0omn649m856tl8qn2s2g.apps.googleusercontent.com "

const GoogleLogout = ()=> {

    const onSuccess = ()=> {
        console.log("Log out successfull!")
    }
    return(
        <div>
            <GoogleLogout clientId = {clientId}
                buttonText = {"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GoogleLogout