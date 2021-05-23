function SignIn(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({
                token:'5151991595421bsdbjsbd',
                user:{
                    name:'Bernardo',
                    email:'bernardo.sfs27@gmail.com'
                },
            })
        },2000)
    });
}
export default SignIn;