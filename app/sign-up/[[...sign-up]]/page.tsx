import {SignUp} from "@clerk/nextjs"

const SignUpPage = ()=>{
    return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" signInUrl="/sign-in"></SignUp>
}

export default SignUpPage