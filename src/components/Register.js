import { Link } from 'react-router-dom';

export default function Register() {
	return (
		<main className="register-main">
			<section className="register">
				<div className="grid-container">
					{/* <!-- reasons to sign up --> */}
					<aside>
						<ul>
							<li>
								<span className="register-icon material-symbols-outlined">done</span>
								<div>
									<h2>Take control of your health</h2>
									<p>All your nutrition data in one easy-to-use interface.</p>
								</div>
							</li>
							<li>
								<span className="register-icon material-symbols-outlined">done</span>
								<div>
									<h2>Track vitamins and macros</h2>
									<p>Our food search feature gets all the information about your food.</p>
								</div>
							</li>
							<li>
								<span className="register-icon material-symbols-outlined">done</span>
								<div>
									<h2>100% free to use</h2>
									<p>Unlike some other services, calorie tracker is free to use forever!</p>
								</div>
							</li>
						</ul>
					</aside>

					{/* <!-- create account form --> */}
					<form>
						<h1>Create your account</h1>
						{/* <!-- name --> */}
						<label htmlFor="name">Name</label>
						<input id="name" name="name" type="text" required={true} />
						{/* <!-- email --> */}
						<label htmlFor="email">Email</label>
						<input id="email" name="email" type="email" required={true} />
						{/* <!-- password --> */}
						<label htmlFor="password"> Password </label>
						<input id="password" name="password" type="password" required={true} />
						{/* <!-- submit --> */}
						<button>Create account</button>
						{/* <!-- register --> */}
						<p>
							Already have an account? <Link to="/">Sign In</Link>
						</p>
					</form>
				</div>
			</section>
		</main>
	);
}
