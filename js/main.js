import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';

//CTRL
import DashCtrl from './ctrl/dash.ctrl';
import AddCharCtrl from './ctrl/add-char.ctrl';
import EditCharCtrl from './ctrl/edit-char.ctrl';
import TestCtrl from './ctrl/test.ctrl';
import LoginCtrl from './ctrl/login.ctrl';
import ChatCtrl from './ctrl/chat.ctrl';

//Config (Router)
import config from './config';

//Services
import CharService from './services/char.service';

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
	.controller('EditCharCtrl', EditCharCtrl)
	.controller('TestCtrl', TestCtrl)
	.controller('LoginCtrl', LoginCtrl)
	.controller('ChatCtrl', ChatCtrl)
	.service('CharService', CharService)

;


