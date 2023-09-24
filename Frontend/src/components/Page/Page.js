import loginImage from '../../linkedin.svg'
import './Page.css';

const Page = () => {
    return (
        <div className='container'>
            <div className="row rowclass">
                <div className="col-6" style={{ borderRight: '1px solid black' }}>
                    <h5 className='headerlogin'>Find jobs through your community</h5>
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
                        <button type="submit" className="signup-button">
                            New to ITickets? Join Now
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    <img src={loginImage} class="login-image" alt="Login" />
                </div>
            </div>
        </div>

    )
}
export default Page;