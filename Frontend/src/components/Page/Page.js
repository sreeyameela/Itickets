import './Page.css';

const Page = () => {
    return (
        <div className='container'>
            <div className="row rowclass">
                <div className="col-6" style={{ borderRight: '1px solid black' }}>
                    <h2 className="login-heading">Sign in to your account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <p className="forgot-pass">Forgot Password?</p>
                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="col-6">
                   <h2 className="login-heading">Register your account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input
                                type="name"
                                id="name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confpassword">Confirm Password</label>
                            <input
                                type="confpassword"
                                id="confpassword"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Page;