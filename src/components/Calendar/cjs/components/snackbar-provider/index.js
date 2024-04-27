"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SnackbarProvider = _interopRequireDefault(require("./SnackbarProvider"));
var _useSnackbar = require("./hooks/useSnackbar");
exports.useSnackbar = _useSnackbar.useSnackbar;
/**
 * @category Feedback
 * @subcategory Snackbar
 * @component
 *
 * @typedef {object} Snackbar
 *
 * @example <data>{"title": "App.jsx"}</data>
import React from "react";
import { Route } from "react-router-dom";
import { SnackbarProvider, App, ZMPRouter, AnimationRoutes} from "zmp-ui";
import HomePage from "./HomePage";

export default () => {
	return (
		<App>
				<SnackbarProvider>
					<ZMPRouter>
						<AnimationRoutes>
							<Route path="/" element={<HomePage />} />
						</AnimationRoutes>
					</ZMPRouter>
				</SnackbarProvider>
		</App>
	)
}
	* @example <data>{"title": "HomePage.jsx"}</data>
import React from "react";
import { useSnackbar, Button, Page } from "zmp-ui";
 
export default () => {
	const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
	const timerId = useRef();

	useEffect(() => {
		return () => {
			closeSnackbar();
			clearInterval(timerId.current);
		};
	}, []);

	return (
		<Page>
				<Button
					size="large"
					onClick={() => {
						let i = 0;
						timerId.current = setInterval(() => {
							if (i === 0) {
									openSnackbar({
											text: "download...",
											type: "download",
											duration: 10000000,
											onClose() {
													clearInterval(timerId.current);
											},
									});
							}
							if (i < 100) {
									// eslint-disable-next-line no-plusplus
									setDownloadProgress(++i);
							}
							if (i === 100) {
									setTimeout(() => {
											closeSnackbar();
											clearInterval(timerId.current);
									}, 1000);
							}
						}, 100);
				}}
			>
				Download Snackbar
			</Button>
			<Button
					size="large"
					onClick={() => {
						openSnackbar({
								text: "Snackbar...",
								action: {
									text: "close",
									close: true
								}
						});
					}}
			>
				Download Default Snackbar
			</Button>
		</Page>
	)
}
 */
var _default = exports.default = _SnackbarProvider.default;