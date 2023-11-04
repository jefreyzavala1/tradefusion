import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user"></SignUp>
}

export default SignUpPage
