import { Link } from 'react-router-dom';

export default function Reset() {
	return (
		<main>
			<section className="reset">
				<form>
					<h1>Reset your password</h1>
					<p>
						It's okay, remembering stuff is hard. Enter your email address and we'll send you a link to reset your
						password.
					</p>
					{/* <!-- email --> */}
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="email" required={true} />
					{/* <!-- submit --> */}
					<button>Continue</button>
					{/* <!-- register --> */}
					<Link to="/">Return to sign in</Link>
				</form>
			</section>
		</main>
	);
}
