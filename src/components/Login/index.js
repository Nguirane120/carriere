import React from 'react'
// import './Login.css'
import logo from './images/logo.png'

const Login = () => {
  return (
    <>
        <div className="container py-5">
            <div className=" py-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-body ">
                            
                            <form action="" className=" ml-5">
                                <header>CONNCTEZ_VOUS</header>
                                <div className="form-group mt-3 w-75 ">
                                    <input type="text" name="" id="" className="form-control myInput" />
                                </div>
                                <div className="form-group w-75">
                                    <input type="text" name="" id="" className="myInput form-control" />
                                </div>
                                <input type="button" value="CONNEXION" className='butt form-control w-75 text-success bg-dark' />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4text-center">
                                <img src={logo} alt="" className='img-fluid' />
                                <p className='text-success'>MIXITE FEWI</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login