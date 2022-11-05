module.exports.generateOrderRecivedTemplate = async (name, orderId, products, total) => {

    let orderdProducts = "";
    products.map(({ product, quantity }) => orderdProducts += `<tr valign="top">
                                                    <td width="60%" style=" font-size: 16px;line-height: 20px;word-break: normal;">
                                                        <p style="margin: 0;">
                                                            ${product.name}
                                                        </p>
                                                    </td>
                                                    <td
                                                        align="right"
                                                        style="
                                                            font-size: 16px;
                                                            line-height: 20px;
                                                            word-break: normal;
                                                            padding-top: 20px;
                                                            padding-right: 5px;
                                                        "
                                                    >
                                                        <p style="margin: 0;">
                                                            x${quantity}
                                                        </p>
                                                    </td>
                                                    <td align="right" style="font-size: 16px;line-height: 20px;word-break: normal;padding-top: 20px;">
                                                        <p style="margin: 0;">
                                                            $${product.price * quantity}
                                                        </p>
                                                    </td>
                                                </tr>`)

    return `
    
        
    <!DOCTYPE html>
<html
	lang="en"
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
>
	<head>
		<title>Welcome to Coded Mails</title>
		<!--[if !mso]><!-- -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			#outlook a {
				padding: 0;
			}
			body {
				margin: 0;
				padding: 0;
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
			}
			table,
			td {
				border-collapse: collapse;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}
			img {
				border: 0;
				height: auto;
				line-height: 100%;
				outline: none;
				text-decoration: none;
				-ms-interpolation-mode: bicubic;
			}
			p {
				display: block;
				margin: 13px 0;
			}
		</style>
		<link
			href="https://fonts.googleapis.com/css2?family=Alata&amp;display=swap"
			rel="stylesheet"
			type="text/css"
		/>
		<style type="text/css">
			@import url(https://fonts.googleapis.com/css2?family=Alata&amp;display=swap);
		</style>
		<!--<![endif]-->
		<style type="text/css">
			@media only screen and (min-width: 480px) {
				.mj-column-per-50 {
					width: 50% !important;
					max-width: 50%;
				}
				.mj-column-per-100 {
					width: 100% !important;
					max-width: 100%;
				}
			}
		</style>
		<style type="text/css">
			@media only screen and (max-width: 480px) {
				table.mj-full-width-mobile {
					width: 100% !important;
				}
				td.mj-full-width-mobile {
					width: auto !important;
				}
			}
		</style>
		<style type="text/css">
			a,
			span,
			td,
			th {
				-webkit-font-smoothing: antialiased !important;
				-moz-osx-font-smoothing: grayscale !important;
			}
			.hover:hover td,
			.hover:hover p,
			.hover:hover a {
				background-color: #d9433a !important;
			}
		</style>
	</head>
	<body
		style="background-color: #ffffff"
		data-new-gr-c-s-check-loaded="14.1086.0"
		data-gr-ext-installed=""
	>
		<div
			style="
				display: none;
				font-size: 1px;
				color: #ffffff;
				line-height: 1px;
				max-height: 0px;
				max-width: 0px;
				opacity: 0;
				overflow: hidden;
			"
		>
			Preview - Welcome to Coded Mails
		</div>
		<div style="background-color: #ffffff">
			<div style="margin: 0px auto; max-width: 600px">
				<table
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					role="presentation"
					style="width: 100%"
				>
					<tbody>
						<tr>
							<td
								style="
									direction: ltr;
									font-size: 0px;
									padding: 20px 0;
									padding-bottom: 0px;
									text-align: center;
								"
							>
								<div
									class="mj-column-per-50 mj-outlook-group-fix"
									style="
										font-size: 0px;
										text-align: left;
										direction: ltr;
										display: inline-block;
										vertical-align: middle;
										width: 100%;
									"
								>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="vertical-align: middle"
										width="100%"
									>
										<tbody>
											<tr>
												<td
													align="left"
													style="
														font-size: 0px;
														padding: 10px 25px;
														word-break: break-word;
													"
												>
													<table
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														style="
															border-collapse: collapse;
															border-spacing: 0px;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		width: 150px;
																	"
																>
																	<img
																		alt="image description"
																		height="auto"
																		src="https://codedmails.com/images/logo-black.png"
																		style="
																			border: 0;
																			display: block;
																			outline: none;
																			text-decoration: none;
																			height: auto;
																			width: 100%;
																			font-size: 14px;
																		"
																		width="150"
																	/>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div
									class="mj-column-per-50 mj-outlook-group-fix"
									style="
										font-size: 0px;
										text-align: left;
										direction: ltr;
										display: inline-block;
										vertical-align: middle;
										width: 100%;
									"
								>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="vertical-align: middle"
										width="100%"
									>
										<tbody>
											<tr>
												<td
													align="right"
													style="
														font-size: 0px;
														padding: 10px 25px;
														word-break: break-word;
													"
												>
													<table
														align="right"
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														style="
															float: none;
															display: inline-table;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		padding: 4px;
																	"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		role="presentation"
																		style="
																			border-radius: 3px;
																			width: 18px;
																		"
																	>
																		<tbody>
																			<tr>
																				<td
																					style="
																						font-size: 0;
																						height: 18px;
																						vertical-align: middle;
																						width: 18px;
																					"
																				>
																					<a
																						href="#"
																						target="_blank"
																						style="
																							color: #ea4a40;
																							text-decoration: none;
																						"
																					>
																						<img
																							alt="twitter-logo"
																							height="18"
																							src="https://codedmails.com/images/social/black/twitter-logo-transparent-black.png"
																							style="
																								border-radius: 3px;
																								display: block;
																							"
																							width="18"
																						/>
																					</a>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>

													<table
														align="right"
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														style="
															float: none;
															display: inline-table;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		padding: 4px;
																	"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		role="presentation"
																		style="
																			border-radius: 3px;
																			width: 18px;
																		"
																	>
																		<tbody>
																			<tr>
																				<td
																					style="
																						font-size: 0;
																						height: 18px;
																						vertical-align: middle;
																						width: 18px;
																					"
																				>
																					<a
																						href="#"
																						target="_blank"
																						style="
																							color: #ea4a40;
																							text-decoration: none;
																						"
																					>
																						<img
																							alt="facebook-logo"
																							height="18"
																							src="https://codedmails.com/images/social/black/facebook-logo-transparent-black.png"
																							style="
																								border-radius: 3px;
																								display: block;
																							"
																							width="18"
																						/>
																					</a>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>

													<table
														align="right"
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														style="
															float: none;
															display: inline-table;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		padding: 4px;
																	"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		role="presentation"
																		style="
																			border-radius: 3px;
																			width: 18px;
																		"
																	>
																		<tbody>
																			<tr>
																				<td
																					style="
																						font-size: 0;
																						height: 18px;
																						vertical-align: middle;
																						width: 18px;
																					"
																				>
																					<a
																						href="#"
																						target="_blank"
																						style="
																							color: #ea4a40;
																							text-decoration: none;
																						"
																					>
																						<img
																							alt="instagram-logo"
																							height="18"
																							src="https://codedmails.com/images/social/black/instagram-logo-transparent-black.png"
																							style="
																								border-radius: 3px;
																								display: block;
																							"
																							width="18"
																						/>
																					</a>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>

													<table
														align="right"
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														style="
															float: none;
															display: inline-table;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		padding: 4px;
																	"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		role="presentation"
																		style="
																			border-radius: 3px;
																			width: 18px;
																		"
																	>
																		<tbody>
																			<tr>
																				<td
																					style="
																						font-size: 0;
																						height: 18px;
																						vertical-align: middle;
																						width: 18px;
																					"
																				>
																					<a
																						href="#"
																						target="_blank"
																						style="
																							color: #ea4a40;
																							text-decoration: none;
																						"
																					>
																						<img
																							alt="instagram-logo"
																							height="18"
																							src="https://codedmails.com/images/social/black/linkedin-logo-transparent-black.png"
																							style="
																								border-radius: 3px;
																								display: block;
																							"
																							width="18"
																						/>
																					</a>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div style="margin: 0px auto; max-width: 600px">
				<table
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					role="presentation"
					style="width: 100%"
				>
					<tbody>
						<tr>
							<td
								style="
									direction: ltr;
									font-size: 0px;
									padding: 20px 0;
									text-align: center;
								"
							>
								<div
									class="mj-column-per-100 mj-outlook-group-fix"
									style="
										font-size: 0px;
										text-align: left;
										direction: ltr;
										display: inline-block;
										vertical-align: top;
										width: 100%;
									"
								>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="vertical-align: top"
										width="100%"
									>
										<tbody>
											<tr>
												<td
													align="center"
													style="
														font-size: 0px;
														padding: 10px 25px;
														word-break: break-word;
													"
												>
													<table
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														style="
															border-collapse: collapse;
															border-spacing: 0px;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		width: 550px;
																	"
																>
																	<img
																		alt="welcome image"
																		height="auto"
																		src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;h=400&amp;q=80"
																		style="
																			border: 0;
																			display: block;
																			outline: none;
																			text-decoration: none;
																			height: auto;
																			width: 100%;
																			font-size: 14px;
																		"
																		width="550"
																	/>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div style="margin: 0px auto; max-width: 600px">
				<table
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					role="presentation"
					style="width: 100%"
				>
					<tbody>
						<tr>
							<td
								style="
									direction: ltr;
									font-size: 0px;
									padding: 0 40px;
									text-align: center;
								"
							>
								<div style="margin: 0px auto; max-width: 520px">
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="width: 100%"
									>
										<tbody>
											<tr>
												<td
													style="
														direction: ltr;
														font-size: 0px;
														padding: 20px 0;
														text-align: center;
													"
												>
													<!--[if mso | IE]>
                                                                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                                                            <tr>
                                                                                                <td
                                                                                                    class="" style="vertical-align:top;width:520px;"
                                                                                                    >
                                                                                                    <![endif]-->
													<div
														class="mj-column-per-100 mj-outlook-group-fix"
														style="
															font-size: 0px;
															text-align: left;
															direction: ltr;
															display: inline-block;
															vertical-align: top;
															width: 100%;
														"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															role="presentation"
															style="
																vertical-align: top;
															"
															width="100%"
														>
															<tbody>
																<tr>
																	<td
																		align="left"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				font-family: Alata;
																				font-size: 18px;
																				font-weight: 400;
																				line-height: 24px;
																				text-align: left;
																				color: #000000;
																			"
																		>
																			<h1
																				style="
																					margin: 0;
																					font-size: 32px;
																					line-height: 40px;
																				"
																			>
																				Hi
																				${name}
																				<br />
																				Thank you for your order
																			</h1>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td
																		align="left"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				font-family: Alata;
																				font-size: 18px;
																				font-weight: 400;
																				line-height: 24px;
																				text-align: left;
																				color: #000000;
																			"
																		>
																			<p>
																				Your
																				order
																				(#${orderId})
																				was
																				successfully
																				placed
																				and
																				your
																				payment
																				has
																				been
																				processed.
																				Here
																				is
																				your
																				order
																				summary:
																			</p>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<!--[if mso | IE]>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                        <![endif]-->
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--[if mso | IE]>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        class="" width="600px"
                                                        >
                                                        <table
                                                            align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:520px;" width="520"
                                                            >
                                                            <tr>
                                                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                                                    <![endif]-->
								<div style="margin: 0px auto; max-width: 520px">
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="width: 100%"
									>
										<tbody>
											<tr>
												<td
													style="
														direction: ltr;
														font-size: 0px;
														padding: 0;
														text-align: center;
													"
												>
													<div
														class="mj-column-per-100 mj-outlook-group-fix"
														style="
															font-size: 0px;
															text-align: left;
															direction: ltr;
															display: inline-block;
															vertical-align: top;
															width: 100%;
														"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															role="presentation"
															style="
																vertical-align: top;
															"
															width="100%"
														>
															<tbody>
																<tr>
																	<td
																		align="left"
																		class="receipt-table"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<table
																			cellpadding="0"
																			cellspacing="0"
																			width="100%"
																			border="0"
																			style="
																				color: #000000;
																				font-family: Alata;
																				font-size: 14px;
																				line-height: 20px;
																				table-layout: auto;
																				width: 100%;
																				border: none;
																			"
																		>
																			<tbody>
                                                                            ${
                                                                                orderdProducts
                                                                            }
																				
																				
																				<tr>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							border-bottom-width: 1px;
																							border-bottom-color: #eaeeeb;
																							border-bottom-style: dashed;
																							padding-top: 10px;
																						"
																					></td>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							border-bottom-width: 1px;
																							border-bottom-color: #eaeeeb;
																							border-bottom-style: dashed;
																							padding-top: 10px;
																						"
																					></td>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							border-bottom-width: 1px;
																							border-bottom-color: #eaeeeb;
																							border-bottom-style: dashed;
																							padding-top: 10px;
																						"
																					></td>
																				</tr>
																				<tr>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 10px;
																						"
																					></td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 10px;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>Subtotal</small
																							>
																						</p>
																					</td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 10px;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>$${total}</small
																							>
																						</p>
																					</td>
																				</tr>
																				<tr>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 10px;
																						"
																					></td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 10px;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>Savings</small
																							>
																						</p>
																					</td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 10px;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>$0</small
																							>
																						</p>
																					</td>
																				</tr>
																				<tr>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																						"
																					></td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>Shipping</small
																							>
																						</p>
																					</td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>$0.00</small
																							>
																						</p>
																					</td>
																				</tr>
																				<tr>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																						"
																					></td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>Tax</small
																							>
																						</p>
																					</td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																						"
																					>
																						<p
																							style="
																								margin: 0;
																							"
																						>
																							<small
																								>$0.0</small
																							>
																						</p>
																					</td>
																				</tr>
																				<tr>
																					<td
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 20px;
																						"
																					></td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 20px;
																						"
																					>
																						<strong
																							>Total</strong
																						>
																					</td>
																					<td
																						align="right"
																						style="
																							font-size: 16px;
																							line-height: 20px;
																							word-break: normal;
																							padding-top: 20px;
																						"
																					>
																						<strong
																							>$${total}</strong
																						>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div style="margin: 0px auto; max-width: 520px">
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="width: 100%"
									>
										<tbody>
											<tr>
												<td
													style="
														direction: ltr;
														font-size: 0px;
														padding: 20px 0;
														text-align: center;
													"
												>
													<div
														class="mj-column-per-100 mj-outlook-group-fix"
														style="
															font-size: 0px;
															text-align: left;
															direction: ltr;
															display: inline-block;
															vertical-align: top;
															width: 100%;
														"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															role="presentation"
															style="
																vertical-align: top;
															"
															width="100%"
														>
															<tbody>
																<tr>
																	<td
																		align="left"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				font-family: Alata;
																				font-size: 14px;
																				font-weight: 400;
																				line-height: 24px;
																				text-align: left;
																				color: #333333;
																			"
																		>
																			Have
																			questions
																			or
																			need
																			help?
																			Email
																			us
																			at
																			<a
																				href="#"
																				style="
																					color: #ea4a40;
																					text-decoration: none;
																				"
																			>
																				hello@codedmails.com
																			</a>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div style="margin: 0px auto; max-width: 520px">
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="width: 100%"
									>
										<tbody>
											<tr>
												<td
													style="
														direction: ltr;
														font-size: 0px;
														padding: 0px;
														text-align: center;
													"
												>
													<div
														class="mj-column-per-100 mj-outlook-group-fix"
														style="
															font-size: 0px;
															text-align: left;
															direction: ltr;
															display: inline-block;
															vertical-align: top;
															width: 100%;
														"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															role="presentation"
															style="
																vertical-align: top;
															"
															width="100%"
														>
															<tbody>
																<tr>
																	<td
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<p
																			style="
																				border-top: solid
																					1px
																					#f4f4f4;
																				font-size: 1px;
																				margin: 0px
																					auto;
																				width: 100%;
																			"
																		></p>
																	</td>
																</tr>
																<tr>
																	<td
																		align="center"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				font-family: Alata;
																				font-size: 14px;
																				font-weight: 400;
																				line-height: 24px;
																				text-align: center;
																				color: #333333;
																			"
																		>
																			<a
																				class="footer-link"
																				href="#"
																				style="
																					text-decoration: none;
																					color: #000;
																				"
																				>Support</a
																			>
																			|

																			<a
																				class="footer-link"
																				href="#"
																				style="
																					text-decoration: none;
																					color: #000;
																				"
																				>Forums</a
																			>
																			|
																			<a
																				class="footer-link"
																				href="#"
																				style="
																					text-decoration: none;
																					color: #000;
																				"
																				>Contact</a
																			>
																			|
																			<a
																				class="footer-link"
																				href="#"
																				style="
																					text-decoration: none;
																					color: #000;
																				"
																				>Log
																				In</a
																			>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td
																		align="center"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<table
																			align="center"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation"
																			style="
																				float: none;
																				display: inline-table;
																			"
																		>
																			<tbody>
																				<tr>
																					<td
																						style="
																							padding: 4px;
																						"
																					>
																						<table
																							border="0"
																							cellpadding="0"
																							cellspacing="0"
																							role="presentation"
																							style="
																								border-radius: 3px;
																								width: 24px;
																							"
																						>
																							<tbody>
																								<tr>
																									<td
																										style="
																											font-size: 0;
																											height: 24px;
																											vertical-align: middle;
																											width: 24px;
																										"
																									>
																										<a
																											href="#"
																											target="_blank"
																											style="
																												color: #ea4a40;
																												text-decoration: none;
																											"
																										>
																											<img
																												alt="twitter-logo"
																												height="24"
																												src="https://codedmails.com/images/social/black/twitter-logo-transparent-black.png"
																												style="
																													border-radius: 3px;
																													display: block;
																												"
																												width="24"
																											/>
																										</a>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>

																		<table
																			align="center"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation"
																			style="
																				float: none;
																				display: inline-table;
																			"
																		>
																			<tbody>
																				<tr>
																					<td
																						style="
																							padding: 4px;
																						"
																					>
																						<table
																							border="0"
																							cellpadding="0"
																							cellspacing="0"
																							role="presentation"
																							style="
																								border-radius: 3px;
																								width: 24px;
																							"
																						>
																							<tbody>
																								<tr>
																									<td
																										style="
																											font-size: 0;
																											height: 24px;
																											vertical-align: middle;
																											width: 24px;
																										"
																									>
																										<a
																											href="#"
																											target="_blank"
																											style="
																												color: #ea4a40;
																												text-decoration: none;
																											"
																										>
																											<img
																												alt="facebook-logo"
																												height="24"
																												src="https://codedmails.com/images/social/black/facebook-logo-transparent-black.png"
																												style="
																													border-radius: 3px;
																													display: block;
																												"
																												width="24"
																											/>
																										</a>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>

																		<table
																			align="center"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation"
																			style="
																				float: none;
																				display: inline-table;
																			"
																		>
																			<tbody>
																				<tr>
																					<td
																						style="
																							padding: 4px;
																						"
																					>
																						<table
																							border="0"
																							cellpadding="0"
																							cellspacing="0"
																							role="presentation"
																							style="
																								border-radius: 3px;
																								width: 24px;
																							"
																						>
																							<tbody>
																								<tr>
																									<td
																										style="
																											font-size: 0;
																											height: 24px;
																											vertical-align: middle;
																											width: 24px;
																										"
																									>
																										<a
																											href="#"
																											target="_blank"
																											style="
																												color: #ea4a40;
																												text-decoration: none;
																											"
																										>
																											<img
																												alt="instagram-logo"
																												height="24"
																												src="https://codedmails.com/images/social/black/instagram-logo-transparent-black.png"
																												style="
																													border-radius: 3px;
																													display: block;
																												"
																												width="24"
																											/>
																										</a>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>

																		<table
																			align="center"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation"
																			style="
																				float: none;
																				display: inline-table;
																			"
																		>
																			<tbody>
																				<tr>
																					<td
																						style="
																							padding: 4px;
																						"
																					>
																						<table
																							border="0"
																							cellpadding="0"
																							cellspacing="0"
																							role="presentation"
																							style="
																								border-radius: 3px;
																								width: 24px;
																							"
																						>
																							<tbody>
																								<tr>
																									<td
																										style="
																											font-size: 0;
																											height: 24px;
																											vertical-align: middle;
																											width: 24px;
																										"
																									>
																										<a
																											href="#"
																											target="_blank"
																											style="
																												color: #ea4a40;
																												text-decoration: none;
																											"
																										>
																											<img
																												alt="dribbble-logo"
																												height="24"
																												src="https://codedmails.com/images/social/black/linkedin-logo-transparent-black.png"
																												style="
																													border-radius: 3px;
																													display: block;
																												"
																												width="24"
																											/>
																										</a>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td
																		align="center"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				font-family: Alata;
																				font-size: 14px;
																				font-weight: 400;
																				line-height: 24px;
																				text-align: center;
																				color: #333333;
																			"
																		>
																			123
																			Medalling
																			Jr.,
																			Suite
																			100,
																			Parrot
																			Park,
																			CA
																			12345<br />
																			©
																			2020
																			[Coded
																			Mails]
																			Inc.
																		</div>
																	</td>
																</tr>
																<tr>
																	<td
																		align="center"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				font-family: Alata;
																				font-size: 14px;
																				font-weight: 400;
																				line-height: 24px;
																				text-align: center;
																				color: #333333;
																			"
																		>
																			Update
																			your
																			<a
																				href="https://google.com"
																				style="
																					color: #ea4a40;
																					text-decoration: none;
																				"
																				>email
																				preferences</a
																			>
																			to
																			choose
																			the
																			types
																			of
																			emails
																			you
																			receive,
																			or
																			you
																			can
																			<a
																				href="https://google.com"
																				style="
																					color: #ea4a40;
																					text-decoration: none;
																				"
																			>
																				unsubscribe </a
																			>from
																			all
																			future
																			emails.
																		</div>
																	</td>
																</tr>
																<tr>
																	<td
																		align="center"
																		style="
																			font-size: 0px;
																			padding: 10px
																				25px;
																			word-break: break-word;
																		"
																	>
																		<table
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation"
																			style="
																				border-collapse: collapse;
																				border-spacing: 0px;
																			"
																		>
																			<tbody>
																				<tr>
																					<td
																						style="
																							width: 50px;
																						"
																					>
																						<img
																							alt="image description"
																							height="auto"
																							src="https://codedmails.com/images/logo-circle-gray.png"
																							style="
																								border: 0;
																								display: block;
																								outline: none;
																								text-decoration: none;
																								height: auto;
																								width: 100%;
																								font-size: 14px;
																							"
																							width="50"
																						/>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div style="margin: 0px auto; max-width: 520px">
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="width: 100%"
									>
										<tbody>
											<tr>
												<td
													style="
														direction: ltr;
														font-size: 0px;
														padding: 20px 0;
														text-align: center;
													"
												>
													<div
														class="mj-column-per-100 mj-outlook-group-fix"
														style="
															font-size: 0px;
															text-align: left;
															direction: ltr;
															display: inline-block;
															vertical-align: top;
															width: 100%;
														"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															role="presentation"
															style="
																vertical-align: top;
															"
															width="100%"
														>
															<tbody>
																<tr>
																	<td
																		style="
																			font-size: 0px;
																			word-break: break-word;
																		"
																	>
																		<div
																			style="
																				height: 1px;
																			"
																		></div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</body>
	<grammarly-desktop-integration
		data-grammarly-shadow-root="true"
	></grammarly-desktop-integration>
</html>


    `
} 