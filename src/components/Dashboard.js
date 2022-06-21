export default function Dashboard() {
	return (
		<div className="day-body">
			<main className="day-main">
				<section className="day">
					<div className="container">
						{/* <!-- ------- --> */}
						{/* <!-- Calendar --> */}
						<div className="calendar">
							<div className="calendar-banner">
								<p className="calendar-banner__month">Mon, May 30</p>
								<span className="material-symbols-outlined calendar-banner__icon">calendar_month</span>
							</div>
						</div>

						{/* <!-- ------- --> */}
						{/* <!-- Summary --> */}
						<div className="summary">
							{/* <!-- calories --> */}
							<div className="summary__calories">
								<h2>Calories</h2>
								<svg width="120" height="120" viewBox="0 0 120 120">
									<circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" strokeWidth="12" />
									{/* <!-- stroke-dashoffset is the value subtracted from 100% --> */}
									<circle
										className="progress-ring__percentage"
										cx="60"
										cy="60"
										r="54"
										fill="none"
										stroke="#7a73ff"
										strokeWidth="12"
										pathLength="100"
										strokeDasharray="100"
										strokeDashoffset="44"
									/>
								</svg>
								<p>Today's calories:</p>
								<p className="summary__calories__remaining">
									<span>1536</span>/2600
								</p>
							</div>

							{/* <!-- macros --> */}
							<div className="summary__macros">
								<h2>Macros</h2>
								{/* <!-- bar graph --> */}
								<ul className="macros__graph">
									<li className="graph__row">
										<div>100g</div>
										<div className="graph-bar__protein"></div>
									</li>
									<li className="graph__row">
										<div>40g</div>
										<div className="graph-bar__carbs"></div>
									</li>
									<li className="graph__row">
										<div>60g</div>
										<div className="graph-bar__fat"></div>
									</li>
								</ul>
								{/* <!-- legend --> */}
								<ul className="macros-legend">
									<li className="legend__data legend__protein">
										<div>50%</div>
										<p>Protein</p>
									</li>
									<li className="legend__data legend__carbs">
										<div>20%</div>
										<p>Carbs</p>
									</li>
									<li className="legend__data legend__fat">
										<div>30%</div>
										<p>Fat</p>
									</li>
								</ul>
							</div>
						</div>

						{/* <!-- -------- --> */}
						{/* <!-- Add food --> */}
						<div className="add-food">
							{/* <!-- search bar --> */}
							<h2>Add Calories</h2>

							<p className="search-type">Search by food name or brand</p>
							<div className="search-bar">
								<span className="material-symbols-outlined"> search</span>

								<input placeholder="Search foods..." type="text" />
							</div>
							<ul className="search-results">
								<li>
									<div className="result__name">Pizza</div>
									<div className="result__calories">500 cals</div>
									<div className="result__brand">Costco</div>
									<div className="result__serving">1 slice</div>
								</li>
								<li>
									<div className="result__name">Pizza</div>
									<div className="result__calories">2200 cals</div>
									<div className="result__brand">Papa Murphy's</div>
									<div className="result__serving">1 large</div>
								</li>
								<li>
									<div className="result__name">Pepperoni Pizza</div>
									<div className="result__calories">432 cals</div>
									<div className="result__brand">Generic</div>
									<div className="result__serving">1 slice</div>
								</li>
								<li>
									<div className="result__name">Pizza - Supreme</div>
									<div className="result__calories">522 cals</div>
									<div className="result__brand">Mod Pizza</div>
									<div className="result__serving">1 slice</div>
								</li>
								<li>
									<div className="result__name">Pizza Rolls</div>
									<div className="result__calories">365 cals</div>
									<div className="result__brand">Totinos</div>
									<div className="result__serving">5 rolls</div>
								</li>
							</ul>

							<p className="add-food__or">or</p>

							{/* <!-- Add custom --> */}
							<p className="search-type">Add custom food item</p>
							<form className="add-food__custom">
								{/* <!-- food --> */}
								<label htmlFor="food-name">Food</label>
								<input id="food-name" required={true} name="food-name" type="text" />

								<div className="add-food__custom__row">
									{/* <!-- quantity --> */}
									<label htmlFor="food-quantity">Quantity</label>
									<label htmlFor="food-calories">Calories</label>
									{/* <!-- calories --> */}
									<input id="food-quantity" name="food-quantity" type="number" min="1" max="100" required={true} />
									<input id="food-calories" required={true} name="food-calories" type="text" />
								</div>

								{/* <!-- submit --> */}
								<button type="button">Add</button>
							</form>
						</div>

						{/* <!-- ------------ --> */}
						{/* <!-- Today's Food --> */}
						<div className="current-food">
							<h2>Today's Food</h2>
							<div className="current-food__header">
								<p>Name</p>
								<p>Qty</p>
								<p>Calories</p>
								{/* <!-- Hide these, just to take up space --> */}
								<span className="food__edit material-symbols-outlined" title="Edit">
									edit
								</span>
								<span className="food__delete material-symbols-outlined" title="Delete">
									delete
								</span>
							</div>
							<ul className="current-food__list">
								<li className="current-food__list-item">
									<p>Pizza</p>
									<div>3</div>
									<div>270</div>
									<span className="food__edit material-symbols-outlined" title="Edit">
										edit
									</span>
									<span className="food__delete material-symbols-outlined" title="Delete">
										delete
									</span>
								</li>
								<li className="current-food__list-item">
									<p>Eggs</p>
									<div>1</div>
									<div>90</div>
									<span className="food__edit material-symbols-outlined" title="Edit">
										edit
									</span>
									<span className="food__delete material-symbols-outlined" title="Delete">
										delete
									</span>
								</li>
								<li className="current-food__list-item">
									<p>Yogurt</p>
									<div>1</div>
									<div>140</div>
									<span className="food__edit material-symbols-outlined" title="Edit">
										edit
									</span>
									<span className="food__delete material-symbols-outlined" title="Delete">
										delete
									</span>
								</li>
								<li className="current-food__list-item">
									<p>Roaster Chicken</p>
									<div>1</div>
									<div>1200</div>
									<span className="food__edit material-symbols-outlined" title="Edit">
										edit
									</span>
									<span className="food__delete material-symbols-outlined" title="Delete">
										delete
									</span>
								</li>
							</ul>
						</div>
						{/* <!-- end container --> */}
					</div>
					{/* <!-- end day --> */}
				</section>
			</main>
		</div>
	);
}
