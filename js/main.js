import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';

//CTRL
import DashCtrl from './ctrl/dash.ctrl';
import AddCharCtrl from './ctrl/add-char.ctrl';

//Config (Router)
import config from './config';


var appConfig = {
	apiKey: "AIzaSyBcDhfji5499fBObaKQtVj2fygUdaE0xiI",
	authDomain: "angularfire-ab896.firebaseapp.com",
	databaseURL: "https://angularfire-ab896.firebaseio.com",
	storageBucket: "",
};
firebase.initializeApp(appConfig);

angular
	.module('app', ['ui.router', 'firebase'])
	.config(config)
	.controller('DashCtrl', DashCtrl)
	.controller('AddCharCtrl', AddCharCtrl)

;


