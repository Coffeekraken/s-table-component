module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-{component-name}-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<div class="tf vr">
					<h3 class="m-b-small">
						Coffeekraken s-table-component
					</h3>
					<p class="m-b-bigger">
						Full stack table styling for your website supporting colored tables, striped, hover, interactive, responsive and more...
					</p>

					<h5>Default table</h5>
					<table class="table">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
						</tbody>
					</table>

					<h5>Colored table</h5>
					<table class="table table--primary">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
						</tbody>
					</table>

					<h5>Bordered table</h5>
					<table class="table table--secondary table--bordered">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
						</tbody>
					</table>

					<h5>Striped table</h5>
					<table class="table table--striped">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
						</tbody>
					</table>

					<h5>Colored, striped, bordered table</h5>
					<table class="table table--primary table--bordered table--striped">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
						</tbody>
					</table>

					<h5>Interactive table</h5>
					<table class="table table--interactive table--hover">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
							<tr>
								<td>item #1</td>
								<td>item #2</td>
								<td>item #3</td>
								<td>item #4</td>
							</tr>
						</tbody>
					</table>

					<h5>Responsive overflow table</h5>
					<div class="table table--responsive-overflow">
						<table>
							<thead>
								<tr>
									<th>Col #1</th>
									<th>Col #2</th>
									<th>Col #3</th>
									<th>Col #4</th>
									<th>Col #5</th>
									<th>Col #6</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>item #1</td>
									<td>item #2</td>
									<td>item #3</td>
									<td>item #4</td>
									<td>item #5</td>
									<td>item #6</td>
								</tr>
								<tr>
									<td>item #1</td>
									<td>item #2</td>
									<td>item #3</td>
									<td>item #4</td>
									<td>item #5</td>
									<td>item #6</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h5>Responsive table</h5>
					<table class="table table--responsive">
						<thead>
							<tr>
								<th>Col #1</th>
								<th>Col #2</th>
								<th>Col #3</th>
								<th>Col #4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td label="Col #1">item #1</td>
								<td label="Col #2">item #2</td>
								<td label="Col #3">item #3</td>
								<td label="Col #4">item #4</td>
							</tr>
							<tr>
								<td label="Col #1">item #1</td>
								<td label="Col #2">item #2</td>
								<td label="Col #3">item #3</td>
								<td label="Col #4">item #4</td>
							</tr>
						</tbody>
					</table>
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
				}
				@import 'index';
				// @import 'node_modules/coffeekraken-s-table-component/index';
				@include s-table-classes();
			`
		},
		js : null
	}
}
