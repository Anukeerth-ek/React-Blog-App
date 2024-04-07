import GoogleLogin, { GoogleLoginProps } from "react-google-login";

const clientId = "309154112174-vifct4d5770e0omn649m856tl8qn2s2g.apps.googleusercontent.com "

const GoogleLoginData = ()=> {

    const onSuccess = ()=> {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }
    const onFailure = ()=> {
        console.log("LOGIN FAILED! res:", res);
    }

    return (
        <div>
           <GoogleLogin clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
           />
        </div>
    )
}
export default GoogleLoginData