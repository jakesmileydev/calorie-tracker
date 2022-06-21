import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<main>
			<section className="login">
				<form>
					<h1>Sign in to your account</h1>
					{/* <!-- email --> */}
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="email" required={true} />
					{/* <!-- password --> */}
					<label htmlFor="password">
						{' '}
						Password
						<Link className="reset-link" to="/reset">
							Forgot your password?
						</Link>{' '}
					</label>
					<input id="password" name="password" type="password" required={true} />
					{/* <!-- submit --> */}
					<button>Continue</button>
					{/* <!-- register --> */}
					<p>
						Don't have an account? <Link to="/register">Sign up</Link>
					</p>
				</form>
			</section>
		</main>
	);
}
